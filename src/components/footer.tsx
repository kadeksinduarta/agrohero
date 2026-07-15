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
                    <div className="flex flex-col items-center md:items-end gap-2">
                        <span className="text-sm font-semibold text-slate-700">@agrohero.ind</span>
                        <div className="flex gap-4">
                            <Link href="https://instagram.com/agrohero.idn" target="_blank" aria-label="Instagram" className="text-slate-500 hover:text-slate-800 transition">
                                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                            </Link>
                            <Link href="https://facebook.com/agrohero.idn" target="_blank" aria-label="Facebook" className="text-slate-500 hover:text-slate-800 transition">
                                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                            </Link>
                            <Link href="https://twitter.com/agrohero.idn" target="_blank" aria-label="Twitter" className="text-slate-500 hover:text-slate-800 transition">
                                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                            </Link>
                            <Link href="https://threads.net/@agrohero.idn" target="_blank" aria-label="Threads" className="text-slate-500 hover:text-slate-800 transition">
                                <svg className="size-5" viewBox="0 0 192 192" fill="currentColor"><path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z" /></svg>
                            </Link>
                            <Link href="https://www.youtube.com/@agrohero_indonesia" target="_blank" aria-label="YouTube" className="text-slate-500 hover:text-slate-800 transition">
                                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                            </Link>
                            <Link href="https://tiktok.com/@agrohero.idn" target="_blank" aria-label="TikTok" className="text-slate-500 hover:text-slate-800 transition">
                                <svg className="size-5" viewBox="0 0 24 24"><path fill="currentColor" d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48" /></svg>
                            </Link>
                        </div>
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
