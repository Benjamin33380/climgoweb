'use client';

import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

interface GlobeConfig {
  width: number;
  height: number;
  onRender: (state: any) => void;
  devicePixelRatio: number;
  phi: number;
  theta: number;
  dark: number;
  diffuse: number;
  mapSamples: number;
  mapBrightness: number;
  baseColor: [number, number, number];
  markerColor: [number, number, number];
  glowColor: [number, number, number];
  markers: Array<{
    location: [number, number];
    size: number;
    color: [number, number, number];
  }>;
}

interface GlobeProps {
  className?: string;
  config: GlobeConfig;
}

export function Globe({ className = "w-full h-full", config }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const globeRef = useRef<any>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    globeRef.current = createGlobe(canvasRef.current, {
      ...config,
      onRender: (state: any) => {
        // Auto-rotation
        state.phi = config.phi + Date.now() * 0.0001;
        config.onRender(state);
      },
    });

    return () => {
      if (globeRef.current) {
        globeRef.current.destroy();
      }
    };
  }, [config]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        width: '100%',
        height: '100%',
        maxWidth: '100%',
        aspectRatio: '1',
      }}
    />
  );
}
