'use client'

import { useState, useEffect } from 'react'
import { Plus, Search, Filter, Edit, Trash2, Package, Eye, EyeOff } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Separator } from '@/components/ui/separator'

interface Product {
  id: string
  code: string
  name: string
  description?: string
  category: string
  subcategory?: string
  unit: string
  unitPrice: number
  vatRate: number
  supplier?: string
  brand?: string
  model?: string
  active: boolean
  createdAt: string
  updatedAt: string
}

const categories = [
  { value: 'all', label: 'Toutes catégories' },
  { value: 'chauffage', label: 'Chauffage' },
  { value: 'climatisation', label: 'Climatisation' },
  { value: 'maintenance', label: 'Maintenance' },
  { value: 'eau-chaude', label: 'Eau chaude' },
  { value: 'accessoires', label: 'Accessoires' },
  { value: 'main-oeuvre', label: 'Main d\'œuvre' }
]

const units = [
  { value: 'unité', label: 'Unité' },
  { value: 'm²', label: 'Mètre carré' },
  { value: 'heure', label: 'Heure' },
  { value: 'forfait', label: 'Forfait' },
  { value: 'ml', label: 'Mètre linéaire' },
  { value: 'lot', label: 'Lot' }
]

export default function CatalogPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showInactive, setShowInactive] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)

  // Form state
  const [formData, setFormData] = useState({
    code: '',
    name: '',
    description: '',
    category: 'chauffage',
    subcategory: '',
    unit: 'unité',
    unitPrice: 0,
    vatRate: 20,
    supplier: '',
    brand: '',
    model: '',
    active: true
  })

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      setLoading(true)
      // TODO: Implémenter l'API
      // const response = await fetch('/api/admin/catalog')
      // const data = await response.json()
      
      // Mock data pour l'instant
      const mockProducts: Product[] = [
        {
          id: '1',
          code: 'PAC-AIR-001',
          name: 'Pompe à chaleur air/eau 8kW',
          description: 'Pompe à chaleur réversible haute performance',
          category: 'chauffage',
          subcategory: 'pompe-a-chaleur',
          unit: 'unité',
          unitPrice: 3500,
          vatRate: 20,
          supplier: 'Daikin',
          brand: 'Daikin',
          model: 'Altherma 3',
          active: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: '2',
          code: 'CLIM-SPLIT-001',
          name: 'Climatiseur split 3.5kW',
          description: 'Climatiseur split réversible classe A++',
          category: 'climatisation',
          subcategory: 'split',
          unit: 'unité',
          unitPrice: 1200,
          vatRate: 20,
          supplier: 'Mitsubishi',
          brand: 'Mitsubishi',
          model: 'MSZ-LN35VG',
          active: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: '3',
          code: 'MO-INSTALL-001',
          name: 'Installation pompe à chaleur',
          description: 'Main d\'œuvre installation complète PAC',
          category: 'main-oeuvre',
          unit: 'forfait',
          unitPrice: 800,
          vatRate: 20,
          active: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      ]
      
      setProducts(mockProducts)
    } catch (_error) {
      console.error('Erreur lors du chargement des produits:', _error)
    } finally {
      setLoading(false)
    }
  }

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description?.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesActive = showInactive || product.active
    
    return matchesSearch && matchesCategory && matchesActive
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      // TODO: Implémenter l'API de création/modification
      console.log('Form data:', formData)
      
      // Fermer la dialog et réinitialiser
      setIsDialogOpen(false)
      setEditingProduct(null)
      setFormData({
        code: '',
        name: '',
        description: '',
        category: 'chauffage',
        subcategory: '',
        unit: 'unité',
        unitPrice: 0,
        vatRate: 20,
        supplier: '',
        brand: '',
        model: '',
        active: true
      })
      
      // Recharger la liste
      fetchProducts()
    } catch (_error) {
      console.error('Erreur:', _error)
    }
  }

  const handleEdit = (product: Product) => {
    setEditingProduct(product)
    setFormData({
      code: product.code,
      name: product.name,
      description: product.description || '',
      category: product.category,
      subcategory: product.subcategory || '',
      unit: product.unit,
      unitPrice: product.unitPrice,
      vatRate: product.vatRate,
      supplier: product.supplier || '',
      brand: product.brand || '',
      model: product.model || '',
      active: product.active
    })
    setIsDialogOpen(true)
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(price)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Catalogue Produits</h1>
          <p className="text-muted-foreground">
            Gérez votre catalogue de produits et services
          </p>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => {
              setEditingProduct(null)
              setFormData({
                code: '',
                name: '',
                description: '',
                category: 'chauffage',
                subcategory: '',
                unit: 'unité',
                unitPrice: 0,
                vatRate: 20,
                supplier: '',
                brand: '',
                model: '',
                active: true
              })
            }}>
              <Plus className="mr-2 h-4 w-4" />
              Nouveau produit
            </Button>
          </DialogTrigger>
          
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingProduct ? 'Modifier le produit' : 'Nouveau produit'}
              </DialogTitle>
              <DialogDescription>
                {editingProduct ? 'Modifiez les informations du produit.' : 'Ajoutez un nouveau produit à votre catalogue.'}
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="code">Code produit *</Label>
                  <Input
                    id="code"
                    value={formData.code}
                    onChange={(e) => setFormData({...formData, code: e.target.value})}
                    placeholder="Ex: PAC-AIR-001"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="name">Nom *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Nom du produit"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Description détaillée du produit"
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Catégorie *</Label>
                  <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.slice(1).map((cat) => (
                        <SelectItem key={cat.value} value={cat.value}>{cat.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subcategory">Sous-catégorie</Label>
                  <Input
                    id="subcategory"
                    value={formData.subcategory}
                    onChange={(e) => setFormData({...formData, subcategory: e.target.value})}
                    placeholder="Ex: pompe-a-chaleur"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="unit">Unité *</Label>
                  <Select value={formData.unit} onValueChange={(value) => setFormData({...formData, unit: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {units.map((unit) => (
                        <SelectItem key={unit.value} value={unit.value}>{unit.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="unitPrice">Prix unitaire HT *</Label>
                  <Input
                    id="unitPrice"
                    type="number"
                    step="0.01"
                    min="0"
                    value={formData.unitPrice}
                    onChange={(e) => setFormData({...formData, unitPrice: parseFloat(e.target.value) || 0})}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="vatRate">TVA (%)</Label>
                  <Input
                    id="vatRate"
                    type="number"
                    step="0.1"
                    min="0"
                    max="100"
                    value={formData.vatRate}
                    onChange={(e) => setFormData({...formData, vatRate: parseFloat(e.target.value) || 20})}
                  />
                </div>
              </div>

              <Separator />

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="supplier">Fournisseur</Label>
                  <Input
                    id="supplier"
                    value={formData.supplier}
                    onChange={(e) => setFormData({...formData, supplier: e.target.value})}
                    placeholder="Nom du fournisseur"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="brand">Marque</Label>
                  <Input
                    id="brand"
                    value={formData.brand}
                    onChange={(e) => setFormData({...formData, brand: e.target.value})}
                    placeholder="Marque du produit"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="model">Modèle</Label>
                  <Input
                    id="model"
                    value={formData.model}
                    onChange={(e) => setFormData({...formData, model: e.target.value})}
                    placeholder="Modèle/référence"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="active"
                  checked={formData.active}
                  onCheckedChange={(checked) => setFormData({...formData, active: checked})}
                />
                <Label htmlFor="active">Produit actif</Label>
              </div>

              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Annuler
                </Button>
                <Button type="submit">
                  {editingProduct ? 'Modifier' : 'Créer'}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Filter className="mr-2 h-5 w-5" />
            Filtres
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-64">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Rechercher un produit..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value}>{cat.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="flex items-center space-x-2">
              <Switch
                id="show-inactive"
                checked={showInactive}
                onCheckedChange={setShowInactive}
              />
              <Label htmlFor="show-inactive">Voir inactifs</Label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center">
              <Package className="mr-2 h-5 w-5" />
              Produits ({filteredProducts.length})
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Code</TableHead>
                <TableHead>Produit</TableHead>
                <TableHead>Catégorie</TableHead>
                <TableHead>Prix HT</TableHead>
                <TableHead>Unité</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-mono text-sm">{product.code}</TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{product.name}</div>
                      {product.description && (
                        <div className="text-sm text-muted-foreground line-clamp-1">
                          {product.description}
                        </div>
                      )}
                      {(product.brand || product.model) && (
                        <div className="text-xs text-muted-foreground">
                          {[product.brand, product.model].filter(Boolean).join(' - ')}
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">
                      {categories.find(c => c.value === product.category)?.label || product.category}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-medium">{formatPrice(product.unitPrice)}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{product.unit}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      {product.active ? (
                        <>
                          <Eye className="h-3 w-3 text-green-600" />
                          <span className="text-sm text-green-600">Actif</span>
                        </>
                      ) : (
                        <>
                          <EyeOff className="h-3 w-3 text-gray-400" />
                          <span className="text-sm text-gray-400">Inactif</span>
                        </>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(product)}
                      >
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

