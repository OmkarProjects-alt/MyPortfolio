import React from 'react'
import { motion, useTransform, useScroll, useSpring } from 'framer-motion'

const BackGround = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });
  const mounten = useTransform(x, [0, 0.5], ['0%', '0%']);
  const mounten2 = useTransform(x, [0, 0.5], ['0%', '30%']);
  const mounten3 = useTransform(x, [0, 0.5], ['0%', '0%']);
  const mounten4 = useTransform(x, [0, 0.2], ['0%', '20%']);
  const mounten5 = useTransform(x, [0, 0.2], ['0%', '150%']);
  const mounten6 = useTransform(x, [0, 0.2], ['0%', '-280%']);


  return (
    <section className='absolute inset-0'>
      <div className='relative h-screen overflow-y-hidden'>
        <motion.div
          className='absolute -z-10 h-screen w-full'
          style={{
            backgroundImage: 'url(/models/IMG/Image4.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            y: mounten3,
          }}
        />
        <motion.div
          className='absolute -z-20 h-screen w-full'
          style={{
            backgroundImage: 'url(/models/IMG/Image3.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            y: mounten2,
          }}
        />
        <motion.div
          className='absolute -z-30 h-screen w-full'
          style={{
            backgroundImage: 'url(/models/IMG/ImageBG.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            y: mounten,
          }}
        />
        <motion.div
            className='absolute top-30 left-80 lg:left-80 lg:top-64 md:top-30 md:left-130 sm:left-120 -z-20 h-20 w-20'
            style={{
                backgroundImage: 'url(/models/IMG/Image1.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                y: mounten4,
            }}
        />

        <motion.div
            className='absolute lg:right-60 lg:top-64 -z-30 h-40 w-40'
            style={{
                backgroundImage: 'url(/models/IMG/Image2.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                y: mounten5,
            }}
        />
        <motion.div
            className='absolute top-50 sm:top-50 sm:left-30 lg:left-120 lg:top-34 md:top-80 md:left-150 -z-30 h-5 w-15'
            style={{
                backgroundImage: 'url(/models/IMG/Image5.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                y: mounten6,
            }}
        />
      </div>
    </section>
  )
}

export default BackGround