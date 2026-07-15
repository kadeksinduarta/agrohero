import AboutSection from "@/components/about";
import { HeroHeader } from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Kenali lebih dekat Agro Hero, sebuah platform multipihak inovatif yang mengatasi trust gap dalam pertanian di Indonesia. Temui visi, misi, dan tim eksekutif kami.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "Tentang Kami | Agro Hero",
    description: "Visi, Misi, dan Tim di balik Agro Hero — platform investasi pertanian terintegrasi inovatif di Indonesia.",
    url: "https://agrohero.id/about",
  }
};

export default function AboutPage() {
  return (
    <>
      <HeroHeader />
      <div className="pt-20"> {/* Add padding top so it doesn't get covered by the sticky header */}
        <AboutSection />
      </div>
      <Footer />
    </>
  );
}
