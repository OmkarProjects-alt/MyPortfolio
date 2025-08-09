import React , { useRef } from 'react'
import { Canvas , useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

const Model = () => {

    const modelRef = useRef();
    const { scene } = useGLTF('/models/lava_planet.glb' , true);

    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.00500;
        }
    })

    return <primitive ref={modelRef} object={scene} scale={2} position={[0, -1, 0]} />;
}

const LavaPlanet = () => {
  return (
    <div className='select-none'>
      <Canvas camera={{ position: [0, 0, 5], fov: 100 }}>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={5} />
        <Model />
      </Canvas>
    </div>
  )
}

export default LavaPlanet