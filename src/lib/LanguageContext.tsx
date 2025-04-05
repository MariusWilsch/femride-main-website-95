
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'de' | 'en';
type Translations = Record<string, Record<Language, string>>;

// Translations for different components
export const translations: Translations = {
  // Navigation
  navSupport: {
    de: 'Support',
    en: 'Support'
  },
  navRegister: {
    de: 'Registrieren',
    en: 'Register'
  },
  
  // Footer
  footerTerms: {
    de: 'AGB',
    en: 'Terms & Conditions'
  },
  footerPrivacy: {
    de: 'Datenschutz',
    en: 'Privacy Policy'
  },
  footerImpressum: {
    de: 'Impressum',
    en: 'Imprint'
  },
  footerRights: {
    de: 'Alle Rechte vorbehalten.',
    en: 'All rights reserved.'
  },
  
  // Founder Section
  founderTitle: {
    de: 'Gründer & CEO',
    en: 'Founder & CEO'
  },
  founderText1: {
    de: 'Sicherheit und Chancengleichheit stehen für uns an erster Stelle. Mit FemRide haben wir es uns zur Aufgabe gemacht, die Straßen sicherer und freier für alle Frauen zu gestalten. Dafür setzen wir auf starke Partnerschaften mit Unternehmen, NGOs und Behörden, die unsere Vision teilen. Denn echte Veränderung entsteht nur gemeinsam – für eine Zukunft, in der Frauen sich überall frei und unbesorgt bewegen können.',
    en: 'Safety and equal opportunities are our top priorities. With FemRide, we have made it our mission to make roads safer and freer for all women. To achieve this, we rely on strong partnerships with companies, NGOs and authorities who share our vision. Because real change only happens together - for a future where women can move freely and without worry everywhere.'
  },
  founderText2: {
    de: 'Als Mann setze ich mich bewusst für diese Mission ein, denn jeder von uns hat eine Frau in seinem Leben – sei es eine Mutter, Schwester, Tochter, Partnerin oder Freundin – für die es sich lohnt, eine sicherere und gerechtere Welt zu schaffen. Doch darüber hinaus geht es nicht nur um Einzelpersonen, sondern um die gesellschaftliche Verantwortung, die wir alle tragen.',
    en: "As a man, I am consciously committed to this mission because each of us has a woman in our life - whether a mother, sister, daughter, partner or friend - for whom it is worth creating a safer and more just world. But beyond that, it's not just about individuals, but about the social responsibility that we all bear."
  },
  
  // Hero Section
  heroTagline: {
    de: 'FemRide',
    en: 'FemRide'
  },
  heroTitle1: {
    de: 'Driven for Women',
    en: 'Driven for Women'
  },
  heroTitle2: {
    de: 'by Women',
    en: 'by Women'
  },
  heroSubtitle: {
    de: 'FemRide - Europas erste Ride-Hailing-Plattform, exklusiv für Frauen',
    en: 'FemRide - Europe\'s first ride-hailing platform, exclusively for women'
  },
  heroButton: {
    de: 'FemRide App herunterladen',
    en: 'Get the FemRide app'
  },
  heroComingSoon: {
    de: 'Bald im Google Play & App Store verfügbar',
    en: 'Coming soon to Google Play & App Store'
  },
  
  // Services Section
  servicesTitle: {
    de: 'Was wir anbieten',
    en: 'What we offer'
  },
  servicesSubtitle: {
    de: 'Entdecken Sie unsere maßgeschneiderten Dienste für Fahrgäste, Fahrerinnen und Flottenpartner',
    en: 'Discover our tailored services for passengers, drivers, and fleet partners'
  },
  servicesHeader1: {
    de: 'FÜR FAHRGÄSTE',
    en: 'FOR PASSENGERS'
  },
  servicesTitle1: {
    de: 'Buche deine erste Fahrt',
    en: 'Book your first ride'
  },
  servicesDesc1: {
    de: 'Exklusiv für Frauen, mit verifizierten Fahrerinnen, für maximale Sicherheit und Vertrauen.',
    en: 'Exclusively for women, with verified drivers, for maximum safety and trust.'
  },
  servicesButton1: {
    de: 'Jetzt buchen',
    en: 'Book now'
  },
  servicesHeader2: {
    de: 'FÜR FAHRERINNEN',
    en: 'FOR DRIVERS'
  },
  servicesTitle2: {
    de: 'Fahrerin werden',
    en: 'Become a driver'
  },
  servicesDesc2: {
    de: 'Fahre ausschließlich Frauen, verdiene fair und sei Teil von FemRide und unserer Community.',
    en: 'Drive exclusively women, earn fairly and be part of FemRide and our community.'
  },
  servicesButton2: {
    de: 'Jetzt Fahrerin werden',
    en: 'Become a driver now'
  },
  servicesHeader3: {
    de: 'FÜR UNTERNEHMEN',
    en: 'FOR BUSINESSES'
  },
  servicesTitle3: {
    de: 'Flottenpartner werden',
    en: 'Become a fleet partner'
  },
  servicesDesc3: {
    de: "Maximieren Sie Ihre Flotten Auslastung und profitieren Sie von FemRide's Wachstum und attraktiven Konditionen.",
    en: "Maximize your fleet utilization and benefit from FemRide's growth and attractive conditions."
  },
  servicesButton3: {
    de: 'Jetzt Flottenpartner werden',
    en: 'Become a fleet partner now'
  },
  
  // Contact Section
  contactHeader: {
    de: 'KONTAKT',
    en: 'CONTACT'
  },
  contactTitle: {
    de: 'Interessiert an einer Zusammenarbeit mit FemRide?',
    en: 'Interested in collaborating with FemRide?'
  },
  contactText1: {
    de: 'Sie sind Flottenunternehmer und möchten Ihre Fahrzeuge über FemRide einsetzen?',
    en: 'Are you a fleet entrepreneur and want to use your vehicles through FemRide?'
  },
  contactText2: {
    de: 'Sie sind Fahrerin und möchten Teil unserer Plattform werden?',
    en: 'Are you a driver and want to become part of our platform?'
  },
  contactText3: {
    de: 'Oder Sie möchten mit uns kooperieren, weil Sie unsere Vision teilen?',
    en: 'Or would you like to cooperate with us because you share our vision?'
  },
  contactText4: {
    de: 'Dann kontaktieren Sie uns über das Formular – wir melden uns umgehend bei Ihnen!',
    en: 'Then contact us using the form – we will get back to you immediately!'
  },
  contactText5: {
    de: 'Wir freuen uns darauf, gemeinsam Mobilität sicherer und fairer zu gestalten.',
    en: 'We look forward to making mobility safer and fairer together.'
  },
  contactNameLabel: {
    de: 'Name',
    en: 'Name'
  },
  contactNamePlaceholder: {
    de: 'Ihr vollständiger Name',
    en: 'Your full name'
  },
  contactEmailLabel: {
    de: 'Email',
    en: 'Email'
  },
  contactEmailPlaceholder: {
    de: 'Ihre Email-Adresse',
    en: 'Your email address'
  },
  contactPhoneLabel: {
    de: 'Phone',
    en: 'Phone'
  },
  contactPhonePlaceholder: {
    de: 'Ihre Telefonnummer (optional)',
    en: 'Your phone number (optional)'
  },
  contactMessageLabel: {
    de: 'Message',
    en: 'Message'
  },
  contactMessagePlaceholder: {
    de: 'Ihre Nachricht an uns...',
    en: 'Your message to us...'
  },
  contactSubmitButton: {
    de: 'Absenden',
    en: 'Submit'
  },
  contactSuccessTitle: {
    de: 'Nachricht gesendet',
    en: 'Message sent'
  },
  contactSuccessDesc: {
    de: 'Vielen Dank für Ihre Nachricht. Wir werden uns umgehend bei Ihnen melden.',
    en: 'Thank you for your message. We will get back to you as soon as possible.'
  },
  contactErrorTitle: {
    de: 'Fehler beim Senden',
    en: 'Error sending message'
  },
  contactErrorDesc: {
    de: 'Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.',
    en: 'There was a problem sending your message. Please try again later.'
  },
  
  // Footer content
  footerCompany: {
    de: 'FemRide UG',
    en: 'FemRide UG'
  },
  footerAddress: {
    de: 'Adresse: Waldstraße 222A, 12527 Berlin',
    en: 'Address: Waldstraße 222A, 12527 Berlin'
  },
  footerEmail: {
    de: 'E-Mail: info@femride.de',
    en: 'Email: info@femride.de'
  },
  footerWebsite: {
    de: 'Webseite: www.femride.de',
    en: 'Website: www.femride.de'
  },
  footerCEO: {
    de: 'Vertreten durch:',
    en: 'Represented by:'
  },
  footerCEOName: {
    de: 'Aykut Atli (Geschäftsführer)',
    en: 'Aykut Atli (CEO)'
  },
  footerRegistry: {
    de: 'Handelsregister:',
    en: 'Commercial register:'
  },
  footerRegistryCourt: {
    de: 'Amtsgericht Berlin (Charlottenburg)',
    en: 'District Court Berlin (Charlottenburg)'
  },
  footerHRB: {
    de: 'HRB 272631',
    en: 'HRB 272631'
  },
  footerResponsible: {
    de: 'Verantwortlich für den Inhalt gemäß § 18 Abs. 2 MStV:',
    en: 'Responsible for the content according to § 18 Abs. 2 MStV:'
  },
  footerResponsiblePerson: {
    de: 'Aykut Atli, Waldstraße 222A, 12527 Berlin',
    en: 'Aykut Atli, Waldstraße 222A, 12527 Berlin'
  },
  
  // Our vision
  visionHeader: {
    de: 'OUR VISION',
    en: 'OUR VISION'
  },
  visionTitle: {
    de: 'Meet Our Founder',
    en: 'Meet Our Founder'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('de');

  // Translate function
  const t = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
