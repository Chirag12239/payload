import type { Field } from 'payload'

export const colorPickerField = (overrides?: Partial<Field>): Field => {
  return {
    name: 'color',
    type: 'text',
    admin: {
      components: {
        Field: '@/fields/ColorPicker/Component#ColorPicker',
      },
    },
    ...overrides,
  }
}
