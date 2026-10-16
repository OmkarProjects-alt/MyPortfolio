import Image from "next/image";
import ExperienceCharts from "./ExperienceCharts";
import { GlobeIcon, FileBadgeIcon, ExternalLinkIcon } from "lucide-react";
import { experiences } from "./jsonData/Experience";




/** Renders **bold** segments inside a paragraph. */
function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="font-semibold text-zinc-200">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

function ActionLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group/link inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2 text-xs font-medium text-zinc-300 transition-all duration-200 hover:border-violet-300/40 hover:bg-violet-400/[0.08] hover:text-violet-200"
    >
      <span className="transition-colors duration-200 group-hover/link:text-violet-300">
        {icon}
      </span>
      {label}
      <ExternalLinkIcon className="size-3 opacity-0 transition-all duration-200 group-hover/link:opacity-100" />
    </a>
  );
}

export default function Experience() {
  return (
    <section
      aria-labelledby="experience-heading"
      className="relative mx-auto w-full max-w-6xl px-4 py-12 sm:py-16"
    >
      {/* Section heading */}
      <header className="experience-heading mb-16 text-center sm:mb-24">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-violet-300 sm:text-sm">
          My journey / 2025—Present
        </p>

        <h2
          id="experience-heading"
          className="mt-5 text-5xl font-semibold tracking-tight text-white sm:text-7xl"
        >
          Where I&apos;ve
          <span className="block text-zinc-500">
            grown<span className="text-violet-400">.</span>
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-zinc-400 sm:text-base">
          My journey through software development and practical industry
          training.
        </p>
      </header>

      {/* Timeline */}
      <div className="experience-timeline relative">
        {/* Static rail */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-3 top-0 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2"
        />

        {/* Animated gradient rail (hook GSAP to this) */}
        <div
          aria-hidden="true"
          className="experience-timeline-line absolute left-3 top-0 h-full w-px origin-top scale-y-0 bg-gradient-to-b from-violet-300 via-violet-500 to-transparent md:left-1/2 md:-translate-x-1/2"
        />

        <ol className="relative">
          {experiences.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <li
                key={item.id}
                className="experience-card relative mb-12 pl-10 last:mb-0 sm:mb-16 sm:pl-12 md:grid md:grid-cols-2 md:pl-0"
              >
                {/* Marker */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-8 z-10 flex size-6 items-center justify-center rounded-full border border-violet-300/60 bg-[#09090b] shadow-[0_0_22px_rgba(139,92,246,0.22)] md:left-1/2 md:-translate-x-1/2"
                >
                  <span className="size-2 rounded-full bg-violet-300" />
                </span>

                {/* Card */}
                <article
                  className={`experience-card-inner group relative min-w-0 overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.025] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-300/30 hover:bg-white/[0.045] hover:shadow-[0_20px_60px_-20px_rgba(139,92,246,0.25)] sm:p-7 ${
                    isLeft
                      ? "md:col-start-1 md:mr-10 lg:mr-14"
                      : "md:col-start-2 md:ml-10 lg:ml-14"
                  }`}
                >
                  {/* Corner glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-violet-500/[0.06] blur-3xl transition-colors duration-500 group-hover:bg-violet-500/[0.12]"
                  />

                  {/* Meta row */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs text-violet-300">
                      {item.number}
                    </span>
                    <span className="h-px w-6 bg-violet-400/50" />
                    <span className="text-[10px] uppercase tracking-[0.16em] text-zinc-500 sm:text-xs">
                      {item.type}
                    </span>
                  </div>

                  {/* Role */}
                  <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    {item.role}
                    <span className="text-violet-400">.</span>
                  </h3>

                  {/* Company + logo */}
                  <div className="mt-3 flex items-center gap-3">
                    {item.logo && (
                      <div className="relative flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white p-1.5">
                        <Image
                          src={item.logo}
                          alt={`${item.company} logo`}
                          width={48}
                          height={48}
                          className="h-full w-full object-contain"
                          sizes="48px"
                        />
                      </div>
                    )}
                    <p className="text-base text-zinc-300">{item.company}</p>
                  </div>

                  {/* Period */}
                  <p className="mt-3 font-mono text-xs tracking-wide text-zinc-500">
                    {item.period}
                  </p>

                  {/* Description */}
                  {item.description && (
                    <p className="mt-4 text-sm leading-7 text-zinc-400">
                      <RichText text={item.description} />
                    </p>
                  )}

                  {/* Tech chips */}
                  {item.technologies.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-violet-300/15 bg-violet-400/[0.06] px-3 py-1.5 text-xs text-violet-200 transition-colors duration-200 hover:border-violet-300/40 hover:bg-violet-400/[0.12]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Actions */}
                  {(item.site || item.certificate) && (
                    <div className="mt-6 flex flex-wrap justify-end gap-3">
                      {item.site && (
                        <ActionLink
                          href={item.site}
                          icon={<GlobeIcon className="size-4" />}
                          label="Site"
                        />
                      )}
                      {item.certificate && (
                        <ActionLink
                          href={item.certificate}
                          icon={<FileBadgeIcon className="size-4" />}
                          label="Certificate"
                        />
                      )}
                    </div>
                  )}
                </article>
              </li>
            );
          })}
        </ol>
      </div>

      <ExperienceCharts />
    </section>
  );
}