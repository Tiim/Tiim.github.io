import { process } from "$lib/markdown";

export async function get({ params }) {
  const { page_slug } = params;

  const page = await process(`pages/${page_slug}.md`);
  return {
    body: { page },
  };
}
