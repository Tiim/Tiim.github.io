import fs from "fs-extra";

export async function get({params}) {
  const name = params.filename;

  return {
    body: await fs.readFile(`content/blog/images/${name}`)
  }
}