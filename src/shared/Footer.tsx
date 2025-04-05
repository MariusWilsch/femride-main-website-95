
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold">FemRide</h3>
            <p className="text-gray-400">Go wherever. Whenever.</p>
          </div>
          
          <div className="flex space-x-6">
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-800 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} FemRide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
