'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

interface Logo3DProps {
  glbUrl?: string;
  isHovered?: boolean;
  className?: string;
}

function LogoModel({ url, isHovered }: { url: string; isHovered: boolean }) {
  const { scene } = useGLTF(url);
  
  return (
    <primitive 
      object={scene} 
      scale={isHovered ? 1.6 : 1.4}
      rotation={[0, isHovered ? Math.PI / 6 : 0, 0]}
    />
  );
}

export function Logo3D({ 
  glbUrl = '/favicon/logo.glb', 
  isHovered = false, 
  className = "w-8 h-8" 
}: Logo3DProps) {
  return (
    <div className={className}>
      <Canvas 
        camera={{ position: [0, 0, 10], fov: 50 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          toneMapping: 0,
          toneMappingExposure: 1.3
        }}
      >
        {/* Éclairage fort pour bien voir le logo */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow />
        <pointLight position={[-3, 3, 3]} intensity={0.8} color="#FF6600" />
        <pointLight position={[3, -3, 3]} intensity={0.8} color="#0080FF" />
        <hemisphereLight args={["#ffffff", "#606060", 0.5]} />
        <spotLight position={[0, 10, 0]} intensity={0.6} color="#ffffff" />
        
        <Suspense fallback={
          <mesh>
            <sphereGeometry args={[1.5, 16, 16]} />
            <meshStandardMaterial 
              color="#FF6600" 
              emissive="#FF3300"
              emissiveIntensity={0.2}
            />
          </mesh>
        }>
          <LogoModel url={glbUrl} isHovered={isHovered} />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate={true}
            autoRotateSpeed={1.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

export function LogoWithFallback({ 
  glbUrl = '/favicon/logo.glb', 
  isHovered = false, 
  className = "w-8 h-8" 
}: Logo3DProps) {
  return (
    <div className={className}>
      <Canvas 
        camera={{ position: [0, 0, 10], fov: 50 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          toneMapping: 0,
          toneMappingExposure: 1.3
        }}
      >
        {/* Éclairage fort pour bien voir le logo */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow />
        <pointLight position={[-3, 3, 3]} intensity={0.8} color="#FF6600" />
        <pointLight position={[3, -3, 3]} intensity={0.8} color="#0080FF" />
        <hemisphereLight args={["#ffffff", "#606060", 0.5]} />
        <spotLight position={[0, 10, 0]} intensity={0.6} color="#ffffff" />
        
        <Suspense fallback={
          <mesh>
            <sphereGeometry args={[1.5, 16, 16]} />
            <meshStandardMaterial 
              color="#FF6600" 
              emissive="#FF3300"
              emissiveIntensity={0.2}
            />
          </mesh>
        }>
          <LogoModel url={glbUrl} isHovered={isHovered} />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate={true}
            autoRotateSpeed={1.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}