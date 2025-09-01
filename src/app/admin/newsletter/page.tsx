'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  AlertCircle,
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import EmailEditor from '@/components/admin/EmailEditor';

interface Subscriber {
  id: string;
  email: string;
  isActive: boolean;
  createdAt: string;
}

interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  emailVerified: boolean;
}

interface EmailStats {
  totalSent: number;
  totalFailed: number;
  lastSent: string | null;
  templatesUsed: string[];
}

export default function NewsletterPage() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [, setLoading] = useState(false);
  const [emailStats, setEmailStats] = useState<EmailStats>({
    totalSent: 0,
    totalFailed: 0,
    lastSent: null,
    templatesUsed: []
  });
  const [newSubscriber, setNewSubscriber] = useState('');
  const [activeTab, setActiveTab] = useState('editor');
  const [emailStatus, setEmailStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
    details?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  }>({ type: null, message: '' });

  // Récupérer les abonnés newsletter
  useEffect(() => {
    fetchSubscribers();
    fetchUsers();
    fetchEmailStats();
  }, []);

  const fetchSubscribers = async () => {
    try {
      const response = await fetch('/api/admin/newsletter/subscribers');
      if (response.ok) {
        const data = await response.json();
        setSubscribers(data.subscribers || []);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des abonnés:', error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/admin/users');
      if (response.ok) {
        const data = await response.json();
        setUsers(data.users || []);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des utilisateurs:', error);
    }
  };

  const fetchEmailStats = async () => {
    try {
      const response = await fetch('/api/admin/newsletter/stats');
      if (response.ok) {
        const data = await response.json();
        setEmailStats(data);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des statistiques:', error);
    }
  };

  const addSubscriber = async () => {
    if (!newSubscriber.trim()) return;

    try {
      const response = await fetch('/api/admin/newsletter/subscribers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newSubscriber.trim() })
      });

      if (response.ok) {
        setNewSubscriber('');
        fetchSubscribers();
        setEmailStatus({
          type: 'success',
          message: 'Abonné ajouté avec succès'
        });
      } else {
        const error = await response.json();
        console.error('Erreur lors de l\'ajout d\'abonné:', error);
        setEmailStatus({
          type: 'error',
          message: error.error || 'Erreur lors de l\'ajout'
        });
      }
    } catch (error) {
      console.error('Erreur lors de l\'ajout d\'abonné:', error);
      setEmailStatus({
        type: 'error',
        message: 'Erreur de connexion'
      });
    }
  };

  const removeSubscriber = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cet abonné ?')) return;

    try {
      const response = await fetch(`/api/admin/newsletter/subscribers/${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        fetchSubscribers();
        setEmailStatus({
          type: 'success',
          message: 'Abonné supprimé avec succès'
        });
      }
    } catch (error) {
      console.error('Erreur lors de la suppression d\'abonné:', error);
      setEmailStatus({
        type: 'error',
        message: 'Erreur lors de la suppression'
      });
    }
  };

  const handleEmailSend = async (data: {
    template: string;
    subject: string;
    content: string;
    recipientIds: string[];
    customVariables: Record<string, string>;
  }) => {
    setLoading(true);
    setEmailStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/admin/newsletter/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        setEmailStatus({
          type: 'success',
          message: `Email envoyé à ${result.success} destinataires`,
          details: result
        });
        
        fetchEmailStats();
        
        // Retourner le résultat pour l'EmailEditor
        return result;
      } else {
        console.error('Erreur lors de l\'envoi d\'email:', result);
        const errorResult = {
          error: result.error || 'Erreur lors de l\'envoi',
          details: result
        };
        
        setEmailStatus({
          type: 'error',
          message: errorResult.error,
          details: result
        });
        
        // Retourner l'erreur pour l'EmailEditor
        return errorResult;
      }
    } catch (error) {
      const errorResult = {
        error: 'Erreur de connexion lors de l\'envoi',
        details: error
      };
      
      setEmailStatus({
        type: 'error',
        message: errorResult.error,
        details: error
      });
      
      // Retourner l'erreur pour l'EmailEditor
      return errorResult;
    } finally {
      setLoading(false);
    }
  };

  const exportSubscribers = () => {
    const csvContent = [
      'Email,Date d\'inscription,Statut',
      ...subscribers.map(sub => 
        `${sub.email},${new Date(sub.createdAt).toLocaleDateString('fr-FR')},${sub.isActive ? 'Actif' : 'Inactif'}`
      )
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `newsletter-subscribers-${Date.now()}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const importSubscribers = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const csv = e.target?.result as string;
        const lines = csv.split('\n');
        const emails = lines.slice(1).map(line => line.split(',')[0]).filter(Boolean);

        // Envoyer les emails pour ajout
        const response = await fetch('/api/admin/newsletter/subscribers/bulk', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ emails })
        });

        if (response.ok) {
          fetchSubscribers();
          setEmailStatus({
            type: 'success',
            message: `${emails.length} abonnés importés avec succès`
          });
        }
      } catch (error) {
        console.error('Erreur lors de l\'import:', error);
        setEmailStatus({
          type: 'error',
          message: 'Erreur lors de l\'import'
        });
      }
    };
    reader.readAsText(file);
  };

  // Combiner utilisateurs et abonnés pour l'éditeur d'emails
  const allRecipients = [
    ...users.map(user => ({
      id: `user-${user.id}`,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      type: 'user'
    })),
    ...subscribers.map(sub => ({
      id: `subscriber-${sub.id}`,
      email: sub.email,
      firstName: undefined,
      lastName: undefined,
      type: 'subscriber'
    }))
  ];

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Newsletter & Emails</h1>
          <p className="text-muted-foreground mt-2">
            Gérez vos abonnés et envoyez des emails personnalisés
          </p>
        </div>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-blue-600">{subscribers.length}</div>
            <div className="text-sm text-muted-foreground">Abonnés newsletter</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-green-600">{users.length}</div>
            <div className="text-sm text-muted-foreground">Utilisateurs inscrits</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-orange-600">{emailStats.totalSent || 0}</div>
            <div className="text-sm text-muted-foreground">Emails envoyés</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-purple-600">{emailStats.lastSent ? 'Oui' : 'Non'}</div>
            <div className="text-sm text-muted-foreground">Dernier envoi</div>
          </CardContent>
        </Card>
      </div>

      {/* Onglets */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="editor">Éditeur d'Emails</TabsTrigger>
          <TabsTrigger value="subscribers">Abonnés</TabsTrigger>
          <TabsTrigger value="stats">Statistiques</TabsTrigger>
        </TabsList>

        <TabsContent value="editor" className="space-y-6">
          <EmailEditor 
            recipients={allRecipients} 
            onSend={handleEmailSend}
          />
        </TabsContent>

        <TabsContent value="subscribers" className="space-y-6">
          {/* Gestion des abonnés */}
          <Card>
            <CardHeader>
              <CardTitle>Gestion des abonnés</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Ajouter un abonné */}
              <div className="flex gap-4">
                <Input
                  placeholder="Email de l'abonné"
                  value={newSubscriber}
                  onChange={(e) => setNewSubscriber(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={addSubscriber} disabled={!newSubscriber.trim()}>
                  Ajouter
                </Button>
              </div>

              {/* Actions en lot */}
              <div className="flex gap-4">
                <Button variant="outline" onClick={() => document.getElementById('importFile')?.click()}>
                  Importer CSV
                </Button>
                <Button variant="outline" onClick={exportSubscribers}>
                  Exporter CSV
                </Button>
                <input
                  id="importFile"
                  type="file"
                  accept=".csv"
                  onChange={importSubscribers}
                  className="hidden"
                />
              </div>

              {/* Liste des abonnés */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Abonnés ({subscribers.length})</h3>
                </div>
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {subscribers.map((subscriber) => (
                    <div key={subscriber.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="font-medium">{subscriber.email}</span>
                        <Badge variant={subscriber.isActive ? "default" : "secondary"}>
                          {subscriber.isActive ? "Actif" : "Inactif"}
                        </Badge>
                      </div>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => removeSubscriber(subscriber.id)}
                      >
                        Supprimer
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stats" className="space-y-6">
          {/* Statistiques des emails */}
          <Card>
            <CardHeader>
              <CardTitle>Statistiques des emails</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{emailStats.totalSent || 0}</div>
                  <div className="text-sm text-muted-foreground">Emails envoyés</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-bold text-red-600">{emailStats.totalFailed || 0}</div>
                  <div className="text-sm text-muted-foreground">Échecs</div>
                </div>
              </div>
              {emailStats.lastSent && (
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-sm text-muted-foreground">Dernier envoi</div>
                  <div className="font-medium">{new Date(emailStats.lastSent).toLocaleString('fr-FR')}</div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Statut de l'envoi */}
      {emailStatus.type && (
        <Alert className={emailStatus.type === 'success' ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>{emailStatus.type === 'success' ? 'Succès' : 'Erreur'}</AlertTitle>
          <AlertDescription>{emailStatus.message}</AlertDescription>
          {emailStatus.details && (
            <details className="mt-2">
              <summary className="cursor-pointer text-sm">Détails</summary>
              <pre className="mt-2 text-xs bg-muted p-2 rounded overflow-auto">
                {JSON.stringify(emailStatus.details, null, 2)}
              </pre>
            </details>
          )}
        </Alert>
      )}
    </div>
  );
}
