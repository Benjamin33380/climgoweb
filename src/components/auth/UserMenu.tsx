'use client';

import { useState } from 'react';
import { useUser } from '@/components/providers/UserProvider';
import { Button } from '@/components/ui/button';
import { User, Settings, LogOut, Shield } from 'lucide-react';

export function UserMenu() {
  const { user, logout } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  if (!user) {
    return (
      <Button variant="ghost" size="icon" asChild>
        <a href="/auth" className="h-8 w-8 rounded-full p-0">
          <User className="h-4 w-4" />
        </a>
      </Button>
    );
  }

  const handleLogout = async () => {
    await logout();
    setIsOpen(false);
  };

  const getInitials = () => {
    if (user.firstName && user.lastName) {
      return `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();
    }
    return user.email[0].toUpperCase();
  };

  const getDisplayName = () => {
    if (user.firstName && user.lastName) {
      return `${user.firstName} ${user.lastName}`;
    }
    return user.email;
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className="relative h-8 w-8 rounded-full p-0"
      >
        <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
          {getInitials()}
        </div>
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-lg z-50">
          <div className="p-4 border-b border-border">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{getDisplayName()}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {user.email}
              </p>
              <div className="flex items-center space-x-1 mt-1">
                {user.role === 'ADMIN' && (
                  <Shield className="h-3 w-3 text-yellow-600" />
                )}
                <span className="text-xs text-muted-foreground capitalize">
                  {user.role.toLowerCase()}
                </span>
              </div>
            </div>
          </div>

          <div className="py-2">
            <a
              href="/profile"
              className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-accent transition-colors cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <User className="w-4 h-4" />
              <span>Profil</span>
            </a>

            {user.role === 'ADMIN' && (
              <a
                href="/admin"
                className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-accent transition-colors cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <Shield className="w-4 h-4" />
                <span>Administration</span>
              </a>
            )}

            <a
              href="/profile/preferences"
              className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-accent transition-colors cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <Settings className="w-4 h-4" />
              <span>Préférences</span>
            </a>
          </div>

          <div className="border-t border-border py-2">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-accent transition-colors w-full text-left text-red-600 hover:text-red-700 cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              <span>Déconnexion</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
