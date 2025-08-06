import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";

import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import PageLoader from "@/components/PageLoader";
import { useAOS } from "@/hooks/useAOS";

const Index = () => {
  useAOS();
  
  return (
    <>
      <PageLoader />
      <ScrollProgress />
      <div className="min-h-screen bg-background">
        <Header />
        <HeroSection />
        <div data-aos="fade-up">
          <AboutSection />
        </div>
        <div data-aos="fade-up" data-aos-delay="100">
          <FeaturesSection />
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <HowItWorksSection />
        </div>
        <div data-aos="zoom-in">
          <ContactSection />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Index;
