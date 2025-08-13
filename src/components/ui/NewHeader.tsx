"use client"
import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Wrench, Wind, Droplet, Settings, FileText, Menu, Mail, MessageSquare } from "lucide-react"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { Button } from "@/components/ui/button"
import { LogoWithFallback } from "@/components/ui/Logo3D"
import { useState } from "react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const services: { title: string; href: string; description: string; icon: React.ReactNode }[] = [
  {
    title: "Chauffage",
    href: "/chauffage",
    icon: <Wrench className="w-4 h-4" />,
    description: "Installation et maintenance de systèmes de chauffage performants et économiques.",
  },
  {
    title: "Climatisation",
    href: "/climatisation", 
    icon: <Wind className="w-4 h-4" />,
    description: "Solutions de climatisation adaptées à vos besoins pour un confort optimal.",
  },
  {
    title: "Eau chaude sanitaire",
    href: "/eau-chaude-sanitaire",
    icon: <Droplet className="w-4 h-4" />,
    description: "Systèmes d'eau chaude sanitaire efficaces et durables.",
  },
  {
    title: "Pompe à chaleur",
    href: "/services",
    icon: <Settings className="w-4 h-4" />,
    description: "Pompes à chaleur air-air et air-eau pour chauffage et eau chaude sanitaire.",
  },
  {
    title: "Maintenance",
    href: "/maintenance",
    icon: <FileText className="w-4 h-4" />,
    description: "Entretien professionnel de vos équipements pour garantir leur longévité.",
  },
]

const zones: { title: string; href: string; description: string }[] = [
  {
    title: "Gironde",
    href: "/zones-interventions",
    description: "Installation et maintenance dans toute la Gironde et ses communes.",
  },
  {
    title: "Landes",
    href: "/zones-interventions",
    description: "Service dans tout le département des Landes.",
  },
]

const entreprise: { title: string; href: string; description: string }[] = [
  {
    title: "À propos",
    href: "/a-propos",
    description: "Découvrez notre histoire, nos valeurs et notre expertise.",
  },
  {
    title: "Politique de confidentialité",
    href: "/politique-confidentialite",
    description: "Comment nous protégeons et utilisons vos données personnelles.",
  },
  {
    title: "Certifications",
    href: "/certifications",
    description: "Nos certifications et agréments professionnels.",
  },
  {
    title: "Mentions légales",
    href: "/mentions-legales",
    description: "Informations légales et réglementaires de l'entreprise.",
  },
  {
    title: "Aides d'État",
    href: "/aides-etat",
    description: "Informations sur les subventions et aides financières disponibles.",
  },
  {
    title: "CGV",
    href: "/cgv",
    description: "Conditions générales de vente et modalités de service.",
  },
]

