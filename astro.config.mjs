import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon"; // https://www.astroicon.dev/guides/upgrade/v1/
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import compress from "@playform/compress";
import AutoImport from "astro-auto-import";

// https://astro.build/config
export default defineConfig({
	site: "https://solunasites.com",
	integrations: [
		// example auto import component into blog post mdx files
		AutoImport({
			imports: [
				// https://github.com/delucis/astro-auto-import
				"@components/Admonition/Admonition.astro",
			],
		}),
		mdx(),
		icon({
			// I include only the icons I use. This is because if you use SSR, ALL icons will be included (no bueno)
			// https://www.astroicon.dev/reference/configuration#include
			include: {
				tabler: [
					"bulb",
					"alert-triangle",
					"flame",
					"info-circle",
					"arrow-narrow-left",
					"arrow-narrow-right",
					"menu-2",
					"x",
					"chevron-down",
					"category",
					"calendar-event",
				],
			},
		}),
		sitemap(),
		compress({
			HTML: true,
			JavaScript: true,
			CSS: true,
			Image: false, // astro:assets handles this. Enabling this can dramatically increase build times
			SVG: false, // astro-icon handles this
		}),
	],
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: {
			  "@assets": new URL("./src/assets", import.meta.url).pathname,
			  "@components": new URL("./src/components", import.meta.url).pathname,
			  "@layouts": new URL("./src/layouts", import.meta.url).pathname,
			  "@config": new URL("./src/config", import.meta.url).pathname,
			}
		  },
		// stop inlining short scripts to fix issues with ClientRouter: https://github.com/withastro/astro/issues/12804
		build: {
			assetsInlineLimit: 0,
		},
	},
	viewTransitions:true,
});
