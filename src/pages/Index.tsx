
import React from 'react';
import Navbar from '../shared/Navbar';
import HeroSection from '../features/hero/HeroSection';
import ServicesSection from '../features/services/ServicesSection';
import AboutSection from '../features/about/AboutSection';
import TestimonialSection from '../features/testimonial/TestimonialSection';
import LatestFeaturesSection from '../features/latestFeatures/LatestFeaturesSection';
import FAQSection from '../features/faq/FAQSection';
import ContactSection from '../features/contact/ContactSection';
import DownloadSection from '../features/download/DownloadSection';
import { Footer } from '../shared/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialSection />
        <LatestFeaturesSection />
        <FAQSection />
        <ContactSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
