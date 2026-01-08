import type { Block } from 'payload'

export const AboutUsProductGrid: Block = {
  slug: 'aboutUsProductGrid',
  interfaceName: 'AboutUsProductGridBlock',
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
    {
      name: 'products',
      type: 'relationship',
      relationTo: 'products',
      hasMany: true,
      label: 'Products to show',
    },
  ],
  labels: {
    plural: 'About Us Product Grids',
    singular: 'About Us Product Grid',
  },
}
