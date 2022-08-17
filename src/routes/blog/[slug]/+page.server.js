import { getContent } from "$lib/content";

export async function load({ params }) {
  const { slug } = params;

  const post = (await getContent()).contentMap[`blog/${slug}`] || null;
  return { post };
}
