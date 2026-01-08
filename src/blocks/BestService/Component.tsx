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
        <div className="service-layout grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="service-content-details-wrap md:sticky md:top-[30px] h-fit">
            <div className="service-image-wrap big-image">
              <Media resource={leftImage} className="service-image w-full h-auto object-cover" />
            </div>
          </div>

          <div className="service-details-right flex flex-col gap-4">
            <ServiceDetailsBlock
              title="Best services that we have"
              shopLink={{
                type: 'custom',
                url: '/shop',
                appearance: 'explore',
              }}
              services={servicesData}
            />
            <div className="service-image-wrap mini-image">
              <Media resource={rightImage} className="service-image mini-image w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
