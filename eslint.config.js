import js from "@eslint/js";
import svelte from "eslint-plugin-svelte";
import prettier from "eslint-config-prettier";
import globals from "globals";

export default [
  js.configs.recommended,
  ...svelte.configs["flat/recommended"],
  prettier,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2017,
        ...globals.node,
      },
    },
    rules: {
      "svelte/no-at-html-tags": "off", // Expected for markdown content rendering
    },
  },
  {
    ignores: [".svelte-kit/**", "build/**", "static/**", "node_modules/**"],
  },
];
