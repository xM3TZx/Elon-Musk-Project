import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WorksSection from "@/components/WorksSection";
import TraitsSection from "@/components/TraitsSection";
import QuoteSection from "@/components/QuoteSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen" dir="rtl">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WorksSection />
      <TraitsSection />
      <QuoteSection />
      <Footer />
    </div>
  );
};

export default Index;
