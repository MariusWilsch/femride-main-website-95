
import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/**
 * FAQ section with categories for different user types
 */
const FAQSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-[#222] mb-16">
          Häufig gestellte Fragen
        </h2>
        
        {/* Passengers FAQs */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">FAQs für Fahrgästinnen</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="passengers-1">
              <AccordionTrigger>Was ist FemRide?</AccordionTrigger>
              <AccordionContent>
                FemRide ist Europas erste Ride-Hailing-Plattform, die ausschließlich für Frauen – für mehr Sicherheit und Vertrauen unterwegs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="passengers-2">
              <AccordionTrigger>In welchen Städten ist FemRide verfügbar?</AccordionTrigger>
              <AccordionContent>
                FemRide startet in Berlin und wird bald auch in weiteren deutschen Städten verfügbar sein. Schrittweise erfolgt der Ausbau in weitere Regionen und Länder. 🚀
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="passengers-3">
              <AccordionTrigger>Wie kann ich eine Fahrt buchen?</AccordionTrigger>
              <AccordionContent>
                Lade die FemRide-App herunter, registriere dich und buche deine Fahrt in wenigen Klicks – sicher und einfach.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="passengers-4">
              <AccordionTrigger>Welche Sicherheitsmaßnahmen gibt es?</AccordionTrigger>
              <AccordionContent>
                Unsere App bietet Live-Tracking, Notfall-Button und eine sichere Kommunikation zwischen Fahrerinnen und Passagierinnen. Zusätzlich identifizieren wir mit einem modernen System ob es sich bei dem Fahrgast und Fahrerin wirklich um Frauen handelt und garantieren damit die Sicherheit für die Benutzerin von FemRide.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        {/* Drivers FAQs */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">FAQs für Fahrerinnen</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="drivers-1">
              <AccordionTrigger>Wie kann ich Fahrerin bei FemRide werden?</AccordionTrigger>
              <AccordionContent>
                Registriere dich in der FemRide-App oder auf unserer Webseite und wähle ein Flottenunternehmen, mit dem du zusammenarbeiten möchtest.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="drivers-2">
              <AccordionTrigger>Welche Voraussetzungen muss ich erfüllen?</AccordionTrigger>
              <AccordionContent>
                Die Anforderungen hängen von deinem Flottenpartner ab. In der Regel benötigst du:
                <ul className="list-disc pl-6 mt-2">
                  <li>Einen gültigen Führerschein & Personenbeförderungsschein (P-Schein)</li>
                  <li>Ein polizeiliches Führungszeugnis</li>
                  <li>Ein Mindestalter von 21 Jahren</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="drivers-3">
              <AccordionTrigger>Wie sehen die Verdienstmöglichkeiten aus?</AccordionTrigger>
              <AccordionContent>
                Dein Verdienst hängt vom Flottenpartner und deinem Arbeitsmodell ab. In der Regel gibt es transparente Vergütungsmodelle mit fairen Einnahmen pro Fahrt. Zusätzlich gibt es einen Bonus für eine Anzahl von Fahrten, die dir FemRide zusätzlich zu deinem Gehalt auszahlt.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="drivers-4">
              <AccordionTrigger>Brauche ich ein eigenes Auto?</AccordionTrigger>
              <AccordionContent>
                Nein, du fährst mit den Fahrzeugen deines Flottenpartners. Die Bedingungen variieren je nach Partnerunternehmen.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        {/* Fleet Partners FAQs */}
        <div>
          <h3 className="text-2xl font-bold mb-6">FAQs für Subunternehmer</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="fleet-1">
              <AccordionTrigger>Wie kann mein Unternehmen mit FemRide kooperieren?</AccordionTrigger>
              <AccordionContent>
                Registriere dich als Flottenpartner und bringe deine Fahrzeuge auf die Straße – wir bieten attraktive Einsatzmöglichkeiten!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="fleet-2">
              <AccordionTrigger>Welche Vorteile hat eine Partnerschaft mit FemRide?</AccordionTrigger>
              <AccordionContent>
                Mehr Fahrten & höhere Auslastung, gesellschaftliche Anerkennung und die Vermittlung neuer Fahrerinnen.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="fleet-3">
              <AccordionTrigger>Wie erfolgt die Abrechnung?</AccordionTrigger>
              <AccordionContent>
                Wir bieten transparente Abrechnungsmodelle mit regelmäßigen Auszahlungen für eine nachhaltige Zusammenarbeit.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="fleet-4">
              <AccordionTrigger>Welche finanziellen Vorteile bietet eine Zusammenarbeit mit FemRide?</AccordionTrigger>
              <AccordionContent>
                Dank eines fairen Preismodells zahlen Flottenpartner weniger als üblich, um eine langfristige Partnerschaft zu fördern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
