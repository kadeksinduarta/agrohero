import { Shield, Search, BarChart3, QrCode } from 'lucide-react'
import { cn } from '@/lib/utils'

const features = [
    {
        icon: QrCode,
        title: 'Agro Hero ID',
        description: 'Identitas digital eksklusif sebagai bukti kepemilikan resmi atas aset biologis (tanaman nyata) yang Anda danai.',
        color: 'text-blue-500',
    },
    {
        icon: Shield,
        title: 'Perlindungan Asuransi',
        description: 'Mitigasi risiko gagal panen akibat cuaca ekstrem atau hama dengan integrasi asuransi pertanian yang andal.',
        color: 'text-emerald-500',
    },
    {
        icon: Search,
        title: 'Verifikasi Lapangan Ketat',
        description: 'Bebas dari kecemasan fraud berkat proses onboarding kompetensi petani dan inspeksi validasi lahan yang ketat.',
        color: 'text-indigo-500',
    },
    {
        icon: BarChart3,
        title: 'ESG Impact Tracker',
        description: 'Pantau kontribusi nyata investasi Anda terhadap perbaikan ekologi lingkungan serta kesejahteraan sosial petani.',
        color: 'text-rose-500',
    },
]

export default function Features4() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="mx-auto max-w-5xl px-6">

                {/* Header */}
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-medium tracking-tight text-slate-800 sm:text-4xl">
                        Dirancang untuk mendukung pertumbuhan aset Anda
                    </h2>
                    <p className="mt-4 text-lg text-slate-500">
                        Semua yang Anda butuhkan untuk berinvestasi dengan aman, terukur, dan berdampak nyata.
                    </p>
                </div>

                {/* Feature grid */}
                <div className="grid gap-6 sm:grid-cols-2">
                    {features.map(({ icon: Icon, title, description, color }, i) => (
                        <div
                            key={i}
                            className="group relative overflow-hidden rounded-[2rem] border border-white/40 bg-white/40 p-8 shadow-sm backdrop-blur-xl transition-all hover:bg-white/60 hover:shadow-md">

                            {/* Card Content */}
                            <div className="relative z-10 flex flex-col h-full">
                                <h3 className="text-xl font-medium text-slate-800">{title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-slate-500 flex-grow">
                                    {description}
                                </p>

                                {/* Dummy Graphic Area */}
                                <div className="mt-8 flex h-40 w-full items-center justify-center rounded-2xl bg-white/50 border border-white/60 overflow-hidden relative">
                                    <div className={cn("flex size-16 items-center justify-center rounded-full bg-white shadow-sm", color)}>
                                        <Icon className="size-8" strokeWidth={1.5} />
                                    </div>
                                    <div className="absolute -bottom-4 -right-4 size-24 rounded-full bg-white/40 blur-xl"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
