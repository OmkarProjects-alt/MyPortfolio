import React, { useRef, useEffect, useState } from "react";
import LanguageBall from "../3DModals/LanguageBall";
import { motion, useInView } from "framer-motion";

const SkillSection = (delay) => {
  const BallRef = useRef();
  const [Hoverd, setHoverd] = useState(false);
  const inView = useInView(BallRef);

  // useEffect(() => {
  //   const handleMouseMove = (event) => {
  //     if (BallRef.current) {
  //       BallRef.current.
  //     }
  //   };
  //   window.addEventListener('mousemove', handleMouseMove);
  // }, []);

  const Languages = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  ];

  return (
    <div
    ref={BallRef}
      id="Skills"
      className="z-10 relative bg-gradient-to-br from-[#251b35] via-[#2b1649] to-[#3b0f60] p-3"
    >
      <h2 className="text-3xl text-center text-white font-bold mt-10">
        Skills
      </h2>
      <div className="lg:flex md:flex flex-row lg:gap-6 flex-wrap justify-center grid-cols-2 grid justify-items-center">
        {Languages.map((lang, index) => (
          <div key={index} className=" flex justify-center items-cente w-20 h-40 md:w-50 lg:w-80">
            <motion.div
              
              initial={{ y: 770 , x: 0 , opacity: 0}}
              animate={{ y: inView ? 0 : 770 , x: 0 , opacity: 1}}
              transition={{
                duration: 1,
                delay: index * 0.3,
                ease: "backInOut",
              }}
            >
              <LanguageBall lang={lang} />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
