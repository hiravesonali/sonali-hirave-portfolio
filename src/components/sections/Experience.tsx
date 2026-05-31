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
          {/* Center rail (desktop) / left rail (mobile) */}
          <div className="absolute left-3 top-0 h-full w-0.5 bg-ink/10 sm:left-1/2 sm:-translate-x-1/2" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-3 top-0 w-0.5 origin-top bg-gradient-to-b from-peppa-deep via-coral to-grape sm:left-1/2 sm:-translate-x-1/2"
          />

          <div className="space-y-12">
            {t.experience.items.map((exp, i) => {
              const side = i % 2 === 0; // alternate sides on desktop
              return (
                <div
                  key={exp.company}
                  className={`relative sm:grid sm:grid-cols-2 sm:gap-10 ${
                    side ? '' : 'sm:[&>*:first-child]:col-start-2'
                  }`}
                >
                  {/* Node dot */}
                  <span
                    className={`absolute left-3 top-2 z-10 grid h-6 w-6 -translate-x-1/2 place-items-center rounded-full ring-4 ring-cream sm:left-1/2 ${dotColors[i % dotColors.length]}`}
                  >
                    <span className="h-2 w-2 rounded-full bg-white" />
                  </span>

                  <Reveal
                    className={`ml-8 text-left sm:ml-0 ${side ? 'sm:pr-12' : 'sm:col-start-2 sm:pl-12'}`}
                    y={32}
                  >
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 22,
                      }}
                      className="rounded-3xl bg-white/90 p-7 text-left shadow-card ring-1 ring-ink/5 backdrop-blur"
                    >
                      <span className="inline-block rounded-full bg-peppa/15 px-3 py-1 text-xs font-semibold text-peppa-deep">
                        {exp.period}
                      </span>
                      <h3 className="mt-3 font-display text-xl font-semibold text-ink">
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
                      </h3>
                      <p className="text-sm font-semibold text-coral">
                        {exp.role}
                      </p>
                      <p className="text-sm text-ink-soft">{exp.location}</p>
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
