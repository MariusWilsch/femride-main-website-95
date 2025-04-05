
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'de' | 'en';
type Translations = Record<string, Record<Language, string>>;

// Translations for different components
export const translations: Translations = {
  navSupport: {
    de: 'Support',
    en: 'Support'
  },
  navRegister: {
    de: 'Registrieren',
    en: 'Register'
  },
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
