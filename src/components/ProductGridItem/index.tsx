import type { Product, Variant } from '@/payload-types'

import Link from 'next/link'
import React from 'react'
import clsx from 'clsx'
import { Media } from '@/components/Media'
import { Price } from '@/components/Price'
import { ProductPriceDetails } from '@/components/ProductPriceDetails'
import './styles.css'

type Props = {
  product: Partial<Product>
}

export const ProductGridItem: React.FC<Props> = ({ product }) => {
  const { gallery, priceInUSD, title } = product

  let price = priceInUSD

  const variants = product.variants?.docs

  if (variants && variants.length > 0) {
    const variant = variants[0]
    if (
      variant &&
      typeof variant === 'object' &&
      variant?.priceInUSD &&
      typeof variant.priceInUSD === 'number'
    ) {
      price = variant.priceInUSD
    }
  }

  const image =
    gallery?.[0]?.image && typeof gallery[0]?.image !== 'string' ? gallery[0]?.image : false

  const category = product.categories?.[0]
  const categoryTitle =
    category && typeof category === 'object' && 'title' in category ? category.title : null

  return (
    <Link className="relative inline-block h-full w-full group" href={`/products/${product.slug}`}>
      {categoryTitle && (
        <div className="absolute top-0 left-1/2 z-20 -translate-x-1/2 rounded-b-xl bg-white px-6 py-2 text-sm font-medium shadow-sm">
          {categoryTitle}
        </div>
      )}
      {image ? (
        <Media
          className={clsx(
            'relative aspect-square object-cover border rounded-2xl p-16 bg-[#d7d7d7]',
          )}
          height={80}
          imgClassName={clsx('h-full w-full object-cover rounded-2xl', {
            'transition duration-300 ease-in-out group-hover:scale-102': true,
          })}
          resource={image}
          width={80}
        />
      ) : null}

      <div className="shop-overlay-box mobile-hide shop-page-box opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 rounded-2xl">
        <div className="transform translate-y-5 group-hover:translate-y-0 transition-transform duration-300 w-full px-4 pb-4">
          <ProductPriceDetails
            title={title || ''}
            price={typeof price === 'number' ? <Price amount={price} /> : null}
          />
        </div>
      </div>
    </Link>
  )
}
