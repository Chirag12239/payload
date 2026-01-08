'use client'

import { Category } from '@/payload-types'
import { useSearchParams } from 'next/navigation'
import React, { useMemo } from 'react'
import { cn } from '@/utilities/cn'

type Props = {
  categories: Category[]
  className?: string
}

export const ActiveCategoryDisplay: React.FC<Props> = ({ categories, className }) => {
  const searchParams = useSearchParams()
  const categoryId = searchParams.get('category')

  const activeCategory = useMemo(() => {
    if (!categoryId) return null
    return categories.find((c) => String(c.id) === categoryId)
  }, [categories, categoryId])

  return (
    <div className={cn('', className)}>
      <h1 className="text-4xl font-bold text-white capitalize">
        {activeCategory ? activeCategory.title : 'Shop'}
      </h1>
    </div>
  )
}
