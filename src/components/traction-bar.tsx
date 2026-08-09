import React from 'react'

export default function TractionBar() {
    return (
        <section className="relative z-10 mx-auto -mt-6 max-w-5xl px-4 sm:px-6 sm:-mt-16">
            <div className="rounded-2xl sm:rounded-3xl border border-orange-100/80 bg-gradient-to-r from-white via-orange-50/20 to-white p-6 sm:p-8 shadow-xl shadow-orange-950/5 backdrop-blur-xl transition-all hover:shadow-2xl">
                <div className="grid grid-cols-1 gap-6 divide-y divide-slate-200/60 text-center sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                    <div className="flex flex-col items-center justify-center space-y-1.5 pt-2 sm:pt-0">
                        <div className="flex items-baseline gap-1">
                            <h3 className="text-3xl sm:text-4xl font-bold text-slate-800">3</h3>
                            <span className="text-sm font-semibold text-orange-500">Mitra</span>
                        </div>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Kelompok Tani Terverifikasi</p>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-1.5 pt-6 sm:pt-0">
                        <h3 className="text-3xl sm:text-4xl font-bold text-slate-800">50<span className="text-xl sm:text-2xl text-orange-500">+</span></h3>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Hektar Lahan Ready</p>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-1.5 pt-6 sm:pt-0">
                        <h3 className="text-3xl sm:text-4xl font-bold text-slate-800">100<span className="text-xl sm:text-2xl text-orange-500">%</span></h3>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Transparansi Lahan GPS</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
