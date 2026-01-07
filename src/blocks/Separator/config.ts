import type { Block } from 'payload'
import { colorPickerField } from '@/fields/ColorPicker/config'

export const Separator: Block = {
  slug: 'separator',
  interfaceName: 'SeparatorBlock',
  fields: [
    {
      name: 'orientation',
      type: 'select',
      defaultValue: 'horizontal',
      options: [
        { label: 'Horizontal', value: 'horizontal' },
        { label: 'Vertical', value: 'vertical' },
      ],
      required: true,
    },
    {
      name: 'spacingLaptop',
      type: 'number',
      label: 'Horizontal Spacing (Laptop)',
      defaultValue: 20,
    },
    {
      name: 'spacingMobile',
      type: 'number',
      label: 'Horizontal Spacing (Mobile)',
      defaultValue: 10,
    },
    colorPickerField({
      name: 'backgroundColor',
      label: 'Background Color',
    }),
  ],
}
