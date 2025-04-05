
import { Button } from "@/components/ui/button";
import { Globe, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

/**
 * Navigation component for the application header
 * Enhanced with sticky behavior and animations
 */
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const toggleLanguage = () => {
    setLanguage(language === 'de' ? 'en' : 'de');
  };

  return (
    <header 
      className={`py-4 px-6 md:px-10 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md py-3" 
          : "bg-white py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center transition-transform hover:scale-105 duration-300">
            <img 
              src="/lovable-uploads/c7f8aded-75a3-4986-a5e0-dcf1a650407b.png" 
              alt="FemRide Logo" 
              className="h-8 md:h-10"
            />
          </a>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                className="flex items-center text-[#222] font-medium hover:bg-pink-50 transition-colors"
              >
                <Globe className="h-5 w-5 mr-2" />
                {language.toUpperCase()}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setLanguage('de')} className="hover:bg-pink-50">
                DE
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('en')} className="hover:bg-pink-50">
                EN
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <a 
            href="#support" 
            className="text-[#222] font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#fa9de3] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
          >
            {t('navSupport')}
          </a>
          
          <Button 
            className="bg-[#222] hover:bg-[#333] text-white rounded-full px-6 py-2 transition-transform hover:scale-105 duration-200 shadow-md"
          >
            {t('navRegister')}
          </Button>
        </div>
        
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="transition-colors hover:bg-pink-50"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden mt-2 py-4 px-4 bg-white shadow-lg rounded-lg animate-fade-in">
          <div className="flex flex-col space-y-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center justify-center text-[#222] font-medium hover:bg-pink-50">
                  <Globe className="h-5 w-5 mr-2" />
                  {language.toUpperCase()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setLanguage('de')}>
                  DE
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('en')}>
                  EN
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <a href="#support" className="text-[#222] font-medium py-2 px-4 text-center hover:bg-pink-50 rounded-md transition-colors">
              {t('navSupport')}
            </a>
            
            <Button className="bg-[#222] hover:bg-[#333] text-white rounded-full px-6 py-2 transition-transform hover:scale-105 duration-200">
              {t('navRegister')}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
