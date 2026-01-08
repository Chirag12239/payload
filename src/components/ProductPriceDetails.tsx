import React from 'react'
import Image from 'next/image'
import image from '@/assets/CartIcon.png'

type Props = {
  title: string
  price: React.ReactNode
}

export const ProductPriceDetails: React.FC<Props> = ({ title, price }) => {
  return (
    <div
      className="product-price-details w-full p-5 lg:px-[30px] flex flex-wrap md:flex-nowrap justify-between items-end rounded-[10px] bg-white no-underline gap-5 md:gap-0"
      style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
    >
      <div className="product-price-wrap flex flex-col gap-1">
        <div className="h4 font-[DM Sans] font-medium text-lg leading-[140%] text-[var(--heading-color)]">
          {title}
        </div>
        <p className="paragraph-large font-[DM Sans] text-base leading-[150%] text-[var(--paragraph-color)]">
          {price}
        </p>
      </div>

      <Image
        src={image}
        loading="lazy"
        alt="Add to cart"
        className="cart-icon w-8 h-8 object-contain cursor-pointer transition-transform hover:scale-110"
      />
    </div>
  )
}
