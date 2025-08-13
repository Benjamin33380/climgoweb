'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Save, Eye } from 'lucide-react'
import RichTextEditor from '@/components/admin/RichTextEditor'

export default function NewPostPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    coverImage: '',
    published: false,
    featured: false,
    tags: [] as string[],
    category: '',
    seoTitle: '',
    seoDescription: '',
    keywords: ''
  })
  
  const [tagInput, setTagInput] = useState('')
  const [keywordInput, setKeywordInput] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const [showMarkdownGuide, setShowMarkdownGuide] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' })

  useEffect(() => {
    if (status === 'loading') return
    if (!session || (session.user.role !== 'ADMIN' && session.user.role !== 'EDITOR')) {
      router.push('/auth/signin')
    }
  }, [session, status, router])

  const handleSubmit = async (publish = false) => {
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/admin/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          published: publish,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: publish ? 'Article publié avec succès !' : 'Brouillon sauvegardé !'
        })
        
        // Rediriger vers l'éditeur de l'article créé
        setTimeout(() => {
          router.push(`/admin/posts/${data.id}`)
        }, 1500)
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Erreur lors de la sauvegarde'
        })
      }
    } catch (_error) {
      setSubmitStatus({
        type: 'error',
        message: 'Erreur de connexion'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const addTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData({
        ...formData,
        tags: [...formData.tags, tagInput.trim()]
      })
      setTagInput('')
    }
  }

  const removeTag = (tagToRemove: string) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter(tag => tag !== tagToRemove)
    })
  }

  // Gestion des mots
  const countWords = (text: string) => {
    if (!text) return 0
    const plainText = text.replace(/<[^>]*>/g, '') // Retire HTML
    return plainText.trim().split(/\s+/).filter(word => word.length > 0).length
  }

  const updateWordCount = (content: string) => {
    const count = countWords(content)
    setWordCount(count)
  }

  // Gestion des keywords
  const addKeyword = () => {
    if (keywordInput.trim()) {
      const newKeywords = formData.keywords 
        ? `${formData.keywords}, ${keywordInput.trim()}`
        : keywordInput.trim()
      setFormData({
        ...formData,
        keywords: newKeywords
      })
      setKeywordInput('')
    }
  }

  const uploadImage = async (file: File) => {
    // Ici vous pouvez intégrer Cloudinary ou autre service d'upload
    // Pour l'instant, on simule
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', 'your_preset') // Remplacer par votre preset Cloudinary
    
    try {
      const response = await fetch('https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload', {
        method: 'POST',
        body: formData
      })
      const data = await response.json()
      return data.secure_url
    } catch (_error) {
      console.error('Upload error:', _error)
      return null
    }
  }

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#F97316]"></div>
      </div>
    )
  }

  if (!session || (session.user.role !== 'ADMIN' && session.user.role !== 'EDITOR')) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <Link
                href="/admin"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Retour au dashboard</span>
              </Link>
              <div className="border-l border-gray-300 dark:border-gray-600 pl-4">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Nouvel Article
                </h1>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <button
                onClick={() => handleSubmit(false)}
                disabled={isSubmitting || !formData.title || !formData.content}
                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Save className="w-5 h-5" />
                <span>Sauvegarder</span>
              </button>
              
              <button
                onClick={() => handleSubmit(true)}
                disabled={isSubmitting || !formData.title || !formData.content}
                className="flex items-center space-x-2 bg-gradient-to-r from-[#03144A] to-[#F97316] text-white px-6 py-2 rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Eye className="w-5 h-5" />
                <span>Publier</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Status Messages */}
        {submitStatus.type && (
          <div className={`mb-6 p-4 rounded-lg ${
            submitStatus.type === 'success' 
              ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200' 
              : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200'
          }`}>
            <p className="font-medium">{submitStatus.message}</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Titre de l'article *
              </label>
              <input
                type="text"
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#F97316] focus:border-transparent"
                placeholder="Entrez le titre de votre article..."
              />
            </div>

            {/* Content Editor */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Contenu de l'article *
                </label>
                <div className="flex items-center gap-4">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    📊 {wordCount} mots
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowMarkdownGuide(!showMarkdownGuide)}
                    className="text-sm text-[#F97316] hover:text-[#03144A] transition-colors font-medium"
                  >
                    📝 Guide Markdown
                  </button>
                </div>
              </div>
              
              {/* Guide Markdown */}
              {showMarkdownGuide && (
                <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">📋 Guide Markdown & SEO</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Titres & Structure</h5>
                      <div className="space-y-1 text-gray-600 dark:text-gray-400 font-mono">
                        <div># Titre H1 (1 seul par article)</div>
                        <div>## Titre H2 (sections principales)</div>
                        <div>### Titre H3 (sous-sections)</div>
                        <div>#### Titre H4</div>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Formatage Texte</h5>
                      <div className="space-y-1 text-gray-600 dark:text-gray-400 font-mono">
                        <div>**Texte en gras**</div>
                        <div>*Texte en italique*</div>
                        <div>`Code inline`</div>
                        <div>~~Texte barré~~</div>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Liens & Images</h5>
                      <div className="space-y-1 text-gray-600 dark:text-gray-400 font-mono">
                        <div>[Texte du lien](URL)</div>
                        <div>![Alt text](URL-image)</div>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Listes & Citations</h5>
                      <div className="space-y-1 text-gray-600 dark:text-gray-400 font-mono">
                        <div>- Liste à puces</div>
                        <div>1. Liste numérotée</div>
                        <div>&gt; Citation</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded border-l-4 border-blue-400">
                    <h5 className="font-medium text-blue-800 dark:text-blue-200 mb-1">💡 Conseils SEO</h5>
                    <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                      <li>• Utilisez 1 seul H1 avec votre mot-clé principal</li>
                      <li>• Structurez avec H2, H3 pour la lisibilité</li>
                      <li>• Visez 300-2000 mots pour un bon référencement</li>
                      <li>• Ajoutez des liens internes vers vos autres articles</li>
                    </ul>
                  </div>
                </div>
              )}
              
              <RichTextEditor
                content={formData.content}
                onChange={(content) => {
                  setFormData({ ...formData, content })
                  updateWordCount(content)
                }}
                placeholder="Commencez à écrire votre article..."
              />
            </div>

            {/* Excerpt */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Extrait (résumé)
              </label>
              <textarea
                id="excerpt"
                rows={3}
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#F97316] focus:border-transparent"
                placeholder="Résumé de l'article qui apparaîtra dans les listes..."
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Cover Image */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <label htmlFor="coverImage" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Image de couverture
              </label>
              <input
                type="url"
                id="coverImage"
                value={formData.coverImage}
                onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#F97316] focus:border-transparent mb-3"
                placeholder="URL de l'image..."
              />
              {formData.coverImage && (
                <img
                  src={formData.coverImage}
                  alt="Aperçu"
                  className="w-full h-32 object-cover rounded-lg"
                />
              )}
            </div>

            {/* Category */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Catégorie
              </label>
              <select
                id="category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#F97316] focus:border-transparent"
              >
                <option value="">Sélectionner une catégorie</option>
                <option value="chauffage">Chauffage</option>
                <option value="climatisation">Climatisation</option>
                <option value="pompe-a-chaleur">Pompe à chaleur</option>
                <option value="maintenance">Maintenance</option>
                <option value="conseils">Conseils</option>
                <option value="actualites">Actualités</option>
              </select>
            </div>

            {/* Tags */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Tags
              </label>
              <div className="flex space-x-2 mb-3">
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault()
                      addTag()
                    }
                  }}
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#F97316] focus:border-transparent"
                  placeholder="Ajouter un tag..."
                />
                <button
                  type="button"
                  onClick={addTag}
                  className="px-3 py-2 bg-[#F97316] text-white rounded hover:bg-[#03144A] transition-colors"
                >
                  +
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="ml-2 text-gray-500 hover:text-red-500"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Options */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Options</h3>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="rounded border-gray-300 text-[#F97316] focus:ring-[#F97316]"
                  />
                  <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Article mis en avant</span>
                </label>
              </div>
            </div>

            {/* SEO */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">SEO</h3>
              <div className="space-y-3">
                <div>
                  <label htmlFor="seoTitle" className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                    Titre SEO
                  </label>
                  <input
                    type="text"
                    id="seoTitle"
                    value={formData.seoTitle}
                    onChange={(e) => setFormData({ ...formData, seoTitle: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#F97316] focus:border-transparent"
                    placeholder="Titre pour les moteurs de recherche"
                  />
                </div>
                <div>
                  <label htmlFor="seoDescription" className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                    Description SEO
                  </label>
                  <textarea
                    id="seoDescription"
                    rows={2}
                    value={formData.seoDescription}
                    onChange={(e) => setFormData({ ...formData, seoDescription: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#F97316] focus:border-transparent"
                    placeholder="Description pour les moteurs de recherche"
                  />
                </div>

                {/* Keywords SEO */}
                <div>
                  <label htmlFor="keywords" className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                    Mots-clés SEO
                  </label>
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={keywordInput}
                        onChange={(e) => setKeywordInput(e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault()
                            addKeyword()
                          }
                        }}
                        className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#F97316] focus:border-transparent text-sm"
                        placeholder="Ajouter un mot-clé"
                      />
                      <button
                        type="button"
                        onClick={addKeyword}
                        className="px-3 py-2 bg-[#F97316] text-white rounded hover:bg-[#03144A] transition-colors text-sm"
                      >
                        +
                      </button>
                    </div>
                    {formData.keywords && (
                      <div className="text-xs text-gray-600 dark:text-gray-400 p-2 bg-gray-50 dark:bg-gray-700 rounded">
                        <strong>Keywords:</strong> {formData.keywords}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
