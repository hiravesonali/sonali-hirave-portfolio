"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { content, type ContentShape, type Locale } from "@/content";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  toggle: () => void;
  t: ContentShape;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "sh-locale";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  // Hydrate from localStorage / browser language on mount.
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored === "en" || stored === "de") {
      setLocaleState(stored);
      return;
    }
    if (navigator.language?.toLowerCase().startsWith("de")) {
      setLocaleState("de");
    }
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
    document.documentElement.lang = l;
  }, []);

  const toggle = useCallback(() => {
    setLocale(locale === "en" ? "de" : "en");
  }, [locale, setLocale]);

  return (
    <LanguageContext.Provider
      value={{ locale, setLocale, toggle, t: content[locale] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
