'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageProvider';
import { AgentTrace } from '@/components/AgentTrace';
import { Counter } from '@/components/motion/Counter';

const easeOut = [0.22, 1, 0.36, 1] as const;

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: easeOut, delay },
});

export function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-40">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
      <div aria-hidden className="bg-glow pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div className="min-w-0">
          <motion.p
            {...rise(0)}
            className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/80 py-1.5 pl-3 pr-4 font-mono text-xs text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {h.status}
          </motion.p>

          <motion.p
            {...rise(0.06)}
            className="mt-8 font-mono text-sm text-muted"
          >
            {h.name} <span className="text-faint">/</span>{' '}
            <span className="text-fg">{h.role}</span>
          </motion.p>

          <motion.h1
            {...rise(0.12)}
            className="mt-4 text-balance text-[2.6rem] font-medium leading-[1.04] tracking-tight text-fg sm:text-6xl lg:text-[4.25rem]"
          >
            {h.headlineLead}{' '}
            <span className="font-serif font-normal italic text-accent">
              {h.headlineAccent}
            </span>
          </motion.h1>

          <motion.p
            {...rise(0.2)}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {h.description}
          </motion.p>

          <motion.div
            {...rise(0.28)}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-accent px-5 text-sm font-medium text-accent-ink transition-transform hover:-translate-y-0.5"
            >
              {h.ctaWork}
              <span aria-hidden>↓</span>
            </a>
            <a
              href="#contact"
              className="inline-flex h-11 items-center gap-2 rounded-md border border-line px-5 text-sm font-medium text-fg transition-colors hover:border-faint"
            >
              {h.ctaContact}
              <span aria-hidden>→</span>
            </a>
          </motion.div>

          <motion.ul
            {...rise(0.36)}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-faint"
          >
            <li>{h.location}</li>
            <li>{h.availability}</li>
          </motion.ul>
        </div>

        <motion.div
          className="min-w-0"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeOut, delay: 0.25 }}
        >
          <AgentTrace />
        </motion.div>
      </div>

      {/* Stats strip */}
      <motion.dl
        {...rise(0.45)}
        className="relative mx-auto mt-20 grid max-w-6xl grid-cols-2 border-t border-line px-6 lg:grid-cols-4"
      >
        {h.stats.map((s) => (
          <div
            key={s.label}
            className="flex flex-col-reverse gap-2 border-line py-7 pr-4 lg:border-l lg:pl-6 lg:first:border-l-0 lg:first:pl-0"
          >
            <dt className="font-mono text-xs text-faint">{s.label}</dt>
            <dd className="text-2xl font-medium tracking-tight text-fg sm:text-3xl">
              <Counter value={s.value} />
            </dd>
          </div>
        ))}
      </motion.dl>
    </section>
  );
}
