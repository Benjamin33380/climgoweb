'use client';

import Link from 'next/link';
import { ChevronRight, ArrowRight, Phone, MapPin, Clock, Star, Building2, Mountain, TreePine, Waves, Home, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Globe } from '@/components/ui/globe';

// Types
interface City {
  name: string;
  url: string;
}

interface Zone {
  id: string;
  title: string;
  description: string;
  cities: City[];
  gradient: string;
  icon: React.ComponentType<{ className?: string }>;
  count: number;
}

// Simple Zone Card - showing ALL cities
const SimpleZoneCard = ({ zone }: { zone: Zone }) => (
  <div className="bg-white dark:bg-black rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-black/20 dark:border-white/20 hover:border-black/40 dark:hover:border-white/40">
    <div className="flex items-center justify-between mb-3 xs:mb-4 sm:mb-4 md:mb-6">
      <div className="bg-black/10 dark:bg-white/10 rounded-xl xs:rounded-2xl w-10 h-10 xs:w-12 xs:h-12 sm:w-12 sm:h-12 md:w-16 md:h-16 flex items-center justify-center shadow-sm">
        <zone.icon className="w-5 h-5 xs:w-6 xs:h-6 sm:w-6 sm:h-6 md:w-8 md:h-8 text-black dark:text-white" />
      </div>
      <Badge variant="secondary" className="text-xs xs:text-xs sm:text-xs md:text-sm font-semibold px-2 xs:px-3 py-1">
        {zone.count} communes
      </Badge>
    </div>
    
    <h3 className="text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-2xl font-semibold text-black dark:text-white mb-2 xs:mb-3 sm:mb-3 md:mb-4">
      {zone.title}
    </h3>
    
    <p className="text-black/70 dark:text-white/70 text-xs xs:text-sm sm:text-sm leading-relaxed mb-3 xs:mb-4 sm:mb-4 md:mb-6">
      {zone.description}
    </p>

    <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 gap-2 xs:gap-2 sm:gap-3">
      {zone.cities.map((city) => (
        <Link
          key={city.name}
          href={city.url}
          className="flex items-center justify-between p-2 xs:p-2.5 sm:p-3 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors duration-200 group"
        >
          <span className="text-xs xs:text-sm sm:text-sm font-medium text-black dark:text-white">{city.name}</span>
          <ArrowRight className="w-3 h-3 xs:w-3 xs:h-3 sm:w-3 sm:h-3 text-black/50 dark:text-white/50 group-hover:text-black dark:group-hover:text-white transform group-hover:translate-x-1 transition-all duration-200" />
        </Link>
      ))}
    </div>
  </div>
);

