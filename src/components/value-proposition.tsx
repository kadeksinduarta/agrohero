import React from 'react'
import { Button } from '@/components/ui/button'

export default function ValueProposition() {
    return (
        <section className="py-24 px-6">
            <div className="mx-auto max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Mengapa Agro Hero?</h2>
                    <p className="mt-4 text-lg text-slate-500">Ekosistem pertanian berdampak nyata yang menguntungkan semua pihak.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    {/* Investor Card (Primary Highlight) */}
                    <div className="relative rounded-xl border-2 border-orange-500 from-orange-50/50 via-white to-white p-6 sm:p-10 shadow-xl shadow-orange-950/5 backdrop-blur-xl transition-all hover:shadow-2xl flex flex-col justify-between">
                        <div className="absolute -top-3.5 left-6 sm:left-8 px-3.5 py-0.5 rounded-full bg-orange-500 text-white text-xs font-semibold uppercase tracking-wider shadow-sm">
                            Fokus Utama
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-4">Untuk Investor</h3>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-3">
                                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600 mt-0.5 font-bold text-xs">✓</span>
                                    <span className="text-slate-600 leading-relaxed"><strong className="text-slate-800">Transparansi Penuh:</strong> Pantau lokasi lahan & kesehatan tanaman via GPS (Agro Hero ID).</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600 mt-0.5 font-bold text-xs">✓</span>
                                    <span className="text-slate-600 leading-relaxed"><strong className="text-slate-800">Bagi Hasil Adil:</strong> Sistem Nisbah 60:40 (Petani : Investor) yang transparan.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600 mt-0.5 font-bold text-xs">✓</span>
                                    <span className="text-slate-600 leading-relaxed"><strong className="text-slate-800">Mitigasi Risiko:</strong> Sistem Profit & Loss sharing. Sisa modal dikembalikan jika gagal panen (non-kelalaian).</span>
                                </li>
                            </ul>
                        </div>

                        <Button className="w-full h-12 rounded-md bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-lg shadow-orange-500/20 transition-all">
                            Mulai Danai Sekarang
                        </Button>
                    </div>

                    {/* Petani Card */}
                    <div className="rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm backdrop-blur-xl transition-all hover:shadow-md flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-4">Untuk Petani Mitra</h3>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-3">
                                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mt-0.5 font-bold text-xs">✓</span>
                                    <span className="text-slate-600 leading-relaxed"><strong className="text-slate-800">Akses Modal Tanpa Agunan:</strong> Dapatkan dana tanam tanpa jeratan bunga memberatkan.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mt-0.5 font-bold text-xs">✓</span>
                                    <span className="text-slate-600 leading-relaxed"><strong className="text-slate-800">Pendampingan Agronomis:</strong> Pengawasan berkala oleh tim ahli sejak persiapan lahan hingga panen.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mt-0.5 font-bold text-xs">✓</span>
                                    <span className="text-slate-600 leading-relaxed"><strong className="text-slate-800">Kepastian Penjualan:</strong> Akses langsung ke jaringan *off-taker* dengan harga yang adil.</span>
                                </li>
                            </ul>
                        </div>

                        <Button variant="outline" className="w-full h-12 rounded-md border-orange-500 text-orange-500 hover:bg-orange-50 font-semibold transition-all">
                            Daftarkan Kelompok Tani
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
