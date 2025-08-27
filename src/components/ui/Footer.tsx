import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Wrench, Droplet, FileText, Star, Github, Twitter, AirVent, BadgeEuro } from 'lucide-react';

const services = [
  { title: "Chauffage", href: "/chauffage", icon: <Wrench className="w-4 h-4" /> },
  { title: "Climatisation", href: "/climatisation", icon: <AirVent className="w-4 h-4" /> },
  { title: "Eau chaude sanitaire", href: "/eau-chaude-sanitaire", icon: <Droplet className="w-4 h-4" /> },
  { title: "Maintenance", href: "/maintenance", icon: <FileText className="w-4 h-4" /> },
];

const entreprise = [
  { title: "À propos", href: "/a-propos" },
  { title: "Politique de confidentialité", href: "/politique-confidentialite" },
  { title: "Mentions légales", href: "/mentions-legales" },
];

export default function Footer() {
  return (
    <footer className="border-t bg-white dark:bg-black backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section principale */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* À propos de ClimGO */}
            <div className="lg:col-span-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-6">
                <Image
                  src="/favicon/logo.png"
                  alt="ClimGO Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="font-bold text-xl">ClimGO</span>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Spécialiste en climatisation, chauffage et maintenance depuis plus de 10 ans. Notre expertise au service de votre confort en Gironde et dans le Nord des Landes.
              </p>
              
              <div className="mb-6">
                <Link 
                  href="/a-propos" 
                  className="text-sm text-[#FF8C00] hover:text-[#FFA500] transition-colors font-medium"
                >
                  En savoir plus sur ClimGO
                </Link>
              </div>
              
              {/* Note et avis */}
              <div className="text-center md:text-left mb-6">
                <div className="flex justify-center md:justify-start items-center space-x-2 mb-2">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <span className="font-semibold text-sm">5/5</span>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-muted-foreground text-xs">(22 avis Google)</div>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div className="flex justify-center md:justify-start space-x-3">
                <a 
                  href="#" 
                  className="flex items-center justify-center w-10 h-10 rounded-md border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="flex items-center justify-center w-10 h-10 rounded-md border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="flex items-center justify-center w-10 h-10 rounded-md border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="flex items-center justify-center w-10 h-10 rounded-md border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="flex items-center justify-center w-10 h-10 rounded-md border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a 
                  href="https://vercel.com" 
                  className="flex items-center justify-center w-10 h-10 rounded-md border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label="Vercel"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L24 22H0L12 2Z"/>
                  </svg>
                </a>
              </div>
              
              {/* Lien Oxelya */}
              <div className="mt-4">
                <a 
                  href="https://www.oxelya.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  www.oxelya.com
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="text-center md:text-left">
              <h3 className="text-sm font-semibold text-muted-foreground mb-6 uppercase tracking-wider">
                Nos Services
              </h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.title}>
                    <Link 
                      href={service.href} 
                      className="flex items-center justify-center md:justify-start space-x-3 text-sm hover:text-primary transition-colors"
                    >
                      {service.icon}
                      <span>{service.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="text-center md:text-left">
              <h3 className="text-sm font-semibold text-muted-foreground mb-6 uppercase tracking-wider">
                Contact
              </h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="tel:0766460008" 
                    className="flex items-center justify-center md:justify-start space-x-3 text-sm hover:text-primary transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>07 66 46 00 08</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:contact@climgo.fr" 
                    className="flex items-center justify-center md:justify-start space-x-3 text-sm hover:text-primary transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>contact@climgo.fr</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-center justify-center md:justify-start space-x-3 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>Gironde - Landes</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-center md:justify-start space-x-3 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>Lun-Ven: 8h-18h</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Navigation */}
            <div className="text-center md:text-left">
              <h3 className="text-sm font-semibold text-muted-foreground mb-6 uppercase tracking-wider">
                Navigation
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="flex items-center justify-center md:justify-start space-x-3 text-sm hover:text-primary transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9,22 9,12 15,12 15,22" />
                    </svg>
                    <span>Accueil</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="flex items-center justify-center md:justify-start space-x-3 text-sm hover:text-primary transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                    <span>Nos services</span>
                  </Link>
                </li>

                <li>
                  <Link href="/blog" className="flex items-center justify-center md:justify-start space-x-3 text-sm hover:text-primary transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14,2 14,8 20,8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10,9 9,9 8,9" />
                    </svg>
                    <span>Blog</span>
                  </Link>
                </li>

                <li>
                  <Link href="/contact" className="flex items-center justify-center md:justify-start space-x-3 text-sm hover:text-primary transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <span>Contact</span>
                  </Link>
                </li>
                <li>
                  <Link href="/zones-interventions" className="flex items-center justify-center md:justify-start space-x-3 text-sm hover:text-primary transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>Zones d'intervention</span>
                  </Link>
                </li>
                <li>
                  <Link href="/aides-etat" className="flex items-center justify-center md:justify-start space-x-3 text-sm hover:text-primary transition-colors">
                    <BadgeEuro className="w-4 h-4" />
                    <span>Aides & Subventions</span>
                  </Link>
                </li>
                <li className="text-center md:text-left">
                  <Link 
                    href="/contact" 
                    className="inline-flex bg-white/20 dark:bg-white/10 backdrop-blur-md border border-black/40 dark:border-white/30 text-black dark:text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-300"
                  >
                    Devis gratuit
                  </Link>
                </li>
              </ul>
              

              

            </div>

          </div>
        </div>





        {/* Section inférieure */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left text-muted-foreground text-sm">
              © 2025 <span className="font-semibold">ClimGO</span>. Tous droits réservés. • Spécialiste climatisation, chauffage et pompes à chaleur.
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
              {entreprise.slice(1, 4).map((item) => (
                <Link 
                  key={item.title}
                  href={item.href} 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}