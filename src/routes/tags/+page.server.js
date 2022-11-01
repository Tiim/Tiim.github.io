import { getContent } from "$lib/content";

export async function load() {
  const content = await getContent();

  const tags = [...content.tags];

  tags.sort((a, b) => a.tag.localeCompare(b.tag));
  return { tags };
}
