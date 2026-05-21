export function AbstractBlob({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 600" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="ab1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.27 0.05 240)" stopOpacity="0.95" />
          <stop offset="100%" stopColor="oklch(0.81 0.14 185)" stopOpacity="0.85" />
        </linearGradient>
        <radialGradient id="ab2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.81 0.14 185)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="oklch(0.81 0.14 185)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="300" cy="300" r="260" fill="url(#ab2)" />
      <g stroke="oklch(0.27 0.05 240)" strokeOpacity="0.12" fill="none">
        {Array.from({ length: 8 }).map((_, i) => (
          <circle key={i} cx="300" cy="300" r={60 + i * 28} />
        ))}
      </g>
      <path
        d="M 300 80
           C 460 80 520 200 500 320
           C 480 440 380 520 260 500
           C 140 480 80 360 100 240
           C 120 140 220 80 300 80 Z"
        fill="url(#ab1)"
        opacity="0.9"
      />
      <g fill="oklch(0.81 0.14 185)">
        <circle cx="120" cy="120" r="6" />
        <circle cx="500" cy="160" r="4" />
        <circle cx="470" cy="470" r="8" opacity="0.7" />
        <circle cx="130" cy="450" r="5" />
      </g>
      <g stroke="oklch(0.98 0.005 200)" strokeOpacity="0.9" strokeWidth="2.2" fill="none">
        <path d="M 150 320 L 230 320 L 250 270 L 280 380 L 310 300 L 340 320 L 460 320"
              strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g fill="oklch(0.98 0.005 200)">
        <rect x="280" y="220" width="40" height="160" rx="8" />
        <rect x="220" y="280" width="160" height="40" rx="8" />
      </g>
    </svg>
  );
}

export function DotGrid({ className = "" }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <pattern id="dotgrid" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.2" fill="oklch(0.27 0.05 240)" opacity="0.18" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dotgrid)" />
    </svg>
  );
}

export function WaveLine({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 60" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden preserveAspectRatio="none">
      <path
        d="M 0 30 Q 100 0, 200 30 T 400 30 T 600 30 T 800 30"
        stroke="oklch(0.81 0.14 185)" strokeWidth="2" fill="none"
      />
    </svg>
  );
}
