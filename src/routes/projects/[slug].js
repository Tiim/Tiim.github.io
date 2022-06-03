import { getContent } from "$lib/content";

export async function get({ params }) {
  const { slug } = params;
  const project = (await getContent()).contentMap[`projects/${slug}`];

  return {
    body: { project },
  };
}
