import React from 'react'
import { HeroHeader } from "@/components/header"
import Footer from "@/components/footer"
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from "next"
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import blogPostsData from '@/data/blog-posts.json'

// ── Types ───────────────────────────────────────────────────────────────
type BlogPost = {
    id: number
    title: string
    excerpt: string
    content: string
    category: string
    date: string
    author: string
    imageUrl: string
    imageUrlSmall: string
    imageObjectPosition?: string
    readTime: string
}

const blogPosts = blogPostsData as BlogPost[]

// ── Category badge colours ───────────────────────────────────────────────
const categoryColors: Record<string, string> = {
    "Kabar Lahan":      "bg-emerald-100 text-emerald-700",
    "Kabar Pertanian":  "bg-emerald-100 text-emerald-700",
    "Kabar Investasi":  "bg-teal-100 text-teal-700",
    "Edukasi Investor": "bg-blue-100 text-blue-700",
    "Edukasi Tani":     "bg-lime-100 text-lime-700",
    "Teknologi":        "bg-purple-100 text-purple-700",
    "Kemitraan":        "bg-orange-100 text-orange-700",
    "Visi & Inovasi":   "bg-rose-100 text-rose-700",
}

type Props = {
    params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params
    const post = blogPosts.find(p => p.id === parseInt(id))
    if (!post) return { title: 'Artikel tidak ditemukan | Agro Hero' }
    return {
        title: `${post.title} | Agro Hero`,
        description: post.excerpt,
    }
}

export function generateStaticParams() {
    return blogPosts.map(post => ({ id: String(post.id) }))
}

