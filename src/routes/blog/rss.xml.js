import fs from "fs-extra";
import { process } from "$lib/markdown.js";
import rss from "rss";

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

  var feed = new rss({
    title: "Tim Bachmann's Blog",
    description:
      "Blog about web development, programming, and anything that might interest me.",
    feed_url: "https://tiim.ch/blog/rss.xml",
    site_url: "https://tiim.ch/",
    image_url: "https://github.com/Tiim.png",
    managingEditor: "Tim Bachmann",
    webMaster: "Tim Bachmann",
    copyright: "Tim Bachmann",
    language: "en",
    pubDate: new Date(),
    ttl: 60 * 24,
  });

  posts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.html,
      url: `https://tiim.ch/blog/${post.slug}`,
      guid: `https://tiim.ch/blog/${post.slug}`,
      categories: post.tags,
      author: "Tim Bachmann",
      date: post.date,
    });
  });

  return {
    body: feed.xml({ indent: true }),
  };
}
