import React from 'react'
import { HeroHeader } from "@/components/header"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description: "Kebijakan Privasi platform Agro Hero. Pelajari bagaimana kami melindungi data pribadi Anda (KYC, transaksi, GPS lahan) dengan standar keamanan tinggi.",
  alternates: {
    canonical: "/kebijakan-privasi",
  },
  openGraph: {
    title: "Kebijakan Privasi | Agro Hero",
    description: "Kebijakan dan komitmen perlindungan data pribadi pengguna di platform Agro Hero.",
    url: "https://agrohero.id/kebijakan-privasi",
  }
};

export default function KebijakanPrivasi() {
    return (
        <>
            <HeroHeader />
            
            <main className="relative flex flex-col items-center justify-center overflow-hidden pt-32 lg:pt-40 pb-20 px-6">
                <div className="relative z-10 w-full max-w-4xl">
                    
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl font-medium tracking-tight text-slate-800 sm:text-5xl">
                            Kebijakan Privasi
                        </h1>
                        <p className="mt-4 text-slate-500">
                            Terakhir diperbarui: 14 Juli 2026
                        </p>
                    </div>

                    {/* Content Card */}
                    <div className="rounded-[2rem] border border-white/40 bg-white/40 p-8 sm:p-12 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] backdrop-blur-xl space-y-8 text-slate-600 leading-relaxed">
                        
                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-slate-800">1. Pendahuluan</h2>
                            <p>
                                Selamat datang di Agro Hero ("Platform"). Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan membagikan informasi pribadi Anda saat Anda menggunakan Platform kami yang mempertemukan investor, pemilik lahan, dan petani mitra ("Layanan").
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-slate-800">2. Informasi yang Kami Kumpulkan</h2>
                            <p>
                                Kami mengumpulkan beberapa jenis informasi untuk menyediakan dan meningkatkan Layanan kami kepada Anda:
                            </p>
                            <ul className="list-disc list-inside space-y-2 pl-4">
                                <li><strong>Informasi Identitas Pribadi:</strong> Nama lengkap, alamat email, nomor telepon, alamat rumah, Kartu Tanda Penduduk (KTP) untuk verifikasi KYC (Know Your Customer).</li>
                                <li><strong>Data Transaksi:</strong> Detail rekening bank, catatan investasi, jumlah bagi hasil, dan riwayat pendanaan Anda.</li>
                                <li><strong>Data Lahan & GPS:</strong> Lokasi lahan pertanian, Agro Hero ID, serta data pemantauan pertumbuhan tanaman biologis yang dikumpulkan secara berkala.</li>
                            </ul>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-slate-800">3. Penggunaan Informasi Anda</h2>
                            <p>
                                Kami menggunakan informasi yang dikumpulkan untuk tujuan berikut:
                            </p>
                            <ul className="list-disc list-inside space-y-2 pl-4">
                                <li>Menyediakan, mengoperasikan, dan memelihara Platform Agro Hero.</li>
                                <li>Memproses transaksi investasi dan distribusi bagi hasil secara tepat dan transparan.</li>
                                <li>Melakukan verifikasi identitas (KYC) guna mencegah penipuan dan kepatuhan terhadap regulasi hukum di Indonesia.</li>
                                <li>Menyajikan laporan pemantauan berkala (secara real-time) pertumbuhan tanaman di lahan pertanian.</li>
                            </ul>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-slate-800">4. Pembagian Informasi dengan Pihak Ketiga</h2>
                            <p>
                                Kami tidak akan menjual atau menyewakan informasi pribadi Anda kepada pihak lain. Namun, kami dapat membagikan data Anda dengan mitra terpercaya kami:
                            </p>
                            <ul className="list-disc list-inside space-y-2 pl-4">
                                <li><strong>Perusahaan Asuransi:</strong> Untuk mitigasi risiko gagal panen, data tertentu dapat dibagikan guna pendaftaran klaim perlindungan tanaman.</li>
                                <li><strong>Penyedia Layanan Pembayaran:</strong> Guna memproses transfer dana investasi dan bagi hasil Anda secara aman.</li>
                                <li><strong>Pihak Berwenang:</strong> Apabila diwajibkan oleh hukum atau putusan pengadilan yang sah di wilayah Republik Indonesia.</li>
                            </ul>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-slate-800">5. Keamanan Data</h2>
                            <p>
                                Keamanan informasi Anda adalah prioritas kami. Agro Hero menerapkan standar pengamanan teknologi dan organisasi yang dirancang untuk melindungi data pribadi Anda dari akses yang tidak sah, perubahan, pengungkapan, atau perusakan.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-slate-800">6. Perubahan Kebijakan Privasi Ini</h2>
                            <p>
                                Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Kami akan memberi tahu Anda tentang perubahan apa pun dengan memperbarui tanggal "Terakhir diperbarui" di bagian atas halaman ini. Anda disarankan untuk meninjau kebijakan ini secara berkala.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-slate-800">7. Hubungi Kami</h2>
                            <p>
                                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, Anda dapat menghubungi kami melalui email di <a href="mailto:support@agrohero.id" className="text-blue-500 hover:underline">support@agrohero.id</a>.
                            </p>
                        </section>

                    </div>

                </div>
            </main>

            <Footer />
        </>
    )
}
