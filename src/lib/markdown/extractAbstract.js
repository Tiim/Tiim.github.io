import { visit, EXIT } from "unist-util-visit";
import { toHast } from "mdast-util-to-hast";
import { toHtml } from "hast-util-to-html";

export default function () {
  return function transformer(ast, file) {
    visit(ast, "paragraph", (node) => {
      file.data.abstract = toHtml(toHast(node));
      return EXIT;
    });
  };
}
