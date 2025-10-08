'use client'

import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, Environment } from '@react-three/drei'
import { Suspense, useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import * as THREE from 'three'

// Préchargement global du modèle au chargement du module
useGLTF.preload('/favicon/logo.glb')

function LogoModel() {
  // Utiliser le cache de useGLTF
  const { scene } = useGLTF('/favicon/logo.glb', true)
  const meshRef = useRef<THREE.Group>(null!)
  
  // Cloner la scène pour éviter les conflits si utilisé plusieurs fois
  const clonedScene = scene.clone(true)
  
  return (
    <primitive 
      object={clonedScene} 
      ref={meshRef}
      scale={0.7}
      position={[0, -0.1, 0]}
      rotation={[0, 0, 0]}
    />
  )
}

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="w-8 h-8 border-2 border-white dark:border-black border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
}

interface Logo3DProps {
  className?: string
}

export function Logo3D({ className }: Logo3DProps) {
  const [isInteracting, setIsInteracting] = useState(false)

  return (
    <motion.div 
      className={`cursor-pointer ${className}`}
      animate={{
        scale: isInteracting ? 1.05 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      onClick={() => setIsInteracting(!isInteracting)}
    >
      <Canvas
        camera={{ position: [0, 0, 3], fov: 75 }}
        style={{ width: '100%', height: '100%' }}
      >
        <Suspense fallback={null}>
          {/* Éclairage optimisé */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={0.7} />
          <pointLight position={[-5, -5, -5]} intensity={0.3} />
          <pointLight position={[3, -3, 3]} intensity={0.2} />
          
          {/* Environnement neutre */}
          <Environment preset="city" />
          
          {/* Logo 3D */}
          <LogoModel />
          
          {/* Contrôles de rotation avec la souris */}
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            autoRotate={true}
            autoRotateSpeed={isInteracting ? 4 : 1}
            enableDamping={true}
            dampingFactor={0.05}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
          />
        </Suspense>
      </Canvas>
    </motion.div>
  )
}
