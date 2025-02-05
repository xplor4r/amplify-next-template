import Link from 'next/link'
import AuthButton from './header-auth'
import NavMenu from './NavMenu'
// import MobileNavMenu from './MobileNavMenu'
import { ThemeSwitcher } from './theme-switcher'

export function NavBar () {
    return (
        <header className="py-4 shadow-sm fixed top-0 w-full z-10 bg-background/95">
            <nav className="flex items-center gap-10 container mx-auto font-semibold">
                <Link href="/" className="mr-auto text-black text-center items-center justify-self-center text-2xl dark:text-gray-50">
                    <h1 className='text-lg md:text-2xl'> 💸 Wealth Assist</h1>
                </Link>
                <div className='hidden md:block'>
                 <NavMenu  />
                 </div>
                 <ThemeSwitcher />
                <span className='text-lg'>
                    <AuthButton />
                </span>  
            </nav>
        </header>
    )
}