
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { motion } from "framer-motion";

/**
 * Enhanced Founder section showcasing the company founder
 * With improved aesthetics and animations to match other sections
 */
const FounderSection = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <section 
      ref={sectionRef} 
      className="py-20 relative overflow-hidden bg-[#f9f9fa]"
      id="founder"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#f9f9fa] -z-10"></div>
      
      {/* Decorative blobs */}
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-[#a3adf4]/5 filter blur-[60px] animate-blob"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-[#fa9de3]/5 filter blur-[70px] animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-[#a3adf4] font-medium tracking-wide uppercase text-base relative inline-block mb-3">
            {t('sectionOurVision')}
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-[#a3adf4]"></span>
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#222] mb-8">
            {t('sectionMeetFounder')}
          </h2>
          <div className="w-24 h-1 bg-[#a3adf4] mx-auto mb-8"></div>
        </div>

        <div className={`flex flex-col md:flex-row items-center gap-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Founder Image with enhanced styling - changed from pink to blue */}
          <div className="md:w-1/3 flex flex-col items-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[#a3adf4] transform -rotate-6 scale-105 z-0"></div>
              <div className="rounded-full overflow-hidden h-60 w-60 border-4 border-white shadow-xl relative z-10">
                <img 
                  src="/lovable-uploads/3d3a2394-f0be-402f-9dc5-36702fa45848.png" 
                  alt="Aykut Atli" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-xl font-bold text-[#222]">{t('founderTitle')}</p>
              <p className="text-lg text-gray-700 font-medium">Aykut Atli</p>
            </div>
          </div>
          
          {/* Founder Description with enhanced styling */}
          <div className="md:w-2/3">
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl border border-[#a3adf4]/20 shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <p className="text-lg mb-6 leading-relaxed text-gray-700">
                {t('founderText1')}
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                {t('founderText2')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
