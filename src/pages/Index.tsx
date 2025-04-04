
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { Globe, Menu } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="container mx-auto px-4 flex flex-col items-center justify-center mt-16 md:mt-36">
        <p className="text-gray-700 text-lg font-medium mb-2">Bolt</p>
        
        <h1 className="text-5xl md:text-7xl font-bold text-center text-[#222] mt-4 max-w-3xl">
          Go wherever.
          <br />
          Whenever.
        </h1>
        
        <p className="text-xl text-gray-600 mt-12 text-center">
          Bolt is the all-in-one mobility app.
        </p>
        
        <Button className="mt-10 px-8 py-6 text-lg bg-[#12382c] hover:bg-[#0d2b22] text-white rounded-lg">
          Get the Bolt app
        </Button>
      </main>
    </div>
  );
};

export default Index;
