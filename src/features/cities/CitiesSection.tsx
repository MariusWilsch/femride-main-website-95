
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Section highlighting FemRide's mission to improve cities with data-driven insights
 * Redesigned to apply proper design principles and match the aesthetic of other sections
 */
const CitiesSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
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
  
  const slides = [
    {
      title: "Sharing best practices",
      subtitle: "Making cities for people, not cars.",
      description: "We're able to provide insights that help local authorities make their cities more connected and liveable."
    },
    {
      title: "Reducing congestion",
      subtitle: "Smart mobility solutions",
      description: "Our data helps city planners identify high-traffic areas and develop strategies to reduce congestion and pollution."
    },
    {
      title: "Green initiatives",
      subtitle: "Sustainable transportation",
      description: "We're committed to reducing carbon emissions through electric vehicle options and optimized routes for all our services."
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section 
      ref={sectionRef} 
      className="py-24 bg-black text-white relative overflow-hidden"
      id="cities"
    >
      {/* Background decorations */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-white/5 filter blur-[50px] animate-blob"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-white/3 filter blur-[70px] animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Section header with animations */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-[#e989cc] font-medium tracking-wide uppercase text-base relative inline-block mb-3">
            OUR IMPACT
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-[#e989cc]"></span>
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Making cities for people, not cars.
          </h2>
          <div className="w-24 h-1 bg-[#e989cc] mx-auto mb-8"></div>
          <p className="text-white/90 max-w-2xl mx-auto text-lg">
            By sharing our knowledge of the industry and real-time data we're helping 
            to improve our cities.
          </p>
        </div>

        {/* Slide content with animation */}
        <div className={`grid md:grid-cols-2 gap-12 items-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          {/* Left column */}
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            <p className="text-[#e989cc] mb-3">{slides[activeSlide].subtitle}</p>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              {slides[activeSlide].title}
            </h3>
            <div className="w-16 h-1 bg-[#e989cc]/70 mb-6"></div>
          </div>
          
          {/* Right column */}
          <div className="flex flex-col">
            <p className="text-xl mb-8 leading-relaxed text-white/90">
              {slides[activeSlide].description}
            </p>
            <Button className="bg-[#e989cc] hover:bg-[#d678bb] text-black rounded-xl font-medium px-8 py-6 text-base self-start hover:shadow-lg transition-all duration-300 hover:scale-105 relative overflow-hidden group">
              <span className="absolute inset-0 w-0 bg-white transition-all duration-500 ease-out group-hover:w-full opacity-20"></span>
              <span className="relative">Learn more</span>
            </Button>
          </div>
        </div>
        
        {/* Navigation controls with animation */}
        <div className={`flex justify-center items-center gap-6 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <button 
            onClick={prevSlide}
            className="h-12 w-12 rounded-full border border-white/20 bg-transparent hover:bg-[#e989cc]/20 hover:border-[#e989cc]/40 flex items-center justify-center transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <div className="flex items-center gap-3">
            {slides.map((_, index) => (
              <span 
                key={index} 
                className={`h-2.5 w-2.5 rounded-full cursor-pointer transition-all duration-300 ${
                  index === activeSlide 
                    ? 'bg-[#e989cc] scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                onClick={() => setActiveSlide(index)}
                role="button"
                aria-label={`Go to slide ${index + 1}`}
              ></span>
            ))}
          </div>
          
          <button 
            onClick={nextSlide}
            className="h-12 w-12 rounded-full border border-white/20 bg-transparent hover:bg-[#e989cc]/20 hover:border-[#e989cc]/40 flex items-center justify-center transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CitiesSection;
