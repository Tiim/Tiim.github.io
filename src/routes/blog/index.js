import fs from "fs-extra";
import { process } from "$lib/markdown.js";

export async function get() {
  const dir = await fs.readdir(`content/blog`);
  let posts = (
    await Promise.all(
      dir
        .filter((fileName) => /.+\.md$/.test(fileName))
        .map(async (fileName) => {
          const data = await process("blog/" + fileName);
          return data;
        })
    )
  ).filter((p) => p);
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return {
    body: { posts },
  };
}
