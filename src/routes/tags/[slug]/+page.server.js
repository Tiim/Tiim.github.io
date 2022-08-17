import { getContent } from "$lib/content";

export async function load({ params }) {
  const { slug } = params;
  const content = await getContent();

  const details = content.tags.find((tag) => tag.tag === slug);
  const posts = content.tagsMap[slug] || [];
  return { posts, details };
}
