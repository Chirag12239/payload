import { Block } from 'payload'
import { link } from '@/fields/link'

export const AboutUsWithImage: Block = {
  slug: 'aboutUsWithImage',
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
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Image',
    },
  ],
}
