import fs from "fs-extra";
import { process } from "$lib/markdown.js";

export async function get() {
  const dir = await fs.readdir(`content/blog`);
  let posts = dir
    .filter((fileName) => /.+\.md$/.test(fileName))
    .map(async (fileName) => {
      const data = await process(fileName);
      return data;
    });
  let body = await (await Promise.all(posts)).filter((p) => p);

  body.sort((a, b) => new Date(b.date).getDate() - new Date(a.date).getDate());

  return {
    body,
  };
}
