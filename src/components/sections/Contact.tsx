'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { MdOutlineEmail, MdOutlinePhone } from 'react-icons/md';
import { useLanguage } from '@/i18n/LanguageProvider';
import { Reveal } from '@/components/motion/Reveal';
import { MagneticButton } from '@/components/motion/MagneticButton';

export function Contact() {
  const { t } = useLanguage();

  const links = [
    {
      label: t.contact.emailLabel,
      value: t.contact.email,
      href: `mailto:${t.contact.email}`,
      Icon: MdOutlineEmail,
    },
    {
      label: t.contact.phoneLabel,
      value: t.contact.phone,
      href: `tel:${t.contact.phone.replace(/\s/g, '')}`,
      Icon: MdOutlinePhone,
    },
    {
      label: t.contact.githubLabel,
      value: '@hiravesonali',
      href: t.contact.github,
      Icon: FaGithub,
    },
    {
      label: t.contact.linkedinLabel,
      value: 'Sonali Hirave',
      href: t.contact.linkedin,
      Icon: FaLinkedinIn,
    },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Education / Languages / Work auth */}
        <div className="mb-20 grid gap-6 lg:grid-cols-3">
          <Reveal>
            <div className="h-full rounded-3xl bg-peppa/20 p-7 shadow-card ring-1 ring-ink/5 backdrop-blur">
              <h3 className="font-display text-xl font-semibold text-ink">
                {t.education.heading}
              </h3>
              <ul className="mt-4 space-y-4">
                {t.education.items.map((e) => (
                  <li key={e.degree}>
                    <p className="text-sm font-semibold text-ink">{e.degree}</p>
                    <p className="text-sm text-ink-soft">{e.school}</p>
                    <p className="text-xs text-ink-soft/80">{e.period}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full rounded-3xl bg-sky/20 p-7 shadow-card ring-1 ring-white/40">
              <h3 className="font-display text-xl font-semibold text-ink">
                {t.education.languagesHeading}
              </h3>
              <ul className="mt-4 space-y-3">
                {t.education.languages.map((l) => (
                  <li
                    key={l.name}
                    className="flex items-center justify-between gap-2"
                  >
                    <span className="text-sm font-semibold text-ink">
                      {l.name}
                    </span>
                    <span className="text-sm text-ink-soft">{l.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="h-full rounded-3xl bg-mint/25 p-7 shadow-card ring-1 ring-white/40">
              <h3 className="font-display text-xl font-semibold text-ink">
                {t.education.workAuthHeading}
              </h3>
              <ul className="mt-4 space-y-3">
                {t.education.workAuth.map((w) => (
                  <li key={w} className="flex gap-2 text-sm text-ink/85">
                    <span aria-hidden className="text-green-700">
                      ✓
                    </span>
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Contact CTA panel */}
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-peppa via-coral to-grape p-1.5 shadow-card">
            <div className="relative overflow-hidden rounded-[2.1rem] bg-cream/95 px-8 py-14 text-center sm:px-16">
              {/* decorative blobs */}
              <div className="animate-float-slow pointer-events-none absolute -left-6 -top-6 h-28 w-28 rounded-full bg-peppa/30 blur-2xl" />
              <div className="animate-float-slower pointer-events-none absolute -bottom-8 -right-4 h-32 w-32 rounded-full bg-sky/30 blur-2xl" />

              <span className="inline-flex items-center gap-2 rounded-full bg-peppa/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-peppa-deep">
                {t.contact.chapter}
              </span>
              <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
                {t.contact.heading}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-ink-soft">
                {t.contact.intro}
              </p>

              <MagneticButton
                href={`mailto:${t.contact.email}`}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-peppa-deep px-8 py-4 text-sm font-semibold text-white shadow-soft transition-shadow hover:shadow-lg"
              >
                {t.contact.email} <span aria-hidden>→</span>
              </MagneticButton>

              <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {links.map((l) => (
                  <motion.a
                    key={l.label}
                    href={l.href}
                    target={l.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      l.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    whileHover={{ y: -4 }}
                    className="flex flex-col items-center gap-1 rounded-2xl bg-white/80 px-4 py-4 text-sm shadow-sm ring-1 ring-ink/5 transition-colors hover:bg-white"
                  >
                    <span
                      className="grid size-10 place-items-center rounded-full bg-cream text-xl text-peppa-deep ring-1 ring-ink/5"
                      aria-hidden
                    >
                      <l.Icon />
                    </span>
                    <span className="font-semibold text-ink">{l.label}</span>
                    <span className="text-xs text-ink-soft">{l.value}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
