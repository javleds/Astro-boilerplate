import { z, defineCollection } from 'astro:content';

export const availableCollections = {
  blog: 'blog',
}

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.date(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  })
});

export const collections = {
  [availableCollections.blog]: blogCollection,
};