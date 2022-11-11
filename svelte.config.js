import adapter from "@sveltejs/adapter-static";
const dev = process.env.NODE_ENV === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    paths: {
      base: dev ? "" : "",
    },
    adapter: adapter(),
    prerender: {
      default: true,
      crawl: true,
      enabled: true,
      entries: [
        "*",
        "/projects",
        "/blog",
        "/blog/rss.xml",
        "/full-rss.xml",
        "/tags",
        "/mf2",
      ],
      onError: "fail",
    },
  },
};

export default config;
