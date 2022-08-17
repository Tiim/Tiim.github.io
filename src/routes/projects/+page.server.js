import { getContent } from "$lib/content";

export async function load() {
  const projects = (await getContent()).projects;
  const sections = groupBy(projects);
  return { sections };
}

function groupBy(array) {
  const group = array.reduce(
    (p, c) => ({
      ...p,
      [c.section]: p[c.section] ? [...p[c.section], c] : [c],
    }),
    {}
  );
  const sections = Object.keys(group).map((k) => ({
    section: k,
    values: group[k],
  }));
  sections.sort(compare);
  return sections;
}

function compare(a, b) {
  if (a.section < b.section) {
    return -1;
  }
  if (a.section > b.section) {
    return 1;
  }
  return 0;
}
