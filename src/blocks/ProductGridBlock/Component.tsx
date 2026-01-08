import React from 'react'
import type { Product, ProductGridBlock as ProductGridBlockProps } from '@/payload-types'
import { ProductGridItem } from '@/components/ProductGridItem'

export const ProductGridBlock: React.FC<ProductGridBlockProps> = ({ products }) => {
  if (!products || products.length === 0) return null

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => {
        if (typeof product === 'object' && product !== null) {
          return <ProductGridItem key={product.id} product={product as Product} />
        }
        return null
      })}
    </div>
  )
}
