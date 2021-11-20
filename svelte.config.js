import { resolve } from "path";
import adapter from '@sveltejs/adapter-static'
const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		paths: {
			base: dev ? '' : '',
		},
		adapter: adapter(),
		prerender: {
			crawl: true,
			enabled: true,
			entries: ["*"],
			onError: "fail",
		},
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					$content: resolve("./content")
				}
			},
			server: {
				fs: {
					allow: ["content"]
				}
			}
		}
	}
};

export default config;
