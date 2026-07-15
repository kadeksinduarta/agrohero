import React from 'react'
import { HeroHeader } from "@/components/header"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Syarat & Ketentuan",
  description: "Syarat & Ketentuan platform Agro Hero. Pelajari aturan penggunaan platform, mekanisme bagi hasil investasi tanpa riba, mitigasi risiko gagal panen, dan asuransi.",
  alternates: {
    canonical: "/syarat-ketentuan",
  },
  openGraph: {
    title: "Syarat & Ketentuan | Agro Hero",
    description: "Syarat dan Ketentuan penggunaan serta mekanisme bagi hasil investasi di platform Agro Hero.",
    url: "https://agrohero.id/syarat-ketentuan",
  }
};

export default function SyaratKetentuan() {
    return (
        <>
            <HeroHeader />
            
            <main className="relative flex flex-col items-center justify-center overflow-hidden pt-32 lg:pt-40 pb-20 px-6">
                <div className="relative z-10 w-full max-w-4xl">
                    
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl font-medium tracking-tight text-slate-800 sm:text-5xl">
                            Syarat & Ketentuan
                        </h1>
                        <p className="mt-4 text-slate-500">
                            Terakhir diperbarui: 14 Juli 2026
                        </p>
                    </div>

                    {/* Content Card */}
                    <div className="rounded-[2rem] border border-white/40 bg-white/40 p-8 sm:p-12 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] backdrop-blur-xl space-y-8 text-slate-600 leading-relaxed">
                        
                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-slate-800">1. Penerimaan Syarat</h2>
                            <p>
                                Dengan mengakses dan menggunakan Platform Agro Hero, Anda setuju untuk terikat oleh Syarat & Ketentuan ini. Jika Anda tidak menyetujui bagian mana pun dari ketentuan ini, Anda tidak diperkenankan untuk menggunakan Layanan kami.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-slate-800">2. Definisi Istilah</h2>
                            <ul className="list-disc list-inside space-y-2 pl-4">
                                <li><strong>Platform:</strong> Aplikasi web dan layanan digital Agro Hero.</li>
                                <li><strong>Investor:</strong> Pengguna terdaftar yang menanamkan modalnya untuk mendanai proyek pertanian.</li>
                                <li><strong>Petani Mitra:</strong> Petani perorangan atau kelompok tani lokal yang menggarap lahan dan menerima permodalan dari Platform.</li>
                                <li><strong>Aset Biologis:</strong> Tanaman pertanian riil yang ditanam, diawasi, dan didanai melalui Platform.</li>
                                <li><strong>Agro Hero ID:</strong> Identitas digital unik berbasis barcode/QR yang diterbitkan sebagai bukti otentik kepemilikan atas aset biologis.</li>
                            </ul>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-slate-800">3. Persyaratan Akun</h2>
                            <p>
                                Untuk menggunakan fitur investasi di Platform, Anda wajib:
                            </p>
                            <ul className="list-disc list-inside space-y-2 pl-4">
                                <li>Berusia minimal 18 tahun atau telah menikah secara hukum.</li>
                                <li>Menyediakan data identitas yang akurat dan melengkapi proses verifikasi identitas (KYC).</li>
                                <li>Menjaga kerahasiaan akun dan kata sandi Anda. Anda bertanggung jawab penuh atas seluruh aktivitas yang terjadi di bawah akun Anda.</li>
                            </ul>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-slate-800">4. Mekanisme Investasi & Bagi Hasil</h2>
                            <p>
                                Agro Hero menawarkan skema investasi pertanian berbasis aset biologis riil:
                            </p>
                            <ul className="list-disc list-inside space-y-2 pl-4">
                                <li>Pendanaan dilakukan tanpa sistem bunga (riba) yang memberatkan petani lokal.</li>
                                <li>Hasil keuntungan didasarkan pada persentase bagi hasil dari keuntungan penjualan panen riil, yang disepakati di awal proyek.</li>
                                <li><strong>Risiko Pertanian:</strong> Investor memahami bahwa investasi pertanian melibatkan risiko alam (cuaca buruk, serangan hama, atau gagal panen). Agro Hero berusaha memitigasi hal ini melalui kemitraan dengan penyedia asuransi pertanian, namun tidak menjamin pengembalian hasil secara mutlak 100%.</li>
                            </ul>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-slate-800">5. Pemantauan & Transparansi</h2>
                            <p>
                                Agro Hero berkomitmen menyajikan transparansi data di lapangan. Kami menyediakan sistem pemantauan berkala menggunakan data GPS dan update status pertumbuhan yang dapat diakses oleh Investor melalui dasbor pengguna.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-slate-800">6. Batasan Tanggung Jawab</h2>
                            <p>
                                Agro Hero bertindak sebagai platform penghubung (mediator) multipihak. Kami tidak bertanggung jawab atas kerugian tidak langsung, insidental, atau konsekuensial yang timbul dari kegagalan pertanian di luar kendali wajar kami, kecuali jika disebabkan oleh kelalaian berat atau penipuan dari pihak Platform.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-slate-800">7. Hukum yang Mengatur</h2>
                            <p>
                                Syarat & Ketentuan ini diatur dan ditafsirkan sesuai dengan hukum Republik Indonesia. Setiap perselisihan yang timbul dari ketentuan ini akan diselesaikan secara musyawarah mufakat terlebih dahulu sebelum dibawa ke badan arbitrase atau pengadilan yang berwenang di Indonesia.
                            </p>
                        </section>

                    </div>

                </div>
            </main>

            <Footer />
        </>
    )
}
