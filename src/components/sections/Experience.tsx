'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageProvider';
import { SectionHeader } from '@/components/SectionHeader';
import { Reveal } from '@/components/motion/Reveal';

const dotColors = ['bg-peppa-deep', 'bg-sky', 'bg-mint', 'bg-butter'];

export function Experience() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 60%'],
  });
  // The "journey line" draws itself as you scroll the timeline.
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="journey" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          chapter={t.experience.chapter}
          heading={t.experience.heading}
          intro={t.experience.intro}
          align="center"
        />

        <div ref={ref} className="relative mt-16 pl-8 sm:pl-0">
          {/* Left rail */}
          <div className="absolute left-3 top-0 h-full w-0.5 bg-ink/10 sm:left-20" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-3 top-0 w-0.5 origin-top bg-gradient-to-b from-peppa-deep via-coral to-grape sm:left-20"
          />

          <div className="space-y-12">
            {t.experience.items.map((exp, i) => (
              <div key={exp.company} className="relative">
                {/* Node dot */}
                <span
                  className={`absolute left-3 top-2 z-10 grid h-6 w-6 -translate-x-1/2 place-items-center rounded-full ring-4 ring-cream sm:left-20 ${dotColors[i % dotColors.length]}`}
                >
                  <span className="h-2 w-2 rounded-full bg-white" />
                </span>

                <Reveal className="ml-8 text-left sm:ml-36" y={32}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 22,
                    }}
                    className="rounded-3xl bg-white/90 p-7 text-left shadow-card ring-1 ring-ink/5 backdrop-blur"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <h3 className="font-display text-xl font-semibold text-ink">
                        {exp.url ? (
                          <a
                            href={exp.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline-offset-4 transition-colors hover:text-peppa-deep hover:underline"
                          >
                            {exp.company}
                          </a>
                        ) : (
                          exp.company
                        )}
                        <span className="ml-2 align-middle font-sans text-sm font-medium text-ink-soft">
                          {exp.location}
                        </span>
                      </h3>
                      <span className="inline-block rounded-full bg-peppa/15 px-3 py-1 text-xs font-semibold text-peppa-deep">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-coral">
                      {exp.role}
                    </p>
                    <ul className="mt-4 space-y-2.5 text-[0.95rem] leading-relaxed text-ink/80">
                      {exp.bullets.map((b) => (
                        <li key={b} className="flex gap-2.5">
                          <span
                            aria-hidden
                            className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-peppa-deep"
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
