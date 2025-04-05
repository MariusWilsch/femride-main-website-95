
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Section highlighting FemRide's mission to improve cities with data-driven insights
 * Redesigned to match the provided design mockup
 */
const CitiesSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
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
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main heading */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center max-w-5xl mx-auto mb-8">
          Making cities for people, not cars.
        </h2>
        
        {/* Subheading */}
        <p className="text-lg text-center max-w-3xl mx-auto mb-20">
          By sharing our knowledge of the industry and real-time data we're helping 
          to improve our cities.
        </p>

        {/* Slide content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left column */}
          <div>
            <p className="text-gray-400 mb-2">{slides[activeSlide].subtitle}</p>
            <h3 className="text-3xl md:text-5xl font-bold">
              {slides[activeSlide].title}
            </h3>
          </div>
          
          {/* Right column */}
          <div>
            <p className="text-xl mb-6">
              {slides[activeSlide].description}
            </p>
            <Button className="bg-[#e989cc] hover:bg-[#d678bb] text-black rounded-md font-medium px-8 py-4 text-base">
              Learn more
            </Button>
          </div>
        </div>
        
        {/* Navigation controls */}
        <div className="flex justify-center items-center gap-6">
          <button 
            onClick={prevSlide}
            className="h-12 w-12 rounded-full border border-white/20 bg-transparent hover:bg-white/10 flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <div className="flex items-center gap-3">
            {slides.map((_, index) => (
              <span 
                key={index} 
                className={`h-2 w-2 rounded-full ${index === activeSlide ? 'bg-[#e989cc]' : 'bg-white/30'}`}
                onClick={() => setActiveSlide(index)}
                role="button"
                aria-label={`Go to slide ${index + 1}`}
              ></span>
            ))}
          </div>
          
          <button 
            onClick={nextSlide}
            className="h-12 w-12 rounded-full border border-white/20 bg-transparent hover:bg-white/10 flex items-center justify-center transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CitiesSection;
