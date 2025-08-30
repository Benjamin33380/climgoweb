'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error'>('success');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      // Vérifier si l'email existe déjà
      const { data: existingSubscriber } = await supabase
        .from('newsletter_subscribers')
        .select('id')
        .eq('email', email)
        .single();

      if (existingSubscriber) {
        setMessage('Cet email est déjà inscrit à la newsletter !');
        setMessageType('error');
        return;
      }

      // Ajouter l'email à la newsletter
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([
          {
            email,
            preferences: { general: true, articles: true, offers: true },
            subscribed_at: new Date().toISOString()
          }
        ]);

      if (error) {
        throw error;
      }

      setMessage('Inscription réussie ! Vous recevrez nos newsletters.');
      setMessageType('success');
      setEmail('');
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Erreur lors de l\'inscription';
      setMessage(errorMessage);
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          type="email"
          placeholder="Votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-3 py-2 text-xs border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          required
          disabled={loading}
        />
        <button
          type="submit"
          className="px-3 py-2 text-xs rounded-md transition-colors flex items-center justify-center disabled:opacity-50 bg-background text-foreground border border-border hover:bg-accent hover:text-accent-foreground"
          aria-label="S'inscrire à la newsletter"
          disabled={loading}
        >
          {loading ? 'Inscription...' : 'S\'inscrire'}
          <Send className="w-3 h-3 ml-2" />
        </button>
      </form>
      
      {message && (
        <div className={`mt-2 text-xs ${messageType === 'success' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
          {message}
        </div>
      )}
    </div>
  );
}
