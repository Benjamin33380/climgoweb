'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Search, Users, Mail, User, FileText, Loader2 } from 'lucide-react';

interface Recipient {
  id: string;
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  role?: string | null;
  type: 'user' | 'newsletter';
  source: string;
}

interface RecipientSelectorProps {
  onSelectionChange: (selectedIds: string[]) => void;
  selectedIds: string[];
}

export default function RecipientSelector({ onSelectionChange, selectedIds }: RecipientSelectorProps) {
  const [recipients, setRecipients] = useState<Recipient[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [stats, setStats] = useState({
    total: 0,
    users: 0,
    newsletter: 0,
    unique: 0
  });

  // Charger les destinataires
  useEffect(() => {
    loadRecipients();
  }, []);

  const loadRecipients = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/admin/newsletter/recipients');
      if (response.ok) {
        const data = await response.json();
        setRecipients(data.recipients || []);
        setStats(data.stats || {});
      }
    } catch (error) {
      console.error('Erreur lors du chargement des destinataires:', error);
    } finally {
      setLoading(false);
    }
  };

  // Filtrer les destinataires selon la recherche
  const filteredRecipients = recipients.filter(recipient =>
    recipient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (recipient.firstName && recipient.firstName.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (recipient.lastName && recipient.lastName.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Gérer la sélection/désélection
  const handleRecipientToggle = (recipientId: string) => {
    const newSelection = selectedIds.includes(recipientId)
      ? selectedIds.filter(id => id !== recipientId)
      : [...selectedIds, recipientId];
    
    onSelectionChange(newSelection);
  };

  // Sélectionner tous les destinataires filtrés
  const selectAllFiltered = () => {
    const filteredIds = filteredRecipients.map(r => r.id);
    const newSelection = [...new Set([...selectedIds, ...filteredIds])];
    onSelectionChange(newSelection);
  };

  // Désélectionner tous les destinataires filtrés
  const deselectAllFiltered = () => {
    const filteredIds = filteredRecipients.map(r => r.id);
    const newSelection = selectedIds.filter(id => !filteredIds.includes(id));
    onSelectionChange(newSelection);
  };

  // Sélectionner tous les destinataires
  const selectAll = () => {
    onSelectionChange(recipients.map(r => r.id));
  };

  // Désélectionner tous les destinataires
  const deselectAll = () => {
    onSelectionChange([]);
  };

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Sélection des Destinataires
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center py-8">
          <Loader2 className="h-6 w-6 animate-spin" />
          <span className="ml-2">Chargement des destinataires...</span>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5" />
          Sélection des Destinataires
        </CardTitle>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            {stats.users} utilisateurs
          </div>
          <div className="flex items-center gap-1">
            <Mail className="h-4 w-4" />
            {stats.newsletter} newsletter
          </div>
          <div className="flex items-center gap-1">
            <FileText className="h-4 w-4" />
            {stats.unique} total unique
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Barre de recherche */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Rechercher par email, prénom ou nom..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Boutons de sélection */}
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={selectAll}
            className="text-xs"
          >
            Tout sélectionner
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={deselectAll}
            className="text-xs"
          >
            Tout désélectionner
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={selectAllFiltered}
            className="text-xs"
          >
            Sélectionner filtrés
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={deselectAllFiltered}
            className="text-xs"
          >
            Désélectionner filtrés
          </Button>
        </div>

        {/* Compteur de sélection */}
        {selectedIds.length > 0 && (
          <div className="flex items-center gap-2 text-sm">
            <Badge variant="secondary">
              {selectedIds.length} destinataire(s) sélectionné(s)
            </Badge>
          </div>
        )}

        {/* Liste des destinataires */}
        <div className="max-h-96 overflow-y-auto border rounded-lg">
          {filteredRecipients.length === 0 ? (
            <div className="p-4 text-center text-muted-foreground">
              Aucun destinataire trouvé
            </div>
          ) : (
            <div className="divide-y">
              {filteredRecipients.map((recipient) => (
                <div
                  key={recipient.id}
                  className="flex items-center gap-3 p-3 hover:bg-muted/50"
                >
                  <Checkbox
                    checked={selectedIds.includes(recipient.id)}
                    onCheckedChange={() => handleRecipientToggle(recipient.id)}
                  />
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-medium truncate">
                        {recipient.email}
                      </span>
                      <Badge variant={recipient.type === 'user' ? 'default' : 'secondary'} className="text-xs">
                        {recipient.type === 'user' ? 'Utilisateur' : 'Newsletter'}
                      </Badge>
                    </div>
                    
                    {(recipient.firstName || recipient.lastName) && (
                      <div className="text-sm text-muted-foreground">
                        {[recipient.firstName, recipient.lastName].filter(Boolean).join(' ')}
                      </div>
                    )}
                    
                    {recipient.role && (
                      <div className="text-xs text-muted-foreground">
                        Rôle: {recipient.role}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
} 