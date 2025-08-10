import React, { useEffect, useRef } from "react";
import { Float, useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";

const Laptop = React.forwardRef((props, ref) => {
  const { Coordinates } = props;
  const laptopRef = useRef();

  useEffect(() => {
    if (!laptopRef?.current) return;
    if (Coordinates === undefined || Coordinates === null) return;

    const UpdateRotation = () => {
      const Rotations = [
        [0, 0, 0],
        [0, -0.8, 0],
      ];

      if (Coordinates >= 1) {
        gsap.to(laptopRef.current.rotation, {
          x: 0,
          y: -0.8,
          z: 0,
          duration: 1,
          ease: "power3.inOut",
        });
      }
      if (Coordinates == 0) {
        gsap.to(laptopRef.current.rotation, {
          x: 0,
          y: 0,
          z: 0,
          duration: 1,
          ease: "power3.inOut",
        });
      }
    };
    UpdateRotation();
  }, [Coordinates, laptopRef]);

  const model = useGLTF(`${import.meta.env.BASE_URL}models/asusLaptop2.glb`, true);
  const screenTexture = useTexture(
    `${import.meta.env.BASE_URL}models/IMG/NewImg.png`,
  );

  useEffect(() => {
    const screenMesh = model.scene.getObjectByName("Object_19"); // Use your mesh name

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
  }, [model, screenTexture]);

  return (
    <Float speed={1} floatIntensity={2} rotationIntensity={1}>
      <primitive
        ref={laptopRef}
        object={model.scene}
        position={[0, -3.5, 0]}
        scale={1}
        rotation={[0, 0, 0]}
      />
    </Float>
  );
});

export default Laptop;
