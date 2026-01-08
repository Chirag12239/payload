'use client'

import React, { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { CategoryItem } from './Categories.client'
import { Category } from '@/payload-types'

export const CategoriesAccordion = ({ categories }: { categories: Category[] }) => {
  const [value, setValue] = useState('')

  return (
    <Accordion
      type="single"
      collapsible
      value={value}
      onValueChange={setValue}
    >
      <AccordionItem value="categories" className="border-none">
        <AccordionTrigger className="w-full border rounded-lg px-4 py-3 hover:no-underline mb-2">
          Filter Category
        </AccordionTrigger>
        <AccordionContent>
          <div className="border rounded-lg p-4 bg-secondary/10">
            <ul className="flex flex-col gap-2">
              {categories.map((category) => (
                <li key={category.id} className="w-full">
                  <CategoryItem
                    category={category}
                    variant="accordion"
                    onSelect={() => setValue('')}
                  />
                </li>
              ))}
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
