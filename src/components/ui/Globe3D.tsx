'use client';

import React, { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { BufferGeometry, BufferAttribute } from 'three';

interface Globe3DProps {
  className?: string;
}

function GlobeModel() {
  // Créer les points pour les continents
  const pointsGeometry = useMemo(() => {
    const geometry = new BufferGeometry();
    const positions = [];
    const colors = [];
    
    // Générer des points sur la sphère pour simuler les continents
    for (let i = 0; i < 2000; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();
      
      const x = Math.sin(phi) * Math.cos(theta);
      const y = Math.cos(phi);
      const z = Math.sin(phi) * Math.sin(theta);
      
      // Simuler les continents (éviter les océans)
      const isLand = Math.random() > 0.3; // 70% de chance d'être sur terre
      
      if (isLand) {
        positions.push(x * 1.21, y * 1.21, z * 1.21);
        // Couleur gris clair pour les points des continents
        colors.push(0.7, 0.7, 0.7);
      }
    }
    
    // Ajouter des points plus brillants (comme dans l'image)
    for (let i = 0; i < 5; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();
      
      const x = Math.sin(phi) * Math.cos(theta);
      const y = Math.cos(phi);
      const z = Math.sin(phi) * Math.sin(theta);
      
      positions.push(x * 1.25, y * 1.25, z * 1.25);
      // Couleur blanche pour les points brillants
      colors.push(1, 1, 1);
    }
    
    geometry.setAttribute('position', new BufferAttribute(new Float32Array(positions), 3));
    geometry.setAttribute('color', new BufferAttribute(new Float32Array(colors), 3));
    
    return geometry;
  }, []);

  return (
    <group>
      {/* Sphère principale (fond noir) */}
      <mesh>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshBasicMaterial color="#000000" />
      </mesh>
      
      {/* Points des continents */}
      <points geometry={pointsGeometry}>
        <pointsMaterial 
          size={0.02}
          vertexColors={true}
          transparent={true}
          opacity={0.8}
        />
      </points>
    </group>
  );
}

export function Globe3D({ className = "w-8 h-8" }: Globe3DProps) {
  return (
    <div className={className} style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)' }}>
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          toneMapping: 0,
          toneMappingExposure: 1.0
        }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        
        <Suspense fallback={null}>
          <GlobeModel />
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