import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: "https://tim-the-wilson.github.io",
	integrations: [tailwind()],
});
