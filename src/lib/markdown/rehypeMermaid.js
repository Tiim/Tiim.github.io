import { visit } from "unist-util-visit";

/**
 * Rehype plugin that transforms mermaid code blocks into
 * <pre class="mermaid"> elements for client-side rendering.
 *
 * Input:  <pre><code class="language-mermaid">...</code></pre>
 * Output: <pre class="mermaid">...</pre>
 */
export function rehypeMermaid() {
  return function transformer(tree) {
    visit(tree, "element", (node, index, parent) => {
      if (node.tagName !== "pre") return;

      const code = node.children?.[0];
      if (
        !code ||
        code.tagName !== "code" ||
        !code.properties?.className?.includes("language-mermaid")
      ) {
        return;
      }

      const text = code.children?.[0];
      if (!text || text.type !== "text") return;

      parent.children[index] = {
        type: "element",
        tagName: "pre",
        properties: { className: ["mermaid"] },
        children: [{ type: "text", value: text.value }],
      };
    });
  };
}
