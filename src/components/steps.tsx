import React from 'react'

const steps = [
    {
        step: 'Langkah 1',
        title: 'Pilih Aset & Danai',
        description: 'Temukan proyek pertanian yang telah terverifikasi dan sesuai dengan profil risiko Anda.',
    },
    {
        step: 'Langkah 2',
        title: 'Pantau Pertumbuhan',
        description: 'Dapatkan laporan berkala langsung dari lahan mengenai status dan kesehatan tanaman Anda.',
    },
    {
        step: 'Langkah 3',
        title: 'Panen & Nikmati Hasil',
        description: 'Terima bagi hasil secara adil dan transparan setelah masa panen selesai dengan sukses.',
    },
]

export default function StepsSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="mx-auto max-w-5xl px-6">

                {/* Header */}
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-medium tracking-tight text-slate-800 sm:text-4xl">
                        Langkah kecil menuju dampak besar
                    </h2>
                    <p className="mt-4 text-lg text-slate-500">
                        Mulai perjalanan investasi pertanian Anda dengan mudah bersama Agro Hero.
                    </p>
                </div>

                {/* Steps Layout */}
                <div className="relative mx-auto mt-16 flex max-w-4xl flex-col gap-6 md:flex-row md:items-stretch">
                    {steps.map((item, index) => (
                        <div
                            key={index}
                            className="group relative w-full flex-1 overflow-hidden rounded-[2.5rem] border border-white/50 bg-white/40 p-8 shadow-sm backdrop-blur-md transition-all hover:-translate-y-2 hover:bg-white/60 hover:shadow-xl"
                            style={{ zIndex: 10 + index }}
                        >
                            <span className="text-sm font-semibold text-blue-500 mb-2 block uppercase tracking-wider">{item.step}</span>
                            <h3 className="text-2xl font-medium text-slate-800 mb-4">{item.title}</h3>
                            <p className="text-slate-500 leading-relaxed text-sm">
                                {item.description}
                            </p>


                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
