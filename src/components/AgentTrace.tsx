'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageProvider';

const STEP_MS = 1400;
const HOLD_MS = 6000;

type StepState = 'pending' | 'running' | 'done';

function StepIcon({ state }: { state: StepState }) {
  if (state === 'done') {
    return (
      <svg viewBox="0 0 16 16" className="h-4 w-4 text-accent" aria-hidden>
        <path
          d="M3.5 8.5l3 3 6-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (state === 'running') {
    return (
      <span
        aria-hidden
        className="block h-3.5 w-3.5 animate-spin rounded-full border-[1.5px] border-accent/25 border-t-accent"
      />
    );
  }
  return (
    <span aria-hidden className="block h-1.5 w-1.5 rounded-full bg-line" />
  );
}

/**
 * Hero visual: an illustrative run of an LLM content pipeline, stepping
 * through retrieve → generate → structure → evaluate → human approval.
 * Purely decorative animation; all copy comes from the content store.
 */
export function AgentTrace() {
  const { t } = useLanguage();
  const tr = t.trace;
  const total = tr.steps.length;

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '-80px' });
  const reduce = useReducedMotion();

  // `phase` = index of the step currently running; `total` = run finished.
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (reduce || !inView) return;
    const finished = phase >= total;
    const id = window.setTimeout(
      () => setPhase(finished ? 0 : phase + 1),
      finished ? HOLD_MS : STEP_MS,
    );
    return () => window.clearTimeout(id);
  }, [phase, inView, reduce, total]);

  const current = reduce ? total : phase;
  const finished = current >= total;

  return (
    <div ref={ref} className="w-full">
      <div className="border-beam overflow-hidden rounded-xl border border-line bg-surface shadow-2xl shadow-black/50">
        {/* Window bar */}
        <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3">
          <div className="flex min-w-0 items-center gap-3">
            <span aria-hidden className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
            </span>
            <span className="truncate font-mono text-xs text-muted">
              {tr.title}
            </span>
          </div>
          <span className="shrink-0 rounded border border-line px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-faint">
            {tr.badge}
          </span>
        </div>

        <div className="space-y-5 p-4 sm:p-5">
          {/* Task */}
          <div className="font-mono text-[13px] leading-relaxed">
            <span className="text-faint">{tr.promptLabel} › </span>
            <span className="text-fg">{tr.prompt}</span>
            <span
              aria-hidden
              className="animate-caret ml-0.5 inline-block h-3.5 w-[7px] translate-y-0.5 bg-accent"
            />
          </div>

          {/* Steps */}
          <ol className="space-y-1">
            {tr.steps.map((step, i) => {
              const state: StepState =
                i < current ? 'done' : i === current ? 'running' : 'pending';
              const isLast = i === total - 1;
              return (
                <li
                  key={step.tool}
                  className={`grid grid-cols-[1.25rem_1fr] items-start gap-x-3 rounded-md px-2 py-2 transition-colors duration-300 ${
                    state === 'running' ? 'bg-raised' : ''
                  } ${state === 'pending' ? 'opacity-45' : ''}`}
                >
                  <span className="mt-0.5 grid h-4 w-4 place-items-center">
                    <StepIcon state={state} />
                  </span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-0.5">
                      <span className="font-mono text-xs text-accent">
                        {step.tool}()
                      </span>
                      <span className="text-sm text-fg">{step.label}</span>
                    </div>
                    <p className="mt-0.5 font-mono text-[11px] text-faint">
                      {step.detail}
                    </p>
                    {isLast && state !== 'pending' && (
                      <div className="mt-2 flex flex-wrap items-center gap-2 font-mono text-[11px]">
                        {state === 'running' ? (
                          <>
                            <span className="text-muted">{tr.awaiting}</span>
                            <span className="rounded bg-accent px-2 py-0.5 font-medium text-accent-ink">
                              {tr.approve}
                            </span>
                            <span className="rounded border border-line px-2 py-0.5 text-muted">
                              {tr.edit}
                            </span>
                          </>
                        ) : (
                          <span className="rounded border border-accent/30 bg-accent/10 px-2 py-0.5 text-accent">
                            {tr.approved}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>

          {/* Output */}
          <div
            className={`rounded-md border border-line bg-bg p-3 font-mono text-[11px] leading-relaxed transition-opacity duration-500 ${
              finished ? 'opacity-100' : 'opacity-30'
            }`}
          >
            <p className="mb-1 text-faint">{tr.outputLabel} ›</p>
            <pre className="overflow-x-auto text-muted">
              <span className="text-faint">{'{ '}</span>
              <span className="text-accent">&quot;@type&quot;</span>
              {': '}
              <span className="text-fg">&quot;FAQPage&quot;</span>
              {', '}
              <span className="text-accent">&quot;mainEntity&quot;</span>
              {': [ … ]'}
              <span className="text-faint">{' }'}</span>
            </pre>
          </div>
        </div>
      </div>

      <p className="mt-3 text-xs leading-relaxed text-faint">{tr.caption}</p>
    </div>
  );
}
