import { resolve } from "path";
import { fileURLToPath } from "url";
import { sveltekit } from "@sveltejs/kit/vite";
import svg from "@poppanator/sveltekit-svg";
import { defineConfig } from "vite";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

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

export default defineConfig({
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
});
