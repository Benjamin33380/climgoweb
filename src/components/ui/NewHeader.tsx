"use client"
import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Flame, Droplet, Settings, FileText, Menu, Mail, MessageSquare, AirVent, Building, BadgeEuro } from "lucide-react"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { Button } from "@/components/ui/button"
import dynamic from 'next/dynamic'

// Import dynamique du logo 3D pour optimiser le chargement
const LogoWithFallback = dynamic(() => import("@/components/ui/Logo3D").then(mod => ({ default: mod.LogoWithFallback })), {
  ssr: false,
  loading: () => null
})
import { UserMenu } from "@/components/auth/UserMenu"
import { useUser } from "@/components/providers/UserProvider"
import { useState, useEffect } from "react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const servicesLeft: { title: string; href: string; description: string; icon: React.ReactNode }[] = [
  {
    title: "Climatisation",
    href: "/climatisation", 
    icon: <AirVent className="w-4 h-4" />,
    description: "Solutions de climatisation adaptées à vos besoins pour un confort optimal.",
  },
  {
    title: "Chauffage",
    href: "/chauffage",
    icon: <Flame className="w-4 h-4" />,
    description: "Installation et maintenance de systèmes de chauffage performants et économiques.",
  },
  {
    title: "Eau chaude sanitaire",
    href: "/eau-chaude-sanitaire",
    icon: <Droplet className="w-4 h-4" />,
    description: "Systèmes d'eau chaude sanitaire efficaces et durables.",
  },
]

const servicesRight: { title: string; href: string; description: string; icon: React.ReactNode }[] = [
  {
    title: "Pompe à chaleur",
    href: "/pompe-a-chaleur",
    icon: <Settings className="w-4 h-4" />,
    description: "Pompes à chaleur air-air et air-eau pour chauffage et eau chaude sanitaire.",
  },
]

const entreprise: { title: string; href: string; description: string; icon: React.ReactNode }[] = [
  {
    title: "À propos",
    href: "/a-propos",
    description: "Découvrez ClimGO : notre histoire, nos valeurs et notre expertise.",
    icon: <Building className="w-4 h-4" />,
  },
  {
    title: "Aides & Subventions",
    href: "/aides-etat",
    description: "Découvrez les aides financières disponibles pour vos projets de rénovation énergétique.",
    icon: <BadgeEuro className="w-4 h-4" />,
  },
]

