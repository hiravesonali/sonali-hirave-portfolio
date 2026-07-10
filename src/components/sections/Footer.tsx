"use client";

import { LogoMark } from "@/components/LogoMark";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Footer() {
  const { t } = useLanguage();
  const year = "2026";

  return (
    <footer className="border-t border-ink/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-ink-soft sm:flex-row">
        <div className="flex items-center gap-2">
          <LogoMark idPrefix="footer-logo" className="h-8 w-8" />
          <span>
            © {year} Sonali Hirave. {t.footer.rights}
          </span>
        </div>
        <p>{t.footer.built}</p>
      </div>
    </footer>
  );
}
