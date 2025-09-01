'use client';

import { useState, useEffect } from 'react';
import { useUser } from '@/components/providers/UserProvider';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Search, 
  Filter, 
  Mail,
  Calendar,
  Activity,
  Loader2,
  Edit,
  Trash2,
  UserPlus
} from 'lucide-react';

interface UserData {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  role: 'USER' | 'ADMIN';
  isActive: boolean;
  emailVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

interface UserFormData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: 'USER' | 'ADMIN';
}

export default function AdminUsersPage() {
  return (
    <ProtectedRoute requireAdmin={true}>
      <AdminUsersContent />
    </ProtectedRoute>
  );
}

function AdminUsersContent() {
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
  
  // États pour les modales CRUD
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState<UserData | null>(null);
  const [formData, setFormData] = useState<UserFormData>({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    role: 'USER'
  });
  const [editFormData, setEditFormData] = useState<UserFormData>({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    role: 'USER'
  });

  useEffect(() => {
    if (user?.role === 'ADMIN') {
      loadUsers();
    }
  }, [user, pagination.page, search, statusFilter]); // eslint-disable-line react-hooks/exhaustive-deps

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

      const response = await fetch(`/api/admin/users?${params}`, {
        credentials: 'include' // Inclure les cookies automatiquement
      });
      
      if (!response.ok) {
        if (response.status === 401) {
          setError('Session expirée, veuillez vous reconnecter');
        } else if (response.status === 403) {
          setError('Accès refusé, droits insuffisants');
        } else {
          throw new Error('Erreur lors du chargement des utilisateurs');
        }
        return;
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

  // Fonction pour ajouter un utilisateur
  const handleAddUser = async () => {
    try {
      const response = await fetch('/api/admin/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erreur lors de la création');
      }

      setSuccess('Utilisateur créé avec succès');
      setShowAddModal(false);
      setFormData({ email: '', password: '', firstName: '', lastName: '', role: 'USER' });
      await loadUsers();
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : 'Erreur inconnue');
    }
  };

  // Fonction pour modifier un utilisateur
  const handleEditUser = async () => {
    if (!selectedUser) return;

    try {
      const response = await fetch(`/api/admin/users/${selectedUser.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(editFormData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erreur lors de la modification');
      }

      setSuccess('Utilisateur modifié avec succès');
      setShowEditModal(false);
      setSelectedUser(null);
      await loadUsers();
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : 'Erreur inconnue');
    }
  };

  // Fonction pour supprimer un utilisateur
  const handleDeleteUser = async () => {
    if (!userToDelete) return;

    try {
      const response = await fetch(`/api/admin/users/${userToDelete.id}`, {
        method: 'DELETE',
        credentials: 'include'
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erreur lors de la suppression');
      }

      setSuccess('Utilisateur supprimé avec succès');
      setShowDeleteModal(false);
      setUserToDelete(null);
      await loadUsers();
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : 'Erreur inconnue');
    }
  };

  // Ouvrir la modale d'édition
  const openEditModal = (userData: UserData) => {
    setSelectedUser(userData);
    setEditFormData({
      email: userData.email,
      password: '', // Pas de mot de passe pour l'édition
      firstName: userData.firstName || '',
      lastName: userData.lastName || '',
      role: userData.role
    });
    setShowEditModal(true);
  };

  // Ouvrir la modale de suppression
  const openDeleteModal = (userData: UserData) => {
    setUserToDelete(userData);
    setShowDeleteModal(true);
  };

  const getStatusBadge = (userData: UserData) => {
    if (!userData.isActive) {
      return <Badge variant="destructive">Inactif</Badge>;
    }
    if (userData.role === 'ADMIN') {
      return <Badge variant="secondary">Admin</Badge>;
    }
    return <Badge variant="secondary">Actif</Badge>;
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

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Gestion des utilisateurs</h1>
        <div className="flex items-center gap-2">
          <Button onClick={() => setShowAddModal(true)} className="flex items-center gap-2">
            <UserPlus className="h-4 w-4" />
            Ajouter un utilisateur
          </Button>
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
                <option value="inactive">Inactifs</option>
                <option value="admin">Admins</option>
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
                        <Users className="h-6 w-6 text-muted-foreground" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-medium">
                            {userData.firstName && userData.lastName
                              ? `${userData.firstName} ${userData.lastName}`
                              : 'Utilisateur'
                            }
                          </h3>
                          {getStatusBadge(userData)}
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <span className="flex items-center gap-1">
                            <Mail className="h-3 w-3" />
                            {userData.email}
                          </span>
                        </div>

                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            Inscrit le {formatDate(userData.createdAt)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Activity className="h-3 w-3" />
                            Rôle: {userData.role}
                          </span>
                        </div>

                        {/* Statut email */}
                        <div className="flex items-center gap-4 mt-2">
                          <Badge variant={userData.emailVerified ? "default" : "outline"} className="text-xs">
                            {userData.emailVerified ? 'Email vérifié' : 'Email non vérifié'}
                          </Badge>
                          <Badge variant={userData.isActive ? "default" : "destructive"} className="text-xs">
                            {userData.isActive ? 'Actif' : 'Inactif'}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      {/* Boutons d'édition et suppression */}
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => openEditModal(userData)}
                        className="text-xs"
                      >
                        <Edit className="h-3 w-3 mr-1" />
                        Modifier
                      </Button>
                      
                      {userData.id !== user?.id && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => openDeleteModal(userData)}
                          className="text-xs text-red-600"
                        >
                          <Trash2 className="h-3 w-3 mr-1" />
                          Supprimer
                        </Button>
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

      {/* Modale d'ajout d'utilisateur */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-background border border-border rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Ajouter un utilisateur</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email *</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="email@exemple.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Mot de passe *</label>
                <Input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="Mot de passe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Prénom</label>
                <Input
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  placeholder="Prénom"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Nom</label>
                <Input
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  placeholder="Nom"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Rôle</label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value as 'USER' | 'ADMIN' })}
                  className="w-full px-3 py-2 border border-border rounded-md"
                >
                  <option value="USER">Utilisateur</option>
                  <option value="ADMIN">Administrateur</option>
                </select>
              </div>
            </div>
            <div className="flex gap-2 mt-6">
              <Button onClick={handleAddUser} className="flex-1">Ajouter</Button>
              <Button variant="outline" onClick={() => setShowAddModal(false)} className="flex-1">Annuler</Button>
            </div>
          </div>
        </div>
      )}

      {/* Modale de modification d'utilisateur */}
      {showEditModal && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-background border border-border rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Modifier l'utilisateur</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email *</label>
                <Input
                  type="email"
                  value={editFormData.email}
                  onChange={(e) => setEditFormData({ ...editFormData, email: e.target.value })}
                  placeholder="email@exemple.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Nouveau mot de passe (optionnel)</label>
                <Input
                  type="password"
                  value={editFormData.password}
                  onChange={(e) => setEditFormData({ ...editFormData, password: e.target.value })}
                  placeholder="Laisser vide pour ne pas changer"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Prénom</label>
                <Input
                  value={editFormData.firstName}
                  onChange={(e) => setEditFormData({ ...editFormData, firstName: e.target.value })}
                  placeholder="Prénom"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Nom</label>
                <Input
                  value={editFormData.lastName}
                  onChange={(e) => setEditFormData({ ...editFormData, lastName: e.target.value })}
                  placeholder="Nom"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Rôle</label>
                <select
                  value={editFormData.role}
                  onChange={(e) => setEditFormData({ ...editFormData, role: e.target.value as 'USER' | 'ADMIN' })}
                  className="w-full px-3 py-2 border border-border rounded-md"
                >
                  <option value="USER">Utilisateur</option>
                  <option value="ADMIN">Administrateur</option>
                </select>
              </div>
            </div>
            <div className="flex gap-2 mt-6">
              <Button onClick={handleEditUser} className="flex-1">Modifier</Button>
              <Button variant="outline" onClick={() => setShowEditModal(false)} className="flex-1">Annuler</Button>
            </div>
          </div>
        </div>
      )}

      {/* Modale de confirmation de suppression */}
      {showDeleteModal && userToDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-background border border-border rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Confirmer la suppression</h2>
            <p className="text-muted-foreground mb-6">
              Êtes-vous sûr de vouloir supprimer l'utilisateur <strong>{userToDelete.email}</strong> ? 
              Cette action est irréversible.
            </p>
            <div className="flex gap-2">
              <Button variant="destructive" onClick={handleDeleteUser} className="flex-1">Supprimer</Button>
              <Button variant="outline" onClick={() => setShowDeleteModal(false)} className="flex-1">Annuler</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}