import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import UnevercityModel from "../3DModals/UnevercityModel";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion , useInView } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);


const Education = () => {
  const mainRef = useRef(null);
  const canvaRef = useRef(null);
  const MainConRef = useRef(null);
  const InView = useInView(MainConRef);
  const [Cordinates, setCoordinates] = useState(0);

  useEffect(() => {
    if (!mainRef.current || !canvaRef.current) return;

    gsap.set(canvaRef.current, {
      y: 0,
      x: -50,
      scale: 1,
      duration: 1,
      ease: "power1.out",
    });

    if (window.innerWidth < 768) return;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top 75%",
          end: "bottom 30%",
          scrub: 0.5,
          onUpdate: (self) => {
            setCoordinates(self.progress);
          },
        },
      })
      .to(canvaRef.current, {
        x: 223,
        y: 100,
        scale: 1.2,
        duration: 1,
        ease: "power1.out",
      })
      .to(canvaRef.current, {
        x: -450,
        y: 250,
        duration: 1,
        ease: "power1.out",
      })
      .to(canvaRef.current, {
        x: 223,
        y: 380,
        duration: 1,
        ease: "power1.out",
      })
      .to(canvaRef.current, {
        x: -140,
        y: 520,
        duration: 1,
        ease: "power1.out",
      });
  }, []);

  useEffect(() => {
    if (!canvaRef.current) return;

    if (Cordinates > 0 && Cordinates < 1) {
      canvaRef.current.style.zIndex = 30;
      canvaRef.current.style.mixBlendMode = "lighten"; // or your choice
    } else {
      canvaRef.current.style.zIndex = 0;
      canvaRef.current.style.mixBlendMode = "normal";
    }
  }, [Cordinates]);

  return (
    <>
      <div
        ref={mainRef}
        id="Education"
        className="education bg-gradient-to-r lg:w-full w-auto lg:h-screen h-auto from-slate-800 via-slate-900 to-slate-950 text-white p-8 flex flex-col justify-center items-center shadow-lg z-20 relative"
      >
        <div className="flex flex-row justify-center h-22 lg:ml-0 ml-35">
          {/* Left: Education Heading */}
          <div className="flex justify-center items-center ">
            <h1 className="text-4xl font-bold">Education</h1>
          </div>
          <div
            id="scrollContainer"
            className="flex justify-center items-center"
          >
            <div
              className="w-[300px] h-[300px] mix-blend-lighten relative z-30 pointer-none"
              ref={canvaRef}
              // style={{
              //   zIndex: 30,
              //   position: 'relative',
              //   mixBlendMode: 'lighten',
              //   pointerEvents: 'none',
              // }}
            >
              <Canvas camera={{ position: [90, 30, 5], fov: 70 }}>
                <ambientLight intensity={0.4} />
                <directionalLight
                  position={[0, 950, 10]}
                  intensity={2.5}
                  castShadow
                />
                <pointLight position={[10, 10, 10]} intensity={5} />
                {/* <UnevercityModel Coordinates={Cordinates} /> */}
              </Canvas>
            </div>
          </div>
        </div>
        <div 
          ref={MainConRef} 
          className="max-w-4xl h-auto lg:w-6xl w-auto border-2 p-5 border-[#4218a5] rounded-2xl bg-gradient-to-b from-purple-900 via-gray-900 to-black mx-auto"
        >
          <motion.div 
            className="p-6 bg-black rounded-lg shadow-lg z-0 relative"
            initial={{ opacity: 0, scale: 0.8 , x: -800 }}
            animate={{ opacity: InView ? 1 : 0, scale: 1, x: InView ? 0 : -800 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <h2 className="text-2xl font-bold">BSc. in Computer Science</h2>
            <p className="mt-2">
              I hold a Bachelor's Degree in Computer Science.
            </p>
          </motion.div>
          <motion.div 
            className="p-6 z-0 relative bg-gradient-to-b from-purple-900 via-gray-900 to-black rounded-lg shadow-lg mt-4"
            initial={{ opacity: 0, scale: 0.8 , x: 800 }}
            animate={{ opacity: InView ? 1 : 0, scale: 1, x: InView ? 0 : 800 }}
            transition={{ duration: 0.5, ease: "easeInOut" , delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold lg:ml-35">
              Savitri Bai Phule Pune University
            </h2>
            <p className="mt-2 lg:ml-35">
              I completed my Bachelor's degree at the Savitri Bai Phule Pune
              University, where I gained a solid foundation in computer science
              principles and practices.
            </p>
          </motion.div>
          <motion.div 
            className="p-6 bg-purple-900 rounded-lg shadow-lg mt-4 "
            initial={{ opacity: 0, scale: 0.8 , x: -800 }}
            animate={{ scale: 1, x: InView ? 0 : -800 , opacity: InView ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" , delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold ">
              Master's In Computer Science
            </h2>
            <p className="mt-2 lg:mr-20">
              I pursued my Master's degree in Software Engineering, where I
              specialized in advanced software development methodologies and
              practices.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Education;
