'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/i18n/LanguageProvider';
import { LogoMark } from '@/components/LogoMark';

export function Navbar() {
  const { t, locale, toggle } = useLanguage();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#capabilities', label: t.nav.capabilities },
    { href: '#experience', label: t.nav.experience },
    { href: '#projects', label: t.nav.projects },
    { href: '#background', label: t.nav.background },
  ];

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid
          ? 'border-line bg-bg/80 backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      {/* Scroll progress */}
      <motion.div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px origin-left bg-accent"
        style={{ scaleX: progress }}
      />

      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-3 text-fg">
          <LogoMark className="h-8 w-8" />
          <span className="hidden text-sm font-medium tracking-tight sm:inline">
            Sonali Hirave
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted transition-colors hover:text-fg"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggle}
            aria-label={t.nav.language}
            className="flex h-9 items-center gap-1.5 rounded-md border border-line px-2.5 font-mono text-xs transition-colors hover:border-faint"
          >
            <span className={locale === 'en' ? 'text-accent' : 'text-faint'}>
              EN
            </span>
            <span className="text-faint">/</span>
            <span className={locale === 'de' ? 'text-accent' : 'text-faint'}>
              DE
            </span>
          </button>

          <a
            href="#contact"
            className="hidden h-9 items-center rounded-md bg-fg px-3.5 text-sm font-medium text-bg transition-colors hover:bg-accent hover:text-accent-ink sm:inline-flex"
          >
            {t.nav.contact}
          </a>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={t.nav.menu}
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-md border border-line lg:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 top-0 block h-px w-4 bg-fg transition-transform ${open ? 'translate-y-1.5 rotate-45' : ''}`}
              />
              <span
                className={`absolute bottom-0 left-0 block h-px w-4 bg-fg transition-transform ${open ? '-translate-y-[5px] -rotate-45' : ''}`}
              />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-line px-6 py-3 lg:hidden">
          {[...links, { href: '#contact', label: t.nav.contact }].map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-sm text-muted transition-colors hover:text-fg"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
