import { getContent } from "$lib/content";

export async function GET() {
  let posts = (await getContent()).allBlogPosts;

  return {
    body: { posts },
  };
}
