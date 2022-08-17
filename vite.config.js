import { resolve } from "path";
import { sveltekit } from "@sveltejs/kit/vite";

export default {
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $content: resolve("./content"),
    },
  },
  server: {
    fs: {
      allow: ["content"],
    },
  },
};
