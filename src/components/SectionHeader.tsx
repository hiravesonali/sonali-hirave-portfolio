'use client';

import { Reveal } from '@/components/motion/Reveal';

export function SectionHeader({
  index,
  label,
  heading,
  intro,
}: {
  /** Two-digit section number, e.g. "01". */
  index: string;
  label: string;
  heading: string;
  intro?: string;
}) {
  return (
    <Reveal>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        <span className="text-faint">{index} /</span> {label}
      </p>
      <h2 className="mt-4 max-w-3xl text-balance text-3xl font-medium leading-[1.1] tracking-tight text-fg sm:text-4xl lg:text-5xl">
        {heading}
      </h2>
      {intro && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {intro}
        </p>
      )}
    </Reveal>
  );
}
