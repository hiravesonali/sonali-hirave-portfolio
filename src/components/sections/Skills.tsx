'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageProvider';
import { SectionHeader } from '@/components/SectionHeader';
import { StaggerGroup, StaggerItem } from '@/components/motion/Reveal';

const groupTints = [
  'from-peppa/25 to-coral/20',
  'from-sky/30 to-mint/20',
  'from-mint/25 to-sky/15',
  'from-butter/35 to-coral/15',
  'from-grape/25 to-peppa/15',
];

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="relative py-18 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          chapter={t.skills.chapter}
          heading={t.skills.heading}
          intro={t.skills.intro}
          align="center"
        />

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.skills.groups.map((group, gi) => (
            <StaggerItem key={group.label}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className={`h-full rounded-3xl bg-gradient-to-br ${groupTints[gi % groupTints.length]} p-6 shadow-card ring-1 ring-white/40`}
              >
                <h3 className="font-display text-xl font-semibold text-ink">
                  {group.label}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ scale: 1.08 }}
                      className="cursor-default rounded-full bg-white/80 px-3 py-1.5 text-sm font-medium text-ink shadow-sm ring-1 ring-ink/5 backdrop-blur"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
