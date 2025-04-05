
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";

/**
 * Services section component showcasing FemRide's main service offerings
 * Enhanced with animations and improved visual design based on Refactoring UI principles
 */
const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-[#fa9de3] font-medium tracking-wide uppercase text-sm mb-3">Our Services</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#222] mb-6">
            Was wir anbieten
          </h2>
          <div className="w-24 h-1 bg-[#fa9de3] mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Entdecken Sie unsere maßgeschneiderten Dienste für Fahrgäste, Fahrerinnen und Flottenpartner
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Passenger Card */}
          <div 
            className={`rounded-xl overflow-hidden bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 flex flex-col h-full transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="bg-[#0E241B] text-white p-2 text-center text-sm font-medium uppercase tracking-wide">
              Für Fahrgäste
            </div>
            <div className="p-8 flex-1">
              <h3 className="text-2xl font-bold mb-4 text-[#0E241B]">Buche deine erste Fahrt</h3>
              <p className="text-gray-600 mb-6">
                Exklusiv für Frauen, mit verifizierten Fahrerinnen, für maximale Sicherheit und Vertrauen.
              </p>
              <Button 
                className="bg-[#fa9de3] hover:bg-[#e989cc] text-black font-medium px-6 w-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1" 
                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              >
                Jetzt buchen
              </Button>
            </div>
            <div className="h-56 overflow-hidden group">
              <img 
                src="/lovable-uploads/577109eb-1080-4502-98b2-23f2f98dc25f.png" 
                alt="Woman checking her phone to book a ride" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Driver Card */}
          <div 
            className={`rounded-xl overflow-hidden bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 flex flex-col h-full transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="bg-[#2C5779] text-white p-2 text-center text-sm font-medium uppercase tracking-wide">
              Für Fahrerinnen
            </div>
            <div className="p-8 flex-1">
              <h3 className="text-2xl font-bold mb-4 text-[#2C5779]">Fahrerin werden</h3>
              <p className="text-gray-600 mb-6">
                Fahre ausschließlich Frauen, verdiene fair und sei Teil von FemRide und unserer Community.
              </p>
              <Button 
                className="bg-[#fa9de3] hover:bg-[#e989cc] text-black font-medium px-6 w-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1" 
                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              >
                Jetzt Fahrerin werden
              </Button>
            </div>
            <div className="h-56 overflow-hidden group">
              <img 
                src="/lovable-uploads/1115ff08-742b-47e1-a06b-be2290d5abb9.png" 
                alt="Woman driving a car" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Fleet Partner Card */}
          <div 
            className={`rounded-xl overflow-hidden bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 flex flex-col h-full transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="bg-[#0E241B] text-white p-2 text-center text-sm font-medium uppercase tracking-wide">
              Für Unternehmen
            </div>
            <div className="p-8 flex-1">
              <h3 className="text-2xl font-bold mb-4 text-[#0E241B]">Flottenpartner werden</h3>
              <p className="text-gray-600 mb-6">
                Maximieren Sie Ihre Flotten Auslastung und profitieren Sie von FemRide's Wachstum und attraktiven Konditionen.
              </p>
              <Button 
                className="bg-[#fa9de3] hover:bg-[#e989cc] text-black font-medium px-6 w-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1" 
                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              >
                Jetzt Flottenpartner werden
              </Button>
            </div>
            <div className="h-56 overflow-hidden group">
              <img 
                src="/lovable-uploads/522eabb7-70e9-4879-a6c3-9d8dcbfb2471.png" 
                alt="Fleet of cars in parking lot" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
