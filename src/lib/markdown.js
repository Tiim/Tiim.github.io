import { remark } from "remark";
import remarkHtml from "remark-html";
import remarkFrontmatter from "remark-frontmatter";
import remarkExtractFrontmatter from "remark-extract-frontmatter";
import { load } from "js-yaml";
import fs from "fs-extra";
import { dev } from "$app/env";

/**
 *
 * @param {String} fileName
 * @returns {Promise<{html: string, slug: string} & Record<string,any>>}
 */
export async function process(fileName) {
  const str = await fs.readFile(`content/` + fileName, "utf8");
  const md = remark()
    .use(remarkHtml)
    .use(remarkFrontmatter)
    .use(remarkExtractFrontmatter, { yaml: load });

  const processed = await md.process(str);
  /**
   * @type {Record<string, any>}
   */
  const metadata = processed.data;
  const html = processed.toString("utf-8");

  metadata.tags?.sort();

  if (metadata.published !== false || dev) {
    return { html, slug: fileName.slice(0, -3), ...metadata };
  }
}

export function renderString(string) {
  return remark().use(remarkHtml).processSync(string).toString("utf-8");
}
