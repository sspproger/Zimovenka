import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const base = z.object({ title: z.string(), description: z.string(), publishDate: z.coerce.date(), updateDate: z.coerce.date().optional(), draft: z.boolean().default(true), image: z.string().optional() });
export const collections = {
  products: defineCollection({ loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/products' }), schema: base.extend({ available: z.boolean().default(false), price: z.number().optional() }) }),
  articles: defineCollection({ loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }), schema: base }),
  stories: defineCollection({ loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/stories' }), schema: base }),
};
