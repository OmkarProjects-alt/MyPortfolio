import ContactIllustration from "./graphics/ContactIllustration";

export default function Contact() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <div className="contact-content grid items-center gap-12 md:grid-cols-[1.3fr_0.7fr]">
        <div>
          <div className="mb-8 flex items-center gap-3">
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-50" />
            <span className="relative inline-flex size-2.5 rounded-full bg-emerald-400" />
          </span>

          <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-400 sm:text-sm">
            Open to opportunities
          </p>
        </div>

        <h2 className="max-w-4xl text-5xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl md:text-8xl">
          Have an idea?
          <span className="mt-2 block text-zinc-500">
            Let&apos;s build it
            <span className="text-violet-400">.</span>
          </span>
        </h2>

        <p className="mt-7 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
          I&apos;m a software developer who enjoys turning ideas into useful,
          well-crafted digital experiences. Have a project or opportunity in
          mind? Let&apos;s connect.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="mailto:omkar.gudappe205@gmail.com"
            className="group inline-flex items-center gap-3 rounded-full bg-violet-500 px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-violet-400 hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]"
          >
            <span>Let&apos;s talk</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/omkar-gudappe-a13644277"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3.5 text-sm text-zinc-300 transition-colors duration-300 hover:border-violet-300/40 hover:text-white"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>

          <a
            href="https://github.com/OmkarProjects-alt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3.5 text-sm text-zinc-300 transition-colors duration-300 hover:border-violet-300/40 hover:text-white"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
        </div>

        <div className="contact-illustration-wrap mx-auto w-full max-w-sm">
          <ContactIllustration />
        </div>
      </div>
    </section>
  );
}
