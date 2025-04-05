
import { Button } from "@/components/ui/button";

/**
 * About section highlighting FemRide as a European mobility platform for women
 */
const AboutSection = () => {
  return (
    <section className="py-20 bg-[#fa9de3] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-white/90 mb-4 font-medium">About us</p>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold max-w-5xl mx-auto mb-8">
            Was sagen die Frauen zu FemRide?
          </h2>
          
          <p className="text-lg max-w-4xl mx-auto">
            FemRide macht den Unterschied! – Eine Umfrage mit über 100 Teilnehmer:innen, davon 90 % Frauen, zeigt: 
            Sichere Mobilität ist ein dringendes Bedürfnis. Ihre Antworten geben wertvolle Einblicke in die aktuellen 
            Herausforderungen und bestätigen die Notwendigkeit einer Ride-Hailing-Plattform, exklusiv für Frauen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">„Endlich eine sichere Alternative!"</h3>
            <p>80% der Frauen fühlen sich mit einer Ride-Hailing-Plattform, exklusiv für Frauen sicherer. FemRide schafft Vertrauen durch geprüfte Fahrerinnen und Schutzmaßnahmen für Frauen und Fahrerinnen.</p>
          </div>
          
          <div className="bg-white/10 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">„Keine Angst mehr vor Übergriffen."</h3>
            <p>75% der befragten Frauen wollen FemRide nutzen, um sich vor Belästigung und Diskriminierung zu schützen. Unsere Fahrten sind exklusiv von Frauen für Frauen.</p>
          </div>
          
          <div className="bg-white/10 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">„Genau das hat gefehlt!"</h3>
            <p>83% der Frauen sind überzeugt, dass FemRide eine nachhaltige Lösung für mehr Sicherheit im Ride-Hailing bietet. Eine Plattform, die Frauen mehr Freiheit und Unabhängigkeit denn je ermöglicht.</p>
          </div>
        </div>

        <div className="flex justify-center">
          <Button 
            className="bg-[#85E6E7] hover:bg-[#71d2d3] text-black font-medium rounded-md px-8 py-6"
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            Jetzt registrieren und Teil der Bewegung werden
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