export default function ZonesInterventions() {
  const zones: Zone[] = [
    {
      id: 'bassin',
      title: 'Bassin d\'Arcachon',
      description: 'Zone côtière avec des enjeux spécifiques liés à l\'humidité et au sel marin.',
      cities: [
        { name: 'Arcachon', url: '/villes/arcachon-chauffage-climatisation' },
        { name: 'La Teste-de-Buch', url: '/villes/la-teste-de-buch-chauffage-climatisation' },
        { name: 'Gujan-Mestras', url: '/villes/gujan-mestras-chauffage-climatisation' },
        { name: 'Le Teich', url: '/villes/le-teich-chauffage-climatisation' },
        { name: 'Biganos', url: '/villes/biganos-chauffage-climatisation' },
        { name: 'Audenge', url: '/villes/audenge-chauffage-climatisation' },
        { name: 'Lanton', url: '/villes/lanton-chauffage-climatisation' },
        { name: 'Andernos-les-Bains', url: '/villes/andernos-les-bains-chauffage-climatisation' },
        { name: 'Arès', url: '/villes/ares-chauffage-climatisation' },
        { name: 'Lège-Cap-Ferret', url: '/villes/lege-cap-ferret-chauffage-climatisation' }
      ],
      gradient: '',
      icon: Waves,
      count: 10
    },
    {
      id: 'bordeaux',
      title: 'Bordeaux Métropole',
      description: 'Zone urbaine dense nécessitant des solutions adaptées aux contraintes citadines.',
      cities: [
        { name: 'Bordeaux', url: '/villes/bordeaux-chauffage-climatisation' },
        { name: 'Pessac', url: '/villes/pessac-chauffage-climatisation' },
        { name: 'Mérignac', url: '/villes/merignac-chauffage-climatisation' },
        { name: 'Talence', url: '/villes/talence-chauffage-climatisation' },
        { name: 'Bègles', url: '/villes/begles-chauffage-climatisation' },
        { name: 'Bruges', url: '/villes/bruges-chauffage-climatisation' },
        { name: 'Cenon', url: '/villes/cenon-chauffage-climatisation' },
        { name: 'Floirac', url: '/villes/floirac-chauffage-climatisation' },
        { name: "Villenave-d'Ornon", url: '/villes/villenave-d-ornon-chauffage-climatisation' },
        { name: 'Eysines', url: '/villes/eysines-chauffage-climatisation' },
        { name: 'Le Haillan', url: '/villes/le-haillan-chauffage-climatisation' },
        { name: 'Bouliac', url: '/villes/bouliac-chauffage-climatisation' },
        { name: 'Le Bouscat', url: '/villes/le-bouscat-chauffage-climatisation' }
      ],
      gradient: '',
      icon: Building2,
      count: 13
    },
    {
      id: 'graves',
      title: 'Pays des Graves',
      description: 'Zone viticole. Interventions respectueuses de l\'environnement et du patrimoine local.',
      cities: [
        { name: 'Gradignan', url: '/villes/gradignan-chauffage-climatisation' },
        { name: 'Cestas', url: '/villes/cestas-chauffage-climatisation' },
        { name: 'Canéjan', url: '/villes/canejan-chauffage-climatisation' },
        { name: 'Léognan', url: '/villes/leognan-chauffage-climatisation' },
        { name: 'Martillac', url: '/villes/martillac-chauffage-climatisation' },
        { name: 'La Brède', url: '/villes/la-brede-chauffage-climatisation' }
      ],
      gradient: '',
      icon: Mountain,
      count: 6
    },
    {
      id: 'landes',
      title: 'Landes de Gascogne',
      description: 'Zone forestière avec des défis particuliers liés à l\'isolation et à l\'accessibilité.',
      cities: [
        { name: 'Marcheprime', url: '/villes/marcheprime-chauffage-climatisation' },
        { name: 'Le Barp', url: '/villes/le-barp-chauffage-climatisation' },
        { name: 'Mios', url: '/villes/mios-chauffage-climatisation' },
        { name: 'Salles', url: '/villes/salles-chauffage-climatisation' },
        { name: 'Belin-Béliet', url: '/villes/belin-beliet-chauffage-climatisation' },
        { name: 'Sanguinet', url: '/villes/sanguinet-chauffage-climatisation' },
        { name: 'Parentis-en-Born', url: '/villes/parentis-en-born-chauffage-climatisation' },
        { name: 'Biscarrosse', url: '/villes/biscarrosse-chauffage-climatisation' },
        { name: 'Mimizan', url: '/villes/mimizan-chauffage-climatisation' }
      ],
      gradient: '',
      icon: TreePine,
      count: 9
    },
    {
      id: 'medoc',
      title: 'Médoc',
      description: 'Territoire viticole d\'exception nécessitant une approche sur-mesure.',
      cities: [
        { name: 'Lacanau', url: '/villes/lacanau-chauffage-climatisation' },
        { name: 'Saint-Médard-en-Jalles', url: '/villes/saint-medard-en-jalles-chauffage-climatisation' },
        { name: 'Saint-Aubin-de-Médoc', url: '/villes/saint-aubin-de-medoc-chauffage-climatisation' },
        { name: 'Martignas-sur-Jalle', url: '/villes/martignas-sur-jalle-chauffage-climatisation' },
        { name: "Saint-Jean-d'Illac", url: '/villes/saint-jean-d-illac-chauffage-climatisation' },
        { name: 'Saucats', url: '/villes/saucats-chauffage-climatisation' }
      ],
      gradient: '',
      icon: Home,
      count: 6
    },
    {
      id: 'autres',
      title: 'Autres communes',
      description: 'Intervention ponctuelle dans d\'autres communes de la Gironde selon les besoins.',
      cities: [
        { name: 'Saint-Loubès', url: '/villes/saint-loubes-chauffage-climatisation' },
        { name: 'Cadaujac', url: '/villes/cadaujac-chauffage-climatisation' },
        { name: 'Saint-Selve', url: '/villes/saint-selve-chauffage-climatisation' }
      ],
      gradient: '',
      icon: Users,
      count: 3
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white relative">
      {/* Hero Section with Globe Background */}
      <section className="relative min-h-screen bg-white dark:bg-black overflow-hidden">
        {/* Globe Background - Enhanced contrast */}
        <div className="absolute inset-0 flex items-center justify-center opacity-40 dark:opacity-35">
          <div className="relative w-full h-full flex items-center justify-center">
            <Globe className="w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] lg:w-[50vw] lg:h-[50vw] max-w-[800px] max-h-[800px]" />
          </div>
        </div>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/60 dark:from-black/60 dark:via-black/30 dark:to-black/60" />
        
        <div className="relative z-10 container mx-auto px-4 min-h-screen flex flex-col justify-center">
          {/* Simple Breadcrumb */}
          <nav className="text-sm text-black/60 dark:text-white/60 mb-8 md:mb-12 pt-6 md:pt-8">
            <Link href="/" className="hover:text-black dark:hover:text-white transition-colors">Accueil</Link>
            <ChevronRight className="w-4 h-4 mx-2 inline" />
            <span className="text-black dark:text-white">Zones d&apos;intervention</span>
          </nav>

          {/* Hero Content */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-black dark:text-white mb-6 md:mb-8 tracking-tight">
              Zones d&apos;Intervention
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-black/80 dark:text-white/80 max-w-4xl mx-auto leading-relaxed mb-12 md:mb-16">
              Nous intervenons dans toute la <span className="font-semibold text-black dark:text-white">Gironde</span>, 
              sur le <span className="font-semibold text-black dark:text-white">Bassin d'Arcachon</span> et 
              <span className="font-semibold text-black dark:text-white"> Bordeaux Métropole</span>
            </p>
          </div>

          {/* Stats - Enhanced for Globe Background */}
          <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              { number: '48', label: 'Communes desservies', icon: MapPin },
              { number: '24/7', label: 'Service d\'urgence', icon: Clock },
              { number: '100%', label: 'Satisfaction client', icon: Star }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white/95 dark:bg-black/95 backdrop-blur-sm rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-black/20 dark:border-white/20"
              >
                <div className="bg-black/10 dark:bg-white/10 rounded-full w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-3 xs:mb-4 sm:mb-4 md:mb-6">
                  <stat.icon className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-black dark:text-white" />
                </div>
                <div className="text-2xl xs:text-2xl sm:text-3xl md:text-4xl font-light mb-2 xs:mb-2 sm:mb-3 text-black dark:text-white">
                  {stat.number}
                </div>
                <div className="text-xs xs:text-sm sm:text-sm md:text-base text-black/70 dark:text-white/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zones Section */}
      <section className="relative py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4 xs:px-5 sm:px-6">
          <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-black dark:text-white mb-2 xs:mb-3 sm:mb-3 md:mb-4">
              Nos Zones d&apos;Intervention
            </h2>
            <p className="text-sm xs:text-base sm:text-base md:text-lg text-black/70 dark:text-white/70 max-w-2xl mx-auto px-2">
              Découvrez toutes nos zones d&apos;intervention avec leurs spécificités locales
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 xs:gap-7 sm:gap-8 md:gap-8 max-w-7xl mx-auto">
            {zones.map((zone) => (
              <SimpleZoneCard key={zone.id} zone={zone} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Simple like homepage */}
      <section className="relative py-12 xs:py-14 sm:py-16 md:py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4 xs:px-5 sm:px-6 text-center">
          <div className="bg-black/10 dark:bg-white/10 rounded-full w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-3 xs:mb-4 sm:mb-4 md:mb-6">
            <Phone className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-black dark:text-white" />
          </div>
          
          <h2 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-black dark:text-white mb-3 xs:mb-4 sm:mb-4 md:mb-6">
            Besoin d&apos;une Intervention ?
          </h2>
          
          <p className="text-sm xs:text-base sm:text-base md:text-lg text-black/70 dark:text-white/70 mb-5 xs:mb-6 sm:mb-6 md:mb-8 max-w-2xl mx-auto px-2">
            Notre équipe d&apos;experts est à votre disposition dans toute la région. Devis gratuit et intervention rapide garantie !
          </p>
          
          <div className="flex flex-col xs:flex-col sm:flex-row gap-3 xs:gap-3 sm:gap-4 justify-center max-w-md xs:max-w-lg sm:max-w-none mx-auto">
            <Link
              href="tel:0766460008"
              className="inline-flex items-center justify-center rounded-full px-6 xs:px-7 sm:px-8 py-3 xs:py-3.5 sm:py-4 text-sm xs:text-base sm:text-lg font-medium bg-black dark:bg-white text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Phone className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 mr-2" />
              07 66 46 00 08
            </Link>
            
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-6 xs:px-7 sm:px-8 py-3 xs:py-3.5 sm:py-4 text-sm xs:text-base sm:text-lg font-medium border-2 border-black dark:border-white text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300"
            >
              Devis Gratuit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}