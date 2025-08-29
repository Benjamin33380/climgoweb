'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Mail, Lock, Eye, EyeOff, Star } from 'lucide-react';

export default function ClientAuth() {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    avatar_url: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      if (mode === 'register') {
        if (formData.password !== formData.confirmPassword) {
          setError('Les mots de passe ne correspondent pas');
          return;
        }

        // TODO: Remplacer par Supabase Auth
        // const { data, error } = await supabase.auth.signUp({
        //   email: formData.email,
        //   password: formData.password,
        //   options: {
        //     data: {
        //       username: formData.username,
        //       avatar_url: formData.avatar_url
        //     }
        //   }
        // });

        // Simulation d'inscription
        setSuccess('Compte créé avec succès ! Vous pouvez maintenant vous connecter.');
        setMode('login');
        setFormData({ username: '', email: '', password: '', confirmPassword: '', avatar_url: '' });
      } else {
        // TODO: Remplacer par Supabase Auth
        // const { data, error } = await supabase.auth.signInWithPassword({
        //   email: formData.email,
        //   password: formData.password,
        // });

        // Simulation de connexion
        if (formData.email && formData.password) {
          localStorage.setItem('clientToken', 'client-token-123');
          localStorage.setItem('clientUser', JSON.stringify({
            id: 'client-1',
            username: formData.email.split('@')[0],
            email: formData.email,
            role: 'client',
            activity_points: 100
          }));
          
          router.push('/blog');
        } else {
          setError('Veuillez remplir tous les champs');
        }
      }
    } catch (err) {
      setError('Erreur lors de l\'opération');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 bg-green-600 rounded-full flex items-center justify-center">
            <User className="h-6 w-6 text-white" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Espace Client
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Connectez-vous ou créez votre compte pour accéder au blog
          </p>
        </div>

        <Card>
          <CardHeader>
            <Tabs value={mode} onValueChange={(value) => setMode(value as 'login' | 'register')}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Connexion</TabsTrigger>
                <TabsTrigger value="register">Inscription</TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="space-y-4">
                <div className="text-center">
                  <CardTitle>Connexion</CardTitle>
                  <CardDescription>
                    Accédez à votre espace personnel
                  </CardDescription>
                </div>
              </TabsContent>

              <TabsContent value="register" className="space-y-4">
                <div className="text-center">
                  <CardTitle>Inscription</CardTitle>
                  <CardDescription>
                    Créez votre compte et commencez à interagir
                  </CardDescription>
                </div>
              </TabsContent>
            </Tabs>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
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

              {mode === 'register' && (
                <div className="space-y-2">
                  <Label htmlFor="username">Nom d'utilisateur</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="username"
                      type="text"
                      value={formData.username}
                      onChange={(e) => handleInputChange('username', e.target.value)}
                      placeholder="Votre nom d'utilisateur"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="votre@email.com"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Mot de passe</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    placeholder="••••••••"
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {mode === 'register' && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                        placeholder="••••••••"
                        className="pl-10 pr-10"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="avatar_url">URL de l'avatar (optionnel)</Label>
                    <Input
                      id="avatar_url"
                      type="url"
                      value={formData.avatar_url}
                      onChange={(e) => handleInputChange('avatar_url', e.target.value)}
                      placeholder="https://exemple.com/avatar.jpg"
                    />
                  </div>
                </>
              )}

              <Button
                type="submit"
                className="w-full"
                disabled={loading}
              >
                {loading ? 'Chargement...' : mode === 'login' ? 'Se connecter' : 'Créer le compte'}
              </Button>
            </form>

            {mode === 'login' && (
              <div className="mt-4 text-center text-sm text-gray-600">
                <p>Pas encore de compte ?</p>
                <button
                  onClick={() => setMode('register')}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Créer un compte
                </button>
              </div>
            )}

            {mode === 'register' && (
              <div className="mt-4 text-center text-sm text-gray-600">
                <p>Déjà un compte ?</p>
                <button
                  onClick={() => setMode('login')}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Se connecter
                </button>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="text-center text-sm text-gray-500">
          <div className="flex items-center justify-center space-x-1">
            <Star className="h-4 w-4 text-yellow-500" />
            <span>Créez votre compte pour :</span>
          </div>
          <ul className="mt-2 space-y-1 text-xs">
            <li>• Commenter les articles</li>
            <li>• Donner des avis et notes</li>
            <li>• Gagner des points d'activité</li>
            <li>• Recevoir les newsletters en avant-première</li>
            <li>• Personnaliser votre profil</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
