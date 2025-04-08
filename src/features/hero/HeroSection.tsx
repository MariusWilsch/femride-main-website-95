
import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { Button } from '@/components/ui/button';
import { AppWindow, Smartphone } from 'lucide-react';

const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center">
      {/* Hero background with the woman in car image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/lovable-uploads/ff943406-64f5-4630-b5c0-89871fbad977.png" 
          alt="Woman in car with flowers"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content overlay with gradient for text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-2xl mx-auto">
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-wide">
            <span className="block">{t('heroTitle1')}</span>
            <span className="block">{t('heroTitle2')}</span>
          </h1>
          
          <p className="text-xl text-white/90 mt-6 mb-8">
            {t('heroSubtitle')}
          </p>
          
          <div className="flex flex-col items-center justify-center space-y-6">
            <Button 
              className="px-8 py-6 text-lg bg-[#fa9de3] hover:bg-[#e989cc] text-black rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {t('heroButton')}
            </Button>
            
            {/* App Store and Google Play buttons stacked below the main button */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              {/* App Store Button */}
              <div className="relative group sm:w-1/2">
                <Button 
                  className="bg-gray-800 hover:bg-gray-700 text-white rounded-3xl font-medium px-8 py-6 text-base group-hover:shadow-[0_0_25px_rgba(250,157,227,0.3)] transition-all duration-300 flex items-center gap-4 border border-gray-700 opacity-90 pointer-events-none w-full"
                >
                  <AppWindow size={24} />
                  <span className="flex flex-col items-start">
                    <span className="text-xs opacity-80">JETZT BEI</span>
                    <span className="font-bold">App Store</span>
                  </span>
                </Button>
                <div className="absolute -top-2 -right-2 bg-[#fa9de3] text-black text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                  Bald
                </div>
              </div>
              
              {/* Google Play Button */}
              <div className="relative group sm:w-1/2">
                <Button 
                  className="bg-gray-800 hover:bg-gray-700 text-white rounded-3xl font-medium px-8 py-6 text-base group-hover:shadow-[0_0_25px_rgba(163,173,244,0.3)] transition-all duration-300 flex items-center gap-4 border border-gray-700 opacity-90 pointer-events-none w-full"
                >
                  <Smartphone size={24} />
                  <span className="flex flex-col items-start">
                    <span className="text-xs opacity-80">JETZT BEI</span>
                    <span className="font-bold">Google Play</span>
                  </span>
                </Button>
                <div className="absolute -top-2 -right-2 bg-[#a3adf4] text-black text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                  Bald
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
