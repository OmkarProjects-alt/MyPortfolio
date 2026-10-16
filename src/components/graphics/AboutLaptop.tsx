import React from "react";

export default function AboutLaptop() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/70 p-5 sm:p-8">
      <div className="mb-5 flex items-center justify-between">
        <span className="font-mono text-xs text-zinc-500">DEVELOPER.MODE</span>
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
      </div>

      <svg
        viewBox="0 0 360 300"
        role="img"
        aria-label="Abstract illustration of a developer workspace with code"
        className="w-full"
        fill="none"
      >
        <defs>
          <linearGradient id="screenGlow" x1="60" y1="50" x2="300" y2="250">
            <stop stopColor="#A78BFA" />
            <stop offset="1" stopColor="#6366F1" />
          </linearGradient>
        </defs>

        <circle
          cx="180"
          cy="140"
          r="104"
          stroke="#8B5CF6"
          strokeOpacity=".2"
          strokeDasharray="4 8"
        />
        <circle cx="180" cy="140" r="78" stroke="#A78BFA" strokeOpacity=".25" />

        <rect
          x="76"
          y="65"
          width="208"
          height="142"
          rx="12"
          fill="#171520"
          stroke="#6D5B9C"
        />
        <path d="M76 86H284" stroke="#373044" />
        <circle cx="91" cy="76" r="3" fill="#F87171" />
        <circle cx="102" cy="76" r="3" fill="#FBBF24" />
        <circle cx="113" cy="76" r="3" fill="#4ADE80" />

        <path
          d="M112 111L130 126L112 141"
          stroke="#C4B5FD"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M145 143L165 105"
          stroke="#818CF8"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M180 112H246M180 130H229M112 165H224M112 180H195"
          stroke="#6D5B9C"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <path
          d="M58 221H302L279 241H81L58 221Z"
          fill="#272332"
          stroke="#6D5B9C"
        />
        <path d="M142 227H218" stroke="#A78BFA" strokeWidth="3" />

        <rect
          x="242"
          y="163"
          width="62"
          height="45"
          rx="8"
          fill="#211A32"
          stroke="#A78BFA"
        />
        <path
          d="M261 177L253 185L261 193M277 177L285 185L277 193"
          stroke="#C4B5FD"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <circle cx="58" cy="112" r="4" fill="#A78BFA" />
        <circle cx="302" cy="103" r="4" fill="#818CF8" />
        <path
          d="M48 151L56 159L48 167M310 131L318 139L310 147"
          stroke="#A78BFA"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
        <span className="text-xs text-zinc-500">THINK · BUILD · IMPROVE</span>
        <span className="font-mono text-xs text-violet-300">{"</>"}</span>
      </div>
    </div>
  );
}
