"use client";

import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import HeroOrbit from "./graphics/HeroOrbit";

type NavigationProps = {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({
  onNavigate
}: NavigationProps) {
  return (
    <section id="home"  className="grid min-h-[65vh] items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="relative z-10">
        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-50" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-xs tracking-wide text-zinc-300">
            SOFTWARE DEVELOPER
          </span>
        </div>

        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-zinc-500">
          Designing · Developing · Improving
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-7xl lg:text-8xl">
          Turning ideas
          <span className="mt-2 block text-zinc-500">
            into <span className="text-violet-300">reality.</span>
          </span>
        </h1>

        <p className="mt-7 max-w-lg text-base leading-8 text-zinc-400 sm:text-lg">
          I'm Omkar, a software developer focused on building thoughtful web
          experiences and reliable applications.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <button
            onClick={() => onNavigate("projects")}
            className="group inline-flex items-center gap-3 rounded-full bg-violet-300 px-6 py-3.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-violet-200"
          >
            Explore my work
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>

          <button
            onClick={() => onNavigate("contact")}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm text-zinc-300 transition-colors hover:border-white/40 hover:text-white"
          >
            Contact me
            <ArrowDownRight size={16} />
          </button>
        </div>

        <div className="mt-12 flex max-w-md items-center gap-4">
          <div className="h-px flex-1 bg-white/10">
            <div className="h-px w-1/3 bg-violet-300" />
          </div>
          <span className="text-[10px] tracking-[0.2em] text-zinc-500">
            SCROLL TO EXPLORE
          </span>
        </div>
      </div>

      <div className="relative hidden items-center justify-center lg:flex">
        <div className="absolute size-72 rounded-full bg-violet-500/[0.07] blur-3xl" />

        <HeroOrbit className="relative w-full max-w-[440px]" />

        <div className="absolute bottom-12 right-0 rounded-xl border border-white/10 bg-zinc-950/80 px-4 py-3 backdrop-blur-sm">
          <p className="text-[10px] tracking-[0.2em] text-zinc-500">
            CURRENT FOCUS
          </p>
          <p className="mt-1 text-sm text-zinc-200">Full-stack development</p>
        </div>

        <div className="absolute left-0 top-16 flex flex-col gap-2">
          <span className="h-1 w-8 rounded-full bg-violet-300/80" />
          <span className="h-1 w-5 rounded-full bg-violet-300/40" />
          <span className="h-1 w-3 rounded-full bg-violet-300/20" />
        </div>
      </div>
    </section>
  );
}
