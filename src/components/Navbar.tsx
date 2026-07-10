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
    { href: '#home', label: t.nav.home },
    { href: '#journey', label: t.nav.experience },
    { href: '#skills', label: t.nav.skills },
    { href: '#work', label: t.nav.projects },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <>
      {/* Top scroll-progress bar — the "journey line" */}
      <motion.div
        className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-gradient-to-r from-peppa-deep via-coral to-grape"
        style={{ scaleX: progress }}
      />

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-2' : 'py-4'
        }`}
      >
        <nav
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 sm:px-6 ${
            scrolled
              ? 'mx-3 bg-white/70 shadow-soft backdrop-blur-xl sm:mx-auto'
              : 'bg-transparent'
          }`}
        >
          <a
            href="#home"
            className="group flex items-center gap-2 font-display text-lg font-semibold text-ink"
          >
            <LogoMark
              idPrefix="navbar-logo"
              className="h-9 w-9 drop-shadow-sm transition-transform group-hover:rotate-12"
            />
            <span className="hidden sm:inline">Sonali Hirave</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-peppa/15 hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            {/* Language toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle language"
              className="relative flex h-9 items-center gap-1 rounded-full bg-white/70 p-1 text-xs font-semibold shadow-sm ring-1 ring-ink/5 backdrop-blur"
            >
              {(['en', 'de'] as const).map((l) => (
                <span
                  key={l}
                  className={`relative z-10 grid h-7 w-8 place-items-center rounded-full uppercase transition-colors ${
                    locale === l ? 'text-white' : 'text-ink-soft'
                  }`}
                >
                  {l}
                </span>
              ))}
              <motion.span
                layout
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                className="absolute z-0 h-7 w-8 rounded-full bg-peppa-deep"
                style={{ left: locale === 'en' ? 4 : 36 }}
              />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
              className="grid h-9 w-9 place-items-center rounded-full bg-white/70 shadow-sm ring-1 ring-ink/5 lg:hidden"
            >
              <div className="space-y-1">
                <span
                  className={`block h-0.5 w-4 bg-ink transition-transform ${open ? 'translate-y-1.5 rotate-45' : ''}`}
                />
                <span
                  className={`block h-0.5 w-4 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`}
                />
                <span
                  className={`block h-0.5 w-4 bg-ink transition-transform ${open ? '-translate-y-1.5 -rotate-45' : ''}`}
                />
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile dropdown */}
        <motion.div
          initial={false}
          animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
          className="mx-3 overflow-hidden lg:hidden"
        >
          <ul className="mt-2 space-y-1 rounded-3xl bg-white/80 p-3 shadow-soft backdrop-blur-xl">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-2.5 text-sm font-medium text-ink-soft transition-colors hover:bg-peppa/15 hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.header>
    </>
  );
}
