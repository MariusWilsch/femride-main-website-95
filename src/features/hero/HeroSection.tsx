
import { Button } from "@/components/ui/button";

/**
 * Hero section component for the landing page
 */
const HeroSection = () => {
  return (
    <main className="container mx-auto px-4 flex flex-col items-center justify-center mt-16 md:mt-36">
      <p className="text-gray-700 text-lg font-medium mb-2">FemRide</p>
      
      <h1 className="text-5xl md:text-7xl font-bold text-center text-[#222] mt-4 max-w-3xl">
        Go wherever.
        <br />
        Whenever.
      </h1>
      
      <p className="text-xl text-gray-600 mt-12 text-center">
        FemRide is the all-in-one mobility app.
      </p>
      
      <div className="flex flex-col items-center mt-10">
        <Button className="px-8 py-6 text-lg bg-[#e908b0] hover:bg-[#d007a0] text-white rounded-lg">
          Get the FemRide app
        </Button>
        <p className="text-lg text-[#e908b0] font-medium mt-3">Coming soon - Not yet available</p>
      </div>
    </main>
  );
};

export default HeroSection;
