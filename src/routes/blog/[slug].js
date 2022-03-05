import { process } from "$lib/markdown";

export async function get({ params }) {
  const { slug } = params;

  const post = await process(`blog/${slug}.md`);
  return {
    body: { post },
  };
}
