import React , { useRef , useLayoutEffect} from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const UnevercityModel = ({ Coordinates }) => {

    const { scene } = useGLTF('/models/NewUnivercity.glb' , true , (loader) => {
      loader.setDRACOLoader(new DRACOLoader());
      loader.setMeshoptDecoder(MeshoptDecoder);
    });
    const ref = useRef();

    useLayoutEffect(() => {
      const UpdatePosition = () => {
          const updateCamPosition = [
        [0, 1.5, 0],
        [0, 0.7, 0],
        [0, 2.5, 0],
        [0, 0.7, 0],
        [0, 1.5, 0],
       ];

       if(Coordinates >= 1){
         gsap.to(ref.current.rotation, {
           x: 0,
           y: 1.5,
           z: 0,
           duration: 1,
           ease: "power1.out",
         });

       }else{
         const segmentProgress = 1/4;
       const segmentIndex = Math.floor(Coordinates / segmentProgress);
       if (segmentIndex + 1 >= updateCamPosition.length) return;
       const percenta = (Coordinates% segmentProgress) / segmentProgress;
       const [x, y, z] = updateCamPosition[segmentIndex];
       const [newX, newY, newZ] = updateCamPosition[segmentIndex + 1]
       const X = x + (newX - x) * percenta;
       const Y = y + (newY - y) * percenta;
       const Z = z + (newZ - z) * percenta;

        gsap.to(ref.current.rotation, {
            x: X,
            y: Y,
            z: Z,
            overwrite: true,
            duration: 1,
            ease: "power1.out",
        });
       }
      }
        UpdatePosition();
    }, [Coordinates])

  return <primitive ref={ref} object={scene} position={[0, -6, 0]} scale={0.3} rotation={[0, 1.5 , 0]} />
}

export default UnevercityModel
