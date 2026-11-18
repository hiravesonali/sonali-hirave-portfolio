'use client';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { MdOutlineEmail, MdOutlinePhone } from 'react-icons/md';
import { useLanguage } from '@/i18n/LanguageProvider';
import { Reveal } from '@/components/motion/Reveal';

export function Contact() {
  const { t } = useLanguage();
  const c = t.contact;

  const links = [
    {
      label: c.emailLabel,
      value: c.email,
      href: `mailto:${c.email}`,
      Icon: MdOutlineEmail,
    },
    {
      label: c.phoneLabel,
      value: c.phone,
      href: `tel:${c.phone.replace(/\s/g, '')}`,
      Icon: MdOutlinePhone,
    },
    {
      label: c.githubLabel,
      value: '@hiravesonali',
      href: c.github,
      Icon: FaGithub,
    },
    {
      label: c.linkedinLabel,
      value: 'sonali-hirave',
      href: c.linkedin,
      Icon: FaLinkedinIn,
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-line py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="bg-grid pointer-events-none absolute inset-0 rotate-180"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            <span className="text-faint">06 /</span> {c.label}
          </p>
          <h2 className="mt-4 max-w-4xl text-balance text-4xl font-medium leading-[1.05] tracking-tight text-fg sm:text-5xl lg:text-6xl">
            {c.heading}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {c.intro}
          </p>

          <a
            href={`mailto:${c.email}`}
            className="mt-9 inline-flex h-12 max-w-full items-center gap-2.5 rounded-md bg-accent px-6 text-sm font-medium text-accent-ink transition-transform hover:-translate-y-0.5 sm:text-base"
          >
            <span className="truncate">{c.email}</span>
            <span aria-hidden>→</span>
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mt-16 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {links.map((l) => {
              const external = l.href.startsWith('http');
              return (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="group flex h-full items-center gap-4 bg-bg p-5 transition-colors hover:bg-surface"
                  >
                    <span
                      aria-hidden
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-line text-lg text-muted transition-colors group-hover:border-accent/40 group-hover:text-accent"
                    >
                      <l.Icon />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-[11px] uppercase tracking-wider text-faint">
                        {l.label}
                      </span>
                      <span className="block truncate text-sm text-fg">
                        {l.value}
                      </span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
