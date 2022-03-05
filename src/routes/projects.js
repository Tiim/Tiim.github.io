import fs from "fs-extra";
import { process, renderString } from "$lib/markdown.js";

export async function get() {
  const dir = await fs.readdir(`content/projects`);
  let posts = dir
    .filter((fileName) => /.+\.md$/.test(fileName))
    .map(async (fileName) => {
      const data = await process("projects/" + fileName, { blog: false });
      return data;
    });
  let body = (await Promise.all(posts)).filter((p) => p);
  body = body.map((p) => ({
    ...p,
    links: p.links.map((l) => renderString(l)),
  }));
  const sections = groupBy(body);
  return {
    body: { sections },
  };
}

function groupBy(array) {
  const group = array.reduce(
    (p, c) => ({
      ...p,
      [c.section]: p[c.section] ? [...p[c.section], c] : [c],
    }),
    {}
  );
  const sections = Object.keys(group).map((k) => ({
    section: k,
    values: group[k],
  }));
  sections.sort(compare);
  return sections;
}

function compare(a, b) {
  if (a.section < b.section) {
    return -1;
  }
  if (a.section > b.section) {
    return 1;
  }
  return 0;
}
