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
import extractAbstract from "./markdown/extractAbstract";
import slugify from "slugify";
import { rehypeCallout } from "./markdown/rehypeCallout";
import { remarkHighlight } from "./markdown/remarkHighlight";
import { remarkAbsoluteLink } from "./markdown/remarkAbsoluteLink";
import { remarkHideWikilink } from "./markdown/remarkHideWikilink";

/**
 *
 * @param {String} fileName
 * @returns {Promise<{html: string, slug: string} & Record<string,any>>}
 */
export async function process(fileName) {
  const str = await fs.readFile(`content/` + fileName, "utf8");

  const string = stripComments(str);

  let md = unified()
    .use(remarkParse)
    .use(remarkAbsoluteLink)
    .use(remarkFrontmatter)
    .use(remarkHideWikilink)
    .use(remarkExtractFrontmatter, { yaml: load })
    .use(remarkHighlight)
    .use(extractAbstract)
    .use(remarkRehype)
    .use(rehypeCallout)
    .use(rehypeExternalLinks, { rel: ["nofollow", "noopener", "noreferrer"] })
    .use(rehypeStringify);

  const processed = await md.process(string);
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

  if (!metadata.date && metadata.published) {
    throw new Error(`No date in ${fileName}`);
  }

  const mf2html = getMf2Markup(metadata) + html;
  if (metadata.published || dev) {
    return { html: mf2html, slug: fileName.slice(0, -3), ...metadata };
  } else {
    console.log(`Unpublished: ${fileName}, (${metadata.title}). Skipped.`);
  }
}

export function renderString(string) {
  string = stripComments(string);

  return unified()
    .use(remarkParse)
    .use(remarkHighlight)
    .use(remarkHideWikilink)
    .use(remarkAbsoluteLink)
    .use(remarkRehype)
    .use(rehypeExternalLinks, { rel: ["nofollow", "noopener", "noreferrer"] })
    .use(rehypeCallout)
    .use(rehypeStringify)
    .processSync(string)
    .toString("utf-8");
}

function stripComments(str) {
  const parts = str.split("%%").filter((part, i) => i % 2 === 0);
  return parts.join("");
}

function getMf2Markup(metadata) {
  let markup = "";

  if (metadata.reply_to) {
    markup += `<p>This post is in reply to <a class="u-in-reply-to" href="${metadata.reply_to}">${metadata.reply_to}</a></p>`;
  }
  if (metadata.like_of) {
    markup += `<p>Liked <a class="u-like-of" href="${metadata.like_of}">${metadata.like_of}</a></p>`;
  }

  if (markup) {
    return `<div class="mf2">${markup}</div>\n`;
  } else {
    return "";
  }
}
