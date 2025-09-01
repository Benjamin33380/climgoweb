'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, User, Shield, Eye, EyeOff, Save, Edit3, Lock } from 'lucide-react';
import { useUser } from '@/components/providers/UserProvider';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';

export default function ProfilePage() {
  const { loading, user } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);
  const [passwordLoading, setPasswordLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Formulaires
  const [profileForm, setProfileForm] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  });

  // Initialiser le formulaire avec les données utilisateur
  useEffect(() => {
    if (user) {
      setProfileForm({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email
      });
    }
  }, [user]);

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaveLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileForm)
      });

      if (response.ok) {
        setSuccess('Profil mis à jour avec succès !');
        setIsEditing(false);
        setTimeout(() => setSuccess(''), 3000);
      } else {
        const data = await response.json();
        setError(data.error || 'Erreur lors de la mise à jour du profil');
      }
    } catch (error) {
      setError('Erreur lors de la mise à jour du profil');
      console.error('Erreur lors de la mise à jour du profil:', error);
    } finally {
      setSaveLoading(false);
    }
  };

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordLoading(true);
    setError('');
    setSuccess('');

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setError('Les nouveaux mots de passe ne correspondent pas');
      setPasswordLoading(false);
      return;
    }

    if (passwordForm.newPassword.length < 8) {
      setError('Le nouveau mot de passe doit contenir au moins 8 caractères');
      setPasswordLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/user/password', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          currentPassword: passwordForm.currentPassword,
          newPassword: passwordForm.newPassword
        })
      });

      if (response.ok) {
        setSuccess('Mot de passe modifié avec succès !');
        setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
        setIsChangingPassword(false);
        setTimeout(() => setSuccess(''), 3000);
      } else {
        const data = await response.json();
        setError(data.error || 'Erreur lors du changement de mot de passe');
      }
    } catch (error) {
      setError('Erreur lors du changement de mot de passe');
      console.error('Erreur lors du changement de mot de passe:', error);
    } finally {
      setPasswordLoading(false);
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

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">Mon Profil</h1>
            <p className="text-muted-foreground mt-2">
              Gérez vos informations personnelles et votre compte
            </p>
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Informations personnelles */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Informations personnelles
                  </CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsEditing(!isEditing)}
                  >
                    {isEditing ? (
                      <>
                        <Edit3 className="h-4 w-4 mr-2" />
                        Annuler
                      </>
                    ) : (
                      <>
                        <Edit3 className="h-4 w-4 mr-2" />
                        Modifier
                      </>
                    )}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {isEditing ? (
                  <form onSubmit={handleProfileUpdate} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Prénom</Label>
                        <Input
                          id="firstName"
                          value={profileForm.firstName}
                          onChange={(e) => setProfileForm(prev => ({ ...prev, firstName: e.target.value }))}
                          placeholder="Prénom"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Nom</Label>
                        <Input
                          id="lastName"
                          value={profileForm.lastName}
                          onChange={(e) => setProfileForm(prev => ({ ...prev, lastName: e.target.value }))}
                          placeholder="Nom"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileForm.email}
                        onChange={(e) => setProfileForm(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="votre@email.com"
                        required
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button type="submit" disabled={saveLoading}>
                        {saveLoading ? (
                          <>
                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                            Sauvegarder...
                          </>
                        ) : (
                          <>
                            <Save className="h-4 w-4 mr-2" />
                            Sauvegarder
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm font-medium text-muted-foreground">Prénom</Label>
                        <p className="text-foreground">{user?.firstName || 'Non renseigné'}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-muted-foreground">Nom</Label>
                        <p className="text-foreground">{user?.lastName || 'Non renseigné'}</p>
                      </div>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Email</Label>
                      <p className="text-foreground">{user?.email}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Informations du compte */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Informations du compte
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Rôle</Label>
                    <p className="text-foreground capitalize">{user?.role?.toLowerCase()}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Statut</Label>
                    <p className="text-foreground">
                      {user?.isActive ? 'Actif' : 'Inactif'}
                    </p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Membre depuis</Label>
                    <p className="text-foreground">
                      {user?.createdAt ? new Date(user.createdAt).toLocaleDateString('fr-FR') : 'N/A'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Changement de mot de passe */}
          <Card className="mt-6">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5" />
                  Changer le mot de passe
                </CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsChangingPassword(!isChangingPassword)}
                >
                  {isChangingPassword ? 'Annuler' : 'Modifier'}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {isChangingPassword ? (
                <form onSubmit={handlePasswordChange} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Mot de passe actuel</Label>
                    <div className="relative">
                      <Input
                        id="currentPassword"
                        type={showPasswords.current ? 'text' : 'password'}
                        value={passwordForm.currentPassword}
                        onChange={(e) => setPasswordForm(prev => ({ ...prev, currentPassword: e.target.value }))}
                        placeholder="Votre mot de passe actuel"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPasswords(prev => ({ ...prev, current: !prev.current }))}
                      >
                        {showPasswords.current ? (
                          <EyeOff className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">Nouveau mot de passe</Label>
                      <div className="relative">
                        <Input
                          id="newPassword"
                          type={showPasswords.new ? 'text' : 'password'}
                          value={passwordForm.newPassword}
                          onChange={(e) => setPasswordForm(prev => ({ ...prev, newPassword: e.target.value }))}
                          placeholder="Au moins 8 caractères"
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowPasswords(prev => ({ ...prev, new: !prev.new }))}
                        >
                          {showPasswords.new ? (
                            <EyeOff className="h-4 w-4 text-muted-foreground" />
                          ) : (
                            <Eye className="h-4 w-4 text-muted-foreground" />
                          )}
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirmer le nouveau mot de passe</Label>
                      <div className="relative">
                        <Input
                          id="confirmPassword"
                          type={showPasswords.confirm ? 'text' : 'password'}
                          value={passwordForm.confirmPassword}
                          onChange={(e) => setPasswordForm(prev => ({ ...prev, confirmPassword: e.target.value }))}
                          placeholder="Confirmez le nouveau mot de passe"
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowPasswords(prev => ({ ...prev, confirm: !prev.confirm }))}
                        >
                          {showPasswords.confirm ? (
                            <EyeOff className="h-4 w-4 text-muted-foreground" />
                          ) : (
                            <Eye className="h-4 w-4 text-muted-foreground" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" disabled={passwordLoading}>
                    {passwordLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Modifier le mot de passe...
                      </>
                    ) : (
                      'Modifier le mot de passe'
                    )}
                  </Button>
                </form>
              ) : (
                <p className="text-muted-foreground">
                  Cliquez sur "Modifier" pour changer votre mot de passe.
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </ProtectedRoute>
  );
}