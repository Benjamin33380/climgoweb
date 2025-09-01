'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { 
  Mail, 
  Shield, 
  MessageCircle, 
  Save,
  ArrowLeft
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useUser } from '@/components/providers/UserProvider';

interface UserPreferences {
  newsletter_subscribed: boolean;
  email_notifications: boolean;
  comment_notifications: boolean;
  rating_notifications: boolean;
  marketing_emails: boolean;
  profile_public: boolean;
  show_activity: boolean;
}

export default function PreferencesPage() {
  const { user, loading } = useUser();
  const router = useRouter();
  const [preferences, setPreferences] = useState<UserPreferences>({
    newsletter_subscribed: false,
    email_notifications: true,
    comment_notifications: true,
    rating_notifications: true,
    marketing_emails: false,
    profile_public: false,
    show_activity: true
  });
  const [isSaving, setSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth');
      return;
    }

    if (user) {
      fetchPreferences();
    }
  }, [user, loading, router]); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchPreferences = async () => {
    if (!user) return;

    try {
      const response = await fetch('/api/user/preferences');
      
      if (response.ok) {
        const data = await response.json();
        if (data.preferences) {
          setPreferences(data.preferences);
        }
      }
    } catch (error) {
      console.error('Erreur lors du chargement des préférences:', error);
    }
  };

  const handlePreferenceChange = (key: keyof UserPreferences, value: boolean) => {
    setPreferences(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = async () => {
    if (!user) return;

    setSaving(true);
    setSaveStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/user/preferences', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(preferences)
      });

      if (response.ok) {
        setSaveStatus({
          type: 'success',
          message: 'Préférences sauvegardées avec succès !'
        });

        // Effacer le message après 3 secondes
        setTimeout(() => {
          setSaveStatus({ type: null, message: '' });
        }, 3000);
      } else {
        throw new Error('Erreur lors de la sauvegarde');
      }
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
      setSaveStatus({
        type: 'error',
        message: 'Erreur lors de la sauvegarde des préférences'
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-2 text-muted-foreground">Chargement...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground">Accès non autorisé</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/profile">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Préférences</h1>
              <p className="text-muted-foreground mt-1">
                Gérez vos préférences de communication et de confidentialité
              </p>
            </div>
          </div>

          {/* Message de statut */}
          {saveStatus.type && (
            <div className={`p-4 rounded-lg border ${
              saveStatus.type === 'success' 
                ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200' 
                : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200'
            }`}>
              <p className="text-sm font-medium">{saveStatus.message}</p>
            </div>
          )}
        </div>

        <div className="space-y-6">
          {/* Notifications par email */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Notifications par email
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="newsletter" className="text-base font-medium">
                    Newsletter ClimGO
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Recevez nos derniers articles, conseils et actualités
                  </p>
                </div>
                <Switch
                  id="newsletter"
                  checked={preferences.newsletter_subscribed}
                  onCheckedChange={(checked) => handlePreferenceChange('newsletter_subscribed', checked)}
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="email-notifications" className="text-base font-medium">
                    Notifications générales
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Notifications importantes concernant votre compte
                  </p>
                </div>
                <Switch
                  id="email-notifications"
                  checked={preferences.email_notifications}
                  onCheckedChange={(checked) => handlePreferenceChange('email_notifications', checked)}
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="comment-notifications" className="text-base font-medium">
                    Réponses aux commentaires
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Être notifié quand quelqu'un répond à vos commentaires
                  </p>
                </div>
                <Switch
                  id="comment-notifications"
                  checked={preferences.comment_notifications}
                  onCheckedChange={(checked) => handlePreferenceChange('comment_notifications', checked)}
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="marketing-emails" className="text-base font-medium">
                    Emails promotionnels
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Offres spéciales et promotions sur nos services
                  </p>
                </div>
                <Switch
                  id="marketing-emails"
                  checked={preferences.marketing_emails}
                  onCheckedChange={(checked) => handlePreferenceChange('marketing_emails', checked)}
                />
              </div>
            </div>
          </Card>

          {/* Confidentialité */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Confidentialité
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="profile-public" className="text-base font-medium">
                    Profil public
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Permettre aux autres utilisateurs de voir votre profil
                  </p>
                </div>
                <Switch
                  id="profile-public"
                  checked={preferences.profile_public}
                  onCheckedChange={(checked) => handlePreferenceChange('profile_public', checked)}
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="show-activity" className="text-base font-medium">
                    Afficher l'activité
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Afficher vos commentaires et notes dans votre profil public
                  </p>
                </div>
                <Switch
                  id="show-activity"
                  checked={preferences.show_activity}
                  onCheckedChange={(checked) => handlePreferenceChange('show_activity', checked)}
                />
              </div>
            </div>
          </Card>

          {/* Interactions */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Interactions sur le blog
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="rating-notifications" className="text-base font-medium">
                    Notifications de notes
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Être notifié quand vos articles reçoivent des notes
                  </p>
                </div>
                <Switch
                  id="rating-notifications"
                  checked={preferences.rating_notifications}
                  onCheckedChange={(checked) => handlePreferenceChange('rating_notifications', checked)}
                />
              </div>
            </div>
          </Card>

          {/* Boutons d'action */}
          <div className="flex items-center justify-between pt-6">
            <Link href="/profile">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour au profil
              </Button>
            </Link>
            
            <Button onClick={handleSave} disabled={isSaving}>
              <Save className="w-4 h-4 mr-2" />
              {isSaving ? 'Sauvegarde...' : 'Sauvegarder'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
