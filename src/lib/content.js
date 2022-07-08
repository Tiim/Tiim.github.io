import { dev } from "$app/env";
import fs from "fs-extra";
import { process } from "./markdown";

let content = null;
export async function getContent() {
  if (content && !dev) {
    return content;
  }

  const allBlogPosts = await loadBlogPosts();

  const pages = await loadPages();
  const projects = await loadProjects();
  const comments = await loadComments();

  const tags = await loadTags(allBlogPosts, projects);
  const tagsMap = blogPostsToTagMap(allBlogPosts, projects);

  addCommentsToPosts(comments, allBlogPosts, projects, pages);

  const contentMap = postsToMap(allBlogPosts, projects, pages);

  content = {
    allBlogPosts,
    pages,
    projects,
    tags,
    tagsMap,
    contentMap,
    comments: comments.commentMap,
  };

  return content;
}

function addCommentsToPosts({ commentMap, latest }, ...posts) {
  posts.flat().forEach((post) => {
    post.comments = commentMap[post.uuid] || [];
    post.latestComment = latest;
  });
}

async function loadComments() {
  const url = dev
    ? "http://localhost:8080/comment"
    : "https://comments.tiim.ch/comment";
  const comments = await fetch(url)
    .then((res) => res.json())
    .catch(() => []);

  const latest = comments[0]?.timestamp ?? new Date("2000-01-01");
  const commentMap = comments.reduce(
    (acc, comment) => ({
      ...acc,
      [comment.page]: [...(acc[comment.page] || []), comment],
    }),
    {}
  );
  return { commentMap, latest };
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
  return pages;
}

async function loadBlogPosts() {
  const posts = await loadMarkdownFolder("blog");
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts;
}

function postsToMap(...posts) {
  const allPosts = posts.flat();
  return allPosts.reduce((acc, post) => {
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
