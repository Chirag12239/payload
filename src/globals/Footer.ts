import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'footerTitle',
      type: 'text',
      label: 'Footer Title',
      required: true,
      defaultValue: 'Stay Connected with the World of Home Style',
    },
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 6,
      label: 'Column 1 Links',
    },
    {
      name: 'secondaryNavItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 6,
      label: 'Column 2 Links',
    },
    {
      name: 'contactInfo',
      type: 'group',
      fields: [
        {
          name: 'phone',
          type: 'text',
          label: 'Phone Number',
          defaultValue: '+1 (800) 456-7890',
        },
        {
          name: 'email',
          type: 'text',
          label: 'Email Address',
          defaultValue: 'recoded.flowsleek@.com',
        },
      ],
    },
    {
      name: 'socialLinks',
      type: 'array',
      label: 'Social Links',
      fields: [
        {
          name: 'platform',
          type: 'select',
          options: [
            { label: 'X (Twitter)', value: 'x' },
            { label: 'Instagram', value: 'instagram' },
            { label: 'Facebook', value: 'facebook' },
          ],
        },
        {
          name: 'url',
          type: 'text',
          label: 'URL',
        },
      ],
    },
    {
      name: 'copyrightText',
      type: 'text',
      defaultValue: 'Copyright © Havinic| Designed by Theme Sleek',
    },
  ],
}
