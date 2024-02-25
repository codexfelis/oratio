import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://oratio.codexfelis.dev",
  integrations: [
    starlight({
      title: "Oratio",
      description:
        "Tutorials and tech explainers for digital humanists, from Codex Felis",
      favicon: "/favicon-32x32.png",
      customCss: [
        "./src/styles.css",
        "@fontsource/eagle-lake/400.css",
        "@fontsource-variable/work-sans",
      ],
      social: {
        github: "https://github.com/codexfelis/oratio",
      },
      components: {
        PageTitle: "./src/components/PageTitle.astro",
      },
      sidebar: [
        {
          label: "Welcome!",
          autogenerate: {
            directory: "guides",
          },
        },
        {
          label: "What is...",
          autogenerate: {
            directory: "what-is",
          },
        },
      ],
    }),
  ],
});
