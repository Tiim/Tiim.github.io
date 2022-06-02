import { getContent } from "$lib/content";

export async function get() {
  let posts = (await getContent()).allBlogPosts;

  return {
    body: { posts },
  };
}
