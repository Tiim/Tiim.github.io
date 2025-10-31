import { dev } from "$app/environment";
import { error } from "@sveltejs/kit";
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
  const meta = postsToMap(await loadMetadata());
  const notes = await loadNotes();

  const tags = await loadTags(allBlogPosts, projects, notes);
  const tagsMap = blogPostsToTagMap(allBlogPosts, projects, notes);

  const contentMap = postsToMap(allBlogPosts, projects, pages, notes);
  const allContent = [...allBlogPosts, ...projects, ...pages, ...notes];

  allContent.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  content = {
    allBlogPosts,
    pages,
    projects,
    tags,
    tagsMap,
    contentMap,
    meta,
    mf2,
    notes,
    allContent,
    queryContent(slug) {
      if (this.contentMap[slug] != null) {
        return this.contentMap[slug];
      }
      throw new error(404, "Can't find content with slug: " + slug);
    },
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
        .map((tag) => tag.toLowerCase()),
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
        `<span class="${realKey}">${value}</span>`,
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
      }),
  );
  return files.filter((p) => p).map((p) => ({ ...p, folder }));
}
