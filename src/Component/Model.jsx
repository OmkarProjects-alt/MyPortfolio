import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import LaptopModelLoad from './LaptopModelLoad'

const Model = () => {
  return (
   <Canvas camera={{ position: [1, 1, 1], fov: 50 }}>
     <ambientLight intensity={0.5} />
     <pointLight position={[10, 10, 10]} />
     <LaptopModelLoad textureUrl="/models/VScodeImg.png" scale={0.5} position={[0, -1, 0]} />
     <OrbitControls/>
   </Canvas>
  )
}

export default Model