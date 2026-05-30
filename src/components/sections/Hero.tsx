'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageProvider';
import { MagneticButton } from '@/components/motion/MagneticButton';

const easeOut = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const { t } = useLanguage();

  const words = t.hero.tagline.split(' ');

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      {/* Floating storybook blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-float-slow absolute left-[8%] top-[18%] h-40 w-40 rounded-full bg-peppa/40 blur-2xl" />
        <div className="animate-float-slower absolute right-[10%] top-[26%] h-56 w-56 rounded-full bg-sky/40 blur-2xl" />
        <div className="animate-float-slow absolute bottom-[12%] left-[42%] h-44 w-44 rounded-full bg-mint/40 blur-2xl" />
        <div className="animate-float-slower absolute right-[28%] bottom-[20%] h-24 w-24 rounded-full bg-butter/50 blur-xl" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left: text */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-peppa-deep shadow-sm ring-1 ring-peppa/30 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
            </span>
            {t.hero.chapter}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.05 }}
            className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl"
          >
            {t.hero.name}
          </motion.h1>

          {/* Tagline — word-by-word reveal */}
          <h2 className="mt-6 max-w-xl font-display text-2xl font-medium leading-snug text-ink/90 sm:text-3xl">
            {words.map((w, i) => (
              <motion.span
                key={`${w}-${i}`}
                initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  duration: 0.5,
                  ease: easeOut,
                  delay: 0.25 + i * 0.06,
                }}
                className="mr-[0.3em] inline-block"
              >
                {w}
              </motion.span>
            ))}
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-4 flex flex-col gap-1 text-sm text-ink-soft sm:flex-row sm:items-center sm:gap-5"
          >
            <span className="inline-flex items-center gap-1 rounded-lg border border-gray-400 bg-white px-4 py-1.5 text-xs">
              {t.hero.location}
            </span>
            <span className="inline-flex items-center gap-1 rounded-lg border border-gray-400 bg-white px-4 py-1.5 text-xs">
              {t.hero.availability}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-peppa-deep px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-shadow hover:shadow-lg"
            >
              {t.hero.ctaWork}
              <span aria-hidden>↓</span>
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white/70 px-7 py-3.5 text-sm font-semibold text-ink shadow-sm ring-1 ring-ink/10 backdrop-blur transition-colors hover:bg-white"
            >
              {t.hero.ctaContact}
              <span aria-hidden>→</span>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right: portrait card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: easeOut, delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="animate-float-slow relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-peppa via-coral to-grape p-1.5 shadow-card">
            <div className="grid h-full w-full place-items-center rounded-[2.1rem] bg-cream/90 text-center">
              {/* TODO: replace with Sonali's photo —
                  drop a file at /public/sonali.jpg and swap this block for:
                  <img src="/sonali.jpg" className="h-full w-full object-cover rounded-[2.1rem]" /> */}
              <div className="px-6">
                <div className="mx-auto grid h-28 w-28 place-items-center rounded-full bg-peppa text-4xl font-display font-semibold text-white shadow-soft">
                  SH
                </div>
                <p className="mt-4 font-display text-lg font-medium text-ink">
                  Sonali Hirave
                </p>
                <p className="text-sm text-ink-soft">
                  React · Vue · Next · Nuxt
                </p>
              </div>
            </div>
          </div>
          {/* Floating sticker badges */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
            className="absolute -left-5 top-10 rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-ink shadow-card"
          >
            ⚡ 5M+ users
          </motion.div>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
            className="absolute -right-4 bottom-12 rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-ink shadow-card"
          >
            🚀 SSR + SEO
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Number.POSITIVE_INFINITY }}
          className="flex h-9 w-6 items-start justify-center rounded-full border-2 border-ink/20 p-1.5"
        >
          <span className="h-2 w-1 rounded-full bg-peppa-deep" />
        </motion.div>
      </motion.div>
    </section>
  );
}
