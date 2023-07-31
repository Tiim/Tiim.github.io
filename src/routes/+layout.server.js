import { getContent } from "$lib/content";

export const prerender = true;

/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
  const content = await getContent();
  const footer = content.meta.footer;

  return {
    footer,
  };
}
