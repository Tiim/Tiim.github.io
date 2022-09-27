import { fromHtml } from "hast-util-from-html";
import { EXIT, visit } from "unist-util-visit";
import svgCallout from "@/icons/callout.svg?src";
import svgNote from "@/icons/note.svg?src";
import svgTLDR from "@/icons/tldr.svg?src";
import svgTodo from "@/icons/todo.svg?src";
import svgHint from "@/icons/hint.svg?src";
import svgSuccess from "@/icons/success.svg?src";
import svgQuestion from "@/icons/question.svg?src";
import svgWarn from "@/icons/warn.svg?src";
import svgFailure from "@/icons/failure.svg?src";

export function rehypeCallout() {
  const iconDefault = svgCallout;
  const icons = {
    note: svgNote,
    abstract: svgTLDR,
    summary: svgTLDR,
    tldr: svgTLDR,
    info: svgCallout,
    todo: svgTodo,
    tip: svgHint,
    hint: svgHint,
    important: svgCallout,
    success: svgSuccess,
    check: svgSuccess,
    done: svgSuccess,
    question: svgQuestion,
    help: svgQuestion,
    faq: svgQuestion,
    warning: svgWarn,
    caution: svgWarn,
    attention: svgWarn,
    failure: svgFailure,
    fail: svgFailure,
    missing: svgFailure,
    danger: svgFailure,
    error: svgFailure,
    bug: svgFailure,
  };

  const calloutRegex = /^\[!(.*?)\]/;
  return function transformer(ast) {
    visit(ast, { type: "element", tagName: "blockquote" }, (node) => {
      let type;
      visit(node, { type: "element", tagName: "p" }, (pnode, i, parent) => {
        if (!pnode.children.length || pnode.children[0].type !== "text") {
          return EXIT;
        }
        const tnode = pnode.children[0];
        const textValue = tnode.value.trimStart();
        if (!textValue) {
          return EXIT;
        }
        const match = textValue.match(calloutRegex);
        if (!match) {
          return EXIT;
        }
        type = match[1].toLowerCase();
        const text = textValue.replace(calloutRegex, "").split("\n");
        const title =
          text.shift().trim() || type.slice(0, 1).toUpperCase() + type.slice(1);
        const content = text.join("\n");
        const newElements = [
          {
            type: "element",
            tagName: "span",
            properties: { className: "callout-title" },
            children: [
              {
                type: "element",
                tagName: "span",
                properties: { className: "callout-icon" },
                children: [
                  fromHtml(icons[type] || iconDefault, { fragment: true }),
                ],
              },
              { type: "text", value: title },
            ],
          },
          {
            type: "element",
            tagName: "p",
            children: [
              { type: "text", value: content },
              ...pnode.children.slice(1),
            ],
          },
        ];
        parent.children.splice(i, 1, ...newElements);

        return EXIT;
      });
      if (!type) {
        return;
      }
      node.properties.className = node.properties.className ?? [];
      node.properties.className.push(`callout`);
      node.properties.className.push(`callout-${type}`);
    });
  };
}
