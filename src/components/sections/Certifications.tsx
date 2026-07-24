'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageProvider';
import { SectionHeader } from '@/components/SectionHeader';
import { StaggerGroup, StaggerItem } from '@/components/motion/Reveal';

export function Certifications() {
  const { t } = useLanguage();

  return (
    <section id="certifications" className="relative py-18 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          chapter={t.certifications.chapter}
          heading={t.certifications.heading}
          intro={t.certifications.intro}
          align="center"
        />

        <StaggerGroup className="mx-auto mt-14 max-w-xl">
          {t.certifications.items.map((certification) => (
            <StaggerItem key={certification.name}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="rounded-[2rem] bg-gradient-to-br from-grape/25 to-peppa/20 p-1.5 shadow-card"
              >
                <div className="rounded-[1.6rem] bg-cream/95 p-7 sm:p-8">
                  <p className="text-sm font-semibold text-peppa-deep">
                    {certification.issuer}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-ink sm:text-3xl">
                    {certification.name}
                  </h3>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href={certification.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-peppa px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5"
                    >
                      {t.certifications.verifyLabel} ↗
                    </a>
                    <button
                      type="button"
                      disabled
                      title="Credential PDF will be added soon"
                      className="cursor-not-allowed rounded-full border border-ink/10 bg-white/70 px-5 py-2.5 text-sm font-semibold text-ink/45"
                    >
                      {t.certifications.pdfLabel}
                    </button>
                  </div>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
