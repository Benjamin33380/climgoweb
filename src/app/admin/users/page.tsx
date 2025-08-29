'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Loader2, Users, UserCheck, UserX, Trophy, Activity, Search, Shield, Ban } from 'lucide-react';

export default function UsersAdminPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Utilisateurs exemple (remplacés par Supabase)
  const [users] = useState([
    {
      id: '1',
      username: 'john_doe',
      email: 'john@example.com',
      points_activity: 150,
      is_banned: false,
      created_at: '2024-01-15',
      last_login: '2024-01-20',
      avatar_url: null
    },
    {
      id: '2',
      username: 'jane_smith',
      email: 'jane@example.com',
      points_activity: 89,
      is_banned: false,
      created_at: '2024-01-10',
      last_login: '2024-01-19',
      avatar_url: null
    },
    {
      id: '3',
      username: 'bob_wilson',
      email: 'bob@example.com',
      points_activity: 45,
      is_banned: true,
      created_at: '2024-01-05',
      last_login: '2024-01-15',
      avatar_url: null
    }
  ]);

  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBanUser = async (userId: string, ban: boolean) => {
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // Simulation de bannissement (remplacé par Supabase)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSuccess(`Utilisateur ${ban ? 'banni' : 'débanni'} avec succès !`);
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : 'Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (userId: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ? Cette action est irréversible.')) {
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // Simulation de suppression (remplacé par Supabase)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSuccess('Utilisateur supprimé avec succès !');
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : 'Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  };

  const getActivityLevel = (points: number) => {
    if (points >= 100) return { level: 'Expert', color: 'bg-purple-100 text-purple-800' };
    if (points >= 50) return { level: 'Actif', color: 'bg-green-100 text-green-800' };
    if (points >= 20) return { level: 'Intermédiaire', color: 'bg-blue-100 text-blue-800' };
    return { level: 'Débutant', color: 'bg-gray-100 text-gray-800' };
  };

  const totalUsers = users.length;
  const activeUsers = users.filter(u => !u.is_banned).length;
  const bannedUsers = users.filter(u => u.is_banned).length;
  const averagePoints = users.reduce((sum, u) => sum + u.points_activity, 0) / users.length;

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Gestion des Utilisateurs</h1>
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
                <div className="text-2xl font-bold">{totalUsers}</div>
                <div className="text-sm text-gray-600">Total utilisateurs</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <UserCheck className="h-5 w-5 text-green-500" />
              <div>
                <div className="text-2xl font-bold">{activeUsers}</div>
                <div className="text-sm text-gray-600">Utilisateurs actifs</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <UserX className="h-5 w-5 text-red-500" />
              <div>
                <div className="text-2xl font-bold">{bannedUsers}</div>
                <div className="text-sm text-gray-600">Utilisateurs bannis</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-yellow-500" />
              <div>
                <div className="text-2xl font-bold">{Math.round(averagePoints)}</div>
                <div className="text-sm text-gray-600">Points moyens</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recherche */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Rechercher un utilisateur
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            placeholder="Rechercher par nom d'utilisateur ou email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md"
          />
        </CardContent>
      </Card>

      {/* Liste des utilisateurs */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Liste des utilisateurs ({filteredUsers.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {filteredUsers.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <Users className="h-12 w-12 mx-auto mb-2 text-gray-300" />
              <p>Aucun utilisateur trouvé</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredUsers.map((user) => {
                const activityLevel = getActivityLevel(user.points_activity);
                
                return (
                  <div key={user.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium text-blue-600">
                            {user.username[0]?.toUpperCase() || 'U'}
                          </span>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{user.username}</span>
                            {user.is_banned && (
                              <Badge variant="destructive" className="text-xs">
                                <Ban className="h-3 w-3 mr-1" />
                                Banni
                              </Badge>
                            )}
                          </div>
                          <div className="text-sm text-gray-500">{user.email}</div>
                        </div>
                      </div>
                      
                      <div className="text-right text-sm text-gray-500">
                        <div>Inscrit le {new Date(user.created_at).toLocaleDateString('fr-FR')}</div>
                        <div>Dernière connexion : {new Date(user.last_login).toLocaleDateString('fr-FR')}</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Activity className="h-4 w-4 text-blue-500" />
                          <span className="text-sm font-medium">{user.points_activity} points</span>
                        </div>
                        <Badge className={activityLevel.color}>
                          {activityLevel.level}
                        </Badge>
                      </div>

                      <div className="flex gap-2">
                        {user.is_banned ? (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleBanUser(user.id, false)}
                            disabled={loading}
                            className="text-green-600 border-green-600 hover:bg-green-50"
                          >
                            <UserCheck className="h-4 w-4 mr-1" />
                            Débannir
                          </Button>
                        ) : (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleBanUser(user.id, true)}
                            disabled={loading}
                            className="text-red-600 border-red-600 hover:bg-red-50"
                          >
                            <Ban className="h-4 w-4 mr-1" />
                            Bannir
                          </Button>
                        )}
                        
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDeleteUser(user.id)}
                          disabled={loading}
                        >
                          Supprimer
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Configuration requise */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-orange-500" />
            Configuration requise
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-6">
            <Shield className="h-16 w-16 mx-auto mb-4 text-gray-300" />
            <h3 className="text-lg font-semibold mb-2">Supabase à configurer</h3>
            <p className="text-gray-600 mb-4">
              Pour activer la gestion des utilisateurs, vous devez :
            </p>
            <div className="text-left max-w-md mx-auto space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-green-600">✓</Badge>
                Configurer vos clés Supabase dans le fichier .env
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-green-600">✓</Badge>
                Exécuter le script de migration SQL
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-yellow-600">⚠</Badge>
                Activer l'authentification Supabase
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
