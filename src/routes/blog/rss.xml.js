import fs from "fs-extra";
import { process } from "$lib/markdown.js";
import { Feed } from "feed";
import remoteImages from "$content/remote-images.json";

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

  var feed = new Feed({
    title: "Tim Bachmann's Blog",
    description:
      "Blog about web development, programming, and anything that might interest me.",
    id: "https://tiim.ch/",
    link: "https://tiim.ch/",
    language: "en",
    image: remoteImages.favicon.link,
    favicon: remoteImages.favicon.link,
    copyright: "Tim Bachmann",
    updated: new Date(),
    feedLinks: {
      rss: "https://tiim.ch/blog/rss.xml",
    },
    author: {
      name: "Tim Bachmann",
      email: "hey@tiim.ch",
      link: "https://tiim.ch/",
    },
  });
  feed.add;

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `https://tiim.ch/${post.slug}`,
      link: `https://tiim.ch/${post.slug}`,
      description: post.description,
      content: post.html,
      category: post.tags.map((t) => ({ name: t, term: t })),
      author: [
        {
          name: "Tim Bachmann",
          email: "hey@tiim.ch",
          link: "https://tiim.ch/",
        },
      ],
      date: new Date(post.date),
      image: `https://tiim.ch${post.cover_image}`,
    });
  });

  return {
    body: feed.rss2(),
    headers: {
      "Content-Type": "text/xml; charset=utf-8",
    },
  };
}
