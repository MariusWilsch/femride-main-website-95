
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

/**
 * Enhanced Hero section component for the landing page
 * With improved background image visibility
 */
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <main className="relative min-h-[90vh] flex items-center">
      {/* Full-width background image with better visibility */}
      <div 
        className="absolute inset-0 -z-10"
        style={{ 
          backgroundImage: "url('/lovable-uploads/36886a85-3305-42f6-b237-b56840c8722b.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%"
        }}
      >
        {/* Darker overlay to improve text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl md:ml-auto md:mr-0 md:text-right text-center">
          {/* Brand tag */}
          <div 
            className={`inline-block bg-white/90 backdrop-blur-sm border border-pink-200 rounded-full px-6 py-2 shadow-md transform transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
          >
            <p className="text-[#fa9de3] font-bold text-lg">{t('heroTagline')}</p>
          </div>
          
          {/* Headline with staggered animation */}
          <h1 
            className={`text-5xl md:text-7xl font-bold text-white mt-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <span className="block relative overflow-hidden">
              <span className="block transform transition-transform duration-1000 delay-100 ease-out" style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(100%)'
              }}>
                {t('heroTitle1')}
              </span>
            </span>
            <span className="block relative overflow-hidden mt-2">
              <span className="block transform transition-transform duration-1000 delay-300 ease-out" style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(100%)'
              }}>
                {t('heroTitle2')}
              </span>
            </span>
          </h1>
          
          {/* Subheadline */}
          <p 
            className={`text-xl md:text-2xl text-white mt-12 max-w-lg md:ml-auto ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 delay-500`}
          >
            {t('heroSubtitle')}
          </p>
          
          {/* Call to action */}
          <div 
            className={`flex flex-col items-center md:items-end mt-10 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <Button 
              className="px-8 py-6 text-lg bg-[#fa9de3] hover:bg-[#e989cc] text-black rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
            >
              <span className="absolute inset-0 w-0 bg-white transition-all duration-500 ease-out group-hover:w-full opacity-20"></span>
              <span className="relative">{t('heroButton')}</span>
            </Button>
            <p className="text-lg text-[#fa9de3] font-medium mt-3 bg-black/70 px-4 py-2 rounded-lg">
              {t('heroComingSoon')}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
