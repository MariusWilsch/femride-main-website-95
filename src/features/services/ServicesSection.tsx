
import { Button } from "@/components/ui/button";

/**
 * Services section component showcasing Bolt's main service offerings
 */
const ServicesSection = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-[#222] mb-6">
        Our services
      </h2>
      
      <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
        Products and features vary by country. Some features listed here may not 
        be available in your app.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Rides Card */}
        <div className="rounded-xl overflow-hidden bg-[#0E241B] text-white h-[640px] relative">
          <div className="p-8">
            <h3 className="text-3xl font-bold mb-4">Rides</h3>
            <p className="text-lg mb-6">
              Request in seconds, ride in minutes.
            </p>
            <Button className="bg-[#2D9D78] hover:bg-[#248C68] text-white font-medium px-6">
              Get started
            </Button>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <img 
              src="/lovable-uploads/2172695d-46ee-4d18-a288-415a6c9ba8e0.png" 
              alt="Bolt app on smartphone" 
              className="w-full"
              style={{
                clipPath: "polygon(0 25%, 100% 0, 100% 100%, 0 100%)"
              }}
            />
          </div>
        </div>

        {/* Delivery Card */}
        <div className="rounded-xl overflow-hidden bg-[#2C5779] text-white h-[640px] relative">
          <div className="p-8">
            <h3 className="text-3xl font-bold mb-4">Delivery</h3>
            <p className="text-lg mb-6">
              Your favourite food, delivered fast.
            </p>
            <Button className="bg-[#2D9D78] hover:bg-[#248C68] text-white font-medium px-6">
              Go to Bolt Food
            </Button>
          </div>
          <div className="mt-12">
            <img 
              src="https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
              alt="Person with food delivery" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Car-sharing Card */}
        <div className="rounded-xl overflow-hidden bg-[#0E241B] text-white h-[640px] relative">
          <div className="p-8">
            <h3 className="text-3xl font-bold mb-4">Car-sharing</h3>
            <p className="text-lg mb-6">
              High-quality car rental made easy.
            </p>
            <Button className="bg-white hover:bg-gray-100 text-[#222] font-medium px-6">
              Go to Bolt Drive
            </Button>
          </div>
          <div className="mt-12">
            <img 
              src="https://images.unsplash.com/photo-1621993203242-de582ea76ff9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80" 
              alt="Person in a car" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
