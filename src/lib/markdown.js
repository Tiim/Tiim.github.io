import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkFrontmatter from "remark-frontmatter";
import remarkExtractFrontmatter from "remark-extract-frontmatter";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeExternalLinks from "rehype-external-links";
import { load } from "js-yaml";
import fs from "fs-extra";
import { dev } from "$app/environment";
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

  // err when we use date without time value, for all entries after 2023-01-29
  const d = metadata.date;
  if (
    d &&
    d.getTime() > new Date("2023-01-29T08:45:25.000Z").getTime() &&
    d.getUTCHours() === 0 &&
    d.getUTCMinutes() === 0 &&
    d.getUTCSeconds() === 0
  ) {
    console.log(d);
    throw new Error(
      `No time value in date frontmatter, (the time is midnight): ${fileName}`
    );
  }

  if (!metadata.cover_image) {
    metadata.cover_image = metadata.photos?.[0]?.url;
  }

  const mf2 = getMf2Markup(metadata, html);
  const mf2html = mf2.markup;
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

function getMf2Markup(metadata, html) {
  let prefixMarkup = "";
  let suffixMarkup = "";
  let summary = "";
  if (metadata.in_reply_to) {
    const reply = metadata.in_reply_to;
    prefixMarkup += `<p>This post is in reply to "<a class="u-in-reply-to" href="${
      reply.url
    }">${reply.name || reply.author?.name || reply.url}</a>"</p>`;
    summary += `💬 In reply to: ${
      reply.name || reply.author?.name || reply.url
    }`;
  }
  if (metadata.like_of) {
    const like = metadata.like_of;
    prefixMarkup += `<p>Liked <a class="u-like-of" href="${like.url}">${
      like.name || like.content || like.url
    }</a></p>`;
    summary += `👍 Liked: ${like.name || like.content || like.url}`;
  }
  if (metadata.repost_of) {
    const repost = metadata.repost_of;
    prefixMarkup += `<p>Reposted <a class="u-repost-of" href="${repost.url}">${
      repost.name || repost.url
    }</a></p>`;
    summary += `♺Shared: ${repost.name || repost.url}`;
  }
  if (metadata.rsvp) {
    prefixMarkup += `<p>RSVP: <span class="p-rsvp">${metadata.rsvp}</span></p>`;
    summary += `💌 RSVP: ${metadata.rsvp}`;
  }
  if (metadata.syndication && metadata.syndication.length) {
    if (typeof metadata.syndication === "string") {
      metadata.syndication = [metadata.syndication];
    }
    suffixMarkup += `<blockquote class="syndication">This post is also on <ul>`;
    metadata.syndication.forEach((syndication) => {
      const url = new URL(syndication);
      suffixMarkup += `<li><a class="u-syndication" href="${syndication}">${url.hostname}</a></li>`;
    });
    suffixMarkup += `</ul></blockquote>`;
  }

  if (prefixMarkup) {
    prefixMarkup = `<div class="mf2">${prefixMarkup}</div>\n`;
    html = prefixMarkup + html;
  }
  if (suffixMarkup) {
    suffixMarkup = `<div class="mf2">${suffixMarkup}</div>\n`;
    html = html + suffixMarkup;
  }

  return { markup: html, summary };
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
