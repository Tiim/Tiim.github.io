import { getContent } from "$lib/content";

export async function get({ params }) {
  const { slug } = params;
  const content = await getContent();

  const details = content.tags.find((tag) => tag.tag === slug);
  const posts = content.tagsMap[slug] || [];
  return {
    body: { posts, details },
  };
}
