'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { 
  ArrowLeft,
  Save,
  Plus,
  Trash2,
  Calculator,
  FileText,
  Calendar,
  User,
  Euro
} from 'lucide-react'

interface Client {
  id: string
  name: string
  email: string
}

interface QuoteItem {
  id: string
  description: string
  quantity: number
  unitPrice: number
  total: number
}

interface QuoteFormData {
  clientId: string
  title: string
  description: string
  validUntil: string
  vatRate: number
  items: QuoteItem[]
}

export default function NewQuotePage() {
  const { data: session } = useSession()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [loadingClients, setLoadingClients] = useState(true)
  const [error, setError] = useState('')
  const [clients, setClients] = useState<Client[]>([])
  
  const [formData, setFormData] = useState<QuoteFormData>({
    clientId: '',
    title: '',
    description: '',
    validUntil: '',
    vatRate: 20,
    items: [{
      id: '1',
      description: '',
      quantity: 1,
      unitPrice: 0,
      total: 0
    }]
  })

  // Charger les clients
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch('/api/admin/clients')
        if (response.ok) {
          const data = await response.json()
          setClients(data.clients)
        }
      } catch (error) {
        console.error('Erreur:', error)
      } finally {
        setLoadingClients(false)
      }
    }

    fetchClients()
  }, [])

  const handleChange = (field: keyof Omit<QuoteFormData, 'items'>, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleItemChange = (index: number, field: keyof QuoteItem, value: string | number) => {
    setFormData(prev => {
      const newItems = [...prev.items]
      newItems[index] = {
        ...newItems[index],
        [field]: value
      }
      
      // Recalculer le total de l'item
      if (field === 'quantity' || field === 'unitPrice') {
        newItems[index].total = newItems[index].quantity * newItems[index].unitPrice
      }
      
      return {
        ...prev,
        items: newItems
      }
    })
  }

  const addItem = () => {
    setFormData(prev => ({
      ...prev,
      items: [...prev.items, {
        id: Date.now().toString(),
        description: '',
        quantity: 1,
        unitPrice: 0,
        total: 0
      }]
    }))
  }

  const removeItem = (index: number) => {
    setFormData(prev => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index)
    }))
  }

  // Calculs
  const subtotal = formData.items.reduce((sum, item) => sum + item.total, 0)
  const vatAmount = (subtotal * formData.vatRate) / 100
  const total = subtotal + vatAmount

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/admin/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de la création')
      }

      router.push('/admin/quotes')
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Erreur lors de la création')
    } finally {
      setIsLoading(false)
    }
  }

  if (!session) {
    return null
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link
          href="/admin/quotes"
          className="p-2 hover:bg-muted rounded-md transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold">Nouveau Devis</h1>
          <p className="text-muted-foreground">Créer une nouvelle proposition commerciale</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Erreur */}
        {error && (
          <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-md">
            <p className="text-destructive text-sm">{error}</p>
          </div>
        )}

        {/* Informations générales */}
        <div className="bg-card rounded-lg border shadow-sm p-6">
          <div className="flex items-center gap-2 mb-6">
            <FileText className="h-5 w-5" />
            <h2 className="text-lg font-semibold">Informations générales</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Client <span className="text-destructive">*</span>
              </label>
              <select
                required
                value={formData.clientId}
                onChange={(e) => handleChange('clientId', e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                disabled={loadingClients}
              >
                <option value="">Sélectionner un client</option>
                {clients.map(client => (
                  <option key={client.id} value={client.id}>
                    {client.name} ({client.email})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Titre du devis <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => handleChange('title', e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Ex: Installation climatisation salon"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Validité du devis</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <input
                  type="date"
                  value={formData.validUntil}
                  onChange={(e) => handleChange('validUntil', e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Taux de TVA (%)</label>
              <div className="relative">
                <Euro className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <input
                  type="number"
                  step="0.1"
                  value={formData.vatRate}
                  onChange={(e) => handleChange('vatRate', parseFloat(e.target.value))}
                  className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => handleChange('description', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Description détaillée du devis..."
              />
            </div>
          </div>
        </div>

        {/* Articles */}
        <div className="bg-card rounded-lg border shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              <h2 className="text-lg font-semibold">Articles</h2>
            </div>
            <button
              type="button"
              onClick={addItem}
              className="inline-flex items-center px-3 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              <Plus className="h-4 w-4 mr-1" />
              Ajouter
            </button>
          </div>

          <div className="space-y-4">
            {formData.items.map((item, index) => (
              <div key={item.id} className="grid grid-cols-12 gap-4 items-end p-4 border rounded-md">
                <div className="col-span-12 md:col-span-5">
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <input
                    type="text"
                    value={item.description}
                    onChange={(e) => handleItemChange(index, 'description', e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Description de l'article"
                  />
                </div>

                <div className="col-span-4 md:col-span-2">
                  <label className="block text-sm font-medium mb-2">Quantité</label>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    value={item.quantity}
                    onChange={(e) => handleItemChange(index, 'quantity', parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="col-span-4 md:col-span-2">
                  <label className="block text-sm font-medium mb-2">Prix unitaire</label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    value={item.unitPrice}
                    onChange={(e) => handleItemChange(index, 'unitPrice', parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="col-span-3 md:col-span-2">
                  <label className="block text-sm font-medium mb-2">Total</label>
                  <div className="px-3 py-2 bg-muted rounded-md font-medium">
                    {item.total.toFixed(2)} €
                  </div>
                </div>

                <div className="col-span-1">
                  {formData.items.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeItem(index)}
                      className="p-2 text-destructive hover:bg-destructive/10 rounded-md transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Totaux */}
          <div className="mt-6 pt-6 border-t">
            <div className="flex justify-end">
              <div className="w-full max-w-sm space-y-2">
                <div className="flex justify-between">
                  <span>Sous-total HT:</span>
                  <span className="font-medium">{subtotal.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between">
                  <span>TVA ({formData.vatRate}%):</span>
                  <span className="font-medium">{vatAmount.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between text-lg font-bold border-t pt-2">
                  <span>Total TTC:</span>
                  <span>{total.toFixed(2)} €</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <Link
            href="/admin/quotes"
            className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            Annuler
          </Link>
          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            <Save className="h-4 w-4 mr-2" />
            {isLoading ? 'Création...' : 'Créer le devis'}
          </button>
        </div>
      </form>
    </div>
  )
}

