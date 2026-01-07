import { Button } from '@/components/ui/button'
import clsx from 'clsx'
import { ShoppingCart } from 'lucide-react'
import React from 'react'

export function OpenCartButton({
  className,
  quantity,
  ...rest
}: {
  className?: string
  quantity?: number
}) {
  return (
    <Button
      variant="ghost"
      size="clear"
      className={clsx("relative flex items-center gap-2 hover:bg-transparent hover:text-gray-600 transition-colors p-2", className)}
      {...rest}
    >
      <ShoppingCart className="w-6 h-6" />

      {quantity ? (
        <span className="text-sm font-medium">{quantity}</span>
      ) : null}
    </Button>
  )
}
