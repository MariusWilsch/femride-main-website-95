import React, { useState, useRef, useEffect } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/lib/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";

/**
 * FAQ section with categories for different user types
 * Modified to ensure consistent text alignment for answers (left-aligned)
 */
const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState("passengers");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  // Categories for the toggle group
  const categories = [
    { id: "passengers", label: t('faqCategoryPassengers') },
    { id: "drivers", label: t('faqCategoryDrivers') },
    { id: "fleet", label: t('faqCategoryFleet') },
  ];

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

  // Custom accordion styles that match the image
  const accordionItemClass = "border-0 border-b border-gray-200";
  const accordionTriggerClass = `py-6 ${isMobile ? 'text-base' : 'text-lg'} font-medium flex items-center justify-between hover:no-underline`;
  const accordionContentClass = "pb-6 text-gray-600";
  
  // Updated style for all FAQ answers content - left aligned
  const answerContentClass = "px-4 text-left mx-auto max-w-3xl";

  return (
    <section 
      ref={sectionRef} 
      id="faq" 
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Section title with simple animation */}
        <div className={`mb-8 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl lg:text-6xl'} font-bold text-[#222] mb-4`}>
            {t('faqMainTitle')}
          </h2>
        </div>
        
        <div className={`transition-all duration-700 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Category title */}
          {activeCategory === "passengers" && (
            <h3 className={`text-center ${isMobile ? 'text-xl' : 'text-2xl'} font-bold mb-6`}>{t('faqTitlePassengers')}</h3>
          )}
          
          {activeCategory === "drivers" && (
            <h3 className={`text-center ${isMobile ? 'text-xl' : 'text-2xl'} font-bold mb-6`}>{t('faqTitleDrivers')}</h3>
          )}
          
          {activeCategory === "fleet" && (
            <h3 className={`text-center ${isMobile ? 'text-xl' : 'text-2xl'} font-bold mb-6`}>{t('faqTitleFleet')}</h3>
          )}
          
          {/* Category navigation - styled for mobile */}
          <div className={`flex justify-center mb-10 transition-all duration-700 delay-150 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <ToggleGroup
              type="single"
              value={activeCategory}
              onValueChange={(value) => {
                if (value) setActiveCategory(value);
              }}
              className={`bg-gray-100 p-1 rounded-full ${isMobile ? 'w-full flex' : ''}`}
            >
              {categories.map((category) => (
                <ToggleGroupItem 
                  key={category.id} 
                  value={category.id}
                  aria-label={`Show FAQs for ${category.label}`}
                  className={`${isMobile ? 'flex-1 text-xs px-2' : 'px-6'} py-2 rounded-full transition-all duration-300 ${
                    activeCategory === category.id 
                      ? 'bg-[#fa9de3] text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {category.label}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>
          
          {/* Passengers FAQs */}
          <div className={`mb-16 transition-all duration-300 ease-in-out ${activeCategory === "passengers" ? "block" : "hidden"}`}>
            <Accordion 
              type="single" 
              collapsible 
              className="w-full"
            >
              <AccordionItem value="passengers-1" className={accordionItemClass}>
                <AccordionTrigger className={accordionTriggerClass}>
                  {t('faqPassengerQ1')}
                </AccordionTrigger>
                <AccordionContent className={accordionContentClass}>
                  <div className={answerContentClass}>
                    {t('faqPassengerA1')}
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="passengers-2" className={accordionItemClass}>
                <AccordionTrigger className={accordionTriggerClass}>
                  {t('faqPassengerQ2')}
                </AccordionTrigger>
                <AccordionContent className={accordionContentClass}>
                  <div className={answerContentClass}>
                    {t('faqPassengerA2')}
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="passengers-3" className={accordionItemClass}>
                <AccordionTrigger className={accordionTriggerClass}>
                  {t('faqPassengerQ3')}
                </AccordionTrigger>
                <AccordionContent className={accordionContentClass}>
                  <div className={answerContentClass}>
                    {t('faqPassengerA3')}
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="passengers-4" className={accordionItemClass}>
                <AccordionTrigger className={accordionTriggerClass}>
                  {t('faqPassengerQ4')}
                </AccordionTrigger>
                <AccordionContent className={accordionContentClass}>
                  <div className={answerContentClass}>
                    {t('faqPassengerA4')}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          {/* Drivers FAQs */}
          <div className={`mb-16 transition-all duration-300 ease-in-out ${activeCategory === "drivers" ? "block" : "hidden"}`}>
            <Accordion 
              type="single" 
              collapsible 
              className="w-full"
            >
              <AccordionItem value="drivers-1" className={accordionItemClass}>
                <AccordionTrigger className={accordionTriggerClass}>
                  {t('faqDriverQ1')}
                </AccordionTrigger>
                <AccordionContent className={accordionContentClass}>
                  <div className={answerContentClass}>
                    {t('faqDriverA1')}
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="drivers-2" className={accordionItemClass}>
                <AccordionTrigger className={accordionTriggerClass}>
                  {t('faqDriverQ2')}
                </AccordionTrigger>
                <AccordionContent className={accordionContentClass}>
                  <div className={answerContentClass}>
                    <p className="mb-4 text-left">{t('faqDriverA2Part1')}</p>
                    <ul className="list-none inline-block mr-auto text-left space-y-2">
                      <li className="flex items-start">
                        <span className="text-[#fa9de3] mr-2">•</span>
                        <span>{t('faqDriverA2Item1')}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#fa9de3] mr-2">•</span>
                        <span>{t('faqDriverA2Item2')}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#fa9de3] mr-2">•</span>
                        <span>{t('faqDriverA2Item3')}</span>
                      </li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="drivers-3" className={accordionItemClass}>
                <AccordionTrigger className={accordionTriggerClass}>
                  {t('faqDriverQ3')}
                </AccordionTrigger>
                <AccordionContent className={accordionContentClass}>
                  <div className={answerContentClass}>
                    {t('faqDriverA3')}
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="drivers-4" className={accordionItemClass}>
                <AccordionTrigger className={accordionTriggerClass}>
                  {t('faqDriverQ4')}
                </AccordionTrigger>
                <AccordionContent className={accordionContentClass}>
                  <div className={answerContentClass}>
                    {t('faqDriverA4')}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          {/* Fleet Partners FAQs */}
          <div className={`mb-16 transition-all duration-300 ease-in-out ${activeCategory === "fleet" ? "block" : "hidden"}`}>
            <Accordion 
              type="single" 
              collapsible 
              className="w-full"
            >
              <AccordionItem value="fleet-1" className={accordionItemClass}>
                <AccordionTrigger className={accordionTriggerClass}>
                  {t('faqFleetQ1')}
                </AccordionTrigger>
                <AccordionContent className={accordionContentClass}>
                  <div className={answerContentClass}>
                    {t('faqFleetA1')}
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="fleet-2" className={accordionItemClass}>
                <AccordionTrigger className={accordionTriggerClass}>
                  {t('faqFleetQ2')}
                </AccordionTrigger>
                <AccordionContent className={accordionContentClass}>
                  <div className={answerContentClass}>
                    {t('faqFleetA2')}
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="fleet-3" className={accordionItemClass}>
                <AccordionTrigger className={accordionTriggerClass}>
                  {t('faqFleetQ3')}
                </AccordionTrigger>
                <AccordionContent className={accordionContentClass}>
                  <div className={answerContentClass}>
                    {t('faqFleetA3')}
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="fleet-4" className={accordionItemClass}>
                <AccordionTrigger className={accordionTriggerClass}>
                  {t('faqFleetQ4')}
                </AccordionTrigger>
                <AccordionContent className={accordionContentClass}>
                  <div className={answerContentClass}>
                    {t('faqFleetA4')}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
