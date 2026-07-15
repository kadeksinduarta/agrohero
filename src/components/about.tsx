import React from 'react'
import { Target, Trophy, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const missions = [
    'Menjembatani Ekosistem',
    'Memberdayakan Petani Lokal',
    'Transparansi Aset Nyata',
    'Optimalisasi Lahan',
]

const team = [
    {
        name: 'Sindu Arta',
        role: 'Chief Executive Officer (CEO)',
        description: 'Bertanggung jawab atas arah strategis, memimpin organisasi, & membangun kemitraan strategis.',
        color: 'bg-blue-500',
    },
    {
        name: 'Windu Sari',
        role: 'Chief Financial Officer (CFO)',
        description: 'Mengelola keuangan, mengawasi alokasi dana, merancang skema bagi hasil, & menjaga transparansi.',
        color: 'bg-emerald-500',
    },
    {
        name: 'Gung Angga',
        role: 'Chief Technology Officer (CTO)',
        description: 'Memimpin pengembangan platform digital Agro Hero & arsitektur sistem.',
        color: 'bg-indigo-500',
    },
    {
        name: 'Candra Utami',
        role: 'Chief Operating Officer (COO)',
        description: 'Mengawasi operasional harian di lapangan, mengelola rantai pasok, & menjaga hubungan petani.',
        color: 'bg-rose-500',
    },
    {
        name: 'Kurnia Cahyani',
        role: 'Chief Marketing Officer (CMO)',
        description: 'Merancang strategi pemasaran, membangun brand identity, & kampanye akuisisi investor.',
        color: 'bg-purple-500',
    },
]

export default function AboutSection() {
    return (
        <section id="tentang-kami" className="py-24 relative overflow-hidden">
            <div className="mx-auto max-w-5xl px-6 space-y-24">
                
                {/* Intro Perusahaan */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-block rounded-full bg-blue-100/50 px-3 py-1 text-xs font-semibold text-blue-600 mb-4 border border-blue-200 backdrop-blur-sm">
                        Platform Pertanian Terintegrasi #1 Indonesia
                    </span>
                    <h2 className="text-3xl font-medium tracking-tight text-slate-800 sm:text-4xl">
                        Tentang Agro Hero
                    </h2>
                    <p className="mt-6 text-lg leading-relaxed text-slate-500">
                        Agro Hero adalah sebuah platform multipihak (multi-stakeholder) inovatif yang hadir sebagai solusi digital untuk mengatasi trust gap dalam ekosistem pertanian di Indonesia. Melalui jargon utamanya, "Where Capital Meets Land and Farmers," Agro Hero mengintegrasikan investor, petani mitra, pemilik lahan, hingga pasar secara transparan.
                    </p>
                    <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-emerald-200/50 bg-emerald-50/50 px-4 py-2 backdrop-blur-sm">
                        <Trophy className="size-4 text-emerald-600" />
                        <span className="text-sm font-medium text-emerald-700">Lolos Pendanaan P2MW Belmawa</span>
                    </div>
                </div>

                {/* Visi & Misi */}
                <div className="grid gap-6 md:grid-cols-2">
                    {/* Visi */}
                    <div className="relative overflow-hidden rounded-[2rem] border border-white/40 bg-white/40 p-8 shadow-sm backdrop-blur-xl transition-all hover:bg-white/60 hover:shadow-md">
                        <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
                            <Trophy className="size-6" />
                        </div>
                        <h3 className="mb-4 text-2xl font-medium text-slate-800">Visi</h3>
                        <p className="text-slate-500 leading-relaxed">
                            Menjadi platform integrasi pertanian berbasis aset nomor satu di Indonesia yang menciptakan masa depan pertanian (The Future of Farming) yang berkelanjutan, tepercaya, dan inklusif bagi semua pihak.
                        </p>
                    </div>

                    {/* Misi */}
                    <div className="relative overflow-hidden rounded-[2rem] border border-white/40 bg-white/40 p-8 shadow-sm backdrop-blur-xl transition-all hover:bg-white/60 hover:shadow-md">
                        <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                            <Target className="size-6" />
                        </div>
                        <h3 className="mb-4 text-2xl font-medium text-slate-800">Misi</h3>
                        <ul className="space-y-3">
                            {missions.map((mission, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-500">
                                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-500" />
                                    <span>{mission}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Tim Eksekutif */}
                <div>
                    <div className="mx-auto max-w-2xl text-center mb-12">
                        <h2 className="text-3xl font-medium tracking-tight text-slate-800 sm:text-4xl">
                            Tim Eksekutif
                        </h2>
                        <p className="mt-4 text-lg text-slate-500">
                            Penggerak di balik inovasi Agro Hero.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {team.map((member, i) => (
                            <div key={i} className="group relative overflow-hidden rounded-[2rem] border border-white/40 bg-white/40 p-6 shadow-sm backdrop-blur-xl transition-all hover:-translate-y-1 hover:bg-white/60 hover:shadow-md text-center">
                                <div className={cn("mx-auto mb-4 flex size-20 items-center justify-center rounded-full text-2xl font-bold text-white shadow-inner", member.color)}>
                                    {member.name.charAt(0)}
                                </div>
                                <h4 className="text-lg font-semibold text-slate-800">{member.name}</h4>
                                <p className="text-sm font-medium text-blue-600 mb-3">{member.role}</p>
                                <p className="text-sm text-slate-500 line-clamp-3 group-hover:line-clamp-none transition-all">{member.description}</p>
                            </div>
                        ))}
                        
                        {/* Advisor (Special Card) */}
                        <div className="group relative overflow-hidden rounded-[2rem] border border-amber-200/50 bg-gradient-to-b from-amber-50/50 to-white/40 p-6 shadow-sm backdrop-blur-xl transition-all hover:-translate-y-1 hover:shadow-md text-center sm:col-span-2 lg:col-span-1">
                            <div className="mx-auto mb-4 flex size-20 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-2xl font-bold text-white shadow-inner">
                                I
                            </div>
                            <h4 className="text-lg font-semibold text-slate-800">I Gusti Lanang Agung R. P., S.Pd., M.T.</h4>
                            <p className="text-sm font-medium text-amber-600 mb-3">Dosen Pembimbing / Advisor</p>
                            <p className="text-sm text-slate-500 line-clamp-3 group-hover:line-clamp-none transition-all">Memberikan bimbingan akademis, mengawasi kepatuhan P2MW, & masukan strategis bisnis.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
