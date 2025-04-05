
import { Button } from "@/components/ui/button";
import { Globe, Menu } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

/**
 * Navigation component for the application header
 */
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'de' ? 'en' : 'de');
  };

  return (
    <header className="py-4 px-6 md:px-10 bg-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
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
              <Button variant="ghost" className="flex items-center text-[#222] font-medium">
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
          
          <a href="#support" className="text-[#222] font-medium">
            {t('navSupport')}
          </a>
          
          <Button className="bg-[#222] hover:bg-[#333] text-white rounded-full px-6 py-2">
            {t('navRegister')}
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center justify-center text-[#222] font-medium">
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
            
            <a href="#support" className="text-[#222] font-medium py-2 px-4 text-center">
              {t('navSupport')}
            </a>
            
            <Button className="bg-[#222] hover:bg-[#333] text-white rounded-full px-6 py-2">
              {t('navRegister')}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
