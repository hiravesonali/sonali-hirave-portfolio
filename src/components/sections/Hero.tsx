"use client";

import type { MouseEvent } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Counter } from "@/components/motion/Counter";
import { ParticleField } from "@/components/fx/ParticleField";
import { Typewriter } from "@/components/fx/Typewriter";
import { Marquee } from "@/components/fx/Marquee";

const easeOut = [0.22, 1, 0.36, 1] as const;

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: easeOut, delay },
});

/** Leans its children a few degrees towards the pointer. */
function Tilt({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 140, damping: 18 });
  const sy = useSpring(py, { stiffness: 140, damping: 18 });
  const rotateY = useTransform(sx, [-0.5, 0.5], ["-5deg", "5deg"]);
  const rotateX = useTransform(sy, [-0.5, 0.5], ["4deg", "-4deg"]);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ perspective: 1200 }}
    >
      <motion.div style={{ rotateX, rotateY }}>{children}</motion.div>
    </div>
  );
}

function Portrait() {
  const { t } = useLanguage();

  return (
    <div className="relative mx-auto w-full max-w-[22rem]">
      <div
        aria-hidden
        className="absolute -inset-8 rounded-full bg-gradient-to-br from-accent/25 to-accent-2/20 blur-3xl"
      />

      <div className="border-beam relative overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl shadow-black/60">
        {/* eslint-disable-next-line @next/next/no-img-element -- static export, no image optimizer */}
        <img
          src="/sonali-hirave.png"
          alt={t.about.photoAlt}
          width={843}
          height={1264}
          fetchPriority="high"
          className="aspect-[4/5] w-full object-cover object-top"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-bg via-bg/70 to-transparent"
        />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 font-mono text-xs">
          <div>
            <p className="text-sm text-fg">{t.hero.name}</p>
            <p className="mt-0.5 text-muted">{t.hero.role}</p>
          </div>
          <p className="flex shrink-0 items-center gap-1.5 text-faint">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {t.hero.location}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const { t } = useLanguage();
  const h = t.hero;
  const stack = [...new Set(t.capabilities.groups.flatMap((g) => g.items))];

  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-40">
      <div
        aria-hidden
        className="bg-grid pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden
        className="bg-glow pointer-events-none absolute inset-0"
      />
      <ParticleField className="mask-fade-b pointer-events-none absolute inset-0 h-full w-full" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div className="min-w-0">
          <motion.p
            {...rise(0)}
            className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/80 py-1.5 pl-3 pr-4 font-mono text-xs text-muted backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {h.status}
          </motion.p>

          <motion.p
            {...rise(0.06)}
            className="mt-8 font-mono text-sm text-muted"
          >
            {h.name} <span className="text-faint">/</span>{" "}
            <span className="text-fg">{h.role}</span>
          </motion.p>

          <motion.h1
            {...rise(0.12)}
            className="mt-4 text-balance text-[2.6rem] font-medium leading-[1.04] tracking-tight text-fg sm:text-6xl lg:text-[4.25rem]"
          >
            {h.headlineLead}{" "}
            <span className="text-gradient font-serif font-normal italic">
              {h.headlineAccent}
            </span>
          </motion.h1>

          <motion.p
            {...rise(0.18)}
            className="mt-6 min-h-[1.5em] font-mono text-sm sm:text-base"
          >
            <span className="text-faint">→ {h.rotatingPrefix}</span>{" "}
            <span className="text-accent">
              <Typewriter words={h.rotating} />
            </span>
          </motion.p>

          <motion.p
            {...rise(0.24)}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {h.description}
          </motion.p>

          <motion.div
            {...rise(0.3)}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex h-11 items-center gap-2 rounded-md bg-gradient-to-r from-accent to-accent-2 px-5 text-sm font-medium text-accent-ink shadow-[0_0_28px_-6px] shadow-accent/50 transition-all hover:-translate-y-0.5 hover:shadow-accent/80"
            >
              {h.ctaWork}
              <span
                aria-hidden
                className="transition-transform group-hover:translate-y-0.5"
              >
                ↓
              </span>
            </a>
            <a
              href="#contact"
              className="group inline-flex h-11 items-center gap-2 rounded-md border border-line bg-bg/60 px-5 text-sm font-medium text-fg backdrop-blur transition-colors hover:border-accent/60"
            >
              {h.ctaContact}
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </a>
          </motion.div>

          <motion.ul
            {...rise(0.36)}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-faint"
          >
            <li>{h.location}</li>
            <li>{h.availability}</li>
          </motion.ul>
        </div>

        <motion.div
          className="min-w-0"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeOut, delay: 0.25 }}
        >
          <Tilt>
            <Portrait />
          </Tilt>
        </motion.div>
      </div>

      {/* Stats strip */}
      <motion.dl
        {...rise(0.45)}
        className="relative mx-auto mt-20 grid max-w-6xl grid-cols-2 border-t border-line px-6 lg:grid-cols-4"
      >
        {h.stats.map((s) => (
          <div
            key={s.label}
            className="flex flex-col-reverse gap-2 border-line py-7 pr-4 lg:border-l lg:pl-6 lg:first:border-l-0 lg:first:pl-0"
          >
            <dt className="font-mono text-xs text-faint">{s.label}</dt>
            <dd className="text-2xl font-medium tracking-tight text-fg sm:text-3xl">
              <Counter value={s.value} />
            </dd>
          </div>
        ))}
      </motion.dl>

      <div className="relative">
        <Marquee items={stack} />
      </div>
    </section>
  );
}
