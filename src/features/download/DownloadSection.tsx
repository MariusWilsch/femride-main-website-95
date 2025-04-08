
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { Badge } from "@/components/ui/badge";
import { Bell } from "lucide-react";

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
        {/* Enhanced header with larger title */}
        <div className={`text-center transition-all duration-700 mb-8 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
            {t('downloadSectionTitle')}
          </h2>
          
          {/* Larger gradient accent line */}
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#fa9de3] to-[#a3adf4] mx-auto mt-3 mb-6"></div>
          
          {/* More prominent Coming Soon Announcement */}
          <div className="bg-gray-50 rounded-xl py-4 px-6 max-w-md mx-auto mb-8 shadow-sm">
            <div className="flex items-center justify-center">
              <Bell size={20} className="text-[#fa9de3] mr-3" />
              <p className="text-lg font-medium text-gray-700">{t('downloadSectionSoon')}</p>
            </div>
            <p className="mt-2 text-gray-600">{t('downloadSectionNotify')}</p>
          </div>
        </div>

        {/* Enlarged app store buttons with clearer "coming soon" badges */}
        <div className={`flex justify-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-row gap-6 max-w-lg mx-auto">
            <div className="relative">
              <div className="border border-gray-200 rounded-2xl px-6 py-5 flex items-center gap-3 bg-white shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#fa9de3]">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-sm text-[#fa9de3] font-medium">{t('downloadOn')}</span>
                  <span className="font-semibold text-lg">App Store</span>
                </div>
              </div>
              <Badge className="absolute -top-3 -right-3 bg-[#fa9de3] hover:bg-[#fa9de3] font-bold text-black text-sm px-4 py-1">
                {t('downloadSectionSoon')}
              </Badge>
            </div>
            
            <div className="relative">
              <div className="border border-gray-200 rounded-2xl px-6 py-5 flex items-center gap-3 bg-white shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#a3adf4]">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                    <line x1="12" y1="18" x2="12.01" y2="18"></line>
                  </svg>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-sm text-[#a3adf4] font-medium">{t('getItOn')}</span>
                  <span className="font-semibold text-lg">Google Play</span>
                </div>
              </div>
              <Badge className="absolute -top-3 -right-3 bg-[#a3adf4] hover:bg-[#a3adf4] font-bold text-black text-sm px-4 py-1">
                {t('downloadSectionSoon')}
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
