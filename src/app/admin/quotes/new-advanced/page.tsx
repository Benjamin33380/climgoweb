'use client'

import { useState, useEffect } from 'react'
import { Plus, Search, Calculator, FileText, Save, Send, Trash2, Copy, Settings, User, Building, Package } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface Client {
  id: string
  name: string
  email: string
  phone?: string
  address?: string
  city?: string
  postalCode?: string
  clientType: 'INDIVIDUAL' | 'PROFESSIONAL'
  siret?: string
}

interface Product {
  id: string
  code: string
  name: string
  description?: string
  category: string
  unit: string
  unitPrice: number
  vatRate: number
  brand?: string
  model?: string
}

interface QuoteItem {
  id: string
  productId?: string
  product?: Product
  description: string
  quantity: number
  unitPrice: number
  discount: number
  total: number
  order: number
}

interface QuoteTemplate {
  id: string
  name: string
  category: string
  description?: string
  items: QuoteItem[]
}

export default function NewAdvancedQuotePage() {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null)
  const [quoteData, setQuoteData] = useState({
    title: '',
    description: '',
    validUntil: '',
    notes: ''
  })
  const [items, setItems] = useState<QuoteItem[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [isClientDialogOpen, setIsClientDialogOpen] = useState(false)
  const [isProductDialogOpen, setIsProductDialogOpen] = useState(false)
  const [isTemplateDialogOpen, setIsTemplateDialogOpen] = useState(false)

  // Mock data
  const [clients] = useState<Client[]>([
    {
      id: '1',
      name: 'Jean Dupont',
      email: 'jean.dupont@email.com',
      phone: '06 12 34 56 78',
      address: '123 Rue de la Paix',
      city: 'Bordeaux',
      postalCode: '33000',
      clientType: 'INDIVIDUAL'
    },
    {
      id: '2',
      name: 'Restaurant Le Gourmet',
      email: 'contact@legourmet.fr',
      phone: '05 56 12 34 56',
      address: '45 Avenue des Restaurants',
      city: 'Arcachon',
      postalCode: '33120',
      clientType: 'PROFESSIONAL',
      siret: '12345678901234'
    }
  ])

  const [products] = useState<Product[]>([
    {
      id: '1',
      code: 'PAC-AIR-001',
      name: 'Pompe à chaleur air/eau 8kW',
      description: 'Pompe à chaleur réversible haute performance',
      category: 'chauffage',
      unit: 'unité',
      unitPrice: 3500,
      vatRate: 20,
      brand: 'Daikin',
      model: 'Altherma 3'
    },
    {
      id: '2',
      code: 'CLIM-SPLIT-001',
      name: 'Climatiseur split 3.5kW',
      description: 'Climatiseur split réversible classe A++',
      category: 'climatisation',
      unit: 'unité',
      unitPrice: 1200,
      vatRate: 20,
      brand: 'Mitsubishi',
      model: 'MSZ-LN35VG'
    },
    {
      id: '3',
      code: 'MO-INSTALL-001',
      name: 'Installation pompe à chaleur',
      description: 'Main d\'œuvre installation complète PAC',
      category: 'main-oeuvre',
      unit: 'forfait',
      unitPrice: 800,
      vatRate: 20
    }
  ])

  const [templates] = useState<QuoteTemplate[]>([
    {
      id: '1',
      name: 'Installation PAC complète',
      category: 'installation-pac',
      description: 'Template pour installation complète de pompe à chaleur',
      items: [
        {
          id: '1',
          productId: '1',
          description: 'Pompe à chaleur air/eau 8kW',
          quantity: 1,
          unitPrice: 3500,
          discount: 0,
          total: 3500,
          order: 1
        },
        {
          id: '2',
          productId: '3',
          description: 'Installation pompe à chaleur',
          quantity: 1,
          unitPrice: 800,
          discount: 0,
          total: 800,
          order: 2
        }
      ]
    }
  ])

  // Calculs automatiques
  const subtotal = items.reduce((sum, item) => sum + item.total, 0)
  const totalDiscount = items.reduce((sum, item) => sum + (item.unitPrice * item.quantity * item.discount / 100), 0)
  const vatAmount = subtotal * 0.20 // Simplification TVA 20%
  const total = subtotal + vatAmount

  const addItem = (product?: Product) => {
    const newItem: QuoteItem = {
      id: Date.now().toString(),
      productId: product?.id,
      product,
      description: product?.name || '',
      quantity: 1,
      unitPrice: product?.unitPrice || 0,
      discount: 0,
      total: product?.unitPrice || 0,
      order: items.length + 1
    }
    setItems([...items, newItem])
    if (product) {
      setIsProductDialogOpen(false)
    }
  }

  const updateItem = (id: string, updates: Partial<QuoteItem>) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const updated = { ...item, ...updates }
        const discountAmount = updated.unitPrice * updated.quantity * updated.discount / 100
        updated.total = (updated.unitPrice * updated.quantity) - discountAmount
        return updated
      }
      return item
    }))
  }

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id))
  }

  const applyTemplate = (template: QuoteTemplate) => {
    setItems(template.items.map(item => ({ ...item, id: Date.now().toString() + Math.random() })))
    setQuoteData({
      ...quoteData,
      title: template.name,
      description: template.description || ''
    })
    setIsTemplateDialogOpen(false)
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(price)
  }

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.code.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const generateQuoteNumber = () => {
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const day = String(now.getDate()).padStart(2, '0')
    const time = String(now.getHours()).padStart(2, '0') + String(now.getMinutes()).padStart(2, '0')
    return `DEVIS-${year}${month}${day}-${time}`
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Nouveau Devis</h1>
          <p className="text-muted-foreground">
            Créez un devis professionnel complet
          </p>
        </div>
        
        <div className="flex space-x-2">
          <Dialog open={isTemplateDialogOpen} onOpenChange={setIsTemplateDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <FileText className="mr-2 h-4 w-4" />
                Templates
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Choisir un template</DialogTitle>
                <DialogDescription>
                  Utilisez un template pour créer rapidement votre devis
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                {templates.map((template) => (
                  <Card key={template.id} className="cursor-pointer hover:bg-accent" onClick={() => applyTemplate(template)}>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">{template.name}</CardTitle>
                      <CardDescription>{template.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-muted-foreground">
                        {template.items.length} article(s) - {formatPrice(template.items.reduce((sum, item) => sum + item.total, 0))} HT
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </DialogContent>
          </Dialog>
          
          <Button variant="outline">
            <Save className="mr-2 h-4 w-4" />
            Sauvegarder
          </Button>
          <Button>
            <Send className="mr-2 h-4 w-4" />
            Envoyer
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Informations principales */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Client */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="mr-2 h-5 w-5" />
                Client
              </CardTitle>
            </CardHeader>
            <CardContent>
              {selectedClient ? (
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-medium">{selectedClient.name}</h3>
                      <Badge variant={selectedClient.clientType === 'PROFESSIONAL' ? 'default' : 'secondary'}>
                        {selectedClient.clientType === 'PROFESSIONAL' ? (
                          <>
                            <Building className="mr-1 h-3 w-3" />
                            Professionnel
                          </>
                        ) : (
                          <>
                            <User className="mr-1 h-3 w-3" />
                            Particulier
                          </>
                        )}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{selectedClient.email}</p>
                    {selectedClient.phone && (
                      <p className="text-sm text-muted-foreground">{selectedClient.phone}</p>
                    )}
                    {selectedClient.address && (
                      <p className="text-sm text-muted-foreground">
                        {selectedClient.address}, {selectedClient.postalCode} {selectedClient.city}
                      </p>
                    )}
                  </div>
                  <Button variant="outline" onClick={() => setSelectedClient(null)}>
                    Changer
                  </Button>
                </div>
              ) : (
                <div className="text-center py-8">
                  <User className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">Sélectionner un client</h3>
                  <p className="text-muted-foreground mb-4">Choisissez le client pour ce devis</p>
                  <Dialog open={isClientDialogOpen} onOpenChange={setIsClientDialogOpen}>
                    <DialogTrigger asChild>
                      <Button>Choisir un client</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Sélectionner un client</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        {clients.map((client) => (
                          <Card key={client.id} className="cursor-pointer hover:bg-accent" onClick={() => {
                            setSelectedClient(client)
                            setIsClientDialogOpen(false)
                          }}>
                            <CardContent className="p-4">
                              <div className="flex items-center justify-between">
                                <div>
                                  <h4 className="font-medium">{client.name}</h4>
                                  <p className="text-sm text-muted-foreground">{client.email}</p>
                                </div>
                                <Badge variant={client.clientType === 'PROFESSIONAL' ? 'default' : 'secondary'}>
                                  {client.clientType === 'PROFESSIONAL' ? 'Pro' : 'Particulier'}
                                </Badge>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Informations du devis */}
          <Card>
            <CardHeader>
              <CardTitle>Informations du devis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="number">Numéro</Label>
                  <Input
                    id="number"
                    value={generateQuoteNumber()}
                    readOnly
                    className="bg-muted"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="validUntil">Valable jusqu'au</Label>
                  <Input
                    id="validUntil"
                    type="date"
                    value={quoteData.validUntil}
                    onChange={(e) => setQuoteData({...quoteData, validUntil: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="title">Titre du devis</Label>
                <Input
                  id="title"
                  value={quoteData.title}
                  onChange={(e) => setQuoteData({...quoteData, title: e.target.value})}
                  placeholder="Ex: Installation pompe à chaleur"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={quoteData.description}
                  onChange={(e) => setQuoteData({...quoteData, description: e.target.value})}
                  placeholder="Description détaillée de l'intervention"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Articles */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center">
                  <Package className="mr-2 h-5 w-5" />
                  Articles ({items.length})
                </CardTitle>
                <div className="flex space-x-2">
                  <Dialog open={isProductDialogOpen} onOpenChange={setIsProductDialogOpen}>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Plus className="mr-2 h-4 w-4" />
                        Catalogue
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl">
                      <DialogHeader>
                        <DialogTitle>Ajouter depuis le catalogue</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                          <Input
                            placeholder="Rechercher un produit..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10"
                          />
                        </div>
                        <div className="max-h-96 overflow-y-auto">
                          {filteredProducts.map((product) => (
                            <Card key={product.id} className="cursor-pointer hover:bg-accent mb-2" onClick={() => addItem(product)}>
                              <CardContent className="p-4">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <h4 className="font-medium">{product.name}</h4>
                                    <p className="text-sm text-muted-foreground">{product.code}</p>
                                    {product.description && (
                                      <p className="text-sm text-muted-foreground mt-1">{product.description}</p>
                                    )}
                                  </div>
                                  <div className="text-right">
                                    <div className="font-medium">{formatPrice(product.unitPrice)}</div>
                                    <div className="text-sm text-muted-foreground">par {product.unit}</div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <Button size="sm" onClick={() => addItem()}>
                    <Plus className="mr-2 h-4 w-4" />
                    Ligne libre
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {items.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Description</TableHead>
                      <TableHead className="w-20">Qté</TableHead>
                      <TableHead className="w-24">Prix HT</TableHead>
                      <TableHead className="w-20">Remise</TableHead>
                      <TableHead className="w-24">Total HT</TableHead>
                      <TableHead className="w-16"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {items.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <Input
                            value={item.description}
                            onChange={(e) => updateItem(item.id, { description: e.target.value })}
                            placeholder="Description de l'article"
                          />
                        </TableCell>
                        <TableCell>
                          <Input
                            type="number"
                            step="0.1"
                            min="0"
                            value={item.quantity}
                            onChange={(e) => updateItem(item.id, { quantity: parseFloat(e.target.value) || 0 })}
                          />
                        </TableCell>
                        <TableCell>
                          <Input
                            type="number"
                            step="0.01"
                            min="0"
                            value={item.unitPrice}
                            onChange={(e) => updateItem(item.id, { unitPrice: parseFloat(e.target.value) || 0 })}
                          />
                        </TableCell>
                        <TableCell>
                          <Input
                            type="number"
                            step="0.1"
                            min="0"
                            max="100"
                            value={item.discount}
                            onChange={(e) => updateItem(item.id, { discount: parseFloat(e.target.value) || 0 })}
                          />
                        </TableCell>
                        <TableCell className="font-medium">
                          {formatPrice(item.total)}
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm" onClick={() => removeItem(item.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <div className="text-center py-8">
                  <Package className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">Aucun article</h3>
                  <p className="text-muted-foreground mb-4">Ajoutez des articles à votre devis</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Récapitulatif */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calculator className="mr-2 h-5 w-5" />
                Récapitulatif
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Sous-total HT</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                {totalDiscount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Remise totale</span>
                    <span>-{formatPrice(totalDiscount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>TVA (20%)</span>
                  <span>{formatPrice(vatAmount)}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total TTC</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={quoteData.notes}
                onChange={(e) => setQuoteData({...quoteData, notes: e.target.value})}
                placeholder="Conditions particulières, délais de livraison, modalités de paiement..."
                rows={6}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

