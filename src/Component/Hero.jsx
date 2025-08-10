import React, { useRef } from "react";
// import Circle from "../3DModals/Circle";
import {
  animate,
  motion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import { Tilt } from "react-tilt";

const Hero = () => {
  const { scrollXProgress } = useScroll();
  const X = useTransform(scrollXProgress, [0, 1], [-100, 0]);
  const ref = useRef(null);
  const inview = useInView(ref);

    const ScrollTo = (id , offset) => {
      const element = document.getElementById(id);
      if(element){
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
  }


  const defaultOptions = {
    reverse: false,
    max: 45,
    perspective: 1000,
    scale: 1.02,
    speed: 300,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  return (
    <div
      id="Hero"
      className="z-9 relative bg-gradient-to-b from-[#232626e0] via-[#2b164964] to-[#3b0f606f] p-4 md:p-16 lg:p-28 h-auto lg:h-screen"
    >
      <h1 className="text-4xl font-bold text-white">About</h1>
      <div className="flex flex-col gap-y-10 lg:flex-row md:flex-row md:gap-5 justify-between items-center ">
        <Tilt options={defaultOptions} className="w-full lg:w-1/2 md:w-1/2">
          <motion.div
            ref={ref}
            className=" select-none"
            initial={{ opacity: 0, x: -200 }}
            animate={inview ? { opacity: 1, x: 0 } : { opacity: 0, x: -200 }}
            transition={{ duration: 2, ease: "anticipate" }}
          >
            <div className=" lg:h-80 lg:w-160 h-auto  bg-gradient-to-br from-[#251b356d] via-[#2b164964] to-[#3b0f606f] rounded-3xl py-5 px-9 text-emerald-100 animate-slideY shadow-[0_0_35px_-5px_rgba(91,57,159,0.7)] hover:shadow-[0_0_40px_-5px_rgba(91,57,159,0.7)]">
              <h1 className="font-bold font-stretch-120% text-3xl text-purple-50 text-shadow-indigo-900 text-shadow-2xs">
                Omkar Gudappe
              </h1>
              <p className="text-2xl">Student</p>
              <p>
                Hello, I'm Omkar Gudappe, a passionate student with a keen
                interest in web development. I have recently completed my
                Bachelor's degree in Computer Science and I'm eager to apply my
                skills in real-world projects to get experience and knowledge of
                industry level projects. I have worked on some projects like 
                <span className="text-purple-50 underline"><a onClick={(e) => {e.preventDefault() ; ScrollTo('CodeSync' , 50)}} href="#CodeSync"> CodeSync </a></span>
                which is a collaborative web code editor and
                <span className="text-purple-50 underline"><a onClick={(e) => {e.preventDefault() ; ScrollTo('CinePrime' , 50)}} href="#CinePrime"> CinePrime </a></span>
                which is a full-stack movie ticket booking platform. 
              </p>
              <div className="flex justify-between gap-x-3 items-center mt-4">
                <a href="https://github.com/OmkarProjects-alt?tab=repositories" className="text-emerald-100 hover:underline">
                  GitHub Link
                </a>
                <a href="#Contact" onClick={(e) => {e.preventDefault(); ScrollTo('Contact', 50)}} className="text-emerald-100 hover:underline">
                  Contact Me
                </a>
                {/* <Circle/> */}
              </div>
            </div>
          </motion.div>
        </Tilt>
        <div
          id="profile-img"
          className="bg-gradient-to-tr from-[#588ef2] via-[#5b399fdf] to-[#544ce5]  p-3 rounded-full lg:h-90 lg:w-90 h-80 w-80 animate__animated animate__fadeIn animate__delay-2s shadow-[0_0_75px_-5px_rgba(88,142,242,0.6)] hover:shadow-[0_0_75px_-5px_rgba(108,59,130,0.7)]"
        >
          <div className="rounded-full lg:h-84 lg:w-84 h-74 w-74 flex justify-center items-center overflow-hidden">
            <img
              src="https://wallpapercave.com/wp/wp11841496.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
