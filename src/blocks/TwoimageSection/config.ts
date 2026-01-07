import type { Block } from 'payload'

export const TwoimageSection: Block = {
    slug: 'twoimageSection',
    fields: [
        {
            name: 'leftImage',
            type: 'upload',
            relationTo: 'media',
            label: 'Left Image',
            required: true,
        },
        {
            name: 'leftContent',
            type: 'group',
            label: 'Left Overlay Content',
            fields: [
                {
                    name: 'heading',
                    type: 'text',
                    label: 'Heading',
                    required: true,
                    defaultValue: 'Modern Living with Designer Furniture',
                },
                {
                    name: 'description',
                    type: 'textarea',
                    label: 'Description',
                    required: true,
                    defaultValue: 'Discover modern designer furniture crafted for stylish and comfortable living spaces.',
                },
                {
                    name: 'enableButton',
                    type: 'checkbox',
                    label: 'Enable Button',
                    defaultValue: true,
                },
                {
                    name: 'buttonText',
                    type: 'text',
                    label: 'Button Text',
                    admin: {
                        condition: (_, siblingData) => siblingData?.enableButton,
                    },
                    defaultValue: 'Explore Shop',
                },
                {
                    name: 'buttonLink',
                    type: 'text',
                    label: 'Button Link',
                    admin: {
                         condition: (_, siblingData) => siblingData?.enableButton,
                    },
                    defaultValue: '/shop',
                },
            ],
        },
        {
            name: 'rightImage',
            type: 'upload',
            relationTo: 'media',
            label: 'Right Image',
            required: true,
        },
        {
            name: 'rightContent',
            type: 'group',
            label: 'Right Overlay Content',
            fields: [
                {
                    name: 'miniImage',
                    type: 'upload',
                    relationTo: 'media',
                    label: 'Mini Float Image',
                    required: true,
                },
                {
                    name: 'discountText',
                    type: 'text',
                    label: 'Discount Text',
                    defaultValue: '20% off',
                },
                {
                    name: 'categoryText',
                    type: 'text',
                    label: 'Category Text',
                    defaultValue: 'Velmoor',
                },
            ],
        },
    ],
    interfaceName: 'TwoimageSectionBlock',
    labels: {
        plural: 'Two Image Sections',
        singular: 'Two Image Section',
    },
}