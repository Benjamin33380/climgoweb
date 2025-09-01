'use client';

import { useState } from 'react';
import { useUser } from '@/components/providers/UserProvider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const { login, register } = useUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      if (isLogin) {
        const result = await login(email, password);
        if (result.success) {
          setSuccess('Connexion réussie !');
          // Redirection sera gérée par le hook useAuth
        } else {
          setError(result.error || 'Erreur de connexion');
        }
      } else {
        const result = await register(email, password, firstName, lastName);
        if (result.success) {
          setSuccess('Inscription réussie !');
          // Redirection sera gérée par le hook useAuth
        } else {
          setError(result.error || 'Erreur d\'inscription');
        }
      }
    } catch (error) {
      console.error('Erreur lors de la connexion ou de l\'inscription:', error);
      setError('Une erreur inattendue s\'est produite');
    } finally {
      setLoading(false);
    }
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setError('');
    setSuccess('');
    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">
            {isLogin ? 'Connexion' : 'Inscription'}
          </CardTitle>
          <CardDescription>
            {isLogin 
              ? 'Connectez-vous à votre compte ClimGo' 
              : 'Créez votre compte ClimGo'
            }
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={isLogin ? 'login' : 'register'} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger 
                value="login" 
                onClick={() => setIsLogin(true)}
                className={isLogin ? 'bg-primary text-primary-foreground' : ''}
              >
                Connexion
              </TabsTrigger>
              <TabsTrigger 
                value="register" 
                onClick={() => setIsLogin(false)}
                className={!isLogin ? 'bg-primary text-primary-foreground' : ''}
              >
                Inscription
              </TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="mt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Mot de passe</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Votre mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={loading}
                >
                  {loading ? 'Connexion...' : 'Se connecter'}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="register" className="mt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom</Label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="Prénom"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nom</Label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Nom"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-email">Email</Label>
                  <Input
                    id="register-email"
                    type="email"
                    placeholder="votre@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-password">Mot de passe</Label>
                  <Input
                    id="register-password"
                    type="password"
                    placeholder="Au moins 8 caractères"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={loading}
                >
                  {loading ? 'Inscription...' : 'S\'inscrire'}
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          {error && (
            <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}

          {success && (
            <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
              {success}
            </div>
          )}

          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={switchMode}
              className="text-sm text-blue-600 hover:text-blue-800 underline"
            >
              {isLogin 
                ? 'Pas encore de compte ? S\'inscrire' 
                : 'Déjà un compte ? Se connecter'
              }
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
