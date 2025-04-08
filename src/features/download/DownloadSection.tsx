
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { AppWindow, Smartphone } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

/**
 * Enhanced DownloadSection component with modern design elements
 * Following Refactoring UI principles for a more professional look
 */
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
      className="py-24 bg-black text-white relative overflow-hidden" 
      id="download"
    >
      {/* Background elements - subtle gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#fa9de3]/20 rounded-full filter blur-[80px] animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#a3adf4]/20 rounded-full filter blur-[100px] animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with attractive typography */}
        <div className={`text-center transition-all duration-700 mb-4 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            {t('downloadSectionTitle')}
          </h2>
          
          {/* Colorful underline with gradient */}
          <div className="w-64 h-1 bg-gradient-to-r from-[#fa9de3] to-[#a3adf4] mx-auto mb-4"></div>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t('downloadSectionSubtitle')}
          </p>
        </div>

        {/* Main content container with flex layout */}
        <div className="grid md:grid-cols-2 items-center gap-12 mt-16 max-w-6xl mx-auto">
          {/* Left side - App logo with glow effect */}
          <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative w-full max-w-md mx-auto">
              <img 
                src="/lovable-uploads/femrideIconInvisable.png" 
                alt="FemRide App Logo" 
                className="w-full h-auto drop-shadow-[0_0_30px_rgba(250,157,227,0.4)] animate-pulse"
              />
            </div>
          </div>
          
          {/* Right side - Text and buttons */}
          <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div>
              <h3 className="text-3xl md:text-5xl font-bold mb-4">
                {t('downloadSectionMainText')}
              </h3>
              
              <p className="text-xl text-gray-300 mb-8">
                {t('downloadSectionDeviceText')}
              </p>

              {/* App Store buttons with modern styling */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative group">
                  <Button 
                    className="bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white rounded-full font-medium px-8 py-6 h-auto text-base group-hover:shadow-[0_0_25px_rgba(250,157,227,0.3)] transition-all duration-300 flex items-center gap-4 border border-gray-800 w-full sm:w-auto"
                  >
                    <AppWindow size={24} />
                    <span className="flex flex-col items-start">
                      <span className="text-xs opacity-80">{t('downloadOn')}</span>
                      <span className="font-bold">{t('downloadSectionAppStore')}</span>
                    </span>
                  </Button>
                  <div className="absolute -top-2 -right-2 bg-[#fa9de3] text-black text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    {t('downloadSectionSoon')}
                  </div>
                </div>
                
                <div className="relative group">
                  <Button 
                    className="bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white rounded-full font-medium px-8 py-6 h-auto text-base group-hover:shadow-[0_0_25px_rgba(163,173,244,0.3)] transition-all duration-300 flex items-center gap-4 border border-gray-800 w-full sm:w-auto"
                  >
                    <Smartphone size={24} />
                    <span className="flex flex-col items-start">
                      <span className="text-xs opacity-80">{t('getItOn')}</span>
                      <span className="font-bold">{t('downloadSectionGooglePlay')}</span>
                    </span>
                  </Button>
                  <div className="absolute -top-2 -right-2 bg-[#a3adf4] text-black text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    {t('downloadSectionSoon')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
