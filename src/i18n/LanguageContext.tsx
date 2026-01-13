'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations, LANGUAGES } from './translations';

type LanguageContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: keyof typeof translations.en) => string;
    languages: typeof LANGUAGES;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'ihafidh-language';

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>('en');
    const [mounted, setMounted] = useState(false);

    // Load language from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
        if (saved && ['en', 'ta', 'ms'].includes(saved)) {
            setLanguageState(saved);
        }
        setMounted(true);
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem(STORAGE_KEY, lang);
    };

    const t = (key: keyof typeof translations.en): string => {
        return translations[language][key] || translations.en[key] || key;
    };

    // Prevent hydration mismatch by not rendering until mounted
    if (!mounted) {
        return <>{children}</>;
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, languages: LANGUAGES }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    // Return default English translations if context is not available (SSR)
    if (!context) {
        return {
            language: 'en' as Language,
            setLanguage: () => { },
            t: (key: keyof typeof translations.en): string => translations.en[key] || String(key),
            languages: LANGUAGES,
        };
    }
    return context;
}
