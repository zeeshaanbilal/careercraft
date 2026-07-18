import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HoverShowcase from "@/components/HoverShowcase";
import FeaturedTools from "@/components/FeaturedTools";
import Categories from "@/components/Categories";
import AiFeatures from "@/components/AiFeatures";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

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
