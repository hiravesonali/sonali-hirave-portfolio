import type { MouseEvent } from 'react';

/**
 * Pair with the `.spotlight` class (globals.css): stores the pointer position
 * on the element so a soft glow can follow the cursor.
 */
export function trackPointer(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
  el.style.setProperty('--my', `${e.clientY - rect.top}px`);
}
