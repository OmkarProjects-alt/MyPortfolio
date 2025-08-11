import React , { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import LapTopModel from '../Model/LapTopModel'
import { Suspense } from 'react'
// import LavaPlanet from '../3DModals/LavaPlanet'
import BackGround from './BackGround'

// const LazyPlanet = React.lazy(() => import('../3DModals/LavaPlanet'));

gsap.registerPlugin(ScrollTrigger);

const LaptopModelCon = () => {

  const mainRef = useRef();

  return (
    <div id='Home' ref={mainRef} className="z-10 relative flex justify-center items-center w-full h-screen mt-7 bg-[#111822]">
      <BackGround/>
      <div className='absolute top-10 left-10 z-2 font-bold text-3xl text-purple-800'>
        <h1>Hi, I'm Omkar</h1>
      </div>
      {/* <div id='LapTopModelContainer' className="flex justify-center items-center absolute -left-25 lg:left-120 top-40 z-20">
        <LapTopModel mainRef={mainRef} />
      </div> */}
       {/* <div  className='select-none absolute top-0 left-100 w-full h-1/2 flex justify-center items-center'>
         <LavaPlanet/>
        </div> */}
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