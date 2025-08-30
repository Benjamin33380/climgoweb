"use client"

import createGlobe, { COBEOptions } from "cobe"
import { useCallback, useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

const GLOBE_CONFIG: COBEOptions = {
  width: 1000,
  height: 1000,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.8,
  mapSamples: 16000,
  mapBrightness: 2.0,
  baseColor: [1, 1, 1],
  markerColor: [0.1, 0.1, 0.1],
  glowColor: [1, 1, 1],
  markers: [
    // Gironde - Bordeaux
    { location: [44.8378, -0.5792], size: 0.05 },
    // Bassin d'Arcachon
    { location: [44.6500, -1.1667], size: 0.03 },
    // Libourne
    { location: [44.9178, -0.2417], size: 0.03 },
    // Mérignac
    { location: [44.8333, -0.6333], size: 0.03 },
    // Pessac
    { location: [44.8061, -0.6306], size: 0.03 },
    // Talence
    { location: [44.8089, -0.5906], size: 0.03 },
    // Bègles
    { location: [44.8067, -0.5511], size: 0.03 },
    // Villenave-d'Ornon
    { location: [44.7833, -0.5833], size: 0.03 },
    // Marcheprime
    { location: [44.6965, -0.8563], size: 0.04 },
    // Biganos
    { location: [44.6333, -0.9667], size: 0.03 }
  ],
}

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string
  config?: COBEOptions
}) {
  // Détecter le mode sombre
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Vérifier le mode initial
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark') ||
                    window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDarkMode(isDark)
    }

    checkDarkMode()

    // Observer les changements de classe sur html
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })

    // Observer les changements de préférence système
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', checkDarkMode)

    return () => {
      observer.disconnect()
      mediaQuery.removeEventListener('change', checkDarkMode)
    }
  }, [])

  // Configuration adaptative selon le mode
  const adaptiveConfig = {
    ...config,
    dark: isDarkMode ? 1 : 0,
    diffuse: isDarkMode ? 0.6 : 0.8,
    mapBrightness: isDarkMode ? 1.5 : 2.0,
    baseColor: isDarkMode ? [0.2, 0.2, 0.2] as [number, number, number] : [1, 1, 1] as [number, number, number],
    markerColor: isDarkMode ? [0.8, 0.8, 0.8] as [number, number, number] : [0.1, 0.1, 0.1] as [number, number, number],
    glowColor: isDarkMode ? [0.4, 0.4, 0.4] as [number, number, number] : [1, 1, 1] as [number, number, number],
  }
  let phi = 0
  let width = 0
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef(0)
  const [r, setR] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value
    setIsDragging(value !== null)
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab"
    }
  }

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current
      pointerInteractionMovement.current = delta
      // Sensibilité pour rotation fluide
      setR(delta / 200)
    }
  }

  const onRender = useCallback(
    (state: Record<string, any>) => {
      // Auto-rotation seulement si pas de drag
      if (!isDragging) {
        phi += 0.005
      }
      // Appliquer la rotation totale
      state.phi = phi + r
      // Maintenir les proportions carrées
      const size = width * 2
      state.width = size
      state.height = size
    },
    [r, isDragging],
  )

  const onResize = () => {
    if (canvasRef.current) {
      // Prendre la plus petite dimension pour garder le cercle parfait
      const rect = canvasRef.current.getBoundingClientRect()
      width = Math.min(rect.width, rect.height)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", onResize)
    onResize()

    if (!canvasRef.current) return

    const globe = createGlobe(canvasRef.current, {
      ...adaptiveConfig,
      width: width * 2,
      height: width * 2,
      onRender,
    })

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1"
      }
    })
    return () => globe.destroy()
  }, [isDarkMode, onRender])

  return (
    <div
      className={cn(
        "relative mx-auto aspect-square w-full h-full",
        className,
      )}
    >
      <canvas
        className={cn(
          "w-full h-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          e.preventDefault()
          updatePointerInteraction(e.clientX)
        }}
        onPointerUp={() => {
          updatePointerInteraction(null)
          setTimeout(() => setR(0), 500)
        }}
        onPointerOut={() => {
          updatePointerInteraction(null)
          setTimeout(() => setR(0), 500)
        }}
        onPointerMove={(e) => {
          if (isDragging) {
            updateMovement(e.clientX)
          }
        }}
        onTouchStart={(e) => {
          e.preventDefault()
          if (e.touches[0]) {
            updatePointerInteraction(e.touches[0].clientX)
          }
        }}
        onTouchEnd={() => {
          updatePointerInteraction(null)
          setTimeout(() => setR(0), 500)
        }}
        onTouchMove={(e) => {
          if (isDragging && e.touches[0]) {
            updateMovement(e.touches[0].clientX)
          }
        }}
      />
    </div>
  )
}