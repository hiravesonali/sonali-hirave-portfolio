'use client';

import { LogoMark } from '@/components/LogoMark';
import { useLanguage } from '@/i18n/LanguageProvider';

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 font-mono text-xs text-faint sm:flex-row">
        <div className="flex items-center gap-3">
          <LogoMark className="h-6 w-6" />
          <span suppressHydrationWarning>
            © {year} Sonali Hirave. {t.footer.rights}
          </span>
        </div>
        <p>{t.footer.built}</p>
      </div>
    </footer>
  );
}
