'use client';

import React, { Suspense, useState } from 'react';
import Image from 'next/image';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

interface Logo3DProps {
  glbUrl?: string;
  fallbackPngUrl?: string;
  isHovered?: boolean;
  className?: string;
}

function LogoModel({ url, isHovered }: { url: string; isHovered: boolean }) {
  try {
    const { scene } = useGLTF(url);
    
    return (
      <primitive 
        object={scene} 
        scale={isHovered ? 1.2 : 1}
        rotation={[0, isHovered ? Math.PI / 4 : 0, 0]}
      />
    );
  } catch (error) {
    // Fallback silencieux si le modèle 3D ne charge pas
    return null;
  }
}

// Composant de fallback simple
function SimpleLogo({ className }: { className: string }) {
  return (
    <div className={`${className} bg-blue-500 rounded-full flex items-center justify-center`}>
      <span className="text-white font-bold text-xs">CG</span>
    </div>
  );
}

export function Logo3D({ 
  glbUrl = '/favicon/logo.glb', 
  isHovered = false, 
  className = "w-8 h-8" 
}: Logo3DProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <SimpleLogo className={className} />;
  }

  return (
    <div className={className}>
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 50 }}
        onCreated={() => {}}
        onError={() => setHasError(true)}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <LogoModel url={glbUrl} isHovered={isHovered} />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export function LogoWithFallback({ 
  glbUrl = '/favicon/logo.glb', 
  fallbackPngUrl = '/favicon/logo.png', 
  isHovered = false, 
  className = "w-8 h-8" 
}: Logo3DProps) {
  const [use3D, setUse3D] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Si erreur ou pas de 3D, utiliser l'image PNG
  if (!use3D || !glbUrl || hasError) {
    return (
      <Image
        src={fallbackPngUrl || '/favicon/logo.png'}
        alt="ClimGO Logo"
        width={32}
        height={32}
        className={className}
      />
    );
  }

  return (
    <div className={className}>
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 50 }}
        onError={() => {
          setHasError(true);
          setUse3D(false);
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <LogoModel url={glbUrl} isHovered={isHovered} />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Suspense>
      </Canvas>
    </div>
  );
}
