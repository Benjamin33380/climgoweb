'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { ChevronRight, ArrowRight, Phone, MapPin, Clock, Star, Target, Compass, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
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

// Simple Zone Card - consistent with Services
const SimpleZoneCard = ({ zone, index }: { zone: Zone; index: number }) => (
  <div className="bg-white dark:bg-black rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-600/30 hover:border-blue-600/50 dark:hover:border-blue-400/50">
    <div className="flex items-center justify-between mb-6">
      <div className={`bg-gradient-to-br ${zone.gradient} rounded-2xl w-16 h-16 flex items-center justify-center shadow-lg`}>
        <zone.icon className="w-8 h-8 text-white" />
      </div>
      <Badge variant="secondary" className="text-sm font-semibold">
        {zone.count} communes
      </Badge>
    </div>
    
    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
      {zone.title}
    </h3>
    
    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
      {zone.description}
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {zone.cities.slice(0, 8).map((city, cityIndex) => (
        <Link
          key={cityIndex}
          href={city.url}
          className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200 group"
        >
          <span className="text-sm font-medium text-gray-900 dark:text-white">{city.name}</span>
          <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transform group-hover:translate-x-1 transition-all duration-200" />
        </Link>
      ))}
      
      {zone.cities.length > 8 && (
        <div className="col-span-2 text-center">
          <Button
            variant="outline"
            className="w-full border-dashed text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            +{zone.cities.length - 8} autres communes
          </Button>
        </div>
      )}
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
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      icon: MapPin,
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
        { name: 'Lormont', url: '/villes/lormont-chauffage-climatisation' },
        { name: 'Floirac', url: '/villes/floirac-chauffage-climatisation' },
        { name: "Villenave-d'Ornon", url: '/villes/villenave-d-ornon-chauffage-climatisation' },
        { name: 'Eysines', url: '/villes/eysines-chauffage-climatisation' },
        { name: 'Le Haillan', url: '/villes/le-haillan-chauffage-climatisation' },
        { name: 'Bouliac', url: '/villes/bouliac-chauffage-climatisation' }
      ],
      gradient: 'from-red-500 via-pink-500 to-purple-500',
      icon: Target,
      count: 14
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
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      icon: Compass,
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
        { name: 'Parentis-en-Born', url: '/villes/parentis-chauffage-climatisation' },
        { name: 'Biscarrosse', url: '/villes/biscarrosse-chauffage-climatisation' },
        { name: 'Mimizan', url: '/villes/mimizan-chauffage-climatisation' }
      ],
      gradient: 'from-yellow-500 via-orange-500 to-red-500',
      icon: Sparkles,
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
      gradient: 'from-purple-500 via-violet-500 to-indigo-500',
      icon: Zap,
      count: 6
    },
    {
      id: 'autres',
      title: 'Autres communes',
      description: 'Intervention ponctuelle dans d\'autres communes de la Gironde selon les besoins.',
      cities: [
        { name: 'Saint-Loubès', url: '/villes/saint-loubes-chauffage-climatisation' },
        { name: 'Cadaujac', url: '/villes/cadaujac-chauffage-climatisation' },
        { name: 'Saint-Selve', url: '/villes/saint-selve-chauffage-climatisation' },
        { name: 'Le Bouscat', url: '/villes/le-bouscat-chauffage-climatisation' }
      ],
      gradient: 'from-slate-500 via-gray-500 to-zinc-500',
      icon: Star,
      count: 6
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white relative">
      {/* Hero Section with Full Globe Background */}
      <section className="relative min-h-screen bg-white dark:bg-black overflow-hidden">
        {/* Globe Full Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-50 dark:opacity-35">
          <div className="relative w-[100vw] h-[120vh] flex items-center justify-center" style={{ marginTop: '-10vh' }}>
            <Globe className="w-[120vw] h-[120vh] max-w-none" />
          </div>
        </div>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/80 dark:from-black/80 dark:via-black/60 dark:to-black/80" />
        
        <div className="relative z-10 container mx-auto px-4 min-h-screen flex flex-col justify-center">
          {/* Simple Breadcrumb */}
          <nav className="text-sm text-gray-600 dark:text-gray-400 mb-12 pt-8">
            <Link href="/" className="hover:text-black dark:hover:text-white transition-colors">Accueil</Link>
            <ChevronRight className="w-4 h-4 mx-2 inline" />
            <span className="text-black dark:text-white">Zones d'intervention</span>
          </nav>

          {/* Hero Content */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 dark:text-white mb-8 tracking-tight">
              Zones d'Intervention
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-16">
              Nous intervenons dans toute la <span className="font-semibold text-blue-600 dark:text-blue-400">Gironde</span>, 
              sur le <span className="font-semibold text-blue-600 dark:text-blue-400">Bassin d'Arcachon</span> et 
              <span className="font-semibold text-blue-600 dark:text-blue-400"> Bordeaux Métropole</span>
            </p>
          </div>

          {/* Stats - Enhanced for Globe Background */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { number: '50+', label: 'Communes desservies', icon: MapPin },
              { number: '24/7', label: 'Service d\'urgence', icon: Clock },
              { number: '100%', label: 'Satisfaction client', icon: Star }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200/50 dark:border-gray-600/30"
              >
                <div className="bg-blue-600/10 dark:bg-blue-600/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-4xl font-light mb-3 text-gray-900 dark:text-white">
                  {stat.number}
                </div>
                <div className="text-base text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zones Section */}
      <section className="relative py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-4">
              Nos Zones d'Intervention
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Découvrez toutes nos zones d'intervention avec leurs spécificités locales
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {zones.map((zone, index) => (
              <SimpleZoneCard key={zone.id} zone={zone} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Simple like homepage */}
      <section className="relative py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-blue-600/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <Phone className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Besoin d'une Intervention ?
          </h2>
          
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Notre équipe d'experts est à votre disposition dans toute la région. Devis gratuit et intervention rapide garantie !
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:0766460008"
              className="inline-flex items-center justify-center rounded-full px-8 py-4 text-lg font-medium bg-white text-blue-600 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              07 66 46 00 08
            </Link>
            
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-8 py-4 text-lg font-medium border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Devis Gratuit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}