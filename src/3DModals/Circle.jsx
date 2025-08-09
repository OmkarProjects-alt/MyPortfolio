import React from 'react'
import { Canvas , useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Edges } from '@react-three/drei'

const Model = () => {
  const meshRef = React.useRef()
  useFrame(() => {
    if(meshRef.current) {
      meshRef.current.rotation.x += 0.01;   
      meshRef.current.rotation.y += 0.01;
    }
  })

    return(
        <>
            <mesh ref={meshRef}>
                <icosahedronGeometry args={[1 , 1]} />
                <Edges scale={1.05} threshold={0.01} color="#5F29D5"/>
                <meshStandardMaterial color="#423391" />
            </mesh>
        </>
    )
}

const Circle = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} style={{ height: 80, width: 80 }}>
      <ambientLight intensity={0.5}/>
      <pointLight position={[10 , 10 , 10]}/>
      <Model/>
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

export default Circle