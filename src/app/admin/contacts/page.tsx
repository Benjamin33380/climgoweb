'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Search, 
  Mail, 
  Phone, 
  Calendar, 
  CheckCircle, 
  XCircle, 
  Clock,
  Trash2,
  Eye,
  MessageSquare,
  Reply,
  Send
} from 'lucide-react';

interface Contact {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status: 'PENDING' | 'PROCESSED' | 'CLOSED';
  adminResponse?: string;
  adminResponseDate?: string;
  adminResponseBy?: string;
  createdAt: string;
  updatedAt: string;
}

export default function AdminContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'PENDING' | 'PROCESSED' | 'CLOSED'>('all');
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showReplyModal, setShowReplyModal] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [adminName, setAdminName] = useState('');
  const [sendingReply, setSendingReply] = useState(false);

  useEffect(() => {
    loadContacts();
  }, []);

  useEffect(() => {
    filterContacts();
  }, [contacts, searchTerm, filterStatus]); // eslint-disable-line react-hooks/exhaustive-deps

  const loadContacts = async () => {
    try {
      const response = await fetch('/api/admin/contacts');
      if (response.ok) {
        const data = await response.json();
        setContacts(data);
      } else {
        throw new Error('Erreur lors du chargement des contacts');
      }
    } catch (error) {
      console.error('Erreur lors du chargement des contacts:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterContacts = () => {
    let filtered = contacts;

    // Filtrer par statut
    if (filterStatus !== 'all') {
      filtered = filtered.filter(c => c.status === filterStatus);
    }

    // Filtrer par terme de recherche
    if (searchTerm) {
      filtered = filtered.filter(c => 
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.message.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredContacts(filtered);
  };

  const updateContactStatus = async (contactId: string, newStatus: string) => {
    try {
      const response = await fetch(`/api/admin/contacts/${contactId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus })
      });

      if (response.ok) {
        await loadContacts();
      } else {
        throw new Error('Erreur lors de la mise à jour');
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour:', error);
    }
  };

  const deleteContact = async (contactId: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cette demande de contact définitivement ?')) return;

    try {
      const response = await fetch(`/api/admin/contacts/${contactId}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        await loadContacts();
      } else {
        throw new Error('Erreur lors de la suppression');
      }
    } catch (error) {
      console.error('Erreur lors de la suppression:', error);
    }
  };

  const sendReply = async () => {
    if (!selectedContact || !replyText.trim() || !adminName.trim()) {
      alert('Veuillez remplir tous les champs requis');
      return;
    }

    setSendingReply(true);
    try {
      const response = await fetch(`/api/admin/contacts/${selectedContact.id}/reply`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          response: replyText,
          adminName: adminName
        })
      });

      if (response.ok) {
        alert('Réponse envoyée avec succès !');
        setShowReplyModal(false);
        setReplyText('');
        await loadContacts();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erreur lors de l\'envoi');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi de la réponse:', error);
      alert('Erreur lors de l\'envoi de la réponse');
    } finally {
      setSendingReply(false);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'PENDING':
        return <Badge variant="destructive"><Clock className="h-3 w-3 mr-1" />En attente</Badge>;
      case 'PROCESSED':
        return <Badge variant="secondary"><CheckCircle className="h-3 w-3 mr-1" />Traité</Badge>;
      case 'CLOSED':
        return <Badge variant="outline"><XCircle className="h-3 w-3 mr-1" />Fermé</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getStatusCount = (status: string) => {
    return contacts.filter(c => c.status === status).length;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-2 text-muted-foreground">Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Gestion des demandes de contact</h1>
        <div className="flex gap-2">
          <Badge variant="destructive">
            {getStatusCount('PENDING')} en attente
          </Badge>
          <Badge variant="secondary">
            {getStatusCount('PROCESSED')} traités
          </Badge>
          <Badge variant="outline">
            {getStatusCount('CLOSED')} fermés
          </Badge>
          <Badge variant="outline">
            {contacts.length} total
          </Badge>
        </div>
      </div>

      {/* Filtres et recherche */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Rechercher dans les demandes de contact..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant={filterStatus === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterStatus('all')}
              >
                Tous ({contacts.length})
              </Button>
              <Button
                variant={filterStatus === 'PENDING' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterStatus('PENDING')}
              >
                En attente ({getStatusCount('PENDING')})
              </Button>
              <Button
                variant={filterStatus === 'PROCESSED' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterStatus('PROCESSED')}
              >
                Traités ({getStatusCount('PROCESSED')})
              </Button>
              <Button
                variant={filterStatus === 'CLOSED' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterStatus('CLOSED')}
              >
                Fermés ({getStatusCount('CLOSED')})
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Liste des contacts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5" />
            Demandes de contact ({filteredContacts.length})
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {filteredContacts.length === 0 ? (
            <div className="text-center py-8">
              <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                {searchTerm || filterStatus !== 'all' 
                  ? 'Aucune demande ne correspond à vos critères'
                  : 'Aucune demande de contact pour le moment'
                }
              </p>
            </div>
          ) : (
            filteredContacts.map((contact) => (
              <div 
                key={contact.id} 
                className={`border rounded-lg p-4 ${
                  contact.status === 'PENDING' 
                    ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800' 
                    : contact.status === 'PROCESSED'
                    ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                    : 'bg-muted border-border'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">{contact.name}</p>
                      <p className="text-sm text-muted-foreground">{contact.email}</p>
                      {contact.phone && (
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <Phone className="w-3 h-3" />
                          {contact.phone}
                        </p>
                      )}
                    </div>
                    {getStatusBadge(contact.status)}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {new Date(contact.createdAt).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </div>
                </div>

                <div className="mb-3">
                  <div className="mb-2">
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      Sujet:
                    </p>
                    <p className="font-medium">{contact.subject}</p>
                  </div>
                  <div className="bg-background border rounded p-3">
                    <p className="text-sm whitespace-pre-wrap">{contact.message}</p>
                  </div>
                </div>

                <div className="flex gap-2 flex-wrap">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      setSelectedContact(contact);
                      setShowModal(true);
                    }}
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    Voir détails
                  </Button>
                  
                  {contact.status === 'PENDING' && (
                    <>
                      <Button
                        size="sm"
                        onClick={() => {
                          setSelectedContact(contact);
                          setShowReplyModal(true);
                        }}
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        <Reply className="w-4 h-4 mr-1" />
                        Répondre
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => updateContactStatus(contact.id, 'PROCESSED')}
                        className="bg-green-600 hover:bg-green-700 text-white"
                      >
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Marquer comme traité
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateContactStatus(contact.id, 'CLOSED')}
                      >
                        <XCircle className="w-4 h-4 mr-1" />
                        Fermer
                      </Button>
                    </>
                  )}
                  
                  {contact.status === 'PROCESSED' && (
                    <>
                      {!contact.adminResponse && (
                        <Button
                          size="sm"
                          onClick={() => {
                            setSelectedContact(contact);
                            setShowReplyModal(true);
                          }}
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          <Reply className="w-4 h-4 mr-1" />
                          Répondre
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateContactStatus(contact.id, 'CLOSED')}
                      >
                        <XCircle className="w-4 h-4 mr-1" />
                        Fermer
                      </Button>
                    </>
                  )}
                  
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => deleteContact(contact.id)}
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
                    Supprimer
                  </Button>
                </div>

                {/* Afficher la réponse admin si elle existe */}
                {contact.adminResponse && (
                  <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded">
                    <div className="flex items-center gap-2 mb-2">
                      <Reply className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-800 dark:text-blue-200">
                        Réponse envoyée {contact.adminResponseBy && `par ${contact.adminResponseBy}`}
                        {contact.adminResponseDate && ` le ${new Date(contact.adminResponseDate).toLocaleDateString('fr-FR')}`}
                      </span>
                    </div>
                    <p className="text-sm whitespace-pre-wrap text-blue-900 dark:text-blue-100">
                      {contact.adminResponse}
                    </p>
                  </div>
                )}
              </div>
            ))
          )}
        </CardContent>
      </Card>

      {/* Modal de détails */}
      {showModal && selectedContact && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-background rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Détails de la demande</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowModal(false)}
              >
                <XCircle className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Nom</label>
                <p className="font-medium">{selectedContact.name}</p>
              </div>
              
              <div>
                <label className="text-sm font-medium text-muted-foreground">Email</label>
                <p>{selectedContact.email}</p>
              </div>
              
              {selectedContact.phone && (
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Téléphone</label>
                  <p>{selectedContact.phone}</p>
                </div>
              )}
              
              <div>
                <label className="text-sm font-medium text-muted-foreground">Sujet</label>
                <p className="font-medium">{selectedContact.subject}</p>
              </div>
              
              <div>
                <label className="text-sm font-medium text-muted-foreground">Message</label>
                <div className="bg-muted p-3 rounded border">
                  <p className="whitespace-pre-wrap">{selectedContact.message}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>Créé le: {new Date(selectedContact.createdAt).toLocaleString('fr-FR')}</span>
                <span>Modifié le: {new Date(selectedContact.updatedAt).toLocaleString('fr-FR')}</span>
              </div>
            </div>
            
            <div className="flex justify-end gap-2 mt-6">
              <Button
                variant="outline"
                onClick={() => setShowModal(false)}
              >
                Fermer
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de réponse */}
      {showReplyModal && selectedContact && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-background rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Reply className="w-5 h-5" />
                Répondre à {selectedContact.name}
              </h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setShowReplyModal(false);
                  setReplyText('');
                }}
              >
                <XCircle className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="space-y-4">
              {/* Récapitulatif de la demande */}
              <div className="p-4 bg-muted rounded border">
                <h3 className="font-medium mb-2">Demande originale :</h3>
                <p className="text-sm text-muted-foreground mb-1">
                  <strong>Sujet :</strong> {selectedContact.subject}
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Email :</strong> {selectedContact.email}
                </p>
                <div className="bg-background p-3 rounded border">
                  <p className="text-sm whitespace-pre-wrap">{selectedContact.message}</p>
                </div>
              </div>

              {/* Nom de l'admin */}
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Votre nom (apparaîtra dans l'email) *
                </label>
                <Input
                  value={adminName}
                  onChange={(e) => setAdminName(e.target.value)}
                  placeholder="Ex: Thomas de ClimGO"
                  className="w-full"
                />
              </div>

              {/* Réponse */}
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Votre réponse *
                </label>
                <Textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Rédigez votre réponse personnalisée au client..."
                  rows={8}
                  className="w-full"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Cette réponse sera envoyée par email au client et sauvegardée dans la base de données.
                </p>
              </div>
            </div>
            
            <div className="flex justify-end gap-2 mt-6">
              <Button
                variant="outline"
                onClick={() => {
                  setShowReplyModal(false);
                  setReplyText('');
                }}
                disabled={sendingReply}
              >
                Annuler
              </Button>
              <Button
                onClick={sendReply}
                disabled={sendingReply || !replyText.trim() || !adminName.trim()}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                {sendingReply ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Envoyer la réponse
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 