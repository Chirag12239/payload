import { Categories } from '@/components/layout/search/Categories'
import { FilterList } from '@/components/layout/search/filter'
import { sorting } from '@/lib/constants'
import { Search } from '@/components/Search'
// import { Categories } from '@/components/layout/search/Categories' // Duplicate removal if any, but sticking to existing
import React, { Suspense } from 'react'
import Image from 'next/image'
import image from '@/assets/ShopPage.webp'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { ActiveCategoryDisplay } from '@/components/layout/search/ActiveCategoryDisplay'

export default async function ShopLayout({ children }: { children: React.ReactNode }) {
  const payload = await getPayload({ config: configPromise })
  const categories = await payload.find({
    collection: 'categories',
    sort: 'title',
  })

  return (
    <Suspense fallback={null}>
      <div className="px-6 pt-5">
        <div className="relative">
          <Image src={image} className="w-full h-auto rounded-lg" alt="Shop" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <ActiveCategoryDisplay categories={categories.docs} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 px-6">
        {/* <Search className="mb-8" /> */}
        <Categories />

        <div className="flex flex-col md:flex-row items-start justify-between gap-16 md:gap-4">
          {/* <div className="w-full flex-none flex flex-col gap-4 md:gap-8 basis-1/5"> */}
          {/* <FilterList list={sorting} title="Sort by" /> */}
          {/* </div> */}
          <div className="min-h-screen w-full">{children}</div>
        </div>
      </div>
    </Suspense>
  )
}
