
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <img 
              src="/lovable-uploads/19cc083a-4438-4f13-8e23-d83fb8938903.png" 
              alt="FemRide Logo" 
              className="h-10 md:h-12"
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <h2 className="text-xl font-bold mb-4">Impressum</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div>
              <p>FemRide UG</p>
              <p>📍 Adresse: Waldstraße 222A, 12527 Berlin</p>
              <p>📧 E-Mail: info@femride.de</p>
              <p>📞 Telefon: +49 157 58195608</p>
              <p>🌐 Webseite: www.femride.de</p>
            </div>
            
            <div>
              <p><strong>Vertreten durch:</strong><br />
                Aykut Atli (Geschäftsführer)</p>
              
              <p className="mt-4"><strong>Handelsregister:</strong><br />
                Amtsgericht Berlin (Charlottenburg)<br />
                HRB 272631</p>
              
              <p className="mt-4"><strong>Verantwortlich für den Inhalt gemäß § 18 Abs. 2 MStV:</strong><br />
                Aykut Atli, Waldstraße 222A, 12527 Berlin</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-800 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} FemRide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
