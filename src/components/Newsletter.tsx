'use client'

import { useState } from 'react'
import { Mail, Send, CheckCircle } from 'lucide-react'

interface NewsletterProps {
  className?: string
  title?: string
  description?: string
  compact?: boolean
}

export default function Newsletter({ 
  className = '',
  title = "Restez informé avec ClimGO",
  description = "Recevez nos conseils, actualités et offres spéciales directement dans votre boîte mail.",
  compact = false
}: NewsletterProps) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes('@')) {
      setStatus({
        type: 'error',
        message: 'Veuillez entrer un email valide'
      })
      return
    }

    setIsSubmitting(true)
    setStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name: name || null,
          source: 'newsletter_widget'
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({
          type: 'success',
          message: data.message
        })
        setEmail('')
        setName('')
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Erreur lors de l\'abonnement'
        })
      }
    } catch (_error) {
      setStatus({
        type: 'error',
        message: 'Erreur de connexion. Veuillez réessayer.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (compact) {
    return (
      <div className={`bg-gradient-to-r from-[#03144A] to-[#F97316] rounded-lg p-6 text-white ${className}`}>
        <div className="flex items-center space-x-3 mb-4">
          <Mail className="w-6 h-6" />
          <h3 className="text-lg font-semibold">Newsletter ClimGO</h3>
        </div>
        
        {status.type === 'success' ? (
          <div className="flex items-center space-x-3 text-green-200">
            <CheckCircle className="w-5 h-5" />
            <p className="text-sm">{status.message}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            {status.type === 'error' && (
              <p className="text-red-200 text-sm">{status.message}</p>
            )}
            
            <div className="flex space-x-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                className="flex-1 px-3 py-2 rounded bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 bg-white text-[#03144A] rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
              >
                {isSubmitting ? (
                  <div className="w-4 h-4 border-2 border-[#03144A] border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    )
  }

  return (
    <section className={`py-16 bg-gray-50 dark:bg-gray-900 ${className}`}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#03144A] to-[#F97316] rounded-full mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {status.type === 'success' ? (
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-8">
            <CheckCircle className="w-16 h-16 text-green-600 dark:text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-2">
              Abonnement réussi !
            </h3>
            <p className="text-green-700 dark:text-green-300">
              {status.message}
            </p>
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              {status.type === 'error' && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <p className="text-red-800 dark:text-red-200 text-sm font-medium">
                    {status.message}
                  </p>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="newsletter-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Prénom (optionnel)
                  </label>
                  <input
                    type="text"
                    id="newsletter-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#F97316] focus:border-transparent"
                    placeholder="Votre prénom"
                  />
                </div>
                
                <div>
                  <label htmlFor="newsletter-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="newsletter-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#F97316] focus:border-transparent"
                    placeholder="votre@email.com"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#03144A] to-[#F97316] text-white px-8 py-4 rounded-lg font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity flex items-center justify-center space-x-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Abonnement en cours...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>S'abonner à la newsletter</span>
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 dark:text-gray-400">
                En vous abonnant, vous acceptez de recevoir nos emails. Vous pouvez vous désabonner à tout moment.
                Nous respectons votre vie privée et ne partageons jamais vos données.
              </p>
            </form>
          </div>
        )}

        {/* Benefits */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-left">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-[#F97316] rounded-lg flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                Conseils d'experts
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Astuces pour optimiser votre chauffage et climatisation
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-[#F97316] rounded-lg flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                Offres exclusives
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Promotions et tarifs préférentiels réservés aux abonnés
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-[#F97316] rounded-lg flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                Actualités
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Nouveautés, réglementations et évolutions du secteur
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

