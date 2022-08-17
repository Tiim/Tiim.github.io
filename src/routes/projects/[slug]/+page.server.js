import { getContent } from "$lib/content";

export async function load({ params }) {
  const { slug } = params;
  const project = (await getContent()).contentMap[`projects/${slug}`];

  return { project };
}
