import { Page } from '@/payload-types'
import React from 'react'
import { ContentSection } from './ContentSection'

type Props = {
  title: string
  description: string
} & Page['layout'][0]

export const AboutUsDetailsBlock: React.FC<Props & { className?: string }> = ({
  title,
  description,
}) => {
  return (
    <div className="about-us-details-left h-full bg-[var(--light-grey)] rounded-[20px] py-[100px] px-[20px] flex justify-center items-start overflow-hidden max-[991px]:py-[40px] max-[767px]:items-center max-[767px]:rounded-[15px] max-[767px]:order-[-1] max-[479px]:rounded-[12px]">
      <ContentSection title={title} description={description} />
    </div>
  )
}
