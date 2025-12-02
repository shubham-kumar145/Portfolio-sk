import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = () => {
  const computer = useGLTF("/desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <ambientLight intensity={0.4} />
      <pointLight intensity={1} position={[10, 10, 10]} />

      <primitive
        object={computer.scene}
        scale={1}             // Balanced size
        position={[0, -1.6, 0]} // Perfect depth and height
        rotation={[0, -0.6, 0]} // Natural facing angle
      />
     
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 768px)");
    setIsMobile(query.matches);

    const listener = (event) => setIsMobile(event.matches);
    query.addEventListener("change", listener);

    return () => query.removeEventListener("change", listener);
  }, []);

  /* ===========================
        MOBILE VERSION (PNG)
     =========================== */
  if (isMobile) {
    return (
      <div className="w-full flex justify-center items-center mt-10">
        <img
          src="/profile.png"
          alt="profile"
          className="
            w-[250px]
            sm:w-[240px]
            md:w-[300px]
            lg:w-[360px]
            xl:w-[420px]
            h-auto object-contain
          "
        />
      </div>
    );
  }

  /* ===========================
        DESKTOP 3D VERSION
     =========================== */
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 1.5]}
      shadows={false}
      camera={{ position: [8, 2, 5.7], fov: 35 }}   // Better perspective
      gl={{ antialias: true, powerPreference: "low-power" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Computers />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
