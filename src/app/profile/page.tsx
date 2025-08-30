'use client';

import { useState, useEffect } from 'react';
import { useUser } from '@/hooks/useUser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Globe, 
  Edit, 
  Save, 
  X, 
  Camera,
  Shield,
  MessageSquare,
  Star,
  Heart,
  Eye,
  Loader2
} from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

interface UserProfile {
  id: string;
  email: string;
  username?: string;
  avatar_url?: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  address?: string;
  postal_code?: string;
  city?: string;
  country?: string;
  birth_date?: string;
  bio?: string;
  website?: string;
  points_activity: number;
  is_admin: boolean;
  is_banned: boolean;
  email_verified: boolean;
  newsletter_subscribed: boolean;
  preferences: Record<string, unknown>;
  created_at: string;
  last_login?: string;
}

interface UserStats {
  comment_count: number;
  rating_count: number;
  like_count: number;
  article_views: number;
}

export default function ProfilePage() {
  const { user, loading: userLoading, refreshUser } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [stats, setStats] = useState<UserStats>({
    comment_count: 0,
    rating_count: 0,
    like_count: 0,
    article_views: 0
  });

  // Formulaire de profil
  const [profileForm, setProfileForm] = useState({
    username: '',
    first_name: '',
    last_name: '',
    phone: '',
    address: '',
    postal_code: '',
    city: '',
    country: 'France',
    birth_date: '',
    bio: '',
    website: '',
    newsletter_subscribed: false
  });

  useEffect(() => {
    if (!userLoading && !user) {
      router.push('/auth');
      return;
    }

    if (user) {
      loadProfile();
      loadStats();
    }
  }, [user, userLoading]);

  const loadProfile = async () => {
    if (!user) return;
    
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error) throw error;

      setProfile(data);
      setProfileForm({
        username: data.username || '',
        first_name: data.first_name || '',
        last_name: data.last_name || '',
        phone: data.phone || '',
        address: data.address || '',
        postal_code: data.postal_code || '',
        city: data.city || '',
        country: data.country || 'France',
        birth_date: data.birth_date || '',
        bio: data.bio || '',
        website: data.website || '',
        newsletter_subscribed: data.newsletter_subscribed || false
      });
    } catch (error: unknown) {
      setError('Erreur lors du chargement du profil: ' + (error instanceof Error ? error.message : 'Erreur inconnue'));
    } finally {
      setLoading(false);
    }
  };

  const loadStats = async () => {
    if (!user) return;

    try {
      // Récupérer les statistiques utilisateur
      const [commentsRes, ratingsRes, likesRes] = await Promise.all([
        supabase.from('comments').select('id').eq('user_id', user.id),
        supabase.from('ratings').select('id').eq('user_id', user.id),
        supabase.from('article_likes').select('id').eq('user_id', user.id)
      ]);

      setStats({
        comment_count: commentsRes.data?.length || 0,
        rating_count: ratingsRes.data?.length || 0,
        like_count: likesRes.data?.length || 0,
        article_views: 0 // À implémenter avec les vues d'articles
      });
    } catch (error) {
      console.error('Erreur lors du chargement des statistiques:', error);
    }
  };

  const handleSave = async () => {
    if (!user) return;

    setSaving(true);
    setError('');
    setSuccess('');

    try {
      const { error } = await supabase
        .from('users')
        .update({
          username: profileForm.username || null,
          first_name: profileForm.first_name || null,
          last_name: profileForm.last_name || null,
          phone: profileForm.phone || null,
          address: profileForm.address || null,
          postal_code: profileForm.postal_code || null,
          city: profileForm.city || null,
          country: profileForm.country || null,
          birth_date: profileForm.birth_date || null,
          bio: profileForm.bio || null,
          website: profileForm.website || null,
          newsletter_subscribed: profileForm.newsletter_subscribed,
          updated_at: new Date().toISOString()
        })
        .eq('id', user.id);

      if (error) throw error;

      setSuccess('Profil mis à jour avec succès !');
      setIsEditing(false);
      await loadProfile();
      await refreshUser();
    } catch (error: unknown) {
      setError('Erreur lors de la sauvegarde: ' + (error instanceof Error ? error.message : 'Erreur inconnue'));
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    if (profile) {
      setProfileForm({
        username: profile.username || '',
        first_name: profile.first_name || '',
        last_name: profile.last_name || '',
        phone: profile.phone || '',
        address: profile.address || '',
        postal_code: profile.postal_code || '',
        city: profile.city || '',
        country: profile.country || 'France',
        birth_date: profile.birth_date || '',
        bio: profile.bio || '',
        website: profile.website || '',
        newsletter_subscribed: profile.newsletter_subscribed || false
      });
    }
    setIsEditing(false);
    setError('');
    setSuccess('');
  };

  if (userLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!user || !profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Accès refusé</h1>
          <p className="text-muted-foreground">Vous devez être connecté pour accéder à cette page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Mon Profil</h1>
        {!isEditing ? (
          <Button onClick={() => setIsEditing(true)} className="flex items-center gap-2">
            <Edit className="h-4 w-4" />
            Modifier
          </Button>
        ) : (
          <div className="flex gap-2">
            <Button onClick={handleSave} disabled={saving} className="flex items-center gap-2">
              {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
              Sauvegarder
            </Button>
            <Button variant="outline" onClick={handleCancel} disabled={saving}>
              <X className="h-4 w-4" />
              Annuler
            </Button>
          </div>
        )}
      </div>

      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {success && (
        <Alert className="mb-6">
          <AlertDescription>{success}</AlertDescription>
        </Alert>
      )}

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="profile">Profil</TabsTrigger>
          <TabsTrigger value="stats">Statistiques</TabsTrigger>
          <TabsTrigger value="preferences">Préférences</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          {/* En-tête du profil */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-6">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
                    {profile.avatar_url ? (
                      <img
                        src={profile.avatar_url}
                        alt="Avatar"
                        className="w-24 h-24 rounded-full object-cover"
                      />
                    ) : (
                      <User className="w-12 h-12 text-muted-foreground" />
                    )}
                  </div>
                  {isEditing && (
                    <Button
                      size="icon"
                      variant="outline"
                      className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full"
                    >
                      <Camera className="w-4 h-4" />
                    </Button>
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold">
                      {profile.first_name && profile.last_name 
                        ? `${profile.first_name} ${profile.last_name}`
                        : profile.username || 'Utilisateur'
                      }
                    </h2>
                    {profile.is_admin && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Shield className="w-3 h-3" />
                        Admin
                      </Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground mb-2">{profile.email}</p>
                  {profile.bio && (
                    <p className="text-sm">{profile.bio}</p>
                  )}
                  <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                    <span>Membre depuis {new Date(profile.created_at).toLocaleDateString('fr-FR')}</span>
                    <span>•</span>
                    <span>{profile.points_activity} points d'activité</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Informations personnelles */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Informations personnelles
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Nom d'utilisateur</Label>
                  <Input
                    id="username"
                    value={profileForm.username}
                    onChange={(e) => setProfileForm(prev => ({ ...prev, username: e.target.value }))}
                    disabled={!isEditing}
                    placeholder="Votre nom d'utilisateur"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    value={profile.email}
                    disabled
                    className="bg-muted"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="first_name">Prénom</Label>
                  <Input
                    id="first_name"
                    value={profileForm.first_name}
                    onChange={(e) => setProfileForm(prev => ({ ...prev, first_name: e.target.value }))}
                    disabled={!isEditing}
                    placeholder="Votre prénom"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="last_name">Nom</Label>
                  <Input
                    id="last_name"
                    value={profileForm.last_name}
                    onChange={(e) => setProfileForm(prev => ({ ...prev, last_name: e.target.value }))}
                    disabled={!isEditing}
                    placeholder="Votre nom"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input
                    id="phone"
                    value={profileForm.phone}
                    onChange={(e) => setProfileForm(prev => ({ ...prev, phone: e.target.value }))}
                    disabled={!isEditing}
                    placeholder="Votre numéro de téléphone"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="birth_date">Date de naissance</Label>
                  <Input
                    id="birth_date"
                    type="date"
                    value={profileForm.birth_date}
                    onChange={(e) => setProfileForm(prev => ({ ...prev, birth_date: e.target.value }))}
                    disabled={!isEditing}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website">Site web</Label>
                  <Input
                    id="website"
                    value={profileForm.website}
                    onChange={(e) => setProfileForm(prev => ({ ...prev, website: e.target.value }))}
                    disabled={!isEditing}
                    placeholder="https://votre-site.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Biographie</Label>
                <Textarea
                  id="bio"
                  value={profileForm.bio}
                  onChange={(e) => setProfileForm(prev => ({ ...prev, bio: e.target.value }))}
                  disabled={!isEditing}
                  placeholder="Parlez-nous de vous..."
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Adresse */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Adresse
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="address">Adresse</Label>
                <Input
                  id="address"
                  value={profileForm.address}
                  onChange={(e) => setProfileForm(prev => ({ ...prev, address: e.target.value }))}
                  disabled={!isEditing}
                  placeholder="Votre adresse complète"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="postal_code">Code postal</Label>
                  <Input
                    id="postal_code"
                    value={profileForm.postal_code}
                    onChange={(e) => setProfileForm(prev => ({ ...prev, postal_code: e.target.value }))}
                    disabled={!isEditing}
                    placeholder="33000"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city">Ville</Label>
                  <Input
                    id="city"
                    value={profileForm.city}
                    onChange={(e) => setProfileForm(prev => ({ ...prev, city: e.target.value }))}
                    disabled={!isEditing}
                    placeholder="Bordeaux"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="country">Pays</Label>
                  <Input
                    id="country"
                    value={profileForm.country}
                    onChange={(e) => setProfileForm(prev => ({ ...prev, country: e.target.value }))}
                    disabled={!isEditing}
                    placeholder="France"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stats" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-8 w-8 text-blue-500" />
                  <div>
                    <div className="text-2xl font-bold">{stats.comment_count}</div>
                    <div className="text-sm text-muted-foreground">Commentaires</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Star className="h-8 w-8 text-yellow-500" />
                  <div>
                    <div className="text-2xl font-bold">{stats.rating_count}</div>
                    <div className="text-sm text-muted-foreground">Évaluations</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Heart className="h-8 w-8 text-red-500" />
                  <div>
                    <div className="text-2xl font-bold">{stats.like_count}</div>
                    <div className="text-sm text-muted-foreground">J'aime donnés</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Eye className="h-8 w-8 text-green-500" />
                  <div>
                    <div className="text-2xl font-bold">{profile.points_activity}</div>
                    <div className="text-sm text-muted-foreground">Points d'activité</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Activité récente</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Aucune activité récente à afficher</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preferences" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Préférences de communication
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Newsletter</h4>
                  <p className="text-sm text-muted-foreground">
                    Recevez nos derniers articles et actualités
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={profileForm.newsletter_subscribed}
                  onChange={(e) => setProfileForm(prev => ({ ...prev, newsletter_subscribed: e.target.checked }))}
                  disabled={!isEditing}
                  className="w-4 h-4"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Informations du compte</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Statut du compte:</span>
                  <Badge variant={profile.is_banned ? "destructive" : "secondary"} className="ml-2">
                    {profile.is_banned ? "Banni" : "Actif"}
                  </Badge>
                </div>
                <div>
                  <span className="font-medium">Email vérifié:</span>
                  <Badge variant={profile.email_verified ? "secondary" : "destructive"} className="ml-2">
                    {profile.email_verified ? "Vérifié" : "Non vérifié"}
                  </Badge>
                </div>
                <div>
                  <span className="font-medium">Dernière connexion:</span>
                  <span className="ml-2 text-muted-foreground">
                    {profile.last_login 
                      ? new Date(profile.last_login).toLocaleDateString('fr-FR')
                      : 'Jamais'
                    }
                  </span>
                </div>
                <div>
                  <span className="font-medium">Membre depuis:</span>
                  <span className="ml-2 text-muted-foreground">
                    {new Date(profile.created_at).toLocaleDateString('fr-FR')}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
