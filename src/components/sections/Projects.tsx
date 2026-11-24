'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageProvider';
import { SectionHeader } from '@/components/SectionHeader';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/motion/Reveal';
import { ProjectVisual } from '@/components/ProjectVisual';
import { trackPointer } from '@/components/fx/spotlight';
import type { FeatureStatus, Project } from '@/content';

const statusStyles: Record<FeatureStatus, string> = {
  live: 'border-accent/30 bg-accent/10 text-accent',
  building: 'border-line bg-raised text-fg',
  roadmap: 'border-line border-dashed text-faint',
};

function ProjectCard({
  project,
  labels,
}: {
  project: Project;
  labels: { visit: string; demo: string; code: string };
}) {
  const isAi = project.kind === 'AI';
  const links = [
    project.url && {
      href: project.url,
      label: project.repoUrl || isAi ? labels.demo : labels.visit,
    },
    project.repoUrl && { href: project.repoUrl, label: labels.code },
  ].filter(Boolean) as { href: string; label: string }[];

  return (
    <motion.article
      onMouseMove={trackPointer}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className={`spotlight flex h-full flex-col rounded-xl border bg-surface p-6 transition-colors duration-300 sm:p-7 ${
        isAi
          ? 'border-accent/30 hover:border-accent/60'
          : 'border-line hover:border-faint'
      }`}
    >
      {project.visual && <ProjectVisual kind={project.visual} />}

      <p className="flex items-center gap-2.5 font-mono text-xs text-faint">
        <span
          className={
            isAi
              ? 'rounded border border-accent/30 bg-accent/10 px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-accent'
              : ''
          }
        >
          {project.kind}
        </span>
        <span>{isAi ? project.year : `· ${project.year}`}</span>
      </p>
      <h4 className="mt-5 text-lg font-medium leading-snug tracking-tight text-fg">
        {project.name}
      </h4>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>
      <p className="mt-6 font-mono text-[11px] leading-relaxed text-faint">
        {project.stack.join(' · ')}
      </p>
      {links.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2.5 border-t border-line pt-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex h-9 items-center gap-1.5 rounded-md border border-line px-3 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent"
            >
              {l.label}{' '}
              <span
                aria-hidden
                className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
              >
                ↗
              </span>
            </a>
          ))}
        </div>
      )}
    </motion.article>
  );
}

export function Projects() {
  const { t } = useLanguage();
  const p = t.projects;
  const f = p.featured;

  return (
    <section id="projects" className="border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          index="04"
          label={p.label}
          heading={p.heading}
          intro={p.intro}
        />

        {/* Featured case study */}
        <Reveal className="mt-14">
          <article
            onMouseMove={trackPointer}
            className="spotlight border-beam grid overflow-hidden rounded-xl border border-line bg-surface lg:grid-cols-2"
          >
            <div className="flex flex-col p-6 sm:p-9">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {p.featuredLabel}
              </p>
              <h3 className="mt-5 text-3xl font-medium tracking-tight text-fg sm:text-4xl">
                {f.name}
              </h3>
              <p className="mt-2 text-base text-fg/80">{f.tagline}</p>
              <p className="mt-1 font-mono text-xs text-faint">{f.year}</p>

              <p className="mt-6 flex-1 text-[0.95rem] leading-relaxed text-muted">
                {f.description}
              </p>

              <p className="mt-6 font-mono text-[11px] leading-relaxed text-faint">
                {f.stack.join(' · ')}
              </p>

              <a
                href={f.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link mt-7 inline-flex h-10 w-fit items-center gap-2 rounded-md border border-line px-4 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent"
              >
                {p.visitLabel} doratics.com{' '}
                <span
                  aria-hidden
                  className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                >
                  ↗
                </span>
              </a>
            </div>

            <div className="border-t border-line bg-bg/60 p-6 sm:p-9 lg:border-l lg:border-t-0">
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
                {f.featuresHeading}
              </h4>
              <StaggerGroup className="mt-4 divide-y divide-line">
                {f.features.map((feat) => (
                  <StaggerItem
                    key={feat.title}
                    className="flex items-start justify-between gap-4 py-3.5"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-fg">
                        {feat.title}
                      </p>
                      <p className="mt-0.5 text-sm leading-relaxed text-muted">
                        {feat.detail}
                      </p>
                    </div>
                    <span
                      className={`mt-0.5 inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${statusStyles[feat.status]}`}
                    >
                      {feat.status === 'live' && (
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                        </span>
                      )}
                      {p.statusLabels[feat.status]}
                    </span>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </article>
        </Reveal>

        {/* More projects */}
        <Reveal className="mt-16">
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
            {p.moreHeading}
          </h3>
        </Reveal>
        <StaggerGroup className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {p.items.map((project) => (
            <StaggerItem
              key={project.name}
              // Wide screens: AI projects two per row, web projects three per row.
              className={`h-full ${project.kind === 'AI' ? 'lg:col-span-3' : 'lg:col-span-2'}`}
            >
              <ProjectCard
                project={project}
                labels={{
                  visit: p.visitLabel,
                  demo: p.demoLabel,
                  code: p.codeLabel,
                }}
              />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
