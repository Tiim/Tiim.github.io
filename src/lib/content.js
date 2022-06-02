import { dev } from "$app/env";
import fs from "fs-extra";
import { process } from "./markdown";

let content = null;
export async function getContent() {
  if (content && !dev) {
    return content;
  }

  const allBlogPosts = await loadBlogPosts();
  const blogMap = blogPostsToMap(allBlogPosts);
  const pages = await loadPages();
  const projects = await loadProjects();
  const tags = await loadTags(allBlogPosts, projects);
  const tagsMap = blogPostsToTagMap(allBlogPosts, projects);

  content = {
    allBlogPosts,
    blogMap,
    pages,
    projects,
    tags,
    tagsMap,
  };

  return content;
}

function blogPostsToTagMap(...posts) {
  const allPosts = posts.flat();
  return allPosts.reduce((acc, post) => {
    post.tags.forEach((tag) => {
      if (!acc[tag]) {
        acc[tag] = [];
      }
      acc[tag].push(post);
    });
    return acc;
  }, {});
}

async function loadTags(...posts) {
  const allPosts = posts.flat();
  const tags = [
    ...new Set(
      allPosts
        .map((post) => post.tags)
        .flat()
        .filter((tag) => tag)
        .map((tag) => tag.toLowerCase())
    ),
  ];
  const tagsData = (await loadMarkdownFolder("tags"))
    .map((td) => ({
      ...td,
      tag: td.slug.split("/").pop().toLowerCase(),
    }))
    .reduce((acc, tag) => {
      acc[tag.tag] = tag;
      return acc;
    }, {});

  return tags.map((tag) => tagsData[tag] || { tag });
}

async function loadProjects() {
  const projects = await loadMarkdownFolder("projects");
  return projects;
}

async function loadPages() {
  const pages = await loadMarkdownFolder("pages");
  return pages.reduce((acc, page) => {
    acc[page.slug] = page;
    return acc;
  }, {});
}

async function loadBlogPosts() {
  const posts = await loadMarkdownFolder("blog");
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts;
}

function blogPostsToMap(allBlogPosts) {
  return allBlogPosts.reduce((acc, post) => {
    acc[post.slug] = post;
    return acc;
  }, {});
}

async function loadMarkdownFolder(folder) {
  const dir = await fs.readdir("content/" + folder);
  const files = await Promise.all(
    dir
      .filter((fileName) => /.+\.md$/.test(fileName))
      .map(async (fileName) => {
        const data = await process(folder + "/" + fileName);
        return data;
      })
  );
  return files.filter((p) => p).map((p) => ({ ...p, type: folder }));
}
