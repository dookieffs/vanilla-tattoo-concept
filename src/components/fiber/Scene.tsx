"use client";

import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Suspense } from "react";
import { Html, ScrollControls } from "@react-three/drei";

function Loader() {
  return (
    <Html center>
      <div className="loader"></div>
    </Html>
  );
}

export default function Scene() {
  return (
    <Canvas
      gl={{ antialias: true }}
      dpr={[1, 1.5]}
      className="relative h-svh sl-fix-dimensions"
      camera={{ position: [0, 0, 12], fov: 50, near: 7, far: 40 }}
    >
      <directionalLight position={[-5, -5, 5]} intensity={1} />
      <Suspense fallback={<Loader />}>
        <ScrollControls damping={1} pages={3}>
          <Model position={[0, -6, 0]} rotation={[0, -0.2, 0]} />
        </ScrollControls>
      </Suspense>
    </Canvas>
  );
}
