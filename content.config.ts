import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    landing: defineCollection({
      type: 'page',
      source: 'index.md'
    }),
    docs: defineCollection({
      type: 'page',
      source: {
        include: '**',
        exclude: ['index.md','latest.yml']
      },
      schema: z.object({
        title: z.string().nonempty(),
        description: z.string(),
        date: z.date(),
        image: z.string(),
        badge: z.string().optional(),
        links: z.array(z.object({
          label: z.string(),
          icon: z.string(),
          to: z.string(),
          target: z.string().optional()
        })).optional()
      })
    }),
    latest: defineCollection({
      source: 'latest.yml',
      type: 'page'
    })
  }
})
