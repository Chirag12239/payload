import type { Block } from 'payload'

export const BlogGrid: Block = {
  slug: 'blogGrid',
  fields: [
    {
      name: 'blogs',
      type: 'relationship',
      relationTo: 'blogs',
      hasMany: true,
      label: 'Blogs to show',
    },
  ],
  interfaceName: 'BlogGridBlock',
  labels: {
    plural: 'Blog Grids',
    singular: 'Blog Grid',
  },
}
