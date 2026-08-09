import HeroSection from "@/components/hero-section";
import TractionBar from "@/components/traction-bar";
import ValueProposition from "@/components/value-proposition";
import FeaturedProjects from "@/components/featured-projects";
import StepsSection from "@/components/steps";
import TeamSection from "@/components/team";
import FaqSection from "@/components/faq-section";
import DownloadBanner from "@/components/download-banner";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agro Hero - Where Capital Meets Land and Farmers",
  description: "Mulai investasi pertanian tanpa ragu bersama Agro Hero. Dapatkan transparansi aset biologis, pelacakan real-time berbasis Agro Hero ID, perlindungan asuransi, dan bagi hasil tanpa riba.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Agro Hero - Where Capital Meets Land and Farmers",
    description: "Hubungkan modal Anda dengan petani lokal dan lahan produktif secara aman & transparan.",
    url: "https://agrohero.id",
  }
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <TractionBar />
      <ValueProposition />
      <FeaturedProjects />
      <StepsSection />
      <TeamSection />
      <FaqSection />
      <DownloadBanner />
      <Footer/>
    </>
  );
}
