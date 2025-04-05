
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Section highlighting FemRide's mission to improve cities with data-driven insights
 */
const CitiesSection = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center max-w-5xl mx-auto mb-8">
          Making cities for people, not cars.
        </h2>
        
        <p className="text-lg text-center max-w-3xl mx-auto mb-20">
          By sharing our knowledge of the industry and real-time data we're helping 
          to improve our cities.
        </p>

        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-gray-400 mb-2">Making cities for people, not cars.</p>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">Sharing best practices</h3>
                </div>
                <div>
                  <p className="text-xl mb-6">
                    We're able to provide insights that help local authorities make 
                    their cities more connected and liveable.
                  </p>
                  <Button className="bg-[#e908b0] hover:bg-[#d007a0] text-white font-medium px-6">
                    Learn more
                  </Button>
                </div>
              </div>
            </CarouselItem>
            
            <CarouselItem>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-gray-400 mb-2">Smart mobility solutions</p>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">Reducing congestion</h3>
                </div>
                <div>
                  <p className="text-xl mb-6">
                    Our data helps city planners identify high-traffic areas and develop 
                    strategies to reduce congestion and pollution.
                  </p>
                  <Button className="bg-[#e908b0] hover:bg-[#d007a0] text-white font-medium px-6">
                    Learn more
                  </Button>
                </div>
              </div>
            </CarouselItem>
            
            <CarouselItem>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-gray-400 mb-2">Sustainable transportation</p>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">Green initiatives</h3>
                </div>
                <div>
                  <p className="text-xl mb-6">
                    We're committed to reducing carbon emissions through electric vehicle 
                    options and optimized routes for all our services.
                  </p>
                  <Button className="bg-[#e908b0] hover:bg-[#d007a0] text-white font-medium px-6">
                    Learn more
                  </Button>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>

          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious className="relative inset-0 translate-y-0 h-10 w-10 rounded-full border-white/20 bg-transparent hover:bg-white/10">
              <ChevronLeft className="h-5 w-5" />
            </CarouselPrevious>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#e908b0]"></span>
              <span className="h-2 w-2 rounded-full bg-white/30"></span>
              <span className="h-2 w-2 rounded-full bg-white/30"></span>
            </div>
            <CarouselNext className="relative inset-0 translate-y-0 h-10 w-10 rounded-full border-white/20 bg-transparent hover:bg-white/10">
              <ChevronRight className="h-5 w-5" />
            </CarouselNext>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default CitiesSection;
