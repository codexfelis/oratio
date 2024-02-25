import { z, reference, defineCollection } from "astro:content";
import { docsSchema, i18nSchema } from "@astrojs/starlight/schema";

const authors = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    link: z.string().url().optional(),
  }),
});

export const collections = {
  docs: defineCollection({
    schema: docsSchema({
      extend: () => {
        return z.object({
          authors: z.array(reference("authors")).optional(),
        });
      },
    }),
  }),
  i18n: defineCollection({ type: "data", schema: i18nSchema() }),
};
