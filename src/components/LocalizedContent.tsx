'use client';

import { useLanguage } from '@/i18n/LanguageProvider';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

/**
 * All locale-dependent page content. Keyed by locale so the entire
 * scroll-reveal tree re-mounts cleanly when the language switches —
 * no stale text, no sections stuck mid-animation. The Navbar stays
 * mounted (outside this key) so its entrance animation doesn't replay.
 */
export function LocalizedContent() {
  const { locale } = useLanguage();
  return (
    <div key={locale}>
      <main>
        <Hero />
        {/* <About /> */}
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
