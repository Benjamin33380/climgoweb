'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import StructuredData from './StructuredData'

interface BreadcrumbItem {
  name: string
  href: string
}

interface SEOBreadcrumbsProps {
  items: BreadcrumbItem[]
  currentPage: string
  className?: string
}

export default function SEOBreadcrumbs({ items, currentPage, className = '' }: SEOBreadcrumbsProps) {
  
  // Construire les breadcrumbs avec la homepage
  const breadcrumbItems = [
    { name: 'Accueil', href: 'https://www.climgo.fr' },
    ...items.map(item => ({
      name: item.name,
      href: `https://www.climgo.fr${item.href}`
    })),
    { name: currentPage, href: '' }
  ]

  // Données structurées pour Google
  const structuredBreadcrumbs = breadcrumbItems.filter(item => item.href).map(item => ({
    name: item.name,
    url: item.href
  }))

  return (
    <>
      {/* Schema.org pour Google */}
      <StructuredData 
        type="BreadcrumbList" 
        data={structuredBreadcrumbs as unknown as Record<string, unknown>} 
      />
      
      {/* Breadcrumbs visuels */}
      <nav 
        aria-label="Fil d'ariane" 
        className={`flex items-center space-x-2 text-sm text-muted-foreground mb-6 ${className}`}
      >
        <Link 
          href="/" 
          className="flex items-center hover:text-primary transition-colors"
          title="Accueil ClimGO"
        >
          <Home className="w-4 h-4" />
          <span className="sr-only">Accueil</span>
        </Link>
        
        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <ChevronRight className="w-3 h-3 text-muted-foreground/50" />
            <Link 
              href={item.href}
              className="hover:text-primary transition-colors"
              title={`${item.name} - ClimGO`}
            >
              {item.name}
            </Link>
          </div>
        ))}
        
        <ChevronRight className="w-3 h-3 text-muted-foreground/50" />
        <span className="text-foreground font-medium" aria-current="page">
          {currentPage}
        </span>
      </nav>
    </>
  )
}
