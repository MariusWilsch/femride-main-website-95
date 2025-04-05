
import { Button } from "@/components/ui/button";

/**
 * Services section component showcasing FemRide's main service offerings
 */
const ServicesSection = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-[#222] mb-16">
        Our services
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Passenger Card */}
        <div className="rounded-xl overflow-hidden bg-[#0E241B] text-white h-[640px] relative">
          <div className="p-8">
            <h3 className="text-3xl font-bold mb-4">Buche deine erste Fahrt</h3>
            <p className="text-lg mb-6">
              Exklusiv für Frauen, mit verifizierten Fahrerinnen, für maximale Sicherheit und Vertrauen.
            </p>
            <Button className="bg-[#fa9de3] hover:bg-[#e989cc] text-black font-medium px-6" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              Jetzt buchen
            </Button>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <img 
              src="/lovable-uploads/2172695d-46ee-4d18-a288-415a6c9ba8e0.png" 
              alt="FemRide app on smartphone" 
              className="w-full"
              style={{
                clipPath: "polygon(0 25%, 100% 0, 100% 100%, 0 100%)"
              }}
            />
          </div>
        </div>

        {/* Driver Card */}
        <div className="rounded-xl overflow-hidden bg-[#2C5779] text-white h-[640px] relative">
          <div className="p-8">
            <h3 className="text-3xl font-bold mb-4">Fahrerin werden</h3>
            <p className="text-lg mb-6">
              Fahre ausschließlich Frauen, verdiene fair und sei Teil von FemRide und unserer Community.
            </p>
            <Button className="bg-[#fa9de3] hover:bg-[#e989cc] text-black font-medium px-6" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              Jetzt Fahrerin werden
            </Button>
          </div>
          <div className="mt-12 h-[360px] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1612357735878-79f2b66f5b23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
              alt="Woman driving a car" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Fleet Partner Card */}
        <div className="rounded-xl overflow-hidden bg-[#0E241B] text-white h-[640px] relative">
          <div className="p-8">
            <h3 className="text-3xl font-bold mb-4">Flottenpartner werden</h3>
            <p className="text-lg mb-6">
              Maximieren Sie Ihre Flotten Auslastung und profitieren Sie von FemRide's Wachstum und attraktiven Konditionen.
            </p>
            <Button className="bg-white hover:bg-gray-100 text-[#222] font-medium px-6" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              Jetzt Flottenpartner werden
            </Button>
          </div>
          <div className="mt-12 h-[360px] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Fleet of cars" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
