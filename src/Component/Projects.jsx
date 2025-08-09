import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MoreDetail from "../Model/MoreDetail";
import Background from "/models/IMG/fromWeb2.png";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [HoverProject, setHoverProject] = useState({
    status: false,
    projectId: null,
  });

  const hoverTimeoutRef = useRef();

  const projectData = [
    {
      source: {
        name: "CodeSync",
        id: "1",
      },
      title: "CodeSync",
      heading: "Collaborative Web Code Editor",
      description:
        "CodeSync is a full-stack, real-time collaborative coding platform that enables multiple users to write, edit, and run code together—live, just like Google Docs but for developers. It supports multi-language execution (Python, Java, C++, JS, Go, etc.), a WebSocket-powered terminal, secure user authentication via Firebase (Google/GitHub), and real-time syncing using Yjs & WebSocket.",
      image: "/models/IMG/CodeSync.png",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Yjs",
        "WebSocket",
        "Firebase",
      ],
      video: "/models/video/CodeSyncTryRecord.mp4",
      links: {
        github: "https://github.com/OmkarProjects-alt/CodeSync/tree/master",
        live: "https://codesync-gray.vercel.app/",
      },
      id: "project1_CodeSync",
    },
    {
      source: {
        name: "CinePrime",
        id: "2",
      },
      title: "CinePrime",
      heading: "A Full-Stack Movie Ticket Booking Platform",
      description:
        "CineBook Pro is a full-stack web application that simulates a modern movie ticket booking experience, similar to platforms like BookMyShow or Fandango. Designed with both user convenience and scalability in mind, this project integrates real-time movie data, interactive seat selection, and secure authentication to deliver a seamless cinema booking experience.",
      image: "/models/IMG/CinePrime.png",
      technologies: [
        "React",
        "Python(Flask)",
        "PostgreSQL",
        "GSAP",
        "Firebase",
        "TMDB(API)",
      ],
      video: "/models/video/CinePrimeVideo.mp4",
      links: {
        github: "https://github.com/OmkarProjects-alt/CinePrime",
      },
      id: "project2_CinePrime",
    },
  ];

  useGSAP(() => {
    if (!projectData || projectData.length === 0) return;

    gsap.set([".project1_CodeSync", ".project2_CinePrime"], {
      opacity: 0,
      x: -1000,
    });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to(".project1_CodeSync", {
      x: 0,
      opacity: 1,
      duration: 4,
      scrollTrigger: {
        trigger: ".project1_CodeSync",
        start: "top 80%",
        end: "bottom 60%",
        scrub: 2,
      },
    });

    tl.to(".project2_CinePrime", {
      x: 0,
      opacity: 1,
      duration: 4,
      scrollTrigger: {
        trigger: ".project2_CinePrime",
        start: "top 80%",
        end: "bottom 80%",
        scrub: 2,
      },
    });
  });

  const ResponseFromCommponent = () => {
    setHoverProject({
      status: false,
      projectId: null,
    });
  };

  const handleMouseEnter = (projectId) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setHoverProject({ status: true, projectId: projectId });
    }, 2000);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setHoverProject({ status: false, projectId: null });
  };

  // onMouseEnter={() => handleMouseEnter(project.id)} onMouseLeave={handleMouseLeave}

  return (
    <div
      id="Projects"
      className="z-10 relative bg-gradient-to-br from-[#251b35da] via-[#2b1649e1] to-[#3b0f60dc] p-10 "
    >
      {/* <div style={{backgroundImage: `url(${Background})`}} className='absolute end-0  inset-0 z-0 bg-cover bg-center opacity-30'></div> */}
      <img
        src={Background}
        style={{ rotate: "360deg" }}
        className="z-5 absolute left-[60%] top-51 w-full h-auto max-w-[800px] opacity-30 -translate-x-1/4 -translate-y-1/4"
        alt=""
      />
      <img
        src={Background}
        style={{ rotate: "180deg" }}
        className="z-5 absolute -left-50 bottom-50 sm:bottom-0 w-full h-auto max-w-[800px] opacity-30 translate-x-1/4 translate-y-1/4"
        alt=""
      />
      <h1 className="text-3xl font-bold text-white mb-10">Projects</h1>
      <div className="flex flex-col justify-center items-center  ">
        {projectData.map((project) => (
          <div
            key={project.id}
            id={project.id === "project1_CodeSync" ? "CodeSync" : "CinePrime"}
            className="flex flex-col items-center justify-center mb-10 relative"
          >
            <h1 className="text-2xl font-bold text-white">
              <pre>{project.title}</pre>
            </h1>
            <div className=" border-r-5 h-20 w-1 border-gray-900 z-10"></div>

            <div
              className="
                rounded-full h-5 w-5
                bg-gradient-to-br from-[#3b0f60] to-[#251b35]
                border-2 border-[#583171f8]
                absolute top-29 left-1/2 transform -translate-x-1/2
                z-10 
                shadow-lg 
                transition-all duration-300 
                ring-2 ring-offset-2 ring-offset-[#3b0f60ef] ring-[#59b4ff]
                animate-pulse
              "
            ></div>

            <div
              className={`bg-gradient-to-br from-[#5e3f90] to-[#35226f] h-auto md:w-auto sm:w-auto lg:w-200 rounded-3xl  shadow-lg p-5 z-20 ${project.id}`}
            >
              <div className="flex lg:flex-row md:flex-row md:gap-5 flex-col lg:justify-between md:justify-between p-4">
                <div className="h-auto lg:w-1/2 md:w-1/2 w-full z-30 overflow-hidden flex justify-center items-center">
                  <img src={project.image} alt="" className="h-70 w-70 z-30" />
                </div>
                <div className="lg:w-1/2 md:w-1/2 max-w-full">
                  <h1 className="text-3xl text-white font-bold">
                    {project.title}
                  </h1>
                  <h2 className="text-gray-400 mt-2">{project.heading}</h2>
                  <p>
                    {project.description.split(" ").slice(0, 35).join(" ")}...
                  </p>
                  <div className="flex justify-between mt-4 font-serif">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 hover:underline "
                    >
                      <i className="fa-brands fa-github"></i> GitHub
                    </a>
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 hover:underline"
                    >
                      <i className="fa-solid fa-globe"></i> Live Demo
                    </a>)}
                    <button
                      className="text-gray-900 cursor-pointer hover:underline"
                      onClick={() =>
                        setHoverProject({ status: true, projectId: project.id })
                      }
                    >
                      <i className="fa-solid fa-money-check"></i> more
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {HoverProject.status && HoverProject.projectId === project.id && (
              <MoreDetail
                projectId={project.id}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                heading={project.heading}
                links={project.links}
                title={project.title}
                video={project.video}
                technical_Highlights={project.technical_Highlights}
                CloseModelBtn={ResponseFromCommponent}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
