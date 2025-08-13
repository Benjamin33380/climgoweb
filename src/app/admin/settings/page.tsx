'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { 
  Save,
  Settings,
  Building,
  Mail,
  Phone,
  MapPin,
  FileText,
  Euro,
  Eye,
  EyeOff
} from 'lucide-react'

interface CompanySettings {
  name: string
  email: string
  phone: string
  address: string
  city: string
  postalCode: string
  siret: string
  vatNumber: string
  bankName: string
  bankIban: string
  bankBic: string
}

interface InvoiceSettings {
  prefix: string
  nextNumber: number
  vatRate: number
  paymentTerms: number
  lateFeesRate: number
  footerText: string
}

export default function SettingsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [showBankDetails, setShowBankDetails] = useState(false)
  
  const [companySettings, setCompanySettings] = useState<CompanySettings>({
    name: 'ClimGO',
    email: 'contact@climgo.fr',
    phone: '07 66 46 00 08',
    address: '123 Rue de la Climatisation',
    city: 'Bordeaux',
    postalCode: '33000',
    siret: '12345678901234',
    vatNumber: 'FR12345678901',
    bankName: 'Banque Populaire',
    bankIban: 'FR14 2004 1010 0505 0001 3M02 606',
    bankBic: 'CCBPFRPPBDX'
  })

  const [invoiceSettings, setInvoiceSettings] = useState<InvoiceSettings>({
    prefix: 'FACT',
    nextNumber: 1001,
    vatRate: 20,
    paymentTerms: 30,
    lateFeesRate: 1.5,
    footerText: 'Merci de votre confiance. Paiement à 30 jours.'
  })

  useEffect(() => {
    if (status === 'loading') return
    
    if (!session) {
      router.push('/auth/signin')
      return
    }
    
    if (session.user.role !== 'ADMIN') {
      router.push('/auth/signin')
      return
    }
    
    // loadSettings()
    setIsLoading(false) // Temporaire
  }, [session, status, router])

  const handleCompanyChange = (field: keyof CompanySettings, value: string) => {
    setCompanySettings(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleInvoiceChange = (field: keyof InvoiceSettings, value: string | number) => {
    setInvoiceSettings(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSave = async () => {
    setIsSaving(true)
    try {
      // Sauvegarder les paramètres
      console.log('Saving settings...', { companySettings, invoiceSettings })
      // await saveSettings({ company: companySettings, invoice: invoiceSettings })
    } catch (_error) {
      console.error('Erreur:', _error)
    } finally {
      setIsSaving(false)
    }
  }

  if (status === 'loading' || isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Paramètres</h1>
          <p className="text-muted-foreground mt-2">
            Configurez votre entreprise et vos préférences
          </p>
        </div>
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
        >
          <Save className="h-4 w-4 mr-2" />
          {isSaving ? 'Sauvegarde...' : 'Sauvegarder'}
        </button>
      </div>

      <div className="space-y-8">
        {/* Informations de l'entreprise */}
        <div className="bg-card rounded-lg border p-6">
          <div className="flex items-center gap-2 mb-6">
            <Building className="h-5 w-5" />
            <h2 className="text-xl font-semibold">Informations de l'entreprise</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Nom de l'entreprise</label>
              <input
                type="text"
                value={companySettings.name}
                onChange={(e) => handleCompanyChange('name', e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <input
                  type="email"
                  value={companySettings.email}
                  onChange={(e) => handleCompanyChange('email', e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Téléphone</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <input
                  type="tel"
                  value={companySettings.phone}
                  onChange={(e) => handleCompanyChange('phone', e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">SIRET</label>
              <input
                type="text"
                value={companySettings.siret}
                onChange={(e) => handleCompanyChange('siret', e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">Adresse</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 text-muted-foreground h-4 w-4" />
                <input
                  type="text"
                  value={companySettings.address}
                  onChange={(e) => handleCompanyChange('address', e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Ville</label>
              <input
                type="text"
                value={companySettings.city}
                onChange={(e) => handleCompanyChange('city', e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Code postal</label>
              <input
                type="text"
                value={companySettings.postalCode}
                onChange={(e) => handleCompanyChange('postalCode', e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>

        {/* Paramètres de facturation */}
        <div className="bg-card rounded-lg border p-6">
          <div className="flex items-center gap-2 mb-6">
            <FileText className="h-5 w-5" />
            <h2 className="text-xl font-semibold">Paramètres de facturation</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Préfixe des factures</label>
              <input
                type="text"
                value={invoiceSettings.prefix}
                onChange={(e) => handleInvoiceChange('prefix', e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Prochain numéro</label>
              <input
                type="number"
                value={invoiceSettings.nextNumber}
                onChange={(e) => handleInvoiceChange('nextNumber', parseInt(e.target.value))}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Taux de TVA (%)</label>
              <div className="relative">
                <Euro className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <input
                  type="number"
                  step="0.1"
                  value={invoiceSettings.vatRate}
                  onChange={(e) => handleInvoiceChange('vatRate', parseFloat(e.target.value))}
                  className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Délai de paiement (jours)</label>
              <input
                type="number"
                value={invoiceSettings.paymentTerms}
                onChange={(e) => handleInvoiceChange('paymentTerms', parseInt(e.target.value))}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">Texte de pied de page</label>
              <textarea
                value={invoiceSettings.footerText}
                onChange={(e) => handleInvoiceChange('footerText', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>

        {/* Informations bancaires */}
        <div className="bg-card rounded-lg border p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              <h2 className="text-xl font-semibold">Informations bancaires</h2>
            </div>
            <button
              onClick={() => setShowBankDetails(!showBankDetails)}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              {showBankDetails ? (
                <>
                  <EyeOff className="h-4 w-4" />
                  Masquer
                </>
              ) : (
                <>
                  <Eye className="h-4 w-4" />
                  Afficher
                </>
              )}
            </button>
          </div>
          
          {showBankDetails && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Nom de la banque</label>
                <input
                  type="text"
                  value={companySettings.bankName}
                  onChange={(e) => handleCompanyChange('bankName', e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">IBAN</label>
                <input
                  type="text"
                  value={companySettings.bankIban}
                  onChange={(e) => handleCompanyChange('bankIban', e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">BIC</label>
                <input
                  type="text"
                  value={companySettings.bankBic}
                  onChange={(e) => handleCompanyChange('bankBic', e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

