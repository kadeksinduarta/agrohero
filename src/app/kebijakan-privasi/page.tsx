import React from 'react'
import { HeroHeader } from "@/components/header"
import Footer from "@/components/footer"
import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Privacy Policy | Agro Hero",
  description: "Privacy Policy for Agro Hero mobile and web applications. Learn how we handle camera, location, personal, and financial data.",
  alternates: {
    canonical: "/kebijakan-privasi",
  },
  openGraph: {
    title: "Privacy Policy | Agro Hero",
    description: "Official Privacy Policy and Data Handling notice for Agro Hero platform.",
    url: "https://agrohero.id/kebijakan-privasi",
  }
};

export default function KebijakanPrivasi() {
    return (
        <>
            <HeroHeader />
            
            <main className="relative flex flex-col items-center justify-center overflow-hidden pt-32 lg:pt-40 pb-20 px-6 bg-slate-50/50">
                <div className="relative z-10 w-full max-w-4xl">
                    
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                            Privacy Policy
                        </h1>
                        <p className="mt-3 text-slate-500 font-medium">
                            Agro Hero • Last updated: July 25, 2026
                        </p>
                    </div>

                    {/* Content Card */}
                    <Card className="rounded-[2rem] border-slate-200 bg-white p-6 sm:p-12 shadow-sm border space-y-8 text-slate-600 leading-relaxed">
                        <CardContent className="p-0 space-y-8">
                            
                            <section className="space-y-3">
                                <h2 className="text-xl font-bold text-slate-900">1. Introduction</h2>
                                <p>
                                    Welcome to Agro Hero. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile and web applications.
                                </p>
                                <p>
                                    Please read this privacy notice carefully as it will help you understand what we do with the information that we collect. By accessing or using Agro Hero, you agree to this Privacy Policy.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-xl font-bold text-slate-900">2. Data Collection and Usage</h2>
                                <p>
                                    To provide our core services connecting farmers and investors, we require specific data access:
                                </p>
                                <div className="space-y-3 pl-2">
                                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                                        <h3 className="font-semibold text-slate-800 mb-1">Camera Access</h3>
                                        <p className="text-sm text-slate-600">
                                            We require camera access specifically for farmers to take photos of their fields and crop progress in real-time. This is essential for verifying project milestones and providing accurate, transparent updates to investors. Camera access is strictly used for this reporting purpose.
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                                        <h3 className="font-semibold text-slate-800 mb-1">Location (GPS) Access</h3>
                                        <p className="text-sm text-slate-600">
                                            We collect real-time location data (GPS coordinates) exclusively when reports are submitted. This ensures the authenticity of the agricultural land updates by verifying that the report was indeed created at the actual project coordinates.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-3">
                                <h2 className="text-xl font-bold text-slate-900">3. Personal and Financial Data</h2>
                                <p>
                                    We collect and process the following personal and financial information:
                                </p>
                                <ul className="list-disc list-inside space-y-2 pl-2 text-sm">
                                    <li><strong>Identity &amp; Contact:</strong> Full Name, Email Address, and Phone Number for account creation, authentication, and platform communication.</li>
                                    <li><strong>Financial Information:</strong> Bank Details (including Bank Name, Account Number, and Account Holder Name).</li>
                                </ul>
                                <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100 text-emerald-950 text-sm mt-3">
                                    <strong>Purpose of Financial Data:</strong> Your financial data is strictly processed for the purpose of facilitating project funding and executing secure disbursements (pencairan dana) between investors and farmers.
                                </div>
                            </section>

                            <section className="space-y-3">
                                <h2 className="text-xl font-bold text-slate-900">4. Data Security and Encryption</h2>
                                <p>
                                    We prioritize the security of your data. All data transmitted between your device and our servers—including personal details, financial records, and location coordinates—is protected using industry-standard HTTPS/TLS encryption.
                                </p>
                                <p>
                                    We employ strict access controls and regular security assessments to prevent unauthorized access, disclosure, or modification of your information.
                                </p>
                            </section>

                            <section className="space-y-3">
                                <h2 className="text-xl font-bold text-slate-900">5. Data Retention and Deletion</h2>
                                <p>
                                    We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
                                </p>
                                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 mt-4">
                                    <h3 className="font-bold text-slate-900">How to Request Data Deletion</h3>
                                    <p className="text-sm text-slate-600">
                                        You have the right to request the deletion of your account and associated personal data at any time. To initiate a data deletion request, please follow these steps:
                                    </p>
                                    <ol className="list-decimal list-inside space-y-1.5 text-sm text-slate-700 font-medium pl-2">
                                        <li>Send an email to our support team at <a href="mailto:admin.agrohero@gmail.com" className="text-emerald-600 hover:underline">admin.agrohero@gmail.com</a>.</li>
                                        <li>Use the subject line: <code className="bg-slate-200/70 px-1.5 py-0.5 rounded text-xs">Data Deletion Request - [Your Full Name]</code>.</li>
                                        <li>Include the email address or phone number associated with your Agro Hero account in the email body.</li>
                                    </ol>
                                    <p className="text-xs text-slate-500 pt-2 border-t border-slate-200/60">
                                        <strong>Note:</strong> Some financial transaction records may be retained for a specific period as required by financial regulations and anti-money laundering (AML) laws.
                                    </p>
                                </div>
                            </section>

                            <section className="space-y-3">
                                <h2 className="text-xl font-bold text-slate-900">6. Contact Us</h2>
                                <p>
                                    If you have any questions, concerns, or feedback regarding this Privacy Policy or our data practices, please contact us:
                                </p>
                                <div className="text-sm space-y-1 pl-2">
                                    <p><strong>Email:</strong> <a href="mailto:admin.agrohero@gmail.com" className="text-emerald-600 hover:underline">admin.agrohero@gmail.com</a></p>
                                    <p><strong>Application:</strong> Agro Hero</p>
                                </div>
                            </section>

                        </CardContent>
                    </Card>

                </div>
            </main>

            <Footer />
        </>
    )
}
