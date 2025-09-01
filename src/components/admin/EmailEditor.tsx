'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  Eye, 
  EyeOff, 
  Send, 
  Mail, 
  FileText, 

  Smartphone,
  Monitor,
  Download,
  Copy,
  CheckCircle,
  AlertCircle,
  XCircle
} from 'lucide-react';
import { emailTemplates, replaceTemplateVariables } from '@/lib/emailTemplates';

import { Alert, AlertDescription } from '@/components/ui/alert';

interface EmailEditorProps {
  onSend: (data: {
    template: string;
    subject: string;
    content: string;
    recipientIds: string[];
    customVariables: Record<string, string>;
  }) => Promise<{ success: number; error?: string }>;
  loading?: boolean;
  recipients?: Array<{ id: string; email: string; firstName?: string; lastName?: string }>;
}


export default function EmailEditor({ onSend, loading = false, recipients = [] }: EmailEditorProps) {
  const [selectedTemplate, setSelectedTemplate] = useState<string>('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const [showPreview, setShowPreview] = useState(true); // Prévisualisation affichée par défaut
  const [customVariables, setCustomVariables] = useState<Record<string, string>>({});
  const [selectedRecipients, setSelectedRecipients] = useState<string[]>([]);
  const [previewMode, setPreviewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [copied, setCopied] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
    details?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  }>({ type: null, message: '' });

  // Récupérer le template sélectionné
  const currentTemplate = selectedTemplate ? emailTemplates[selectedTemplate] : null;

  // Prévisualiser l'email
  const previewHtml = currentTemplate ? 
    replaceTemplateVariables(
      currentTemplate.html,
      {
        ...customVariables,
        subject: subject || 'Sujet de l\'email',
        content: content || 'Contenu de l\'email',
        firstName: 'Prénom',
        articleTitle: 'Titre de l\'article',
        articleExcerpt: 'Extrait de l\'article',
        articleUrl: '#',
        unsubscribeUrl: '#',
        ctaUrl: '#',
        ctaText: 'En savoir plus'
      }
    ) : '';

  const previewSubject = currentTemplate ? 
    replaceTemplateVariables(
      currentTemplate.subject,
      {
        ...customVariables,
        subject: subject || 'Sujet de l\'email',
        articleTitle: 'Titre de l\'article'
      }
    ) : '';

  useEffect(() => {
    if (selectedTemplate) {
      const template = emailTemplates[selectedTemplate];
      if (template) {
        // Ne pas remplacer automatiquement le sujet, laisser l'utilisateur le modifier
        setSubject('');
        setContent('');
        setCustomVariables({});
      }
    }
  }, [selectedTemplate]);

  const handleTemplateChange = (templateName: string) => {
    setSelectedTemplate(templateName);
  };

  const handleVariableChange = (variable: string, value: string) => {
    setCustomVariables(prev => ({
      ...prev,
      [variable]: value
    }));
  };

  const handleSend = async () => {
    console.log('🚀 [EmailEditor] handleSend appelé !');
    console.log('🚀 [EmailEditor] État actuel:', {
      selectedTemplate,
      subject: subject.trim(),
      selectedRecipients: selectedRecipients.length,
      loading
    });
    
    if (!selectedTemplate || !subject.trim()) {
      console.log('❌ [EmailEditor] Validation échouée');
      return;
    }

    // Démarrer l'envoi
    setSending(true);
    setSendStatus({ type: null, message: '' });

    console.log('📧 [EmailEditor] Envoi en cours...');
    console.log('📧 [EmailEditor] Destinataires sélectionnés:', selectedRecipients);
    console.log('📧 [EmailEditor] Total destinataires disponibles:', recipients.length);

    // Préparer toutes les variables pour l'envoi
    const allVariables = {
      ...customVariables,
      subject: subject.trim(),
      content: content.trim(),
      firstName: 'Utilisateur', // Valeur par défaut
      articleTitle: customVariables.articleTitle || 'Titre de l\'article',
      articleExcerpt: customVariables.articleExcerpt || 'Extrait de l\'article',
      articleUrl: customVariables.articleUrl || '#',
      unsubscribeUrl: '#',
      ctaUrl: customVariables.ctaUrl || '#',
      ctaText: customVariables.ctaText || 'En savoir plus'
    };

    try {
      // Appeler la fonction d'envoi et attendre le résultat
      const result = await onSend({
        template: selectedTemplate,
        subject: subject.trim(),
        content: content.trim(),
        recipientIds: selectedRecipients,
        customVariables: allVariables
      });

      // Gérer le résultat
      if (result && result.success) {
        setSendStatus({
          type: 'success',
          message: `Email envoyé avec succès à ${result.success} destinataires !`,
          details: result
        });
        // Réinitialiser le formulaire après succès
        setSubject('');
        setContent('');
        setCustomVariables({});
        setSelectedRecipients([]);
      } else {
        setSendStatus({
          type: 'error',
          message: result?.error || 'Erreur lors de l\'envoi',
          details: result
        });
      }
    } catch (error) {
      setSendStatus({
        type: 'error',
        message: 'Erreur de connexion lors de l\'envoi',
        details: error
      });
    } finally {
      setSending(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(previewHtml);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Erreur lors de la copie:', err);
    }
  };

  const downloadHTML = () => {
    const blob = new Blob([previewHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `email-${selectedTemplate}-${Date.now()}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getRecipientCount = () => {
    if (selectedRecipients.length === 0) return 'Aucun destinataire';
    if (selectedRecipients.length === 1) return '1 destinataire';
    return `${selectedRecipients.length} destinataires`;
  };

  return (
    <div className="space-y-6">
      {/* Header avec statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">{Object.keys(emailTemplates).length}</div>
            <div className="text-sm text-muted-foreground">Templates disponibles</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">{recipients.length}</div>
            <div className="text-sm text-muted-foreground">Destinataires totaux</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">{getRecipientCount()}</div>
            <div className="text-sm text-muted-foreground">Destinataires sélectionnés</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">
              {currentTemplate ? currentTemplate.variables.length : 0}
            </div>
            <div className="text-sm text-muted-foreground">Variables disponibles</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Éditeur */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Éditeur d'Email
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Sélection du template */}
            <div className="space-y-2">
              <Label htmlFor="template" className="text-gray-900 dark:text-gray-100">Template</Label>
              <select
                id="template"
                value={selectedTemplate}
                onChange={(e) => handleTemplateChange(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              >
                <option value="">Sélectionner un template</option>
                {Object.entries(emailTemplates).map(([key, template]) => (
                  <option key={key} value={key}>
                    {template.name} - {template.description}
                  </option>
                ))}
              </select>
            </div>

            {/* Sujet */}
            <div className="space-y-2">
              <Label htmlFor="subject" className="text-gray-900 dark:text-gray-100">Sujet</Label>
              <Input
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Sujet de l'email"
                className="font-medium text-gray-900 dark:text-white bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
              />
            </div>

            {/* Contenu (pour template personnalisé) */}
            {selectedTemplate === 'templateCustomMail' && (
              <div className="space-y-2">
                <Label htmlFor="content" className="text-gray-900 dark:text-gray-100">Contenu</Label>
                <Textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Contenu de votre email..."
                  rows={8}
                  className="resize-none text-gray-900 dark:text-white bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                />
              </div>
            )}

            {/* Variables personnalisées */}
            {currentTemplate && currentTemplate.variables.length > 0 && (
              <div className="space-y-3">
                <Label className="text-gray-900 dark:text-gray-100">Variables personnalisées</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {currentTemplate.variables
                    .filter(variable => !['firstName', 'unsubscribeUrl', 'subject', 'content'].includes(variable))
                    .map(variable => (
                      <div key={variable} className="space-y-1">
                        <Label className="text-xs font-medium text-gray-900 dark:text-gray-100">{variable}</Label>
                        <Input
                          value={customVariables[variable] || ''}
                          onChange={(e) => handleVariableChange(variable, e.target.value)}
                          placeholder={variable}
                          className="text-sm text-gray-900 dark:text-white bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                        />
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* Sélection des destinataires */}
            {recipients.length > 0 && (
              <div className="space-y-3">
                <Label className="text-gray-900 dark:text-gray-100">Destinataires</Label>
                <div className="max-h-40 overflow-y-auto border rounded-md p-3 space-y-2 bg-white dark:bg-gray-800">
                  {recipients.map((recipient) => (
                    <label key={recipient.id} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedRecipients.includes(recipient.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedRecipients(prev => [...prev, recipient.id]);
                          } else {
                            setSelectedRecipients(prev => prev.filter(id => id !== recipient.id));
                          }
                        }}
                        className="rounded"
                      />
                      <span className="text-sm text-gray-900 dark:text-white">
                        {recipient.firstName} {recipient.lastName} ({recipient.email})
                      </span>
                    </label>
                  ))}
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{selectedRecipients.length} sélectionné(s)</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedRecipients(recipients.map(r => r.id))}
                  >
                    Tout sélectionner
                  </Button>
                </div>
              </div>
            )}

            {/* Boutons d'action */}
            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowPreview(!showPreview)}
                className="flex items-center gap-2"
              >
                {showPreview ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                {showPreview ? 'Masquer' : 'Prévisualiser'}
              </Button>
              
              <Button
                onClick={handleSend}
                disabled={!selectedTemplate || !subject.trim() || sending || selectedRecipients.length === 0}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
              >
                {sending ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Envoyer
                  </>
                )}
              </Button>
            </div>
            
            {/* Debug info */}
            <div className="text-xs text-gray-500 mt-2">
              Template: {selectedTemplate ? 'Sélectionné' : 'Non sélectionné'} | 
              Sujet: {subject.trim() ? 'Rempli' : 'Vide'} | 
              Destinataires: {selectedRecipients.length} | 
              Loading: {loading ? 'Oui' : 'Non'}
            </div>

            {/* Messages de statut */}
            {sendStatus.type && (
              <div className={`mt-4 p-3 rounded-md ${
                sendStatus.type === 'success' 
                  ? 'bg-green-50 border border-green-200 text-green-800' 
                  : 'bg-red-50 border border-red-200 text-red-800'
              }`}>
                <div className="flex items-center gap-2">
                  {sendStatus.type === 'success' ? (
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  ) : (
                    <XCircle className="h-4 w-4 text-red-600" />
                  )}
                  <span className="font-medium">
                    {sendStatus.type === 'success' ? 'Succès' : 'Erreur'}
                  </span>
                </div>
                <p className="mt-1 text-sm">{sendStatus.message}</p>
                {sendStatus.details && (
                  <details className="mt-2">
                    <summary className="cursor-pointer text-xs">Détails</summary>
                    <pre className="mt-1 text-xs bg-white/50 p-2 rounded overflow-auto">
                      {JSON.stringify(sendStatus.details, null, 2)}
                    </pre>
                  </details>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Prévisualisation - Toujours affichée si un template est sélectionné */}
        {selectedTemplate && previewHtml && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  Prévisualisation
                </span>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setPreviewMode('desktop')}
                    className={previewMode === 'desktop' ? 'bg-blue-100' : ''}
                  >
                    <Monitor className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setPreviewMode('mobile')}
                    className={previewMode === 'mobile' ? 'bg-blue-100' : ''}
                >
                    <Smartphone className="h-4 w-4" />
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Sujet prévisualisé */}
              <div className="p-3 bg-gray-50 rounded-md">
                <Label className="text-xs font-medium text-gray-600">Sujet</Label>
                <div className="font-medium text-gray-900">{previewSubject}</div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={copyToClipboard}
                  className="flex items-center gap-2"
                >
                  {copied ? <CheckCircle className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                  {copied ? 'Copié !' : 'Copier HTML'}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={downloadHTML}
                  className="flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Télécharger
                </Button>
              </div>

              {/* Prévisualisation HTML */}
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 border-b">
                  Aperçu {previewMode === 'mobile' ? 'Mobile' : 'Desktop'}
                </div>
                <div 
                  className={`bg-white p-4 ${previewMode === 'mobile' ? 'max-w-sm mx-auto' : ''}`}
                  style={{ 
                    maxHeight: '600px', 
                    overflow: 'auto',
                    transform: previewMode === 'mobile' ? 'scale(0.8)' : 'scale(1)',
                    transformOrigin: 'top center'
                  }}
                  dangerouslySetInnerHTML={{ __html: previewHtml }}
                />
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Informations sur le template */}
      {currentTemplate && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Informations sur le template
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Description</h4>
                <p className="text-sm text-muted-foreground">{currentTemplate.description}</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Variables disponibles</h4>
                <div className="flex flex-wrap gap-2">
                  {currentTemplate.variables.map(variable => (
                    <Badge key={variable} variant="secondary" className="text-xs">
                      {variable}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Alertes */}
      {!selectedTemplate && (
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Veuillez sélectionner un template pour commencer à éditer votre email.
          </AlertDescription>
        </Alert>
      )}

      {selectedTemplate && selectedRecipients.length === 0 && (
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Veuillez sélectionner au moins un destinataire pour envoyer l'email.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
} 