export default function NewHeader() {
  const { user } = useUser();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [, setUserPoints] = useState<number | null>(null);

  // Récupérer les points de l'utilisateur depuis la base de données
  useEffect(() => {
    if (user?.id) {
      fetchUserPoints();
    }
  }, [user?.id]);

  const fetchUserPoints = async () => {
    try {
      const response = await fetch(`/api/user/points`);
      if (response.ok) {
        const data = await response.json();
        setUserPoints(data.points);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des points:', error);
    }
  };
  const [isServicesHovered, setIsServicesHovered] = useState(false)
  const [isContactHovered, setIsContactHovered] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gray-50 dark:bg-background/40 backdrop-blur supports-[backdrop-filter]:bg-gray-50 dark:supports-[backdrop-filter]:bg-background/20">
      <div className="w-full flex h-16 items-center justify-between px-8 sm:px-12 lg:px-16">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/favicon/logo.png"
            alt="ClimGO Logo"
            width={32}
            height={32}
            className="w-8 h-8 sm:w-9 sm:h-9"
          />
          <span className="font-bold text-xl sm:text-2xl">ClimGO</span>
        </Link>

        {/* Navigation centrée */}
        <div className="hidden lg:flex flex-1 justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Nos Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[600px] lg:w-[800px] grid-cols-2">
                    {/* Colonne gauche */}
                    <div>
                      {servicesLeft.map((service) => (
                        <ListItem key={service.title} href={service.href} title={service.title} icon={service.icon}>
                          {service.description}
                        </ListItem>
                      ))}
                    </div>
                    {/* Colonne droite */}
                    <div>
                      {servicesRight.map((service) => (
                        <ListItem key={service.title} href={service.href} title={service.title} icon={service.icon}>
                          {service.description}
                        </ListItem>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Notre entreprise</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {entreprise.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                        icon={item.icon}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/blog" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Blog
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid lg:w-[600px] gap-3 p-6">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-center rounded-md bg-white dark:bg-background p-6 no-underline outline-none focus:shadow-md group"
                          href="/contact"
                          onMouseEnter={() => setIsContactHovered(true)}
                          onMouseLeave={() => setIsContactHovered(false)}
                        >
                          <div className="flex justify-center items-center mb-4">
                            <LogoWithFallback
                              glbUrl="/favicon/logo.glb"
                              isHovered={isContactHovered}
                              className="w-16 h-16 transition-all duration-300"
                            />
                          </div>
                          <div className="text-center">
                            <div className="mb-2 text-lg font-medium">
                              Contactez ClimGO
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Parlons de votre projet. Devis gratuit sous 48h.
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem 
                      href="/contact" 
                      title="Formulaire de contact"
                      icon={<MessageSquare className="w-4 h-4" />}
                    >
                      Remplissez notre formulaire pour une réponse personnalisée sous 48h.
                    </ListItem>
                    <ListItem 
                      href="tel:0766460008" 
                      title="Appel direct"
                      icon={<Phone className="w-4 h-4" />}
                    >
                      07 66 46 00 08 - Disponible du lundi au vendredi de 8h à 18h.
                    </ListItem>
                    <ListItem 
                      href="mailto:contact@climgo.fr" 
                      title="Email professionnel"
                      icon={<Mail className="w-4 h-4" />}
                    >
                      contact@climgo.fr - Réponse garantie sous 24h.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Contact et CTA */}
        <div className="flex items-center space-x-4">
          <Link
            href="tel:0766460008" 
            className="hidden lg:flex items-center space-x-2 text-sm font-medium hover:text-primary"
          >
            <Phone className="w-4 h-4" />
            <span>07 66 46 00 08</span>
          </Link>
          
          {/* Bouton Devis gratuit */}
          <Link
            href="/contact"
            className="px-4 py-2 bg-background text-foreground border border-border rounded-md hover:bg-accent hover:text-accent-foreground transition-colors font-medium"
          >
            Devis gratuit
          </Link>

          {/* Affichage des points utilisateur - MASQUÉ */}
          {/* {user && userPoints !== null && (
            <div className="flex items-center gap-2">
              <UserPoints points={userPoints} size="sm" showLabel={false} />
            </div>
          )} */}

          {/* Menu utilisateur */}
          <UserMenu />

          <ModeToggle />

          {/* Menu mobile */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>

      {/* Menu mobile déroulant */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t bg-gray-50 dark:bg-background/40 backdrop-blur max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="w-full px-8 py-4 space-y-4 pb-6">
            {/* Services */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Nos Services</h3>
              {servicesLeft.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="flex items-center space-x-3 p-3 rounded-md hover:bg-accent transition-colors min-h-[48px]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {service.icon}
                  <div>
                    <span className="font-medium text-base">{service.title}</span>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{service.description}</p>
                  </div>
                </Link>
              ))}
              {servicesRight.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="flex items-center space-x-3 p-3 rounded-md hover:bg-accent transition-colors min-h-[48px]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {service.icon}
                  <div>
                    <span className="font-medium text-base">{service.title}</span>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{service.description}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Notre entreprise */}
            <div className="space-y-2 pt-4 border-t">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Notre entreprise</h3>
              {entreprise.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block p-3 rounded-md hover:bg-accent transition-colors min-h-[48px] flex items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div>
                    <span className="font-medium text-base">{item.title}</span>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Blog */}
            <div className="space-y-2 pt-4 border-t">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Blog</h3>
              <Link
                href="/blog"
                className="block p-3 rounded-md hover:bg-accent transition-colors min-h-[48px] flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="font-medium text-base">Tous les articles</span>
              </Link>
            </div>

            {/* Contact */}
            <div className="space-y-2 pt-4 border-t">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Contact</h3>
              <Link
                href="/contact"
                className="block p-3 rounded-md hover:bg-accent transition-colors min-h-[48px] flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="font-medium text-base">Nous contacter</span>
              </Link>
            </div>

            <div className="pt-4 border-t">
              <Link
                href="/contact"
                className="w-full bg-accent text-accent-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-accent/80 transition-colors inline-flex justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Devis gratuit
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

function ListItem({
  title,
  children,
  href,
  icon,
  ...props
}: React.ComponentPropsWithoutRef<"div"> & { 
  href: string
  icon?: React.ReactNode
}) {
  return (
    <div {...props}>
      <NavigationMenuLink asChild>
        <Link 
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="flex items-center gap-2 text-sm font-medium leading-none">
            {icon}
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </div>
  )
}


