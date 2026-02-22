import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const RTXModel = ({ isMobile }) => {
  const retroPc = useGLTF("/retro_pc/scene.gltf");
  const group = useRef();

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <group ref={group}>
      <hemisphereLight intensity={0.4} groundColor="black" />
      <spotLight
        position={[-10, 30, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1.5}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight position={[10, -10, 5]} intensity={0.8} />
      <pointLight position={[-10, 10, -5]} intensity={0.5} />
      <primitive
        object={retroPc.scene}
        scale={isMobile ? 0.08 : 0.1}
        position={[0, -1.5, 0]}
        rotation={[0, Math.PI / 2, 0]}
      />
    </group>
  );
};

const RTXCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <Canvas
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <color attach="background" args={["#000000"]} />
      <Suspense fallback={<CanvasLoader />}>
        <RTXModel isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default RTXCanvas;
