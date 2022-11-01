import { getContent } from "$lib/content";

export async function load({ params }) {
  const { slug } = params;
  const content = await getContent();
  const project = content.contentMap[`projects/${slug}`];
  const about = content.about;

  return { project, about };
}
