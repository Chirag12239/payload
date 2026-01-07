import type { SeparatorBlock as SeparatorBlockProps } from '@/payload-types'
import { cn } from '@/utilities/cn'
import React from 'react'

export const SeparatorBlock: React.FC<
  SeparatorBlockProps & {
    id?: string | number
    className?: string
  }
> = ({ className, orientation, spacingLaptop, spacingMobile, backgroundColor, id }) => {
  const isHorizontal = orientation === 'horizontal'
  const uniqueClass = `separator-${id}`
  return (
    <div className={cn('w-full', className, uniqueClass)}>
        <style dangerouslySetInnerHTML={{__html: `
            .${uniqueClass} .separator-element {
                background-color: ${backgroundColor || 'transparent'};
                ${isHorizontal ? `
                    height: 1px;
                    width: 100%;
                    margin-top: ${spacingMobile}px;
                    margin-bottom: ${spacingMobile}px;
                ` : `
                    width: 1px;
                    height: 100%;
                    margin-left: ${spacingMobile}px;
                    margin-right: ${spacingMobile}px;
                `}
            }
            @media (min-width: 768px) {
                .${uniqueClass} .separator-element {
                    ${isHorizontal ? `
                        margin-top: ${spacingLaptop}px;
                        margin-bottom: ${spacingLaptop}px;
                    ` : `
                        margin-left: ${spacingLaptop}px;
                        margin-right: ${spacingLaptop}px;
                    `}
                }
            }
        `}} />
        <div className="separator-element" />
    </div>
  )
}
