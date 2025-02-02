'use client'
import {useState, useEffect} from 'react';
import Link from 'next/link'
import { Button } from './ui/button';
import { Menu, X} from "lucide-react";

export default function NavMenu () {

    const [isMobile, setIsMobile] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
        checkIfMobile();
        window.addEventListener("resize", checkIfMobile);
        return () => window.removeEventListener("resize", checkIfMobile);
    }, []);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

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
        // {
        //     name: "Blog",
        //     href: '#blog'
        // },
        // {
        //     name: "About us",
        //     href: "#about"
        // }
    ]

    return (
        <>
        <div>
            {
                isMobile ? (
                    <div className="flex items-center">
                        <Button onClick={toggleMobileMenu} aria-expanded={isMobileMenuOpen}>
                            <span className="sr-only"> Open main menu</span>
                            {
                                isMobileMenuOpen ? (
                                    <X className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <Menu className="block h-6 w-6" aria-hidden="true" />
                                )
                            }
                        </Button>
                    </div>
                ) : (
                    <div className='hidden md:flex md:items-center md:space-x-4'>
                        {
                            menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className='text-gray-700 dark:text-gray-50 hover:bg-gray-100 dark:hover:text-black hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium'>
                                        {item.name}
                                    </Link>
                            ))
                        }
                    </div>
                )
            }
      
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
        </>
    )
}