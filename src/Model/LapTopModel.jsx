import React, { useEffect , useRef , useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Laptop from '../3DModals/Laptop'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const LapTopModel = ({ mainRef }) => {

    const [Coordinates, setCoordinates] = useState(0);

    const laptopRef = useRef()

    useEffect(() => {

        if(window.innerWidth < 768) return;

        if (!mainRef.current || !laptopRef.current) return;

        gsap.set(laptopRef.current, {
            x:0,
            y: 0,
            scale: 1,
            ease: 'power1.in',
        })

        const Target = document.getElementById('LapTopModelContainer');

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: Target,
                start: 'top 40%',
                end: 'bottom 20%',
                scrub: 0.5,
                onUpdate: (self) => {
                    if(self.progress <= 0.60272727301626496){
                        setCoordinates(0);
                    }else if(self.progress > 0.60272727301626496){
                        setCoordinates(1);
                    }
                }
            }
        })
        tl.to(laptopRef.current, {
            y: 850,
            x: 600,
            scale: 0.7,
            zIndex: 60,
            ease: 'power1.in',
        })
        return () => tl.kill();
    }, [])

  return (
    <div ref={laptopRef} className='h-[400px] w-[600px]'>
      <Canvas camera={{ position: [0, 0, 10], fov: 25 }}>
          <ambientLight intensity={0.5} />
          <directionalLight
              position={[0, 950, 10]}
              intensity={1}
              castShadow
          />
          <pointLight position={[10, 10, 10]} intensity={200} />
          <Laptop Coordinates={Coordinates} />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
            minAzimuthAngle={-Infinity}
            maxAzimuthAngle={Infinity}
        />
        </Canvas>
    </div>
  )
}

export default LapTopModel
