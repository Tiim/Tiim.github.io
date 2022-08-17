import { getContent } from "$lib/content";

export async function GET({ params }) {
  const { slug } = params;
  const project = (await getContent()).contentMap[`projects/${slug}`];

  return {
    body: { project },
  };
}
