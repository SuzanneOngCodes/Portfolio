import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	i18n: {
		defaultLocale: "en",
		locales: ["en", "zh"],
		routing: {
			prefixDefaultLocale: false,
		},
		site: "https://suzanneongcodes.github.io",
		base: "/Portfolio",
	},

	vite: {
		plugins: [tailwindcss()],
	},
});
