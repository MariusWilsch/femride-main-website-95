
import React, { useState, useRef, useEffect } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Separator } from "@/components/ui/separator";

/**
 * FAQ section with categories for different user types
 */
const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState("passengers");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Categories for the toggle group
  const categories = [
    { id: "passengers", label: "Fahrgästinnen" },
    { id: "drivers", label: "Fahrerinnen" },
    { id: "fleet", label: "Subunternehmer" },
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
  const accordionTriggerClass = "py-6 text-lg font-medium flex items-center justify-between hover:no-underline";
  const accordionContentClass = "pb-6 text-gray-600";

  return (
    <section 
      ref={sectionRef} 
      id="faq" 
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Section title with simple animation */}
        <div className={`mb-16 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#222] mb-4">
            Häufig gestellte Fragen
          </h2>
        </div>
        
        {/* Category selector with subtle animation delay */}
        <div className={`transition-all duration-700 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {activeCategory === "passengers" && (
            <h3 className="text-center text-2xl font-bold mb-8">FAQs für Fahrgästinnen</h3>
          )}
          
          {activeCategory === "drivers" && (
            <h3 className="text-center text-2xl font-bold mb-8">FAQs für Fahrerinnen</h3>
          )}
          
          {activeCategory === "fleet" && (
            <h3 className="text-center text-2xl font-bold mb-8">FAQs für Subunternehmer</h3>
          )}
          
          {/* Passengers FAQs */}
          <div className={`mb-16 transition-all duration-300 ease-in-out ${activeCategory === "passengers" ? "block" : "hidden"}`}>
            <Accordion 
              type="single" 
              collapsible 
              className="w-full"
            >
              <AccordionItem value="passengers-1" className={accordionItemClass}>
                <AccordionTrigger className={accordionTriggerClass}>
                  Was ist FemRide?
                </AccordionTrigger>
                <AccordionContent className={accordionContentClass}>
                  FemRide ist Europas erste Ride-Hailing-Plattform, die ausschließlich für Frauen – für mehr Sicherheit und Vertrauen unterwegs.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="passengers-2" className={accordionItemClass}>
                <AccordionTrigger className={accordionTriggerClass}>
                  In welchen Städten ist FemRide verfügbar?
                </AccordionTrigger>
                <AccordionContent className={accordionContentClass}>
                  FemRide startet in Berlin und wird bald auch in weiteren deutschen Städten verfügbar sein. Schrittweise erfolgt der Ausbau in weitere Regionen und Länder. 🚀
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="passengers-3" className={accordionItemClass}>
                <AccordionTrigger className={accordionTriggerClass}>
                  Wie kann ich eine Fahrt buchen?
                </AccordionTrigger>
                <AccordionContent className={accordionContentClass}>
                  Lade die FemRide-App herunter, registriere dich und buche deine Fahrt in wenigen Klicks – sicher und einfach.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="passengers-4" className={accordionItemClass}>
                <AccordionTrigger className={accordionTriggerClass}>
                  Welche Sicherheitsmaßnahmen gibt es?
                </AccordionTrigger>
                <AccordionContent className={accordionContentClass}>
                  Unsere App bietet Live-Tracking, Notfall-Button und eine sichere Kommunikation zwischen Fahrerinnen und Passagierinnen. Zusätzlich identifizieren wir mit einem modernen System ob es sich bei dem Fahrgast und Fahrerin wirklich um Frauen handelt und garantieren damit die Sicherheit für die Benutzerin von FemRide.
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
                  Wie kann ich Fahrerin bei FemRide werden?
                </AccordionTrigger>
                <AccordionContent className={accordionContentClass}>
                  Registriere dich in der FemRide-App oder auf unserer Webseite und wähle ein Flottenunternehmen, mit dem du zusammenarbeiten möchtest.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="drivers-2" className={accordionItemClass}>
                <AccordionTrigger className={accordionTriggerClass}>
                  Welche Voraussetzungen muss ich erfüllen?
                </AccordionTrigger>
                <AccordionContent className={accordionContentClass}>
                  Die Anforderungen hängen von deinem Flottenpartner ab. In der Regel benötigst du:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Einen gültigen Führerschein & Personenbeförderungsschein (P-Schein)</li>
                    <li>Ein polizeiliches Führungszeugnis</li>
                    <li>Ein Mindestalter von 21 Jahren</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="drivers-3" className={accordionItemClass}>
                <AccordionTrigger className={accordionTriggerClass}>
                  Wie sehen die Verdienstmöglichkeiten aus?
                </AccordionTrigger>
                <AccordionContent className={accordionContentClass}>
                  Dein Verdienst hängt vom Flottenpartner und deinem Arbeitsmodell ab. In der Regel gibt es transparente Vergütungsmodelle mit fairen Einnahmen pro Fahrt. Zusätzlich gibt es einen Bonus für eine Anzahl von Fahrten, die dir FemRide zusätzlich zu deinem Gehalt auszahlt.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="drivers-4" className={accordionItemClass}>
                <AccordionTrigger className={accordionTriggerClass}>
                  Brauche ich ein eigenes Auto?
                </AccordionTrigger>
                <AccordionContent className={accordionContentClass}>
                  Nein, du fährst mit den Fahrzeugen deines Flottenpartners. Die Bedingungen variieren je nach Partnerunternehmen.
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
                  Wie kann mein Unternehmen mit FemRide kooperieren?
                </AccordionTrigger>
                <AccordionContent className={accordionContentClass}>
                  Registriere dich als Flottenpartner und bringe deine Fahrzeuge auf die Straße – wir bieten attraktive Einsatzmöglichkeiten!
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="fleet-2" className={accordionItemClass}>
                <AccordionTrigger className={accordionTriggerClass}>
                  Welche Vorteile hat eine Partnerschaft mit FemRide?
                </AccordionTrigger>
                <AccordionContent className={accordionContentClass}>
                  Mehr Fahrten & höhere Auslastung, gesellschaftliche Anerkennung und die Vermittlung neuer Fahrerinnen.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="fleet-3" className={accordionItemClass}>
                <AccordionTrigger className={accordionTriggerClass}>
                  Wie erfolgt die Abrechnung?
                </AccordionTrigger>
                <AccordionContent className={accordionContentClass}>
                  Wir bieten transparente Abrechnungsmodelle mit regelmäßigen Auszahlungen für eine nachhaltige Zusammenarbeit.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="fleet-4" className={accordionItemClass}>
                <AccordionTrigger className={accordionTriggerClass}>
                  Welche finanziellen Vorteile bietet eine Zusammenarbeit mit FemRide?
                </AccordionTrigger>
                <AccordionContent className={accordionContentClass}>
                  Dank eines fairen Preismodells zahlen Flottenpartner weniger als üblich, um eine langfristige Partnerschaft zu fördern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Category navigation */}
        <div className={`flex justify-center transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <ToggleGroup
            type="single"
            value={activeCategory}
            onValueChange={(value) => {
              if (value) setActiveCategory(value);
            }}
            className="bg-gray-100 p-1 rounded-full"
          >
            {categories.map((category) => (
              <ToggleGroupItem 
                key={category.id} 
                value={category.id}
                aria-label={`Show FAQs for ${category.label}`}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
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
      </div>
      
      {/* Scroll to top button indicator */}
      <div className="absolute bottom-8 right-8 animate-bounce hidden md:block">
        <div className="h-12 w-12 rounded-full bg-[#fa9de3] flex items-center justify-center text-black">
          <ChevronDown className="rotate-180" size={24} />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
