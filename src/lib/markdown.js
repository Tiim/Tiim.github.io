import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkFrontmatter from "remark-frontmatter";
import remarkExtractFrontmatter from "remark-extract-frontmatter";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeExternalLinks from "rehype-external-links";
import { load } from "js-yaml";
import fs from "fs-extra";
import { dev } from "$app/env";
import { EXIT, visit } from "unist-util-visit";
import extractAbstract from "./markdown/extractAbstract";
import slugify from "slugify";

/**
 *
 * @param {String} fileName
 * @returns {Promise<{html: string, slug: string} & Record<string,any>>}
 */
const uuids = {};
export async function process(fileName) {
  const str = await fs.readFile(`content/` + fileName, "utf8");
  let md = unified()
    .use(remarkParse)
    .use(absoluteLinks)
    .use(remarkFrontmatter)
    .use(remarkExtractFrontmatter, { yaml: load })
    .use(extractAbstract)
    .use(remarkComment)
    .use(remarkRehype)
    .use(rehypeCallout)
    .use(rehypeExternalLinks, { rel: ["nofollow", "noopener", "noreferrer"] })
    .use(rehypeStringify);

  const processed = await md.process(str);
  /**
   * @type {Record<string, any>}
   */
  const metadata = processed.data;
  const html = processed.toString("utf-8");

  metadata.tags =
    metadata.content_tags
      ?.map((tag) => tag.toLowerCase())
      .map((tag) => slugify(tag)) ?? [];

  metadata.tags.sort();

  metadata.links = metadata.links?.map((link) => renderString(link));

  if (!metadata.uuid) {
    throw new Error(`⚠ No uuid found for ${fileName}`);
  }
  if (uuids[metadata.uuid] && uuids[metadata.uuid] !== fileName) {
    throw new Error(
      `⚠ UUID collision between ${fileName} and ${uuids[metadata.uuid]}`
    );
  }
  uuids[metadata.uuid] = fileName;

  if (metadata.published || dev) {
    return { html, slug: fileName.slice(0, -3), ...metadata };
  } else {
    console.log(`Unpublished: ${fileName}, (${metadata.title}). Skipped.`);
  }
}

export function renderString(string) {
  return unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(absoluteLinks)
    .use(rehypeExternalLinks, { rel: ["nofollow", "noopener", "noreferrer"] })
    .use(rehypeStringify)
    .processSync(string)
    .toString("utf-8");
}

function absoluteLinks() {
  return (tree) => {
    visit(tree, "link", (node) => {
      if (!node.url) {
        return;
      }
      if (node.url.startsWith("/")) {
        node.url = `https://tiim.ch${node.url}`;
      } else if (node.url.startsWith("#")) {
        node.url === node.url;
      } else if (!/^[a-zA-Z]{1,20}:/.test(node.url)) {
        node.url = `https://tiim.ch/${node.url}`;
      }
    });
  };
}

function remarkComment() {
  return function transformer(ast) {
    visit(ast, "text", (node) => {
      const split = node.value.split("%%");
      if (split.length == 1) {
        return;
      }
      const newValue = split
        .map((value, i) => {
          if (i % 2 === 0) {
            return value;
          }
          return "";
        })
        .join("");

      node.value = newValue;
    });
  };
}

function rehypeCallout() {
  const calloutRegex = /^\[!(.*?)\]/;
  return function transformer(ast) {
    visit(ast, { type: "element", tagName: "blockquote" }, (node) => {
      let type;
      visit(node, { type: "element", tagName: "p" }, (pnode, i, parent) => {
        if (!pnode.children.length || pnode.children[0].type !== "text") {
          return EXIT;
        }
        const tnode = pnode.children[0];
        const textValue = tnode.value.trim();
        if (!textValue) {
          return EXIT;
        }
        const match = textValue.match(calloutRegex);
        if (!match) {
          return EXIT;
        }
        console.log(parent, pnode);
        type = match[1].toLowerCase();
        const text = textValue.replace(calloutRegex, "").trim().split("\n");
        const title = text.shift().trim();
        const content = text.join("\n").trim();
        const newElements = [
          {
            type: "element",
            tagName: "span",
            properties: { className: "callout-title" },
            children: [
              {
                type: "element",
                tagName: "span",
                properties: { className: "callout-icon" },
              },
              { type: "text", value: title },
            ],
          },
          {
            type: "element",
            tagName: "p",
            children: [{ type: "text", value: content }],
          },
        ];
        parent.children.splice(i, 1, ...newElements);

        return EXIT;
      });
      if (!type) {
        return;
      }
      node.properties.className = node.properties.className ?? [];
      node.properties.className.push(`callout`);
      node.properties.className.push(`callout-${type}`);
    });
  };
}
