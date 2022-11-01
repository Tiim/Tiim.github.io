import { getContent } from "$lib/content";

export async function load({ params }) {
  const { page_slug } = params;

  const content = await getContent();
  const page = content.contentMap[`pages/${page_slug}`] || null;
  const about = content.about;
  return { page, about };
}
