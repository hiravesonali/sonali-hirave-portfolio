'use client';

import type { ReactNode } from 'react';
import { useLanguage } from '@/i18n/LanguageProvider';
import { SectionHeader } from '@/components/SectionHeader';
import { StaggerGroup, StaggerItem } from '@/components/motion/Reveal';

function Panel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="h-full bg-bg p-6 sm:p-8">
      <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
        {title}
      </h3>
      <div className="mt-5">{children}</div>
    </div>
  );
}

export function Background() {
  const { t } = useLanguage();
  const b = t.background;

  return (
    <section id="background" className="border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader index="05" label={b.label} heading={b.heading} />

        <StaggerGroup className="mt-14 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2">
          <StaggerItem className="h-full">
            <Panel title={b.educationHeading}>
              <ul className="space-y-5">
                {b.education.map((e) => (
                  <li key={e.degree}>
                    <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-base font-medium text-fg">
                      {e.degree}
                      {e.current && (
                        <span className="rounded border border-accent/30 bg-accent/10 px-1.5 py-0.5 font-mono text-[10px] font-normal uppercase tracking-wider text-accent">
                          {b.currentLabel}
                        </span>
                      )}
                    </p>
                    <p className="mt-0.5 text-sm text-muted">{e.school}</p>
                    <p className="mt-0.5 font-mono text-xs text-faint">
                      {e.period}
                    </p>
                  </li>
                ))}
              </ul>
            </Panel>
          </StaggerItem>

          <StaggerItem className="h-full">
            <Panel title={b.certificationsHeading}>
              <ul className="space-y-5">
                {b.certifications.map((c) => (
                  <li key={c.name}>
                    <p className="text-base font-medium text-fg">{c.name}</p>
                    <p className="mt-0.5 text-sm text-muted">{c.issuer}</p>
                    <a
                      href={c.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 font-mono text-xs text-accent underline-offset-4 hover:underline"
                    >
                      {b.verifyLabel} <span aria-hidden>↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </Panel>
          </StaggerItem>

          <StaggerItem className="h-full">
            <Panel title={b.languagesHeading}>
              <ul className="divide-y divide-line">
                {b.languages.map((l) => (
                  <li
                    key={l.name}
                    className="flex items-baseline justify-between gap-4 py-2.5 first:pt-0 last:pb-0"
                  >
                    <span className="text-base font-medium text-fg">
                      {l.name}
                    </span>
                    <span className="text-right text-sm text-muted">
                      {l.level}
                    </span>
                  </li>
                ))}
              </ul>
            </Panel>
          </StaggerItem>

          <StaggerItem className="h-full">
            <Panel title={b.workAuthHeading}>
              <ul className="space-y-3">
                {b.workAuth.map((w) => (
                  <li key={w} className="flex gap-3 text-base text-fg">
                    <svg
                      viewBox="0 0 16 16"
                      className="mt-1 h-4 w-4 shrink-0 text-accent"
                      aria-hidden
                    >
                      <path
                        d="M3.5 8.5l3 3 6-7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </Panel>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
}
