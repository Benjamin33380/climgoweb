'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Mail, Users, Send, Target, BarChart3 } from 'lucide-react';

interface NewsletterSenderProps {
  onSend?: () => void;
}

export default function NewsletterSender({ onSend }: NewsletterSenderProps) {
  const [formData, setFormData] = useState({
    subject: '',
    content: '',
    targetAudience: 'all', // 'all', 'active', 'new', 'custom'
    customEmails: '',
    includeUnsubscribed: false
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [stats, setStats] = useState({
    totalSubscribers: 0,
    activeSubscribers: 0,
    newSubscribers: 0,
    estimatedRecipients: 0
  });

  // Simuler les statistiques
  useEffect(() => {
    setStats({
      totalSubscribers: 1247,
      activeSubscribers: 892,
      newSubscribers: 156,
      estimatedRecipients: 1247
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.subject.trim() || !formData.content.trim()) {
      setError('Veuillez remplir tous les champs obligatoires');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // TODO: Remplacer par Supabase + Resend
      // Simuler l'envoi de la newsletter
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSuccess('Newsletter envoyée avec succès !');
      setFormData({
        subject: '',
        content: '',
        targetAudience: 'all',
        customEmails: '',
        includeUnsubscribed: false
      });
      
      if (onSend) {
        onSend();
      }
    } catch (error) {
      setError('Erreur lors de l\'envoi de la newsletter');
    } finally {
      setLoading(false);
    }
  };

  const updateEstimatedRecipients = () => {
    let count = 0;
    switch (formData.targetAudience) {
      case 'all':
        count = formData.includeUnsubscribed ? stats.totalSubscribers : stats.activeSubscribers;
        break;
      case 'active':
        count = stats.activeSubscribers;
        break;
      case 'new':
        count = stats.newSubscribers;
        break;
      case 'custom':
        count = formData.customEmails.split(',').filter(email => email.trim()).length;
        break;
    }
    setStats(prev => ({ ...prev, estimatedRecipients: count }));
  };

  const handleTargetAudienceChange = (value: string) => {
    setFormData(prev => ({ ...prev, targetAudience: value }));
    setTimeout(updateEstimatedRecipients, 100);
  };

  const handleCustomEmailsChange = (value: string) => {
    setFormData(prev => ({ ...prev, customEmails: value }));
    setTimeout(updateEstimatedRecipients, 100);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Envoi de Newsletter</h1>
        <p className="text-gray-600 mt-2">
          Envoyez des newsletters personnalisées à vos abonnés
        </p>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Abonnés</CardTitle>
            <Users className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalSubscribers}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Abonnés Actifs</CardTitle>
            <Target className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.activeSubscribers}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Nouveaux</CardTitle>
            <BarChart3 className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.newSubscribers}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Destinataires</CardTitle>
            <Mail className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.estimatedRecipients}</div>
          </CardContent>
        </Card>
      </div>

      {error && (
        <Alert className="mb-6 border-red-200 bg-red-50">
          <AlertDescription className="text-red-800">{error}</AlertDescription>
        </Alert>
      )}

      {success && (
        <Alert className="mb-6 border-green-200 bg-green-50">
          <AlertDescription className="text-green-800">{success}</AlertDescription>
        </Alert>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Send className="h-5 w-5 text-blue-600" />
            Nouvelle Newsletter
          </CardTitle>
          <CardDescription>
            Rédigez et envoyez votre newsletter personnalisée
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Audience cible */}
            <div className="space-y-4">
              <Label>Audience cible</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="all"
                      name="targetAudience"
                      value="all"
                      checked={formData.targetAudience === 'all'}
                      onChange={(e) => handleTargetAudienceChange(e.target.value)}
                      className="text-blue-600"
                    />
                    <Label htmlFor="all">Tous les abonnés</Label>
                  </div>
                  <p className="text-sm text-gray-500 ml-6">
                    {stats.totalSubscribers} destinataires
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="active"
                      name="targetAudience"
                      value="active"
                      checked={formData.targetAudience === 'active'}
                      onChange={(e) => handleTargetAudienceChange(e.target.value)}
                      className="text-blue-600"
                    />
                    <Label htmlFor="active">Abonnés actifs uniquement</Label>
                  </div>
                  <p className="text-sm text-gray-500 ml-6">
                    {stats.activeSubscribers} destinataires
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="new"
                      name="targetAudience"
                      value="new"
                      checked={formData.targetAudience === 'new'}
                      onChange={(e) => handleTargetAudienceChange(e.target.value)}
                      className="text-blue-600"
                    />
                    <Label htmlFor="new">Nouveaux abonnés (30 derniers jours)</Label>
                  </div>
                  <p className="text-sm text-gray-500 ml-6">
                    {stats.newSubscribers} destinataires
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="custom"
                      name="targetAudience"
                      value="custom"
                      checked={formData.targetAudience === 'custom'}
                      onChange={(e) => handleTargetAudienceChange(e.target.value)}
                      className="text-blue-600"
                    />
                    <Label htmlFor="custom">Emails personnalisés</Label>
                  </div>
                  <p className="text-sm text-gray-500 ml-6">
                    Séparez par des virgules
                  </p>
                </div>
              </div>

              {formData.targetAudience === 'custom' && (
                <div>
                  <Label htmlFor="customEmails">Emails (séparés par des virgules)</Label>
                  <Textarea
                    id="customEmails"
                    value={formData.customEmails}
                    onChange={(e) => handleCustomEmailsChange(e.target.value)}
                    placeholder="email1@example.com, email2@example.com, email3@example.com"
                    rows={3}
                    className="mt-1"
                  />
                </div>
              )}

              {formData.targetAudience === 'all' && (
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="includeUnsubscribed"
                    checked={formData.includeUnsubscribed}
                    onChange={(e) => {
                      setFormData(prev => ({ ...prev, includeUnsubscribed: e.target.checked }));
                      setTimeout(updateEstimatedRecipients, 100);
                    }}
                    className="rounded border-gray-300"
                  />
                  <Label htmlFor="includeUnsubscribed">
                    Inclure les abonnés désinscrits
                  </Label>
                </div>
              )}
            </div>

            {/* Contenu de la newsletter */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="subject">Objet de l'email *</Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                  placeholder="Objet de votre newsletter"
                  required
                  className="mt-1"
                />
                <p className="text-sm text-gray-500 mt-1">
                  {formData.subject.length}/60 caractères
                </p>
              </div>

              <div>
                <Label htmlFor="content">Contenu de la newsletter *</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                  placeholder="Rédigez le contenu de votre newsletter..."
                  rows={12}
                  required
                  className="mt-1"
                />
                <p className="text-sm text-gray-500 mt-1">
                  {formData.content.length}/2000 caractères
                </p>
              </div>
            </div>

            {/* Aperçu et envoi */}
            <div className="border-t pt-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-medium">Aperçu de l'envoi</h3>
                  <p className="text-sm text-gray-600">
                    {stats.estimatedRecipients} destinataires recevront cette newsletter
                  </p>
                </div>
                <Button
                  type="submit"
                  disabled={loading || !formData.subject.trim() || !formData.content.trim()}
                  className="min-w-[120px]"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Envoi...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Envoyer
                    </>
                  )}
                </Button>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Aperçu :</h4>
                <div className="space-y-2">
                  <div>
                    <span className="font-medium">À :</span> {stats.estimatedRecipients} destinataires
                  </div>
                  <div>
                    <span className="font-medium">Objet :</span> {formData.subject || 'Aucun objet'}
                  </div>
                  <div>
                    <span className="font-medium">Contenu :</span>
                    <div className="mt-2 text-sm text-gray-700 bg-white p-3 rounded border">
                      {formData.content || 'Aucun contenu'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
