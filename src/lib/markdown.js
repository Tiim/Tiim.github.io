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

  if (fileName.startsWith("mf2/")) {
    metadata.published = true;
    metadata.type = getPostType(metadata);
  } else {
    metadata.type = "article";
  }

  if (!metadata.date && metadata.published) {
    throw new Error(`No date in ${fileName}`);
  }

  if (!metadata.cover_image) {
    metadata.cover_image = metadata.photos?.[0]?.url;
  }

  const mf2 = getMf2Markup(metadata);
  const mf2html = mf2.markup + html;
  if (!metadata.description) {
    metadata.description = mf2.summary;
  }
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
  let summary = "";
  if (metadata.in_reply_to) {
    const reply = metadata.in_reply_to;
    markup += `<p>This post is in reply to a <a class="u-in-reply-to" href="${
      reply.url
    }">${reply.name || reply.author.name || reply.url}</a></p>`;
    summary += `💬In reply to: ${reply.name || reply.author.name || reply.url}`;
  }
  if (metadata.like_of) {
    const like = metadata.like_of;
    markup += `<p>Liked <a class="u-like-of" href="${like.url}">${
      like.name || like.content || like.url
    }</a></p>`;
    summary += `👍Liked: ${like.name || like.content || like.url}`;
  }
  if (metadata.repost_of) {
    const repost = metadata.repost_of;
    markup += `<p>Reposted <a class="u-repost-of" href="${repost.url}">${
      repost.name || repost.url
    }</a></p>`;
    summary += `♺Shared: ${repost.name || repost.url}`;
  }
  if (metadata.rsvp) {
    markup += `<p>RSVP: <span class="p-rsvp">${metadata.rsvp}</span></p>`;
    summary += `💌RSVP: ${metadata.rsvp}`;
  }

  if (markup) {
    return { markup: `<div class="mf2">${markup}</div>\n`, summary };
  } else {
    return { markup: "", summary };
  }
}

// https://indieweb.org/post-type-discovery
function getPostType(metadata) {
  if (["yes", "no", "maybe", "interested"].includes(metadata.rsvp)) {
    return "rsvp";
  } else if (metadata.in_reply_to) {
    return "reply";
  } else if (metadata.repost_of) {
    return "repost";
  } else if (metadata.like_of) {
    return "like";
  } else if (metadata.photo?.url) {
    return "photo";
  }
  return "note";
}
