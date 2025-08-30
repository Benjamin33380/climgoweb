'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Search, 
  Filter, 
  MoreHorizontal,
  Shield,
  Ban,
  CheckCircle,
  XCircle,
  Mail,
  Calendar,
  MapPin,
  Activity,
  Loader2,
  AlertTriangle
} from 'lucide-react';
import { useUser } from '@/hooks/useUser';

interface UserData {
  id: string;
  email: string;
  username?: string;
  first_name?: string;
  last_name?: string;
  avatar_url?: string;
  phone?: string;
  city?: string;
  country?: string;
  points_activity: number;
  is_admin: boolean;
  is_banned: boolean;
  email_verified: boolean;
  created_at: string;
  last_login?: string;
  comment_count: number;
  rating_count: number;
  like_count: number;
  current_session?: {
    ip_address: string;
    country: string;
    city: string;
    created_at: string;
  };
}

interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export default function AdminUsersPage() {
  const { user } = useUser();
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    limit: 20,
    total: 0,
    totalPages: 0
  });
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  useEffect(() => {
    if (user?.is_admin) {
      loadUsers();
    }
  }, [user, pagination.page, search, statusFilter]);

  const loadUsers = async () => {
    setLoading(true);
    setError('');

    try {
      const params = new URLSearchParams({
        page: pagination.page.toString(),
        limit: pagination.limit.toString(),
        search,
        status: statusFilter
      });

      const response = await fetch(`/api/admin/users?${params}`);
      
      if (!response.ok) {
        throw new Error('Erreur lors du chargement des utilisateurs');
      }

      const data = await response.json();
      setUsers(data.users);
      setPagination(data.pagination);
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : 'Erreur inconnue');
    } finally {
      setLoading(false);
    }
  };

  const handleUserAction = async (userId: string, action: string, reason?: string) => {
    setActionLoading(userId);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/admin/users', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, action, reason })
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'action');
      }

      setSuccess(`Action "${action}" effectuée avec succès`);
      await loadUsers();
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : 'Erreur inconnue');
    } finally {
      setActionLoading(null);
    }
  };

  const handleBanUser = (userData: UserData) => {
    const reason = prompt('Raison du bannissement:');
    if (reason) {
      handleUserAction(userData.id, 'ban', reason);
    }
  };

  const getStatusBadge = (userData: UserData) => {
    if (userData.is_banned) {
      return <Badge variant="destructive"><Ban className="h-3 w-3 mr-1" />Banni</Badge>;
    }
    if (userData.is_admin) {
      return <Badge variant="secondary"><Shield className="h-3 w-3 mr-1" />Admin</Badge>;
    }
    return <Badge variant="secondary"><CheckCircle className="h-3 w-3 mr-1" />Actif</Badge>;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (!user?.is_admin) {
    return (
      <div className="container mx-auto p-6">
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            Accès refusé. Vous devez être administrateur pour accéder à cette page.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Gestion des utilisateurs</h1>
        <div className="flex items-center gap-2">
          <Badge variant="outline">{pagination.total} utilisateurs</Badge>
        </div>
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

      {/* Filtres et recherche */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Rechercher par email ou nom..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 border border-border rounded-md bg-background text-foreground"
              >
                <option value="all">Tous</option>
                <option value="active">Actifs</option>
                <option value="banned">Bannis</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Liste des utilisateurs */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Utilisateurs ({users.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>
          ) : users.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Aucun utilisateur trouvé</p>
            </div>
          ) : (
            <div className="space-y-4">
              {users.map((userData) => (
                <div
                  key={userData.id}
                  className="p-4 border border-border rounded-lg hover:bg-accent transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                        {userData.avatar_url ? (
                          <img
                            src={userData.avatar_url}
                            alt="Avatar"
                            className="w-12 h-12 rounded-full object-cover"
                          />
                        ) : (
                          <Users className="h-6 w-6 text-muted-foreground" />
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-medium">
                            {userData.first_name && userData.last_name
                              ? `${userData.first_name} ${userData.last_name}`
                              : userData.username || 'Utilisateur'
                            }
                          </h3>
                          {getStatusBadge(userData)}
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <span className="flex items-center gap-1">
                            <Mail className="h-3 w-3" />
                            {userData.email}
                          </span>
                          {userData.phone && (
                            <span>{userData.phone}</span>
                          )}
                        </div>

                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            Inscrit le {formatDate(userData.created_at)}
                          </span>
                          {userData.last_login && (
                            <span>
                              Dernière connexion: {formatDate(userData.last_login)}
                            </span>
                          )}
                          {userData.current_session && (
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {userData.current_session.city}, {userData.current_session.country}
                            </span>
                          )}
                        </div>

                        {/* Statistiques d'activité */}
                        <div className="flex items-center gap-4 mt-2">
                          <Badge variant="outline" className="text-xs">
                            <Activity className="h-3 w-3 mr-1" />
                            {userData.points_activity} points
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {userData.comment_count} commentaires
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {userData.rating_count} évaluations
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {userData.like_count} likes
                          </Badge>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      {actionLoading === userData.id ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <div className="flex items-center gap-1">
                          {!userData.email_verified && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleUserAction(userData.id, 'verify_email')}
                              className="text-xs"
                            >
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Vérifier email
                            </Button>
                          )}
                          
                          {!userData.is_admin && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleUserAction(userData.id, 'make_admin')}
                              className="text-xs"
                            >
                              <Shield className="h-3 w-3 mr-1" />
                              Admin
                            </Button>
                          )}
                          
                          {userData.is_admin && userData.id !== user.id && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleUserAction(userData.id, 'remove_admin')}
                              className="text-xs"
                            >
                              <XCircle className="h-3 w-3 mr-1" />
                              Retirer admin
                            </Button>
                          )}
                          
                          {userData.is_banned ? (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleUserAction(userData.id, 'unban')}
                              className="text-xs text-green-600"
                            >
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Débannir
                            </Button>
                          ) : userData.id !== user.id && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleBanUser(userData)}
                              className="text-xs text-red-600"
                            >
                              <Ban className="h-3 w-3 mr-1" />
                              Bannir
                            </Button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {pagination.totalPages > 1 && (
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
              <div className="text-sm text-muted-foreground">
                Page {pagination.page} sur {pagination.totalPages} ({pagination.total} utilisateurs)
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPagination(prev => ({ ...prev, page: prev.page - 1 }))}
                  disabled={pagination.page === 1}
                >
                  Précédent
                </Button>
                
                <div className="flex items-center gap-1">
                  {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, i) => {
                    const page = i + 1;
                    return (
                      <Button
                        key={page}
                        variant={page === pagination.page ? "default" : "outline"}
                        size="sm"
                        onClick={() => setPagination(prev => ({ ...prev, page }))}
                        className="w-8 h-8 p-0"
                      >
                        {page}
                      </Button>
                    );
                  })}
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPagination(prev => ({ ...prev, page: prev.page + 1 }))}
                  disabled={pagination.page === pagination.totalPages}
                >
                  Suivant
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}