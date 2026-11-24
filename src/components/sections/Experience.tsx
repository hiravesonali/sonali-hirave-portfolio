'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageProvider';
import { SectionHeader } from '@/components/SectionHeader';
import { Reveal } from '@/components/motion/Reveal';

// Horizontal position of the timeline rail on large screens: it sits in the
// middle of the gap between the date column (14rem) and the content (2.5rem gap).
const RAIL = 'lg:left-[15.25rem]';

export function Experience() {
  const { t } = useLanguage();
  const e = t.experience;

  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ['start 65%', 'end 65%'],
  });
  // The rail fills in as the list scrolls past the reading line.
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="experience" className="border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          index="03"
          label={e.label}
          heading={e.heading}
          intro={e.intro}
        />

        <ol ref={listRef} className="relative mt-14">
          <div
            aria-hidden
            className={`absolute bottom-0 top-0 hidden w-px bg-line lg:block ${RAIL}`}
          />
          <motion.div
            aria-hidden
            style={{ scaleY: fill }}
            className={`absolute bottom-0 top-0 hidden w-px origin-top bg-gradient-to-b from-accent to-accent-2 lg:block ${RAIL}`}
          />

          {e.items.map((exp, i) => (
            <li
              key={exp.company}
              className="relative border-t border-line lg:border-0"
            >
              <span
                aria-hidden
                className={`absolute top-[2.75rem] hidden h-2.5 w-2.5 -translate-x-1/2 rounded-full border bg-bg lg:block ${RAIL} ${
                  i === 0
                    ? 'border-accent shadow-[0_0_12px] shadow-accent/70'
                    : 'border-faint'
                }`}
              />

              <Reveal className="grid gap-4 py-10 lg:grid-cols-[14rem_1fr] lg:gap-10">
                <div className="font-mono text-xs leading-relaxed">
                  <p className={i === 0 ? 'text-accent' : 'text-muted'}>
                    {exp.period}
                  </p>
                  <p className="mt-1 text-faint">{exp.location}</p>
                </div>

                <div>
                  <h3 className="text-xl font-medium tracking-tight text-fg">
                    {exp.role}
                  </h3>
                  <p className="mt-1 text-base text-muted">
                    {exp.url ? (
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-line underline-offset-4 transition-colors hover:text-fg hover:decoration-accent"
                      >
                        {exp.company}
                        <span aria-hidden> ↗</span>
                      </a>
                    ) : (
                      exp.company
                    )}
                  </p>

                  <ul className="mt-5 max-w-3xl space-y-2.5 text-[0.95rem] leading-relaxed text-muted">
                    {exp.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span
                          aria-hidden
                          className="mt-[0.7em] h-px w-3 shrink-0 bg-faint"
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-6 flex flex-wrap gap-1.5">
                    {exp.stack.map((s) => (
                      <li
                        key={s}
                        className="rounded border border-line px-2 py-0.5 font-mono text-[11px] text-faint"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
