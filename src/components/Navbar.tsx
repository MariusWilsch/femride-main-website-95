
import { Button } from "@/components/ui/button";
import { Globe, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-4 px-6 md:px-10 bg-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-3xl font-bold text-[#222]">Bolt</span>
          </a>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <Button variant="ghost" className="flex items-center text-[#222] font-medium">
            <Globe className="h-5 w-5 mr-2" />
            EN
          </Button>
          
          <a href="#support" className="text-[#222] font-medium">
            Support
          </a>
          
          <Button className="bg-[#222] hover:bg-[#333] text-white rounded-full px-6 py-2">
            Register
          </Button>
        </div>
        
        <div className="md:hidden">
          <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden mt-2 py-4 px-4 bg-white shadow-lg rounded-lg">
          <div className="flex flex-col space-y-4">
            <Button variant="ghost" className="flex items-center justify-center text-[#222] font-medium">
              <Globe className="h-5 w-5 mr-2" />
              EN
            </Button>
            
            <a href="#support" className="text-[#222] font-medium py-2 px-4 text-center">
              Support
            </a>
            
            <Button className="bg-[#222] hover:bg-[#333] text-white rounded-full px-6 py-2">
              Register
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
