import type { SVGProps } from 'react';

/** "SH" monogram — keep in sync with src/app/icon.svg (the favicon). */
export function LogoMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" role="img" aria-label="Sonali Hirave" {...props}>
      <rect width="64" height="64" rx="14" fill="#0e1012" />
      <rect
        x="1"
        y="1"
        width="62"
        height="62"
        rx="13"
        fill="none"
        stroke="#2c3136"
        strokeWidth="2"
      />
      <path
        fill="#edeef0"
        d="M20.7 43.9c-3.7 0-7-1.1-9.7-3.4l3.7-5.2c2.2 1.8 4.4 2.7 6.6 2.7 1.8 0 2.8-.6 2.8-1.7 0-.6-.3-1.1-.9-1.4-.6-.4-1.8-.8-3.7-1.3-2.7-.7-4.7-1.6-6-2.8-1.3-1.1-2-2.8-2-5 0-2.5 1-4.5 3-6 2-1.5 4.5-2.3 7.5-2.3 3.3 0 6.1.9 8.5 2.7l-3.3 5.4c-1.9-1.4-3.8-2.1-5.6-2.1-1.6 0-2.4.5-2.4 1.5 0 .6.3 1 .9 1.4.6.3 1.8.7 3.6 1.2 2.9.8 5 1.8 6.3 3 1.3 1.2 1.9 2.9 1.9 5.1 0 2.7-1 4.8-3 6.3-2 1.5-4.7 2.3-8.2 2.3Z"
      />
      <path
        fill="#c8f560"
        d="M34.8 43.4V18h7.6v9.4h8.2V18h7.6v25.4h-7.6v-9.6h-8.2v9.6h-7.6Z"
      />
    </svg>
  );
}
