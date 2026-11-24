'use client';

import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

/** Types each word, pauses, deletes it, then moves to the next one. */
export function Typewriter({ words }: { words: string[] }) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const word = words[index % words.length];

  useEffect(() => {
    if (reduce) return;

    const atEnd = !deleting && length === word.length;
    const atStart = deleting && length === 0;
    const delay = atEnd ? 1700 : atStart ? 350 : deleting ? 30 : 65;

    const id = window.setTimeout(() => {
      if (atEnd) setDeleting(true);
      else if (atStart) {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else setLength((n) => n + (deleting ? -1 : 1));
    }, delay);
    return () => window.clearTimeout(id);
  }, [reduce, deleting, length, word, words.length]);

  return (
    <span aria-label={words.join(', ')}>
      <span aria-hidden>{reduce ? words[0] : word.slice(0, length)}</span>
      <span
        aria-hidden
        className="animate-caret ml-0.5 inline-block h-[1em] w-[0.5em] translate-y-[0.15em] bg-accent"
      />
    </span>
  );
}
