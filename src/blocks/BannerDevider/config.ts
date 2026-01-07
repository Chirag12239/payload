import type { Block } from 'payload'

export const BannerDevider: Block = {
  slug: 'bannerDevider',
  fields: [
    {
      name: 'variant',
      type: 'select',
      defaultValue: 'categories',
      options: [
        {
          label: 'Categories (Default)',
          value: 'categories',
        },
        {
          label: 'Discover (With Button)',
          value: 'discover',
        },
      ],
      required: true,
    },
    {
      name: 'name', // As requested: "only one field which is name" (plus technical variant field)
      type: 'text',
      required: true,
      label: 'Name / Heading Text',
    },
  ],
  interfaceName: 'BannerDeviderBlock',
}
