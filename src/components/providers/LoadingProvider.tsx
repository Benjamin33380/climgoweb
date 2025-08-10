"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { LoadingScreen } from '@/components/ui/LoadingScreen'

interface LoadingContextType {
  isLoading: boolean
  setLoading: (loading: boolean) => void
  showLoading: () => void
  hideLoading: () => void
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export function useLoading() {
  const context = useContext(LoadingContext)
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider')
  }
  return context
}

interface LoadingProviderProps {
  children: ReactNode
}

export function LoadingProvider({ children }: LoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isFirstLoad, setIsFirstLoad] = useState(true)
  const pathname = usePathname()

  // Loading initial de l'app
  useEffect(() => {
    if (isFirstLoad) {
      const timer = setTimeout(() => {
        setIsLoading(false)
        setIsFirstLoad(false)
      }, 100) // Délai minimal pour éviter le flash
      
      return () => clearTimeout(timer)
    }
  }, [isFirstLoad])

  // Loading lors du changement de route
  useEffect(() => {
    if (!isFirstLoad) {
      setIsLoading(true)
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 1500) // 1.5 secondes pour les changements de page
      
      return () => clearTimeout(timer)
    }
  }, [pathname, isFirstLoad])

  const showLoading = () => setIsLoading(true)
  const hideLoading = () => setIsLoading(false)
  const setLoading = (loading: boolean) => setIsLoading(loading)

  const contextValue: LoadingContextType = {
    isLoading,
    setLoading,
    showLoading,
    hideLoading
  }

  return (
    <LoadingContext.Provider value={contextValue}>
      <LoadingScreen 
        isLoading={isLoading} 
        onComplete={() => setIsLoading(false)}
      />
      {children}
    </LoadingContext.Provider>
  )
}
