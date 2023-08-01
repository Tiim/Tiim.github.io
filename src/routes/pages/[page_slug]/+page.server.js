import { getContent } from "$lib/content";

export async function load({ params }) {
  const { page_slug } = params;

  const content = await getContent();
  const page = content.queryContent(`pages/${page_slug}`);
  const about = content.meta.about;
  return { page, about };
}
