'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Bell } from 'lucide-react';

export function NotificationCenter() {
  const [notifications] = useState([
    {
      id: 1,
      message: 'Nouveau commentaire en attente de modération',
      type: 'comment',
      read: false
    },
    {
      id: 2,
      message: 'Nouvel utilisateur inscrit',
      type: 'user',
      read: false
    }
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        className="relative"
        onClick={() => {/* Ouvrir le panneau de notifications */}}
      >
        <Bell className="h-5 w-5" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </Button>
    </div>
  );
} 