export default async function BlogDetailPage({ params }: Props) {
    const { id } = await params
    const post = blogPosts.find(p => p.id === parseInt(id))

    if (!post) notFound()
    // TS narrowing — after notFound() the function never continues, but we assert here
    const safePost = post!

    const related = blogPosts.filter(p => p.id !== safePost.id).slice(0, 3)
    const paragraphs = safePost.content.trim().split('\n\n')
    const categoryColor = categoryColors[safePost.category] ?? "bg-slate-100 text-slate-700"

    return (
        <>
            <HeroHeader />

            <main className="min-h-screen bg-white pt-28 pb-24">

                {/* ── Article wrapper aligned with navbar (max-w-4xl) ── */}
                <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">

                    {/* Back link */}
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 transition-colors mb-10 group"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-0.5">
                            <path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>
                        </svg>
                        Kembali ke Blog
                    </Link>

                    {/* ── Article Header ── */}
                    <header className="mb-10">
                        <div className="flex flex-wrap items-center gap-3 mb-5">
                            <Badge className={`rounded-full text-xs font-semibold px-3 py-1 border-0 ${categoryColor}`}>
                                {safePost.category}
                            </Badge>
                            <span className="text-slate-300">·</span>
                            <time className="text-sm text-slate-500">{safePost.date}</time>
                            <span className="text-slate-300">·</span>
                            <span className="text-sm text-slate-500">{safePost.readTime}</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight mb-5">
                            {safePost.title}
                        </h1>

                        <p className="text-lg text-slate-500 leading-relaxed border-l-4 border-orange-400 pl-4">
                            {safePost.excerpt}
                        </p>

                        {/* Author row */}
                        <div className="flex items-center gap-3 mt-6 pt-6 border-t border-slate-100">
                            <div className="flex size-9 items-center justify-center rounded-full bg-orange-100 text-orange-700 font-bold text-sm shrink-0">
                                {safePost.author.charAt(0)}
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-slate-800">{safePost.author}</p>
                                <p className="text-xs text-slate-400">Agro Hero</p>
                            </div>
                        </div>
                    </header>

                    {/* ── Hero Image ── */}
                    <div className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden mb-12 shadow-xl shadow-slate-200/60">
                        <Image
                            src={safePost.imageUrl}
                            alt={safePost.title}
                            fill
                            className="object-cover"
                            style={{ objectPosition: safePost.imageObjectPosition ?? 'center' }}
                            priority
                        />
                        {/* subtle overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                    </div>

                    {/* ── Article Content ── */}
                    <div className="prose-custom">
                        {paragraphs.map((para, i) => {
                            const trimmed = para.trim()
                            if (!trimmed) return null

                            // **Bold heading** pattern
                            if (trimmed.startsWith('**') && trimmed.endsWith('**') && trimmed.split('**').length === 3) {
                                return (
                                    <h2 key={i} className="text-xl sm:text-2xl font-bold text-slate-800 mt-10 mb-4 flex items-center gap-3">
                                        <span className="inline-block w-1 h-6 rounded-full bg-orange-400 shrink-0" />
                                        {trimmed.replace(/\*\*/g, '')}
                                    </h2>
                                )
                            }

                            // Bullet list (* item)
                            if (trimmed.startsWith('*')) {
                                const items = trimmed.split('\n').filter(l => l.trim().startsWith('*'))
                                return (
                                    <ul key={i} className="list-disc list-inside space-y-2 mb-6 text-slate-700 leading-relaxed pl-2">
                                        {items.map((item, j) => {
                                            const cleaned = item.replace(/^\*\s*/, '')
                                            const formatted = cleaned.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-800 font-semibold">$1</strong>')
                                            return (
                                                <li key={j} className="text-base" dangerouslySetInnerHTML={{ __html: formatted }} />
                                            )
                                        })}
                                    </ul>
                                )
                            }

                            // Numbered list
                            if (/^\d+\./.test(trimmed)) {
                                const items = trimmed.split('\n').filter(l => l.trim())
                                return (
                                    <ol key={i} className="list-decimal list-inside space-y-2 mb-6 text-slate-700 leading-relaxed pl-2">
                                        {items.map((item, j) => (
                                            <li key={j} className="text-base">{item.replace(/^\d+\.\s*/, '')}</li>
                                        ))}
                                    </ol>
                                )
                            }

                            // Inline bold inside paragraph
                            const formatted = trimmed.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-800 font-semibold">$1</strong>')
                            return (
                                <p key={i} className="text-base text-slate-600 leading-[1.85] mb-5" dangerouslySetInnerHTML={{ __html: formatted }} />
                            )
                        })}
                    </div>

                    {/* ── Bottom author card ── */}
                    <div className="mt-14 p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50/40 border border-orange-100 flex items-center gap-4">
                        <div className="flex size-12 items-center justify-center rounded-full bg-orange-200 text-orange-800 font-bold text-lg shrink-0">
                            {safePost.author.charAt(0)}
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold text-slate-800">{safePost.author}</p>
                            <p className="text-xs text-slate-500 mt-0.5">Tim Agro Hero · Diterbitkan pada {safePost.date}</p>
                        </div>
                        <Link
                            href="/blog"
                            className="shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold text-orange-600 hover:text-orange-700 transition-colors"
                        >
                            Lihat semua artikel
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* ── Related Articles (full width section, inner constrained) ── */}
                <div className="mt-20 border-t border-slate-100 pt-16">
                    <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-1">Rekomendasi untuk Anda</p>
                                <h2 className="text-2xl font-bold text-slate-900">Artikel Lainnya</h2>
                            </div>
                            <Link
                                href="/blog"
                                className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors"
                            >
                                Semua artikel
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                                </svg>
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {related.map((rel) => {
                                const relColor = categoryColors[rel.category] ?? "bg-slate-100 text-slate-700"
                                return (
                                    <Link key={rel.id} href={`/blog/${rel.id}`} className="group block">
                                        <Card className="h-full overflow-hidden rounded-2xl border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md border">
                                            <div className="relative w-full aspect-video overflow-hidden bg-slate-100">
                                                <Image
                                                    src={rel.imageUrlSmall}
                                                    alt={rel.title}
                                                    fill
                                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                                    style={{ objectPosition: rel.imageObjectPosition ?? 'center' }}
                                                />
                                            </div>
                                            <CardContent className="p-5">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <Badge className={`rounded-full text-[10px] font-semibold px-2.5 py-0.5 border-0 ${relColor}`}>
                                                        {rel.category}
                                                    </Badge>
                                                    <span className="text-[11px] text-slate-400">{rel.readTime}</span>
                                                </div>
                                                <h3 className="text-sm font-bold text-slate-800 leading-snug mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
                                                    {rel.title}
                                                </h3>
                                                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                                                    {rel.excerpt}
                                                </p>
                                                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-orange-500 group-hover:gap-2 transition-all">
                                                    Baca artikel
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                                                    </svg>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                )
                            })}
                        </div>

                        <div className="mt-6 sm:hidden text-center">
                            <Link href="/blog" className="text-sm font-medium text-orange-600 hover:underline">
                                Lihat semua artikel →
                            </Link>
                        </div>
                    </div>
                </div>

            </main>

            <Footer />
        </>
    )
}
