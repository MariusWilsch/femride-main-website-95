
import React from 'react';
import { Navbar } from '../shared/Navbar';
import { HeroSection } from '../features/hero/HeroSection';
import { ServicesSection } from '../features/services/ServicesSection';
import { AboutSection } from '../features/about/AboutSection';
import { CitiesSection } from '../features/cities/CitiesSection';
import { LatestFeaturesSection } from '../features/latestFeatures/LatestFeaturesSection';
import { EarnSection } from '../features/earn/EarnSection';
import { DownloadSection } from '../features/download/DownloadSection';
import { Footer } from '../shared/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <CitiesSection />
        <LatestFeaturesSection />
        <EarnSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
