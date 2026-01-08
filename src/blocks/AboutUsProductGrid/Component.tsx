import { ContentSection } from '@/blocks/AboutUsDetails/ContentSection'
import { ProductGridItem } from '@/components/ProductGridItem'
import type { Page, Product } from '@/payload-types'
import React from 'react'

type Props = {
  title: string
  description: string
  products?: (number | Product)[] | null
} & Page['layout'][0]

export const AboutUsProductGridBlock: React.FC<Props> = ({
  title,
  description,
  products,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
      <div className="lg:col-span-1">
        <div className="h-full bg-white rounded-[20px] py-[100px] px-[20px] flex justify-center items-start max-[991px]:py-[40px] max-[767px]:items-center max-[767px]:rounded-[15px] max-[767px]:order-[-1] max-[479px]:rounded-[12px]">
          <ContentSection title={title} description={description} />
        </div>
      </div>
      <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {products && products.length > 0 ? (
          products.map((product) => {
            if (typeof product === 'object' && product !== null) {
              return <ProductGridItem key={product.id} product={product as Product} />
            }
            return null
          })
        ) : null}
      </div>
    </div>
  )
}
