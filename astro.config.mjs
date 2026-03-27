import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	i18n: {
		defaultLocale: "en",
		locales: ["en", "zh"],
		routing: {
			prefixDefaultLocale: false,
		},
		site: "https://suzanneongcodes.github.io",
		base: "/Portfolio",
	},
});
