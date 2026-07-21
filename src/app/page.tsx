import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import dynamic from "next/dynamic";

const HoverShowcase = dynamic(() => import("@/components/HoverShowcase"), { ssr: true });
const FeaturedTools = dynamic(() => import("@/components/FeaturedTools"), { ssr: true });
const Categories = dynamic(() => import("@/components/Categories"), { ssr: true });
const AiFeatures = dynamic(() => import("@/components/AiFeatures"), { ssr: true });
const Statistics = dynamic(() => import("@/components/Statistics"), { ssr: true });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: true });
const Newsletter = dynamic(() => import("@/components/Newsletter"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <HoverShowcase />
      <FeaturedTools />
      <Categories />
      <AiFeatures />
      <Statistics />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}
