'use client';

import { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Group } from 'three';
import Image from 'next/image';

interface Logo3DModelProps {
  url: string;
  isHovered: boolean;
}

function Logo3DModel({ url, isHovered }: Logo3DModelProps) {
  const ref = useRef<Group>(null);
  const { scene } = useGLTF(url);

  useFrame((state) => {
    if (ref.current) {
      // Rotation continue douce sur Y seulement
      ref.current.rotation.y += isHovered ? 0.012 : 0.008;
      
      // Effet de "breathing" (léger scale) seulement au hover
      if (isHovered) {
        const scale = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.05;
        ref.current.scale.setScalar(scale);
      } else {
        ref.current.scale.setScalar(1);
      }
    }
  });

  return (
    <group ref={ref}>
      <primitive 
        object={scene.clone()} 
        scale={[0.8, 0.8, 0.8]} 
        position={[0, 0, 0]}
      />
    </group>
  );
}

interface Logo3DProps {
  glbUrl: string;
  isHovered: boolean;
  className?: string;
}

export function Logo3D({ glbUrl, isHovered, className = '' }: Logo3DProps) {
  return (
    <div className={`w-20 h-20 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        style={{ width: '100%', height: '100%' }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          {/* Éclairage principal plus intense */}
          <ambientLight intensity={0.8} />
          <directionalLight 
            position={[8, 8, 8]} 
            intensity={1.2} 
            castShadow 
            color="#ffffff"
          />
          {/* Lumières d'appoint pour éliminer les ombres */}
          <pointLight position={[-6, 6, 6]} intensity={0.7} color="#f0f8ff" />
          <pointLight position={[6, -6, 6]} intensity={0.7} color="#fff8f0" />
          <spotLight 
            position={[0, 12, 8]} 
            intensity={0.6}
            angle={0.6}
            penumbra={0.5}
            color="#ffffff"
          />
          {/* Lumière de remplissage */}
          <hemisphereLight 
            args={["#ffffff", "#cccccc", 0.4]}
          />
          
          <Logo3DModel url={glbUrl} isHovered={isHovered} />
        </Suspense>
      </Canvas>
    </div>
  );
}

// Fallback vers le PNG si GLB pas disponible
interface LogoWithFallbackProps {
  glbUrl?: string;
  fallbackPngUrl: string;
  isHovered: boolean;
  className?: string;
}

export function LogoWithFallback({ 
  glbUrl, 
  fallbackPngUrl, 
  isHovered, 
  className = '' 
}: LogoWithFallbackProps) {
  const [useGLB, setUseGLB] = useState(!!glbUrl);

  if (useGLB && glbUrl) {
    return (
      <div onError={() => setUseGLB(false)}>
        <Logo3D 
          glbUrl={glbUrl} 
          isHovered={isHovered} 
          className={className}
        />
      </div>
    );
  }

  // Fallback vers l'animation CSS 3D
  return (
    <div className="perspective-1000">
      <Image
        src={fallbackPngUrl}
        alt="ClimGO Logo"
        width={80}
        height={80}
        className={`w-20 h-20 transition-transform duration-700 transform-gpu ${
          isHovered ? 'animate-spin-3d' : ''
        }`}
        style={{
          transformStyle: 'preserve-3d',
          filter: 'brightness(1.1) contrast(1.05)'
        }}
      />
    </div>
  );
}
