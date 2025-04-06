
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useLanguage } from '@/lib/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#1A1F2C] text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12">
          {/* Logo section */}
          <div className="mb-8 lg:mb-0">
            <img 
              src="/lovable-uploads/1c4c3713-8362-4f14-b80e-d0163d28bb8f.png" 
              alt="FemRide Logo" 
              className="h-14 md:h-16"
            />
          </div>
          
          {/* Links and social icons */}
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            {/* Legal links */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
              <Link to="/terms" className="text-gray-300 hover:text-[#fa9de3] transition-colors text-sm md:text-base">
                {t('footerTerms')}
              </Link>
              <Link to="/privacy" className="text-gray-300 hover:text-[#fa9de3] transition-colors text-sm md:text-base">
                {t('footerPrivacy')}
              </Link>
            </div>
            
            {/* Social media icons */}
            <div className="flex items-center gap-6 mt-6 md:mt-0 md:ml-8">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#fa9de3] transition-colors transform hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/femride_de" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#fa9de3] transition-colors transform hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#fa9de3] transition-colors transform hover:scale-110">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/company/femridedeutschland/" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#fa9de3] transition-colors transform hover:scale-110">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Subtle divider */}
        <Separator className="bg-gray-800 my-10" />
        
        {/* Restructured Impressum section with better spacing and alignment */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row gap-x-20 gap-y-12 justify-between">
            {/* Left column - Company info */}
            <div className="flex flex-col items-start">
              <h3 className="font-semibold text-lg mb-8 ml-16">FemRide UG</h3>
              
              <div className="flex items-start mb-6">
                <span className="text-[#fa9de3] mr-4 w-6 flex-shrink-0">📍</span>
                <p className="text-gray-300">Adresse: Waldstraße 222A, 12527 Berlin</p>
              </div>
              
              <div className="flex items-start mb-6">
                <span className="text-[#fa9de3] mr-4 w-6 flex-shrink-0">📧</span>
                <p className="text-gray-300">E-Mail: <a href="mailto:info@femride.de" className="text-[#fa9de3] hover:underline">info@femride.de</a></p>
              </div>
              
              <div className="flex items-start">
                <span className="text-[#fa9de3] mr-4 w-6 flex-shrink-0">🌐</span>
                <p className="text-gray-300">Webseite: <a href="https://www.femride.de" target="_blank" rel="noopener noreferrer" className="text-[#fa9de3] hover:underline">www.femride.de</a></p>
              </div>
            </div>
            
            {/* Right column - Legal info */}
            <div className="flex flex-col items-start md:items-end">
              <h2 className="text-xl font-bold mb-8 md:text-right w-full">Impressum</h2>
              
              <div className="mb-6 text-left md:text-right w-full">
                <h3 className="font-semibold text-white mb-2">Vertreten durch:</h3>
                <p className="text-gray-300">Aykut Atli (Geschäftsführer)</p>
              </div>
              
              <div className="mb-6 text-left md:text-right w-full">
                <h3 className="font-semibold text-white mb-2">Handelsregister:</h3>
                <p className="text-gray-300">Amtsgericht Berlin (Charlottenburg)</p>
                <p className="text-gray-300">HRB 272631</p>
              </div>
              
              <div className="text-left md:text-right w-full">
                <h3 className="font-semibold text-white mb-2">Verantwortlich für den Inhalt gemäß § 18 Abs. 2 MStV:</h3>
                <p className="text-gray-300">Aykut Atli, Waldstraße 222A, 12527 Berlin</p>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="bg-gray-800 my-8" />
        
        {/* Copyright section */}
        <div className="text-center pt-4">
          <p className="text-gray-400">© {currentYear} FemRide. {t('footerRights')}</p>
        </div>
      </div>
    </footer>
  );
};
