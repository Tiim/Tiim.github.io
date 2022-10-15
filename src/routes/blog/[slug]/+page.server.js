import { getContent } from "$lib/content";

export async function load({ params }) {
  const { slug } = params;
  const content = await getContent();
  const post = content.contentMap[`blog/${slug}`] || null;
  return { post, about: content.about };
}
