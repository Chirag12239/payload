import { Block } from 'payload'

export const CategoryGrid: Block = {
  slug: 'categoryGrid',
  interfaceName: 'CategoryGridBlock',
  fields: [
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      required: true,
      minRows: 1,
      maxRows: 8, // Enforcing 8 as per user input "8 things should shown"
    },
  ],
}
