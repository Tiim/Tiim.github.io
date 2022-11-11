import { getContent } from "$lib/content";

export async function load() {
  let notes = (await getContent()).notes;

  return { notes };
}
