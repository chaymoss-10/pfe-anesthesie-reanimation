export function MedicalIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 480"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Illustration médicale abstraite"
    >
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.51 0.07 187)" stopOpacity="0.95" />
          <stop offset="100%" stopColor="oklch(0.51 0.07 187)" stopOpacity="0.55" />
        </linearGradient>
        <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.87 0.05 80)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="oklch(0.87 0.05 80)" stopOpacity="0.4" />
        </linearGradient>
        <radialGradient id="g3" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.51 0.07 187)" stopOpacity="0.18" />
          <stop offset="100%" stopColor="oklch(0.51 0.07 187)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Soft halo */}
      <circle cx="240" cy="240" r="220" fill="url(#g3)" />

      {/* Outer ring */}
      <circle
        cx="240"
        cy="240"
        r="180"
        fill="none"
        stroke="url(#g1)"
        strokeWidth="1.5"
        strokeDasharray="4 8"
        opacity="0.6"
      />

      {/* Main disc */}
      <circle cx="240" cy="240" r="140" fill="url(#g2)" opacity="0.45" />
      <circle cx="240" cy="240" r="110" fill="oklch(1 0 0)" opacity="0.95" />

      {/* Medical cross */}
      <g>
        <rect x="220" y="170" width="40" height="140" rx="10" fill="url(#g1)" />
        <rect x="170" y="220" width="140" height="40" rx="10" fill="url(#g1)" />
      </g>

      {/* ECG line */}
      <path
        d="M 60 320 L 140 320 L 160 290 L 180 350 L 200 310 L 220 320 L 420 320"
        fill="none"
        stroke="oklch(0.51 0.07 187)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />

      {/* Floating dots */}
      <circle cx="100" cy="120" r="8" fill="oklch(0.87 0.05 80)" />
      <circle cx="400" cy="140" r="6" fill="oklch(0.51 0.07 187)" opacity="0.7" />
      <circle cx="380" cy="380" r="10" fill="oklch(0.87 0.05 80)" opacity="0.8" />
      <circle cx="90" cy="370" r="5" fill="oklch(0.51 0.07 187)" opacity="0.6" />

      {/* Pill shape */}
      <g transform="translate(340 80) rotate(35)">
        <rect x="0" y="0" width="70" height="28" rx="14" fill="oklch(0.87 0.05 80)" />
        <rect x="35" y="0" width="35" height="28" rx="14" fill="oklch(0.51 0.07 187)" opacity="0.85" />
      </g>
    </svg>
  );
}
