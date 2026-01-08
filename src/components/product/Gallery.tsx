'use client'

import type { Media as MediaType, Product } from '@/payload-types'
import { Media } from '@/components/Media'
import React, { useMemo } from 'react'

type Props = {
  gallery: NonNullable<Product['gallery']>
}

export const Gallery: React.FC<Props> = ({ gallery }) => {
  const uniqueImages = useMemo(() => {
    const images: MediaType[] = []
    const seenIds = new Set<string | number>()

    for (const item of gallery) {
      if (item.image && typeof item.image === 'object' && 'id' in item.image) {
        if (!seenIds.has(item.image.id)) {
          seenIds.add(item.image.id)
          images.push(item.image)
        }
      }
    }
    return images
  }, [gallery])

  return (
    <div className="flex flex-col gap-4">
      {uniqueImages[0] && (
        <div className="relative w-full overflow-hidden rounded-lg h-[80vh] bg-[#d7d7d7] flex justify-center items-center">
          <Media
            resource={uniqueImages[0]}
            className="w-70 h-70"
            imgClassName="w-full h-full object-contain"
            priority // Prioritize loading the main image
          />
        </div>
      )}
      {uniqueImages.length > 1 && (
        <div className="grid grid-cols-2 gap-4">
          {uniqueImages.slice(1).map((media, i) => (
            <div key={media.id || i} className="relative w-full overflow-hidden rounded-lg">
              <Media
                resource={media}
                className="w-full"
                imgClassName="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
