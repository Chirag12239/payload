'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import { Media } from '@/components/Media'
import type { Category } from '@/payload-types'
import './styles.css'

type CategoryCardProps = {
  category: Category
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const arrowWrapRef = useRef<HTMLDivElement>(null)
  const { title, media, id } = category

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!arrowWrapRef.current) return

    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    // Apply translation to the arrow wrapper
    // We limit the movement slightly if needed, or just let it follow exactly.
    // The user request "move with the pointer" usually implies a direct or slightly damped follow.
    // Let's do a direct follow relative to center for the "magnetic" feel within the container.
    arrowWrapRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
  }

  const handleMouseLeave = () => {
    if (!arrowWrapRef.current) return
    // Reset to center
    arrowWrapRef.current.style.transform = 'translate3d(0px, 0px, 0px)'
  }

  return (
    <Link
      href={`/shop?category=${id}`}
      className="relative group w-full aspect-square overflow-hidden bg-gray-100 dark:bg-zinc-800 rounded-xl block"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image */}
      {media && typeof media === 'object' && (
        <Media
          resource={media}
          fill
          imgClassName="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
      )}

      {/* Overlay */}
      <div className="category-overlay-box mobile-hide">
        <div
          ref={arrowWrapRef}
          className="category-arrow-wrap pointer-events-none" // pointer-events-none so the mouse event stays on the parent
          style={{
            willChange: 'transform',
            transform: 'translate3d(0px, 0px, 0px)',
            transition: 'transform 0.1s ease-out', // Add a little smoothing
          }}
        >
          <div className="hover-arrow w-embed border border-white rounded-full border-2">
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.3577 8.98941C17.4267 8.98891 17.4957 8.98841 17.5668 8.9879C17.7974 8.98653 18.028 8.98692 18.2586 8.98732C18.4241 8.98671 18.5897 8.98601 18.7553 8.98521C19.2047 8.98338 19.6541 8.98314 20.1035 8.9833C20.4789 8.98331 20.8543 8.98261 21.2297 8.98192C22.1155 8.98034 23.0012 8.9801 23.887 8.98066C24.8003 8.98121 25.7135 8.97933 26.6267 8.97628C27.4112 8.97376 28.1957 8.97283 28.9802 8.97315C29.4486 8.97332 29.9169 8.97287 30.3852 8.97085C30.8259 8.96902 31.2664 8.96918 31.707 8.97085C31.8684 8.97113 32.0299 8.97071 32.1913 8.96954C33.8226 8.95847 33.8226 8.95847 34.449 9.55392C34.8592 10.0055 34.9205 10.4271 34.9151 11.0172C34.9152 11.0855 34.9152 11.1538 34.9153 11.2242C34.9152 11.453 34.9139 11.6817 34.9126 11.9105C34.9123 12.0746 34.9121 12.2386 34.9119 12.4027C34.9111 12.8484 34.9093 13.2941 34.9072 13.7397C34.9055 14.1119 34.9043 14.484 34.903 14.8561C34.9 15.7341 34.8961 16.6122 34.8916 17.4902C34.8871 18.3957 34.8843 19.3012 34.8824 20.2067C34.8807 20.9843 34.8778 21.7619 34.8739 22.5395C34.8715 23.0039 34.8697 23.4682 34.8691 23.9326C34.8685 24.3694 34.8664 24.8062 34.8631 25.243C34.8621 25.4032 34.8617 25.5633 34.8619 25.7234C34.8621 25.9424 34.8602 26.1614 34.8579 26.3804C34.8584 26.4434 34.8589 26.5064 34.8595 26.5713C34.8508 27.0692 34.7126 27.5036 34.3696 27.8757C33.8737 28.3123 33.4191 28.3621 32.7796 28.3506C32.2848 28.3027 31.9473 28.1215 31.6209 27.7499C31.3524 27.3708 31.2616 27.1492 31.2592 26.6801C31.2579 26.5281 31.2579 26.5281 31.2564 26.373C31.2563 26.2609 31.2561 26.1488 31.2559 26.0367C31.2551 25.9185 31.2543 25.8003 31.2534 25.6821C31.2512 25.3614 31.2499 25.0407 31.2489 24.72C31.2476 24.3847 31.2454 24.0495 31.2433 23.7142C31.2394 23.0795 31.2364 22.4447 31.2337 21.81C31.2305 21.0873 31.2265 20.3646 31.2224 19.642C31.2139 18.1554 31.2065 16.6689 31.2 15.1824C31.1594 15.2231 31.1188 15.2638 31.0769 15.3058C28.671 17.7191 26.2642 20.1315 23.8562 22.5429C23.5671 22.8324 23.278 23.1219 22.9889 23.4115C22.9313 23.4691 22.8738 23.5268 22.8145 23.5862C21.8825 24.5195 20.9512 25.4535 20.02 26.3877C19.0646 27.3462 18.1085 28.3041 17.1519 29.2614C16.5616 29.8521 15.9718 30.4433 15.3826 31.0352C14.9785 31.441 14.5739 31.8462 14.1687 32.2509C13.935 32.4844 13.7015 32.7182 13.4688 32.9527C13.2556 33.1675 13.0416 33.3816 12.827 33.5951C12.7131 33.7088 12.6 33.8233 12.4869 33.9378C12.042 34.3785 11.6359 34.7416 11.001 34.8576C10.4118 34.8505 9.9695 34.7642 9.53502 34.3472C9.16896 33.937 8.99731 33.629 8.98602 33.0685C8.98274 32.98 8.97946 32.8915 8.97607 32.8003C9.09438 32.0623 9.70313 31.5519 10.2118 31.0482C10.2914 30.9684 10.3711 30.8886 10.4507 30.8087C10.6683 30.5905 10.8868 30.373 11.1053 30.1557C11.3413 29.9207 11.5766 29.6851 11.812 29.4495C12.2195 29.0419 12.6275 28.6347 13.0357 28.2278C13.626 27.6395 14.2156 27.0506 14.805 26.4615C15.7614 25.5056 16.7184 24.5503 17.6757 23.5953C18.6055 22.6678 19.5349 21.7401 20.4641 20.812C20.55 20.7261 20.55 20.7261 20.6377 20.6385C20.9252 20.3514 21.2127 20.0642 21.5002 19.777C23.8839 17.3959 26.2684 15.0156 28.6536 12.636C28.5928 12.6359 28.532 12.6358 28.4694 12.6356C26.9892 12.6326 25.5091 12.6277 24.0289 12.6209C23.3131 12.6176 22.5973 12.615 21.8814 12.6137C21.2574 12.6127 20.6334 12.6105 20.0093 12.6069C19.679 12.605 19.3487 12.6037 19.0184 12.6038C18.7072 12.6039 18.396 12.6024 18.0848 12.5998C17.9709 12.5991 17.857 12.5989 17.7431 12.5994C17.0651 12.6018 16.4789 12.6017 15.962 12.1064C15.5819 11.6739 15.4871 11.3711 15.4854 10.7981C15.484 10.6924 15.4827 10.5868 15.4812 10.4779C15.5333 9.94338 15.7671 9.61334 16.1682 9.26823C16.5644 9.02495 16.9031 8.9863 17.3577 8.98941Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="top-0 left-0 right-0 z-20 text-center pointer-events-none">
        <span className="inline-block bg-white/90 text-black rounded px-4 py-2 font-semibold shadow-lg backdrop-blur-sm">
          {title}
        </span>
      </div>
    </Link>
  )
}
