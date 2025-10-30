import { visit } from "unist-util-visit";

export function remarkAbsoluteLink() {
  return (tree) => {
    visit(tree, ["link", "image"], (node) => {
      if (!node.url) {
        return;
      }
      // Skip if already has a protocol (http:, https:, mailto:, etc.)
      if (/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(node.url)) {
        return;
      }
      // Handle absolute paths starting with /
      if (node.url.startsWith("/")) {
        node.url = `https://tiim.ch${node.url}`;
      }
      // Handle anchor links
      else if (node.url.startsWith("#")) {
        // Leave as-is
      }
      // Handle relative paths
      else {
        node.url = `https://tiim.ch/${node.url}`;
      }
    });
  };
}
