'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from 'framer-motion';
import { Search, MapPin } from "lucide-react";
import { useState } from "react";
import { SimpleWrapper } from '@/components/ui/SimpleWrapper';
import Services from '@/components/Services';
import CityLinksList from '@/components/CityLinksList';
import TestimonialsSection from '@/components/TestimonialsSection';
import { CitySchema } from '@/components/CitySchema';
import { getCityConfig } from '@/config/cities';

export default function Bordeaux() {
  // Schéma JSON-LD pour Bordeaux
  const cityData = getCityConfig('bordeaux-chauffage-climatisation')!;

  // Composant CitySearch
  const CitySearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [showSearchResults, setShowSearchResults] = useState(false);

    const cities = [
      { name: 'Arcachon', url: '/arcachon-chauffage-climatisation' },
      { name: 'La Teste-de-Buch', url: '/la-teste-de-buch-chauffage-climatisation' },
      { name: 'Gujan-Mestras', url: '/gujan-mestras-chauffage-climatisation' },
      { name: 'Le Teich', url: '/le-teich-chauffage-climatisation' },
      { name: 'Biganos', url: '/biganos-chauffage-climatisation' },
      { name: 'Audenge', url: '/audenge-chauffage-climatisation' },
      { name: 'Lanton', url: '/lanton-chauffage-climatisation' },
      { name: 'Andernos-les-Bains', url: '/andernos-les-bains-chauffage-climatisation' },
      { name: 'Arès', url: '/ares-chauffage-climatisation' },
      { name: 'Lège Cap Ferret', url: '/lege-cap-ferret-chauffage-climatisation' },
      { name: 'Marcheprime', url: '/marcheprime-chauffage-climatisation' },
      { name: 'Le Barp', url: '/le-barp-chauffage-climatisation' },
      { name: 'Mios', url: '/mios-chauffage-climatisation' },
      { name: 'Salles', url: '/salles-chauffage-climatisation' },
      { name: 'Belin-Béliet', url: '/belin-beliet-chauffage-climatisation' },
      { name: 'Sanguinet', url: '/sanguinet-chauffage-climatisation' },
      { name: 'Parentis-en-Born', url: '/villes/parentis-chauffage-climatisation' },
      { name: 'Biscarrosse', url: '/biscarrosse-chauffage-climatisation' },
      { name: 'Mimizan', url: '/mimizan-chauffage-climatisation' },
      { name: 'Canéjan', url: '/canejan-chauffage-climatisation' },
      { name: 'Gradignan', url: '/gradignan-chauffage-climatisation' },
      { name: 'Saucats', url: '/saucats-chauffage-climatisation' },
      { name: 'Saint-Selve', url: '/saint-selve-chauffage-climatisation' },
      { name: 'Martillac', url: '/martillac-chauffage-climatisation' },
      { name: 'Léognan', url: '/leognan-chauffage-climatisation' },
      { name: 'La Brède', url: '/la-brede-chauffage-climatisation' },
      { name: 'Cadaujac', url: '/cadaujac-chauffage-climatisation' },
      { name: 'Cestas', url: '/cestas-chauffage-climatisation' },
      { name: 'Bordeaux', url: '/bordeaux-chauffage-climatisation' },
      { name: 'Le Haillan', url: '/le-haillan-chauffage-climatisation' },
      { name: 'Le Bouscat', url: '/le-bouscat-chauffage-climatisation' },
      { name: 'Bruges', url: '/bruges-chauffage-climatisation' },
      { name: 'Eysines', url: '/eysines-chauffage-climatisation' },
      { name: 'Cenon', url: '/cenon-chauffage-climatisation' },
      { name: 'Lormont', url: '/lormont-chauffage-climatisation' },
      { name: 'Floirac', url: '/floirac-chauffage-climatisation' },
      { name: 'Bouliac', url: '/bouliac-chauffage-climatisation' },
      { name: 'Mérignac', url: '/merignac-chauffage-climatisation' },
      { name: 'Pessac', url: '/pessac-chauffage-climatisation' },
      { name: 'Talence', url: '/talence-chauffage-climatisation' },
      { name: "Villenave-d'Ornon", url: '/villes/villenave-d-ornon-chauffage-climatisation' },
      { name: 'Bègles', url: '/begles-chauffage-climatisation' },
      { name: 'Lacanau', url: '/lacanau-chauffage-climatisation' },
      { name: 'Saint-Loubès', url: '/saint-loubes-chauffage-climatisation' },
      { name: "Saint-Jean-d'Illac", url: '/villes/saint-jean-d-illac-chauffage-climatisation' },
      { name: "Saint-Médard-en-Jalles", url: '/saint-medard-en-jalles-chauffage-climatisation' },
      { name: "Saint-Aubin-de-Médoc", url: '/saint-aubin-de-medoc-chauffage-climatisation' },
      { name: 'Martignas-sur-Jalle', url: '/martignas-sur-jalle-chauffage-climatisation' }
    ];

    // Filtrer les villes basé sur la recherche
    const filteredCities = cities.filter(city =>
      city.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div className="max-w-[240px] sm:max-w-xs md:max-w-sm relative">
        <div className="relative">
          <Search className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-black dark:text-white w-3 sm:w-4 h-3 sm:h-4" />
          <input
            type="text"
            placeholder="Rechercher votre ville..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowSearchResults(e.target.value.length > 0);
            }}
            onFocus={() => setShowSearchResults(searchQuery.length > 0)}
            className="w-full bg-white/20 dark:bg-white/10 backdrop-blur-md border border-black/40 dark:border-white/30 rounded-lg px-6 sm:px-8 py-1.5 sm:py-2 text-black dark:text-white placeholder-black dark:placeholder-white focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-400 focus:border-transparent text-xs sm:text-sm"
          />
          <MapPin className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-black dark:text-white w-3 sm:w-4 h-3 sm:h-4" />
        </div>
        
        {/* Résultats de recherche */}
        {showSearchResults && (
                          <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 dark:bg-background/95 backdrop-blur-md rounded-xl shadow-2xl border border-black/20 dark:border-white/30 max-h-60 overflow-y-auto z-50">
            {filteredCities.length > 0 ? (
              filteredCities.slice(0, 8).map((city, index) => (
                <Link
                  key={index}
                  href={city.url}
                  onClick={() => {
                    setSearchQuery('');
                    setShowSearchResults(false);
                  }}
                  className="block w-full text-left px-4 py-3 hover:bg-white dark:hover:bg-background text-black dark:text-white hover:text-black dark:hover:text-white transition-colors flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-gray-500 dark:text-white" />
                  {city.name}
                </Link>
              ))
            ) : (
              <div className="px-4 py-3 text-black dark:text-gray-500">
                Aucune ville trouvée
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <main className="px-0">
      <section className="hero-mobile-section relative h-[100vh] xs:h-[95vh] sm:h-[90vh] min-h-[500px] xs:min-h-[550px] sm:min-h-[600px] md:min-h-[640px] lg:min-h-[700px] xl:min-h-[750px] w-full overflow-hidden bg-transparent sm:bg-gray-50 sm:dark:bg-background text-black dark:text-white">
        {/* Zone image avec effet zoom - Responsive avec adaptation mobile */}
        <div className="absolute top-0 left-0 h-full w-full z-1 sm:hidden">
          <Image
            src="/villes/bordeaux.webp"
            alt="Bordeaux - Métropole"
            fill
            className="h-full w-full object-cover transition-opacity duration-1000"
            priority
          />
        </div>

        <motion.div
          className="hidden sm:block absolute top-0 right-0 h-full w-2/3 z-1"
          aria-hidden
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Version desktop - forme diagonale */}
          <div 
            className="hidden sm:block relative h-full w-full overflow-hidden"
            style={{
              clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)'
            }}
          >
            <Image
              src="/villes/bordeaux.webp"
              alt="Bordeaux - Métropole"
              fill
              className="h-full w-full object-cover object-center"
              priority
            />
          </div>
        </motion.div>

        {/* Forme diagonale sur le premier tiers - Cachée sur mobile */}
        <div 
          className="hidden sm:block absolute top-0 left-0 h-full w-2/5 bg-gray-50 dark:bg-background z-5"
          style={{
            clipPath: 'polygon(0% 0%, 85% 0%, 100% 100%, 0% 100%)'
          }}
        />



        {/* Contenu côté gauche - Responsive */}
        <div className="relative z-10 flex h-full items-center" style={{background: 'transparent'}}>
          <motion.div
            className="relative z-10 w-full xs:max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
            style={{background: 'transparent'}}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-2xl xs:text-3xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold sm:font-light tracking-tight mb-2 xs:mb-3 sm:mb-4 md:mb-6 text-white sm:text-black dark:text-white break-words leading-tight mobile-text-shadow">
              ClimGO à Bordeaux
            </h1>
            <p className="text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl text-white sm:text-black dark:text-white mb-3 xs:mb-4 sm:mb-4 md:mb-6 lg:mb-8 leading-relaxed max-w-[260px] xs:max-w-[280px] sm:max-w-sm md:max-w-lg lg:max-w-none whitespace-pre-line font-medium sm:font-normal mobile-text-shadow">
              Votre expert en chauffage et climatisation{'\n'}dans la métropole bordelaise
            </p>

            {/* Composant de recherche de villes */}
            <div className="mb-3 sm:mb-4 md:mb-6 lg:mb-8">
              <CitySearch />
            </div>

            <div className="flex flex-col xs:flex-row sm:flex-row gap-2 xs:gap-2 sm:gap-3 md:gap-4 lg:gap-5">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full px-3 xs:px-4 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-2 xs:py-2 sm:py-2.5 md:py-3 lg:py-4 text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg font-medium
                           bg-white dark:bg-background text-black dark:text-white hover:bg-gray-100 dark:hover:bg-background/90
                           border border-black/20 dark:border-white/20
                           transition-all duration-300 transform hover:scale-105 shadow-lg min-w-[120px] xs:min-w-[130px] sm:min-w-[140px]"
              >
                Devis gratuit
              </Link>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full px-3 xs:px-4 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-2 xs:py-2 sm:py-2.5 md:py-3 lg:py-4 text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg font-medium
                           border-2 border-white/50 sm:border-black/50 dark:border-white/30 text-white sm:text-black dark:text-white hover:bg-white/15 sm:hover:bg-background/15 dark:hover:bg-white/10 hover:border-white/70 sm:hover:border-black/70 dark:hover:border-white/50
                           transition-all duration-300 backdrop-blur-sm min-w-[120px] xs:min-w-[130px] sm:min-w-[140px]"
              >
                Découvrir
              </a>
            </div>
          </motion.div>
        </div>

      </section>



      
      {/* Section Bordeaux - Texte défilant au scroll */}
      <section className="relative py-8 sm:py-12 overflow-hidden">
        <div
          className="absolute inset-0 -z-10 w-full h-full bg-gray-50 dark:bg-background"
          aria-hidden="true"
        ></div>
        
        {/* Titre centré */}
        <div className="relative z-10 container mx-auto px-4 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-800 dark:text-black dark:text-white text-center">
            Bordeaux, élégance urbaine et confort thermique toute l'année
          </h2>
        </div>
        
        {/* Container de scroll sur toute la largeur de la page */}
        <div className="relative w-full">
          {/* Zone de scroll sur toute la largeur de la page */}
          <div 
            className="w-full h-[300px] sm:h-[350px] md:h-[300px] px-4 py-16 overflow-y-auto scrollbar-hide cursor-default"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {/* Contenu centré dans la zone élargie */}
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4 sm:space-y-5 md:space-y-6 text-center pt-4 sm:pt-6 md:pt-8 pb-12 sm:pb-16 md:pb-20">
                <p className="text-sm sm:text-base md:text-lg text-gray-800 dark:text-white leading-normal">
                  Capitale du vin et joyau du patrimoine architectural, <strong className="text-black dark:text-white">Bordeaux</strong> allie charme historique et modernité. Ses bâtiments en pierre blonde et ses appartements haussmanniens exigent des installations précises et sur mesure.
                </p>
                
                <p className="text-sm sm:text-base text-gray-800 dark:text-white leading-normal">
                  Que vous soyez dans le quartier des <strong className="text-black dark:text-white">Chartrons</strong>, <strong className="text-black dark:text-white">Saint-Michel</strong> ou <strong className="text-black dark:text-white">Caudéran</strong>, ClimGO adapte chaque installation aux spécificités thermiques de votre habitat.
                </p>
                
                <p className="text-sm sm:text-base text-gray-800 dark:text-white leading-normal">
                  Grâce à notre ancrage local et nos certifications, nous garantissons des systèmes <strong className="text-black dark:text-white">performants, sobres et discrets</strong>, parfaitement intégrés au tissu urbain bordelais.
                </p>
                
                <p className="text-base text-gray-800 dark:text-white leading-normal">
                  <strong className="text-black dark:text-white">Bordeaux</strong>, joyau d'Aquitaine, séduit autant par son patrimoine que par sa dynamique urbaine. Avec plus de 250 000 habitants, la ville conjugue art de vivre, innovation et exigence thermique.
                </p>
                
                <p className="text-base text-gray-800 dark:text-white leading-normal">
                  Entre les ruelles pavées de <strong className="text-black dark:text-white">Saint-Pierre</strong>, les boulevards animés de <strong className="text-black dark:text-white">Gambetta</strong> ou les zones résidentielles calmes de <strong className="text-black dark:text-white">Caudéran</strong>, chaque logement nécessite une approche technique adaptée.
                </p>
                
                <p className="text-base text-gray-800 dark:text-white leading-normal">
                  ClimGO s'adapte à la diversité du bâti bordelais : <strong className="text-black dark:text-white">maisons en pierre de taille</strong>, <strong className="text-black dark:text-white">échoppes du XIXe</strong>, appartements récents ou rénovés, nous maîtrisons les subtilités thermiques du territoire urbain.
                </p>
                
                <p className="text-base text-gray-800 dark:text-white leading-normal">
                  Bordeaux impose souvent des contraintes spécifiques : ventilation dans les échoppes, insonorisation dans les immeubles collectifs, respect de la <strong className="text-black dark:text-white">pierre bordelaise</strong> pour les fixations extérieures.
                </p>
                
                <p className="text-base text-gray-800 dark:text-white leading-normal">
                  Chaque PAC est posée avec attention aux <strong className="text-black dark:text-white">normes de copropriété</strong>, aux gaines existantes et aux possibilités de raccordement électrique, souvent complexes dans l'hyper-centre historique.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          
          @keyframes lightMove {
            0% {
              top: -10%;
              opacity: 0;
            }
            5% {
              opacity: 1;
            }
            95% {
              opacity: 1;
            }
            100% {
              top: 110%;
              opacity: 0;
            }
          }
        `}        </style>
      </section>

      {/* Section Services */}
      <Services />

      {/* Section Nos interventions - Timeline verticale élégante */}
      <section className="relative py-24 overflow-hidden bg-gray-50 dark:bg-background">
        
        <SimpleWrapper>
          <div className="relative z-10 max-w-6xl mx-auto px-4">
            {/* Titre avec animation */}
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-medium text-black dark:text-white mb-6">
                Nos interventions à Bordeaux
              </h2>
              <p className="text-xl text-black dark:text-white max-w-3xl mx-auto leading-relaxed">
                De la place de la Bourse aux quais de la Garonne, nous intervenons dans toute la métropole bordelaise. Chaque chantier est réalisé avec précision, pour un confort optimal été comme hiver.
              </p>
            </div>
            
            {/* Timeline */}
            <div className="relative">
              {/* Ligne centrale - cachée sur mobile, visible sur desktop */}
              <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 w-px h-full bg-gray-300 dark:bg-gray-700 hidden md:block" />
              {/* Ligne verticale mobile - visible seulement sur mobile */}
              <div className="pointer-events-none absolute left-8 top-0 w-px h-full bg-gray-300 dark:bg-gray-700 md:hidden" />
              
              {/* Lumière desktop - SEULEMENT sur desktop */}
              <div
                className="pointer-events-none absolute left-1/2 -translate-x-1/2 w-[2px] h-20 rounded-full hidden md:block"
                style={{
                  animation: 'lightMove 4s infinite linear',
                  background: 'var(--light-effect-bg)',
                  boxShadow: 'var(--light-effect-shadow)'
                }}
                aria-hidden="true"
              />

              {/* Lumière mobile - SEULEMENT sur mobile */}
              <div
                className="pointer-events-none absolute left-8 w-[3px] h-16 rounded-full block md:hidden z-5"
                style={{
                  animation: 'lightMoveMobile 4s infinite linear',
                  background: 'var(--light-effect-bg)',
                  boxShadow: 'var(--light-effect-shadow)'
                }}
                aria-hidden="true"
              />
              
              {/* Étape 1 - Responsive */}
              <div className="relative flex flex-col md:flex-row items-center mb-8 md:mb-16">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-50 dark:bg-background rounded-full shadow-2xl flex items-center justify-center z-10 mb-4 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                
                <div className="w-full md:w-5/12 md:pr-8 md:text-right text-center">
                  <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-3">Toute la métropole bordelaise</h3>
                  <p className="text-black dark:text-white leading-relaxed text-sm md:text-base">
                    Interventions dans tous les quartiers de Bordeaux, du centre historique aux quartiers modernes, en passant par les échoppes traditionnelles et les immeubles haussmanniens.
                  </p>
                </div>
              </div>
              
              {/* Étape 2 - Responsive */}
              <div className="relative flex flex-col md:flex-row items-center mb-8 md:mb-16">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-50 dark:bg-background rounded-full shadow-2xl flex items-center justify-center z-10 mb-4 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                
                <div className="w-full md:w-5/12 md:ml-auto md:pl-8 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-3">Patrimoine & Modernité</h3>
                  <p className="text-black dark:text-white leading-relaxed text-sm md:text-base">
                    Échoppes typiques, immeubles du centre historique, maisons de ville modernes : nous maîtrisons les contraintes thermiques de tous les types d'habitat à Bordeaux.
                  </p>
                </div>
              </div>
              
              {/* Étape 3 - Responsive */}
              <div className="relative flex flex-col md:flex-row items-center mb-8 md:mb-16">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-50 dark:bg-background rounded-full shadow-2xl flex items-center justify-center z-10 mb-4 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                
                <div className="w-full md:w-5/12 md:pr-8 md:text-right text-center">
                  <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-3">Service Urbain Adapté</h3>
                  <p className="text-black dark:text-white leading-relaxed text-sm md:text-base">
                    Nous intervenons même dans les zones à accès restreint, en adaptant notre logistique pour garantir la qualité sans compromis. Service rapide et finitions propres.
                  </p>
                </div>
              </div>
              
              {/* Étape 4 - Responsive */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-50 dark:bg-background rounded-full shadow-2xl flex items-center justify-center z-10 mb-4 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                <div className="w-full md:w-5/12 md:ml-auto md:pl-8 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-3">Excellence & Rigueur</h3>
                  <p className="text-black dark:text-white leading-relaxed text-sm md:text-base">
                    Notre proximité et notre rigueur font la différence : un service rapide, des finitions propres, et un accompagnement administratif complet pour vos projets bordelais.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Call-to-action */}
            <div className="text-center mt-16">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full px-8 py-4 bg-gray-50 dark:bg-background text-black dark:text-white font-semibold hover:bg-white dark:hover:bg-background transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-white"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </SimpleWrapper>
      </section>

      {/* Section 4 blocs horizontaux avec ScrollShadow HeroUI */}
      <section className="py-20 bg-gray-50 dark:bg-background">
        <SimpleWrapper>
          <div className="max-w-7xl mx-auto">
                        <div className="relative max-w-full overflow-hidden">
              {/* Ombre gauche - Desktop seulement */}
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-90 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent dark:from-background dark:via-background/80 z-10 pointer-events-none" />
              
              {/* Ombre droite - Desktop seulement */}
              <div className="hidden md:block absolute right-0 top-0 bottom-0 w-90 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent dark:from-background dark:via-background/80 z-10 pointer-events-none" />
                
                <div className="overflow-x-auto">
                <div className="flex space-x-8 min-w-max px-4" style={{ marginLeft: 'calc(50% - 144px)', marginRight: 'calc(50% - 144px)' }}>
                  {/* Bloc 1 */}
                  <div className="w-72 flex-shrink-0 bg-gray-50 dark:bg-background rounded-2xl md:shadow-lg p-6 border border-gray-100 dark:border-gray-700">
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                      Une métropole entre histoire et modernité
                    </h3>
                    <div className="space-y-3 text-black dark:text-white leading-relaxed">
                      <p>
                        <strong className="text-black dark:text-white">Bordeaux</strong>, joyau d'Aquitaine, séduit autant par son patrimoine que par sa dynamique urbaine. Avec plus de 250 000 habitants, la ville conjugue art de vivre, innovation et exigence thermique.
                      </p>
                      <p>
                        Entre les ruelles pavées de Saint-Pierre, les boulevards animés de Gambetta ou les zones résidentielles calmes de Caudéran, chaque logement nécessite une approche technique adaptée.
                      </p>
                    </div>
                  </div>
                  
                  {/* Bloc 2 */}
                  <div className="w-72 flex-shrink-0 bg-gray-50 dark:bg-background rounded-2xl md:shadow-lg p-6 border border-gray-100 dark:border-gray-700">
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                      Exemples concrets d'interventions à Bordeaux
                    </h3>
                    <div className="space-y-3 text-black dark:text-white leading-relaxed">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-foreground dark:bg-white rounded-full mt-2 flex-shrink-0"></div>
                        <p><strong>Rue Judaïque :</strong> remplacement complet d'un système de chauffage gaz par une pompe à chaleur air/eau avec ballon thermodynamique.</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-foreground dark:bg-white rounded-full mt-2 flex-shrink-0"></div>
                        <p><strong>Quartier Bacalan :</strong> pose de splits gainables dans un loft industriel reconverti, avec régulation par pièce.</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-foreground dark:bg-white rounded-full mt-2 flex-shrink-0"></div>
                        <p><strong>Rue Notre-Dame aux Chartrons :</strong> installation d'une climatisation murale discrète dans un appartement haussmannien classé.</p>
                      </div>
                    </div>
                  </div>
                  
                                    {/* Bloc 3 */}
                  <div className="w-72 flex-shrink-0 bg-gray-50 dark:bg-background rounded-2xl md:shadow-lg p-6 border border-gray-100 dark:border-gray-700">
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                      Une expertise au service du tissu urbain bordelais
                    </h3>
                    <div className="space-y-3 text-black dark:text-white leading-relaxed">
                      <p>
                        Bordeaux impose souvent des contraintes spécifiques : ventilation dans les échoppes, insonorisation dans les immeubles collectifs, respect de la pierre bordelaise pour les fixations extérieures.
                      </p>
                      <p>
                        Chaque PAC est posée avec attention aux normes de copropriété, aux gaines existantes et aux possibilités de raccordement électrique, souvent complexes dans l'hyper-centre historique.
                      </p>
                    </div>
                  </div>
                  
                  {/* Bloc 4 */}
                  <div className="w-72 flex-shrink-0 bg-gray-50 dark:bg-background rounded-2xl md:shadow-lg p-6 border border-gray-100 dark:border-gray-700">
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                      Et si on lançait votre projet bordelais ?
                    </h3>
                    <div className="space-y-3 text-black dark:text-white leading-relaxed">
                      <p>
                        Vous êtes propriétaire à <strong className="text-black dark:text-white">Bordeaux</strong> ou vous venez d'acquérir un bien à rénover ? ClimGO vous accompagne dans vos démarches d'amélioration énergétique.
                      </p>
                      <p>
                        Demandez une <strong className="text-black dark:text-white">étude gratuite</strong> pour une solution thermique à la hauteur de votre cadre de vie.
                      </p>
                      <div className="mt-4">
                        <a
                          href="/contact"
                          className="inline-flex items-center px-6 py-3 bg-gray-50 dark:bg-background text-black dark:text-white font-semibold rounded-lg hover:bg-white dark:hover:bg-background"
                        >
                          Devis gratuit
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SimpleWrapper>
      </section>



      {/* Section Pourquoi choisir ClimGO - Timeline horizontale élégante */}
      <section className="relative py-24 overflow-hidden bg-gray-50 dark:bg-background" id="why-choose-section">
        <SimpleWrapper>
          <div className="relative z-10 max-w-6xl mx-auto px-4">
            {/* Titre avec animation */}
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-medium text-black dark:text-white mb-6">
                Pourquoi choisir ClimGO à Bordeaux ?
              </h2>
              <p className="text-xl text-black dark:text-white max-w-3xl mx-auto leading-relaxed">
                Faire appel à ClimGO à Bordeaux, c'est choisir une entreprise engagée, qui comprend les particularités climatiques et architecturales de la région bordelaise.
              </p>
            </div>
            
            {/* Pourquoi choisir ClimGO à Bordeaux - Version personnalisée */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto mb-8 md:mb-12 lg:mb-16">
              {/* Expertise Locale */}
              <div className="group bg-gray-50 dark:bg-background backdrop-blur-sm rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-600/30 hover:border-black dark:hover:border-white min-h-[320px] md:min-h-[380px] lg:min-h-[420px] flex flex-col">
                <div className="text-center flex flex-col h-full">
                  <div className="bg-gray-50 dark:bg-background rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-12 h-12 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black dark:text-white mb-3 sm:mb-4 group-hover:text-black dark:group-hover:text-white transition-colors">
                    Expertise Urbaine
                  </h3>
                  <p className="text-black dark:text-white text-sm leading-relaxed mb-4 sm:mb-6 flex-grow">
                    <strong className="text-black dark:text-white">Connaissance approfondie</strong> du tissu urbain bordelais et de ses contraintes architecturales. <strong className="text-black dark:text-white">Maîtrise parfaite</strong> des spécificités locales.
                  </p>
                </div>
              </div>

              {/* Qualité Premium */}
              <div className="group bg-gray-50 dark:bg-background backdrop-blur-sm rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-600/30 hover:border-black dark:hover:border-white min-h-[320px] md:min-h-[380px] lg:min-h-[420px] flex flex-col">
                <div className="text-center flex flex-col h-full">
                  <div className="bg-gray-50 dark:bg-background rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-12 h-12 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black dark:text-white mb-3 sm:mb-4 group-hover:text-black dark:group-hover:text-white transition-colors">
                    Qualité & Discrétion
                  </h3>
                  <p className="text-black dark:text-white text-sm leading-relaxed mb-4 sm:mb-6 flex-grow">
                    <strong className="text-black dark:text-white">Équipements sélectionnés</strong> pour garantir efficacité et discrétion. <strong className="text-black dark:text-white">Durabilité</strong> même dans les immeubles anciens et échoppes rénovées.
                  </p>
                </div>
              </div>

              {/* Proximité */}
              <div className="group bg-gray-50 dark:bg-background backdrop-blur-sm rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-600/30 hover:border-black dark:hover:border-white min-h-[320px] md:min-h-[380px] lg:min-h-[420px] flex flex-col">
                <div className="text-center flex flex-col h-full">
                  <div className="bg-gray-50 dark:bg-background rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-12 h-12 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black dark:text-white mb-3 sm:mb-4 group-hover:text-black dark:group-hover:text-white transition-colors">
                    Service Rapide
                  </h3>
                  <p className="text-black dark:text-white text-sm leading-relaxed mb-4 sm:mb-6 flex-grow">
                    <strong className="text-black dark:text-white">Service rapide</strong> dans toute la métropole bordelaise, <strong className="text-black dark:text-white">finitions propres</strong> et logistique adaptée aux zones d'accès restreint.
                  </p>
                </div>
              </div>

              {/* Garantie Complète */}
              <div className="group bg-gray-50 dark:bg-background backdrop-blur-sm rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-600/30 hover:border-black dark:hover:border-white min-h-[320px] md:min-h-[380px] lg:min-h-[420px] flex flex-col">
                <div className="text-center flex flex-col h-full">
                  <div className="bg-gray-50 dark:bg-background rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-12 h-12 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black dark:text-white mb-3 sm:mb-4 group-hover:text-black dark:group-hover:text-white transition-colors">
                    Accompagnement Complet
                  </h3>
                  <p className="text-black dark:text-white text-sm leading-relaxed mb-4 sm:mb-6 flex-grow">
                    <strong className="text-black dark:text-white">Accompagnement administratif</strong> complet et <strong className="text-black dark:text-white">suivi rigoureux</strong> pour tous vos projets d'amélioration énergétique.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Call-to-action */}
            <div className="text-center mt-16">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full px-8 py-4 bg-gray-50 dark:bg-background text-black dark:text-white font-semibold hover:bg-white dark:hover:bg-background transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-white"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </SimpleWrapper>
      </section>

      {/* Section Services - Design Moderne */}
      <section className="relative py-20 overflow-hidden bg-gray-50 dark:bg-background z-10">
        {}<div className="relative z-10 max-w-7xl mx-auto px-4">
          <SimpleWrapper>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-black dark:text-white mb-6">
                Nos Solutions ClimGO
              </h2>
              <p className="text-lg text-black dark:text-white max-w-3xl mx-auto">
                Des solutions complètes et personnalisées pour votre confort thermique à Bordeaux
              </p>
            </div>
          </SimpleWrapper>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Carte 1 - Types de logements */}
            <SimpleWrapper>
              <motion.div 
                className="group relative bg-gray-50 dark:bg-background rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border-2 border-gray-200 dark:border-gray-600 min-h-[300px] md:min-h-[380px] lg:min-h-[400px] flex flex-col"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Icône avec effet de brillance */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gray-50 dark:bg-background rounded-2xl flex items-center justify-center mx-auto group-hover:bg-white dark:group-hover:bg-background transition-all duration-300 border-2 border-black dark:border-white">
                    <svg className="w-8 h-8 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    </svg>
                  </div>
                  
                </div>

                <h3 className="text-2xl font-bold text-black dark:text-white mb-4 text-center">Types de logements desservis</h3>
                <p className="text-black dark:text-white leading-relaxed text-center text-lg flex-grow">
                  Échoppes typiques, immeubles du centre historique, maisons de ville modernes : nous maîtrisons les contraintes thermiques de tous les types d'habitat à Bordeaux.
                </p>

                {/* Badge de service */}
                <div className="mt-6 text-center">
                  <span className="inline-block text-black dark:text-white text-sm font-medium px-4 py-2 rounded-full">
                    Tous types d'habitats
                  </span>
                </div>
              </motion.div>
            </SimpleWrapper>

            {/* Carte 2 - Processus d'installation */}
            <SimpleWrapper>
              <motion.div 
                className="group relative bg-gray-50 dark:bg-background rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border-2 border-gray-200 dark:border-gray-600 min-h-[300px] md:min-h-[380px] lg:min-h-[400px] flex flex-col"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Icône avec effet de brillance */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gray-50 dark:bg-background rounded-2xl flex items-center justify-center mx-auto group-hover:bg-white dark:group-hover:bg-background transition-all duration-300 border-2 border-black dark:border-white">
                    <svg className="w-8 h-8 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                  </div>
                  
                </div>

                <h3 className="text-2xl font-bold text-black dark:text-white mb-4 text-center">Processus d'installation</h3>
                <p className="text-black dark:text-white leading-relaxed text-center text-lg flex-grow">
                  Un projet démarre toujours par une visite technique sur place. Nous établissons ensuite un devis précis, avant de programmer une installation rapide, propre et certifiée conforme.
                </p>

                {/* Badge de service */}
                <div className="mt-6 text-center">
                  <span className="inline-block bg-gray-50 dark:bg-background text-black dark:text-white text-sm font-medium px-4 py-2 rounded-full">
                    Devis gratuit
                  </span>
                </div>
              </motion.div>
            </SimpleWrapper>

            {/* Carte 3 - Entretien & maintenance */}
            <SimpleWrapper>
              <motion.div 
                className="group relative bg-gray-50 dark:bg-background rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border-2 border-gray-200 dark:border-gray-600 min-h-[300px] md:min-h-[380px] lg:min-h-[400px] flex flex-col"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Icône avec effet de brillance */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gray-50 dark:bg-background rounded-2xl flex items-center justify-center mx-auto group-hover:bg-white dark:group-hover:bg-background transition-all duration-300 border-2 border-black dark:border-white">
                    <svg className="w-8 h-8 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                    </svg>
                  </div>
                  
                </div>

                <h3 className="text-2xl font-bold text-black dark:text-white mb-4 text-center">Entretien & maintenance</h3>
                <p className="text-black dark:text-white leading-relaxed text-center text-lg flex-grow">
                  ClimGO assure un suivi complet de vos équipements, avec des interventions de maintenance planifiées pour préserver performances et économies d'énergie, année après année.
                </p>

                {/* Badge de service */}
                <div className="mt-6 text-center">
                  <span className="inline-block bg-gray-50 dark:bg-background text-black dark:text-white text-sm font-medium px-4 py-2 rounded-full">
                    Suivi personnalisé
                  </span>
                </div>
              </motion.div>
            </SimpleWrapper>

            {/* Carte 4 - Aides financières */}
            <SimpleWrapper>
              <motion.div 
                className="group relative bg-gray-50 dark:bg-background rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border-2 border-gray-200 dark:border-gray-600 min-h-[300px] md:min-h-[380px] lg:min-h-[400px] flex flex-col"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Icône avec effet de brillance */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gray-50 dark:bg-background rounded-2xl flex items-center justify-center mx-auto group-hover:bg-white dark:group-hover:bg-background transition-all duration-300 border-2 border-black dark:border-white">
                    <svg className="w-8 h-8 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                    </svg>
                  </div>
                  
                </div>

                <h3 className="text-2xl font-bold text-black dark:text-white mb-4 text-center">Aides financières à Bordeaux</h3>
                <p className="text-black dark:text-white leading-relaxed text-center text-lg flex-grow">
                  MaPrimeRénov', CEE, Éco-PTZ… à Bordeaux, de nombreuses aides sont accessibles. Nous vous aidons à maximiser vos subventions sans vous perdre dans la paperasse.
                </p>

                {/* Badge de service */}
                <div className="mt-6 text-center">
                  <span className="inline-block text-black dark:text-white text-sm font-medium px-4 py-2 rounded-full">
                    Accompagnement complet
                  </span>
                </div>
              </motion.div>
            </SimpleWrapper>
          </div>

          {/* Call-to-action en bas */}
          <SimpleWrapper>
            <div className="text-center mt-16">
              <p className="text-black dark:text-white mb-6 text-lg">
                Prêt à améliorer votre confort thermique ?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full px-8 py-4 bg-gray-50 dark:bg-background text-black dark:text-white font-semibold hover:bg-white dark:hover:bg-background transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-white"
              >
                Découvrir nos solutions
              </Link>
            </div>
          </SimpleWrapper>
        </div>
      </section>

      {/* Section Témoignages Clients */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <SimpleWrapper>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 dark:text-white mb-4 px-4">
                Témoignages clients
              </h2>
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="flex">
                  {Array.from({ length: 5 }, (_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
                  5.0
                </span>
                <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                  (11 témoignages)
                </span>
              </div>
              <div className="w-20 sm:w-24 h-1 bg-black dark:bg-white mx-auto"></div>
            </div>
          </SimpleWrapper>

          {/* Carrousel horizontal infini avec animation CSS */}
          <div className="w-full overflow-hidden relative">
            {/* Gradient de flou gauche */}
            <div className="absolute top-0 left-0 bottom-0 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-gray-50 dark:from-background to-transparent z-10 pointer-events-none" />
            
            {/* Gradient de flou droit */}
            <div className="absolute top-0 right-0 bottom-0 w-12 sm:w-16 md:w-20 bg-gradient-to-l from-gray-50 dark:from-background to-transparent z-10 pointer-events-none" />
            
            <div 
              className="flex animate-scroll hover:animate-pause"
              style={{
                width: `${(6 * 2) * 320}px`,
                animationDuration: `36s`
              }}
            >
              {/* Première série d'avis */}
              {/* Cecilia Arago - Pages Jaunes */}
              <div className="flex-shrink-0 w-[300px] sm:w-[360px] mx-1 sm:mx-2">
                <div className="bg-white dark:bg-card backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700 min-h-[320px] sm:min-h-[380px] flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-3 bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white font-semibold text-base sm:text-lg border-2 border-gray-200 dark:border-gray-500">
                      C
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                        Cecilia Arago
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        {Array.from({ length: 5 }, (_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        ))}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Pages Jaunes</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1 overflow-hidden line-clamp-6">
                    <span className="text-gray-400">"</span>
                    J'ai eu une panne de climatisation en pleine chaleur d'été, ClimGO est intervenu rapidement. Service sérieux, ponctuel et professionnel.
                    <span className="text-gray-400">"</span>
                  </p>
                  
                  <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-2 sm:pt-3">
                    <span className="font-medium">Août 2025</span>
                    <a href="/climatisation" className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-500 dark:hover:text-blue-300 hover:underline transition-colors">Climatisation</a>
                  </div>
                </div>
              </div>

              {/* Gauthier Nicolas - Pages Jaunes */}
              <div className="flex-shrink-0 w-[300px] sm:w-[360px] mx-1 sm:mx-2">
                <div className="bg-white dark:bg-card backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700 min-h-[320px] sm:min-h-[380px] flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-3 bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white font-semibold text-base sm:text-lg border-2 border-gray-200 dark:border-gray-500">
                      G
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                        Gauthier Nicolas
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        {Array.from({ length: 5 }, (_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        ))}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Pages Jaunes</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1 overflow-hidden line-clamp-6">
                    <span className="text-gray-400">"</span>
                    Un vrai pro qui trouve la panne là où d'autres changent tout. Travail propre, honnête, rapide et efficace.
                    <span className="text-gray-400">"</span>
                  </p>
                  
                  <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-2 sm:pt-3">
                    <span className="font-medium">Juillet 2025</span>
                    <a href="/chauffage" className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-500 dark:hover:text-blue-300 hover:underline transition-colors">PAC</a>
                  </div>
                </div>
              </div>

              {/* Yoan Demondion - Google */}
              <div className="flex-shrink-0 w-[300px] sm:w-[360px] mx-1 sm:mx-2">
                <div className="bg-white dark:bg-card backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700 min-h-[320px] sm:min-h-[380px] flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-3 bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white font-semibold text-base sm:text-lg border-2 border-gray-200 dark:border-gray-500">
                      Y
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                        Yoan Demondion
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        {Array.from({ length: 5 }, (_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        ))}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Google • Local Guide</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1 overflow-hidden line-clamp-6">
                    <span className="text-gray-400">"</span>
                    Très satisfait de l'intervention pour mon système gainable. Travail propre et professionnel. Je recommande !
                    <span className="text-gray-400">"</span>
                  </p>
                  
                  <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-2 sm:pt-3">
                    <span className="font-medium">Il y a 2 mois</span>
                    <a href="/climatisation" className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-500 dark:hover:text-blue-300 hover:underline transition-colors">Gainable</a>
                  </div>
                </div>
              </div>

              {/* Paul Challat - Google */}
              <div className="flex-shrink-0 w-[300px] sm:w-[360px] mx-1 sm:mx-2">
                <div className="bg-white dark:bg-card backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700 min-h-[320px] sm:min-h-[380px] flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-3 bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white font-semibold text-base sm:text-lg border-2 border-gray-200 dark:border-gray-500">
                      P
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                        Paul Challat
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        {Array.from({ length: 5 }, (_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        ))}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Google</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1 overflow-hidden line-clamp-6">
                    <span className="text-gray-400">"</span>
                    Au Top ! Très bonne relation client. Personnel de très bons conseils :)
                    <span className="text-gray-400">"</span>
                  </p>
                  
                  <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-2 sm:pt-3">
                    <span className="font-medium">Il y a 2 mois</span>
                    <a href="/blog" className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-500 dark:hover:text-blue-300 hover:underline transition-colors">Conseil</a>
                  </div>
                </div>
              </div>

              {/* Jérôme Bernard - Google */}
              <div className="flex-shrink-0 w-[300px] sm:w-[360px] mx-1 sm:mx-2">
                <div className="bg-white dark:bg-card backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700 min-h-[320px] sm:min-h-[380px] flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-3 bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white font-semibold text-base sm:text-lg border-2 border-gray-200 dark:border-gray-500">
                      J
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                        Jérôme Bernard
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        {Array.from({ length: 5 }, (_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        ))}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Google</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1 overflow-hidden line-clamp-6">
                    <span className="text-gray-400">"</span>
                    Jeune entrepreneur avec des qualités d'écoute et un professionnalisme à la hauteur. Je recommande.
                    <span className="text-gray-400">"</span>
                  </p>
                  
                  <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-2 sm:pt-3">
                    <span className="font-medium">Il y a 2 mois</span>
                    <a href="/climatisation" className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-500 dark:hover:text-blue-300 hover:underline transition-colors">Climatisation</a>
                  </div>
                </div>
              </div>

              {/* Lilou Auvray - Google */}
              <div className="flex-shrink-0 w-[300px] sm:w-[360px] mx-1 sm:mx-2">
                <div className="bg-white dark:bg-card backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700 min-h-[320px] sm:min-h-[380px] flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-3 bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white font-semibold text-base sm:text-lg border-2 border-gray-200 dark:border-gray-500">
                      L
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                        Lilou Auvray
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        {Array.from({ length: 5 }, (_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        ))}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Google • Local Guide</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1 overflow-hidden line-clamp-6">
                    <span className="text-gray-400">"</span>
                    Travail soigné et rapide, le résultat est impeccable. Je recommande !
                    <span className="text-gray-400">"</span>
                  </p>
                  
                  <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-2 sm:pt-3">
                    <span className="font-medium">Il y a 2 mois</span>
                    <a href="/services" className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-500 dark:hover:text-blue-300 hover:underline transition-colors">Installation</a>
                  </div>
                </div>
              </div>

              {/* Duplication pour l'effet infini */}
              {/* Cecilia Arago - Pages Jaunes */}
              <div className="flex-shrink-0 w-[300px] sm:w-[360px] mx-1 sm:mx-2">
                <div className="bg-white dark:bg-card backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700 min-h-[320px] sm:min-h-[380px] flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-3 bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white font-semibold text-base sm:text-lg border-2 border-gray-200 dark:border-gray-500">
                      C
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                        Cecilia Arago
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        {Array.from({ length: 5 }, (_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        ))}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Pages Jaunes</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1 overflow-hidden line-clamp-6">
                    <span className="text-gray-400">"</span>
                    J'ai eu une panne de climatisation en pleine chaleur d'été, ClimGO est intervenu rapidement. Service sérieux, ponctuel et professionnel.
                    <span className="text-gray-400">"</span>
                  </p>
                  
                  <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-2 sm:pt-3">
                    <span className="font-medium">Août 2025</span>
                    <a href="/climatisation" className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-500 dark:hover:text-blue-300 hover:underline transition-colors">Climatisation</a>
                  </div>
                </div>
              </div>

              {/* Gauthier Nicolas - Pages Jaunes */}
              <div className="flex-shrink-0 w-[300px] sm:w-[360px] mx-1 sm:mx-2">
                <div className="bg-white dark:bg-card backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700 min-h-[320px] sm:min-h-[380px] flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-3 bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white font-semibold text-base sm:text-lg border-2 border-gray-200 dark:border-gray-500">
                      G
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                        Gauthier Nicolas
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        {Array.from({ length: 5 }, (_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        ))}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Pages Jaunes</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1 overflow-hidden line-clamp-6">
                    <span className="text-gray-400">"</span>
                    Un vrai pro qui trouve la panne là où d'autres changent tout. Travail propre, honnête, rapide et efficace.
                    <span className="text-gray-400">"</span>
                  </p>
                  
                  <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-2 sm:pt-3">
                    <span className="font-medium">Juillet 2025</span>
                    <a href="/chauffage" className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-500 dark:hover:text-blue-300 hover:underline transition-colors">PAC</a>
                  </div>
                </div>
              </div>

              {/* Yoan Demondion - Google */}
              <div className="flex-shrink-0 w-[300px] sm:w-[360px] mx-1 sm:mx-2">
                <div className="bg-white dark:bg-card backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700 min-h-[320px] sm:min-h-[380px] flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-3 bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white font-semibold text-base sm:text-lg border-2 border-gray-200 dark:border-gray-500">
                      Y
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                        Yoan Demondion
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        {Array.from({ length: 5 }, (_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        ))}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Google • Local Guide</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1 overflow-hidden line-clamp-6">
                    <span className="text-gray-400">"</span>
                    Très satisfait de l'intervention pour mon système gainable. Travail propre et professionnel. Je recommande !
                    <span className="text-gray-400">"</span>
                  </p>
                  
                  <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-2 sm:pt-3">
                    <span className="font-medium">Il y a 2 mois</span>
                    <a href="/climatisation" className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-500 dark:hover:text-blue-300 hover:underline transition-colors">Gainable</a>
                  </div>
                </div>
              </div>

              {/* Paul Challat - Google */}
              <div className="flex-shrink-0 w-[300px] sm:w-[360px] mx-1 sm:mx-2">
                <div className="bg-white dark:bg-card backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700 min-h-[320px] sm:min-h-[380px] flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-3 bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white font-semibold text-base sm:text-lg border-2 border-gray-200 dark:border-gray-500">
                      P
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                        Paul Challat
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        {Array.from({ length: 5 }, (_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        ))}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Google</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1 overflow-hidden line-clamp-6">
                    <span className="text-gray-400">"</span>
                    Au Top ! Très bonne relation client. Personnel de très bons conseils :)
                    <span className="text-gray-400">"</span>
                  </p>
                  
                  <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-2 sm:pt-3">
                    <span className="font-medium">Il y a 2 mois</span>
                    <a href="/blog" className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-500 dark:hover:text-blue-300 hover:underline transition-colors">Conseil</a>
                  </div>
                </div>
              </div>

              {/* Jérôme Bernard - Google */}
              <div className="flex-shrink-0 w-[300px] sm:w-[360px] mx-1 sm:mx-2">
                <div className="bg-white dark:bg-card backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700 min-h-[320px] sm:min-h-[380px] flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-3 bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white font-semibold text-base sm:text-lg border-2 border-gray-200 dark:border-gray-500">
                      J
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                        Jérôme Bernard
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        {Array.from({ length: 5 }, (_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        ))}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Google</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1 overflow-hidden line-clamp-6">
                    <span className="text-gray-400">"</span>
                    Jeune entrepreneur avec des qualités d'écoute et un professionnalisme à la hauteur. Je recommande.
                    <span className="text-gray-400">"</span>
                  </p>
                  
                  <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-2 sm:pt-3">
                    <span className="font-medium">Il y a 2 mois</span>
                    <a href="/climatisation" className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-500 dark:hover:text-blue-300 hover:underline transition-colors">Climatisation</a>
                  </div>
                </div>
              </div>

              {/* Lilou Auvray - Google */}
              <div className="flex-shrink-0 w-[300px] sm:w-[360px] mx-1 sm:mx-2">
                <div className="bg-white dark:bg-card backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700 min-h-[320px] sm:min-h-[380px] flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-3 bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white font-semibold text-base sm:text-lg border-2 border-gray-200 dark:border-gray-500">
                      L
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                        Lilou Auvray
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        {Array.from({ length: 5 }, (_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        ))}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Google • Local Guide</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1 overflow-hidden line-clamp-6">
                    <span className="text-gray-400">"</span>
                    Travail soigné et rapide, le résultat est impeccable. Je recommande !
                    <span className="text-gray-400">"</span>
                  </p>
                  
                  <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-2 sm:pt-3">
                    <span className="font-medium">Il y a 2 mois</span>
                    <a href="/services" className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-500 dark:hover:text-blue-300 hover:underline transition-colors">Installation</a>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <SimpleWrapper>
            <div className="text-center mt-12 space-y-4">
              {/* Boutons CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://g.page/r/CYU8G8pY5uo1EBM/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="flex items-center gap-1 whitespace-nowrap">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Laissez votre avis Google
                  </span>
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-white dark:bg-background border-2 border-blue-600 dark:border-white text-blue-600 dark:text-white hover:bg-blue-50 dark:hover:bg-muted font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span className="whitespace-nowrap">Nous contacter</span>
                </a>
              </div>
              
              <p className="text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                Ces témoignages reflètent notre engagement quotidien : un service professionnel, des conseils personnalisés et des installations de qualité sur tout le Bassin d'Arcachon et la Gironde.
              </p>
            </div>
          </SimpleWrapper>
        </div>
      </section>

      {/* Section Liste des Villes - Juste au-dessus de la carte */}
      <CityLinksList />

      {/* Section Carte en pleine largeur */}
              <section className="relative w-full overflow-hidden bg-gray-50 dark:bg-background">
        <div className="relative z-10 w-full px-4">
          <SimpleWrapper>
            <div className="relative w-full">
              {/* Carte Google Maps en pleine largeur */}
              <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] transform hover:scale-[1.02] transition-transform duration-700 ease-out">
                <iframe
                  src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&q=Bordeaux,France&zoom=12&center=44.8378,-0.5792`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ClimGO - Zone d'intervention à Bordeaux, Gironde"
                  aria-label="Carte Google Maps montrant la zone d'intervention de ClimGO à Bordeaux et dans la métropole bordelaise"
                  className="w-full h-full"
                />
              </div>
            </div>
          </SimpleWrapper>
        </div>
      </section>

      {/* Schéma JSON-LD pour Bordeaux */}
      <CitySchema {...cityData} />

    </main>
  );
}


