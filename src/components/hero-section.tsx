import React from 'react'
import { Button } from '@/components/ui/button'
import { HeroHeader } from "@/components/header"
import { LogoCloud } from "@/components/logo-cloud"

export default function HeroSection() {
    return (
        <>
            <HeroHeader />

            <main className="relative flex flex-col items-center justify-center overflow-hidden pt-32 lg:pt-48 pb-20 px-6">
                
                {/* Hero Content */}
                <div className="relative z-10 w-full max-w-4xl text-center flex flex-col items-center">
                    <h1 className="animate-fade-in-blur text-balance text-5xl font-medium tracking-tight text-slate-800 md:text-7xl">
                        Jadi Pahlawan Pertanian, <span className="text-amber-500">Tumbuhkan Aset Anda</span>
                    </h1>
                    
                    <p className="animate-fade-in-blur-delay-1 mx-auto mt-6 max-w-2xl text-pretty text-lg text-slate-500">Mulai investasi di sektor agrikultur dengan aman tanpa tebak-tebakan. Pantau dampak lingkungan dan laporan hasil panen secara real-time.
                    </p>

                    <div className="mt-10 flex items-center justify-center gap-6 animate-fade-in-blur-delay-2">
                        <Button size="lg" className="text-lg shadow-xl hover:scale-105">
                            Pelajari Lebih lanjut
                        </Button>
                    </div>
                </div>

                {/* Hero Images (Mockups) & Floating Banner */}
                <div className="relative mt-20 w-full max-w-5xl animate-fade-in-blur-delay-3 h-[600px] sm:h-[700px]">
                    {/* Left Mockup */}
                    <div className="absolute left-1/2 top-10 -ml-40 h-[500px] w-[280px] -rotate-6 rounded-[2.5rem] bg-white/60 p-2 shadow-2xl backdrop-blur-md border border-white/40 sm:-ml-60 sm:h-[600px] sm:w-[320px] animate-float-medium transition-all duration-700 ease-out hover:-translate-y-4 hover:scale-[1.02] hover:-rotate-3 z-10 hover:z-30 cursor-pointer">
                             <img src="mockup1.png" alt="" className="w-full h-full object-cover rounded-[2rem]" />
                    </div>

                    {/* Right Mockup */}
                    <div className="absolute left-1/2 top-0 ml-0 h-[520px] w-[280px] rotate-5 rounded-[2.5rem] bg-white/60 p-2 shadow-2xl backdrop-blur-md border border-white/40 sm:ml-10 sm:h-[620px] sm:w-[320px] animate-float-slow transition-all duration-700 ease-out hover:-translate-y-4 hover:scale-[1.02] hover:rotate-2 z-20 hover:z-30 cursor-pointer" style={{ animationDelay: '-1.5s' }}>
                             <img src="mockup.png" alt="" className="w-full h-full object-cover rounded-[2rem]" />
                    </div>
                </div>

                {/* <div className="">
                     <LogoCloud />
                </div> */}
            </main>
        </>
    )
}