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
import { Container } from '../Container/config'
import { AboutUsWithImage } from '../AboutUsWithImage/config'
import { BestService } from '../BestService/config'

import { CategoryGrid } from '../CategoryGridBlock/config'
import { ProductGrid } from '../ProductGridBlock/config'
import { colorPickerField } from '@/fields/ColorPicker/config'

export const Section: Block = {
  slug: 'section',
  interfaceName: 'SectionBlock',
  fields: [
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
      ],
    },
    {
      name: 'blocks',
      type: 'blocks',
      blocks: [
        Container,
        Separator,
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
        AboutUsWithImage,
        BestService,
        CategoryGrid,
        ProductGrid,
      ],
    },
  ],
}
