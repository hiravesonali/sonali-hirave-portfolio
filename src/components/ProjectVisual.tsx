'use client';

import { motion } from 'framer-motion';
import type { ProjectVisualKind } from '@/content';

const easeOut = [0.22, 1, 0.36, 1] as const;

/** Ankommen: measured correctness, naive RAG baseline vs the final system. */
function EvalBars() {
  const rows = [
    { label: 'naive RAG', value: 0.86, accent: false },
    { label: 'this system', value: 0.96, accent: true },
  ];
  return (
    <div className="space-y-2.5">
      <p className="flex items-center justify-between text-faint">
        <span>eval · correctness</span>
        <span>32-question holdout</span>
      </p>
      {rows.map((r, i) => (
        <div key={r.label} className="grid grid-cols-[5.5rem_1fr_2.2rem] items-center gap-3">
          <span className={r.accent ? 'text-fg' : 'text-faint'}>{r.label}</span>
          <span className="h-1.5 overflow-hidden rounded-full bg-line">
            <motion.span
              className={`block h-full origin-left rounded-full ${
                r.accent
                  ? 'bg-gradient-to-r from-accent to-accent-2'
                  : 'bg-faint'
              }`}
              style={{ width: `${r.value * 100}%` }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1.1, ease: easeOut, delay: 0.2 + i * 0.2 }}
            />
          </span>
          <span className={`text-right ${r.accent ? 'text-accent' : 'text-faint'}`}>
            {r.value.toFixed(2)}
          </span>
        </div>
      ))}
    </div>
  );
}

/** Hoot: every prompt passes three guards around the model call. */
function GuardPipeline() {
  const steps = ['InputGuard', 'LLMGuard', 'model', 'OutputGuard'];
  return (
    <div className="space-y-3">
      <p className="text-faint">guard pipeline · every request</p>
      <ol className="flex flex-wrap items-center gap-y-2">
        {steps.map((s, i) => (
          <li key={s} className="flex items-center">
            {i > 0 && <span aria-hidden className="mx-1.5 h-px w-3 bg-line sm:w-5" />}
            <motion.span
              className="rounded border px-2 py-1"
              initial={{ borderColor: 'rgb(35 39 43)', color: 'rgb(112 118 125)' }}
              whileInView={{
                borderColor: 'rgb(200 245 96 / 0.4)',
                color: s === 'model' ? 'rgb(237 238 240)' : 'rgb(200 245 96)',
              }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.35 }}
            >
              {s !== 'model' && <span aria-hidden>✓ </span>}
              {s}
            </motion.span>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Small animated, code-style illustration shown at the top of an AI project card. */
export function ProjectVisual({ kind }: { kind: ProjectVisualKind }) {
  return (
    <div
      aria-hidden
      className="mb-6 rounded-lg border border-line bg-bg/70 p-4 font-mono text-[11px] leading-none"
    >
      {kind === 'eval-bars' ? <EvalBars /> : <GuardPipeline />}
    </div>
  );
}
