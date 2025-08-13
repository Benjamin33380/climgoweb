'use client'

import { useState, useEffect } from 'react'
import { TrendingUp, AlertTriangle, Target, Trophy, Eye, EyeOff } from 'lucide-react'

interface CompetitorData {
  name: string
  domain: string
  estimatedTraffic: number
  topKeywords: string[]
  strengths: string[]
  weaknesses: string[]
  opportunities: string[]
  localRanking: number
  seoScore: number
}

interface CompetitorAnalysisProps {
  city?: string
  showOnlyAdmin?: boolean
  className?: string
}

export default function CompetitorAnalysis({ 
  city, 
  showOnlyAdmin = true, 
  className = '' 
}: CompetitorAnalysisProps) {
  
  const [competitors, setCompetitors] = useState<CompetitorData[]>([])
  const [isVisible, setIsVisible] = useState(false)
  const [loading, setLoading] = useState(true)
  const [showDetails, setShowDetails] = useState<string | null>(null)

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

    analyzeCompetitors()
  }, [city, isVisible])

  const analyzeCompetitors = async () => {
    setLoading(true)
    
    // Simulation d'une analyse concurrentielle locale
    const cityName = city?.replace(/-/g, ' ') || 'Bordeaux'
    
    const competitorData: CompetitorData[] = [
      {
        name: "Chauffage Plus",
        domain: "chauffage-plus-bordeaux.fr",
        estimatedTraffic: 8500,
        topKeywords: [`chauffagiste ${cityName.toLowerCase()}`, "installation chaudière", "pompe à chaleur"],
        strengths: [
          "Ancienneté sur le marché (15 ans)",
          "Présence Google Ads massive",
          "Blog technique fourni"
        ],
        weaknesses: [
          "Site mobile non optimisé",
          "Absence sur les réseaux sociaux",
          "FAQ limitée"
        ],
        opportunities: [
          "Manque de contenu vidéo",
          "Pas de chat en ligne",
          "Certifications RGE peu mises en avant"
        ],
        localRanking: 2,
        seoScore: 75
      },
      {
        name: "Climat Services 33",
        domain: "climat-services33.com",
        estimatedTraffic: 4200,
        topKeywords: [`climatisation ${cityName.toLowerCase()}`, "entretien clim", "dépannage urgence"],
        strengths: [
          "Spécialisation climatisation",
          "Nombreux avis Google (4.8/5)",
          "Service d'urgence 24h/24"
        ],
        weaknesses: [
          "Design du site daté",
          "Contenu dupliqué sur plusieurs pages",
          "Vitesse de chargement lente"
        ],
        opportunities: [
          "Aucune page dédiée aux aides financières",
          "Pas de guide pratique client",
          "Maillage interne faible"
        ],
        localRanking: 4,
        seoScore: 62
      },
      {
        name: "Bordeaux Energie Verte",
        domain: "bordeaux-energie-verte.fr", 
        estimatedTraffic: 12800,
        topKeywords: ["pompe à chaleur bordeaux", "MaPrimeRénov", "rénovation énergétique"],
        strengths: [
          "Excellent positionnement sur les aides",
          "Contenu éditorial de qualité",
          "Partenariats avec collectivités"
        ],
        weaknesses: [
          "Focalisé uniquement sur le haut de gamme",
          "Délais d'intervention longs",
          "Pas de service maintenance"
        ],
        opportunities: [
          "Marché PME/TPE inexploité",
          "Manque de témoignages clients",
          "Absence sur TikTok/Instagram"
        ],
        localRanking: 1,
        seoScore: 88
      },
      {
        name: "Thermo Confort",
        domain: "thermo-confort-gironde.com",
        estimatedTraffic: 2100,
        topKeywords: [`chauffage ${cityName.toLowerCase()}`, "radiateur électrique", "plancher chauffant"],
        strengths: [
          "Prix très compétitifs",
          "Garantie étendue"
        ],
        weaknesses: [
          "Site web basique",
          "Pas de blog",
          "Référencement local faible",
          "Peu d'avis clients"
        ],
        opportunities: [
          "Marché entier à conquérir en ligne",
          "Potentiel énorme d'amélioration SEO",
          "Aucune stratégie de contenu"
        ],
        localRanking: 8,
        seoScore: 34
      }
    ]

    setCompetitors(competitorData)
    setLoading(false)
  }

  const getSEOScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-500 bg-green-50 dark:bg-green-900/20'
    if (score >= 60) return 'text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20'
    return 'text-red-500 bg-red-50 dark:bg-red-900/20'
  }

  const getTrafficColor = (traffic: number) => {
    if (traffic >= 10000) return 'text-red-500'  // Fort trafic = menace
    if (traffic >= 5000) return 'text-yellow-500'  // Trafic moyen
    return 'text-green-500'  // Faible trafic = opportunité
  }

  if (!isVisible) return null

  return (
    <div className={`bg-card rounded-lg border p-6 ${className}`}>
      <div className="flex items-center gap-2 mb-6">
        <Target className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold">
          🕵️ Analyse Concurrentielle {city ? `- ${city.replace(/-/g, ' ')}` : ''}
        </h3>
      </div>

      {loading ? (
        <div className="space-y-4">
          {[1,2,3].map(i => (
            <div key={i} className="animate-pulse border rounded-lg p-4">
              <div className="h-4 bg-muted rounded w-1/3 mb-2"></div>
              <div className="h-3 bg-muted rounded w-1/2 mb-2"></div>
              <div className="h-3 bg-muted rounded w-2/3"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {/* Résumé global */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
              📊 Position concurrentielle ClimGO
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="text-blue-600 dark:text-blue-400 font-medium">Rang local:</span>
                <span className="ml-2 font-bold text-blue-900 dark:text-blue-100">3ème</span>
              </div>
              <div>
                <span className="text-blue-600 dark:text-blue-400 font-medium">SEO Score:</span>
                <span className="ml-2 font-bold text-green-600">82/100</span>
              </div>
              <div>
                <span className="text-blue-600 dark:text-blue-400 font-medium">Opportunités:</span>
                <span className="ml-2 font-bold text-yellow-600">12 identifiées</span>
              </div>
              <div>
                <span className="text-blue-600 dark:text-blue-400 font-medium">Avantage:</span>
                <span className="ml-2 font-bold text-green-600">Site mobile</span>
              </div>
            </div>
          </div>

          {/* Liste des concurrents */}
          {competitors.map((competitor, index) => (
            <div 
              key={index}
              className="border rounded-lg p-4 hover:bg-accent/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                      competitor.localRanking === 1 ? 'bg-yellow-500' : 
                      competitor.localRanking <= 3 ? 'bg-orange-500' : 'bg-gray-500'
                    }`}>
                      {competitor.localRanking}
                    </div>
                    <h4 className="font-medium">{competitor.name}</h4>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {competitor.domain}
                  </span>
                </div>
                <button
                  onClick={() => setShowDetails(
                    showDetails === competitor.name ? null : competitor.name
                  )}
                  className="text-xs text-primary hover:underline flex items-center gap-1"
                >
                  {showDetails === competitor.name ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                  {showDetails === competitor.name ? 'Masquer' : 'Détails'}
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-xs mb-3">
                <div>
                  <span className="text-muted-foreground">Trafic estimé:</span>
                  <div className={`font-medium ${getTrafficColor(competitor.estimatedTraffic)}`}>
                    {competitor.estimatedTraffic.toLocaleString()}/mois
                  </div>
                </div>
                <div>
                  <span className="text-muted-foreground">SEO Score:</span>
                  <span className={`ml-1 px-2 py-1 rounded text-xs font-medium ${getSEOScoreColor(competitor.seoScore)}`}>
                    {competitor.seoScore}/100
                  </span>
                </div>
                <div>
                  <span className="text-muted-foreground">Mots-clés top:</span>
                  <div className="font-medium text-foreground">
                    {competitor.topKeywords.length}
                  </div>
                </div>
              </div>

              {/* Mots-clés principaux */}
              <div className="flex flex-wrap gap-1 mb-3">
                {competitor.topKeywords.slice(0, 3).map((keyword, idx) => (
                  <span 
                    key={idx}
                    className="text-xs bg-muted px-2 py-1 rounded"
                  >
                    {keyword}
                  </span>
                ))}
              </div>

              {/* Détails étendus */}
              {showDetails === competitor.name && (
                <div className="mt-4 pt-4 border-t space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h5 className="text-xs font-medium text-green-600 dark:text-green-400 mb-2 flex items-center gap-1">
                        <Trophy className="w-3 h-3" />
                        Forces
                      </h5>
                      <ul className="text-xs space-y-1">
                        {competitor.strengths.map((strength, idx) => (
                          <li key={idx} className="text-muted-foreground">
                            • {strength}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="text-xs font-medium text-red-600 dark:text-red-400 mb-2 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" />
                        Faiblesses
                      </h5>
                      <ul className="text-xs space-y-1">
                        {competitor.weaknesses.map((weakness, idx) => (
                          <li key={idx} className="text-muted-foreground">
                            • {weakness}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        Opportunités pour ClimGO
                      </h5>
                      <ul className="text-xs space-y-1">
                        {competitor.opportunities.map((opportunity, idx) => (
                          <li key={idx} className="text-muted-foreground">
                            • {opportunity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Recommandations stratégiques */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
            <h4 className="font-medium text-green-900 dark:text-green-100 mb-3">
              🎯 Recommandations stratégiques immédiates
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <span>
                  <strong>Contenu vidéo :</strong> Exploiter le vide laissé par les concurrents sur les tutos installation
                </span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <span>
                  <strong>Chat en ligne :</strong> Se différencier avec un support client instantané
                </span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <span>
                  <strong>Aides financières :</strong> Créer le guide le plus complet de la région
                </span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <span>
                  <strong>Mobile-first :</strong> Continuer l'avantage mobile face aux sites datés
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
