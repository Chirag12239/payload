import React from 'react'
import { Media } from '@/components/Media'

import { ServiceDetailsBlock } from '../ServiceDetails/Component'
import type { Media as MediaType } from '@/payload-types'

type Props = {
  leftImage: MediaType
  rightImage: MediaType
}

const servicesData = [
  { text: 'Available to you 24/7' },
  { text: 'Free shipping' },
  { text: 'Free Returns' },
]

export const BestServiceBlock: React.FC<Props> = ({ leftImage, rightImage }) => {
  return (
    <section>
      <div>
        <div className="service-layout grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="service-content-details-wrap h-full flex flex-col">
            <div className="service-image-wrap big-image rounded-[20px] overflow-hidden h-full flex-grow relative">
              <Media
                resource={leftImage}
                className="service-image w-full h-full object-cover absolute inset-0"
              />
            </div>
          </div>

          <div className="service-details-right h-full flex flex-col gap-4">
            <ServiceDetailsBlock
              title="Best services that we have"
              shopLink={{
                type: 'custom',
                url: '/shop',
                appearance: 'explore',
              }}
              services={servicesData}
              className="flex-1"
            />
            <div className="service-image-wrap mini-image rounded-[20px] overflow-hidden">
              <Media
                resource={rightImage}
                className="service-image mini-image w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
