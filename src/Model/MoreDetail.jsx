import React, { useState } from 'react';
import { motion, transform } from 'framer-motion';

const MoreDetail = ({ projectId, description, image, technologies, heading, links, title, video, technical_Highlights, CloseModelBtn }) => {
  const [isLoading, setIsLoading] = useState(false);

     const Values = {
      from: {
        opacity: 0,
        scale: 0.8,
        rotateX: -10,
        rotateY: -90
      },
      to: {
        opacity: 1,
        scale: 1,
        rotateX: 0,
        rotateY: 0
      }
  
  }

  return (
    <div className='fixed top-10 inset-0 flex items-center justify-center z-50 bg-gradient-to-br from-[#251b354c] via-[#2b164942] to-[#3b0f6056] backdrop-blur-sm bg-opacity-70 p-4 overflow-y-auto'>
      <motion.div
        variants={Values}
        initial="from"
        animate="to"
        transition={{ duration: 2 }}
        className='bg-gradient-to-tl from-[#0e0e0e] via-[#1b1b1c] to-[#0d0d0e] rounded-2xl mt-14 shadow-lg p-5 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative animate__animated animate__fadeIn transform-3d'
      >
        {isLoading && (
          <div className='absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-30 rounded-2xl'>
            <div className='w-12 h-12 border-4 border-t-4 border-purple-500 rounded-full animate-spin'></div>
          </div>
        )}
        
        <button 
          className='absolute top-2 right-2 bg-red-700 text-white cursor-pointer h-8 w-8 rounded-full flex items-center justify-center'
          onClick={() => CloseModelBtn(true)}
        >
          ×
        </button>
        
        <div className='flex flex-col lg:flex-row gap-4'>
          <div className='w-full lg:w-1/2'>
            <div className='h-50 w-full overflow-hidden flex justify-center rounded-lg mb-4'>
              <img src={image} alt={title} className='h-full w-full max-h-80 max-w-90 md:h-54 md:w-80 object-cover' />
            </div>
            
            {video && (
              <div className='w-full'>
                <video
                  src={video}
                  muted
                  autoPlay
                  loop
                  className="w-full h-auto rounded-lg"
                  playbackRate={2}
                  onCanPlay={() => setIsLoading(false)}
                  onPlaying={() => setIsLoading(false)}
                  onWaiting={() => setIsLoading(true)}
                  onError={() => setIsLoading(true)}
                />
              </div>
            )}
          </div>
          
          <div className='w-full lg:w-1/2 p-2 font-serif'>
            <h1 className='text-2xl font-bold text-white'>{title}</h1>
            <h2 className='text-gray-400 mt-2'>{heading}</h2>
            <p className='text-gray-300 mt-2'>{description}</p>
            
            {technical_Highlights && (
              <div className='mt-4'>
                <h2 className='font-black text-purple-100'>Technical Highlights:</h2>
                <ul className='list-disc list-inside mt-2'>
                  {Object.entries(technical_Highlights).map(([key, value]) => (
                    <li key={key} className='text-gray-300 mb-1'><span className='font-semibold'>{key}</span>: {value}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className='mt-4'>
              <h3 className='text-lg font-semibold text-white'>Technologies:</h3>
              <div className='flex flex-wrap gap-2 mt-2'>
                {technologies.map((tech, index) => (
                  <span key={index} className='text-blue-500 bg-gray-900 px-3 py-1 rounded-md text-sm'>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className='mt-6 flex gap-4'>
              {links.github && (
                <a href={links.github} target="_blank" rel="noopener noreferrer" className='text-blue-500 hover:underline flex items-center gap-1'>
                  <i className="fa-brands fa-github"></i> GitHub
                </a>
              )}
              {links.live && (
                <>
                  <span className='text-gray-400'>|</span>
                  <a href={links.live} target="_blank" rel="noopener noreferrer" className='text-blue-500 hover:underline flex items-center gap-1'>
                    <i className="fa-solid fa-globe"></i> Live Demo
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MoreDetail;