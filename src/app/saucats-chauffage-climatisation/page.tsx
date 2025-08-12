'use client';

import Link from "next/link";
import { motion } from 'framer-motion';
import { Search, MapPin } from "lucide-react";
import { useState } from "react";
import { SimpleWrapper } from '@/components/ui/SimpleWrapper';
import Services from '@/components/Services';
import GoogleReviews from '@/components/GoogleReviews';
import FAQChat from '@/components/FAQChat';
import { getCityFAQSet, getCityInitials } from '@/data/faqsOptimized';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Saucats() {



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
      { name: 'Parentis-en-Born', url: '/parentis-chauffage-climatisation' },
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
      { name: "Villenave-d'Ornon", url: '/villenave-d-ornon-chauffage-climatisation' },
      { name: 'Bègles', url: '/begles-chauffage-climatisation' },
      { name: 'Lacanau', url: '/lacanau-chauffage-climatisation' },
      { name: 'Saint-Loubès', url: '/saint-loubes-chauffage-climatisation' },
      { name: "Saint-Jean-d'Illac", url: '/saint-jean-d-illac-chauffage-climatisation' },
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
          <Search className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-600 dark:text-gray-400 w-3 sm:w-4 h-3 sm:h-4" />
          <input
            type="text"
            placeholder="Rechercher votre ville..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowSearchResults(e.target.value.length > 0);
            }}
            onFocus={() => setShowSearchResults(searchQuery.length > 0)}
            className="w-full bg-white/20 dark:bg-white/10 backdrop-blur-md border border-black/40 dark:border-white/30 rounded-lg px-6 sm:px-8 py-1.5 sm:py-2 text-black dark:text-white placeholder-gray-600 dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent text-xs sm:text-sm"
          />
          <MapPin className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-gray-600 dark:text-gray-400 w-3 sm:w-4 h-3 sm:h-4" />
        </div>
        
        {/* Résultats de recherche */}
        {showSearchResults && (
                          <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 dark:bg-black/95 backdrop-blur-md rounded-xl shadow-2xl border border-black/20 dark:border-white/30 max-h-60 overflow-y-auto z-50">
            {filteredCities.length > 0 ? (
              filteredCities.slice(0, 8).map((city, index) => (
                <Link
                  key={index}
                  href={city.url}
                  onClick={() => {
                    setSearchQuery('');
                    setShowSearchResults(false);
                  }}
                  className="block w-full text-left px-4 py-3 hover:bg-blue-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  {city.name}
                </Link>
              ))
            ) : (
              <div className="px-4 py-3 text-gray-600 dark:text-gray-500">
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
      <section className="relative h-[90vh] min-h-[500px] sm:min-h-[600px] md:min-h-[640px] w-full overflow-hidden bg-black dark:bg-white text-white dark:text-black">
        {/* Zone vidéo - Responsive avec adaptation mobile */}
        <motion.div
          className="absolute top-0 right-0 h-full w-full sm:w-2/3"
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Version mobile - vidéo plein écran */}
          <div className="block sm:hidden relative h-full w-full">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              src="/mp4/saucats.mp4"
            />
          </div>
          
          {/* Version desktop - forme diagonale */}
          <div 
            className="hidden sm:block relative h-full w-full"
            style={{
              clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)'
            }}
          >
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              src="/mp4/saucats.mp4"
            />
          </div>
        </motion.div>

        {/* Forme diagonale sur le premier tiers - Cachée sur mobile */}
        <div 
          className="hidden sm:block absolute top-0 left-0 h-full w-2/5 bg-white dark:bg-black z-5"
          style={{
            clipPath: 'polygon(0% 0%, 85% 0%, 100% 100%, 0% 100%)'
          }}
        />

        {/* Overlay sombre pour mobile */}
        <div className="sm:hidden absolute inset-0 bg-black/40 dark:bg-black/60 z-5"></div>

        {/* Contenu côté gauche - Responsive */}
        <div className="relative z-10 flex h-full items-center">
          <motion.div
            className="w-full sm:max-w-xl md:max-w-2xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight mb-3 sm:mb-4 md:mb-6 text-white sm:text-black dark:text-white break-words leading-tight">
              ClimGO à Saucats
            </h1>
            <p className="text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl text-white/90 sm:text-black/90 dark:text-white/90 mb-3 sm:mb-4 md:mb-6 lg:mb-8 leading-relaxed max-w-[280px] sm:max-w-sm md:max-w-lg lg:max-w-none whitespace-pre-line">
              Votre expert en chauffage et climatisation{'\n'}entre nature et proximité urbaine
            </p>

            {/* Composant de recherche de villes */}
            <div className="mb-3 sm:mb-4 md:mb-6 lg:mb-8">
              <CitySearch />
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 text-xs sm:text-sm md:text-base font-medium
                           bg-black dark:bg-white text-white dark:text-black hover:bg-white/90 dark:hover:bg-black/90
                           border border-black/20 dark:border-white/20
                           transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Devis gratuit
              </Link>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 text-xs sm:text-sm md:text-base font-medium
                           border-2 border-white/50 sm:border-black/50 dark:border-white/30 text-white sm:text-black dark:text-white hover:bg-white/15 sm:hover:bg-black/15 dark:hover:bg-white/10 hover:border-white/70 sm:hover:border-black/70 dark:hover:border-white/50
                           transition-all duration-300 backdrop-blur-sm"
              >
                Découvrir
              </a>
            </div>
          </motion.div>
        </div>

        {/* Indicateur de scroll */}
        <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
          <div className="h-8 w-[1px] bg-white/50 sm:bg-black/50 dark:bg-white/50 animate-pulse" />
        </div>
      </section>


      
      <div className="bg-white dark:bg-black py-4">
        <Breadcrumb className="max-w-7xl mx-auto px-4">
        <BreadcrumbList className="text-gray-600 dark:text-gray-300">
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                Accueil
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/zones-interventions" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                Zones d'intervention
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-gray-500 dark:text-gray-400">
              Saucats
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
        </Breadcrumb>
      </div>
      
      {/* Section Saucats - Texte défilant au scroll */}
      <section className="relative py-12 overflow-hidden">
        <div
          className="absolute inset-0 -z-10 w-full h-full bg-white dark:bg-black"
          aria-hidden="true"
        ></div>
        
        {/* Titre centré */}
        <div className="relative z-10 container mx-auto px-4 mb-4">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-800 dark:text-white text-center">
            Chauffage Climatisation Saucats - ClimGO Sud Gironde
          </h2>
        </div>
        
        {/* Container de scroll sur toute la largeur de la page */}
        <div className="relative w-full">
          {/* Gradient de flou du haut */}
          <div 
            className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white dark:from-black to-transparent z-10 pointer-events-none"
          />
          
          {/* Zone de scroll sur toute la largeur de la page */}
          <div 
            className="w-full h-[300px] px-4 py-16 overflow-y-auto scrollbar-hide cursor-default"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {/* Contenu centré dans la zone élargie */}
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6 text-center pt-8 pb-20">
                <p className="text-lg text-gray-800 dark:text-gray-200 leading-normal">
                  À la croisée entre la <strong className="text-gray-900 dark:text-white">forêt girondine</strong> et les grandes zones naturelles protégées, <strong className="text-gray-900 dark:text-white">Saucats</strong> offre un cadre de vie paisible à ses habitants. Cette commune séduit autant les familles que les actifs recherchant calme et proximité avec Bordeaux.
                </p>
                
                <p className="text-base text-gray-800 dark:text-gray-200 leading-normal">
                  Des <strong className="text-gray-900 dark:text-white">quartiers pavillonnaires</strong> aux <strong className="text-gray-900 dark:text-white">habitations anciennes du centre</strong>, ClimGO adapte ses solutions aux besoins des logements saucatais, qu'ils soient neufs ou à rénover.
                </p>
                
                <p className="text-base text-gray-800 dark:text-gray-200 leading-normal">
                  Nous prenons en compte les <strong className="text-gray-900 dark:text-white">exigences thermiques de la région</strong> pour concevoir des installations pérennes, performantes et parfaitement intégrées à leur environnement naturel.
                </p>
                
                <p className="text-base text-gray-800 dark:text-gray-200 leading-normal">
                  Notre expertise locale nous permet de maîtriser les <strong className="text-gray-900 dark:text-white">spécificités climatiques</strong> du secteur : l'humidité forestière, les variations saisonnières et les contraintes d'accès propres aux zones résidentielles saucataises.
                </p>
                
                <p className="text-base text-gray-800 dark:text-gray-200 leading-normal">
                  À seulement <strong className="text-gray-900 dark:text-white">25 minutes de Bordeaux</strong>, Saucats bénéficie d'un environnement préservé où nos installations s'intègrent harmonieusement dans le respect de la <strong className="text-gray-900 dark:text-white">qualité paysagère</strong> locale.
                </p>
                
                <p className="text-base text-gray-800 dark:text-gray-200 leading-normal">
                  De la <strong className="text-gray-900 dark:text-white">pompe à chaleur silencieuse</strong> à la <strong className="text-gray-900 dark:text-white">climatisation discrète</strong>, nos solutions s'adaptent aux maisons avec grands terrains comme aux constructions plus compactes du centre-bourg.
                </p>
                
                <p className="text-base text-gray-800 dark:text-gray-200 leading-normal">
                  Notre équipe d'<strong className="text-gray-900 dark:text-white">experts certifiés RGE</strong> intervient dans tous les secteurs de Saucats, des <strong className="text-gray-900 dark:text-white">lotissements récents</strong> aux <strong className="text-gray-900 dark:text-white">maisons traditionnelles</strong>, avec un service personnalisé.
                </p>
                
                <p className="text-base text-gray-800 dark:text-gray-200 leading-normal">
                  Nous garantissons un <strong className="text-gray-900 dark:text-white">accompagnement complet</strong> de A à Z : étude préalable, devis détaillé, installation soignée et maintenance préventive pour votre tranquillité d'esprit absolue.
                </p>
              </div>
            </div>
          </div>
          
          {/* Gradient de flou du bas */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-70 bg-gradient-to-t from-white dark:from-black to-transparent z-10 pointer-events-none"
          />
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
      <section className="relative py-24 overflow-hidden bg-white dark:bg-black">
        
        <SimpleWrapper>
          <div className="relative z-10 max-w-6xl mx-auto px-4">
            {/* Titre avec animation */}
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-medium text-gray-900 dark:text-white mb-6">
                Nos interventions à Saucats
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                De la route de Léognan aux quartiers résidentiels du centre-bourg, nous intervenons dans tous les secteurs de Saucats avec des solutions personnalisées pour votre confort optimal.
              </p>
            </div>
            
            {/* Timeline verticale */}
            <div className="relative">
              {/* Ligne de connexion */}
              <div className="absolute left-1/2 transform -translate-x-px w-0.5 h-full bg-gray-300 dark:bg-gray-600" />
              
              {/* Effet de lumière défilante */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-16 rounded-full z-5 light-mode:hidden" 
                   style={{
                     animation: 'lightMove 4s infinite linear',
                     background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 20%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0.8) 80%, rgba(255, 255, 255, 0) 100%)',
                     boxShadow: '0 0 20px rgba(255, 255, 255, 0.6), 0 0 40px rgba(255, 255, 255, 0.3)'
                   }} />
              
              {/* Effet de lumière défilante pour le mode clair */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-16 rounded-full z-5 dark:hidden" 
                   style={{
                     animation: 'lightMove 4s infinite linear',
                     background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 20%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0.8) 80%, rgba(0, 0, 0, 0) 100%)',
                     boxShadow: '0 0 20px rgba(0, 0, 0, 0.6), 0 0 40px rgba(0, 0, 0, 0.3)'
                   }} />
              
              {/* Étape 1 */}
              <div className="relative flex items-center mb-16">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white dark:bg-black rounded-full shadow-2xl flex items-center justify-center z-10">
                  <svg className="w-8 h-8 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                
                <div className="w-5/12 pr-8 text-right">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Centre-bourg & zones résidentielles</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Interventions dans tous les secteurs de Saucats, du centre historique aux lotissements récents, avec des solutions adaptées à chaque type d'habitat et d'environnement naturel.
                  </p>
                </div>
              </div>
              
              {/* Étape 2 */}
              <div className="relative flex items-center mb-16">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white dark:bg-black rounded-full shadow-2xl flex items-center justify-center z-10">
                  <svg className="w-8 h-8 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                
                <div className="w-5/12 ml-auto pl-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Habitat traditionnel & moderne</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Solutions spécialement conçues pour les maisons individuelles avec grands terrains, constructions en bois ou traditionnelles, avec respect de l'intégration paysagère.
                  </p>
                </div>
              </div>
              
              {/* Étape 3 */}
              <div className="relative flex items-center mb-16">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white dark:bg-black rounded-full shadow-2xl flex items-center justify-center z-10">
                  <svg className="w-8 h-8 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                
                <div className="w-5/12 pr-8 text-right">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Service nature et proximité</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Interventions respectueuses de l'environnement forestier de Saucats, avec des équipements silencieux et un service de proximité privilégiant votre tranquillité.
                  </p>
                </div>
              </div>
              
              {/* Étape 4 */}
              <div className="relative flex items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white dark:bg-black rounded-full shadow-2xl flex items-center justify-center z-10">
                  <svg className="w-8 h-8 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                <div className="w-5/12 ml-auto pl-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Qualité et durabilité</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Chaque installation respecte les plus hauts standards de qualité, avec certification RGE et garantie étendue pour une satisfaction durable et un confort optimal.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Call-to-action */}
            <div className="text-center mt-16">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-full hover:bg-gray-700 dark:hover:bg-gray-200 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Demander un devis
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </SimpleWrapper>
      </section>

      {/* Section 4 blocs horizontaux avec ScrollShadow HeroUI */}
      <section className="py-20 bg-white dark:bg-black">
        <SimpleWrapper>
          <div className="max-w-7xl mx-auto">
                        <div className="relative max-w-full overflow-hidden">
              {/* Ombre gauche - Desktop seulement */}
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-90 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-black dark:via-black/80 z-10 pointer-events-none" />
              
              {/* Ombre droite - Desktop seulement */}
              <div className="hidden md:block absolute right-0 top-0 bottom-0 w-90 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-black dark:via-black/80 z-10 pointer-events-none" />
                
                <div className="overflow-x-auto">
                <div className="flex space-x-8 min-w-max px-4" style={{ marginLeft: 'calc(50% - 144px)', marginRight: 'calc(50% - 144px)' }}>
                  {/* Bloc 1 */}
                  <div className="w-72 flex-shrink-0 bg-white dark:bg-black rounded-2xl md:shadow-lg p-6 border border-gray-100 dark:border-gray-700">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Un cadre naturel et résidentiel préservé
                    </h3>
                    <div className="space-y-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                      <p>
                        À seulement 25 minutes de Bordeaux, <strong className="text-gray-900 dark:text-white">Saucats</strong> offre un environnement paisible en lisière de la forêt des Landes. Cette commune de près de 2 500 habitants séduit les familles recherchant calme, espace et qualité de vie.
                      </p>
                      <p>
                        Entre maisons individuelles avec grands terrains, lotissements récents et bâtis traditionnels, Saucats présente une diversité architecturale idéale pour l'intégration de systèmes performants.
                      </p>
                    </div>
                  </div>
                  
                  {/* Bloc 2 */}
                  <div className="w-72 flex-shrink-0 bg-white dark:bg-black rounded-2xl md:shadow-lg p-6 border border-gray-100 dark:border-gray-700">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Exemples concrets d'interventions à Saucats
                    </h3>
                    <div className="space-y-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p><strong>Chemin de la Forge :</strong> installation d'une pompe à chaleur air/eau pour une maison neuve en zone Bbio.</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p><strong>Route de Léognan :</strong> pose d'un climatiseur mural Daikin dans un salon cathédrale, avec gestion domotique.</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p><strong>Allée du Bosquet :</strong> entretien annuel d'une installation multisplit dans une maison de 200 m² avec étage.</p>
                      </div>
                    </div>
                  </div>
                  
                                    {/* Bloc 3 */}
                  <div className="w-72 flex-shrink-0 bg-white dark:bg-black rounded-2xl md:shadow-lg p-6 border border-gray-100 dark:border-gray-700">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Une expertise pensée pour le secteur saucatais
                    </h3>
                    <div className="space-y-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                      <p>
                        À Saucats, les distances entre habitations, la végétation abondante et les zones à l'écart du réseau urbain nécessitent des installations robustes et bien dimensionnées. Nos équipements sont prévus pour résister aux conditions extérieures.
                      </p>
                      <p>
                        Nous veillons également à l'intégration esthétique de nos systèmes, notamment dans les maisons ossature bois ou à bardage, très présentes dans la commune.
                      </p>
                    </div>
                  </div>
                  
                  {/* Bloc 4 */}
                  <div className="w-72 flex-shrink-0 bg-white dark:bg-black rounded-2xl md:shadow-lg p-6 border border-gray-100 dark:border-gray-700">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Discutons ensemble de votre projet à Saucats
                    </h3>
                    <div className="space-y-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                      <p>
                        Que vous habitiez le centre de <strong className="text-gray-900 dark:text-white">Saucats</strong> ou ses hameaux environnants, nous sommes à votre écoute pour tous vos besoins en chauffage, climatisation ou chauffe-eau.
                      </p>
                      <p>
                        Demandez votre <strong className="text-gray-900 dark:text-white">devis personnalisé</strong> en quelques clics ou appelez-nous directement.
                      </p>
                      <div className="mt-4">
                        <a
                          href="/contact"
                          className="inline-flex items-center px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-lg hover:bg-gray-700 dark:hover:bg-gray-200"
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
      <section className="relative py-24 overflow-hidden bg-white dark:bg-black" id="why-choose-section">
        <SimpleWrapper>
          <div className="relative z-10 max-w-6xl mx-auto px-4">
            {/* Titre avec animation */}
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-medium text-gray-900 dark:text-white mb-6">
                Pourquoi choisir ClimGO à Saucats ?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Choisir ClimGO, c'est opter pour un installateur local de confiance, habitué aux spécificités thermiques et architecturales de la commune de Saucats.
              </p>
            </div>
            
            {/* Pourquoi choisir ClimGO à Saucats - Version personnalisée */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto mb-8 md:mb-12 lg:mb-16">
              {/* Expertise Locale */}
              <div className="group bg-white dark:bg-black backdrop-blur-sm rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-600/30  min-h-[320px] md:min-h-[380px] lg:min-h-[420px] flex flex-col">
                <div className="text-center flex flex-col h-full">
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-12 h-12 text-gray-900 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4  transition-colors">
                    Connaissance locale
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 sm:mb-6 flex-grow">
                    <strong className="text-gray-900 dark:text-gray-300">Maîtrise parfaite</strong> des spécificités de Saucats et de son environnement forestier. <strong className="text-gray-900 dark:text-gray-300">Expertise adaptée</strong> aux contraintes du secteur rural.
                  </p>
                </div>
              </div>

              {/* Équipements Adaptés */}
              <div className="group bg-white dark:bg-black backdrop-blur-sm rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-600/30  min-h-[320px] md:min-h-[380px] lg:min-h-[420px] flex flex-col">
                <div className="text-center flex flex-col h-full">
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-12 h-12 text-gray-900 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4  transition-colors">
                    Équipements sélectionnés
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 sm:mb-6 flex-grow">
                    <strong className="text-gray-900 dark:text-gray-300">Matériels robustes</strong> sélectionnés pour leur fiabilité et leur efficacité énergétique. <strong className="text-gray-900 dark:text-gray-300">Adaptation parfaite</strong> au bâti girondin.
                  </p>
                </div>
              </div>

              {/* Service Proximité */}
              <div className="group bg-white dark:bg-black backdrop-blur-sm rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-600/30  min-h-[320px] md:min-h-[380px] lg:min-h-[420px] flex flex-col">
                <div className="text-center flex flex-col h-full">
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-12 h-12 text-gray-900 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4  transition-colors">
                    Proximité garantie
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 sm:mb-6 flex-grow">
                    <strong className="text-gray-900 dark:text-gray-300">Intervention rapide</strong> sur Saucats et environs, <strong className="text-gray-900 dark:text-gray-300">accompagnement sur mesure</strong> et <strong className="text-[#8B5CF6] dark:text-[#8B5CF6]">travaux soignés</strong>.
                  </p>
                </div>
              </div>

              {/* Aides Financières */}
              <div className="group bg-white dark:bg-black backdrop-blur-sm rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-600/30  min-h-[320px] md:min-h-[380px] lg:min-h-[420px] flex flex-col">
                <div className="text-center flex flex-col h-full">
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-12 h-12 text-gray-900 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4  transition-colors">
                    Aides financières
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 sm:mb-6 flex-grow">
                    <strong className="text-gray-900 dark:text-gray-300">Accompagnement complet</strong> pour vos aides disponibles à Saucats : <strong className="text-gray-900 dark:text-gray-300">primes CEE, MaPrimeRénov'</strong>, TVA réduite et Éco-PTZ.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Call-to-action */}
            <div className="text-center mt-16">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-full hover:bg-gray-700 dark:hover:bg-gray-200 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Demander un devis
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </SimpleWrapper>
      </section>

      {/* Section Services - Design Moderne */}
      <section className="relative py-20 overflow-hidden bg-white dark:bg-black z-10">
        {}<div className="relative z-10 max-w-7xl mx-auto px-4">
          <SimpleWrapper>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6">
                Nos Solutions ClimGO
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Des solutions complètes et personnalisées pour votre confort thermique à Saucats
              </p>
            </div>
          </SimpleWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Carte 1 - Types de logements */}
            <SimpleWrapper>
              <motion.div 
                className="group relative bg-white dark:bg-black rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border-2 border-black dark:border-white min-h-[300px] md:min-h-[380px] lg:min-h-[400px] flex flex-col"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Icône avec effet de brillance */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-blue-500 dark:bg-blue-600 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-blue-600 dark:group-hover:bg-blue-500 transition-all duration-300 border-2 border-blue-500 dark:border-blue-600">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                </div>

                <h3 className="text-2xl font-bold text-black dark:text-white mb-4 text-center">Types de logements desservis</h3>
                <p className="text-black/90 dark:text-white/90 leading-relaxed text-center text-lg flex-grow">
                  Nos solutions s'adaptent aux maisons de lotissement, résidences récentes ou anciennes bâtisses de Saucats, avec une prise en compte rigoureuse des spécificités thermiques locales.
                </p>

                {/* Badge de service */}
                <div className="mt-6 text-center">
                  <span className="inline-block bg-black/20 dark:bg-white/20 text-black dark:text-white text-sm font-medium px-4 py-2 rounded-full">
                    Tous types d'habitats
                  </span>
                </div>
              </motion.div>
            </SimpleWrapper>

            {/* Carte 2 - Processus d'installation */}
            <SimpleWrapper>
              <motion.div 
                className="group relative bg-white dark:bg-black rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border-2 border-black dark:border-white min-h-[300px] md:min-h-[380px] lg:min-h-[400px] flex flex-col"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Icône avec effet de brillance */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-orange-500 dark:bg-orange-600 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-orange-600 dark:group-hover:bg-orange-500 transition-all duration-300 border-2 border-orange-500 dark:border-orange-600">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-black/10 dark:bg-white/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">Processus d'installation</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center text-lg flex-grow">
                  Un projet démarre toujours par une visite technique sur place. Nous établissons ensuite un devis précis, avant de programmer une installation rapide, propre et certifiée conforme.
                </p>

                {/* Badge de service */}
                <div className="mt-6 text-center">
                  <span className="inline-block bg-black dark:bg-white text-white dark:text-black text-sm font-medium px-4 py-2 rounded-full">
                    Devis gratuit
                  </span>
                </div>
              </motion.div>
            </SimpleWrapper>

            {/* Carte 3 - Entretien & maintenance */}
            <SimpleWrapper>
              <motion.div 
                className="group relative bg-white dark:bg-black rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border-2 border-black dark:border-white min-h-[300px] md:min-h-[380px] lg:min-h-[400px] flex flex-col"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Icône avec effet de brillance */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-green-500 dark:bg-green-600 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-green-600 dark:group-hover:bg-green-500 transition-all duration-300 border-2 border-green-500 dark:border-green-600">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-black/10 dark:bg-white/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">Entretien &amp; maintenance</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center text-lg flex-grow">
                  ClimGO assure un suivi complet de vos équipements, avec des interventions de maintenance planifiées pour préserver performances et économies d'énergie, année après année.
                </p>

                {/* Badge de service */}
                <div className="mt-6 text-center">
                  <span className="inline-block bg-black dark:bg-white text-white dark:text-black text-sm font-medium px-4 py-2 rounded-full">
                    Contrats personnalisés
                  </span>
                </div>
              </motion.div>
            </SimpleWrapper>

            {/* Carte 4 - Aides financières */}
            <SimpleWrapper>
              <motion.div 
                className="group relative bg-white dark:bg-black rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border-2 border-black dark:border-white min-h-[300px] md:min-h-[380px] lg:min-h-[400px] flex flex-col"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Icône avec effet de brillance */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-purple-500 dark:bg-purple-600 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-purple-600 dark:group-hover:bg-purple-500 transition-all duration-300 border-2 border-purple-500 dark:border-purple-600">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                </div>

                <h3 className="text-2xl font-bold text-black dark:text-white mb-4 text-center">Aides financières à Saucats</h3>
                <p className="text-black/90 dark:text-white/90 leading-relaxed text-center text-lg flex-grow">
                  ClimGO vous accompagne dans vos démarches pour bénéficier des aides disponibles à Saucats : primes CEE, MaPrimeRénov', TVA à taux réduit et Éco-PTZ.
                </p>

                {/* Badge de service */}
                <div className="mt-6 text-center">
                  <span className="inline-block bg-black/20 dark:bg-white/20 text-black dark:text-white text-sm font-medium px-4 py-2 rounded-full">
                    Accompagnement complet
                  </span>
                </div>
              </motion.div>
            </SimpleWrapper>
          </div>

          {/* Call-to-action en bas */}
          <SimpleWrapper>
            <div className="text-center mt-16">
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                Prêt à améliorer votre confort thermique ?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-full hover:bg-gray-700 dark:hover:bg-gray-200 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Découvrir nos solutions
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </SimpleWrapper>
        </div>
      </section>

      {/* Section Google Reviews */}
      <GoogleReviews 
        placeId={process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID || "ClimGO-default-place-id"} 
      />

      {/* Section FAQ - Style Chat Moderne */}
      <FAQChat title="Questions Fréquentes"
        subtitle="Nos réponses à vos préoccupations les plus courantes sur le chauffage et la climatisation à Saucats"
        faqs={getCityFAQSet('saucats')}
        initials={getCityInitials('saucats')}
        ctaTitle="Une autre question ?"
        ctaSubtitle="N'hésitez pas à nous contacter directement !"
        phoneNumber="0123456789"
        email="contact@climgo.fr" citySlug="saucats" />



      {/* Section Carte en pleine largeur */}
              <section className="relative w-full overflow-hidden bg-white dark:bg-black">
        <div className="relative z-10 w-full px-4">
          <SimpleWrapper>
            <div className="relative w-full">
              {/* Carte Google Maps en pleine largeur */}
              <div className="relative w-full h-[600px] transform hover:scale-[1.02] transition-transform duration-700 ease-out">
                <iframe
                  src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&q=Saucats,France&zoom=13&center=44.6419,-0.5736`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ClimGO - Zone d'intervention à Saucats, Sud Gironde"
                  aria-label="Carte Google Maps montrant la zone d'intervention de ClimGO à Saucats et dans le Sud Gironde"
                  className="w-full h-full"
                />
              </div>
            </div>
          </SimpleWrapper>
        </div>
      </section>

    </main>
  );
}