export function NewHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesHovered, setIsServicesHovered] = useState(false)
  const [isContactHovered, setIsContactHovered] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/favicon/logo.png"
            alt="ClimGO Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span className="font-bold text-xl">ClimGO</span>
        </Link>

        {/* Navigation centrée */}
        <div className="hidden lg:flex flex-1 justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Nos Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md group"
                        href="/services"
                        onMouseEnter={() => setIsServicesHovered(true)}
                        onMouseLeave={() => setIsServicesHovered(false)}
                      >
                        <div className="flex justify-center items-center mb-5 flex-grow">
                          <LogoWithFallback
                            glbUrl="/favicon/logo.glb"
                            fallbackPngUrl="/favicon/logo.png"
                            isHovered={isServicesHovered}
                            className="transition-all duration-300"
                          />
                        </div>
                        <div className="text-center">
                          <div className="mb-2 text-lg font-medium">
                            ClimGO Services
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Votre expert en chauffage, climatisation et pompe à chaleur en Gironde.
                          </p>
                        </div>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  {services.map((service) => (
                    <ListItem key={service.title} href={service.href} title={service.title} icon={service.icon}>
                      {service.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Zones d'intervention</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-3 p-4">
                  {zones.map((zone) => (
                    <ListItem
                      key={zone.title}
                      title={zone.title}
                      href={zone.href}
                    >
                      {zone.description}
                    </ListItem>
                  ))}
                </ul>
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
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Blog</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem
                    href="/blog"
                    title="Tous les articles"
                  >
                    Découvrez nos conseils d'experts en chauffage et climatisation
                  </ListItem>
                  <ListItem
                    href="/blog?category=chauffage"
                    title="Chauffage"
                  >
                    Conseils et guides pour vos systèmes de chauffage
                  </ListItem>
                  <ListItem
                    href="/blog?category=climatisation"
                    title="Climatisation"
                  >
                    Tout savoir sur la climatisation et la pompe à chaleur
                  </ListItem>
                  <ListItem
                    href="/blog?category=maintenance"
                    title="Maintenance"
                  >
                    Entretien et dépannage de vos équipements
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-6">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md group"
                        href="/contact"
                        onMouseEnter={() => setIsContactHovered(true)}
                        onMouseLeave={() => setIsContactHovered(false)}
                      >
                        <div className="flex justify-center items-center mb-4">
                          <LogoWithFallback
                            glbUrl="/favicon/logo.glb"
                            fallbackPngUrl="/favicon/logo.png"
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
                      </a>
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
          <a 
            href="tel:0766460008" 
            className="hidden md:flex items-center space-x-2 text-sm font-medium hover:text-primary"
          >
            <Phone className="w-4 h-4" />
            <span>07 66 46 00 08</span>
          </a>
          
          <Link 
            href="/contact" 
            className="hidden sm:inline-flex bg-white/20 dark:bg-white/10 backdrop-blur-md border border-black/40 dark:border-white/30 text-black dark:text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-300"
          >
            Devis gratuit
          </Link>

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
        <div className="lg:hidden border-t bg-background/95 backdrop-blur">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {/* Services */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-muted-foreground">Nos Services</h3>
              {services.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="flex items-center space-x-3 p-2 rounded-md hover:bg-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {service.icon}
                  <span className="font-medium">{service.title}</span>
                </Link>
              ))}
            </div>
            
            {/* Zones d'intervention */}
            <div className="space-y-2 pt-4 border-t">
              <h3 className="text-sm font-semibold text-muted-foreground">Zones d'intervention</h3>
              {zones.map((zone) => (
                <Link
                  key={zone.title}
                  href={zone.href}
                  className="block p-2 rounded-md hover:bg-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="font-medium">{zone.title}</span>
                </Link>
              ))}
            </div>

            {/* Notre entreprise */}
            <div className="space-y-2 pt-4 border-t">
              <h3 className="text-sm font-semibold text-muted-foreground">Notre entreprise</h3>
              {entreprise.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block p-2 rounded-md hover:bg-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="font-medium">{item.title}</span>
                </Link>
              ))}
            </div>

            {/* Blog */}
            <div className="space-y-2 pt-4 border-t">
              <h3 className="text-sm font-semibold text-muted-foreground">Blog</h3>
              <Link
                href="/blog"
                className="block p-2 rounded-md hover:bg-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="font-medium">Tous les articles</span>
              </Link>
              <Link
                href="/blog?category=chauffage"
                className="block p-2 rounded-md hover:bg-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="font-medium">Chauffage</span>
              </Link>
              <Link
                href="/blog?category=climatisation"
                className="block p-2 rounded-md hover:bg-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="font-medium">Climatisation</span>
              </Link>
            </div>

            {/* Contact */}
            <div className="space-y-2 pt-4 border-t">
              <Link
                href="/contact"
                className="block p-2 rounded-md hover:bg-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="font-medium text-lg">Contact</span>
              </Link>
            </div>

            <div className="pt-4 border-t">
              <Link
                href="/contact"
                className="w-full bg-white/20 dark:bg-white/10 backdrop-blur-md border border-black/40 dark:border-white/30 text-black dark:text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-300 inline-flex justify-center"
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
}: React.ComponentPropsWithoutRef<"li"> & { 
  href: string
  icon?: React.ReactNode
}) {
  return (
    <li {...props}>
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
    </li>
  )
}
