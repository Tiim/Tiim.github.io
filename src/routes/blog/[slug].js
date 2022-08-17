import { getContent } from "$lib/content";

export async function GET({ params }) {
  const { slug } = params;

  const post = (await getContent()).contentMap[`blog/${slug}`] || null;
  return {
    body: { post },
  };
}
