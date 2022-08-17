import { getContent } from "$lib/content";

export async function load() {
  let posts = (await getContent()).allBlogPosts;

  return { posts };
}
