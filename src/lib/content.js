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
  content = {
    allBlogPosts,
    blogMap,
    pages,
    projects,
  };

  return content;
}

async function loadProjects() {
  const projects = await loadMarkdownFolder("projects");

  console.log(projects);

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
  return files.filter((p) => p);
}
