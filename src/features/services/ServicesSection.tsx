
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

/**
 * Services section component showcasing FemRide's main service offerings
 * Enhanced with animations and improved visual design based on Refactoring UI principles
 */
const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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

  const serviceCards = [
    {
      id: 1,
      header: t('servicesHeader1'),
      title: t('servicesTitle1'),
      description: t('servicesDesc1'),
      buttonText: t('servicesButton1'),
      color: "#a3adf4", // Using the correct blue color
      imageSrc: "/lovable-uploads/97a44fdb-e7a6-4917-9b66-1a40f373e0a7.png",
      imageAlt: "Women in car with pink hair",
    },
    {
      id: 2,
      header: t('servicesHeader2'),
      title: t('servicesTitle2'),
      description: t('servicesDesc2'),
      buttonText: t('servicesButton2'),
      color: "#a3adf4", // Using the correct blue color
      imageSrc: "/lovable-uploads/6cb77555-69e9-4c53-8c49-17d4a2798133.png",
      imageAlt: "Women in car enjoying a ride",
    },
    {
      id: 3,
      header: t('servicesHeader3'),
      title: t('servicesTitle3'),
      description: t('servicesDesc3'),
      buttonText: t('servicesButton3'),
      color: "#a3adf4", // Using the correct blue color
      imageSrc: "/lovable-uploads/f56c6c65-2478-46a3-8ee7-3d8fcbea2312.png",
      imageAlt: "Women smiling in car with passengers",
    },
  ];

  return (
    <section 
      ref={sectionRef} 
      className="pt-20 pb-32 overflow-hidden relative"
      id="services"
    >
      {/* Background gradient that starts with the hero section's ending shade */}
      <div className="absolute -z-10 inset-0 bg-gradient-to-b from-white via-[#fa9de3]/10 to-[#a3adf4]/20 filter blur-[80px]"></div>
      
      {/* Repositioned blob animations to match the vertical gradient flow */}
      <div className="absolute top-10 left-5 md:left-20 w-20 h-20 rounded-full bg-[#fa9de3]/20 filter blur-lg animate-blob"></div>
      <div className="absolute bottom-20 right-5 md:right-20 w-32 h-32 rounded-full bg-[#a3adf4]/20 filter blur-lg animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4">
        {/* Section header with animations */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-[#fa9de3] font-medium tracking-wide uppercase text-base relative inline-block mb-3">
            OUR SERVICES
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-[#fa9de3]"></span>
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-[#222] mb-8">
            {t('servicesTitle')}
          </h2>
          <div className="w-24 h-1 bg-[#fa9de3] mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {t('servicesSubtitle')}
          </p>
        </div>
        
        {/* Service cards with enhanced animations - completely covered by images with text overlay */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceCards.map((card, index) => (
            <div 
              key={card.id}
              className={`rounded-xl overflow-hidden bg-white shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 h-full transform ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}
              style={{ 
                transitionDelay: `${200 * (index + 1)}ms`,
                transform: hoveredCard === card.id ? 'translateY(-10px)' : 'translateY(0)',
              }}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card content as a relative container with image covering everything */}
              <div className="relative h-full w-full">
                {/* Background image covering the entire card */}
                <div className="absolute inset-0 w-full h-full">
                  <img 
                    src={card.imageSrc} 
                    alt={card.imageAlt} 
                    className="w-full h-full object-cover"
                  />
                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
                </div>

                {/* Header banner at top */}
                <div 
                  className="p-3 text-center text-sm font-bold uppercase tracking-wider text-white relative"
                  style={{ backgroundColor: card.color }}
                >
                  {card.header}
                </div>

                {/* Text content overlay - increased height from 400px to 450px */}
                <div className="relative z-10 p-8 flex flex-col h-[500px]">
                  <h3 className="text-2xl font-bold mb-4 text-white">{card.title}</h3>
                  <p className="text-white/90 mb-6 flex-grow">
                    {card.description}
                  </p>
                  
                  {/* Button pushed to the bottom and made smaller */}
                  <div className="mt-auto">
                    <Button 
                      className="bg-[#fa9de3] hover:bg-[#e989cc] text-black font-semibold text-sm px-5 py-4 h-auto w-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group" 
                      onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                    >
                      <span className="flex items-center justify-center w-full">
                        <span className="tracking-wide font-bold">{card.buttonText}</span>
                        <ChevronRight className="ml-1 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
