
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { Badge } from "@/components/ui/badge";

const DownloadSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

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
      className="py-16 bg-white relative" 
      id="download"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Minimalistic header with small accent line */}
        <div className={`text-center transition-all duration-700 mb-6 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            {t('downloadSectionTitle')}
          </h2>
          
          {/* Smaller gradient accent line */}
          <div className="w-16 h-1 bg-gradient-to-r from-[#fa9de3] to-[#a3adf4] mx-auto mt-3 mb-3"></div>
          
          <p className="text-base text-gray-600 max-w-xl mx-auto">
            Bald im Google Play & App Store verfügbar
          </p>
        </div>

        {/* Content - Using a cleaner layout with more compact sizing */}
        <div className="grid md:grid-cols-2 items-center gap-8 max-w-4xl mx-auto">
          {/* Left side - Text and info */}
          <div className={`space-y-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Die schnelle, kostengünstige Art zu fahren.
              </h3>
              
              <p className="text-base text-gray-600 mb-6">
                Verfügbar für iOS und Android Geräte.
              </p>

              {/* Simplified app store buttons */}
              <div className="flex flex-row gap-4">
                <div className="relative">
                  <div className="border border-gray-200 rounded-2xl px-5 py-3 flex items-center gap-2 bg-white">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#fa9de3]">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="text-xs text-[#fa9de3] font-medium">JETZT BEI</span>
                      <span className="font-semibold">App Store</span>
                    </div>
                  </div>
                  <Badge className="absolute -top-2 -right-2 bg-[#fa9de3] hover:bg-[#fa9de3]">
                    Bald
                  </Badge>
                </div>
                
                <div className="relative">
                  <div className="border border-gray-200 rounded-2xl px-5 py-3 flex items-center gap-2 bg-white">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#a3adf4]">
                        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                        <line x1="12" y1="18" x2="12.01" y2="18"></line>
                      </svg>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="text-xs text-[#a3adf4] font-medium">JETZT BEI</span>
                      <span className="font-semibold">Google Play</span>
                    </div>
                  </div>
                  <Badge className="absolute -top-2 -right-2 bg-[#a3adf4] hover:bg-[#a3adf4]">
                    Bald
                  </Badge>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Much smaller app logo */}
          <div className={`transition-all duration-1000 flex justify-center ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative w-full max-w-[100px]">
              <img 
                src="/lovable-uploads/femrideIconInvisable.png" 
                alt="FemRide App Logo" 
                className="w-full h-auto"
              />
              {/* Very subtle gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#fa9de3]/10 to-[#a3adf4]/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
