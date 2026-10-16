import type { ReactNode } from "react";

type PortfolioPanelProps = {
  number: string;
  title: string;
  children: ReactNode;
  id: string;
};

export default function PortfolioPanel({
  number,
  title,
  children,
  id,
}: PortfolioPanelProps) {
  return (
    <section
      id={id}
      className="portfolio-panel relative flex h-auto min-h-dvh w-full shrink-0 flex-col border-r border-white/10 px-6 py-8 pb-28 sm:px-10 sm:py-10 md:h-dvh md:min-h-0 md:w-screen md:pb-10 lg:px-16 lg:py-12 lg:pb-12"
    >
      <div className="flex items-center justify-between text-xs tracking-[0.2em] text-zinc-500">
        <span>OMKAR / PORTFOLIO</span>
        <span>{number}</span>
      </div>

      <div className="portfolio-content-viewport flex-1 md:min-h-0 md:overflow-hidden">
        <div className="portfolio-panel-content relative z-10">
          <p className=" text-sm tracking-[0.2em] text-violet-300">
            {number} / {title.toUpperCase()}
          </p>
          {children}
        </div>
      </div>
    </section>
  );
}
