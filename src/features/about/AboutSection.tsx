
import React, { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { User, Shield, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";

/**
 * Enhanced About section highlighting FemRide as a European mobility platform for women
 * With improved aesthetics, animations, and design elements
 * Updated to use blue as primary color with "ABOUT US" in pink
 */
const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();
  const isMobile = useIsMobile();

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

  // Testimonial cards data
  const testimonialCards = [
    {
      id: 1,
      icon: <User size={28} color="#a3adf4" />,
      title: t('aboutTestimonial1Title'),
      stats: "80%",
      description: t('aboutTestimonial1Desc')
    },
    {
      id: 2,
      icon: <Shield size={28} color="#a3adf4" />,
      title: t('aboutTestimonial2Title'),
      stats: "75%",
      description: t('aboutTestimonial2Desc')
    },
    {
      id: 3,
      icon: <Sparkles size={28} color="#a3adf4" />,
      title: t('aboutTestimonial3Title'),
      stats: "83%",
      description: t('aboutTestimonial3Desc')
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="py-20 relative overflow-hidden"
      id="about"
    >
      {/* Background changed to blue */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#a3adf4]/80 via-[#a3adf4] to-[#a3adf4]/90 -z-10"></div>
      
      {/* Decorative blobs with updated colors */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-white/10 filter blur-[50px] animate-blob"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-white/5 filter blur-[70px] animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Section header with animations - "ABOUT US" in pink */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-black font-medium tracking-wide uppercase text-base relative inline-block mb-3">
            {t('sectionAboutUs')}
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-[#fa9de3]"></span>
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-8">
            {t('aboutMainTitle')}
          </h2>
          <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
          <p className="text-black/80 max-w-2xl mx-auto text-lg">
            {t('aboutMainDesc')}
          </p>
        </div>

        {/* Testimonial cards with staggered animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {testimonialCards.map((card, index) => (
            <div 
              key={card.id}
              className={`bg-white/10 backdrop-blur-sm rounded-3xl border border-white/30 overflow-hidden shadow-xl transition-all duration-700 transform ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              } hover:bg-white/20 hover:shadow-2xl hover:-translate-y-1`}
              style={{ transitionDelay: `${200 * (index + 1)}ms` }}
            >
              <div className="p-6 flex flex-col h-full">
                {/* Icon background changed to white */}
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                
                {/* Card title - changed to black */}
                <h3 className="text-2xl font-bold mb-4 text-black text-center">{card.title}</h3>
                
                {/* Statistics highlight - changed to black */}
                <div className="mb-6 text-center">
                  <div className="text-5xl font-bold text-black">{card.stats}</div>
                </div>
                
                {/* Card description - changed to darker color */}
                <p className="text-black/80 text-center">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA button with pink background color and more rounded corners */}
        <div className={`flex justify-center transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button 
            className={`px-8 py-6 ${isMobile ? 'text-sm' : 'text-lg'} bg-[#fa9de3] hover:bg-[#e989cc] text-black rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group`}
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            <span className="absolute inset-0 w-0 bg-white transition-all duration-500 ease-out group-hover:w-full opacity-20 rounded-3xl"></span>
            <span className="relative">{t('aboutCtaButton')}</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
