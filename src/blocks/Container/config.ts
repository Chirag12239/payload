import type { Block } from 'payload'
import { Archive } from '../ArchiveBlock/config'
import { Banner } from '../Banner/config'
import { BannerDevider } from '../BannerDevider/config'
import { CallToAction } from '../CallToAction/config'
import { Carousel } from '../Carousel/config'
import { Content } from '../Content/config'
import { FormBlock } from '../Form/config'
import { MediaBlock } from '../MediaBlock/config'
import { ThreeItemGrid } from '../ThreeItemGrid/config'
import { TwoimageSection } from '../TwoimageSection/config'
import { Separator } from '../Separator/config'
import { AboutUsWithImage } from '../AboutUsWithImage/config'
import { BestService } from '../BestService/config'

import { CategoryGrid } from '../CategoryGridBlock/config'
import { ProductGrid } from '../ProductGridBlock/config'
import { colorPickerField } from '@/fields/ColorPicker/config'

export const Container: Block = {
  slug: 'container',
  interfaceName: 'ContainerBlock',
  fields: [
    {
      name: 'containerAsSection',
      type: 'checkbox',
      label: 'Container as Section',
      defaultValue: false,
    },
    {
      name: 'alignment',
      type: 'select',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Center', value: 'center' },
        { label: 'Right', value: 'right' },
      ],
      defaultValue: 'center',
    },
    {
      name: 'maxWidth',
      type: 'text',
      label: 'Maximum Width (e.g., 1200px, 100%)', // "maximimum width"
    },
    {
      name: 'borderWidth',
      type: 'number',
      label: 'Border Width (px)',
    },
    {
      name: 'borderRadius',
      type: 'number',
      label: 'Border Radius (px)',
    },
    {
      name: 'gap',
      type: 'number',
      label: 'Gap (px)',
    },
    colorPickerField({
      name: 'borderColor',
      label: 'Border Color',
    }),
    colorPickerField({
      name: 'backgroundColor',
      label: 'Background Color',
    }),
    {
      type: 'row',
      fields: [
        {
          name: 'paddingTop',
          type: 'number',
          label: 'Padding Top (px)',
          defaultValue: 0,
        },
        {
          name: 'paddingBottom',
          type: 'number',
          label: 'Padding Bottom (px)',
          defaultValue: 0,
        },
        {
          name: 'paddingLeft',
          type: 'number',
          label: 'Padding Left (px)',
          defaultValue: 0,
        },
        {
          name: 'paddingRight',
          type: 'number',
          label: 'Padding Right (px)',
          defaultValue: 0,
        },
      ],
    },
    {
      name: 'blocks',
      type: 'blocks',
      blocks: [
        Archive,
        Banner,
        BannerDevider,
        CallToAction,
        Carousel,
        Content,
        FormBlock,
        MediaBlock,
        ThreeItemGrid,
        TwoimageSection,
        Separator,
        AboutUsWithImage,
        BestService,
        CategoryGrid,
        ProductGrid,

        // Container // Self-reference might need careful handling, omitting for now to be safe.
      ],
    },
  ],
}
