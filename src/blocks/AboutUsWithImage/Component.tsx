import React from 'react'
import { AboutUsDetailsBlock } from '../AboutUsDetails/Component'
import { Page } from '@/payload-types'
import { Media } from '@/components/Media'

type Props = {
  title: string
  description: string
  link: any
  image: any
} & Page['layout'][0]

export const AboutUsWithImageBlock: React.FC<Props> = ({ title, description, link, image }) => {
  return (
    <section>
      <div className="about-us-details-wrap grid w-full justify-between place-items-stretch grid-cols-[0.5fr_1fr] auto-cols-fr gap-4 max-[991px]:grid-cols-[0.5fr_0.5fr] max-[991px]:gap-5 max-[767px]:flex max-[767px]:flex-col">
        {/* @ts-expect-error */}
        <AboutUsDetailsBlock 
            title={title} 
            description={description} 
            link={link} 
            className="about-us-details-left"
        />
        
        <div className="about-us-image-wrap relative rounded-[20px]">
         {image && typeof image !== 'string' && (
            <Media resource={image} className="about-uss-image w-full h-full object-cover" />
         )}
          <div className="about-us-image-overlay-box absolute inset-0 bg-black/60 max-[991px]:hidden tab-hide"></div>
        </div>
      </div>
    </section>
  )
}
