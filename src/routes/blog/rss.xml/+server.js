import { Feed } from "feed";
import remoteImages from "$content/links.json";
import { getContent } from "$lib/content";

export async function GET() {
  const posts = (await getContent()).allBlogPosts;

  var feed = new Feed({
    title: "Tim Bachmann's Blog",
    description:
      "Blog about web development, programming, and anything that might interest me.",
    id: "https://tiim.ch/",
    link: "https://tiim.ch/",
    language: "en",
    image: remoteImages.favicon,
    favicon: remoteImages.favicon,
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
    let image = post.cover_image.trim();
    if (!image.startsWith("http")) {
      image = `https://tiim.ch/${image}`;
    }

    feed.addItem({
      title: post.title,
      id: `https://tiim.ch/${post.slug}`,
      link: `https://tiim.ch/${post.slug}`,
      description: post.description,
      content: post.html + "\n" + css,
      category: post.tags.map((t) => ({ name: t, term: t })),
      author: [
        {
          name: "Tim Bachmann",
          email: "hey@tiim.ch",
          link: "https://tiim.ch/",
        },
      ],
      date: new Date(post.modified || post.date),
      published: new Date(post.date),
      image,
    });
  });

  const headers = new Headers();
  headers.append("Content-Type", "text/xml; charset=utf-8");
  return new Response(feed.rss2(), { headers });
}

const css = `
<style>
* {
  box-sizing: border-box;
}
.callout {
  padding: 0;
  padding-bottom: 0.5rem;
  border-left: 4px solid rgba(68, 138, 255, 1);
}
.callout > * {
  padding-left: 1rem;
  padding-right: 1rem;
}
.callout-title {
  display: flex;
  align-items: center;
  width: 100%;
  font-weight: bold;
  background-color: rgba(68, 138, 255, 0.2);
  padding: 0.5rem 1rem;
  gap: 1rem;
}
.callout-icon {
  width: 1.2rem;
  height: 1.2rem;
  margin: 0 !important;
  padding: 0;
  fill: currentColor;
  opacity: 0.4;
}
</style>
`;
