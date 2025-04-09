import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

// Define the shape of our language context
interface LanguageContextProps {
  language: string;
  t: (key: string) => string;
  setLanguage: (lang: string) => void;
}

// Create the language context with a default value
const LanguageContext = createContext<LanguageContextProps>({
  language: 'en',
  t: (key: string) => key,
  setLanguage: () => {},
});

// Translation map
const translations: { [key: string]: { [key: string]: string } } = {
  en: {
    heroTitle1: 'Driven for',
    heroTitle2: 'Women by Women',
    heroSubtitle: 'Safer rides, stronger community. FemRide is ride-sharing designed by women, for women.',
    heroButton: 'Join the Community',
    servicesTitle: 'Our Services',
    servicesSubtitle: 'What We Offer',
    service1Title: 'Safe Rides',
    service1Description: 'Feel secure with women drivers and passengers.',
    service2Title: 'Community',
    service2Description: 'Join a network of supportive women.',
    service3Title: 'Empowerment',
    service3Description: 'Support women in your community.',
    aboutTitle: 'About FemRide',
    aboutSubtitle: 'Our Mission',
    aboutDescription: 'FemRide is dedicated to providing a safe, reliable, and empowering ride-sharing experience for women. We believe in creating a community where women feel secure and supported.',
    latestFeaturesTitle: 'Latest Features',
    latestFeaturesSubtitle: 'Explore Our Innovations',
    feature1Title: 'Verified Drivers',
    feature1Description: 'All drivers are thoroughly vetted for your safety.',
    feature2Title: 'In-App Emergency Assistance',
    feature2Description: 'Quick access to help when you need it.',
    feature3Title: 'Ride Preferences',
    feature3Description: 'Customize your ride experience.',
    faqTitle: 'Frequently Asked Questions',
    faqSubtitle: 'Get Answers',
    faq1Question: 'How does FemRide ensure safety?',
    faq1Answer: 'We verify all drivers and offer in-app safety features.',
    faq2Question: 'Can I choose my driver?',
    faq2Answer: 'Yes, you can select a driver from our list of verified women.',
    faq3Question: 'Is FemRide available in my city?',
    faq3Answer: 'We are expanding rapidly. Check our app for current locations.',
    contactTitle: 'Contact Us',
    contactSubtitle: 'Get in Touch',
    contactDescription: 'Have questions or feedback? We would love to hear from you.',
    contactButton: 'Send Message',
    downloadTitle: 'Download the App',
    downloadSubtitle: 'Start Riding Today',
    downloadDescription: 'Experience the future of safe ride-sharing. Download FemRide now and join our community of empowered women.',
    privacyPolicy: 'Privacy Policy',
    termsConditions: 'Terms & Conditions',
    cookieBanner: 'We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies.',
    acceptCookies: 'Accept',
  },
  de: {
    heroTitle1: 'Fahren für',
    heroTitle2: 'Frauen von Frauen',
    heroSubtitle: 'Sicherere Fahrten, stärkere Gemeinschaft. FemRide ist Ride-Sharing, entworfen von Frauen für Frauen.',
    heroButton: 'Treten Sie der Community bei',
    servicesTitle: 'Unsere Dienstleistungen',
    servicesSubtitle: 'Was wir anbieten',
    service1Title: 'Sichere Fahrten',
    service1Description: 'Fühlen Sie sich sicher mit Fahrerinnen und Fahrgästen.',
    service2Title: 'Gemeinschaft',
    service2Description: 'Treten Sie einem Netzwerk von unterstützenden Frauen bei.',
    service3Title: 'Ermächtigung',
    service3Description: 'Unterstützen Sie Frauen in Ihrer Gemeinde.',
    aboutTitle: 'Über FemRide',
    aboutSubtitle: 'Unsere Mission',
    aboutDescription: 'FemRide hat es sich zur Aufgabe gemacht, Frauen ein sicheres, zuverlässiges und stärkendes Ride-Sharing-Erlebnis zu bieten. Wir glauben an die Schaffung einer Gemeinschaft, in der sich Frauen sicher und unterstützt fühlen.',
    latestFeaturesTitle: 'Neueste Funktionen',
    latestFeaturesSubtitle: 'Entdecken Sie unsere Innovationen',
    feature1Title: 'Verifizierte Fahrer',
    feature1Description: 'Alle Fahrer werden gründlich auf Ihre Sicherheit überprüft.',
    feature2Title: 'In-App-Notfallhilfe',
    feature2Description: 'Schneller Zugriff auf Hilfe, wenn Sie sie benötigen.',
    feature3Title: 'Fahrpräferenzen',
    feature3Description: 'Passen Sie Ihr Fahrerlebnis an.',
    faqTitle: 'Häufig gestellte Fragen',
    faqSubtitle: 'Antworten erhalten',
    faq1Question: 'Wie stellt FemRide die Sicherheit sicher?',
    faq1Answer: 'Wir überprüfen alle Fahrer und bieten In-App-Sicherheitsfunktionen.',
    faq2Question: 'Kann ich meinen Fahrer auswählen?',
    faq2Answer: 'Ja, Sie können einen Fahrer aus unserer Liste verifizierter Frauen auswählen.',
    faq3Question: 'Ist FemRide in meiner Stadt verfügbar?',
    faq3Answer: 'Wir expandieren schnell. Überprüfen Sie unsere App auf aktuelle Standorte.',
    contactTitle: 'Kontaktiere uns',
    contactSubtitle: 'In Kontakt kommen',
    contactDescription: 'Haben Sie Fragen oder Feedback? Wir würden uns freuen, von Ihnen zu hören.',
    contactButton: 'Nachricht senden',
    downloadTitle: 'Laden Sie die App herunter',
    downloadSubtitle: 'Starten Sie noch heute mit dem Fahren',
    downloadDescription: 'Erleben Sie die Zukunft des sicheren Ride-Sharing. Laden Sie FemRide jetzt herunter und treten Sie unserer Community von starken Frauen bei.',
    privacyPolicy: 'Datenschutzrichtlinie',
    termsConditions: 'Nutzungsbedingungen',
    cookieBanner: 'Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Indem Sie diese Website weiterhin besuchen, stimmen Sie unserer Verwendung von Cookies zu.',
    acceptCookies: 'Akzeptieren',
  },
};

// Language Provider component
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<string>(() => {
    // Initialize language from localStorage or default to 'en'
    const storedLanguage = localStorage.getItem('language') || 'en';
    return storedLanguage;
  });

  // Function to update the language and store it in localStorage
  const updateLanguage = useCallback((lang: string) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  }, []);

  // Translation function
  const t = useCallback((key: string) => {
    return translations[language]?.[key] || translations['en'][key] || key;
  }, [language]);

  useEffect(() => {
    // Update document language attribute
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{
      language,
      t,
      setLanguage: updateLanguage,
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to consume the language context
export const useLanguage = (): LanguageContextProps => {
  return useContext(LanguageContext);
};
