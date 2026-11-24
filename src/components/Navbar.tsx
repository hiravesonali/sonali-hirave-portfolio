'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/i18n/LanguageProvider';
import { LogoMark } from '@/components/LogoMark';

const SECTION_IDS = [
  'about',
  'capabilities',
  'experience',
  'projects',
  'background',
] as const;

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
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the section currently crossing the middle of the viewport.
  // Re-runs on locale change because the sections re-mount.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
          else setActive((cur) => (cur === entry.target.id ? null : cur));
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    }
    return () => io.disconnect();
  }, [locale]);

  const links = SECTION_IDS.map((id) => ({
    id,
    href: `#${id}`,
    label: t.nav[id],
  }));

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
        className="absolute inset-x-0 top-0 h-0.5 origin-left bg-gradient-to-r from-accent to-accent-2"
        style={{ scaleX: progress }}
      />

      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="group flex items-center gap-3 text-fg">
          <LogoMark className="h-8 w-8 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105" />
          <span className="hidden text-sm font-medium tracking-tight sm:inline">
            Sonali Hirave
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative block rounded-md px-3 py-1.5 text-sm transition-colors ${
                    isActive ? 'text-fg' : 'text-muted hover:text-fg'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-md border border-line bg-raised"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{l.label}</span>
                </a>
              </li>
            );
          })}
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
