import React from 'react'
import { Button } from '@/components/ui/button'

export default function DownloadBanner() {
    return (
        <section className="py-20 px-6">
            <div className="mx-auto max-w-5xl rounded-3xl text-black p-8 sm:p-14 relative overflow-hidden shadow-2xl border-t-4 border-orange-500">
                {/* Organic background glows */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                    <div className="lg:col-span-7 space-y-6">
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
                            Pantau Lahan & Hasil Panen Langsung dari Genggaman.
                        </h2>
                        <p className="text-gray-900 text-base leading-relaxed">
                            Unduh aplikasi Agro Hero untuk memantau perkembangan fisik tanaman berbasis GPS (Agro Hero ID), laporan audit keuangan, dan penarikan bagi hasil secara real-time.
                        </p>

                        {/* Store Buttons */}
                        <div className="flex flex-wrap items-center gap-4 pt-2">
                            <Button size="lg" className="h-14 rounded-xl bg-white text-slate-900 hover:bg-slate-100 shadow-xl px-6">
                                 <img src="/playstore.png" alt="" className="w-10 h-10" />
                                <div className="flex flex-col items-start text-left">
                                    <span className="text-[10px] leading-none opacity-70 uppercase tracking-wider">Get it on</span>
                                    <span className="text-sm font-semibold leading-tight mt-0.5">Google Play</span>
                                </div>
                            </Button>
                        </div>
                    </div>

                    {/* App Mockup Visual */}
                    <div className="lg:col-span-5 flex justify-center items-center mt-6 lg:mt-0">
                        <div className="relative w-64 rounded-xl bg-white p-3 shadow-2xl border-1 border-slate-700">
                            <div className="w-full h-full rounded-sm bg-white-950 overflow-hidden relative flex flex-col items-center justify-center text-center p-4">
                                <img src="/mockup-1.jpeg" alt="Agro Hero App" className="w-full h-full object-cover rounded-xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
