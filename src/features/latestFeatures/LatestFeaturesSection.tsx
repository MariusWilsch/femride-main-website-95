
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

/**
 * LatestFeaturesSection component highlighting advanced booking feature
 */
const LatestFeaturesSection = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-10">
          <h3 className="text-lg mb-4">Latest features</h3>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">Book a ride in advance</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Planning a trip? Schedule a Bolt ride in advance for even more convenient airport
            transfers, important meetings, or any occasion that requires punctuality. Simply
            enter your details and secure your ride up to 90 days ahead.
          </p>
        </div>
        
        {/* Image section */}
        <div className="mt-12">
          <img 
            src="/lovable-uploads/cc605112-28bd-471e-bb25-3a729268b367.png"
            alt="Business professionals scheduling a ride on laptop"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        
        {/* CTA Button */}
        <div className="mt-10 text-center">
          <Button className="bg-white hover:bg-gray-100 text-black rounded-md font-medium px-8 py-6 text-lg">
            <Calendar className="mr-2 h-5 w-5" />
            Schedule a ride
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LatestFeaturesSection;
