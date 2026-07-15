'use client'

import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'
import Link from 'next/link'

type FAQItem = {
    id: string
    icon: IconName
    category: string
    question: string
    answer: string
}

export default function FAQsThree() {
    const faqItems: FAQItem[] = [
        {
            id: 'item-1',
            icon: 'info',
            category: 'Umum',
            question: 'Apa sebenarnya aplikasi Agro Hero itu?',
            answer: 'Agro Hero adalah platform ekosistem pertanian multipihak yang menjembatani investor individual maupun korporasi dengan petani mitra serta pemilik lahan. Kami memfasilitasi pendanaan pertanian yang transparan, aman, dan berdampak sosial-ekonomi tinggi bagi ketahanan pangan lokal.',
        },
        {
            id: 'item-2',
            icon: 'shield',
            category: 'Investor',
            question: 'Bagaimana Agro Hero menjamin keamanan modal saya dari fraud petani?',
            answer: 'Kepercayaan adalah prioritas kami. Agro Hero menerapkan sistem seleksi ketat di lapangan: petani harus melalui uji kompetensi bertani, status legalitas lahan divalidasi, dan seluruh dana investor dikelola aman menggunakan rekening penampung khusus (escrow) guna memastikan penyaluran dana sesuai dengan rencana anggaran kerja (RAB) proyek.',
        },
        {
            id: 'item-3',
            icon: 'cloud-lightning',
            category: 'Investor',
            question: 'Bagaimana jika terjadi gagal panen akibat faktor cuaca buruk?',
            answer: 'Pertanian melibatkan alam, oleh sebab itu kami memitigasi risiko force majeure tersebut melalui kerja sama dengan penyedia Asuransi Pertanian. Jika terjadi kegagalan sistemis di luar kendali teknis, klaim asuransi akan membantu mengkover nilai pokok modal tertentu sesuai dengan ketentuan proyek terkait.',
        },
        {
            id: 'item-4',
            icon: 'qr-code',
            category: 'Mitra Petani',
            question: 'Apa yang dimaksud dengan Agro Hero ID?',
            answer: 'Agro Hero ID adalah identitas digital unik yang diterbitkan untuk setiap transaksi pendanaan Anda. Ini menjadi bukti kepemilikan digital yang valid atas sejumlah tanaman nyata yang sedang dirawat oleh petani di lokasi lahan yang jelas koordinatnya.',
        },
        {
            id: 'item-5',
            icon: 'coins',
            category: 'Investor',
            question: 'Bagaimana skema bagi hasilnya? Apakah skemanya mengandung riba?',
            answer: 'Tidak. Agro Hero berkomitmen penuh pada keadilan finansial bebas riba. Kami menggunakan akad bagi hasil murni dari profit penjualan riil komoditas saat panen. Pembagian keuntungan bersih akan didistribusikan secara transparan kepada Investor, Petani Pengelola, dan Pemilik Lahan sesuai dengan porsi kontrak di awal.',
        },
    ]

    const [selectedCategory, setSelectedCategory] = React.useState<string>('Semua')

    const categories = ['Semua', 'Umum', 'Investor', 'Mitra Petani']

    const filteredFaqItems = selectedCategory === 'Semua' 
        ? faqItems 
        : faqItems.filter(item => item.category === selectedCategory)

    return (
        <section className="bg-muted dark:bg-background py-20">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="flex flex-col gap-10 md:flex-row md:gap-16">
                    <div className="md:w-1/3">
                        <div className="sticky top-20 space-y-6">
                            <div>
                                <h2 className="mt-4 text-3xl font-bold">Frequently Asked Questions</h2>
                                <p className="text-muted-foreground mt-4">
                                    Tidak menemukan jawaban yang Anda cari? Hubungi{' '}
                                    <Link
                                        href="#"
                                        className="text-primary font-medium hover:underline">
                                        tim support kami
                                    </Link>
                                </p>
                            </div>
                            
                            {/* Filter Categories */}
                            <div className="flex flex-wrap gap-2 md:flex-col md:items-start">
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`px-3 py-1.5 text-xs font-semibold rounded-full border transition-all cursor-pointer ${
                                            selectedCategory === cat 
                                                ? 'bg-emerald-600 border-emerald-600 text-white' 
                                                : 'bg-background hover:bg-muted text-muted-foreground'
                                        }`}>
                                        {cat === 'Semua' ? 'Semua Kategori' : `[${cat}]`}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full space-y-2">
                            {filteredFaqItems.map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    value={item.id}
                                    className="bg-background shadow-xs rounded-lg border px-4 last:border-b">
                                    <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                                        <div className="flex items-center gap-3">
                                            <div className="flex size-6">
                                                <DynamicIcon
                                                    name={item.icon}
                                                    className="m-auto size-4"
                                                />
                                            </div>
                                            <span className="text-base text-left">{item.question}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-5">
                                        <div className="px-9 space-y-2">
                                            <span className="inline-block text-[10px] uppercase tracking-wider font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded">
                                                {item.category}
                                            </span>
                                            <p className="text-base">{item.answer}</p>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}
