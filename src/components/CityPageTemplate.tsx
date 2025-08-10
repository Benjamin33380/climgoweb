'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  CheckCircle, 
  Star, 
  DraftingCompass, 
  ChevronRight, 
  Home,
  Award,
  Wrench as ToolIcon,
  DollarSign,
  HelpCircle,
  Navigation,
  CircleDot,
  Clock,
  ExternalLink,
  ArrowDown,
  Shield
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

// Types pour les données de ville
export interface CityData {
  name: string;
  slug: string;
  region: string;
  backgroundImage: string;
  videoUrl?: string;
  description: {
    intro: string[];
    location: string[];
    interventions: string;
    whyChoose: string[];
    specificDetails: {
      environment: {
        title: string;
        content: string[];
      };
      examples: {
        title: string;
        content: string[];
      };
      expertise: {
        title: string;
        content: string[];
      };
      contact: {
        title: string;
        content: string;
      };
    };
  };
  faq: {
    question: string;
    answer: string;
  }[];
  backgroundImages: {
    interventions: string;
    whyChoose: string;
    faq: string;
  };
}

interface CityPageTemplateProps {
  cityData: CityData;
}

// Composant Hero Section - DESIGN PREMIUM LUXE 🔥
const HeroSection = ({ cityData }: { cityData: CityData }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Particules animées en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-spin opacity-50"></div>
        <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-ping opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 w-2.5 h-2.5 bg-gradient-to-r from-red-400 to-pink-400 rounded-full animate-pulse opacity-70"></div>
      </div>

      {/* Grille géométrique animée */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_50%,rgba(255,255,255,0.1)_50%),linear-gradient(0deg,transparent_50%,rgba(255,255,255,0.1)_50%)] bg-[length:50px_50px] animate-pulse"></div>
      </div>

      {/* Overlay avec effet glassmorphism */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        {/* Badge premium */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-900 px-6 py-3 rounded-full font-semibold text-sm mb-8 shadow-2xl shadow-amber-500/25"
        >
          <Star className="w-4 h-4 fill-current" />
          Expert Premium en Chauffage & Climatisation
          <Star className="w-4 h-4 fill-current" />
        </motion.div>

        {/* Titre principal avec effet premium */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight"
        >
          <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            Chauffage
          </span>
          <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
            & Climatisation
          </span>
          <span className="block text-3xl md:text-4xl lg:text-5xl font-bold text-amber-400 mt-4">
            {cityData.name}
          </span>
        </motion.h1>

        {/* Sous-titre avec effet glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-medium mb-4">
              Votre spécialiste premium sur <span className="text-amber-400 font-bold">{cityData.name}</span>
            </p>
            <p className="text-lg md:text-xl text-white/80 font-light">
              Installation • Dépannage • Maintenance
            </p>
          </div>
        </motion.div>

        {/* Boutons CTA premium */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          {/* Bouton principal */}
          <Button 
            size="lg" 
            className="group relative overflow-hidden bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-600 hover:via-yellow-600 hover:to-amber-700 text-slate-900 font-bold text-lg px-10 py-6 rounded-2xl shadow-2xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            asChild
          >
            <Link href="/contact">
              <span className="relative z-10 flex items-center gap-3">
                <Phone className="w-6 h-6" />
                Devis Gratuit Premium
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Link>
          </Button>

          {/* Bouton secondaire */}
          <Button 
            variant="outline" 
            size="lg" 
            className="group relative overflow-hidden border-2 border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:border-white/50 font-semibold text-lg px-10 py-6 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            asChild
          >
            <Link href="#services">
              <span className="relative z-10 flex items-center gap-3">
                <ArrowDown className="w-6 h-6 group-hover:animate-bounce" />
                Découvrir nos Services
              </span>
            </Link>
          </Button>
        </motion.div>

        {/* Indicateurs de confiance premium */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { icon: Shield, text: "Garantie Premium", value: "5 ans" },
            { icon: Clock, text: "Intervention", value: "24h" },
            { icon: Award, text: "Certification", value: "QualiPac" }
          ].map((item, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 group-hover:border-white/40 transition-all duration-300">
                <item.icon className="w-8 h-8 text-amber-400" />
              </div>
              <p className="text-white/70 text-sm font-medium mb-1">{item.text}</p>
              <p className="text-amber-400 text-xl font-bold">{item.value}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-amber-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

// Composant Breadcrumb (ShadcnUI)
const BreadcrumbNav = ({ cityData }: { cityData: CityData }) => (
  <div className="max-w-7xl mx-auto px-4 py-6">
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Accueil</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/zones-interventions">Zones desservies</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{cityData.name}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  </div>
);

// Composant Description Ville (style page d'accueil)
const VilleDescription = ({ cityData }: { cityData: CityData }) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const [maxScroll, setMaxScroll] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
        setScrollPosition(scrollTop);
        setMaxScroll(scrollHeight - clientHeight);
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      setMaxScroll(scrollElement.scrollHeight - scrollElement.clientHeight);
      
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const topShadowOpacity = Math.min(scrollPosition / 50, 1);
  const bottomShadowOpacity = Math.min((maxScroll - scrollPosition) / 50, 1);

  return (
    <section className="relative py-12 overflow-hidden bg-background">
      {/* Titre centré */}
      <div className="relative z-10 container mx-auto px-4 mb-4">
        <motion.h2 
          className="text-2xl md:text-3xl font-medium text-foreground text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {cityData.region}, Habitant de {cityData.name}
        </motion.h2>
      </div>
      
      {/* Container de scroll sur toute la largeur de la page */}
      <div className="relative w-full">
        {/* Gradient de flou du haut */}
        <div 
          className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none transition-opacity duration-300"
          style={{ opacity: topShadowOpacity }}
        />
        
        {/* Zone de scroll sur toute la largeur de la page */}
        <div 
          ref={scrollRef}
          className="w-full h-[400px] px-4 py-4 overflow-y-auto scrollbar-hide cursor-default"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {/* Contenu centré dans la zone élargie */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-center">
              {/* Paragraphes principaux */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {cityData.description.intro.map((paragraph, index) => (
                  <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </motion.div>

              {/* Section localisation spécifique */}
              <motion.div 
                className="my-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-4">Votre ville, notre expertise</h3>
                <div className="space-y-3">
                  {cityData.description.location.map((paragraph, index) => (
                    <p key={index} className="text-base text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>

              {/* Section engagements locaux */}
              <motion.div 
                className="my-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-4">Nos engagements à {cityData.name}</h3>
                <ul className="text-center text-base text-muted-foreground leading-relaxed space-y-2 max-w-xl mx-auto">
                  <li>✓ Intervention rapide sur tout le territoire</li>
                  <li>✓ Connaissance des spécificités locales</li>
                  <li>✓ Respect des réglementations communales</li>
                  <li>✓ Solutions adaptées au climat local</li>
                  <li>✓ SAV de proximité garanti</li>
                  <li>✓ Accompagnement personnalisé</li>
                </ul>
              </motion.div>

              {/* Phrase de conclusion */}
              <motion.p 
                className="text-lg text-foreground leading-relaxed font-medium mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Notre objectif : votre confort optimal à {cityData.name}, dans le respect de l'environnement et de votre budget.
              </motion.p>
            </div>
          </div>
        </div>
        
        {/* Gradient de flou du bas */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none transition-opacity duration-300"
          style={{ opacity: bottomShadowOpacity }}
        />
      </div>
      
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

// Composant Services Grid - DESIGN PREMIUM LUXE 🔥
const ServicesGrid = ({ cityData }: { cityData: CityData }) => {
  const services = [
    {
      icon: Home,
      title: `Types de logements desservis à ${cityData.name}`,
      description: `Nous intervenons aussi bien dans les maisons individuelles neuves que dans les bâtisses traditionnelles rénovées de ${cityData.name} et du ${cityData.region}. Notre expérience nous permet d'adapter nos solutions aux contraintes architecturales et énergétiques propres à chaque logement sur le Bassin d'Arcachon.`,
      variant: "dark" as const,
      gradient: "from-slate-900 via-slate-800 to-slate-900",
      accentColor: "from-blue-400 to-cyan-400",
      features: ["Maisons neuves", "Rénovations", "Bâtiments traditionnels"]
    },
    {
      icon: Award,
      title: `Processus d'installation à ${cityData.name}`,
      description: `Après une étude personnalisée de votre habitat à ${cityData.name}, nous vous proposons un devis gratuit et détaillé. Nos équipes assurent ensuite une installation soignée, en respectant les délais convenus et les normes en vigueur dans le ${cityData.region}.`,
      variant: "light" as const,
      gradient: "from-white via-gray-50 to-white",
      accentColor: "from-emerald-400 to-teal-400",
      features: ["Étude personnalisée", "Devis gratuit", "Installation soignée"]
    },
    {
      icon: ToolIcon,
      title: `Entretien & maintenance à ${cityData.name}`,
      description: `Pour garantir la performance et la durabilité de vos équipements de chauffage et climatisation à ${cityData.name}, nous proposons des contrats d'entretien personnalisés avec des visites régulières pour vérification, nettoyage et optimisation dans le ${cityData.region}.`,
      variant: "light" as const,
      gradient: "from-white via-gray-50 to-white",
      accentColor: "from-purple-400 to-pink-400",
      features: ["Contrats personnalisés", "Visites régulières", "Optimisation"]
    },
    {
      icon: DollarSign,
      title: `Aides financières à ${cityData.name}`,
      description: `Nous vous accompagnons dans l'obtention des aides telles que MaPrimeRénov', les Certificats d'Économies d'Énergie (CEE), la TVA réduite ou l'Éco-PTZ pour vos projets de chauffage et climatisation à ${cityData.name} et dans le ${cityData.region}, afin de rendre vos projets plus accessibles et avantageux.`,
      variant: "dark" as const,
      gradient: "from-slate-900 via-slate-800 to-slate-900",
      accentColor: "from-amber-400 to-orange-400",
      features: ["MaPrimeRénov'", "CEE", "TVA réduite", "Éco-PTZ"]
    }
  ];

  return (
    <section 
      className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      {/* Background décoratif premium */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        <div className="absolute bottom-0 left-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.1),transparent_50%)]"></div>
      </div>

      {/* Titre de section premium */}
      <motion.div
        className="text-center mb-20 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-400 to-orange-400 text-slate-900 px-6 py-3 rounded-full font-semibold text-sm mb-6 shadow-lg">
          <Star className="w-4 h-4 fill-current" />
          Services Premium
          <Star className="w-4 h-4 fill-current" />
        </div>
        <h2 className="text-5xl md:text-6xl font-black text-foreground mb-6">
          Notre <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">Expertise</span> à {cityData.name}
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Des solutions complètes de chauffage et climatisation pour tous vos besoins énergétiques dans le {cityData.region}
        </p>
      </motion.div>

      {/* Grille des services premium */}
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
              itemScope
              itemType="https://schema.org/Service"
            >
              {/* Carte principale avec effet 3D */}
              <Card className={`
                relative overflow-hidden h-full transition-all duration-700 group-hover:scale-[1.02] group-hover:-translate-y-2
                ${service.variant === 'dark' ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white' : 'bg-gradient-to-br from-white via-gray-50 to-white text-slate-900'}
                shadow-xl group-hover:shadow-2xl border-0
              `}>
                {/* Overlay de gradient accent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.accentColor} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
                
                {/* Bordure animée */}
                <div className={`absolute inset-0 rounded-lg p-[2px] bg-gradient-to-br ${service.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}>
                  <div className={`h-full w-full rounded-lg ${service.variant === 'dark' ? 'bg-slate-900' : 'bg-white'}`}></div>
                </div>

                <CardContent className="relative z-10 p-8">
                  {/* Icône avec effet premium */}
                  <div className="flex justify-center mb-6">
                    <div className={`
                      relative w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110
                      ${service.variant === 'dark' 
                        ? 'bg-gradient-to-br from-white/10 to-white/5 border border-white/20' 
                        : 'bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-200'
                      }
                      group-hover:shadow-2xl group-hover:shadow-blue-500/25
                    `}>
                      <service.icon className={`
                        w-10 h-10 transition-all duration-500 group-hover:scale-110
                        ${service.variant === 'dark' ? 'text-white' : 'text-slate-700'}
                        group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:bg-clip-text
                      `} />
                      
                      {/* Effet de brillance */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>
                  </div>

                  {/* Titre avec effet premium */}
                  <h3 
                    className={`
                      text-2xl font-bold mb-6 text-center transition-all duration-500
                      ${service.variant === 'dark' ? 'text-white' : 'text-slate-900'}
                      group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:bg-clip-text
                    `}
                    itemProp="name"
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p 
                    className={`
                      text-center leading-relaxed mb-6 transition-all duration-500
                      ${service.variant === 'dark' ? 'text-white/80' : 'text-slate-700'}
                    `}
                    itemProp="description"
                  >
                    {service.description}
                  </p>

                  {/* Features avec badges premium */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {service.features.map((feature, fIndex) => (
                      <span
                        key={fIndex}
                        className={`
                          px-3 py-1 rounded-full text-xs font-medium transition-all duration-300
                          ${service.variant === 'dark'
                            ? 'bg-white/10 text-white/80 border border-white/20 group-hover:bg-white/20 group-hover:border-white/40'
                            : 'bg-slate-100 text-slate-700 border border-slate-200 group-hover:bg-slate-200 group-hover:border-slate-300'
                          }
                        `}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Ligne décorative animée */}
                  <div className="flex justify-center">
                    <div className="w-0 group-hover:w-24 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-700 rounded-full"></div>
                  </div>
                </CardContent>

                {/* Effet de brillance sur toute la carte */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 opacity-0 group-hover:opacity-100"></div>
              </Card>

              {/* Ombre portée dynamique */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-blue-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 group-hover:scale-110"></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

// Composant Interventions Section
const InterventionsSection = ({ cityData }: { cityData: CityData }) => (
  <section 
    className="relative bg-cover bg-center bg-no-repeat py-20"
    style={{ backgroundImage: `url('${cityData.backgroundImages.interventions}')` }}
  >
    <div className="absolute inset-0 bg-black/30" />
    <div className="relative z-10 max-w-3xl mx-auto px-4">
      <Card className="bg-white/70 backdrop-blur-lg border-0">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Nos interventions à {cityData.name}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {cityData.description.interventions}
          </p>
        </CardContent>
      </Card>
    </div>
  </section>
);

// Composant Pourquoi Choisir
const PourquoiChoisir = ({ cityData }: { cityData: CityData }) => (
  <section 
    className="relative bg-cover bg-center bg-no-repeat py-20"
    style={{ backgroundImage: `url('${cityData.backgroundImages.whyChoose}')` }}
  >
    <div className="absolute inset-0 bg-black/30" />
    <div className="relative z-10 max-w-4xl mx-auto px-4">
      <Card className="bg-white/80 backdrop-blur-md border-0">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            Pourquoi choisir ClimGO à {cityData.name} ?
          </h2>
          <div className="space-y-4 text-muted-foreground">
            {cityData.description.whyChoose.map((paragraph, index) => (
              <p key={index} className="text-center leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
);

// Composant Détails Spécifiques
const DetailsSpecifiques = ({ cityData }: { cityData: CityData }) => {
  const details = [
    {
      title: cityData.description.specificDetails.environment.title,
      content: cityData.description.specificDetails.environment.content,
      variant: "secondary" as const
    },
    {
      title: cityData.description.specificDetails.examples.title,
      content: cityData.description.specificDetails.examples.content,
      variant: "primary" as const
    },
    {
      title: cityData.description.specificDetails.expertise.title,
      content: cityData.description.specificDetails.expertise.content,
      variant: "primary" as const
    },
    {
      title: cityData.description.specificDetails.contact.title,
      content: [cityData.description.specificDetails.contact.content],
      variant: "secondary" as const
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {details.map((detail, index) => (
            <Card key={index} className={`${detail.variant === 'primary' ? 'bg-primary text-primary-foreground' : 'bg-card'} hover:shadow-xl transition-all duration-300`}>
              <CardHeader>
                <CardTitle className={`text-center ${detail.variant === 'primary' ? 'text-primary-foreground' : 'text-foreground'}`}>
                  {detail.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className={`text-center leading-relaxed space-y-4 ${detail.variant === 'primary' ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
                  {detail.content.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// Composant FAQ
const FaqSection = ({ cityData }: { cityData: CityData }) => (
  <section 
    className="relative bg-cover bg-center bg-no-repeat py-20"
    style={{ backgroundImage: `url('${cityData.backgroundImages.faq}')` }}
  >
    <div className="absolute inset-0 bg-black/30" />
    <div className="relative z-10 max-w-4xl mx-auto px-4">
      <Card className="bg-white/80 backdrop-blur-md border-0">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-foreground mb-6">
            <HelpCircle className="w-8 h-8 mx-auto mb-4 text-primary" />
            Mini FAQ locale
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="space-y-2">
            {cityData.faq.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                <AccordionTrigger className="text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  </section>
);

// Composant Fond Aquitaine Animé - DESIGN PREMIUM LUXE 🔥
const AquitaineBackgroundSection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Fond dégradé adaptatif */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-black"></div>
      
      {/* Motif de texture subtile */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" 
           style={{
             backgroundImage: `radial-gradient(circle at 1px 1px, rgb(156 163 175) 1px, transparent 0)`,
             backgroundSize: '20px 20px'
           }}>
      </div>

      {/* SVG Carte d'Aquitaine avec animation lumineuse */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg 
          width="800" 
          height="600" 
          viewBox="0 0 800 600" 
          className="max-w-full max-h-full opacity-20 dark:opacity-30"
        >
          <defs>
            {/* Gradient pour le trait lumineux */}
            <linearGradient id="lightTrail" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="30%" stopColor="rgb(59 130 246)" stopOpacity="0.8" />
              <stop offset="50%" stopColor="rgb(147 197 253)" stopOpacity="1" />
              <stop offset="70%" stopColor="rgb(59 130 246)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="transparent" />
              <animateTransform
                attributeName="gradientTransform"
                type="translate"
                values="-200 0; 1000 0; -200 0"
                dur="8s"
                repeatCount="indefinite"
              />
            </linearGradient>
            
            {/* Filtre pour l'effet de lueur */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Contour simplifié de l'Aquitaine */}
          <path 
            d="M 150 100 L 300 80 L 450 90 L 580 120 L 650 180 L 680 250 L 670 320 L 640 400 L 580 480 L 500 520 L 400 540 L 300 530 L 200 510 L 120 450 L 100 380 L 110 300 L 130 220 Z" 
            fill="none" 
            stroke="rgb(156 163 175)" 
            strokeWidth="2" 
            className="opacity-30 dark:opacity-50"
          />
          
          {/* Trait lumineux animé */}
          <path 
            d="M 150 100 L 300 80 L 450 90 L 580 120 L 650 180 L 680 250 L 670 320 L 640 400 L 580 480 L 500 520 L 400 540 L 300 530 L 200 510 L 120 450 L 100 380 L 110 300 L 130 220 Z" 
            fill="none" 
            stroke="url(#lightTrail)" 
            strokeWidth="4" 
            filter="url(#glow)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Points lumineux aux principales villes */}
          <circle cx="300" cy="200" r="4" fill="rgb(59 130 246)" className="opacity-60">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="500" cy="300" r="4" fill="rgb(59 130 246)" className="opacity-60">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="400" cy="400" r="4" fill="rgb(59 130 246)" className="opacity-60">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
          </circle>
          
          {/* Texte "AQUITAINE" stylisé */}
          <text 
            x="400" 
            y="350" 
            textAnchor="middle" 
            className="fill-gray-400 dark:fill-gray-600 text-4xl font-bold opacity-20"
            style={{ fontFamily: 'system-ui, sans-serif' }}
          >
            AQUITAINE
          </text>
        </svg>
      </div>

      {/* Éléments décoratifs additionnels */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-indigo-200 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-200 dark:bg-cyan-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
    </section>
  );
};

// Composant Google Maps Section - DESIGN PREMIUM LUXE 🔥
const GoogleMapsSection = ({ cityData }: { cityData: CityData }) => {
  // Encoder l'adresse pour l'URL Google Maps
  const encodedAddress = encodeURIComponent(`${cityData.name}, ${cityData.region}, France`);
  const googleMapsUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodedAddress}&zoom=13&maptype=roadmap`;

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Background décoratif premium */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        <div className="absolute bottom-0 left-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.1),transparent_50%)]"></div>
      </div>

      {/* Grille géométrique subtile */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_50%,rgba(255,255,255,0.1)_50%),linear-gradient(0deg,transparent_50%,rgba(255,255,255,0.1)_50%)] bg-[length:100px_100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Titre de la section premium */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-400 to-orange-400 text-slate-900 px-6 py-3 rounded-full font-semibold text-sm mb-6 shadow-2xl shadow-amber-500/25">
            <MapPin className="w-4 h-4 fill-current" />
            Localisation Premium
            <MapPin className="w-4 h-4 fill-current" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Localisation ClimGO à <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">{cityData.name}</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Découvrez notre zone d'intervention et localisez nos services de chauffage et climatisation dans le {cityData.region}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Carte Google Maps premium */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Carte avec effet premium */}
              <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md">
                <CardContent className="p-0 relative">
                  {/* Overlay de gradient sur la carte */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 z-10 pointer-events-none"></div>
                  
                  <iframe
                    src={googleMapsUrl}
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Carte ClimGO - ${cityData.name}`}
                    className="w-full h-[450px] relative z-0"
                  />
                  
                  {/* Badge ClimGO sur la carte */}
                  <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-2xl shadow-amber-500/25">
                    🏠 ClimGO
                  </div>
                </CardContent>
              </Card>

              {/* Ombre portée dynamique */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-blue-500/20 rounded-lg blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 group-hover:scale-105"></div>
            </motion.div>
          </div>

          {/* Informations de localisation premium */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-2xl">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl text-amber-400 font-bold flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-400 rounded-xl flex items-center justify-center">
                      <Navigation className="w-6 h-6 text-white" />
                    </div>
                    Zone d'intervention
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Informations principales */}
                  <div className="space-y-4">
                    {[
                      { 
                        icon: MapPin, 
                        title: "Ville principale", 
                        value: cityData.name,
                        subtitle: `${cityData.region}, France`,
                        color: "from-blue-400 to-cyan-400"
                      },
                      { 
                        icon: CircleDot, 
                        title: "Rayon d'intervention", 
                        value: "Jusqu'à 30km",
                        subtitle: `Autour de ${cityData.name}`,
                        color: "from-emerald-400 to-teal-400"
                      },
                      { 
                        icon: Clock, 
                        title: "Intervention rapide", 
                        value: "Sous 24h",
                        subtitle: `Sur ${cityData.name}`,
                        color: "from-purple-400 to-pink-400"
                      }
                    ].map((item, index) => (
                      <div key={index} className="group">
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-white/5 to-white/10 border border-white/10 hover:border-white/20 transition-all duration-300">
                          <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                            <item.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="text-white/70 text-sm font-medium mb-1">{item.title}</p>
                            <p className="text-white text-lg font-bold mb-1">{item.value}</p>
                            <p className="text-white/60 text-sm">{item.subtitle}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Statistiques premium */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
                    <div className="text-center p-4 bg-gradient-to-br from-amber-400/10 to-orange-400/10 rounded-xl border border-amber-400/20">
                      <p className="text-amber-400 text-2xl font-bold">500+</p>
                      <p className="text-white/70 text-sm">Clients satisfaits</p>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-xl border border-blue-400/20">
                      <p className="text-blue-400 text-2xl font-bold">5 ans</p>
                      <p className="text-white/70 text-sm">Garantie premium</p>
                    </div>
                  </div>

                  {/* Bouton Google Maps premium */}
                  <div className="pt-4">
                    <Button 
                      asChild 
                      className="w-full group relative overflow-hidden bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-6 rounded-xl shadow-2xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 transform hover:scale-105"
                      size="lg"
                    >
                      <a 
                        href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3"
                      >
                        <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                        Voir sur Google Maps
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Composant CTA Final - DESIGN PREMIUM LUXE 🔥
const FinalCTA = ({ cityData }: { cityData: CityData }) => (
  <section className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
    {/* Background décoratif premium */}
    <div className="absolute inset-0">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.1),transparent_50%)]"></div>
      <div className="absolute bottom-0 left-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.1),transparent_50%)]"></div>
    </div>

    {/* Particules flottantes */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce opacity-40"></div>
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-spin opacity-50"></div>
    </div>

    <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
      {/* Badge premium */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-400 to-orange-400 text-slate-900 px-6 py-3 rounded-full font-semibold text-sm mb-8 shadow-2xl shadow-amber-500/25"
      >
        <Star className="w-4 h-4 fill-current" />
        Devis Premium Gratuit
        <Star className="w-4 h-4 fill-current" />
      </motion.div>

      {/* Titre principal */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight"
      >
        Besoin d'un devis à <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">{cityData.name}</span> ?
      </motion.h2>

      {/* Description premium */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed max-w-4xl mx-auto"
      >
        Faites confiance à <span className="text-amber-400 font-bold">ClimGO</span> pour vos projets de chauffage et climatisation. 
        Notre expertise premium vous garantit des solutions sur mesure et un service d'excellence.
      </motion.p>

      {/* Boutons CTA premium */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
      >
        {/* Bouton principal premium */}
        <Button 
          size="lg" 
          className="group relative overflow-hidden bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-600 hover:via-yellow-600 hover:to-amber-700 text-slate-900 font-bold text-xl px-12 py-8 rounded-2xl shadow-2xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
          asChild
        >
          <Link href="/contact">
            <span className="relative z-10 flex items-center gap-4">
              <DraftingCompass className="w-7 h-7" />
              Devis Gratuit Premium à {cityData.name}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </Link>
        </Button>

        {/* Bouton secondaire premium */}
        <Button 
          variant="outline" 
          size="lg" 
          className="group relative overflow-hidden border-2 border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:border-white/50 font-semibold text-xl px-12 py-8 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
          asChild
        >
          <Link href="tel:0766460008">
            <span className="relative z-10 flex items-center gap-4">
              <Phone className="w-7 h-7" />
              Appel Direct
            </span>
          </Link>
        </Button>
      </motion.div>

      {/* Indicateurs de confiance premium */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
      >
        {[
          { icon: Shield, text: "Garantie", value: "5 ans", color: "from-blue-400 to-cyan-400" },
          { icon: Clock, text: "Intervention", value: "24h", color: "from-emerald-400 to-teal-400" },
          { icon: Award, text: "Certification", value: "QualiPac", color: "from-purple-400 to-pink-400" },
          { icon: Star, text: "Satisfaction", value: "98%", color: "from-amber-400 to-orange-400" }
        ].map((item, index) => (
          <div key={index} className="text-center group">
            <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300`}>
              <item.icon className="w-10 h-10 text-white" />
            </div>
            <p className="text-white/70 text-sm font-medium mb-2">{item.text}</p>
            <p className={`text-2xl font-bold bg-gradient-to-br ${item.color} bg-clip-text text-transparent`}>{item.value}</p>
          </div>
        ))}
      </motion.div>

      {/* Message de confiance */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        className="mt-16 p-8 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl"
      >
        <p className="text-white/90 text-lg font-medium">
          🌟 <span className="text-amber-400 font-bold">ClimGO</span> - Votre partenaire de confiance pour tous vos projets de chauffage et climatisation dans le {cityData.region}
        </p>
      </motion.div>
    </div>
  </section>
);

// Composant principal du template
export default function CityPageTemplate({ cityData }: CityPageTemplateProps) {
  return (
    <main className="min-h-screen">
      <HeroSection cityData={cityData} />
      <AquitaineBackgroundSection />
      <BreadcrumbNav cityData={cityData} />
      <VilleDescription cityData={cityData} />
              <ServicesGrid cityData={cityData} />
      <InterventionsSection cityData={cityData} />
      <PourquoiChoisir cityData={cityData} />
      <DetailsSpecifiques cityData={cityData} />
      <FaqSection cityData={cityData} />
      <GoogleMapsSection cityData={cityData} />
      <FinalCTA cityData={cityData} />
    </main>
  );
}
