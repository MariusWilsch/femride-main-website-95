
import { Button } from "@/components/ui/button";

/**
 * LatestFeaturesSection component highlighting driver and fleet partner opportunities
 */
const LatestFeaturesSection = () => {
  return (
    <section className="py-20 bg-[#a3adf4] text-black">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">Join FemRide</h2>
          <p className="text-lg text-black/90 max-w-3xl mx-auto mb-8">
            Werde ein Teil der FemRide Bewegung
          </p>
          <p className="text-xl text-black/90 max-w-3xl mx-auto">
            Für Sichere Mobilität, mehr Chancen, eine gerechtere Zukunft!
          </p>
        </div>
        
        {/* Two columns section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          {/* For Drivers */}
          <div className="bg-white/10 p-8 rounded-xl text-left">
            <h3 className="text-2xl font-bold mb-4">For female drivers</h3>
            <p className="text-lg mb-6">
              Werde Fahrerin und schließe dich einer FemRide-Flotte in Deutschland an!
              Auf der Suche nach einer Fahrerin-Position in Deutschland? Werde Teil eines Flottenunternehmens, 
              das mit FemRide kooperiert, und fahre für eine Plattform, die Sicherheit, Chancengleichheit und 
              faire Verdienstmöglichkeiten in den Mittelpunkt stellt. Nutze deine Chance auf einen flexiblen, 
              sicheren Job mit attraktiven Einkommensperspektiven!
            </p>
            <Button 
              className="bg-[#fa9de3] hover:bg-[#e989cc] text-black font-medium px-6 py-4"
              onClick={() => {
                const contactSection = document.getElementById('contact-section');
                if (contactSection) contactSection.scrollIntoView({behavior: 'smooth'});
              }}
            >
              Jetzt als Fahrerin anmelden!
            </Button>
          </div>
          
          {/* For Fleet Partners */}
          <div className="bg-white/10 p-8 rounded-xl text-left">
            <h3 className="text-2xl font-bold mb-4">For fleet operators</h3>
            <p className="text-lg mb-6">
              Werde Flottenpartner von FemRide in Deutschland!
              Besitzt du ein Flottenunternehmen und suchst nach neuen, lukrativen Einsatzmöglichkeiten? 
              Kooperiere mit FemRide und werde Teil einer Plattform, die gesellschaftlichen Impact und 
              nachhaltige Mobilität in den Mittelpunkt stellt. Nutze dein Potenzial und steigere deine 
              Flottenauslastung mit FemRide!
            </p>
            <Button 
              className="bg-[#fa9de3] hover:bg-[#e989cc] text-black font-medium px-6 py-4"
              onClick={() => {
                const contactSection = document.getElementById('contact-section');
                if (contactSection) contactSection.scrollIntoView({behavior: 'smooth'});
              }}
            >
              Jetzt als Flottenpartner registrieren!
            </Button>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <img 
            src="/lovable-uploads/cc605112-28bd-471e-bb25-3a729268b367.png"
            alt="FemRide App interface"
            className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default LatestFeaturesSection;
