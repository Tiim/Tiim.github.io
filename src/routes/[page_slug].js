import { getContent } from "$lib/content";

export async function get({ params }) {
  const { page_slug } = params;

  const page = (await getContent()).pages[`pages/${page_slug}`] || null;
  return {
    body: { page },
  };
}
