
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";

/**
 * LatestFeaturesSection component highlighting driver and fleet partner opportunities
 * Enhanced with animations and scroll-triggered effects
 */
const LatestFeaturesSection = () => {
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
    <section ref={sectionRef} className="py-20 bg-[#a3adf4] text-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl transform -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#fa9de3]/10 rounded-full filter blur-3xl transform translate-y-1/2 -translate-x-1/3" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">Join FemRide</h2>
          <p className="text-lg text-black/90 max-w-3xl mx-auto mb-8">
            Werde ein Teil der FemRide Bewegung
          </p>
          <p className="text-xl text-black/90 max-w-3xl mx-auto">
            Für Sichere Mobilität, mehr Chancen, eine gerechtere Zukunft!
          </p>
        </div>
        
        <div 
          className={`mb-16 text-center transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="bg-black rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.01] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
            <h3 className="text-white text-2xl font-bold pt-8 px-6">Book a ride in advance</h3>
            <p className="text-white/80 px-6 py-4 max-w-3xl mx-auto">
              Planning a trip? Schedule a ride in advance for even more convenient airport 
              transfers, important meetings, or any occasion that requires punctuality. Simply 
              enter your details and secure your ride up to 90 days ahead.
            </p>
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
              <img 
                src="/lovable-uploads/a7d735bf-4c68-4fc9-8947-390ccc1051ee.png"
                alt="Woman booking a ride in advance on laptop"
                className="w-full max-h-[500px] object-cover transform transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
        
        {/* Two columns section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          {/* For Drivers */}
          <div 
            className={`bg-white/10 backdrop-blur-sm p-8 rounded-xl text-left shadow-lg border border-white/20 transition-all duration-700 delay-400 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            } hover:shadow-xl hover:bg-white/20`}
          >
            <h3 className="text-2xl font-bold mb-4">For female drivers</h3>
            <p className="text-lg mb-6">
              Werde Fahrerin und schließe dich einer FemRide-Flotte in Deutschland an!
              Auf der Suche nach einer Fahrerin-Position in Deutschland? Werde Teil eines Flottenunternehmens, 
              das mit FemRide kooperiert, und fahre für eine Plattform, die Sicherheit, Chancengleichheit und 
              faire Verdienstmöglichkeiten in den Mittelpunkt stellt. Nutze deine Chance auf einen flexiblen, 
              sicheren Job mit attraktiven Einkommensperspektiven!
            </p>
            <Button 
              className="bg-[#fa9de3] hover:bg-[#e989cc] text-black font-medium px-6 py-4 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] group"
              onClick={() => {
                const contactSection = document.getElementById('contact-section');
                if (contactSection) contactSection.scrollIntoView({behavior: 'smooth'});
              }}
            >
              <span className="relative z-10">Jetzt als Fahrerin anmelden!</span>
              <span className="absolute inset-0 w-0 bg-white transition-all duration-500 ease-out group-hover:w-full opacity-20 rounded-md"></span>
            </Button>
          </div>
          
          {/* For Fleet Partners */}
          <div 
            className={`bg-white/10 backdrop-blur-sm p-8 rounded-xl text-left shadow-lg border border-white/20 transition-all duration-700 delay-600 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            } hover:shadow-xl hover:bg-white/20`}
          >
            <h3 className="text-2xl font-bold mb-4">For fleet operators</h3>
            <p className="text-lg mb-6">
              Werde Flottenpartner von FemRide in Deutschland!
              Besitzt du ein Flottenunternehmen und suchst nach neuen, lukrativen Einsatzmöglichkeiten? 
              Kooperiere mit FemRide und werde Teil einer Plattform, die gesellschaftlichen Impact und 
              nachhaltige Mobilität in den Mittelpunkt stellt. Nutze dein Potenzial und steigere deine 
              Flottenauslastung mit FemRide!
            </p>
            <Button 
              className="bg-[#fa9de3] hover:bg-[#e989cc] text-black font-medium px-6 py-4 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] group"
              onClick={() => {
                const contactSection = document.getElementById('contact-section');
                if (contactSection) contactSection.scrollIntoView({behavior: 'smooth'});
              }}
            >
              <span className="relative z-10">Jetzt als Flottenpartner registrieren!</span>
              <span className="absolute inset-0 w-0 bg-white transition-all duration-500 ease-out group-hover:w-full opacity-20 rounded-md"></span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestFeaturesSection;
