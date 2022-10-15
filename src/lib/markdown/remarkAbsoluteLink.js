import { visit } from "unist-util-visit";

export function remarkAbsoluteLink() {
  return (tree) => {
    visit(tree, "link", (node) => {
      if (!node.url) {
        return;
      }
      if (node.url.startsWith("/")) {
        node.url = `https://tiim.ch${node.url}`;
      } else if (node.url.startsWith("#")) {
        node.url === node.url;
      } else if (!/^[a-zA-Z]{1,20}:/.test(node.url)) {
        node.url = `https://tiim.ch/${node.url}`;
      }
    });
  };
}
