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
      className="portfolio-panel relative flex h-dvh w-screen shrink-0 flex-col border-r border-white/10 px-6 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-12"
    >
      <div className="flex items-center justify-between text-xs tracking-[0.2em] text-zinc-500">
        <span>OMKAR / PORTFOLIO</span>
        <span>{number}</span>
      </div>

      <div className="portfolio-content-viewport min-h-0 flex-1 overflow-hidden">
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
