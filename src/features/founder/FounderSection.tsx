
import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';

/**
 * Founder section showcasing the company founder
 */
const FounderSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Founder Image */}
          <div className="md:w-1/3 flex flex-col items-center">
            <div className="rounded-full overflow-hidden h-48 w-48 mb-4 border-4 border-[#fa9de3] shadow-lg">
              <img 
                src="/lovable-uploads/3d3a2394-f0be-402f-9dc5-36702fa45848.png" 
                alt="Aykut Atli" 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xl font-bold">{t('founderTitle')}</p>
            <p className="text-lg">Aykut Atli</p>
          </div>
          
          {/* Founder Description */}
          <div className="md:w-2/3">
            <p className="text-lg mb-6">
              {t('founderText1')}
            </p>
            <p className="text-lg">
              {t('founderText2')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
