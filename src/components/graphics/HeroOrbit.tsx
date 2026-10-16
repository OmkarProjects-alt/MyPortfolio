
type HeroOrbitProps = {
  className?: string;
};

export default function HeroOrbit({
  className = "",
}: HeroOrbitProps) {
  return (
    <svg
      viewBox="0 0 440 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <radialGradient id="orbit-glow">
          <stop stopColor="#A78BFA" stopOpacity=".2" />
          <stop offset="1" stopColor="#A78BFA" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="orbit-line" x1="60" y1="60" x2="380" y2="380">
          <stop stopColor="#C4B5FD" stopOpacity=".7" />
          <stop offset="1" stopColor="#8B5CF6" stopOpacity=".08" />
        </linearGradient>
      </defs>

      <circle
        cx="220"
        cy="220"
        r="190"
        fill="url(#orbit-glow)"
        className="orbit-glow"
        />

      <circle
        cx="220"
        cy="220"
        r="150"
        stroke="white"
        strokeOpacity=".09"
        strokeDasharray="3 9"
      />

      <circle
        cx="220"
        cy="220"
        r="112"
        stroke="url(#orbit-line)"
        strokeWidth="1.2"
      />

      
{/* Back orbital paths */}
<g stroke="#C4B5FD" fill="none">
  <ellipse
    cx="220"
    cy="220"
    rx="150"
    ry="62"
    transform="rotate(-38 220 220)"
    strokeOpacity=".18"
    strokeWidth="1"
  />
  <ellipse
    cx="220"
    cy="220"
    rx="150"
    ry="62"
    transform="rotate(38 220 220)"
    strokeOpacity=".12"
    strokeWidth="1"
  />
</g>


      <circle cx="220" cy="220" r="70" fill="#A78BFA" fillOpacity=".06" />

      <path
        d="M192 204L211 220L192 236"
        stroke="#DDD6FE"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M222 236H247"
        stroke="#DDD6FE"
        strokeWidth="2.5"
        strokeLinecap="round"
        >
            <animate
                attributeName="opacity"
                values="1;0;1"
                dur="2s"
                repeatCount="indefinite"
            />
        </path>

      
    {/* Orbit 1 — tilted elliptical orbit */}
    <g transform="rotate(-38 220 220)">
    <circle r="5" fill="#C4B5FD">
        <animateMotion
        dur="12s"
        repeatCount="indefinite"
        path="M 370 220 A 150 62 0 1 1 70 220 A 150 62 0 1 1 370 220"
        />
    </circle>
    </g>

    {/* Orbit 2 — opposite tilted elliptical orbit */}
    <g transform="rotate(38 220 220)">
    <circle r="3.5" fill="#A78BFA">
        <animateMotion
        dur="18s"
        repeatCount="indefinite"
        path="M 370 220 A 150 62 0 1 1 70 220 A 150 62 0 1 1 370 220"
        />
    </circle>
    </g>

    {/* Orbit 3 — inner circular orbit */}
    <circle r="3" fill="#DDD6FE">
    <animateMotion
        dur="8s"
        repeatCount="indefinite"
        path="M 332 220 A 112 112 0 1 1 108 220 A 112 112 0 1 1 332 220"
    />
    </circle>


      <path
        d="M220 18V40M220 400V422M18 220H40M400 220H422"
        stroke="white"
        strokeOpacity=".3"
      />

      <circle
  cx="220"
  cy="220"
  r="175"
  stroke="white"
  strokeOpacity=".05"
  strokeDasharray="2 8"
  className="orbit-ring"
/>

    </svg>
  );
}
