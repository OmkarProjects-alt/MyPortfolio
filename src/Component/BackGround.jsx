import React from 'react'
import { motion, useTransform, useScroll, useSpring } from 'framer-motion'

const BackGround = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });
  const mounten = useTransform(x, [0, 0.5], ['0%', '0%']);
  const mounten2 = useTransform(x, [0, 0.5], ['0%', '30%']);
  const mounten3 = useTransform(x, [0, 0.5], ['0%', '0%']);

  return (
    <section className='absolute inset-0'>
      <div className='relative h-screen overflow-y-hidden'>
        <motion.div
          className='absolute -z-10 h-screen w-full'
          style={{
            backgroundImage: 'url(/models/IMG/Image3.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            y: mounten3,
          }}
        />
        <motion.div
          className='absolute -z-20 h-screen w-full'
          style={{
            backgroundImage: 'url(/models/IMG/Image8.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            y: mounten2,
          }}
        />
        <motion.div
          className='absolute -z-30 h-screen w-full'
          style={{
            backgroundImage: 'url(/models/IMG/Back1.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            y: mounten,
          }}
        />
        {/* <motion.div
            className='absolute -z-20 h-[20%] w-[20%]'
            style={{
                backgroundImage: 'url(/models/IMG/Image2.png)',
                height: '30%',
                width: '30%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                y: mounten,
            }}
        /> */}

      </div>
    </section>
  )
}

export default BackGround