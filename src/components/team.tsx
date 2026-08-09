import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

const members = [
    {
        name: 'Sindu Arta',
        role: 'CEO - Agro Hero',
        avatar: '/SINDU.jpg',
    },
    {
        name: 'I Gusti Lanang Agung Raditya Putra, S.Pd.,M',
        role: 'Bisnis Mentor',
        avatar: '/pak-lanang.jpg',
    },
    {
        name: 'Candra Utami',
        role: 'COO - Agro Hero',
        avatar: '/candra.jpg',
    },
    {
        name: 'Windu Sari',
        role: 'CFO - Agro Hero',
        avatar: '/Windu.jpg',
    },
    {
        name: 'Angga Widiana',
        role: 'CTO - Agro Hero',
        avatar: '/Angga.jpg',
    },
    {
        name: 'Kurnia',
        role: 'CMO - Agro Hero',
        avatar: '/Kurnia.jpg',
    }
]

export default function TeamSection() {
    return (
        <section className="bg-gray-50/50 py-16 md:py-32">
            <div className="mx-auto max-w-5xl border-t px-6">
                <span className="text-xs font-semibold uppercase tracking-wider -ml-6 -mt-3.5 block w-max bg-gray-50 px-6 text-slate-500">Tim Agro Hero</span>
                <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
                    <div className="sm:w-3/5">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Tim Berpengalaman</h2>
                    </div>
                    <div className="mt-6 sm:mt-0">
                        <p className="text-slate-600 text-sm leading-relaxed">Tim multidisiplin kami berdedikasi penuh menghubungkan pemilik modal, agronomis, dan kelompok tani demi terciptanya ekosistem pertanian terpercaya.</p>
                    </div>
                </div>
                <div className="mt-12 md:mt-24">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {members.map((member, index) => (
                            <Card key={index} className="group overflow-hidden rounded-2xl border-slate-200 bg-white shadow-sm hover:shadow-md transition-all">
                                <CardContent className="p-6 flex flex-col items-center text-center">
                                    <Avatar className="size-24 mb-4 ring-2 ring-orange-600/20">
                                        <AvatarImage src={member.avatar} alt={member.name} className="object-cover" />
                                        <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                                    </Avatar>
                                    
                                    <h3 className="text-lg font-bold text-slate-800">{member.name}</h3>
                                    <span className="text-xs font-medium text-orange-600 mt-1">{member.role}</span>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
