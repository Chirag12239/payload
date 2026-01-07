import type { SectionBlock as SectionBlockProps } from '@/payload-types'
import { cn } from '@/utilities/cn'
import React from 'react'
import { RenderBlocks } from '../RenderBlocks'

export const SectionBlock: React.FC<
  SectionBlockProps & {
    id?: string | number
    className?: string
  }
> = ({ className, backgroundColor, blocks, paddingTop, paddingBottom }) => {
  return (
    <section
      className={cn('w-full', className)}
      style={{
        backgroundColor: backgroundColor || undefined,
        paddingTop: paddingTop ? `${paddingTop}px` : undefined,
        paddingBottom: paddingBottom ? `${paddingBottom}px` : undefined,
      }}
    >
      {blocks && <RenderBlocks blocks={blocks} />}
    </section>
  )
}
