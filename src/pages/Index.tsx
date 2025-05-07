
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrendingSection from "@/components/TrendingSection";
import InspirationGrid from "@/components/InspirationGrid";
import BlogSection from "@/components/BlogSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrendingSection />
      <InspirationGrid />
      <BlogSection />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default Index;
