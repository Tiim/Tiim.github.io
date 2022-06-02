import { getContent } from "$lib/content";

export async function get({ params }) {
  const { slug } = params;

  const post = (await getContent()).blogMap[`blog/${slug}`] || null;
  return {
    body: { post },
  };
}
