import { visit } from "unist-util-visit";

export function remarkHideWikilink() {
  return function transformer(ast) {
    visit(ast, "text", (node) => {
      node.value = node.value.replace(/\[\[[^|]*?\|?([^|]*)\]\]/g, "$1");
    });
  };
}
