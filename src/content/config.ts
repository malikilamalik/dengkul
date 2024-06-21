import { defineCollection, z } from 'astro:content'
import { rssSchema } from '@astrojs/rss'

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    published: z.date(),
    draft: z.boolean().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    category: z.string().optional(),
  }),
})
export const collections = {
  posts: postsCollection,
  schema: rssSchema,
}
