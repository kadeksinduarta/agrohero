'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
    User, 
    Briefcase, 
    Map, 
    Users, 
    Leaf, 
    BarChart3, 
    Cloud, 
    MapPin, 
    Share2, 
    CheckCircle2,
    ShieldCheck,
    LineChart,
    Wallet
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

// --- Types ---
type Particle = {
    x: number;
    y: number;
    size: number;
    speed: number;
    progress: number;
    pathIndex: number;
    direction: 1 | -1;
    opacity: number;
    type: 'data' | 'investment' | 'communication';
}

type Node = {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    connections: number[];
}

export default function EcosystemSection() {
    const containerRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const isInView = useInView(containerRef, { once: false, amount: 0.2 })
    
    // --- Canvas Animation ---
    useEffect(() => {
        if (!canvasRef.current || !containerRef.current) return

        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let animationFrameId: number
        
        // Resize canvas to match container
        const resizeCanvas = () => {
            const rect = containerRef.current!.getBoundingClientRect()
            canvas.width = rect.width
            canvas.height = rect.height
        }
        
        resizeCanvas()
        window.addEventListener('resize', resizeCanvas)

        // Setup particles and nodes
        const particles: Particle[] = []
        const nodes: Node[] = []
        
        // Paths from center (phone) to stakeholder cards (approximate relative positions)
        // [startX, startY, controlX, controlY, endX, endY]
        const getPaths = (w: number, h: number) => {
            const cx = w / 2;
            const cy = h / 2;
            return [
                // To Petani (Top)
                [cx, cy - 100, cx - 150, cy - 250, cx, cy - 250], 
                [cx, cy - 100, cx + 150, cy - 250, cx, cy - 250],
                // To Investor (Left)
                [cx - 150, cy, cx - 300, cy - 100, cx - 350, cy],
                [cx - 150, cy, cx - 300, cy + 100, cx - 350, cy],
                // To Pemilik Lahan (Right)
                [cx + 150, cy, cx + 300, cy - 100, cx + 350, cy],
                [cx + 150, cy, cx + 300, cy + 100, cx + 350, cy],
                // To Komunitas (Bottom)
                [cx, cy + 200, cx - 200, cy + 300, cx, cy + 350],
                [cx, cy + 200, cx + 200, cy + 300, cx, cy + 350]
            ]
        }

        // Initialize background neural nodes
        for (let i = 0; i < 40; i++) {
            nodes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                connections: []
            })
        }

        // Initialize particles
        for (let i = 0; i < 60; i++) {
            particles.push({
                x: 0, y: 0,
                size: Math.random() * 2.5 + 1.5,
                speed: Math.random() * 0.002 + 0.001,
                progress: Math.random(),
                pathIndex: Math.floor(Math.random() * 8),
                direction: Math.random() > 0.5 ? 1 : -1,
                opacity: Math.random() * 0.5 + 0.3,
                type: Math.random() > 0.6 ? 'investment' : (Math.random() > 0.3 ? 'data' : 'communication')
            })
        }

        // Helper to draw bezier curve and get point at progress
        const getBezierPoint = (t: number, p: number[]) => {
            const [x1, y1, cx, cy, x2, y2] = p
            const u = 1 - t
            const tt = t * t
            const uu = u * u
            const x = uu * x1 + 2 * u * t * cx + tt * x2
            const y = uu * y1 + 2 * u * t * cy + tt * y2
            return { x, y }
        }

        let time = 0;

        const animate = () => {
            if (!isInView) {
                animationFrameId = requestAnimationFrame(animate)
                return
            }
            
            time += 0.01;
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            
            const w = canvas.width
            const h = canvas.height
            const paths = getPaths(w, h)

            // 1. Draw Neural Mesh (Background)
            ctx.lineWidth = 0.5
            for (let i = 0; i < nodes.length; i++) {
                const node = nodes[i]
                node.x += node.vx
                node.y += node.vy
                
                // Bounce off edges
                if (node.x < 0 || node.x > w) node.vx *= -1
                if (node.y < 0 || node.y > h) node.vy *= -1

                ctx.fillStyle = `rgba(247, 147, 30, ${Math.sin(time + i) * 0.2 + 0.3})`
                ctx.beginPath()
                ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2)
                ctx.fill()

                // Connect close nodes
                for (let j = i + 1; j < nodes.length; j++) {
                    const node2 = nodes[j]
                    const dx = node.x - node2.x
                    const dy = node.y - node2.y
                    const dist = Math.sqrt(dx * dx + dy * dy)
                    
                    if (dist < 150) {
                        ctx.beginPath()
                        ctx.strokeStyle = `rgba(247, 147, 30, ${0.15 - dist / 1000})`
                        ctx.moveTo(node.x, node.y)
                        ctx.lineTo(node2.x, node2.y)
                        ctx.stroke()
                    }
                }
            }

            // 2. Draw Connector Paths (Pulsing)
            const pulseGlow = Math.sin(time * 2) * 0.3 + 0.5
            paths.forEach((p, i) => {
                ctx.beginPath()
                ctx.moveTo(p[0], p[1])
                ctx.quadraticCurveTo(p[2], p[3], p[4], p[5])
                ctx.strokeStyle = `rgba(247, 147, 30, ${0.15 + (i % 2 === 0 ? pulseGlow * 0.1 : 0)})`
                ctx.lineWidth = 1.5
                // Dashed line effect
                ctx.setLineDash([5, 10])
                ctx.lineDashOffset = -time * 20 * (i % 2 === 0 ? 1 : -1)
                ctx.stroke()
                ctx.setLineDash([])
            })

            // 3. Draw Traveling Particles
            particles.forEach(p => {
                // Update progress
                p.progress += p.speed * p.direction
                if (p.progress >= 1) {
                    p.progress = 0
                    p.pathIndex = Math.floor(Math.random() * paths.length)
                } else if (p.progress <= 0) {
                    p.progress = 1
                    p.pathIndex = Math.floor(Math.random() * paths.length)
                }

                const path = paths[p.pathIndex]
                const pos = getBezierPoint(p.progress, path)
                
                // Color based on type
                let color = '247, 147, 30' // Orange
                if (p.type === 'investment') color = '34, 197, 94' // Green
                if (p.type === 'data') color = '59, 130, 246' // Blue

                // Draw particle glow
                const gradient = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, p.size * 3)
                gradient.addColorStop(0, `rgba(${color}, ${p.opacity + 0.2})`)
                gradient.addColorStop(1, `rgba(${color}, 0)`)
                
                ctx.fillStyle = gradient
                ctx.beginPath()
                ctx.arc(pos.x, pos.y, p.size * 3, 0, Math.PI * 2)
                ctx.fill()
                
                // Draw particle core
                ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity + 0.4})`
                ctx.beginPath()
                ctx.arc(pos.x, pos.y, p.size * 0.8, 0, Math.PI * 2)
                ctx.fill()
            })

            animationFrameId = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener('resize', resizeCanvas)
            cancelAnimationFrame(animationFrameId)
        }
    }, [isInView])

    return (
        <section 
            ref={containerRef}
            className="relative min-h-[1200px] w-full overflow-hidden bg-gradient-to-b from-white to-[#FAFBFF] py-24 flex items-center justify-center"
        >
            {/* Soft Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-50/50 via-transparent to-transparent opacity-80" />
            
            {/* Canvas Layer */}
            <canvas 
                ref={canvasRef} 
                className="absolute inset-0 z-0 pointer-events-none"
            />

            <div className="relative z-10 w-full max-w-6xl mx-auto h-[1000px] flex items-center justify-center hidden lg:flex">
                
                {/* 1. Petani Card (Top) */}
                <div className="absolute top-[0%] left-1/2 -translate-x-1/2 animate-float-medium group z-20">
                    <div className="flex bg-white/80 backdrop-blur-xl border border-white/60 p-4 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 w-[380px] hover:border-orange-200">
                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-50 flex-shrink-0 flex items-center justify-center overflow-hidden mr-4">
                            <Leaf className="size-10 text-orange-500 group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <div className="p-1.5 bg-orange-100 rounded-lg"><User className="size-4 text-orange-600" /></div>
                                <h3 className="font-semibold text-slate-800">Petani</h3>
                            </div>
                            <p className="text-xs text-slate-500 mb-2 leading-relaxed">Kelola lahan, pantau tanaman, dan tingkatkan hasil panen.</p>
                            <ul className="space-y-1">
                                {['Monitoring Tanaman', 'Rekomendasi AI', 'Kelola Lahan'].map(text => (
                                    <li key={text} className="text-[10px] text-slate-600 flex items-center gap-1.5">
                                        <CheckCircle2 className="size-3 text-orange-500" />
                                        {text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 2. Investor Card (Left) */}
                <div className="absolute left-[2%] top-[45%] -translate-y-1/2 animate-float-gentle group z-20" style={{ animationDelay: '-1.5s' }}>
                    <div className="flex bg-white/80 backdrop-blur-xl border border-white/60 p-4 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 w-[360px] hover:border-blue-200">
                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 flex-shrink-0 flex items-center justify-center overflow-hidden mr-4">
                            <Briefcase className="size-10 text-blue-500 group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <div className="p-1.5 bg-blue-100 rounded-lg"><User className="size-4 text-blue-600" /></div>
                                <h3 className="font-semibold text-slate-800">Investor</h3>
                            </div>
                            <p className="text-xs text-slate-500 mb-2 leading-relaxed">Temukan peluang investasi aman dan menguntungkan.</p>
                            <ul className="space-y-1">
                                {['Investasi Aman', 'Laporan Real-time', 'Pantau Keuntungan'].map(text => (
                                    <li key={text} className="text-[10px] text-slate-600 flex items-center gap-1.5">
                                        <CheckCircle2 className="size-3 text-orange-500" />
                                        {text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 3. Pemilik Lahan Card (Right) */}
                <div className="absolute right-[2%] top-[45%] -translate-y-1/2 animate-float-slow group z-20" style={{ animationDelay: '-3s' }}>
                    <div className="flex bg-white/80 backdrop-blur-xl border border-white/60 p-4 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 w-[360px] hover:border-emerald-200">
                         <div className="flex-1 mr-4 text-right">
                            <div className="flex items-center justify-end gap-2 mb-1">
                                <h3 className="font-semibold text-slate-800">Pemilik Lahan</h3>
                                <div className="p-1.5 bg-emerald-100 rounded-lg"><Map className="size-4 text-emerald-600" /></div>
                            </div>
                            <p className="text-xs text-slate-500 mb-2 leading-relaxed">Kelola dan publikasikan lahan untuk peluang terbaik.</p>
                            <ul className="space-y-1 flex flex-col items-end">
                                {['Publikasikan Lahan', 'Kelola Lahan', 'Temukan Investor'].map(text => (
                                    <li key={text} className="text-[10px] text-slate-600 flex items-center gap-1.5 flex-row-reverse">
                                        <CheckCircle2 className="size-3 text-orange-500" />
                                        {text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-50 flex-shrink-0 flex items-center justify-center overflow-hidden">
                            <MapPin className="size-10 text-emerald-500 group-hover:scale-110 transition-transform duration-500" />
                        </div>
                    </div>
                </div>

                {/* 4. Komunitas Card (Bottom) */}
                <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 animate-float-gentle group z-20" style={{ animationDelay: '-2s' }}>
                     <div className="flex flex-col items-center text-center bg-white/80 backdrop-blur-xl border border-white/60 p-5 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 w-[420px]">
                        <div className="flex items-center justify-center gap-3 mb-2">
                            <div className="p-2 bg-orange-100 rounded-xl"><Users className="size-5 text-orange-600" /></div>
                            <h3 className="font-semibold text-slate-800 text-lg">Komunitas Agro Hero</h3>
                        </div>
                        <p className="text-sm text-slate-500">Petani • Investor • Pemilik Lahan terhubung dalam satu ekosistem digital.</p>
                     </div>
                </div>


                {/* CENTER: The Animated Smartphone */}
                <div className="relative z-30 animate-float-medium" style={{ animationDelay: '-4s' }}>
                    <div className="relative w-[320px] h-[650px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl border-4 border-slate-800 ring-4 ring-white/50 animate-glow-pulse">
                        {/* Notch */}
                        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-full z-40"></div>
                        
                        {/* Screen Content */}
                        <div className="relative w-full h-full bg-[#fafafa] rounded-[2.25rem] overflow-hidden flex flex-col">
                            
                            {/* App Header */}
                            <div className="pt-12 pb-4 px-6 bg-white flex justify-between items-center shadow-sm">
                                <div className="text-xl font-black tracking-tighter text-slate-800">AGRO <span className="text-orange-500">HERO</span></div>
                                <div className="size-8 rounded-full bg-slate-100 flex items-center justify-center relative">
                                    <User className="size-4 text-slate-600" />
                                    {/* Animated Notification Badge */}
                                    <div className="absolute top-0 right-0 size-2.5 bg-red-500 rounded-full border-2 border-white animate-bounce"></div>
                                </div>
                            </div>

                            {/* App Body - Scrollable Area (Mock) */}
                            <div className="flex-1 p-5 space-y-4 overflow-hidden relative">
                                
                                {/* Hero Graphic */}
                                <div className="h-32 bg-orange-50 rounded-2xl flex items-center justify-center relative overflow-hidden group">
                                    <Leaf className="size-12 text-orange-400 opacity-50 absolute right-4 bottom-2 animate-rotate-subtle" />
                                    <div className="text-center relative z-10">
                                        <div className="text-xs font-medium text-orange-600 mb-1">Bisa di mulai dari</div>
                                        <div className="text-2xl font-bold text-slate-800 flex items-center justify-center gap-1">
                                            Rp <Counter value={100000} />
                                        </div>
                                         <div className="text-xs font-medium text-orange-600 mb-1"> sudah berdampak besar bagi petani</div>
                                    </div>
                                    {/* Shimmer Effect */}
                                    <div className="absolute inset-0 w-full h-full animate-shimmer pointer-events-none"></div>
                                </div>

                                {/* Dynamic Cards */}
                                <div className="space-y-3">
                                    <AppCard icon={Wallet} title="Akses Modal Awal" desc="Dapatkan dukungan dana untuk bibit." delay={0.1} />
                                    <AppCard icon={LineChart} title="Pendapatan Berkelanjutan" desc="Sistem pertanian modern." delay={0.2} />
                                    <AppCard icon={ShieldCheck} title="Bagi Hasil Adil" desc="Transparansi penuh dalam pembagian." delay={0.3} />
                                </div>
                                
                                {/* CTA Button */}
                                <div className="absolute bottom-6 left-5 right-5">
                                    <Button className="w-full relative overflow-hidden group">
                                        <span className="relative z-10">Daftar Sekarang</span>
                                        <div className="absolute inset-0 h-full w-0 bg-white/20 group-hover:w-full transition-all duration-300 ease-out"></div>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 6 Circular Orbiting Icons */}
                <OrbitingIcon Icon={Leaf} label="Pertanian Pintar" top="15%" left="25%" delay="0s" color="text-emerald-500" />
                <OrbitingIcon Icon={BarChart3} label="Analisis Data" top="30%" left="18%" delay="-2s" color="text-orange-500" />
                <OrbitingIcon Icon={Cloud} label="Data Cloud" bottom="20%" left="25%" delay="-4s" color="text-blue-500" />
                
                <OrbitingIcon Icon={CheckCircle2} label="Kelola Lahan" top="20%" right="25%" delay="-1s" color="text-emerald-500" />
                <OrbitingIcon Icon={MapPin} label="Lokasi Lahan" top="35%" right="18%" delay="-3s" color="text-rose-500" />
                <OrbitingIcon Icon={Share2} label="Kolaborasi" bottom="20%" right="25%" delay="-5s" color="text-purple-500" />

            </div>

            {/* Mobile View Placeholder/Fallback (since absolute positioning is tricky on mobile) */}
            <div className="lg:hidden flex flex-col items-center justify-center w-full px-6 space-y-12 relative z-10">
                <div className="text-center mb-8">
                     <h2 className="text-3xl font-medium tracking-tight text-slate-800">
                        Ekosistem <span className="text-orange-500">Agro Hero</span>
                    </h2>
                    <p className="mt-4 text-sm text-slate-500 max-w-md mx-auto">
                        Sistem terintegrasi yang menghubungkan Petani, Investor, dan Pemilik Lahan.
                    </p>
                </div>

                {/* Phone Mockup Mobile */}
                <div className="relative z-30">
                    <div className="relative w-[300px] h-[600px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl border-4 border-slate-800 ring-4 ring-white/50 animate-glow-pulse">
                        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-full z-40"></div>
                        <div className="relative w-full h-full bg-[#fafafa] rounded-[2.25rem] overflow-hidden flex flex-col">
                            <div className="pt-12 pb-4 px-6 bg-white flex justify-between items-center shadow-sm">
                                <div className="text-xl font-black tracking-tighter text-slate-800">AGRO <span className="text-orange-500">HERO</span></div>
                                <div className="size-8 rounded-full bg-slate-100 flex items-center justify-center relative">
                                    <User className="size-4 text-slate-600" />
                                    <div className="absolute top-0 right-0 size-2.5 bg-red-500 rounded-full border-2 border-white animate-bounce"></div>
                                </div>
                            </div>
                            <div className="flex-1 p-5 space-y-4 overflow-hidden relative">
                                <div className="h-32 bg-orange-50 rounded-2xl flex items-center justify-center relative overflow-hidden group">
                                    <Leaf className="size-12 text-orange-400 opacity-50 absolute right-4 bottom-2 animate-rotate-subtle" />
                                    <div className="text-center relative z-10">
                                        <div className="text-xs font-medium text-orange-600 mb-1">Total Aset Dikelola</div>
                                        <div className="text-2xl font-bold text-slate-800 flex items-center justify-center gap-1">
                                            Rp 1 juta berdampak kelingkungan
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <AppCard icon={Wallet} title="Akses Modal Awal" desc="Dapatkan dukungan dana untuk bibit." delay={0.1} />
                                    <AppCard icon={LineChart} title="Pendapatan Berkelanjutan" desc="Sistem pertanian modern." delay={0.2} />
                                    <AppCard icon={ShieldCheck} title="Bagi Hasil Adil" desc="Transparansi penuh dalam pembagian." delay={0.3} />
                                </div>
                                <div className="absolute bottom-6 left-5 right-5">
                                    <Button className="w-full">
                                        Daftar Sekarang
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Cards Stacked */}
                <div className="grid grid-cols-1 gap-6 w-full max-w-sm">
                     <div className="flex bg-white/80 backdrop-blur-xl border border-white/60 p-4 rounded-3xl shadow-xl w-full">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-50 flex-shrink-0 flex items-center justify-center overflow-hidden mr-4">
                            <Leaf className="size-8 text-orange-500" />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-semibold text-slate-800 text-sm">Petani</h3>
                            </div>
                            <p className="text-[11px] text-slate-500">Kelola lahan, pantau tanaman, dan tingkatkan hasil panen.</p>
                        </div>
                    </div>

                    <div className="flex bg-white/80 backdrop-blur-xl border border-white/60 p-4 rounded-3xl shadow-xl w-full">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 flex-shrink-0 flex items-center justify-center overflow-hidden mr-4">
                            <Briefcase className="size-8 text-blue-500" />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-semibold text-slate-800 text-sm">Investor</h3>
                            </div>
                            <p className="text-[11px] text-slate-500">Temukan peluang investasi aman dan menguntungkan.</p>
                        </div>
                    </div>

                    <div className="flex bg-white/80 backdrop-blur-xl border border-white/60 p-4 rounded-3xl shadow-xl w-full">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-50 flex-shrink-0 flex items-center justify-center overflow-hidden mr-4">
                            <MapPin className="size-8 text-emerald-500" />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-semibold text-slate-800 text-sm">Pemilik Lahan</h3>
                            </div>
                            <p className="text-[11px] text-slate-500">Kelola dan publikasikan lahan untuk peluang terbaik.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

// --- Helper Components ---

function AppCard({ icon: Icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: number }) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay, duration: 0.5 }}
            className="bg-white p-3.5 rounded-2xl shadow-sm border border-slate-100 flex gap-3 items-center group cursor-default hover:shadow-md transition-all"
        >
            <div className="p-2.5 bg-orange-50 text-orange-500 rounded-xl group-hover:scale-110 transition-transform">
                <Icon className="size-5" />
            </div>
            <div>
                <div className="text-sm font-semibold text-slate-800">{title}</div>
                <div className="text-[10px] text-slate-500 leading-tight mt-0.5">{desc}</div>
            </div>
        </motion.div>
    )
}

function OrbitingIcon({ Icon, label, top, left, right, bottom, delay, color }: any) {
    return (
        <div 
            className="absolute z-10 flex flex-col items-center animate-float-slow animate-breathe-icon" 
            style={{ top, left, right, bottom, animationDelay: delay }}
        >
            <div className="size-16 rounded-full bg-white shadow-lg border border-white/60 flex items-center justify-center relative backdrop-blur-md">
                <Icon className={cn("size-7 animate-rotate-subtle", color)} />
                {/* Connecting dot */}
                <div className="absolute -bottom-1 size-2 bg-orange-400 rounded-full shadow-[0_0_8px_rgba(247,147,30,0.8)]"></div>
            </div>
            <span className="mt-2 text-[11px] font-medium text-slate-600 bg-white/70 px-2 py-0.5 rounded-full backdrop-blur-sm">{label}</span>
        </div>
    )
}

function Counter({ value }: { value: number }) {
    const [count, setCount] = useState(0)
    const nodeRef = useRef<HTMLSpanElement>(null)
    const inView = useInView(nodeRef, { once: false, amount: 0.5 })

    useEffect(() => {
        if (inView) {
            let start = 0
            const duration = 2000 // 2 seconds
            const increment = value / (duration / 16) // 60fps
            
            const timer = setInterval(() => {
                start += increment
                if (start >= value) {
                    setCount(value)
                    clearInterval(timer)
                } else {
                    setCount(Math.floor(start))
                }
            }, 16)
            return () => clearInterval(timer)
        } else {
            setCount(0)
        }
    }, [value, inView])

    return <span ref={nodeRef}>{count}</span>
}
