"use client";

import gsap from "gsap";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PortfolioPanel from "./sections/PortfolioPanel";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";
import Skills from "./Skills";
import Contact from "./Contact";
import Navigation from "./Navigation";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function HorizontalPortfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const [activeSection, setActiveSection] = useState("home");

  const navigateToSection = (sectionId: string) => {
    const timeline = timelineRef.current;
    const label = `panel-${sectionId}-top`;
    const scrollTrigger = timeline?.scrollTrigger;

    if (!timeline || !scrollTrigger || timeline.labels[label] === undefined) {
      return;
    }

    window.scrollTo({
      top: scrollTrigger.labelToScroll(label),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  useGSAP(
    () => {
      const container = containerRef.current;
      const tracker = trackRef.current;

      if (!container || !tracker) return;

      const panels = gsap.utils.toArray<HTMLElement>(
        tracker.querySelectorAll(".portfolio-panel"),
      );

      const viewports = panels.map((panel) =>
        panel.querySelector<HTMLElement>(".portfolio-content-viewport"),
      );

      const contents = panels.map((panel) =>
        panel.querySelector<HTMLElement>(".portfolio-panel-content"),
      );

      let timeline: gsap.core.Timeline | undefined;
      let currentSection = "home";

      const buildAnimation = () => {
        timeline?.scrollTrigger?.kill();
        timeline?.kill();
        timelineRef.current = null;

        gsap.set(tracker, { x: 0 });

        contents.forEach((content) => {
          if (content) gsap.set(content, { y: 0 });
        });

        const tl = gsap.timeline();

        panels.forEach((panel, index) => {
          const viewport = viewports[index];
          const content = contents[index];

          if (!viewport || !content) return;

          tl.addLabel(`panel-${panel.id}-top`);

          const overflow = Math.max(
            0,
            content.scrollHeight - viewport.clientHeight,
          );

          if (overflow > 0) {
            const contentScrollStart = tl.duration();

            // Move the panel content upward as the user scrolls.
            tl.to(content, {
              y: -overflow,
              duration: overflow,
              ease: "none",
            });

            // Animate the tech stack when it approaches the viewport.
            const tools = panel.querySelector<HTMLElement>(
              ".about-tools-reveal",
            );

            const projectHead = panel.querySelector<HTMLElement>(".project-head");
            if (projectHead) {
              const projectHeadOffset =
                projectHead.getBoundingClientRect().top -
                content.getBoundingClientRect().top;
              const projectHeadRevealAt =
                contentScrollStart +
                Math.max(
                  0,
                  projectHeadOffset - viewport.clientHeight + 100,
                );

              tl.fromTo(
                projectHead,
                { y: 24, autoAlpha: 0 },
                {
                  y: 0,
                  autoAlpha: 1,
                  duration: 120,
                  ease: "power3.out",
                },
                projectHeadRevealAt,
              );
            }

            const projectCards =
              panel.querySelectorAll<HTMLElement>(".project-card > .group");

            projectCards.forEach((card, cardIndex) => {
              const cardOffset =
                card.getBoundingClientRect().top -
                content.getBoundingClientRect().top;
              const cardRevealAt =
                contentScrollStart +
                Math.max(0, cardOffset - viewport.clientHeight + 120);
              const entersFromLeft =
                window.innerWidth < 768 || cardIndex % 2 === 0;

              tl.fromTo(
                card,
                { x: entersFromLeft ? -56 : 56, autoAlpha: 0 },
                {
                  x: 0,
                  autoAlpha: 1,
                  duration: 80,
                  ease: "power3.out",
                },
                cardRevealAt,
              );
            });

            const experienceHead = panel.querySelector<HTMLElement>(".experience-heading");

            if(experienceHead) {
              const experienceHeadOffset = 
                experienceHead.getBoundingClientRect().top -
                content.getBoundingClientRect().top

              const experienceHeadRevealAt =
                contentScrollStart +
                Math.max(
                  0,
                  experienceHeadOffset - viewport.clientHeight + 100
                )

              tl.fromTo(
                experienceHead,
                { y: 24, autoAlpha: 0 },
                {
                  y: 0,
                  autoAlpha: 1,
                  duration: 120,
                  ease: "power3.out"
                },
                experienceHeadRevealAt
              );
            }

            const experienceCards =
              panel.querySelectorAll<HTMLElement>(".experience-card-inner");

            experienceCards.forEach((card, index) => {
              const cardOffset = 
                card.getBoundingClientRect().top -
                content.getBoundingClientRect().top

              const cardRevealAt = 
                contentScrollStart +
                Math.max(0, cardOffset - viewport.clientHeight + 120);

              const entersFromLeft = 
                window.innerWidth < 768 || index % 2 === 0;

              tl.fromTo(
                card,
                { x: entersFromLeft ? - 56 : 56, autoAlpha: 0 },
                {
                  x: 0,
                  autoAlpha: 1,
                  duration: 120,
                  ease: "power3.out"
                },
                cardRevealAt
              );
            });

            if (tools) {
              const toolItems =
                tools.querySelectorAll<HTMLElement>(".about-tool-item");

              const toolsOffset =
                tools.getBoundingClientRect().top -
                content.getBoundingClientRect().top;

              // Start when the tech stack approaches the bottom of the viewport.
              const revealAt =
                contentScrollStart +
                Math.max(0, toolsOffset - viewport.clientHeight + 100);

              tl.fromTo(
                tools,
                {
                  y: 24,
                  autoAlpha: 0,
                },
                {
                  y: 0,
                  autoAlpha: 1,
                  duration: 120,
                  ease: "power3.out",
                },
                revealAt,
              );

              if (toolItems.length > 0) {
                tl.fromTo(
                  toolItems,
                  {
                    y: 12,
                    autoAlpha: 0,
                    scale: 0.94,
                  },
                  {
                    y: 0,
                    autoAlpha: 1,
                    scale: 1,
                    duration: 80,
                    stagger: 12,
                    ease: "power2.out",
                  },
                  revealAt + 80,
                );
              }
            }

            tl.addLabel(`panel-${index}-bottom`);
          }

          if (index < panels.length - 1) {
            const nextPanel = panels[index + 1];
            const transitionDuration = window.innerWidth;
            const transitionStart = tl.duration();

            tl.to(tracker, {
              x: -nextPanel.offsetLeft,
              duration: transitionDuration,
              ease: "none",
            });

            const revealItems =
              nextPanel.querySelectorAll<HTMLElement>(".about-reveal");

            if (revealItems.length > 0) {
              tl.fromTo(
                revealItems,
                {
                  y: -50,
                  autoAlpha: 0,
                },
                {
                  y: 0,
                  autoAlpha: 1,
                  duration: transitionDuration * 0.28,
                  stagger: transitionDuration * 0.06,
                  ease: "power3.out",
                },
                transitionStart + transitionDuration * 0.55,
              );
            }
          }
        });

        // tl.scrollTrigger = undefined;
        timeline = tl;
        timelineRef.current = tl;

        ScrollTrigger.create({
          animation: tl,
          trigger: container,
          start: "top top",
          end: () => `+=${Math.max(1, tl.duration())}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: () => {
            const currentTime = tl.time();
            const currentPanel = panels.reduce<HTMLElement | null>(
              (activePanel, panel) => {
                const labelTime = tl.labels[`panel-${panel.id}-top`];
                return labelTime !== undefined && labelTime <= currentTime
                  ? panel
                  : activePanel;
              },
              null,
            );
            const nextSection = currentPanel?.id ?? "home";

            if (nextSection !== currentSection) {
              currentSection = nextSection;
              setActiveSection(nextSection);
            }
          },
          // snap: {
          //   snapTo: "labelsDirectional",
          //   duration: { min: 0.2, max: 0.6 },
          //   delay: 0.1,
          //   ease: "power2.inOut",
          // },
        });
      };

      buildAnimation();

      const onResize = () => {
        buildAnimation();
        ScrollTrigger.refresh();
      };

      window.addEventListener("resize", onResize);
      ScrollTrigger.refresh();

      return () => {
        window.removeEventListener("resize", onResize);
        timeline?.scrollTrigger?.kill();
        timeline?.kill();
        timelineRef.current = null;
      };
    },
    { scope: containerRef },
  );

  return (
    <main>
      
      <Navigation
        activeSection={activeSection}
        onNavigate={navigateToSection}
      />
      <div ref={containerRef} className="overflow-hidden">
        <div ref={trackRef} className=" flex h-dvh w-max will-change-transform">
          <PortfolioPanel number="01" title="Home" id="home">
            <Hero 
              onNavigate={navigateToSection}
            />
          </PortfolioPanel>

          <PortfolioPanel number="02" title="About" id="about">
            <About />
          </PortfolioPanel>

          <PortfolioPanel number="03" title="Experience" id="experience">
            <Experience />
          </PortfolioPanel>

          <PortfolioPanel number="04" title="Projects" id="projects">
            <Projects />
          </PortfolioPanel>

          <PortfolioPanel number="05" title="Technical Skills" id="skills">
            <Skills />
          </PortfolioPanel>

          <PortfolioPanel number="06" title="Contact" id="contact">
            <Contact />
          </PortfolioPanel>
        </div>
      </div>
    </main>
  );
}
