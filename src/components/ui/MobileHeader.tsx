'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail, Flame, AirVent, Droplet, FileText, BookOpen, MapPin, Info, Cog, BadgeEuro } from 'lucide-react';
import { Button } from '@/components/ui/button';

import Image from 'next/image';
import { UserMenu } from '@/components/auth/UserMenu';
import { useUser } from '@/hooks/useUser';
import { ModeToggle } from '@/components/ui/mode-toggle';

const services = [
  { title: "Chauffage", href: "/chauffage", icon: <Flame className="w-5 h-5" /> },
  { title: "Climatisation", href: "/climatisation", icon: <AirVent className="w-5 h-5" /> },
  { title: "Eau chaude sanitaire", href: "/eau-chaude-sanitaire", icon: <Droplet className="w-5 h-5" /> },
  { title: "Maintenance", href: "/maintenance", icon: <FileText className="w-5 h-5" /> },
];

export default function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useUser();

  return (
    <>
      {/* Header Mobile */}
      <header className="lg:hidden sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/favicon/favicon.svg"
              alt="ClimGO Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="font-bold text-lg">ClimGO</span>
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
        <div className="lg:hidden fixed inset-0 z-40 bg-black/80 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}>
          <div className="fixed inset-0 top-16 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-2xl transform transition-transform duration-300 ease-in-out overflow-hidden">
            <div className="h-full overflow-y-auto p-6 space-y-6">
              {/* Navigation */}
              <nav className="space-y-4">
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                {services.map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="flex items-center py-3 px-4 hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors space-x-3"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex-shrink-0">
                      {service.icon}
                    </div>
                    <span>{service.title}</span>
                  </Link>
                ))}
                
                <div className="border-t pt-4 mt-4">
                  <Link
                    href="/zones-interventions"
                    className="flex items-center py-3 px-4 hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors space-x-3"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span>Zones d'intervention</span>
                  </Link>
                  <Link
                    href="/aides-etat"
                    className="flex items-center py-3 px-4 hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors space-x-3"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex-shrink-0">
                      <BadgeEuro className="w-5 h-5" />
                    </div>
                    <span>Aides et Subventions</span>
                  </Link>
                  <Link
                    href="/blog"
                    className="flex items-center py-3 px-4 hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors space-x-3"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex-shrink-0">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <span>Blog</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center py-3 px-4 hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors space-x-3"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span>Contact</span>
                  </Link>
                  <Link
                    href="/a-propos"
                    className="flex items-center py-3 px-4 hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors space-x-3"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex-shrink-0">
                      <Info className="w-5 h-5" />
                    </div>
                    <span>À Propos</span>
                  </Link>
                </div>
              </nav>

              {/* Actions */}
                              <div className="border-t pt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Thème</span>
                  <ModeToggle />
                </div>
                
                {/* Contact rapide */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium">Contact rapide</h4>
                  <div className="flex space-x-2">
                    <Button size="sm" className="flex-1 bg-foreground text-background hover:bg-foreground/90" asChild>
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
