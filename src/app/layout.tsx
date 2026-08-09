import { Poppins } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Agro Hero - Where Capital Meets Land and Farmers",
    template: "%s | Agro Hero",
  },
  description: "Platform investasi pertanian inovatif di Indonesia. Menghubungkan investor, petani lokal, dan lahan produktif secara transparan, aman, dan berdampak sosial nyata.",
  metadataBase: new URL("https://agrohero.id"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Agro Hero - Where Capital Meets Land and Farmers",
    description: "Tumbuhkan aset Anda secara transparan dengan mendanai proyek pertanian terverifikasi bersama kelompok tani lokal. Aman dengan perlindungan asuransi.",
    url: "https://agrohero.id",
    siteName: "Agro Hero",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Agro Hero - The Future of Farming",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agro Hero - Where Capital Meets Land and Farmers",
    description: "Tumbuhkan aset Anda secara transparan dengan mendanai proyek pertanian terverifikasi bersama kelompok tani lokal.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logoo.png",
    apple: "/logoo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true} className={poppins.variable}>
      <body className="bg-white min-h-screen text-slate-800 font-sans antialiased selection:bg-blue-200">
        <div className="relative flex min-h-screen flex-col overflow-hidden">{children}</div>
      </body>
    </html>
  );
}
