'use client'

import { usePathname } from 'next/navigation'
import React from 'react'
import Link from 'next/link'
import { Cart } from '@/components/Cart' // Reusing Cart logic if compatible
import type { Header } from 'src/payload-types'
import './NavStyles.css' // Import the CSS
import { cn } from '@/utilities/cn'

type Props = {
  header: Header
}

const DEFAULT_NAV_ITEMS: NonNullable<Header['navItems']> = [
  {
    link: {
      type: 'custom',
      url: '/',
      label: 'Home',
    },
    id: 'default-home',
  },
  {
    link: {
      type: 'custom',
      url: '/shop',
      label: 'Shop',
    },
    id: 'default-shop',
  },
  {
    link: {
      type: 'custom',
      url: '/account',
      label: 'Account',
    },
    id: 'default-account',
  },
]

export function HeaderClient({ header }: Props) {
  const pathname = usePathname()
  const menu = header.navItems?.length ? header.navItems : DEFAULT_NAV_ITEMS
  const logo = header.logo

  return (
    <div className="navbar-section">
      <div className="navbar-layout">
        <span className="navbar-wrap flex items-center justify-between container mx-auto px-4 pb-2 relative">
          
          {/* Logo Section - Left */}
          {/* Left Spacer - Hidden on Mobile, Spacer on Desktop */}
          <div className="flex-1 hidden md:block"></div>

          {/* Navigation Menu - Center */}
          {/* Center Group - Logo + Nav */}
          <div className="navbar-box flex-[2] flex justify-center items-center flex-wrap z-10 rounded-full bg-white">
             <div className="relative flex justify-center items-center gap-8">
              {/* Logo - Always visible */}
              <Link href="/" aria-current="page" className="navbar-logo-wrap w-inline-block w--current">
                  {logo && typeof logo === 'object' && logo.url ? (
                      <img src={logo.url} loading="lazy" alt={logo.alt || 'Logo'} className="h-8 w-auto" />
                  ) : (
                    <img src="https://cdn.prod.website-files.com/684fb0552d2b59f6346fce5b/686136ece890c640862e30b7_Havinic%20Logo%20Image.svg" loading="lazy" alt="Havinic Logo" />
                  )}
              </Link>

              {/* Navigation Menu - Desktop Only */}
              <div
                data-animation="default"
                data-collapse="medium"
                data-duration="400"
                data-easing="ease"
                data-easing2="ease"
                role="banner"
                className="navbar-menu w-nav hidden md:block"
              >
                <div className="navbar-container w-container">
                  <nav role="navigation" className="nav-menu-wrap w-nav-menu flex items-center gap-6">
                    {menu.map((item, index) => {
                         const linkUrl = item.link.type === 'reference' && typeof item.link.reference?.value === 'object' 
                                            ? generateLinkUrl(item.link.reference.value)
                                            : item.link.url || '/';
                         const isActive = pathname === linkUrl || (linkUrl !== '/' && pathname.startsWith(linkUrl));
                         const hasColumns = item.columns && item.columns.length > 0;

                         if (hasColumns) {
                             return (
                                <div
                                    key={index}
                                    data-hover="true"
                                    data-delay="0"
                                    className="mega-menu-dropdown w-dropdown group static"
                                    style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}
                                >
                                  <div
                                    className="megamenu-dropdown-toggle w-dropdown-toggle flex items-center gap-1 cursor-pointer"
                                    id={`w-dropdown-toggle-${index}`}
                                    aria-controls={`w-dropdown-list-${index}`}
                                    aria-haspopup="menu"
                                    aria-expanded="false"
                                    role="button"
                                    tabIndex={0}
                                  >
                                    <div className="menu-text">{item.link.label}</div>
                                    <div className="page-icon w-embed transition-transform duration-300 group-hover:rotate-45" style={{ width: 11, height: 11 }}>
                                         <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_127_193)">
                                        <path d="M5.78862 0.53052C5.8843 0.586332 5.94084 0.669786 5.97539 0.77344C5.97723 0.830815 5.97793 0.88772 5.97774 0.945095C5.97776 0.971729 5.97776 0.971729 5.97779 0.998901C5.97782 1.05864 5.97771 1.11838 5.9776 1.17812C5.9776 1.22084 5.9776 1.26357 5.97761 1.3063C5.97762 1.42251 5.9775 1.53872 5.97737 1.65493C5.97725 1.7763 5.97723 1.89767 5.97721 2.01904C5.97716 2.22281 5.97704 2.42659 5.97686 2.63037C5.97668 2.84028 5.97654 3.05018 5.97646 3.26008C5.97645 3.27949 5.97645 3.27949 5.97645 3.29928C5.97642 3.36418 5.9764 3.42908 5.97637 3.49397C5.97617 4.03244 5.97582 4.57091 5.97539 5.10938C5.99759 5.10931 6.01979 5.10923 6.04267 5.10916C6.58288 5.10742 7.12309 5.10614 7.6633 5.10533C7.71531 5.10525 7.76731 5.10517 7.81932 5.10509C7.83224 5.10507 7.84517 5.10504 7.85849 5.10502C8.05467 5.10471 8.25085 5.10416 8.44703 5.10348C8.67472 5.10271 8.90242 5.1022 9.13011 5.10203C9.25068 5.10192 9.37124 5.10169 9.49181 5.10112C9.60531 5.10059 9.7188 5.10042 9.8323 5.10054C9.87394 5.10052 9.91557 5.10036 9.9572 5.10006C10.0141 5.09967 10.071 5.09977 10.1279 5.09998C10.1443 5.09975 10.1608 5.09953 10.1777 5.09929C10.304 5.10057 10.4119 5.1325 10.5035 5.22298C10.5106 5.23423 10.5177 5.24549 10.5249 5.25708C10.5324 5.26839 10.5398 5.27969 10.5475 5.29134C10.6068 5.40109 10.6042 5.5455 10.5721 5.66388C10.5284 5.76166 10.4635 5.82051 10.3699 5.8711C10.293 5.89673 10.2198 5.89325 10.1397 5.89298C10.113 5.893 10.113 5.893 10.0859 5.89303C10.0261 5.89306 9.96639 5.89295 9.90665 5.89284C9.86392 5.89284 9.82119 5.89284 9.77847 5.89285C9.66226 5.89286 9.54604 5.89274 9.42983 5.89261C9.30847 5.89249 9.1871 5.89247 9.06573 5.89245C8.86195 5.8924 8.65817 5.89227 8.45439 5.8921C8.24449 5.89192 8.03458 5.89178 7.82468 5.8917C7.81175 5.8917 7.79881 5.89169 7.78548 5.89168C7.72059 5.89166 7.65569 5.89163 7.59079 5.89161C7.05233 5.89141 6.51386 5.89106 5.97539 5.89063C5.97546 5.91283 5.97553 5.93503 5.97561 5.95791C5.97734 6.49812 5.97862 7.03833 5.97944 7.57854C5.97952 7.63055 5.9796 7.68255 5.97968 7.73456C5.9797 7.74748 5.97972 7.76041 5.97974 7.77373C5.98006 7.96991 5.98061 8.16609 5.98128 8.36227C5.98206 8.58996 5.98256 8.81766 5.98274 9.04535C5.98284 9.16592 5.98308 9.28648 5.98365 9.40705C5.98418 9.52055 5.98434 9.63404 5.98422 9.74754C5.98425 9.78918 5.9844 9.83081 5.9847 9.87244C5.98509 9.92936 5.985 9.98625 5.98478 10.0432C5.98501 10.0596 5.98524 10.076 5.98547 10.0929C5.9842 10.2192 5.95226 10.3271 5.86179 10.4187C5.85053 10.4258 5.83928 10.4329 5.82768 10.4402C5.81638 10.4476 5.80507 10.455 5.79343 10.4627C5.68368 10.522 5.53927 10.5194 5.42088 10.4873C5.3231 10.4437 5.26425 10.3787 5.21367 10.2852C5.18803 10.2083 5.19152 10.1351 5.19179 10.0549C5.19176 10.0283 5.19176 10.0283 5.19174 10.0011C5.19171 9.94136 5.19181 9.88163 5.19192 9.82189C5.19193 9.77916 5.19192 9.73643 5.19191 9.69371C5.19191 9.5775 5.19202 9.46128 5.19216 9.34507C5.19228 9.2237 5.19229 9.10234 5.19231 8.98097C5.19237 8.77719 5.19249 8.57341 5.19266 8.36963C5.19284 8.15973 5.19298 7.94982 5.19306 7.73992C5.19307 7.72698 5.19307 7.71405 5.19308 7.70072C5.19311 7.63583 5.19313 7.57093 5.19315 7.50603C5.19336 6.96757 5.1937 6.4291 5.19414 5.89063C5.17194 5.8907 5.14973 5.89077 5.12686 5.89085C4.58665 5.89258 4.04644 5.89386 3.50623 5.89468C3.45422 5.89476 3.40221 5.89484 3.35021 5.89492C3.33728 5.89494 3.32436 5.89496 3.31104 5.89498C3.11486 5.8953 2.91868 5.89585 2.7225 5.89652C2.4948 5.8973 2.26711 5.8978 2.03941 5.89798C1.91885 5.89808 1.79828 5.89832 1.67772 5.89889C1.56422 5.89942 1.45072 5.89958 1.33722 5.89946C1.29559 5.89949 1.25395 5.89964 1.21232 5.89994C1.15541 5.90033 1.09851 5.90024 1.0416 5.90002C1.02518 5.90025 1.00877 5.90048 0.991854 5.90071C0.865568 5.89944 0.757661 5.8675 0.666016 5.77703C0.658941 5.76577 0.651866 5.75452 0.644577 5.74292C0.63715 5.73162 0.629722 5.72031 0.62207 5.70867C0.562739 5.59892 0.565316 5.45451 0.597427 5.33612C0.641093 5.23834 0.706033 5.17949 0.799606 5.12891C0.876508 5.10327 0.949702 5.10676 1.02986 5.10703C1.05649 5.107 1.05649 5.107 1.08366 5.10698C1.1434 5.10695 1.20314 5.10705 1.26288 5.10716C1.3056 5.10717 1.34833 5.10716 1.39106 5.10715C1.50727 5.10715 1.62348 5.10726 1.73969 5.1074C1.86106 5.10752 1.98243 5.10753 2.1038 5.10755C2.30757 5.10761 2.51135 5.10773 2.71513 5.1079C2.92504 5.10808 3.13494 5.10822 3.34484 5.1083C3.36425 5.10831 3.36425 5.10831 3.38404 5.10832C3.44894 5.10835 3.51383 5.10837 3.57873 5.10839C4.1172 5.1086 4.65567 5.10894 5.19414 5.10938C5.19407 5.08718 5.19399 5.06497 5.19392 5.0421C5.19218 4.50189 5.1909 3.96168 5.19009 3.42146C5.19001 3.36946 5.18993 3.31745 5.18985 3.26545C5.18983 3.25252 5.18981 3.2396 5.18978 3.22628C5.18947 3.0301 5.18891 2.83392 5.18824 2.63774C5.18747 2.41004 5.18696 2.18235 5.18679 1.95465C5.18668 1.83409 5.18645 1.71352 5.18588 1.59296C5.18535 1.47946 5.18518 1.36596 5.1853 1.25246C5.18528 1.21083 5.18512 1.16919 5.18482 1.12756C5.18443 1.07065 5.18453 1.01375 5.18474 0.956839C5.18451 0.940423 5.18429 0.924007 5.18405 0.907094C5.18533 0.780808 5.21726 0.672901 5.30774 0.581255C5.31899 0.574181 5.33025 0.567106 5.34184 0.559817C5.35315 0.55239 5.36445 0.544962 5.3761 0.53731C5.49585 0.472574 5.66552 0.47555 5.78862 0.53052Z" fill="black"></path>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_127_193">
                                        <rect width="10" height="10" fill="white" transform="translate(0.584717 0.5)"></rect>
                                        </clipPath>
                                        </defs>
                                        </svg>
                                    </div>
                                  </div>
                                  
                                  {/* Dynamic Mega Menu Dropdown */}
                                  <nav
                                    className="mega-menu-dropdown-list w-dropdown-list absolute top-full left-0 bg-white shadow-lg p-5 rounded-xl invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out"
                                    id={`w-dropdown-list-${index}`}
                                    aria-labelledby={`w-dropdown-toggle-${index}`}
                                  >
                                    <div className="mega-menu-links-content-wrap flex gap-10">
                                      <div className="mega-menu-content-wrap flex gap-10">
                                        {item.columns.map((column, colIndex) => (
                                          <div key={colIndex} className="mega-menu-content flex flex-col gap-2">
                                            {column.title && (
                                                <h3 className="h4 pages-text font-bold mb-2">{column.title}</h3>
                                            )}
                                            {column.links?.map((linkItem, linkIndex) => {
                                                const subLinkUrl = linkItem.link.type === 'reference' && typeof linkItem.link.reference?.value === 'object' 
                                                    ? generateLinkUrl(linkItem.link.reference.value)
                                                    : linkItem.link.url || '#';
                                                
                                                const isSubActive = pathname === subLinkUrl;

                                                return (
                                                    <a 
                                                        key={linkIndex}
                                                        href={subLinkUrl} 
                                                        aria-current={isSubActive ? 'page' : undefined}
                                                        className={cn("paragraph-large link-text hover:text-gray-600 transition-colors", {"w--current": isSubActive})} 
                                                        tabIndex={0}
                                                    >
                                                        {linkItem.link.label}
                                                    </a>
                                                )
                                            })}
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </nav>
                                </div>
                             )
                         }
                         
                         // Standard Link
                         return (
                            <Link
                                key={index}
                                href={linkUrl}
                                aria-current={isActive ? 'page' : undefined}
                                className={cn("menu-text w-nav-link", { "w--current": isActive })}
                                style={{ maxWidth: '940px' }}
                            >
                              {item.link.label}
                            </Link>
                         )
                    })}
                  </nav>
                </div>
              </div>

              {/* Cart - Centered with Logo and Nav */}
              <div className="w-commerce-commercecartwrapper cart-icon z-20">
                  <Cart />
              </div>

              </div>
          </div>

          {/* Cart Section and Mobile Button - Right */}
          <div className="cart-details-wrap flex-1 flex justify-end gap-4 items-center">

             {/* Mobile Menu Button */}
             <div className="menu-button w-nav-button md:hidden" style={{ WebkitUserSelect: 'text' }} aria-label="menu" role="button" tabIndex={0} aria-controls="w-nav-overlay-0" aria-haspopup="menu" aria-expanded="false">
                <div className="nav-menu-icon w-icon-nav-menu">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
          </div>

        </span>
      </div>
    </div>
  )
}

// Helper to generate links
const generateLinkUrl = (doc: any) => {
    // If doc is just an ID (string) because of shallow population, we can't get the slug. 
    // Return root or handle appropriately. 
    // With depth=2 this should be an object.
    if (!doc || typeof doc !== 'object') return '/'
    
    return doc?.slug ? `/${doc.slug}` : '/';
}
