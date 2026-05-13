import React, { createContext, useState, useContext, useEffect } from 'react';
import type { ReactNode } from 'react';
import { en } from '../locales/en';
import { zh } from '../locales/zh';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: typeof en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// 从 URL 获取 lang 参数
const getLangFromUrl = (): string => {
  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    if (langParam === 'cn' || langParam === 'CN') {
      return 'zh';
    } else if (langParam === 'en') {
      return 'en';
    }
  }
  return 'en';
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState(getLangFromUrl);

  // 监听 URL 参数变化，自动切换语言
  useEffect(() => {
    const handlePopState = () => {
      const newLang = getLangFromUrl();
      if (newLang !== language) {
        setLanguage(newLang);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [language]);

  const t = language === 'en' ? en : zh;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
