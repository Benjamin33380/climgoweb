'use client';

import { useUser } from '@/components/providers/UserProvider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Users, 
  FileText, 
  MessageSquare, 
  Mail, 
  BarChart3, 
  LogOut,
  Star,
  MessageCircle
} from 'lucide-react';

export function AdminNav() {
  const { user, logout } = useUser();

  if (!user || user.role !== 'ADMIN') {
    return null;
  }

  const adminLinks = [
    {
      title: 'Tableau de bord',
      description: 'Vue d\'ensemble des statistiques',
      href: '/admin/dashboard',
      icon: BarChart3,
      color: 'text-blue-600'
    },
    {
      title: 'Utilisateurs',
      description: 'Gérer les comptes utilisateurs',
      href: '/admin/users',
      icon: Users,
      color: 'text-green-600'
    },
    {
      title: 'Articles',
      description: 'Créer et modifier les articles',
      href: '/admin/articles',
      icon: FileText,
      color: 'text-purple-600'
    },
    {
      title: 'Commentaires',
      description: 'Modérer les commentaires',
      href: '/admin/comments',
      icon: MessageSquare,
      color: 'text-orange-600'
    },
    {
      title: 'Demandes de contact',
      description: 'Gérer les demandes de contact',
      href: '/admin/contacts',
      icon: MessageCircle,
      color: 'text-indigo-600'
    },
    {
      title: 'Avis et évaluations',
      description: 'Gérer les avis des articles',
      href: '/admin/ratings',
      icon: Star,
      color: 'text-yellow-600'
    },
    {
      title: 'Newsletter',
      description: 'Gérer les abonnements et envois',
      href: '/admin/newsletter',
      icon: Mail,
      color: 'text-red-600'
    },
  ];

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Administration ClimGo
              </h1>
              <p className="text-muted-foreground mt-2">
                Bienvenue, {user.firstName || user.email}
              </p>
            </div>
            <Button onClick={handleLogout} variant="outline">
              <LogOut className="w-4 h-4 mr-2" />
              Déconnexion
            </Button>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adminLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Card key={link.href} className="hover:shadow-lg transition-shadow cursor-pointer">
                <a href={link.href}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-muted`}>
                        <Icon className={`w-6 h-6 ${link.color}`} />
                      </div>
                      <CardTitle className="text-lg">{link.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {link.description}
                    </CardDescription>
                  </CardContent>
                </a>
              </Card>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Statistiques rapides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/20">
                    <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-foreground">Utilisateurs</p>
                    <p className="text-2xl font-bold text-foreground">0</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/20">
                    <FileText className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-foreground">Articles</p>
                    <p className="text-2xl font-bold text-foreground">0</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/20">
                    <MessageSquare className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-foreground">Commentaires</p>
                    <p className="text-2xl font-bold text-foreground">0</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/20">
                    <Mail className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-foreground">Newsletter</p>
                    <p className="text-2xl font-bold text-foreground">0</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 