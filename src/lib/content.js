import { dev } from "$app/env";
import { process } from "./markdown";
import mf2 from "$content/mf2.json";
import recursiveReadDir from "recursive-readdir";

let content = null;
export async function getContent() {
  if (content && !dev) {
    return content;
  }

  const allBlogPosts = await loadBlogPosts();

  const pages = await loadPages();
  const projects = await loadProjects();
  const comments = await loadComments();
  const meta = postsToMap(await loadMetadata());
  const notes = await loadNotes();

  const tags = await loadTags(allBlogPosts, projects, notes);
  const tagsMap = blogPostsToTagMap(allBlogPosts, projects, notes);

  addCommentsToPosts(comments, allBlogPosts, projects, pages, notes);

  const contentMap = postsToMap(allBlogPosts, projects, pages, notes);

  content = {
    allBlogPosts,
    pages,
    projects,
    tags,
    tagsMap,
    contentMap,
    comments: comments.commentMap,
    meta,
    mf2,
    notes,
  };

  return content;
}

function addCommentsToPosts({ commentMap, latest }, ...posts) {
  posts.flat().forEach((post) => {
    post.comments = commentMap[post.slug] || [];
    post.latestComment = latest;
  });
}

async function loadComments() {
  const url = dev
    ? "http://localhost:8080/comment"
    : "https://comments.tiim.ch/comment";
  const comments = await fetch(url)
    .then((res) => res.json())
    .catch((error) => {
      console.error("Failed to load comments", url, error);
      return [];
    });

  const latest = comments[0]?.timestamp ?? new Date("2000-01-01").toISOString();
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

async function loadNotes() {
  const notes = await loadMarkdownFolder("mf2");
  notes.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return notes;
}

async function loadMetadata() {
  const entries = await loadMarkdownFolder("metadata");

  return entries.map((entry) => {
    entry.html = Object.entries(mf2).reduce((prev, [key, value]) => {
      const realKey = `p-${key.replace(/_/g, "-")}`;
      return prev.replace(
        `{{${key}}}`,
        `<span class="${realKey}">${value}</span>`
      );
    }, entry.html);
    entry.slug = entry.slug.replace("metadata/", "");
    return entry;
  });
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
  const dir = await recursiveReadDir("content/" + folder);
  const files = await Promise.all(
    dir
      .filter((fileName) => /.+\.md$/.test(fileName))
      .map((fn) => fn.substring("content/".length))
      .map(async (fileName) => {
        const data = await process(fileName);
        return data;
      })
  );
  return files.filter((p) => p).map((p) => ({ ...p, type: folder }));
}
