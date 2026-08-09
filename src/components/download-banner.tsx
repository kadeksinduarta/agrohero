import React from 'react'
import { Button } from '@/components/ui/button'

export default function DownloadBanner() {
    return (
        <section className="py-20 px-6">
            <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-8 sm:p-14 relative overflow-hidden shadow-2xl">
                {/* Organic background glows */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                    <div className="lg:col-span-7 space-y-6">
                        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-orange-500/20 text-orange-400 border border-orange-500/30">
                            Aplikasi Mobile Agro Hero
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
                            Pantau Lahan & Hasil Panen Langsung dari Genggaman.
                        </h2>
                        <p className="text-slate-300 text-base leading-relaxed">
                            Unduh aplikasi Agro Hero untuk memantau perkembangan fisik tanaman berbasis GPS (Agro Hero ID), laporan audit keuangan, dan penarikan bagi hasil secara real-time.
                        </p>

                        {/* Store Buttons */}
                        <div className="flex flex-wrap items-center gap-4 pt-2">
                            <Button size="lg" className="h-14 rounded-xl bg-white text-slate-900 hover:bg-slate-100 shadow-xl px-6">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="mr-3 size-6 fill-current">
                                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                                </svg>
                                <div className="flex flex-col items-start text-left">
                                    <span className="text-[10px] leading-none opacity-70 uppercase tracking-wider">Get it on</span>
                                    <span className="text-sm font-semibold leading-tight mt-0.5">Google Play</span>
                                </div>
                            </Button>
                        </div>
                    </div>

                    {/* App Mockup Visual */}
                    <div className="lg:col-span-5 flex justify-center items-center mt-6 lg:mt-0">
                        <div className="relative w-64 rounded-[2.5rem] bg-slate-950 p-3 shadow-2xl border-4 border-slate-700">
                            <div className="w-full h-full rounded-[2rem] bg-slate-900 overflow-hidden relative flex flex-col items-center justify-center text-center p-4">
                                <img src="/mockup-1.jpeg" alt="Agro Hero App" className="w-full h-full object-cover rounded-xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
