import { process } from "$lib/markdown";

export async function get({ params }) {
  const { slug } = params;

  const body = await process(`${slug}.md`);
  return {
    body,
  };
}
