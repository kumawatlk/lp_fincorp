import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TechnologySection from "@/components/TechnologySection";
import IndustriesSection from "@/components/IndustriesSection";
import PillarsSection from "@/components/PillarsSection";
import StatsSection from "@/components/StatsSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import CTAFooter from "@/components/CTAFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TechnologySection />
      {/* <IndustriesSection /> */}
      {/* <PillarsSection /> */}
      <StatsSection />
      {/* <PricingSection /> */}
      <TestimonialsSection />
      <BlogSection />
      <CTAFooter />
    </div>
  );
};

export default Index;
