'use client'

import Link from 'next/link'


export default function MobileNavMenu (
    {
        isMobile, isMobileMenuOpen
        
    }: {
        isMobile: boolean;
        isMobileMenuOpen: boolean;
    }
) {

    const menuItems = [
        {
            name: "Features",
            href: '#features',
        },
        {
            name: "Testimonials",
            href: '#testimonials'
        },
        {
            name: 'FAQ',
            href: '#faq'
        },
        {
            name: "Blog",
            href: '#blog'
        },
        {
            name: "About us",
            href: "#about"
        }
    ]

    return (
        <div className='flex flex-col gap-2'>
        {
            isMobile && isMobileMenuOpen && (
                <div className='md:hidden' id="mobile-menu">
                    <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                        {
                            menuItems.map((item) => (
                                <Link key={item.name} href={item.href} className='text-gray-700 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2  rounded-md text-base font-medium'>
                                    {item.name}
                                </Link>
                            ))
                        }
                    </div>
                </div>
            )
        }
        </div>
    )
}