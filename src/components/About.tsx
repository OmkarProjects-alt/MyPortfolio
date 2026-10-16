
"use client";

import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiSupabase,
  SiGit,
  SiGreensock,
  SiFramer,
  SiPython,
  SiMongodb,
} from "react-icons/si";
import AboutLaptop from "./graphics/AboutLaptop";



const technologies = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#68A063" },
  { name: "Express", Icon: SiExpress, color: "#FFFFFF" },
  { name: "MongoDB", Icon: SiMongodb, color: "#006600" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#699ECA" },
  { name: "Supabase", Icon: SiSupabase, color: "#3ECF8E" },
  { name: "Python", Icon: SiPython, color: "#FFD43B" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "GSAP", Icon: SiGreensock, color: "#88CE02" },
  { name: "Framer Motion", Icon: SiFramer, color: "#BB9AFF" },
];

export default function About() {


  return (
    <section className="w-full">
      <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        {/* Left: Developer SVG */}
        <div className="about-reveal relative mx-auto w-full max-w-md">
          <div className="absolute inset-10 rounded-full bg-violet-500/15 blur-3xl" />
          <AboutLaptop />
        </div>

        {/* Right: Introduction */}
        <div className="about-reveal">
          <p className="text-sm uppercase tracking-[0.25em] text-violet-300">
            A little about me
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl xl:text-6xl">
            Curious by nature.
            <span className="mt-1 block text-zinc-500">
              Developer by choice.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-zinc-400">
            I'm a Computer Science graduate who enjoys turning complex
            problems into clean, practical applications. I focus on
            full-stack development, thoughtful interfaces, and maintainable
            code.
          </p>

          <p className="mt-4 text-base leading-8 text-zinc-400">
            For me, good software is more than something that works. It
            should feel intuitive, perform reliably, and solve real problems
            for the people using it.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {["Problem solving", "Full-stack", "Clean code"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-zinc-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom: Technology dock */}
      <div className="about-tools-reveal mt-12 border-t border-white/10 pt-7 sm:mt-16">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.22em] text-violet-300">
              MY TECH STACK
            </p>
            <h3 className="mt-2 text-xl font-medium text-white sm:text-2xl">
              Tools behind my work.
            </h3>
          </div>
          <span className="hidden font-mono text-xs text-zinc-500 sm:block">
            THE TOOLKIT / 012
          </span>
        </div>

        <div className="grid grid-cols-4 gap-3 sm:grid-cols-6 lg:grid-cols-12">
          {technologies.map(({ name, Icon, color }) => (
            <div
              key={name}
              title={name}
              className="about-tool-item group flex flex-col items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] px-2 py-4 transition duration-300 hover:-translate-y-1 hover:border-violet-300/30 hover:bg-white/[0.05]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 ring-1 ring-white/10 transition duration-300 group-hover:scale-110">
                <Icon
                  aria-hidden="true"
                  size={23}
                  color={color}
                />
              </div>
              <span className="text-center text-[10px] leading-tight text-zinc-400 transition-colors group-hover:text-white sm:text-xs">
                {name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-300" />
          <p className="text-xs text-zinc-500">
            Always learning. Always building.
          </p>
        </div>
      </div>
    </section>
  );
}
