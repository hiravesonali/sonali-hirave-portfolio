'use client';

import { useLanguage } from '@/i18n/LanguageProvider';
import { SectionHeader } from '@/components/SectionHeader';
import {
  Reveal,
  StaggerGroup,
  StaggerItem,
} from '@/components/motion/Reveal';

export function Capabilities() {
  const { t } = useLanguage();
  const c = t.capabilities;

  return (
    <section id="capabilities" className="border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          index="02"
          label={c.label}
          heading={c.heading}
          intro={c.intro}
        />

        {/* 1px gaps over a line-coloured background draw the cell borders. */}
        <StaggerGroup className="mt-14 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {c.items.map((item, i) => (
            <StaggerItem key={item.id} className="h-full">
              <article className="group flex h-full flex-col bg-bg p-6 transition-colors duration-300 hover:bg-surface sm:p-7">
                <p className="font-mono text-xs text-faint transition-colors group-hover:text-accent">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-5 text-lg font-medium tracking-tight text-fg">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
                <p className="mt-6 font-mono text-[11px] leading-relaxed text-faint">
                  {item.tags.join(' · ')}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* Stack */}
        <Reveal className="mt-20">
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
            {c.stackHeading}
          </h3>
          <dl className="mt-5 border-t border-line">
            {c.groups.map((group, gi) => (
              <div
                key={group.label}
                className="grid gap-3 border-b border-line py-5 sm:grid-cols-[11rem_1fr] sm:gap-6"
              >
                <dt
                  className={`text-sm font-medium ${gi === 0 ? 'text-accent' : 'text-fg'}`}
                >
                  {group.label}
                </dt>
                <dd className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={`rounded-md border px-2.5 py-1 font-mono text-xs ${
                        gi === 0
                          ? 'border-accent/25 bg-accent/5 text-fg'
                          : 'border-line text-muted'
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
