import { getContent } from "$lib/content";

export async function GET({ params }) {
  const { page_slug } = params;

  const page = (await getContent()).contentMap[`pages/${page_slug}`] || null;
  return {
    body: { page },
  };
}
