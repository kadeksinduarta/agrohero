'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function InvestmentCalculator() {
    const [trees, setTrees] = useState<number>(10)
    const [scenario, setScenario] = useState<'profit' | 'loss'>('profit')
    
    const pricePerTree = 10000
    const capital = trees * pricePerTree

    // Skenario Profit Asumsi
    const profitGrossRevenue = capital * 1.25 // 125% of capital (25% gross profit)
    const netProfit = profitGrossRevenue - capital
    const investorShare = netProfit * 0.40 // 40% nisbah
    const totalReturnProfit = capital + investorShare

    // Skenario Rugi Asumsi
    const lossGrossRevenue = capital * 0.80 // 80% of capital
    // Semua pendapatan kotor dikembalikan ke investor
    const totalReturnLoss = lossGrossRevenue

    const formatRupiah = (val: number) => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val)
    }

    return (
        <section className="py-20 px-6 bg-gradient-to-b from-white via-orange-50/30 to-white relative overflow-hidden">
            {/* Background Organic Decorative Shapes */}
            <div className="absolute -top-24 -right-24 size-96 rounded-full bg-orange-200/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 size-96 rounded-full bg-emerald-200/20 blur-3xl pointer-events-none" />

            <div className="mx-auto max-w-4xl relative z-10">
                <div className="text-center mb-12">
                    <span className="text-xs font-semibold text-orange-600 uppercase tracking-widest px-3 py-1 bg-orange-100/70 rounded-full border border-orange-200/50">Simulasi Interaktif</span>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mt-3">Hitung Estimasi Bagi Hasil Anda</h2>
                    <p className="mt-3 text-slate-500 max-w-xl mx-auto text-base">Gunakan kalkulator di bawah ini untuk melihat simulasi Nisbah dan Profit &amp; Loss sharing.</p>
                </div>

                <div className="rounded-3xl border border-orange-100 bg-white p-8 sm:p-12 shadow-xl shadow-orange-950/5 backdrop-blur-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        {/* Slider Controls */}
                        <div className="lg:col-span-7 space-y-6">
                            
                            {/* Scenario Toggle */}
                            <div className="flex bg-slate-100 p-1 rounded-xl w-full max-w-sm mb-6">
                                <button 
                                    onClick={() => setScenario('profit')}
                                    className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${scenario === 'profit' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>
                                    Skenario Profit
                                </button>
                                <button 
                                    onClick={() => setScenario('loss')}
                                    className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${scenario === 'loss' ? 'bg-white text-red-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>
                                    Skenario Rugi
                                </button>
                            </div>

                            <div>
                                <div className="flex justify-between items-center mb-3">
                                    <label className="text-sm font-semibold text-slate-700">Jumlah Unit (Pohon)</label>
                                    <span className="text-2xl font-bold text-slate-900">{trees} Pohon</span>
                                </div>
                                <input
                                    type="range"
                                    min={10}
                                    max={1000}
                                    step={10}
                                    value={trees}
                                    onChange={(e) => setTrees(Number(e.target.value))}
                                    className={`w-full h-3 rounded-lg appearance-none cursor-pointer ${scenario === 'profit' ? 'bg-emerald-100 accent-emerald-500' : 'bg-red-100 accent-red-500'}`}
                                />
                                <div className="flex justify-between text-xs text-slate-400 mt-2 font-medium">
                                    <span>10 Pohon</span>
                                    <span>500 Pohon</span>
                                    <span>1.000 Pohon</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 pt-2">
                                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                    <span className="text-xs text-slate-500 font-medium block mb-1">Modal Dikeluarkan</span>
                                    <span className="text-lg font-bold text-slate-800">{formatRupiah(capital)}</span>
                                    <span className="text-[10px] text-slate-400 block mt-0.5">Rp 10.000 / Pohon</span>
                                </div>
                                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                    <span className="text-xs text-slate-500 font-medium block mb-1">Sistem Nisbah</span>
                                    <span className="text-lg font-bold text-slate-800">60 : 40</span>
                                    <span className="text-[10px] text-slate-400 block mt-0.5">Petani : Investor</span>
                                </div>
                            </div>
                        </div>

                        {/* Result Display Box */}
                        <div className={`lg:col-span-5 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full shadow-lg transition-colors duration-500 ${scenario === 'profit' ? 'bg-gradient-to-br from-emerald-900 to-emerald-800' : 'bg-gradient-to-br from-red-950 to-red-900'}`}>
                            {scenario === 'profit' ? (
                                <div>
                                    <span className="text-xs text-emerald-200 uppercase font-semibold tracking-wider block mb-1">Skenario Panen Sukses</span>
                                    
                                    <div className="space-y-3 mt-4 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-emerald-100/70">Est. Pendapatan Kotor</span>
                                            <span className="font-medium text-emerald-100">{formatRupiah(profitGrossRevenue)}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-emerald-100/70">Profit Bersih Lahan</span>
                                            <span className="font-medium text-emerald-100">{formatRupiah(netProfit)}</span>
                                        </div>
                                        <div className="flex justify-between border-b border-emerald-700/50 pb-3">
                                            <span className="text-emerald-100/70">Bagian Investor (40%)</span>
                                            <span className="font-bold text-emerald-400">+{formatRupiah(investorShare)}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="flex justify-between text-base mt-4">
                                        <span className="text-emerald-100">Total Pengembalian:</span>
                                        <span className="font-bold text-white">{formatRupiah(totalReturnProfit)}</span>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <span className="text-xs text-red-200 uppercase font-semibold tracking-wider block mb-1">Skenario Gagal Panen Parsial</span>
                                    
                                    <div className="space-y-3 mt-4 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-red-100/70">Est. Pendapatan Kotor</span>
                                            <span className="font-medium text-red-100">{formatRupiah(lossGrossRevenue)}</span>
                                        </div>
                                        <p className="text-[11px] text-red-200/80 leading-relaxed border-b border-red-800/50 pb-3 mt-2">
                                            Sistem <b>Profit &amp; Loss Sharing</b>: Kerugian finansial ditanggung investor. Sisa pendapatan dikembalikan seluruhnya untuk meminimalisir kerugian modal. Petani tidak mendapat profit.
                                        </p>
                                    </div>
                                    
                                    <div className="flex justify-between text-base mt-4">
                                        <span className="text-red-100">Sisa Modal Kembali:</span>
                                        <span className="font-bold text-white">{formatRupiah(totalReturnLoss)}</span>
                                    </div>
                                </div>
                            )}

                            <div className="mt-8">
                                <Button className={`w-full h-12 rounded-xl text-white font-semibold shadow-lg transition-all ${scenario === 'profit' ? 'bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/25' : 'bg-red-600 hover:bg-red-700 shadow-red-600/25'}`}>
                                    Danai Proyek Ini
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
