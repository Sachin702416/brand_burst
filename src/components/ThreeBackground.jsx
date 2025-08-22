// src/components/ThreeBackground.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

const ThreeBackground = () => {
  return (
    <Canvas style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

export default ThreeBackground;
