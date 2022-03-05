import MarkdownIt from "markdown-it";
import FrontMatter from "markdown-it-front-matter";
import fs from "fs-extra";
import yaml from "js-yaml";
import { dev } from "$app/env";

export async function process(fileName, options = {}) {
  const opt = { blog: true, ...options };

  const str = await fs.readFile(`content/` + fileName, "utf8");
  const md = new MarkdownIt({ html: true });
  let metadata = {};
  md.use(FrontMatter, (fm) => {
    metadata = yaml.load(fm);
  });

  const html = md.render(str);

  if (!metadata.date && opt.blog) {
    throw new Error("MD file " + fileName + " has no date!");
  }

  metadata.tags.sort();

  if (metadata.published || dev) {
    return { html, slug: fileName.slice(0, -3), ...metadata };
  }
}

export function renderString(string) {
  const md = new MarkdownIt();
  return md.render(string);
}
