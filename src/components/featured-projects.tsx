import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const projects = [
    {
        id: 1,
        title: "Kelompok Tani Kacang",
        location: "Taman Bali, Bangli, Bali",
        commodity: "Kacang panjang",
        image: "/bangli.jpg",
        status: "Fase Pendanaan",
        roi: "15% - 18%",
        duration: "3 Bulan",
        progress: 20,
    },
    {
        id: 2,
        title: "Kelompok Tani Lahar Sari",
        location: "Muntig, Tulamben, Karangasem, Bali",
        commodity: "Semangka",
        image: "/lahar-sari-1.jpeg",
        status: "Segera Buka",
        roi: "12% - 16%",
        duration: "5 Bulan",
        progress: 0,
    },
    {
        id: 3,
        title: "Kelompok Tani Lahar Sari",
        location: "Muntig, Tulamben, Karangasem, Bali",
        commodity: "Mentimun",
        image: "/lahar-sari.jpeg",
        imagePosition: "object-bottom",
        status: "Segera Buka",
        roi: "15% - 18%",
        duration: "5 Bulan",
        progress: 0,
    }
]

export default function FeaturedProjects() {
    return (
        <section className="py-24 bg-slate-50/50">
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Mitra Kelompok Tani Kami</h2>
                    <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">Kami telah memverifikasi dan bermitra dengan 3 kelompok tani unggulan yang siap untuk Anda danai dalam waktu dekat.</p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 pt-2">
                    {projects.map((project) => (
                        <Card key={project.id} className="group flex flex-col overflow-hidden rounded-3xl border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl border">
                            {/* Image Container */}
                            <div className="relative h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${project.imagePosition || 'object-center'}`} />
                                <Badge variant="secondary" className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm rounded-full">
                                    {project.status}
                                </Badge>
                            </div>
                            
                            {/* Content */}
                            <CardHeader className="p-6 pb-2">
                                <div className="flex items-center text-xs text-slate-500 mb-1 gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                                    {project.location}
                                </div>
                                <CardTitle className="text-xl font-bold text-slate-800">{project.title}</CardTitle>
                                <p className="text-orange-600 font-medium text-sm pt-1">{project.commodity}</p>
                            </CardHeader>

                            <CardContent className="px-6 py-2 flex-1">
                                <div className="grid grid-cols-2 gap-4 my-4 text-sm">
                                    <div className="flex flex-col">
                                        <span className="text-slate-500 text-xs">Estimasi ROI</span>
                                        <span className="font-semibold text-slate-800">{project.roi}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-slate-500 text-xs">Durasi</span>
                                        <span className="font-semibold text-slate-800">{project.duration}</span>
                                    </div>
                                </div>

                                <div className="mt-auto pt-2">
                                    <div className="flex justify-between text-xs mb-2">
                                        <span className="text-slate-500">Terdanai</span>
                                        <span className="font-semibold text-slate-800">{project.progress}%</span>
                                    </div>
                                    <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                                        <div className="bg-orange-500 h-2 rounded-full transition-all duration-1000" style={{ width: `${project.progress}%` }}></div>
                                    </div>
                                </div>
                            </CardContent>

                            <CardFooter className="p-6 pt-4">
                                <Button asChild className="w-full rounded-xl bg-orange-600 text-white hover:bg-orange-700 shadow-md">
                                    <a href="https://play.google.com/store/apps/details?id=com.agrohero.app" target="_blank" rel="noopener noreferrer">
                                        Lihat Detail
                                    </a>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                
                <div className="mt-12 text-center">
                    <Button asChild variant="outline" className="rounded-xl border-slate-300 text-slate-700 hover:bg-slate-50">
                        <a href="https://play.google.com/store/apps/details?id=com.agrohero.app" target="_blank" rel="noopener noreferrer">
                            Eksplorasi Proyek Lainnya
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    )
}
