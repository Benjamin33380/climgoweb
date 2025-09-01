'use client';

import { useUser } from '@/components/providers/UserProvider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function DebugPage() {
  const { user, loading } = useUser();
  const router = useRouter();

  const testAdminAccess = () => {
    router.push('/admin/dashboard');
  };

  const testProfileAccess = () => {
    router.push('/profile');
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">🔍 Page de Debug - Authentification</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* État de l'authentification */}
          <Card>
            <CardHeader>
              <CardTitle>État de l'authentification</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-medium">Loading:</span>
                <Badge variant={loading ? "default" : "secondary"}>
                  {loading ? "En cours..." : "Terminé"}
                </Badge>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="font-medium">Connecté:</span>
                <Badge variant={user ? "default" : "destructive"}>
                  {user ? "Oui" : "Non"}
                </Badge>
              </div>

              {user && (
                <>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Rôle:</span>
                    <Badge variant={user.role === 'ADMIN' ? "default" : "secondary"}>
                      {user.role}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Email:</span>
                    <span className="text-sm">{user.email}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Nom:</span>
                    <span className="text-sm">
                      {user.firstName || 'Non renseigné'} {user.lastName || 'Non renseigné'}
                    </span>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Actions de test */}
          <Card>
            <CardHeader>
              <CardTitle>Actions de test</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                onClick={testAdminAccess}
                disabled={!user || user.role !== 'ADMIN'}
                className="w-full"
              >
                Tester accès Admin Dashboard
              </Button>
              
              <Button 
                onClick={testProfileAccess}
                disabled={!user}
                className="w-full"
                variant="outline"
              >
                Tester accès Profil
              </Button>
              
              <div className="text-sm text-muted-foreground">
                {!user && "Connectez-vous pour tester les accès"}
                {user && user.role !== 'ADMIN' && "Vous n'avez pas les droits admin"}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Détails de l'utilisateur */}
        {user && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Détails complets de l'utilisateur</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-lg overflow-auto text-sm">
                {JSON.stringify(user, null, 2)}
              </pre>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
} 