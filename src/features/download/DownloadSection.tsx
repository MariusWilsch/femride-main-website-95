
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
      className="py-20 bg-white relative overflow-hidden" 
      id="download"
    >
      {/* Subtle background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#fa9de3]/5 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#a3adf4]/5 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with accent underline */}
        <div className={`text-center transition-all duration-700 mb-12 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight text-gray-900">
            {t('downloadSectionTitle')}
          </h2>
          
          {/* Gradient accent line */}
          <div className="w-24 h-1 bg-gradient-to-r from-[#fa9de3] to-[#a3adf4] mx-auto mb-6"></div>
          
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Bald im Google Play & App Store verfügbar
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 items-center gap-12 max-w-5xl mx-auto">
          {/* Left side - Text and info */}
          <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
                Die schnelle, kostengünstige Art zu fahren.
              </h3>
              
              <p className="text-lg text-gray-600 mb-8">
                Verfügbar für iOS und Android Geräte.
              </p>

              {/* App Store buttons with more color */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative group">
                  <Button 
                    className="bg-white hover:bg-gray-50 text-gray-800 rounded-xl px-8 py-5 h-auto border border-gray-200 w-full sm:w-auto flex items-center gap-3 shadow-sm transition-all group-hover:shadow-md"
                  >
                    <AppWindow size={24} className="text-[#fa9de3]" />
                    <span className="flex flex-col items-start">
                      <span className="text-xs text-[#a3adf4] font-medium">JETZT BEI</span>
                      <span className="font-bold">App Store</span>
                    </span>
                  </Button>
                  <div className="absolute -top-2 -right-2 bg-[#fa9de3] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    Bald
                  </div>
                </div>
                
                <div className="relative group">
                  <Button 
                    className="bg-white hover:bg-gray-50 text-gray-800 rounded-xl px-8 py-5 h-auto border border-gray-200 w-full sm:w-auto flex items-center gap-3 shadow-sm transition-all group-hover:shadow-md"
                  >
                    <Smartphone size={24} className="text-[#a3adf4]" />
                    <span className="flex flex-col items-start">
                      <span className="text-xs text-[#fa9de3] font-medium">JETZT BEI</span>
                      <span className="font-bold">Google Play</span>
                    </span>
                  </Button>
                  <div className="absolute -top-2 -right-2 bg-[#a3adf4] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    Bald
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - App logo smaller and with gradient */}
          <div className={`transition-all duration-1000 transform flex justify-center ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative w-full max-w-[180px]">
              <img 
                src="/lovable-uploads/femrideIconInvisable.png" 
                alt="FemRide App Logo" 
                className="w-full h-auto"
              />
              {/* Gradient overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#fa9de3]/20 to-[#a3adf4]/20 rounded-full blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
