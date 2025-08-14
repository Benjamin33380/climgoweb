"use client"

import createGlobe, { COBEOptions } from "cobe"
import { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0.8, // Rotation pour centrer sur l'Europe
  theta: 0.9, // Angle plus élevé pour voir le pôle nord
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [37 / 255, 99 / 255, 235 / 255], // Blue-600 pour cohérence
  glowColor: [1, 1, 1],
  markers: [
    // Gironde/Bordeaux - notre zone principale (markers très discrets)
    { location: [44.8378, -0.5792], size: 0.08 }, // Bordeaux - marker principal
    { location: [44.6596, -1.1211], size: 0.05 },  // Arcachon
    { location: [44.7922, -0.6121], size: 0.04 }, // Pessac
    { location: [44.8049, -0.6075], size: 0.04 }, // Mérignac
    { location: [44.8138, -0.5811], size: 0.04 }, // Talence
    { location: [44.9778, -0.6319], size: 0.03 }, // Le Bouscat
    { location: [44.6397, -1.0389], size: 0.03 }, // La Teste-de-Buch
    { location: [44.7561, -1.0561], size: 0.03 }, // Gujan-Mestras
  ],
}

export function Globe({
  className,
  config = GLOBE_CONFIG,
  showLogo = false,
}: {
  className?: string
  config?: COBEOptions
  showLogo?: boolean
}) {
  let phi = 0
  let width = 0
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef(0)
  const [r, setR] = useState(0)

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value ? "grabbing" : "grab"
    }
  }

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current
      pointerInteractionMovement.current = delta
      setR(delta / 200)
    }
  }

  const onRender = useCallback(
    (state: Record<string, number>) => {
      if (!pointerInteracting.current) phi += 0.005
      state.phi = phi + r
      state.width = width * 2
      state.height = width * 2
    },
    [r],
  )

  const onResize = () => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth
    }
  }

  useEffect(() => {
    window.addEventListener("resize", onResize)
    onResize()

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender,
    })

    setTimeout(() => (canvasRef.current!.style.opacity = "1"))
    return () => globe.destroy()
  }, [config, onRender])

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className,
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
        )}
        ref={canvasRef}
        onPointerDown={(e) =>
          updatePointerInteraction(
            e.clientX - pointerInteractionMovement.current,
          )
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
      
      {/* Logo overlay au centre du globe */}
      {showLogo && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-200/50 dark:border-gray-600/30">
            <Image
              src="/favicon/logo.png"
              alt="ClimGO"
              width={32}
              height={32}
              className="w-8 h-8"
            />
          </div>
        </div>
      )}
    </div>
  )
}
