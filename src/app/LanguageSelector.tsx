'use client';

import { useState, useRef, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function LanguageSelector() {
    const { language, setLanguage, languages } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const currentLang = languages.find(l => l.code === language);

    // Check if mobile
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div ref={dropdownRef} style={{ position: 'relative' }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    padding: isMobile ? '0.4rem 0.5rem' : '0.5rem 0.75rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    color: '#fff',
                    cursor: 'pointer',
                    fontSize: isMobile ? '0.75rem' : '0.85rem',
                    fontWeight: 500,
                    transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                }}
            >
                <Globe size={isMobile ? 14 : 16} />
                <span>{isMobile ? currentLang?.shortLabel : currentLang?.nativeLabel}</span>
            </button>

            {isOpen && (
                <div
                    style={{
                        position: 'absolute',
                        top: 'calc(100% + 8px)',
                        right: 0,
                        background: 'rgba(15, 23, 42, 0.98)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)',
                        zIndex: 1000,
                        minWidth: '120px',
                    }}
                >
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => {
                                setLanguage(lang.code);
                                setIsOpen(false);
                            }}
                            style={{
                                display: 'block',
                                width: '100%',
                                padding: '0.75rem 1rem',
                                background: language === lang.code ? 'rgba(16, 185, 129, 0.2)' : 'transparent',
                                border: 'none',
                                color: language === lang.code ? 'var(--primary)' : '#fff',
                                cursor: 'pointer',
                                fontSize: '0.9rem',
                                fontWeight: language === lang.code ? 600 : 400,
                                textAlign: 'left',
                                transition: 'all 0.2s ease',
                            }}
                            onMouseEnter={(e) => {
                                if (language !== lang.code) {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (language !== lang.code) {
                                    e.currentTarget.style.background = 'transparent';
                                }
                            }}
                        >
                            {lang.nativeLabel}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
