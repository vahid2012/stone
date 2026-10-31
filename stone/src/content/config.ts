import { defineCollection, z } from 'astro:content';

const guides = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    about: z.string(),
    howToName: z.string(),
    longTail: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    steps: z.array(z.object({ name: z.string(), text: z.string() })),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string().default('StoneBuySell Export Desk'),
    image: z.string(),
    imageAlt: z.string(),
  }),
});

export const collections = { guides, blog };
