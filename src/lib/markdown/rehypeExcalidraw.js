import { visit } from "unist-util-visit";

/**
 * Rehype plugin that transforms excalidraw code blocks into
 * <pre class="excalidraw"> elements for client-side rendering.
 *
 * Input:  <pre><code class="language-excalidraw">...</code></pre>
 * Output: <pre class="excalidraw">...</pre>
 */
export function rehypeExcalidraw() {
  return function transformer(tree) {
    visit(tree, "element", (node, index, parent) => {
      if (node.tagName !== "pre") return;

      const code = node.children?.[0];
      if (
        !code ||
        code.tagName !== "code" ||
        !code.properties?.className?.includes("language-excalidraw")
      ) {
        return;
      }

      const text = code.children?.[0];
      if (!text || text.type !== "text") return;

      parent.children[index] = {
        type: "element",
        tagName: "pre",
        properties: { className: ["excalidraw"] },
        children: [{ type: "text", value: text.value }],
      };
    });
  };
}
