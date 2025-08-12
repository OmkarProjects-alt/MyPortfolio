import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Loading = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const totalDuration = 10000;

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / totalDuration) * 100, 100);
      setProgress(newProgress);

      if (newProgress >= 100) {
        clearInterval(interval);
        setIsComplete(true);
        
        setTimeout(() => {
          document.body.style.overflow = '';
          if (onComplete) onComplete();
        }, 500);
      }
    }, 50);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  const dots = 3;
  const radius = 20;
  const dotSize = 12;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex justify-center items-center bg-[#181818ef] font-sans"
      style={{ pointerEvents: isComplete ? 'none' : 'auto' }}
    >
      <div className="flex flex-col items-center gap-5">
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ 
            duration: 0.5,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
          className="text-white text-2xl font-bold mb-2"
        >
          {Math.floor(progress)}%
        </motion.div>
        
        <div className="relative w-16 h-16">
          {[...Array(dots)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-purple-600 rounded-full"
              style={{
                left: '50%',
                top: '50%',
                x: radius * Math.cos((i * (2 * Math.PI)) / dots) - dotSize/2,
                y: radius * Math.sin((i * (2 * Math.PI)) / dots) - dotSize/2,
                originX: 0,
                originY: 0,
              }}
              animate={{
                rotate: 360,
                opacity: [0.7, 1, 0.7],
                scale: [1, 1.2, 1],
                boxShadow: [
                  '0 0 0 rgba(110, 69, 226, 0)',
                  '0 0 8px rgba(110, 69, 226, 0.8)',
                  '0 0 0 rgba(110, 69, 226, 0)'
                ]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: 'easeInOut'
              }}
            />
          ))}
        </div>
        
        <motion.div
          className={`text-gray-400 text-sm uppercase tracking-wider mt-2 ${
            isComplete ? 'text-green-500' : ''
          }`}
          animate={isComplete ? { 
            scale: [1, 1.1, 1],
            color: ['#9CA3AF', '#4ADE80', '#4ADE80']
          } : {}}
          transition={{
            duration: 0.5,
            times: [0, 0.5, 1]
          }}
        >
          {isComplete ? 'Complete!' : 'Loading'}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loading;