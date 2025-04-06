import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { AppWindow, Smartphone, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/LanguageContext";

/**
 * Enhanced DownloadSection component with modern design elements
 * and improved visual hierarchy based on Refactoring UI principles
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
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-10 w-64 h-64 bg-[#fa9de3]/10 rounded-full filter blur-[80px] animate-blob"></div>
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#a3adf4]/10 rounded-full filter blur-[100px] animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with animation */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400">
            {t('downloadSectionTitle')}
          </h2>
          <p className="text-lg text-gray-300 inline-block relative">
            {t('downloadSectionSubtitle')}
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#fa9de3] to-[#a3adf4] rounded-full transform scale-x-0 transition-transform duration-700 ease-out" style={{
              transform: isVisible ? 'scaleX(1)' : 'scaleX(0)'
            }}></span>
          </p>
        </div>

        {/* Main content container with app logo - adjusted spacing */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 max-w-6xl mx-auto">
          {/* App logo on the left - adjusted spacing and positioning */}
          <div className={`w-full md:w-5/12 flex justify-center md:justify-end pr-0 md:pr-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="relative w-full max-w-[280px] mx-auto md:ml-auto md:mr-0">
              <img 
                src="/lovable-uploads/femrideIconInvisable.png" 
                alt="FemRide App Logo" 
                className="w-full h-auto drop-shadow-[0_0_30px_rgba(250,157,227,0.3)] transform scale-70"
              />
            </div>
          </div>
          
          {/* App info and buttons on the right - adjusted width for better spacing */}
          <div className={`w-full md:w-7/12 text-left transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="space-y-8">
              <h3 className="text-3xl md:text-5xl font-bold">
                {t('downloadSectionMainText')}
              </h3>

              <p className="text-xl text-gray-300">
                {t('downloadSectionDeviceText')}
              </p>

              {/* App Store buttons with enhanced styling */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <div className="relative group">
                  <Button 
                    className="bg-gray-800 hover:bg-gray-700 text-white rounded-3xl font-medium px-8 py-7 text-base group-hover:shadow-[0_0_25px_rgba(250,157,227,0.3)] transition-all duration-300 flex items-center gap-4 border border-gray-700 opacity-90 pointer-events-none w-full sm:w-auto"
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
                    className="bg-gray-800 hover:bg-gray-700 text-white rounded-3xl font-medium px-8 py-7 text-base group-hover:shadow-[0_0_25px_rgba(163,173,244,0.3)] transition-all duration-300 flex items-center gap-4 border border-gray-700 opacity-90 pointer-events-none w-full sm:w-auto"
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
              
              {/* Optional feature callout */}
              <div className="mt-6 bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-gray-800 flex items-center gap-3">
                <Download size={20} className="text-[#fa9de3]" />
                <p className="text-sm text-gray-300">
                  {t('downloadSectionNotify')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
