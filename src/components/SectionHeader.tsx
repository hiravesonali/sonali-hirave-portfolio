"use client";

import { Reveal } from "@/components/motion/Reveal";

export function SectionHeader({
  chapter,
  heading,
  intro,
  align = "left",
}: {
  chapter: string;
  heading: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      <span className="inline-flex items-center gap-2 rounded-full bg-peppa/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-peppa-deep">
        {chapter}
      </span>
      <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
        {heading}
      </h2>
      {intro && (
        <p
          className={`mt-3 max-w-2xl text-base text-ink-soft ${align === "center" ? "mx-auto" : ""}`}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
