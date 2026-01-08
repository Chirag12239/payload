import type { Block } from 'payload'

export const BestService: Block = {
  slug: 'bestService',
  fields: [
    {
      name: 'leftImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'rightImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
