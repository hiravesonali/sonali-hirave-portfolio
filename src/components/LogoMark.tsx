import type { SVGProps } from 'react';

interface LogoMarkProps extends SVGProps<SVGSVGElement> {
  idPrefix: string;
}

export function LogoMark({ idPrefix, ...props }: LogoMarkProps) {
  const bgId = `${idPrefix}-bg`;
  const shineId = `${idPrefix}-shine`;

  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label="Sonali Hirave"
      {...props}
    >
      <defs>
        <linearGradient
          id={bgId}
          x1="10"
          y1="8"
          x2="56"
          y2="58"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ec6fa9" />
          <stop offset="0.58" stopColor="#ff7a8a" />
          <stop offset="1" stopColor="#b794d4" />
        </linearGradient>
        <linearGradient
          id={shineId}
          x1="18"
          y1="10"
          x2="48"
          y2="54"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff8f3" />
          <stop offset="1" stopColor="#ffd97d" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="18" fill={`url(#${bgId})`} />
      <path
        fill="#fff8f3"
        d="M20.7 43.9c-3.7 0-7-1.1-9.7-3.4l3.7-5.2c2.2 1.8 4.4 2.7 6.6 2.7 1.8 0 2.8-.6 2.8-1.7 0-.6-.3-1.1-.9-1.4-.6-.4-1.8-.8-3.7-1.3-2.7-.7-4.7-1.6-6-2.8-1.3-1.1-2-2.8-2-5 0-2.5 1-4.5 3-6 2-1.5 4.5-2.3 7.5-2.3 3.3 0 6.1.9 8.5 2.7l-3.3 5.4c-1.9-1.4-3.8-2.1-5.6-2.1-1.6 0-2.4.5-2.4 1.5 0 .6.3 1 .9 1.4.6.3 1.8.7 3.6 1.2 2.9.8 5 1.8 6.3 3 1.3 1.2 1.9 2.9 1.9 5.1 0 2.7-1 4.8-3 6.3-2 1.5-4.7 2.3-8.2 2.3Z"
      />
      <path
        fill={`url(#${shineId})`}
        d="M34.8 43.4V18h7.6v9.4h8.2V18h7.6v25.4h-7.6v-9.6h-8.2v9.6h-7.6Z"
      />
      <path
        fill="none"
        stroke="#3a2a3f"
        strokeLinecap="round"
        strokeWidth="2.4"
        d="M18 51c8.6 3.7 19 3.5 28.2-.6"
        opacity="0.28"
      />
    </svg>
  );
}
