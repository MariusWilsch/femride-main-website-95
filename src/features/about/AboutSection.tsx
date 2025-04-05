
import React, { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { User, Shield, Sparkles } from "lucide-react";

/**
 * Enhanced About section highlighting FemRide as a European mobility platform for women
 * With improved aesthetics, animations, and design elements
 */
const AboutSection = () => {
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

  // Testimonial cards data
  const testimonialCards = [
    {
      id: 1,
      icon: <User size={28} />,
      title: '„Endlich eine sichere Alternative!"',
      stats: "80%",
      description: "der Frauen fühlen sich mit einer Ride-Hailing-Plattform, exklusiv für Frauen sicherer. FemRide schafft Vertrauen durch geprüfte Fahrerinnen und Schutzmaßnahmen für Frauen und Fahrerinnen."
    },
    {
      id: 2,
      icon: <Shield size={28} />,
      title: '„Keine Angst mehr vor Übergriffen."',
      stats: "75%",
      description: "der befragten Frauen wollen FemRide nutzen, um sich vor Belästigung und Diskriminierung zu schützen. Unsere Fahrten sind exklusiv von Frauen für Frauen."
    },
    {
      id: 3,
      icon: <Sparkles size={28} />,
      title: '„Genau das hat gefehlt!"',
      stats: "83%",
      description: "der Frauen sind überzeugt, dass FemRide eine nachhaltige Lösung für mehr Sicherheit im Ride-Hailing bietet. Eine Plattform, die Frauen mehr Freiheit und Unabhängigkeit denn je ermöglicht."
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="py-20 relative overflow-hidden"
      id="about"
    >
      {/* Gradient background with decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fa9de3]/80 via-[#fa9de3] to-[#fa9de3]/90 -z-10"></div>
      
      {/* Decorative blobs */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-white/10 filter blur-[50px] animate-blob"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-white/5 filter blur-[70px] animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Section header with animations */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block bg-white/20 backdrop-blur-sm py-2 px-6 rounded-full mb-4 transform transition-all duration-500 hover:bg-white/30">
            <p className="text-black font-medium">About us</p>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold max-w-5xl mx-auto mb-8 text-black relative">
            <span className="relative inline-block overflow-hidden">
              <span className="block transform transition-transform duration-1000 delay-100" 
                style={{
                  transform: isVisible ? 'translateY(0)' : 'translateY(100%)'
                }}>
                Was sagen die Frauen zu FemRide?
              </span>
            </span>
          </h2>
          
          <div className={`max-w-4xl mx-auto bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <p className="text-lg text-black">
              FemRide macht den Unterschied! – Eine Umfrage mit über 100 Teilnehmer:innen, davon 90 % Frauen, zeigt: 
              Sichere Mobilität ist ein dringendes Bedürfnis. Ihre Antworten geben wertvolle Einblicke in die aktuellen 
              Herausforderungen und bestätigen die Notwendigkeit einer Ride-Hailing-Plattform, exklusiv für Frauen.
            </p>
          </div>
        </div>

        {/* Testimonial cards with staggered animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {testimonialCards.map((card, index) => (
            <div 
              key={card.id}
              className={`bg-white/10 backdrop-blur-sm rounded-2xl border border-white/30 overflow-hidden shadow-xl transition-all duration-700 transform ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              } hover:bg-white/20 hover:shadow-2xl hover:-translate-y-1`}
              style={{ transitionDelay: `${200 * (index + 1)}ms` }}
            >
              <div className="p-6 flex flex-col h-full">
                {/* Card icon in circle */}
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                
                {/* Card title */}
                <h3 className="text-2xl font-bold mb-4 text-black text-center">{card.title}</h3>
                
                {/* Statistics highlight - No underline, equal height */}
                <div className="mb-6 text-center">
                  <div className="text-5xl font-bold text-black">{card.stats}</div>
                </div>
                
                {/* Card description */}
                <p className="text-black/90 text-center">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA button with animation - Updated to match hero and services buttons */}
        <div className={`flex justify-center transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button 
            className="px-8 py-6 text-lg bg-[#a3adf4] hover:bg-[#8a93d6] text-black rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            <span className="absolute inset-0 w-0 bg-white transition-all duration-500 ease-out group-hover:w-full opacity-20"></span>
            <span className="relative">Jetzt registrieren und Teil der Bewegung werden</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
