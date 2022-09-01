import { resolve } from "path";
import { sveltekit } from "@sveltejs/kit/vite";
import svg from "@poppanator/sveltekit-svg";

const svgOptions = {
  svgOptions: {
    multipass: true,
    plugins: [
      {
        name: "preset-default",
        params: { overrides: { removeViewBox: false } },
      },
    ],
  },
};

export default {
  plugins: [sveltekit(), svg(svgOptions)],
  resolve: {
    alias: {
      $content: resolve("./content"),
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    fs: {
      allow: ["content"],
    },
  },
};
