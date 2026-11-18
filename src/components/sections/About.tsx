'use client';

import { useLanguage } from '@/i18n/LanguageProvider';
import { SectionHeader } from '@/components/SectionHeader';
import { Reveal } from '@/components/motion/Reveal';

export function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section id="about" className="border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader index="01" label={a.label} heading={a.heading} />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_20rem] lg:gap-16">
          <Reveal className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            {a.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}

            <div className="mt-10 rounded-xl border border-line bg-surface p-5 sm:p-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {a.nowLabel}
              </p>
              <ul className="mt-4 grid gap-5 sm:grid-cols-2">
                {a.now.map((n) => (
                  <li key={n.title}>
                    <p className="text-base font-medium text-fg">{n.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {n.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mx-auto w-full max-w-xs lg:max-w-none">
            <div className="overflow-hidden rounded-xl border border-line bg-surface">
              {/* eslint-disable-next-line @next/next/no-img-element -- static export, no image optimizer */}
              <img
                src="/sonali-hirave.png"
                alt={a.photoAlt}
                width={843}
                height={1264}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover object-top grayscale transition duration-500 hover:grayscale-0"
              />
              <div className="flex items-center justify-between border-t border-line px-4 py-3 font-mono text-xs">
                <span className="text-fg">{t.hero.name}</span>
                <span className="text-faint">{t.hero.location}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
