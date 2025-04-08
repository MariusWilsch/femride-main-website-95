
import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { Button } from '@/components/ui/button';

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
        <div className="max-w-2xl mx-auto"> {/* Increased from max-w-lg to max-w-2xl for a wider content area */}
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-wide"> {/* Increased font size and added tracking-wide */}
            <span className="block">{t('heroTitle1')}</span>
            <span className="block">{t('heroTitle2')}</span>
          </h1>
          
          <p className="text-xl text-white/90 mt-6 mb-8">
            {t('heroSubtitle')}
          </p>
          
          <div className="flex flex-col items-center space-y-4">
            <Button 
              className="px-8 py-6 text-lg bg-[#fa9de3] hover:bg-[#e989cc] text-black rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {t('heroButton')}
            </Button>
            
            <p className="text-lg text-[#fa9de3] font-medium bg-black/50 px-4 py-2 rounded-3xl">
              {t('heroComingSoon')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
