import Image from "next/image";
import { projects } from "./jsonData/project";


export default function Projects() {
  return (
    <section className="relative mx-auto w-full max-w-6xl py-12 sm:py-16">
      {/* Section heading */}
      <div className="project-head mb-20 text-center sm:mb-28">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-violet-300 sm:text-sm">
          Selected work / 2025—2026
        </p>

        <h2 className="mt-5 text-5xl font-semibold tracking-tight text-white sm:text-7xl">
          Things I&apos;ve
          <span className="block text-zinc-500">
            built<span className="text-violet-400">.</span>
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-zinc-400 sm:text-base">
          A collection of projects, experiments, and ideas brought to life
          through code.
        </p>
      </div>

      {/* Zigzag timeline */}
      <div className="relative">
        {/* Timeline background */}
        <div className="pointer-events-none absolute bottom-0 left-3 top-0 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />

        {/* Timeline accent */}
        <div className="pointer-events-none absolute bottom-0 left-3 top-0 w-px origin-top bg-gradient-to-b from-violet-300 via-violet-500/70 to-transparent md:left-1/2 md:-translate-x-1/2" />

        {projects.map((project, index) => {
          const isLeft = index % 2 === 0;

          return (
            <article
              key={project.name}
              className="project-card relative mb-16 grid grid-cols-1 pl-10 last:mb-0 sm:mb-24 sm:pl-12 md:grid-cols-2 md:pl-0"
            >
              {/* Timeline marker */}
              <div className="absolute left-0 top-8 z-10 flex size-6 items-center justify-center rounded-full border border-violet-300/60 bg-[#09090b] shadow-[0_0_22px_rgba(139,92,246,0.22)] md:left-1/2 md:-translate-x-1/2">
                <span className="size-2 rounded-full bg-violet-300" />
              </div>

              {/* Project card */}
              <div
                className={`group relative min-w-0 overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.025] p-4 transition-[border-color,background-color,transform,box-shadow] duration-500 hover:-translate-y-1 hover:border-violet-300/30 hover:bg-white/[0.045] hover:shadow-[0_16px_60px_rgba(124,58,237,0.08)] sm:p-6 lg:p-7 ${
                  isLeft
                    ? "md:col-start-1 md:mr-10 md:text-right lg:mr-14"
                    : "md:col-start-2 md:ml-10 md:text-left lg:ml-14"
                }`}
              >
                {/* Project visual */}
                <div className="relative mb-6 flex h-40 items-center justify-center overflow-hidden rounded-xl border border-white/[0.07] bg-gradient-to-br from-violet-500/[0.10] via-zinc-900 to-zinc-950 sm:h-48">
                  <div className="pointer-events-none absolute -right-10 -top-16 size-44 rounded-full bg-violet-500/[0.12] blur-3xl transition-opacity duration-500 group-hover:bg-violet-500/20" />

                  {project.logo_path ? (
                    <Image
                      src={project.logo_path}
                      alt={`${project.name} project preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 520px"
                      className="relative z-10 object-contain p-5 transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="relative z-10 text-center">
                      <span className="font-mono text-xs tracking-[0.3em] text-violet-300/70">
                        PROJECT / {project.number}
                      </span>
                      <p className="mt-3 text-3xl font-semibold tracking-tight text-white/90 sm:text-4xl">
                        {project.name}
                        <span className="text-violet-400">.</span>
                      </p>
                    </div>
                  )}

                  <span className="absolute bottom-3 right-3 font-mono text-[10px] tracking-widest text-white/30">
                    {project.number} — 03
                  </span>
                </div>

                {/* Category and number */}
                <div
                  className={`flex flex-wrap items-center gap-3 ${
                    isLeft ? "md:justify-end" : "md:justify-start"
                  }`}
                >
                  <span className="font-mono text-xs text-violet-300">
                    {project.number}
                  </span>
                  <span className="h-px w-6 bg-violet-400/50" />
                  <span className="text-[10px] uppercase tracking-[0.16em] text-zinc-500 sm:text-xs">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-violet-200 sm:text-3xl lg:text-4xl">
                  {project.name}
                  <span className="text-violet-400">.</span>
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-[15px]">
                  {project.description}
                </p>

                {/* Technologies */}
                <div
                  className={`mt-6 flex flex-wrap gap-2 ${
                    isLeft ? "md:justify-end" : "md:justify-start"
                  }`}
                >
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-white/[0.08] bg-white/[0.025] px-2.5 py-1.5 text-[10px] text-zinc-400 transition-colors duration-300 group-hover:border-violet-300/15 group-hover:text-zinc-300 sm:text-xs"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Project links */}
                {(project.liveUrl || project.githubUrl) && (
                  <div
                    className={`mt-7 flex flex-wrap items-center gap-5 border-t border-white/[0.07] pt-5 ${
                      isLeft ? "md:justify-end" : "md:justify-start"
                    }`}
                  >
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-violet-300 transition-colors hover:text-white"
                      >
                        Live Demo
                        <span aria-hidden="true">↗</span>
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
                      >
                        GitHub
                        <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Opposite side: connector area */}
              <div
                aria-hidden="true"
                className={
                  isLeft
                    ? "hidden md:block md:col-start-2"
                    : "hidden md:block md:col-start-1 md:row-start-1"
                }
              />
            </article>
          );
        })}
      </div>

      {/* End marker */}
      <div className="mt-16 flex items-center justify-center gap-3 sm:mt-24">
        <span className="size-1.5 rounded-full bg-violet-400" />
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500 sm:text-xs">
          More ideas in progress
        </p>
        <span className="size-1.5 rounded-full bg-violet-400" />
      </div>
    </section>
  );
}
