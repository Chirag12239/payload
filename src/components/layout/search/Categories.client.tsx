'use client'
import React, { useCallback, useMemo } from 'react'

import { Category } from '@/payload-types'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import clsx from 'clsx'

type Props = {
  category: Category
  variant?: 'default' | 'accordion'
  onSelect?: () => void
}

export const CategoryItem: React.FC<Props> = ({ category, variant = 'default', onSelect }) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const isActive = useMemo(() => {
    return searchParams.get('category') === String(category.id)
  }, [category.id, searchParams])

  const setQuery = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString())

    if (isActive) {
      params.delete('category')
    } else {
      params.set('category', String(category.id))
    }

    const newParams = params.toString()

    router.push(pathname + '?' + newParams)
    
    if (onSelect) {
      onSelect()
    }
  }, [category.id, isActive, pathname, router, searchParams, onSelect])

  if (variant === 'accordion') {
    return (
      <button
        onClick={() => setQuery()}
        className={clsx(
          'w-full text-left py-2 px-3 rounded text-sm transition-colors hover:bg-muted',
          {
            'font-bold bg-secondary/20': isActive,
            'font-medium': !isActive,
          },
        )}
      >
        {category.title}
      </button>
    )
  }

  return (
    <button
      onClick={() => setQuery()}
      className={clsx(
        'hover:cursor-pointer hover:bg-black hover:text-white rounded bg-[#f6f6f6] p-5 px-8 capitalize font-medium w-full ',
        {
          'bg-black text-white': isActive,
        },
      )}
    >
      {category.title}
    </button>
  )
}
