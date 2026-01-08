import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/utilities/cn'

const buttonVariants = cva(
  "relative inline-flex items-center justify-center hover:cursor-pointer gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
        destructive:
          'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40',
        outline:
          'border border-input bg-card shadow-xs hover:bg-accent hover:bg-primary-foreground',
        secondary: 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
        ghost:
          'text-primary/50 hover:text-primary/100 [&.active]:text-primary/100 py-2 px-4 uppercase font-mono tracking-[0.1em] text-xs',
        link: 'text-primary underline-offset-4 hover:underline',
        nav: 'text-primary/50 hover:text-primary/100 [&.active]:text-primary/100 p-0 pt-2 pb-6 uppercase font-mono tracking-[0.1em] text-xs',
        
        // Custom Variants from Havinic
        exploreBlack: 'bg-[var(--black)] text-[var(--white)] rounded-[8px] flex justify-center items-center gap-[9px] transition-all duration-600 ease-in-out px-[18px] md:px-[20px] lg:px-[24px] py-[12px] lg:py-[14px] hover:bg-[var(--white)] hover:text-[var(--black)]',
        explore: 'bg-[var(--white)] text-[var(--black)]  rounded-[8px] flex justify-center items-center gap-[9px] transition-all duration-600 ease-in-out px-[18px] md:px-[20px] lg:px-[24px] py-[12px] lg:py-[14px] hover:bg-[var(--black)] hover:text-[var(--white)]',

        linkPrimary: 'bg-transparent border-b border-black text-black w-full max-w-[148px] justify-center pb-[5px] rounded-none px-0 py-0 h-auto hover:opacity-70',

        blog:'bg-[var(--light-grey)] rounded-[20px] min-h-[50px] md:min-h-[80px] lg:min-h-[120px] justify-center items-center',
          
        footer: 'bg-[var(--white)] text-black rounded-[5px] gap-[6px] flex justify-center items-center px-[18px] py-[12px] lg:px-[24px] lg:py-[10px] max-w-none md:max-w-[155px] lg:max-w-none hover:bg-gray-100',

        primaryUnderline: 'text-[var(--black)] border-b border-[var(--black)] p-2 flex items-center rounded-none gap-2 hover:opacity-80 [&_svg]:transition-transform hover:[&_svg]:rotate-[45deg]',

        primary: 'text-[var(--black)] border-[var(--black)] p-2 flex items-center rounded-none gap-2 hover:opacity-80 [&_svg]:transition-transform hover:[&_svg]:rotate-[45deg]'
      },
      size: {
        clear: '',
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type ButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
