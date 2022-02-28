import MarkdownIt from "markdown-it";
import FrontMatter from "markdown-it-front-matter";
import fs from "fs-extra";
import yaml from "js-yaml";

export async function process(fileName) {
  const str = await fs.readFile(`content/blog/` + fileName, "utf8");
  const md = new MarkdownIt({ html: true });
  let metadata = {};
  md.use(FrontMatter, (fm) => {
    metadata = yaml.load(fm);
  });

  const html = md.render(str);

  if (!metadata.date) {
    throw new Error("MD file " + fileName + " has no date!");
  }

  if (metadata.published) {
    return { html, slug: fileName.slice(0, -3), ...metadata };
  }
}
