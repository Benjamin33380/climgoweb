'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

interface Interactive3DLogoProps {
  className?: string
}

export function Interactive3DLogo({ className }: Interactive3DLogoProps) {
  const [isInteracting, setIsInteracting] = useState(false)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const logoRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!logoRef.current) return
    
    const rect = logoRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const rotateX = (e.clientY - centerY) / 10
    const rotateY = (e.clientX - centerX) / 10
    
    setRotation({ x: -rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setIsInteracting(false)
    setRotation({ x: 0, y: 0 })
  }

  const handleClick = () => {
    setIsInteracting(!isInteracting)
  }

  return (
    <div className={`perspective-1000 ${className}`}>
      <motion.div
        ref={logoRef}
        className="relative w-64 h-64 lg:w-80 lg:h-80 cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        animate={{
          rotateX: rotation.x,
          rotateY: rotation.y,
          scale: isInteracting ? 1.05 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Logo principal sans fond */}
        <motion.div
          className="absolute inset-0"
          style={{
            transform: "translateZ(0px)",
          }}
        >
          <img 
            src="/favicon/logo.png" 
            alt="ClimGO Logo" 
            className="w-full h-full object-contain filter drop-shadow-2xl"
            style={{
              filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.3))"
            }}
          />
        </motion.div>
      </motion.div>


    </div>
  )
}
