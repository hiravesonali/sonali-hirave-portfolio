"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageProvider";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { Counter } from "@/components/motion/Counter";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="story" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          chapter={t.about.chapter}
          heading={t.about.heading}
          align="center"
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          {/* Story paragraphs */}
          <StaggerGroup className="space-y-5">
            {t.about.paragraphs.map((p, i) => (
              <StaggerItem key={p.slice(0, 24)}>
                <p className="text-lg leading-relaxed text-ink/85">
                  {i === 0 ? (
                    <span className="float-left mr-3 mt-1 font-display text-5xl font-semibold leading-none text-peppa-deep">
                      {p.charAt(0)}
                    </span>
                  ) : null}
                  {i === 0 ? p.slice(1) : p}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>

          {/* Stat cards */}
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {t.about.facts.map((f, i) => (
                <motion.div
                  key={f.label}
                  whileHover={{ y: -6, rotate: i % 2 ? 1.5 : -1.5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`rounded-3xl p-6 shadow-card ring-1 ring-ink/5 ${
                    ["bg-peppa/20", "bg-sky/25", "bg-mint/25", "bg-butter/30"][i % 4]
                  }`}
                >
                  <p className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                    <Counter value={f.value} />
                  </p>
                  <p className="mt-1 text-sm font-medium text-ink-soft">
                    {f.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
