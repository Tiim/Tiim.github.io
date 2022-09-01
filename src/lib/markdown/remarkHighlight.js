import { visit } from "unist-util-visit";

export function remarkHighlight() {
  return function transformer(ast) {
    visit(ast, "text", (node, i, parent) => {
      const split = node.value.split("==");
      if (split.length <= 1) {
        return;
      }
      const children = split.map((value, i) => {
        if (i % 2 === 0) {
          return { type: "text", value };
        }
        return {
          type: "highlight",
          value,
          data: {
            hName: "mark",
            hChildren: [{ type: "text", value: value }],
          },
        };
      });

      parent.children.splice(i, 1, ...children);
    });
  };
}
