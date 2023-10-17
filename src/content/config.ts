import { z, defineCollection } from 'astro:content';

export const availableCollections = {
  blog: 'blog',
  projects: 'projects',
  resources: 'resources',
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

const projectCollection = defineCollection({
  type: 'data',
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

const resourceCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.date(),
    link: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(),
    tags: z.array(z.string()),
  })
});


export const collections = {
  [availableCollections.blog]: blogCollection,
  [availableCollections.projects]: projectCollection,
  [availableCollections.resources]: resourceCollection,
};