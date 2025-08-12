import { Canvas } from '@react-three/fiber'
import { OrbitControls , useTexture , Edges , Decal , Float } from '@react-three/drei'
import { motion } from 'framer-motion'

const Model = ({lang}) => {

    const img = useTexture(lang);

  return(
    <>
    <Float speed={1} rotationalIntesity={4} floatIntensity={4}>
       <mesh castShadow receiveShadow position={[0, 0, 0.05]}>
            <icosahedronGeometry args={[2 , 1]}/>
            <Edges scale={1.025} threshold={1.3} color="#968B9B"/>
            <meshStandardMaterial color='#fff8eb' polygonOffset polygonOffsetFactor={-5} flatShading/>
            <Decal
                position={[0, 0, 2]}
                rotation={[2 * Math.PI, 0, 6.25]}
                scale={1.5}
                map={img}
                flatShading
            />
       </mesh>
    </Float>

    </>
  )
}

const LanguageBall = ({lang}) => {

  return (
    <motion.div
      className=' w-23'
    >
      <Canvas
        gl={{antialias: false , powerPreference: "high-performance"}}
      >
          <ambientLight intensity={2} />
          <pointLight position={[10, 10, 10]} />
          <directionalLight position={[-10, -10, -10]} intensity={0.5} />
          <Model lang={lang} />
          <OrbitControls enableZoom={false} />
      </Canvas>
    </motion.div>
  )
}

export default LanguageBall
