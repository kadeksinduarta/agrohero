import React from 'react'
import { Button } from '@/components/ui/button'
import { HeroHeader } from "@/components/header"

export default function HeroSection() {
    return (
        <>
            <HeroHeader />

            <main className="relative flex flex-col items-center justify-center overflow-hidden pt-32 lg:pt-48 pb-10 px-6 bg-gradient-to-b from-emerald-50/20 via-white to-white">
                {/* Organic Agritech Background Shapes */}
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-emerald-100/30 via-orange-100/20 to-emerald-100/30 blur-3xl rounded-full pointer-events-none -z-10" />

                {/* Hero Content */}
                <div className="relative z-10 w-full max-w-4xl text-center flex flex-col items-center">
                    
                    {/* Title */}
                    <h1 className="animate-fade-in-blur-delay-1 text-balance text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 md:text-7xl leading-tight sm:leading-none">
                        Hubungkan Modal Anda <br className="hidden md:block" />{' '}dengan
                        <span className="relative inline-block whitespace-nowrap">
                            <span
                                className="absolute inset-0 bg-orange-500 rounded-xs -z-10"
                                style={{ transform: 'rotate(-1deg) scaleX(1) scaleY(1)', transformOrigin: 'center' }}
                            />
                            <span className="relative text-white px-2">Petani Lokal.</span>
                        </span>
                    </h1>
                    
                    <p className="animate-fade-in-blur-delay-2 mx-auto mt-4 sm:mt-6 max-w-2xl text-pretty text-base sm:text-lg text-slate-500 px-2">
                        Transparan, aman, dan menguntungkan. Bergabung bersama 3 kelompok tani mitra pertama kami untuk memajukan ketahanan pangan Indonesia.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0 animate-fade-in-blur-delay-3">
                        <Button size="lg" className="w-full sm:w-auto h-12 sm:h-14 rounded-xl bg-orange-500 hover:bg-orange-600 px-6 sm:px-8 text-white shadow-xl shadow-orange-500/20 hover:scale-105 transition-all">
                            <span className="text-sm sm:text-base font-semibold">Lihat Proyek Perdana</span>
                        </Button>
                        <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 sm:h-14 rounded-xl bg-white px-6 sm:px-8 text-slate-700 hover:bg-slate-50 shadow-sm border-slate-200 transition-all hover:scale-105">
                            <span className="text-sm sm:text-base font-semibold">Gabung Sebagai Mitra</span>
                        </Button>
                    </div>

                    {/* App Availability Bar */}
                    <div className="mt-6 sm:mt-8 flex items-center justify-center gap-4 sm:gap-6 text-xs text-slate-500 animate-fade-in-blur-delay-3">
                        <span className="font-medium">Tersedia di:</span>
                        <div className="flex items-center gap-4 font-semibold text-slate-700">
                            <span className="flex items-center gap-1.5 hover:text-slate-900 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="size-4 fill-current"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" /></svg>
                                Google Play
                            </span>
                        </div>
                    </div>
                </div>

                {/* Hero Images (3 Overlapping Mockups) */}
                <div className="relative mt-16 sm:mt-24 w-full max-w-5xl animate-fade-in-blur-delay-3 h-[320px] sm:h-[600px] flex justify-center perspective-[2000px]">
                    
                    {/* Left Mockup */}
                    <div className="absolute left-1/2 top-8 sm:top-12 -ml-[130px] sm:-ml-[340px] h-[280px] sm:h-[550px] w-[160px] sm:w-[300px] rounded-sm bg-white/60 p-1.5 sm:p-2 shadow-2xl backdrop-blur-md border border-white/60 z-10 transition-transform duration-700 ease-out hover:-translate-y-4 hover:rotate-[-2deg] -rotate-6">
                        <img src="mockup-1.jpeg" alt="" className="w-full h-full object-cover rounded-sm" />
                    </div>

                    {/* Right Mockup */}
                    <div className="absolute left-1/2 top-8 sm:top-12 ml-[10px] sm:ml-[40px] h-[280px] sm:h-[550px] w-[160px] sm:w-[300px] rounded-sm bg-white/60 p-1.5 sm:p-2 shadow-2xl backdrop-blur-md border border-white/60 z-20 transition-transform duration-700 ease-out hover:-translate-y-4 hover:rotate-[2deg] rotate-6" style={{ animationDelay: '-1s' }}>
                        <img src="mockup-2.jpeg" alt="" className="w-full h-full object-cover rounded-sm" />
                    </div>

                    {/* Center Mockup (Main) */}
                    <div className="absolute left-1/2 top-0 -ml-[85px] sm:-ml-[160px] h-[310px] sm:h-[620px] w-[170px] sm:w-[320px] rounded-sm bg-white p-1.5 sm:p-2 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-slate-200 z-30 transition-transform duration-700 ease-out hover:-translate-y-6">
                        <img src="mockup-3.jpeg" alt="" className="w-full h-full object-cover rounded-sm" />
                    </div>

                </div>
            </main>
        </>
    )
}