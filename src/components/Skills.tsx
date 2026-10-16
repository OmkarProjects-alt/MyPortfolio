
"use client";

import { useState } from "react";

type Skill = {
  id: string;
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Tools";
  x: number;
  y: number;
  projects: string[];
  description: string;
};

const skills: Skill[] = [
  {
    id: "react",
    name: "React",
    category: "Frontend",
    x: 25,
    y: 28,
    projects: ["StudyVerse", "CodeSync", "CinePrime"],
    description: "Building interactive, component-based user interfaces.",
  },
  {
    id: "next",
    name: "Next.js",
    category: "Frontend",
    x: 40,
    y: 16,
    projects: ["ClinicFlow"],
    description: "Building full-stack web applications with React.",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Frontend",
    x: 56,
    y: 28,
    projects: ["ClinicFlow"],
    description: "Writing more maintainable code with static typing.",
  },
  {
    id: "node",
    name: "Node.js",
    category: "Backend",
    x: 72,
    y: 43,
    projects: ["CodeSync", "StudyVerse"],
    description: "Building server-side application functionality.",
  },
  {
    id: "websockets",
    name: "WebSockets",
    category: "Backend",
    x: 65,
    y: 69,
    projects: ["CodeSync"],
    description: "Synchronizing collaborative editing and real-time communication.",
  },
  {
    id: "postgres",
    name: "PostgreSQL",
    category: "Database",
    x: 43,
    y: 76,
    projects: ["ClinicFlow", "CinePrime"],
    description: "Working with relational data and structured application records.",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "Database",
    x: 81,
    y: 56,
    projects: ["StudyVerse", "CodeSync"],
    description: "Using backend services, authentication, and database integration.",
  },
  {
    id: "supabase",
    name: "Supabase",
    category: "Database",
    x: 25,
    y: 62,
    projects: ["ClinicFlow"],
    description: "Using backend services, authentication, and database integration.",
  },
  {
    id: "git",
    name: "Git & GitHub",
    category: "Tools",
    x: 12,
    y: 44,
    projects: ["StudyVerse", "CodeSync", "CinePrime"],
    description: "Managing source code and project versions.",
  },
];

const categories = ["All", "Frontend", "Backend", "Database", "Tools"] as const;

export default function Skills() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("All");

  const [selectedSkill, setSelectedSkill] = useState("react");

  const visibleSkills = skills.filter(
    (skill) =>
      activeCategory === "All" || skill.category === activeCategory,
  );

  const selected = skills.find((skill) => skill.id === selectedSkill);


const connections = visibleSkills.map((skill) => ({
  id: skill.id,
  x1: 50,
  y1: 50,
  x2: skill.x,
  y2: skill.y,
  active: selectedSkill === skill.id,
}));


  return (
    <section className="relative mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <header className="mb-10 text-center sm:mb-14">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-violet-300 sm:text-sm">
          My toolkit / What I build with
        </p>

        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          Skills & <span className="text-violet-400">Technologies.</span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
          Explore the technologies I use and the projects where I apply them.
        </p>
      </header>

      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-full border px-4 py-2 text-xs transition-colors ${
              activeCategory === category
                ? "border-violet-300/50 bg-violet-400/15 text-violet-200"
                : "border-white/10 bg-white/[0.03] text-zinc-400 hover:border-violet-300/30 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1.5fr_1fr]">
        {/* Constellation canvas — SVG connections come in Step 2 */}
        
        <div className="relative min-h-[400px] overflow-hidden rounded-2xl border border-white/10 bg-[#0c0b12] sm:min-h-[480px]">

<svg
  aria-hidden="true"
  className="pointer-events-none absolute inset-0 z-0 h-full w-full"
  viewBox="0 0 100 100"
  preserveAspectRatio="none"
>
  <defs>
    <linearGradient id="skill-line-gradient">
      <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.8" />
      <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.12" />
    </linearGradient>
  </defs>

  {connections.map((connection) => (
    <line
      key={connection.id}
      x1={connection.x1}
      y1={connection.y1}
      x2={connection.x2}
      y2={connection.y2}
      stroke={
        connection.active
          ? "#C4B5FD"
          : "url(#skill-line-gradient)"
      }
      strokeWidth={connection.active ? 0.45 : 0.2}
      strokeOpacity={connection.active ? 1 : 0.6}
      strokeDasharray={connection.active ? "none" : "1.5 1.5"}
      className="transition-all duration-300"
    />
  ))}
</svg>

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.10),transparent_70%)]" />

          <div className="skills-core absolute left-1/2 top-1/2 z-10 flex size-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-violet-300/30 bg-[#171321] text-center shadow-[0_0_45px_rgba(139,92,246,0.12)] sm:size-32">
            <span className="text-[10px] uppercase tracking-widest text-violet-300">
              Developer
            </span>
            <span className="mt-2 text-sm font-semibold text-white">
              Full Stack
            </span>
          </div>

          {visibleSkills.map((skill) => (
            <button
              key={skill.id}
              type="button"
              onClick={() => setSelectedSkill(skill.id)}
              style={{
                left: `${skill.x}%`,
                top: `${skill.y}%`,
              }}
              className={`absolute z-20 -translate-x-1/2 -translate-y-1/2 rounded-full border px-3 py-2 text-xs transition-all duration-300 sm:px-4 sm:py-2.5 ${
                selectedSkill === skill.id
                  ? "border-violet-300 bg-violet-400/20 text-white shadow-[0_0_24px_rgba(167,139,250,0.25)]"
                  : "border-white/10 bg-[#17151f] text-zinc-300 hover:border-violet-300/50 hover:text-white"
              }`}
              aria-pressed={selectedSkill === skill.id}
            >
              {skill.name}
            </button>
          ))}
        </div>

        {/* Selected skill details */}
        <aside className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.25em] text-violet-300">
            Selected technology
          </p>

          {selected && (
            <>
              <h3 className="mt-4 text-3xl font-semibold text-white">
                {selected.name}
              </h3>

              <p className="mt-2 text-sm text-zinc-500">
                {selected.category}
              </p>

              <p className="mt-6 text-sm leading-7 text-zinc-300">
                {selected.description}
              </p>

              <div className="mt-8">
                <p className="text-xs uppercase tracking-widest text-zinc-500">
                  Related projects
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {selected.projects.map((project) => (
                    <span
                      key={project}
                      className="rounded-md border border-violet-300/15 bg-violet-400/[0.06] px-3 py-2 text-xs text-violet-200"
                    >
                      {project}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}
        </aside>
      </div>
    </section>
  );
}
