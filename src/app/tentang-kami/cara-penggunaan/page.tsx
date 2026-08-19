'use client'
import { HeroHeader } from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import React, { useState } from "react";
import { X } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Perkenalan Fitur Aplikasi",
    desc: "Kenali fitur-fitur utama Agro Hero — dashboard investor, monitoring lahan real-time berbasis QR Code, dan fitur pencatatan karbon.",
    youtubeId: "7ims-Oswk8k",
  },
  {
    id: 2,
    title: "Cara Investor Berinvestasi",
    desc: "Panduan langkah demi langkah bagi investor — registrasi, memilih proyek tani, menyetorkan modal, hingga memantau perkembangan investasi.",
    youtubeId: "SiKswtCLbII",
  },
  {
    id: 3,
    title: "Cara Petani Mengelola Lahan",
    desc: "Tutorial bagi petani mitra — update log harian, menggunakan Agro Hero ID, melaporkan hasil panen, dan berkomunikasi dengan investor.",
    youtubeId: "",
  },
];

function VideoCard({
  video,
  onPlay,
}: {
  video: typeof videos[number];
  onPlay: () => void;
}) {
  const thumbnailUrl = video.youtubeId
    ? `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`
    : null;
  const youtubeUrl = video.youtubeId
    ? `https://www.youtube.com/watch?v=${video.youtubeId}`
    : null;

  return (
    <div className="group flex flex-col rounded-2xl border border-slate-100 bg-white overflow-hidden shadow-sm hover:shadow-md transition-all">
      {/* Video area */}
      <div className="relative aspect-video bg-slate-100">
        {video.youtubeId ? (
          /* Thumbnail + play button */
          <button
            onClick={onPlay}
            className="absolute inset-0 w-full h-full flex items-center justify-center group/btn focus:outline-none"
            aria-label={`Play ${video.title}`}
          >
            {/* Thumbnail */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={thumbnailUrl!}
              alt={video.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover/btn:bg-black/20 transition-colors" />
            {/* Play button */}
            <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg group-hover/btn:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-red-600 ml-1">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
          </button>
        ) : (
          /* Placeholder — video belum tersedia */
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-slate-50">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
            <p className="text-xs text-slate-400">Segera hadir</p>
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5">
        <h2 className="text-sm font-bold text-slate-900 mb-2 leading-snug">{video.title}</h2>
        <p className="text-xs text-slate-500 leading-relaxed flex-1">{video.desc}</p>

        {/* Footer action */}
        {youtubeUrl && (
          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={onPlay}
              className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1.5 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="text-red-500">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              Tonton di sini
            </button>
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-400 hover:text-slate-700 flex items-center gap-1 transition-colors"
            >
              Buka YouTube
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default function CaraPenggunaanPage() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  return (
    <>
      <HeroHeader />

      <main className="min-h-screen bg-white pt-28 pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-10">
            <Link href="/" className="hover:text-slate-700 transition">Beranda</Link>
            <span>/</span>
            <Link href="/tentang-kami" className="hover:text-slate-700 transition">Tentang Kami</Link>
            <span>/</span>
            <span className="text-slate-600 font-medium">Cara Penggunaan</span>
          </nav>

          {/* Page Header */}
          <div className="mb-12 max-w-xl">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Cara Penggunaan Aplikasi
            </h1>
            <p className="text-slate-500 leading-relaxed">
              Tiga video panduan resmi Agro Hero — pilih video yang sesuai, lalu tonton langsung di sini atau buka di YouTube.
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                onPlay={() => setActiveVideoId(video.youtubeId)}
              />
            ))}
          </div>

          {/* Back link */}
          <div className="mt-14 pt-10 border-t border-slate-100">
            <Link
              href="/tentang-kami"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-0.5">
                <path d="M19 12H5" /><path d="m12 19-7-7 7-7" />
              </svg>
              Kembali ke Tentang Kami
            </Link>
          </div>

        </div>
      </main>

      {/* Video Modal overlay */}
      {activeVideoId && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-10 backdrop-blur-sm animate-fade-in-blur">
          {/* Close background trigger */}
          <div
            className="absolute inset-0 cursor-pointer"
            onClick={() => setActiveVideoId(null)}
          />
          {/* Modal content */}
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl animate-dash-slide">
            <button
              onClick={() => setActiveVideoId(null)}
              className="absolute -top-12 right-0 sm:-top-10 sm:-right-10 z-[101] text-white/70 hover:text-white transition-colors"
              aria-label="Tutup video"
            >
              <X className="w-8 h-8 sm:w-10 sm:h-10" />
            </button>
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
