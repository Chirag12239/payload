import React from 'react'
import type { Category } from '@/payload-types'
import { CategoryCard } from './CategoryCard'

type Props = {
  categories?: (number | Category)[]
}

export const CategoryGridBlock: React.FC<Props> = (props) => {
  const { categories } = props

  if (!categories || categories.length === 0) return null

  return (
    <div className="my-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((categoryWrapper, index) => {
          if (typeof categoryWrapper === 'object' && categoryWrapper !== null) {
            const category = categoryWrapper as Category
            return <CategoryCard key={category.id || index} category={category} />
          }
          return null
        })}
      </div>
    </div>
  )
}
