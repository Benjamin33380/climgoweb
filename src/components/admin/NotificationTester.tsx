'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Mail, Send } from 'lucide-react';

export function NotificationTester() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    success: boolean;
    message?: string;
    error?: string;
  } | null>(null);

  const testNotification = async () => {
    if (!email) {
      setResult({ success: false, error: 'Veuillez saisir un email' });
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch('/api/test-notifications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setResult({
          success: true,
          message: data.message
        });
      } else {
        setResult({
          success: false,
          error: data.error || 'Erreur lors de l\'envoi'
        });
      }
    } catch (error) {
      console.error('Erreur lors du test des notifications:', error);
      setResult({
        success: false,
        error: 'Erreur de connexion'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mail className="h-5 w-5" />
          Test des notifications par email
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="test-email">Email de test</Label>
          <div className="flex gap-2">
            <Input
              id="test-email"
              type="email"
              placeholder="votre@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
            <Button
              onClick={testNotification}
              disabled={loading || !email}
              size="icon"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {result && (
          <Alert variant={result.success ? "default" : "destructive"}>
            <AlertDescription>
              {result.success ? result.message : result.error}
            </AlertDescription>
          </Alert>
        )}

        <div className="text-sm text-muted-foreground">
          <p>Ce composant permet de tester l'envoi d'emails de notification.</p>
          <p>Assurez-vous que les variables SMTP sont configurées dans votre environnement.</p>
        </div>
      </CardContent>
    </Card>
  );
} 