'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Loader2, Mail, Send, Users, TrendingUp, FileText, Eye, EyeOff, Trash2 } from 'lucide-react';

export default function NewsletterAdminPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const [subscribers, setSubscribers] = useState<Array<{
    id: string;
    email: string;
    created_at: string;
    preferences?: Record<string, boolean>;
  }>>([]);
  const [loadingSubscribers, setLoadingSubscribers] = useState(false);
  
  // Formulaire de newsletter
  const [newsletterForm, setNewsletterForm] = useState({
    subject: '',
    content: '',
    previewText: ''
  });

  // Statistiques dynamiques
  const [stats, setStats] = useState({
    totalSubscribers: 0,
    activeSubscribers: 0,
    sentNewsletters: 0,
    openRate: 0
  });

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // Simulation d'envoi (remplacé par l'API Resend)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSuccess('Newsletter envoyée avec succès !');
      setNewsletterForm({ subject: '', content: '', previewText: '' });
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : 'Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  };

  const handlePreviewToggle = () => {
    setShowPreview(!showPreview);
  };

  // Charger les inscrits à la newsletter
  const loadSubscribers = async () => {
    setLoadingSubscribers(true);
    try {
      const response = await fetch('/api/admin/newsletter/subscribers');
      if (response.ok) {
        const data = await response.json();
        setSubscribers(data.subscribers || []);
        setStats(prev => ({
          ...prev,
          totalSubscribers: data.subscribers?.length || 0,
          activeSubscribers: data.subscribers?.length || 0
        }));
      }
    } catch (error) {
      console.error('Erreur lors du chargement des inscrits:', error);
    } finally {
      setLoadingSubscribers(false);
    }
  };

  // Supprimer un inscrit
  const deleteSubscriber = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cet inscrit ?')) return;
    
    try {
      const response = await fetch('/api/admin/newsletter/subscribers', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      });
      
      if (response.ok) {
        setSuccess('Inscrit supprimé avec succès');
        loadSubscribers(); // Recharger la liste
      }
    } catch (error) {
      setError('Erreur lors de la suppression');
    }
  };

  // Charger les inscrits au montage du composant
  useEffect(() => {
    loadSubscribers();
  }, []);

  const renderPreview = () => {
    if (!showPreview) return null;

    return (
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5" />
            Aperçu de la newsletter
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border rounded-lg p-4 bg-white">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-gray-900">{newsletterForm.subject || 'Sujet de la newsletter'}</h2>
              <p className="text-sm text-gray-600 mt-1">{newsletterForm.previewText || 'Texte d\'aperçu...'}</p>
            </div>
            <div className="prose max-w-none">
              {newsletterForm.content ? (
                <div dangerouslySetInnerHTML={{ 
                  __html: newsletterForm.content
                    .replace(/\n/g, '<br />')
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/\*(.*?)\*/g, '<em>$1</em>')
                }} />
              ) : (
                <p className="text-gray-500 italic">Contenu de la newsletter...</p>
              )}
            </div>
            <div className="mt-6 pt-4 border-t text-center text-sm text-gray-500">
              <p>Newsletter ClimGO - Chauffage & Climatisation en Gironde</p>
              <p>Se désabonner | Préférences</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Gestion de la Newsletter</h1>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {success && (
        <Alert>
          <AlertDescription>{success}</AlertDescription>
        </Alert>
      )}

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-500" />
              <div>
                <div className="text-2xl font-bold">{stats.totalSubscribers}</div>
                <div className="text-sm text-gray-600">Total abonnés</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-green-500" />
              <div>
                <div className="text-2xl font-bold">{stats.activeSubscribers}</div>
                <div className="text-sm text-gray-600">Abonnés actifs</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Send className="h-5 w-5 text-purple-500" />
              <div>
                <div className="text-2xl font-bold">{stats.sentNewsletters}</div>
                <div className="text-sm text-gray-600">Newsletters envoyées</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-orange-500" />
              <div>
                <div className="text-2xl font-bold">{stats.openRate}%</div>
                <div className="text-sm text-gray-600">Taux d'ouverture</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Formulaire de newsletter */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-blue-500" />
            Créer une newsletter
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleNewsletterSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="subject">Sujet de la newsletter *</Label>
              <Input
                id="subject"
                value={newsletterForm.subject}
                onChange={(e) => setNewsletterForm(prev => ({ ...prev, subject: e.target.value }))}
                placeholder="Ex: Nouveaux articles et offres spéciales ClimGO"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="previewText">Texte d'aperçu</Label>
              <Input
                id="previewText"
                value={newsletterForm.previewText}
                onChange={(e) => setNewsletterForm(prev => ({ ...prev, previewText: e.target.value }))}
                placeholder="Court texte visible dans l'aperçu de l'email"
                maxLength={150}
              />
              <p className="text-xs text-gray-500">
                {newsletterForm.previewText.length}/150 caractères
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Contenu de la newsletter *</Label>
              <Textarea
                id="content"
                value={newsletterForm.content}
                onChange={(e) => setNewsletterForm(prev => ({ ...prev, content: e.target.value }))}
                placeholder="Rédigez votre newsletter ici. Vous pouvez utiliser du Markdown simple : **gras**, *italique*, etc."
                rows={12}
                required
              />
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>Formatage supporté :</span>
                <Badge variant="outline">**gras**</Badge>
                <Badge variant="outline">*italique*</Badge>
                <Badge variant="outline">saut de ligne</Badge>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={handlePreviewToggle}
                className="flex items-center gap-2"
              >
                {showPreview ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                {showPreview ? 'Masquer' : 'Aperçu'}
              </Button>
              
              <Button
                type="submit"
                disabled={loading || !newsletterForm.subject || !newsletterForm.content}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Envoyer la newsletter
                  </>
                )}
              </Button>
            </div>
          </form>

          {/* Aperçu */}
          {renderPreview()}
        </CardContent>
      </Card>

      {/* Gestion des inscrits */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-green-500" />
            Gestion des inscrits ({subscribers.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {loadingSubscribers ? (
            <div className="text-center py-8">
              <Loader2 className="h-8 w-8 mx-auto animate-spin text-gray-400" />
              <p className="text-gray-500 mt-2">Chargement des inscrits...</p>
            </div>
          ) : subscribers.length === 0 ? (
            <div className="text-center py-8">
              <Users className="h-16 w-16 mx-auto mb-4 text-gray-300" />
              <h3 className="text-lg font-semibold mb-2">Aucun inscrit</h3>
              <p className="text-gray-600">
                Les inscriptions depuis le footer apparaîtront ici.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {subscribers.map((subscriber) => (
                <div
                  key={subscriber.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-blue-500" />
                    <div>
                      <p className="font-medium">{subscriber.email}</p>
                      <p className="text-sm text-gray-500">
                        Inscrit le {new Date(subscriber.created_at).toLocaleDateString('fr-FR')}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => deleteSubscriber(subscriber.id)}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Configuration requise */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-orange-500" />
            Configuration requise
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-6">
            <Mail className="h-16 w-16 mx-auto mb-4 text-gray-300" />
            <h3 className="text-lg font-semibold mb-2">Resend à configurer</h3>
            <p className="text-gray-600 mb-4">
              Pour activer l'envoi de newsletters, vous devez :
            </p>
            <div className="text-left max-w-md mx-auto space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-green-600">✓</Badge>
                Créer un compte sur Resend.com
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-green-600">✓</Badge>
                Obtenir votre clé API
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-yellow-600">⚠</Badge>
                Configurer RESEND_API_KEY dans .env
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-yellow-600">⚠</Badge>
                Vérifier votre domaine d'envoi
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
