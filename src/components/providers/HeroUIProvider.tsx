"use client"

import { HeroUIProvider } from '@heroui/react'
import { ReactNode } from 'react'

interface ClientHeroUIProviderProps {
  children: ReactNode
}

export function ClientHeroUIProvider({ children }: ClientHeroUIProviderProps) {
  return <HeroUIProvider>{children}</HeroUIProvider>
}
