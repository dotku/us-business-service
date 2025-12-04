'use client';

import React, { createContext, useContext } from 'react';
import { useRouter, usePathname } from 'next/navigation';

type Language = 'zh' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({
  children,
  lang
}: {
  children: React.ReactNode;
  lang: Language;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const setLanguage = (newLang: Language) => {
    // Get the current path without the language prefix
    const segments = pathname.split('/').filter(Boolean);
    const currentLang = segments[0];

    // Remove current language from path
    const pathWithoutLang = segments.slice(1).join('/');

    // Navigate to new language path
    const newPath = `/${newLang}${pathWithoutLang ? `/${pathWithoutLang}` : ''}`;
    router.push(newPath);
  };

  const t = (key: string) => {
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language: lang, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
