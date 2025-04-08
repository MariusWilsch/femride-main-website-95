
import React, { useState, useEffect } from 'react';
import Navbar from '../shared/Navbar';
import HeroSection from '../features/hero/HeroSection';
import ServicesSection from '../features/services/ServicesSection';
import AboutSection from '../features/about/AboutSection';
import LatestFeaturesSection from '../features/latestFeatures/LatestFeaturesSection';
import FAQSection from '../features/faq/FAQSection';
import ContactSection from '../features/contact/ContactSection';
import DownloadSection from '../features/download/DownloadSection';
import { Footer } from '../shared/Footer';
import { ChevronUp } from 'lucide-react';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <LatestFeaturesSection />
        <FAQSection />
        <ContactSection />
        <DownloadSection />
      </main>
      <Footer />
      
      {/* Scroll to top button - updated to rounded-full */}
      <button 
        onClick={scrollToTop} 
        className={`fixed bottom-8 right-8 bg-[#fa9de3] hover:bg-[#e989cc] text-black w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <ChevronUp size={24} />
      </button>
    </div>
  );
};

export default Index;
