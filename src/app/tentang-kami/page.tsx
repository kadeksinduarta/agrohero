import { HeroHeader } from "@/components/header";
import Footer from "@/components/footer";
import TeamSection from "@/components/team";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami | Agro Hero",
  description:
    "Kenali Agro Hero lebih dekat — platform ekosistem investasi pertanian terpercaya di Indonesia. Pelajari visi, misi, dan tim di balik Agro Hero.",
  alternates: { canonical: "/tentang-kami" },
  openGraph: {
    title: "Tentang Kami | Agro Hero",
    description:
      "Platform ekosistem investasi pertanian paling terpercaya dan transparan di Indonesia.",
    url: "https://agrohero.id/tentang-kami",
  },
};

export default function TentangKamiPage() {
  return (
    <>
      <HeroHeader />

      <main className="min-h-screen bg-white">
        {/* ── APA ITU AGRO HERO ────────────────────────────────────── */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                  Platform Ekosistem Investasi Pertanian
                </h2>
                <p className="mt-5 text-slate-600 leading-relaxed text-base">
                  Agro Hero adalah platform digital yang mempertemukan investor, pemilik lahan, dan petani lokal dalam satu ekosistem yang transparan dan saling menguntungkan.
                </p>
                <p className="mt-4 text-slate-600 leading-relaxed text-base">
                  Digagas oleh mahasiswa Universitas Pendidikan Ganesha (Undiksha) dan didukung pendanaan P2MW 2026, Agro Hero hadir untuk menjawab dua masalah nyata di lapangan: petani yang kekurangan modal dan lahan produktif yang terbengkalai.
                </p>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="relative w-full max-w-sm aspect-square rounded-3xl">
                  <Image
                    src="/Logo-agro-hero-tentangkami.jpg"
                    alt="Logo Agro Hero"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-xs font-medium text-white/90">
                      Logo Agro Hero
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── VISI & MISI ───────────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-white border-t border-slate-100">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">

            <h2 className="text-2xl font-bold text-slate-900 mb-10">Visi dan Misi</h2>

            {/* VISI */}
            <div className="mb-10">
              <h3 className="text-base font-bold text-slate-800 mb-3">Visi</h3>
              <p className="text-slate-600 leading-relaxed">
                Menjadi ekosistem investasi pertanian paling terpercaya dan transparan di Indonesia, yang menyatukan modal, lahan, dan petani untuk kesejahteraan bersama.
              </p>
            </div>

            {/* MISI */}
            <div>
              <h3 className="text-base font-bold text-slate-800 mb-4">Misi</h3>
              <ol className="list-decimal list-outside pl-5 space-y-3 text-slate-600">
                <li className="leading-relaxed pl-1">
                  Membuka akses modal tanpa bunga bagi petani Indonesia melalui skema bagi hasil yang adil dan transparan, sehingga petani tidak lagi terjerat pinjaman berbunga tinggi.
                </li>
                <li className="leading-relaxed pl-1">
                  Mengoptimalkan lahan produktif yang terbengkalai (<em>idle land</em>) menjadi aset ekonomi yang menghasilkan nilai bagi pemilik lahan, petani, dan investor.
                </li>
                <li className="leading-relaxed pl-1">
                  Menyediakan instrumen investasi berbasis aset nyata (<em>asset-based investment</em>) yang transparan, terukur, dan dapat dipantau <em>real-time</em>.
                </li>
                <li className="leading-relaxed pl-1">
                  Mendorong investasi berdampak (<em>high-impact &amp; ESG investment</em>) yang memberi nilai ekonomi sekaligus dampak sosial-lingkungan terukur bagi korporasi dan investor individu.
                </li>
              </ol>
            </div>

          </div>
        </section>
        {/* ── TEAM ─────────────────────────────────────────────────── */}
        <TeamSection />
      </main>

      <Footer />
    </>
  );
}
