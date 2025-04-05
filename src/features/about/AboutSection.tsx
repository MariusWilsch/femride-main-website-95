
import { Button } from "@/components/ui/button";

/**
 * About section highlighting FemRide as a European mobility super-app
 */
const AboutSection = () => {
  return (
    <section className="py-20 bg-[#e908b0] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-white/90 mb-4 font-medium">About us</p>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold max-w-5xl mx-auto mb-8">
            FemRide is the first European mobility super-app.
          </h2>
          
          <p className="text-lg max-w-4xl mx-auto">
            We're making cities for people, offering better alternatives for every purpose a private car serves — including
            ride-hailing, shared cars, scooters, and food and grocery delivery.
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <Button className="bg-white hover:bg-white/90 text-[#e908b0] font-medium rounded-md px-8 py-6">
            Our mission
          </Button>
        </div>

        <div className="flex justify-center">
          <div className="relative max-w-xs mx-auto">
            <img 
              src="/lovable-uploads/899795e7-2c87-469c-9bb4-8e6efd6b8470.png" 
              alt="FemRide app interface showing a map with car locations" 
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
