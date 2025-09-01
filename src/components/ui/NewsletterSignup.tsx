'use client';

import { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Veuillez entrer une adresse email valide');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Inscription réussie ! Vous recevrez nos actualités.');
        setEmail('');
      } else {
        const data = await response.json();
        setStatus('error');
        setMessage(data.error || 'Erreur lors de l\'inscription');
      }
    } catch (error) {
      console.error('Erreur lors de l\'inscription à la newsletter:', error);
      setStatus('error');
      setMessage('Erreur de connexion. Veuillez réessayer.');
    }
  };

  return (
    <div className="text-center md:text-left">
      <h3 className="text-sm font-semibold text-muted-foreground mb-6 uppercase tracking-wider">
        Newsletter
      </h3>
      
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          Restez informé de nos actualités, conseils et offres spéciales en chauffage et climatisation.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="email"
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 pr-4 py-2 text-sm"
              disabled={status === 'loading'}
            />
          </div>
          
          <Button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm py-2"
          >
            {status === 'loading' ? 'Inscription...' : 'S\'inscrire'}
          </Button>
        </form>

        {/* Messages de statut */}
        {status === 'success' && (
          <div className="flex items-center justify-center md:justify-start space-x-2 text-sm text-green-600">
            <CheckCircle className="w-4 h-4" />
            <span>{message}</span>
          </div>
        )}
        
        {status === 'error' && (
          <div className="flex items-center justify-center md:justify-start space-x-2 text-sm text-red-600">
            <AlertCircle className="w-4 h-4" />
            <span>{message}</span>
          </div>
        )}

        <p className="text-xs text-muted-foreground leading-relaxed">
          Nous respectons votre vie privée. Désinscription possible à tout moment.
        </p>
      </div>
    </div>
  );
} 