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
import { visit } from "unist-util-visit";
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
    .use(remarkRehype)
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
        console.log(`Root link found: ${node.url}`);
        node.url = `https://tiim.ch${node.url}`;
      } else if (node.url.startsWith("#")) {
        node.url === node.url;
      } else if (!/^[a-zA-Z]{1,20}:/.test(node.url)) {
        console.log(`Relative link found: ${node.url}`);
        node.url = `https://tiim.ch/${node.url}`;
      }
    });
  };
}
