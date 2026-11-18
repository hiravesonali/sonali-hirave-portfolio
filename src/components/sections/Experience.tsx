'use client';

import { useLanguage } from '@/i18n/LanguageProvider';
import { SectionHeader } from '@/components/SectionHeader';
import { Reveal } from '@/components/motion/Reveal';

export function Experience() {
  const { t } = useLanguage();
  const e = t.experience;

  return (
    <section id="experience" className="border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          index="03"
          label={e.label}
          heading={e.heading}
          intro={e.intro}
        />

        <ol className="mt-14 border-t border-line">
          {e.items.map((exp, i) => (
            <li key={exp.company} className="border-b border-line">
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

                  <p className="mt-6 font-mono text-[11px] leading-relaxed text-faint">
                    {exp.stack.join(' · ')}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
