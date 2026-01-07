import type { ContainerBlock as ContainerBlockProps } from '@/payload-types'
import { cn } from '@/utilities/cn'
import React from 'react'
import { RenderBlocks } from '../RenderBlocks'

export const ContainerBlock: React.FC<
  ContainerBlockProps & {
    id?: string | number
    className?: string
  }
> = ({
  className,
  containerAsSection,
  alignment,
  maxWidth,
  borderWidth,
  borderRadius,
  gap,
  borderColor,
  backgroundColor,
  blocks,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
}) => {
  const Tag = containerAsSection ? 'section' : 'div'

  const style: React.CSSProperties = {
    maxWidth: maxWidth ? (!isNaN(Number(maxWidth)) ? `${maxWidth}px` : maxWidth) : undefined,
    borderWidth: borderWidth ? `${borderWidth}px` : undefined,
    borderRadius: borderRadius ? `${borderRadius}px` : undefined,
    gap: gap ? `${gap}px` : undefined,
    borderColor: borderColor || undefined,
    backgroundColor: backgroundColor || undefined,
    paddingTop: paddingTop ? `${paddingTop}px` : undefined,
    paddingBottom: paddingBottom ? `${paddingBottom}px` : undefined,
    paddingLeft: paddingLeft ? `${paddingLeft}px` : undefined,
    paddingRight: paddingRight ? `${paddingRight}px` : undefined,
    borderStyle: borderWidth ? 'solid' : undefined,
    // Alignment
    marginLeft: alignment === 'center' ? 'auto' : alignment === 'right' ? 'auto' : undefined,
    marginRight: alignment === 'center' ? 'auto' : alignment === 'left' ? 'auto' : undefined,
    display: 'flex',
    flexDirection: 'column', // Default to column for blocks? Or grid? "gap" implies flex/grid.
  }

  return (
    <Tag className={cn('w-full', className)} style={style}>
      {blocks && <RenderBlocks blocks={blocks} />}
    </Tag>
  )
}
