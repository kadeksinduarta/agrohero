import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="mx-4 mb-4 rounded-3xl border border-white/40 bg-white/30 backdrop-blur-md">
            <div className="mx-auto max-w-5xl px-6 py-8">
                
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo & Tagline */}
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <Link href="/" aria-label="home">
                            <Image
                                src="/agro-hero.png"
                                alt="Agro Hero Logo"
                                width={120}
                                height={32}
                                className="h-7 w-auto object-contain brightness-90 contrast-125"
                            />
                        </Link>
                        <p className="text-xs text-slate-500 text-center md:text-left">
                            Platform investasi pertanian transparan & berdampak nyata.
                        </p>
                    </div>

                    {/* Simple Links */}
                    <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-600">
                        <Link href="/#fitur" className="hover:text-slate-900 transition">Fitur</Link>
                        <Link href="/about" className="hover:text-slate-900 transition">Tentang Kami</Link>
                        <Link href="#faq" className="hover:text-slate-900 transition">FAQ</Link>
                    </div>

                    {/* Socials */}
                    <div className="flex gap-3">
                        <Link href="#" target="_blank" aria-label="Instagram" className="text-slate-500 hover:text-slate-800 transition">
                            <svg className="size-5" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" /></svg>
                        </Link>
                        <Link href="#" target="_blank" aria-label="TikTok" className="text-slate-500 hover:text-slate-800 transition">
                            <svg className="size-5" viewBox="0 0 24 24"><path fill="currentColor" d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48" /></svg>
                        </Link>
                    </div>
                </div>

                <div className="mt-8 flex flex-col md:flex-row items-center justify-between border-t border-white/30 pt-4 text-xs text-slate-500">
                    <span>© {new Date().getFullYear()} Agro Hero. All rights reserved.</span>
                    <div className="flex gap-4 mt-2 md:mt-0">
                        <Link href="/kebijakan-privasi" className="hover:text-slate-800 transition">Kebijakan Privasi</Link>
                        <Link href="/syarat-ketentuan" className="hover:text-slate-800 transition">Syarat & Ketentuan</Link>
                    </div>
                </div>

            </div>
        </footer>
    )
}
