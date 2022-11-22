import { getContent } from "$lib/content";

export async function load() {
  const content = await getContent();
  const indexMeta = content.meta.index;
  const mf2 = content.mf2;

  const recent = content.allContent.slice(0, 6);

  return { indexMeta, mf2, recent };
}
