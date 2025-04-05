
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import { ChevronRight } from "lucide-react";

/**
 * Services section component showcasing FemRide's main service offerings
 * Enhanced with animations and improved visual design based on Refactoring UI principles
 */
const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

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
      header: "FÜR FAHRGÄSTE",
      title: "Buche deine erste Fahrt",
      description:
        "Exklusiv für Frauen, mit verifizierten Fahrerinnen, für maximale Sicherheit und Vertrauen.",
      buttonText: "Jetzt buchen",
      color: "#a3adf4", // Using the correct blue color
      imageSrc: "/lovable-uploads/577109eb-1080-4502-98b2-23f2f98dc25f.png",
      imageAlt: "Woman checking her phone to book a ride",
    },
    {
      id: 2,
      header: "FÜR FAHRERINNEN",
      title: "Fahrerin werden",
      description:
        "Fahre ausschließlich Frauen, verdiene fair und sei Teil von FemRide und unserer Community.",
      buttonText: "Jetzt Fahrerin werden",
      color: "#a3adf4", // Using the correct blue color
      imageSrc: "/lovable-uploads/1115ff08-742b-47e1-a06b-be2290d5abb9.png",
      imageAlt: "Woman driving a car",
    },
    {
      id: 3,
      header: "FÜR UNTERNEHMEN",
      title: "Flottenpartner werden",
      description:
        "Maximieren Sie Ihre Flotten Auslastung und profitieren Sie von FemRide's Wachstum und attraktiven Konditionen.",
      buttonText: "Jetzt Flottenpartner werden",
      color: "#a3adf4", // Using the correct blue color
      imageSrc: "/lovable-uploads/522eabb7-70e9-4879-a6c3-9d8dcbfb2471.png",
      imageAlt: "Fleet of cars in parking lot",
    },
  ];

  return (
    <section 
      ref={sectionRef} 
      className="pt-20 pb-32 overflow-hidden relative"
      id="services"
    >
      {/* Background gradient flowing from whitish to bluish */}
      <div className="absolute -z-10 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[70%] rounded-full bg-gradient-to-r from-[#fa9de3]/20 to-[#a3adf4]/20 filter blur-[80px]"></div>
      
      {/* Repositioned blob animations to match the gradient flow */}
      <div className="absolute bottom-10 left-5 md:left-20 w-20 h-20 rounded-full bg-[#fa9de3]/20 filter blur-lg animate-blob"></div>
      <div className="absolute top-20 right-5 md:right-20 w-32 h-32 rounded-full bg-[#a3adf4]/20 filter blur-lg animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4">
        {/* Section header with animations */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-[#fa9de3] font-medium tracking-wide uppercase text-base relative inline-block mb-3">
            OUR SERVICES
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-[#fa9de3]"></span>
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-[#222] mb-8">
            Was wir anbieten
          </h2>
          <div className="w-24 h-1 bg-[#fa9de3] mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Entdecken Sie unsere maßgeschneiderten Dienste für Fahrgäste, Fahrerinnen und Flottenpartner
          </p>
        </div>
        
        {/* Service cards with enhanced animations and equal height */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceCards.map((card, index) => (
            <div 
              key={card.id}
              className={`rounded-xl overflow-hidden bg-white shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col h-full transform ${
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
              {/* Card header */}
              <div 
                className="p-3 text-center text-sm font-bold uppercase tracking-wider text-white"
                style={{ backgroundColor: card.color }}
              >
                {card.header}
              </div>

              {/* Card content with flex-grow to push button to bottom */}
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-4" style={{ color: card.color }}>{card.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  {card.description}
                </p>
                <Button 
                  className="bg-[#fa9de3] hover:bg-[#e989cc] text-black font-semibold text-base px-6 py-6 h-auto w-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group mt-auto" 
                  onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                >
                  <span className="flex items-center justify-center w-full">
                    <span className="tracking-wide font-bold">{card.buttonText}</span>
                    <ChevronRight className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </span>
                </Button>
              </div>

              {/* Card image */}
              <div className="h-60 overflow-hidden">
                <div className="relative w-full h-full overflow-hidden group">
                  <img 
                    src={card.imageSrc} 
                    alt={card.imageAlt} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Image overlay that appears on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
