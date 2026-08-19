'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'

type NavChild = { name: string; href: string; desc: string }
type NavItem = { name: string; href: string; children?: NavChild[] }

const menuItems: NavItem[] = [
    { name: 'Home', href: '/' },
    {
        name: 'Tentang Kami',
        href: '/tentang-kami',
        children: [
            {
                name: 'Tentang Agro Hero',
                href: '/tentang-kami',
                desc: 'Visi, misi, dan tim di balik Agro Hero',
            },
            {
                name: 'Cara Penggunaan',
                href: '/tentang-kami/cara-penggunaan',
                desc: 'Panduan video untuk investor & petani',
            },
        ],
    },
    { name: 'Blog', href: '/blog' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20)
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
                    <ul className="flex gap-1 text-sm font-medium text-slate-600">
                        {menuItems.map((item, index) => (
                            <li key={index} className="relative group">
                                {item.children ? (
                                    <>
                                        <button className="flex items-center gap-1 rounded-full px-3 py-1.5 transition-colors hover:bg-white/50 hover:text-slate-900">
                                            {item.name}
                                            <ChevronDown className="size-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180" />
                                        </button>
                                        {/* Dropdown panel — shown on group hover */}
                                        <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                                            <div className="w-60 rounded-xl border border-slate-100 bg-white shadow-xl p-1.5">
                                                {item.children.map((child) => (
                                                    <Link
                                                        key={child.href}
                                                        href={child.href}
                                                        className="block rounded-lg px-3 py-2.5 hover:bg-slate-50 transition-colors"
                                                    >
                                                        <span className="block text-sm font-semibold text-slate-800">{child.name}</span>
                                                        <span className="block text-xs text-slate-400 mt-0.5 leading-snug">{child.desc}</span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="block rounded-full px-3 py-1.5 transition-colors hover:bg-white/50 hover:text-slate-900">
                                        {item.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:flex">
                    <Button asChild className="w-full rounded-md bg-white text-black hover:bg-white/50 font-medium px-6 flex items-center gap-2 border border-gray-200">
                        <a href="https://play.google.com/store/apps/details?id=com.agrohero.app" target="_blank" rel="noopener noreferrer">
                            Download App
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </a>
                    </Button>
                </div>

                {/* Mobile Menu Dropdown */}
                {menuState && (
                    <div className="absolute left-0 top-full mt-2 w-full rounded-3xl border border-white/20 bg-white/70 p-6 shadow-xl backdrop-blur-xl md:hidden">
                        <ul className="space-y-1 text-sm font-medium text-slate-700">
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    {item.children ? (
                                        <div>
                                            <p className="text-center px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
                                                {item.name}
                                            </p>
                                            <div className="space-y-0.5">
                                                {item.children.map((child) => (
                                                    <Link
                                                        key={child.href}
                                                        href={child.href}
                                                        onClick={() => setMenuState(false)}
                                                        className="block text-center rounded-full px-3 py-2 hover:bg-white/50 text-slate-700"
                                                    >
                                                        {child.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            onClick={() => setMenuState(false)}
                                            className="block text-center rounded-full px-3 py-2 hover:bg-white/50">
                                            {item.name}
                                        </Link>
                                    )}
                                </li>
                            ))}
                            <li className="pt-2">
                                <Button asChild className="w-full rounded-md bg-white text-black hover:bg-white/50 font-medium px-6 flex items-center gap-2 border border-gray-200">
                                    <a href="https://play.google.com/store/apps/details?id=com.agrohero.app" target="_blank" rel="noopener noreferrer">
                                        Download App
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                                    </a>
                                </Button>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    )
}
