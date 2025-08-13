'use client'

import { useState, useEffect } from 'react'
import { TrendingUp, Users, Search, MapPin, Calendar, Target } from 'lucide-react'

interface ContentSuggestion {
  title: string
  type: 'blog' | 'page' | 'faq' | 'service'
  priority: 'high' | 'medium' | 'low'
  searchVolume: number
  difficulty: number
  reason: string
  keywords: string[]
  suggestedCity?: string
}

interface ContentSuggestionsProps {
  currentCity?: string
  currentService?: string
  showOnlyAdmin?: boolean
}

export default function ContentSuggestions({ 
  currentCity, 
  currentService, 
  showOnlyAdmin = true 
}: ContentSuggestionsProps) {
  
  const [suggestions, setSuggestions] = useState<ContentSuggestion[]>([])
  const [isVisible, setIsVisible] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // S'assurer qu'on est côté client
    if (typeof window === 'undefined') return
    
    // Vérifier si on doit afficher (seulement pour admins)
    if (showOnlyAdmin) {
      const isAdmin = localStorage.getItem('climgo_admin') === 'true' || 
                     process.env.NODE_ENV === 'development'
      setIsVisible(isAdmin)
    } else {
      setIsVisible(true)
    }

    if (!isVisible) return

    generateSuggestions()
  }, [currentCity, currentService, isVisible])

  const generateSuggestions = async () => {
    setLoading(true)
    
    // Simulations basées sur des vraies recherches Google
    const localSuggestions: ContentSuggestion[] = [
      
      // SUGGESTIONS SAISONNIÈRES 🗓️
      {
        title: "Guide climatisation été 2025 : préparer sa maison",
        type: 'blog',
        priority: 'high',
        searchVolume: 8200,
        difficulty: 25,
        reason: "Pic de recherche avant l'été",
        keywords: ['climatisation été', 'préparer climatisation', 'entretien clim avant été'],
        suggestedCity: currentCity
      },
      {
        title: "Chaudière en panne hiver : que faire en urgence ?",
        type: 'blog', 
        priority: 'high',
        searchVolume: 12500,
        difficulty: 30,
        reason: "Recherches urgentes hivernales",
        keywords: ['chaudière panne hiver', 'chauffage urgence', 'dépannage chauffage nuit']
      },

      // SUGGESTIONS LOCALES 📍
      {
        title: `Installation pompe à chaleur ${currentCity?.replace(/-/g, ' ')} : aides 2025`,
        type: 'page',
        priority: 'high', 
        searchVolume: 1500,
        difficulty: 20,
        reason: "Fort intérêt local + aides gouvernementales",
        keywords: [`pompe chaleur ${currentCity}`, 'MaPrimeRénov 2025', 'CEE pompe chaleur'],
        suggestedCity: currentCity
      },
      {
        title: `Chauffagiste ${currentCity?.replace(/-/g, ' ')} : tarifs et devis gratuit`,
        type: 'page',
        priority: 'medium',
        searchVolume: 890,
        difficulty: 15,
        reason: "Recherche commerciale locale forte",
        keywords: [`chauffagiste ${currentCity}`, `prix chauffage ${currentCity}`],
        suggestedCity: currentCity
      },

      // SUGGESTIONS TECHNIQUES 🔧
      {
        title: "Pompe à chaleur air-eau vs air-air : comparatif 2025",
        type: 'blog',
        priority: 'high',
        searchVolume: 15600,
        difficulty: 35,
        reason: "Question récurrente clients", 
        keywords: ['PAC air eau vs air air', 'différence pompe chaleur', 'choisir pompe chaleur']
      },
      {
        title: "Prix installation climatisation maison : guide complet",
        type: 'blog',
        priority: 'medium',
        searchVolume: 9800,
        difficulty: 40,
        reason: "Forte recherche commerciale",
        keywords: ['prix climatisation maison', 'coût installation clim', 'devis climatisation']
      },

      // SUGGESTIONS AIDES FINANCIÈRES 💰
      {
        title: "MaPrimeRénov' 2025 : montants pour pompe à chaleur",
        type: 'blog',
        priority: 'high',
        searchVolume: 22000,
        difficulty: 45,
        reason: "Nouveaux barèmes 2025",
        keywords: ['MaPrimeRénov 2025', 'aide pompe chaleur', 'prime rénovation énergétique']
      },
      {
        title: "CEE chauffage : comment obtenir vos primes énergie",
        type: 'blog',
        priority: 'medium',
        searchVolume: 5400,
        difficulty: 25,
        reason: "Méconnaissance des CEE",
        keywords: ['CEE chauffage', 'prime énergie', 'certificat économie énergie']
      },

      // SUGGESTIONS MAINTENANCE 🛠️
      {
        title: "Entretien chaudière obligatoire : fréquence et tarifs",
        type: 'blog',
        priority: 'medium',
        searchVolume: 18700,
        difficulty: 30,
        reason: "Obligation légale méconnue",
        keywords: ['entretien chaudière obligatoire', 'maintenance chaudière gaz', 'contrat entretien']
      },
      {
        title: "Nettoyage filtre climatisation : tutoriel étape par étape",
        type: 'blog',
        priority: 'low',
        searchVolume: 6800,
        difficulty: 15,
        reason: "DIY populaire",
        keywords: ['nettoyer filtre climatisation', 'entretien clim soi même']
      },

      // SUGGESTIONS TENDANCES 📈
      {
        title: "Chauffage hydrogène : l'avenir du chauffage domestique ?",
        type: 'blog',
        priority: 'low',
        searchVolume: 2100,
        difficulty: 55,
        reason: "Tendance émergente",
        keywords: ['chauffage hydrogène', 'hydrogène domestique', 'avenir chauffage']
      },
      {
        title: "Domotique chauffage : contrôler sa température à distance",
        type: 'blog',
        priority: 'medium',
        searchVolume: 4300,
        difficulty: 35,
        reason: "IoT en plein essor",
        keywords: ['domotique chauffage', 'thermostat connecté', 'maison intelligente']
      }
    ]

    // Filtrer et trier selon le contexte
    let filteredSuggestions = localSuggestions

    // Si on est sur une page service spécifique, prioriser ce service
    if (currentService) {
      filteredSuggestions = filteredSuggestions.map(suggestion => {
        if (suggestion.keywords.some(keyword => 
          keyword.toLowerCase().includes(currentService.replace(/-/g, ' '))
        )) {
          return { ...suggestion, priority: 'high' as const }
        }
        return suggestion
      })
    }

    // Trier par priorité puis volume de recherche
    filteredSuggestions.sort((a, b) => {
      const priorityOrder = { high: 3, medium: 2, low: 1 }
      if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
        return priorityOrder[b.priority] - priorityOrder[a.priority]
      }
      return b.searchVolume - a.searchVolume
    })

    setSuggestions(filteredSuggestions.slice(0, 8))
    setLoading(false)
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-500 bg-red-50 dark:bg-red-900/20'
      case 'medium': return 'text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20'
      case 'low': return 'text-green-500 bg-green-50 dark:bg-green-900/20'
      default: return 'text-gray-500 bg-gray-50 dark:bg-gray-900/20'
    }
  }

  const getDifficultyLabel = (difficulty: number) => {
    if (difficulty <= 20) return { label: 'Facile', color: 'text-green-500' }
    if (difficulty <= 40) return { label: 'Moyen', color: 'text-yellow-500' }
    return { label: 'Difficile', color: 'text-red-500' }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return <Calendar className="w-4 h-4" />
      case 'page': return <Target className="w-4 h-4" />
      case 'faq': return <Users className="w-4 h-4" />
      case 'service': return <MapPin className="w-4 h-4" />
      default: return <Search className="w-4 h-4" />
    }
  }

  if (!isVisible) return null

  return (
    <div className="bg-card rounded-lg border p-6 mt-8">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold">
          💡 Suggestions de contenu SEO
        </h3>
        {currentCity && (
          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
            {currentCity.replace(/-/g, ' ')}
          </span>
        )}
      </div>

      {loading ? (
        <div className="space-y-3">
          {[1,2,3].map(i => (
            <div key={i} className="animate-pulse">
              <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-muted rounded w-1/2"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {suggestions.map((suggestion, index) => (
            <div 
              key={index}
              className="border rounded-lg p-4 hover:bg-accent/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  {getTypeIcon(suggestion.type)}
                  <h4 className="font-medium text-sm">
                    {suggestion.title}
                  </h4>
                </div>
                <span className={`text-xs px-2 py-1 rounded ${getPriorityColor(suggestion.priority)}`}>
                  {suggestion.priority}
                </span>
              </div>

              <p className="text-xs text-muted-foreground mb-3">
                {suggestion.reason}
              </p>

              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Search className="w-3 h-3" />
                    <span>{suggestion.searchVolume.toLocaleString()}/mois</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Target className="w-3 h-3" />
                    <span className={getDifficultyLabel(suggestion.difficulty).color}>
                      {getDifficultyLabel(suggestion.difficulty).label}
                    </span>
                  </div>
                </div>
                <span className="text-muted-foreground capitalize">
                  {suggestion.type}
                </span>
              </div>

              <div className="mt-2 flex flex-wrap gap-1">
                {suggestion.keywords.slice(0, 3).map((keyword, idx) => (
                  <span 
                    key={idx}
                    className="text-xs bg-muted px-2 py-1 rounded"
                  >
                    {keyword}
                  </span>
                ))}
                {suggestion.keywords.length > 3 && (
                  <span className="text-xs text-muted-foreground">
                    +{suggestion.keywords.length - 3} mots-clés
                  </span>
                )}
              </div>
            </div>
          ))}

          <div className="text-center pt-4 border-t">
            <p className="text-xs text-muted-foreground">
              💡 Créez ce contenu pour améliorer votre référencement local
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
