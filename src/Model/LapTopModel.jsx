import React, { useRef, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Laptop from '../3DModals/Laptop'
import { motion, useScroll, useTransform } from 'framer-motion'

const LapTopModel = ({ mainRef }) => {
  const [Coordinates, setCoordinates] = useState(0);
  const [targetOffset, setTargetOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const [Width , setWidth] = useState(false);

  useEffect(() => {
    const laptopEl = containerRef.current;
    const targetEl = document.getElementById('LaptopTarget');

    if (laptopEl && targetEl) {
      const laptopRect = laptopEl.getBoundingClientRect();
      const targetRect = targetEl.getBoundingClientRect();

      const deltaX = (targetRect.left - laptopRect.left) - 190;
      const deltaY = (targetRect.top - laptopRect.top) - 50;
      console.log("Target Left" , targetRect.left , "laptop left" , laptopRect.left , "deltaX", deltaX , "deltaY", deltaY)

      setTargetOffset({ x: deltaX, y: deltaY });
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 20%"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, targetOffset.y]);
  const x = useTransform(scrollYProgress, [0, 1], [0, targetOffset.x]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.020]);

  scrollYProgress.on("change", (progress) => {
    setCoordinates(progress > 0.6 ? 1 : 0);
  });

  useEffect(() => {
    if(window.innerWidth <= 576){
      setWidth(true);
    }
  }, [])

  return (
    <motion.div
      ref={containerRef}
      style={{ y, x, scale, zIndex: 60 }}
      className='h-[400px] w-[600px]'
    >
      <Canvas camera={{ position: [0, 0, 10], fov: 25 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 950, 10]} intensity={1} castShadow />
        <pointLight position={[10, 10, 10]} intensity={200} />
        <Laptop Coordinates={Coordinates} />
        {!Width &&
         <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={-Infinity}
          maxAzimuthAngle={Infinity}
        />}
      </Canvas>
    </motion.div>
  );
};

export default LapTopModel;
