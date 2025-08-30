'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LogoWithFallback } from '@/components/ui/Logo3D';
import { UserMenu } from '@/components/auth/UserMenu';
import { useUser } from '@/hooks/useUser';
import { ModeToggle } from '@/components/ui/mode-toggle';

const services = [
  { title: "Chauffage", href: "/chauffage" },
  { title: "Climatisation", href: "/climatisation" },
  { title: "Eau chaude sanitaire", href: "/eau-chaude-sanitaire" },
  { title: "Maintenance", href: "/maintenance" },
];

export default function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useUser();

  return (
    <>
      {/* Header Mobile */}
      <header className="lg:hidden sticky top-0 z-50 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <LogoWithFallback fallbackPngUrl="/favicon/logo.png" isHovered={false} />
            <div className="flex flex-col">
              <span className="font-bold text-lg text-gray-900 dark:text-white">ClimGO</span>
              <span className="text-xs text-gray-600 dark:text-gray-400">Devis gratuit</span>
            </div>
          </Link>

          {/* Actions Mobile */}
          <div className="flex items-center space-x-2">
            <UserMenu user={user} onLogout={logout} />
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 text-gray-700 dark:text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Menu Mobile Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)}>
          <div className="fixed right-0 top-16 h-full w-80 bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="p-6 space-y-6">
              {/* Navigation */}
              <nav className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Services</h3>
                {services.map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="block py-3 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.title}
                  </Link>
                ))}
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                  <Link
                    href="/zones-interventions"
                    className="block py-3 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Zones d'intervention
                  </Link>
                  <Link
                    href="/blog"
                    className="block py-3 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/contact"
                    className="block py-3 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
              </nav>

              {/* Actions */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Thème</span>
                  <ModeToggle />
                </div>
                
                {/* Contact rapide */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white">Contact rapide</h4>
                  <div className="flex space-x-2">
                    <Button size="sm" className="flex-1" asChild>
                      <Link href="tel:0556000000">
                        <Phone className="h-4 w-4 mr-2" />
                        Appeler
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1" asChild>
                      <Link href="/contact">
                        <Mail className="h-4 w-4 mr-2" />
                        Email
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
