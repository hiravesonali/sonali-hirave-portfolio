"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageProvider";
import { SectionHeader } from "@/components/SectionHeader";
import { StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import type { Project } from "@/content";

const cardTints = [
  "from-peppa/30 to-coral/25",
  "from-sky/35 to-grape/20",
  "from-mint/30 to-butter/25",
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 200, damping: 18 });
  const sry = useSpring(ry, { stiffness: 200, damping: 18 });
  const rotateX = useTransform(srx, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(sry, [-0.5, 0.5], ["-7deg", "7deg"]);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    rx.set((e.clientY - r.top) / r.height - 0.5);
    ry.set((e.clientX - r.left) / r.width - 0.5);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  const Wrapper = project.url ? motion.a : motion.div;

  return (
    <StaggerItem>
      <Wrapper
        {...(project.url
          ? { href: project.url, target: "_blank", rel: "noopener noreferrer" }
          : {})}
        ref={ref as never}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX, rotateY, transformPerspective: 1000 }}
        className={`group block h-full rounded-[2rem] bg-gradient-to-br ${cardTints[index % cardTints.length]} p-1.5 shadow-card`}
      >
        <div className="flex h-full flex-col rounded-[1.6rem] bg-cream/95 p-7">
          <div className="flex items-start justify-between gap-3">
            <span className="font-display text-sm font-semibold text-peppa-deep">
              {project.year}
            </span>
            {project.url && (
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-ink shadow-sm transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                ↗
              </span>
            )}
          </div>

          <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-ink">
            {project.name}
          </h3>

          <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-full bg-white/80 px-2.5 py-1 text-xs font-medium text-ink shadow-sm ring-1 ring-ink/5"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </Wrapper>
    </StaggerItem>
  );
}

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          chapter={t.projects.chapter}
          heading={t.projects.heading}
          intro={t.projects.intro}
          align="center"
        />

        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.projects.items.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
