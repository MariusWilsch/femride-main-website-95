
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useLanguage } from '@/lib/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-[#1A1F2C] text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Top section with logo and links */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-6">
          <div className="mb-6 lg:mb-0">
            <img 
              src="/lovable-uploads/1c4c3713-8362-4f14-b80e-d0163d28bb8f.png" 
              alt="FemRide Logo" 
              className="h-12 md:h-16"
            />
          </div>
          
          <div className="flex flex-wrap items-center gap-6 lg:gap-10">
            <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            
            {/* Social media icons */}
            <div className="flex items-center gap-4 ml-0 lg:ml-8">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#fa9de3] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#fa9de3] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#fa9de3] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#fa9de3] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <Separator className="bg-gray-800 my-8" />
        
        {/* Impressum section */}
        <div className="pt-4">
          <h2 className="text-xl font-bold mb-8 text-center">Impressum</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
            <div className="space-y-3">
              <p className="font-semibold text-lg">FemRide UG</p>
              <p><span className="inline-block w-6">📍</span> Adresse: Waldstraße 222A, 12527 Berlin</p>
              <p><span className="inline-block w-6">📧</span> E-Mail: <a href="mailto:info@femride.de" className="text-[#fa9de3] hover:underline">info@femride.de</a></p>
              <p><span className="inline-block w-6">📞</span> Telefon: <a href="tel:+4915758195608" className="hover:underline">+49 157 58195608</a></p>
              <p><span className="inline-block w-6">🌐</span> Webseite: <a href="https://www.femride.de" target="_blank" rel="noopener noreferrer" className="text-[#fa9de3] hover:underline">www.femride.de</a></p>
            </div>
            
            <div className="space-y-6">
              <div>
                <p className="font-semibold">Vertreten durch:</p>
                <p>Aykut Atli (Geschäftsführer)</p>
              </div>
              
              <div>
                <p className="font-semibold">Handelsregister:</p>
                <p>Amtsgericht Berlin (Charlottenburg)</p>
                <p>HRB 272631</p>
              </div>
              
              <div>
                <p className="font-semibold">Verantwortlich für den Inhalt gemäß § 18 Abs. 2 MStV:</p>
                <p>Aykut Atli, Waldstraße 222A, 12527 Berlin</p>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="bg-gray-800 my-8" />
        
        {/* Copyright section */}
        <div className="text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} FemRide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
