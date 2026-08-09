'use client'
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

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

                <Tabs defaultValue="investor" className="w-full flex flex-col items-center">
                    <TabsList className="mb-8 bg-white/40 border border-white/60 backdrop-blur-md p-1 rounded-md">
                        <TabsTrigger value="investor" className="px-6 py-2 rounded-md font-medium text-slate-700 data-[state=active]:bg-slate-800 data-[state=active]:text-white transition-all">
                            Untuk Investor
                        </TabsTrigger>
                        <TabsTrigger value="petani" className="px-6 py-2 rounded-md font-medium text-slate-700 data-[state=active]:bg-slate-800 data-[state=active]:text-white transition-all">
                            Untuk Petani Mitra
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="investor" className="w-full">
                        <Accordion type="single" collapsible className="space-y-4">
                            {faqs.investor.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="rounded-md border border-white/40 bg-white/40 backdrop-blur-xl shadow-sm px-6">
                                    <AccordionTrigger className="font-medium text-slate-800 hover:no-underline text-left py-6">
                                        {faq.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-500 text-sm leading-relaxed pb-6">
                                        {faq.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </TabsContent>

                    <TabsContent value="petani" className="w-full">
                        <Accordion type="single" collapsible className="space-y-4">
                            {faqs.petani.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="rounded-md border border-white/40 bg-white/40 backdrop-blur-xl shadow-sm px-6">
                                    <AccordionTrigger className="font-medium text-slate-800 hover:no-underline text-left py-6">
                                        {faq.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-500 text-sm leading-relaxed pb-6">
                                        {faq.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}
