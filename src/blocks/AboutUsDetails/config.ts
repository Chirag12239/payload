import { Block } from 'payload'
import { link } from '@/fields/link'

export const AboutUsDetails: Block = {
  slug: 'aboutUsDetails',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Premium quality designs created for your home',
      label: 'Title',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      defaultValue: 'Discover thoughtfully crafted furniture and decor pieces made to elevate your living spaces with lasting style and comfort.',
      label: 'Description',
    },
    link({
      overrides: {
        name: 'link',
      },
      appearances: false, 
    }),
  ],
}
