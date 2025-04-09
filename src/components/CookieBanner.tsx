
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/LanguageContext';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    
    // If no record found, show the banner
    if (!cookiesAccepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    // Save user preference
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gray-800 text-white shadow-lg animate-in fade-in slide-in-from-bottom-5">
      <div className="container mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1 text-sm sm:text-base">
          <p>
            {t('cookieBanner') || 'We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies.'}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button 
            variant="outline" 
            className="bg-transparent border-white text-white hover:bg-white hover:text-gray-800"
            onClick={acceptCookies}
          >
            {t('acceptCookies') || 'Accept'}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={acceptCookies}
            className="text-white hover:bg-gray-700"
          >
            <X size={18} />
            <span className="sr-only">Close</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
