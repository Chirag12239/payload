import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'

import { revalidateHeader } from './hooks/revalidateHeader'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidateHeader],
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
        {
          name: 'columns',
          type: 'array',
          fields: [
            {
              name: 'title',
              type: 'text', 
            },
            {
              name: 'links',
              type: 'array',
              fields: [
                link({
                  appearances: false,
                }),
              ],
            },
          ],
        },
      ],
      maxRows: 6,
    },
  ],
}
