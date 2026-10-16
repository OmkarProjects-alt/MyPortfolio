"use client";

const sections = [
  { id: "home", label: "Home", icon: "⌂" },
  { id: "about", label: "About", icon: "◎" },
  { id: "experience", label: "Experience", icon: "▤" },
  { id: "projects", label: "Projects", icon: "⌘" },
  { id: "skills", label: "Skills", icon: "✳" },
  { id: "contact", label: "Contact", icon: "↗" },
];

type NavigationProps = {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
};

export default function Navigation({
  activeSection,
  onNavigate,
}: NavigationProps) {
  return (
    <>
      <nav
        aria-label="Main navigation"
        className="fixed right-5 top-1/2 z-50 hidden -translate-y-1/2 md:block"
      >
        <div className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-zinc-950/80 p-2 shadow-2xl shadow-black/30 backdrop-blur-xl">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              aria-label={section.label}
              aria-current={
                activeSection === section.id ? "location" : undefined
              }
              title={section.label}
              onClick={() => onNavigate(section.id)}
              className={`flex size-11 items-center justify-center rounded-xl text-xl transition-all duration-300 ${
                activeSection === section.id
                  ? "bg-violet-500 text-white shadow-lg shadow-violet-500/25"
                  : "text-zinc-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {section.icon}
            </button>
          ))}
        </div>
      </nav>

      <nav
        aria-label="Mobile navigation"
        className="fixed inset-x-0 bottom-0 z-50 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden"
      >
        <div className="mx-auto flex max-w-lg items-center justify-around gap-1 rounded-2xl border border-white/10 bg-zinc-950/90 px-1 py-2 shadow-2xl shadow-black/40 backdrop-blur-xl">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              aria-label={section.label}
              aria-current={
                activeSection === section.id ? "location" : undefined
              }
              onClick={() => onNavigate(section.id)}
              className={`flex min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-xl px-1 py-2 transition-colors duration-300 ${
                activeSection === section.id
                  ? "text-violet-300"
                  : "text-zinc-500 hover:text-white"
              }`}
            >
              <span className="text-lg leading-none">{section.icon}</span>
              <span className="text-[10px] font-medium">{section.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile bottom navigation */}
    </>
  );
}
