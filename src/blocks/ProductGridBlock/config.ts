import type { Block } from 'payload'

export const ProductGrid: Block = {
  slug: 'productGrid',
  fields: [
    {
      name: 'products',
      type: 'relationship',
      relationTo: 'products',
      hasMany: true,
      label: 'Products to show',
    },
  ],
  interfaceName: 'ProductGridBlock',
  labels: {
    plural: 'Product Grids',
    singular: 'Product Grid',
  },
}
