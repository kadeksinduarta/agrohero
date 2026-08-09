'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'

const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 py-4 sm:px-6">
            <nav
                data-state={menuState ? 'active' : 'inactive'}
                className={cn(
                    'relative flex w-full max-w-4xl items-center justify-between rounded-md border border-white/20 bg-white/40 px-4 py-2.5 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] backdrop-blur-md transition-all duration-300',
                    isScrolled ? 'bg-white/60 shadow-md' : ''
                )}>

                {/* Logo */}
                <div className="flex shrink-0 items-center">
                    <Link href="/" aria-label="home" className="flex items-center space-x-2">
                        <Image
                            src="/agro-hero.png"
                            alt="Agro Hero Logo"
                            width={120}
                            height={32}
                            className="h-7 w-auto object-contain drop-shadow-sm contrast-125 brightness-90"
                            priority
                        />
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setMenuState(!menuState)}
                    aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                    className="relative z-20 block p-2 md:hidden">
                    <Menu className={cn("size-5 transition-transform duration-200", menuState ? "rotate-180 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100")} />
                    <X className={cn("absolute inset-0 m-auto size-5 transition-transform duration-200", menuState ? "rotate-0 scale-100 opacity-100" : "-rotate-180 scale-0 opacity-0")} />
                </button>

                {/* Desktop Links */}
                <div className="hidden md:block">
                    <ul className="flex gap-6 text-sm font-medium text-slate-600">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.href}
                                    className="rounded-full px-3 py-1.5 transition-colors hover:bg-white/50 hover:text-slate-900">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:flex">
                      <Button className="w-full rounded-md bg-white text-black hover:bg-white/50 font-medium px-6 flex items-center gap-2">
                            Download App
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                     </Button>
                </div>

                {/* Mobile Menu Dropdown */}
                {menuState && (
                    <div className="absolute left-0 top-full mt-2 w-full rounded-3xl border border-white/20 bg-white/70 p-6 shadow-xl backdrop-blur-xl md:hidden">
                        <ul className="space-y-4 text-center text-sm font-medium text-slate-700">
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.href}
                                        onClick={() => setMenuState(false)}
                                        className="block rounded-full px-3 py-2 hover:bg-white/50">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                            <li className="pt-2">
                                <Button
                                    asChild
                                    className="w-full rounded-full bg-slate-800 font-semibold text-white">
                                    <Link href="#" onClick={() => setMenuState(false)}>
                                        Download App
                                    </Link>
                                </Button>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    )
}
