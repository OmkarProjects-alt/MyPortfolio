
export default function ContactIllustration() {
  return (
    <svg
      viewBox="0 0 360 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Floating envelope illustration representing contact"
      className="h-auto w-full max-w-sm overflow-visible"
    >
      <defs>
        <radialGradient id="contactGlow">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity=".3" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="envelopeGradient" x1="100" y1="100" x2="260" y2="220">
          <stop stopColor="#A78BFA" />
          <stop offset="1" stopColor="#6D28D9" />
        </linearGradient>
      </defs>

      {/* Ambient glow */}
      <circle cx="180" cy="150" r="125" fill="url(#contactGlow)" />

      {/* Orbital rings */}
      <ellipse
        cx="180"
        cy="155"
        rx="135"
        ry="48"
        stroke="#8B5CF6"
        strokeOpacity=".35"
        strokeDasharray="4 9"
        transform="rotate(-24 180 155)"
      />

      <ellipse
        cx="180"
        cy="155"
        rx="105"
        ry="75"
        stroke="#C4B5FD"
        strokeOpacity=".18"
        transform="rotate(32 180 155)"
      />

      {/* Stars */}
      <circle cx="65" cy="93" r="2" fill="#C4B5FD" />
      <circle cx="286" cy="88" r="3" fill="#A78BFA" />
      <circle cx="285" cy="225" r="2" fill="white" />
      <path d="M80 190V202M74 196H86" stroke="#C4B5FD" strokeWidth="1.5" />
      <path d="M278 135V147M272 141H284" stroke="#A78BFA" strokeWidth="1.5" />

      {/* Envelope shadow */}
      <rect
        x="103"
        y="103"
        width="154"
        height="108"
        rx="15"
        fill="#000"
        fillOpacity=".2"
        transform="translate(0 8)"
      />

      {/* Envelope body */}
      <g className="contact-envelope-art">
        <rect
          x="103"
          y="103"
          width="154"
          height="108"
          rx="15"
          fill="#171329"
          stroke="#A78BFA"
          strokeOpacity=".8"
          strokeWidth="1.5"
        />

        <path
          d="M108 111L180 166L252 111"
          stroke="url(#envelopeGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M108 202L157 158M252 202L203 158"
          stroke="#8B5CF6"
          strokeOpacity=".7"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Message lines */}
        <path
          d="M145 178H215M155 187H205"
          stroke="#C4B5FD"
          strokeOpacity=".5"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>

      {/* Floating notification */}
      <g className="contact-spark">
        <circle
          cx="247"
          cy="103"
          r="17"
          fill="#8B5CF6"
          fillOpacity=".2"
          stroke="#A78BFA"
          strokeOpacity=".8"
        />
        <path
          d="M240 103L245 108L254 98"
          stroke="#DDD6FE"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
