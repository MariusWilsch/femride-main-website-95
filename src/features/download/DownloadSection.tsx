
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { AppWindow, Smartphone } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

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
      className="py-16 bg-gradient-to-b from-white to-gray-50 relative" 
      id="download"
    >
      {/* Subtle background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#fa9de3]/5 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#a3adf4]/5 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with more subtle styling */}
        <div className={`text-center transition-all duration-700 mb-8 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-gray-900">
            {t('downloadSectionTitle')}
          </h2>
          
          {/* Subtle accent line */}
          <div className="w-24 h-0.5 bg-gray-200 mx-auto mb-6"></div>
          
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            {t('downloadSectionSubtitle')}
          </p>
        </div>

        {/* Content with reversed layout */}
        <div className="grid md:grid-cols-2 items-center gap-8 max-w-4xl mx-auto">
          {/* Left side - Text and buttons */}
          <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div>
              <h3 className="text-2xl md:text-3xl font-medium mb-4 text-gray-800">
                {t('downloadSectionMainText')}
              </h3>
              
              <p className="text-base text-gray-600 mb-6">
                {t('downloadSectionDeviceText')}
              </p>

              {/* App Store buttons with more subdued styling */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative">
                  <Button 
                    className="bg-white hover:bg-gray-50 text-gray-800 rounded-xl px-6 py-5 h-auto text-sm border border-gray-200 w-full sm:w-auto flex items-center gap-3 shadow-sm transition-all"
                  >
                    <AppWindow size={20} />
                    <span className="flex flex-col items-start">
                      <span className="text-xs opacity-70">{t('downloadOn')}</span>
                      <span className="font-medium">{t('downloadSectionAppStore')}</span>
                    </span>
                  </Button>
                  <div className="absolute -top-2 -right-2 bg-gray-200 text-gray-800 text-xs font-medium px-2 py-0.5 rounded-full">
                    {t('downloadSectionSoon')}
                  </div>
                </div>
                
                <div className="relative">
                  <Button 
                    className="bg-white hover:bg-gray-50 text-gray-800 rounded-xl px-6 py-5 h-auto text-sm border border-gray-200 w-full sm:w-auto flex items-center gap-3 shadow-sm transition-all"
                  >
                    <Smartphone size={20} />
                    <span className="flex flex-col items-start">
                      <span className="text-xs opacity-70">{t('getItOn')}</span>
                      <span className="font-medium">{t('downloadSectionGooglePlay')}</span>
                    </span>
                  </Button>
                  <div className="absolute -top-2 -right-2 bg-gray-200 text-gray-800 text-xs font-medium px-2 py-0.5 rounded-full">
                    {t('downloadSectionSoon')}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - App logo smaller and more subtle */}
          <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative w-full max-w-xs mx-auto">
              <img 
                src="/lovable-uploads/femrideIconInvisable.png" 
                alt="FemRide App Logo" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
