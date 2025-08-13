import React, { useEffect, useRef, useState } from "react";
import { Float, useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useSpring } from "framer-motion";
import { useFrame } from "@react-three/fiber";

const Laptop = React.forwardRef((props, ref) => {
  const { Coordinates } = props;
  const laptopRef = useRef();
  const [modelLoaded, setModelLoaded] = useState(false);

  const model = useGLTF("models/Laptop-draco.glb", true);
  const screenTexture = useTexture(
    `${import.meta.env.BASE_URL}models/IMG/LaptopScreen.png`
  );

  useEffect(() => {
    if (model && model.scene) {
      setModelLoaded(true);
    }
  }, [model]);

  useEffect(() => {
    if (!modelLoaded) return;

    const screenMesh = model.scene.getObjectByName("Object_19");
    if (screenMesh) {
      screenTexture.anisotropy = 16;
      screenTexture.magFilter = THREE.LinearFilter;
      screenTexture.minFilter = THREE.LinearMipMapLinearFilter;
      screenTexture.needsUpdate = true;

      screenMesh.material = new THREE.MeshStandardMaterial({
        map: screenTexture,
        roughness: 0,
        metalness: 0.1,
      });

      if (!screenMesh.geometry.attributes.uv) {
        console.warn("⚠️ No UVs detected! Texture will not map correctly.");
      }
    }
  }, [modelLoaded, model, screenTexture]);

  const xSpring = useSpring(0, { stiffness: 80, damping: 20, mass: 0.8 });
  const ySpring = useSpring(0, { stiffness: 80, damping: 20, mass: 0.8 });
  const zSpring = useSpring(0, { stiffness: 80, damping: 20, mass: 0.8 });

  useEffect(() => {
    if (!modelLoaded) return;

    if (Coordinates >= 1) {
      xSpring.set(0);
      ySpring.set(-0.8);
      zSpring.set(0);
    } else {
      xSpring.set(0);
      ySpring.set(0);
      zSpring.set(0);
    }
  }, [Coordinates, modelLoaded, xSpring, ySpring, zSpring]);

  useFrame(() => {
    if (modelLoaded && laptopRef.current) {
      laptopRef.current.rotation.set(
        xSpring.get(),
        ySpring.get(),
        zSpring.get()
      );
    }
  });

  if (!modelLoaded) return null;

  return (
    <Float speed={1} floatIntensity={2} rotationIntensity={1}>
      <primitive
        ref={laptopRef}
        object={model.scene}
        position={[0, -3.5, 0]}
        scale={1}
      />
    </Float>
  );
});

export default Laptop;
