'use client'
import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = {
    investor: [
        {
            q: "Berapa minimal modal untuk mulai investasi?",
            a: "Anda dapat memulai investasi di Agro Hero dengan modal yang sangat terjangkau, mulai dari Rp 100.000, tergantung pada proyek pertanian yang sedang berjalan."
        },
        {
            q: "Bagaimana sistem bagi hasil bekerja?",
            a: "Bagi hasil dilakukan secara transparan setelah masa panen selesai dan hasil pertanian terjual. Persentase keuntungan dibagi sesuai kesepakatan awal yang tertera pada setiap proyek."
        },
        {
            q: "Apakah investasi saya aman jika terjadi gagal panen?",
            a: "Agro Hero bekerja sama dengan pihak asuransi pertanian untuk memitigasi risiko gagal panen akibat cuaca ekstrem atau hama, sehingga modal pokok Anda lebih terlindungi."
        }
    ],
    petani: [
        {
            q: "Apa syarat utama menjadi Petani Mitra?",
            a: "Syarat utamanya adalah memiliki pengalaman bertani, lahan yang bisa digarap (milik sendiri atau sewa), serta komitmen untuk mengikuti standar operasional dari tim ahli Agro Hero."
        },
        {
            q: "Apakah saya harus membayar bunga pinjaman?",
            a: "Tidak. Agro Hero menggunakan sistem bagi hasil yang adil, bukan sistem pinjaman berbunga yang memberatkan. Jika panen, hasil dibagi bersama."
        },
        {
            q: "Bagaimana proses penyaluran dana ke petani?",
            a: "Dana disalurkan secara bertahap sesuai dengan fase pertumbuhan tanaman dan kebutuhan operasional di lapangan yang diverifikasi oleh tim pengawas kami."
        }
    ]
}

export default function FaqSection() {
    const [category, setCategory] = useState<'investor' | 'petani'>('investor')
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section id="faq" className="py-24 relative overflow-hidden">
            <div className="mx-auto max-w-4xl px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-medium tracking-tight text-slate-800 sm:text-4xl">
                        FAQ (Tanya Jawab)
                    </h2>
                    <p className="mt-4 text-lg text-slate-500">
                        Punya pertanyaan? Temukan jawabannya di sini.
                    </p>
                </div>

                {/* Category Toggle */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    <button
                        onClick={() => { setCategory('investor'); setOpenIndex(null); }}
                        className={cn(
                            "px-6 py-2 rounded-full font-medium transition-all duration-200 border",
                            category === 'investor' 
                                ? "bg-slate-800 text-white border-slate-800 shadow-md" 
                                : "bg-white/40 text-slate-600 border-white/60 hover:bg-white/60 backdrop-blur-md"
                        )}
                    >
                        Untuk Investor
                    </button>
                    <button
                        onClick={() => { setCategory('petani'); setOpenIndex(null); }}
                        className={cn(
                            "px-6 py-2 rounded-full font-medium transition-all duration-200 border",
                            category === 'petani' 
                                ? "bg-slate-800 text-white border-slate-800 shadow-md" 
                                : "bg-white/40 text-slate-600 border-white/60 hover:bg-white/60 backdrop-blur-md"
                        )}
                    >
                        Untuk Petani Mitra
                    </button>
                </div>

                {/* FAQ List */}
                <div className="space-y-4">
                    {faqs[category].map((faq, index) => (
                        <div 
                            key={index} 
                            className="rounded-[1.5rem] border border-white/40 bg-white/40 backdrop-blur-xl shadow-sm overflow-hidden transition-all duration-200"
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full flex items-center justify-between p-6 text-left outline-none"
                            >
                                <span className="font-medium text-slate-800 pr-4">{faq.q}</span>
                                <ChevronDown 
                                    className={cn(
                                        "size-5 text-slate-400 transition-transform duration-200 flex-shrink-0",
                                        openIndex === index ? "rotate-180" : ""
                                    )} 
                                />
                            </button>
                            <div 
                                className={cn(
                                    "px-6 overflow-hidden transition-all duration-200",
                                    openIndex === index ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"
                                )}
                            >
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    {faq.a}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
