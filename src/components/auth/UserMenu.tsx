'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { User, Settings, LogOut, UserCircle, Mail, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabase';

interface UserMenuProps {
  user?: {
    id: string;
    email: string;
    username?: string;
    avatar_url?: string;
    is_admin?: boolean;
  } | null;
  onLogout: () => void;
}

export function UserMenu({ user, onLogout }: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    onLogout();
    setIsOpen(false);
  };

  if (!user) {
    return (
      <Link
        href="/auth"
        className="flex items-center justify-center w-10 h-10 rounded-md border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
        title="Connexion / Inscription"
      >
        <User className="w-5 h-5" />
      </Link>
    );
  }

  return (
    <div className="relative" ref={menuRef}>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-md border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
        title={`Connecté en tant que ${user.username || user.email}`}
      >
        {user.avatar_url ? (
          <img
            src={user.avatar_url}
            alt="Avatar"
            className="w-6 h-6 rounded-full object-cover"
          />
        ) : (
          <UserCircle className="w-5 h-5" />
        )}
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg z-50">
          <div className="p-4 border-b border-border">
            <div className="flex items-center gap-3">
              {user.avatar_url ? (
                <img
                  src={user.avatar_url}
                  alt="Avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <UserCircle className="w-10 h-10 text-muted-foreground" />
              )}
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate">
                  {user.username || 'Utilisateur'}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {user.email}
                </p>
              </div>
            </div>
          </div>

          <div className="py-2">
            <Link
              href="/profile"
              className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Settings className="w-4 h-4" />
              Mon profil
            </Link>

            <Link
              href="/profile/preferences"
              className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Mail className="w-4 h-4" />
              Préférences
            </Link>

            {user.is_admin && (
              <Link
                href="/admin"
                className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-accent transition-colors text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                <Shield className="w-4 h-4" />
                Administration
              </Link>
            )}
          </div>

          <div className="border-t border-border py-2">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-accent transition-colors w-full text-left text-red-600 hover:text-red-700"
            >
              <LogOut className="w-4 h-4" />
              Se déconnecter
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
