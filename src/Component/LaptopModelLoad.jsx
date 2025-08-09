import React, { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

const LaptopModelLoad = ({ textureUrl = '/models/VScodeImg.png', ...props }) => {
  const { scene } = useGLTF('/models/laptop.glb')

  useEffect(() => {
    const texture = new THREE.TextureLoader().load(textureUrl)

    scene.traverse((child) => {
      if (child.isMesh) {
        console.log("🔍 Mesh name:", child.name)
        if (child.name === 'pCube132_lambert1_0') {
          child.material = new THREE.MeshBasicMaterial({ map: texture })
          console.log("✅ Texture applied to:", child.name)
        }
      }
    })
  }, [scene, textureUrl])

  return <primitive object={scene} {...props} />
}

export default LaptopModelLoad
