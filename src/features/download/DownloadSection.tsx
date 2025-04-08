
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
      className="py-10 bg-white relative" 
      id="download"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Minimalistic header with small accent line */}
        <div className={`text-center transition-all duration-700 mb-4 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
            {t('downloadSectionTitle')}
          </h2>
          
          {/* Smaller gradient accent line */}
          <div className="w-12 h-1 bg-gradient-to-r from-[#fa9de3] to-[#a3adf4] mx-auto mt-2 mb-2"></div>
        </div>

        {/* Content - Only centered app store buttons */}
        <div className={`flex justify-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Simplified app store buttons */}
          <div className="flex flex-row gap-4 max-w-xs mx-auto">
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
    </section>
  );
};

export default DownloadSection;
