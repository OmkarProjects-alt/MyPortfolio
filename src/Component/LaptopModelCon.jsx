import React , { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LapTopModel from '../Model/LapTopModel'
import { Suspense } from 'react'
import { motion } from 'framer-motion'
import BackGround from './BackGround'
import { FlipWords } from './FlipWords'

gsap.registerPlugin(ScrollTrigger);

const LaptopModelCon = () => {

  const mainRef = useRef();

  return (
    <div id='Home' ref={mainRef} className="z-10 relative flex justify-center items-center w-full h-screen mt-7 bg-[#111822]">
      <BackGround/>
      <div className='absolute lg:top-30 lg:left-50 md:top-40 md:left-120 sm:left-100 top-9 left-20 z-2 font-bold bg-gradient-to-r from-[#fff] to-[#ffffff85] select-none bg-clip-text text-transparent'>
        <div className='flex flex-row gap-1'>
          <motion.div
           className='w-2 bg-gradient-to-t to-[#041141] via-[#061753ec] from-[#21265bd7] rounded-b-2xl'
           initial={{y: 200 , opacity: 0}}
           animate={{y: 0 , opacity: 1}}
           transition={{delay: 10.5 , duration: 0.9}}
          />
          <motion.div
            initial={{x: 900 , opacity: 0}}
            animate={{x: 0 , opacity: 1}}
            transition={{delay:11 , duration: 0.9}}
          >
            <h1 className='text-3xl'>Hi, I'm Omkar</h1>
            <h2 className='text-2xl'>I Create this 3D Portfolio</h2>
            <h1 className='text-2xl'>Powered by</h1>
            <div className='text-4xl'><FlipWords words={["React" ,"Three Js" ,"Fremer motion", "Tailwind CSS"]}/></div>
          </motion.div>
        </div>
      </div>
      <div id='LapTopModelContainer' className="flex justify-center items-center absolute -left-25 lg:left-120 top-40 z-20">
        <LapTopModel mainRef={mainRef} />
      </div>
      <div
        className="absolute left-0 w-full h-24 pointer-events-none"
        style={{
          bottom: '-52px',
          background: 'linear-gradient(to top, rgba(30,30,30,0.7) 60%, transparent 100%)',
          filter: 'blur(12px)',
        }}
      />
    </div>
  )
}

export default LaptopModelCon