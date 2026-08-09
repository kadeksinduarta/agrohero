import React from 'react'
import { HeroHeader } from "@/components/header"
import Footer from "@/components/footer"
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import blogPostsData from '@/data/blog-posts.json'

// ── Types ────────────────────────────────────────────────────────────────
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

// ── Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
    title: "Blog & Aktivitas | Agro Hero",
    description: "Kabar terbaru, aktivitas lahan, dan edukasi seputar investasi pertanian bersama Agro Hero.",
    alternates: {
        canonical: "/blog",
    },
    openGraph: {
        title: "Blog & Aktivitas | Agro Hero",
        description: "Ikuti perkembangan proyek pertanian, panen, dan edukasi dari Agro Hero.",
        url: "https://agrohero.id/blog",
    }
}

export default function BlogPage() {
    return (
        <>
            <HeroHeader />

            <main className="min-h-screen pt-32 pb-24 bg-slate-50/50">
                {/* Page Header */}
                <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-4">
                        Kabar &amp; Aktivitas
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Ikuti perkembangan terbaru lahan mitra, transparansi panen, dan artikel edukasi dari tim Agro Hero.
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <Card key={post.id} className="group flex flex-col overflow-hidden rounded-2xl border-slate-200 bg-white shadow-sm transition-all hover:shadow-md border">
                                <Link href={`/blog/${post.id}`} className="block relative w-full aspect-video overflow-hidden bg-slate-100">
                                    <Image
                                        src={post.imageUrlSmall}
                                        alt={post.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        style={{ objectPosition: post.imageObjectPosition ?? 'center' }}
                                    />
                                </Link>

                                <CardHeader className="p-6 pb-2">
                                    <div className="flex items-center gap-x-3 text-xs mb-2">
                                        <time dateTime={post.date} className="text-slate-500">
                                            {post.date}
                                        </time>
                                        <Badge variant="secondary" className="rounded-full bg-slate-100 text-slate-700 font-medium">
                                            {post.category}
                                        </Badge>
                                    </div>
                                    <CardTitle className="text-lg font-semibold leading-snug text-slate-900 group-hover:text-slate-600">
                                        <Link href={`/blog/${post.id}`}>
                                            {post.title}
                                        </Link>
                                    </CardTitle>
                                </CardHeader>

                                <CardContent className="px-6 py-2 flex-1">
                                    <p className="line-clamp-3 text-sm leading-relaxed text-slate-600">
                                        {post.excerpt}
                                    </p>
                                </CardContent>

                                <CardFooter className="p-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                                    <span className="text-xs text-slate-500 font-medium">{post.author}</span>
                                    <Link
                                        href={`/blog/${post.id}`}
                                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-600 hover:text-orange-700 transition-colors group/link"
                                    >
                                        Baca Selengkapnya
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover/link:translate-x-0.5">
                                            <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                                        </svg>
                                    </Link>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}
