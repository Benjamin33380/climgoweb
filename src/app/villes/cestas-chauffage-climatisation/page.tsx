'use client';

import Link from "next/link";
import { motion } from 'framer-motion';
import { Search, MapPin } from "lucide-react";
import { useState } from "react";
import { SimpleWrapper } from '@/components/ui/SimpleWrapper';
import Services from '@/components/Services';
import GoogleReviews from '@/components/GoogleReviews';
import FAQChat from '@/components/FAQChat';
import CityLinksList from '@/components/CityLinksList';
import { getCityFAQSet, getCityInitials } from '@/data/faqsOptimized';

export default function Cestas() {

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
                  className="block w-full text-left px-4 py-3 hover:bg-white dark:hover:bg-black text-black dark:text-white hover:text-black dark:hover:text-white transition-colors flex items-center gap-2"
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
      <section className="relative h-[90vh] min-h-[500px] sm:min-h-[600px] md:min-h-[640px] w-full overflow-hidden bg-white dark:bg-black text-black dark:text-white">
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
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight mb-3 sm:mb-4 md:mb-6 text-black dark:text-white break-words leading-tight">
              ClimGO à Cestas
            </h1>
            <p className="text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl text-black dark:text-white mb-3 sm:mb-4 md:mb-6 lg:mb-8 leading-relaxed max-w-[280px] sm:max-w-sm md:max-w-lg lg:max-w-none whitespace-pre-line">
              Cadre résidentiel entouré de forêts{'\n'}confort thermique maîtrisé
            </p>

            {/* Composant de recherche de villes */}
            <div className="mb-3 sm:mb-4 md:mb-6 lg:mb-8">
              <CitySearch />
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 text-xs sm:text-sm md:text-base font-medium
                           bg-white dark:bg-black text-black dark:text-white hover:bg-white/90 dark:hover:bg-black/90
                           border border-black/20 dark:border-white/20
                           transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Devis gratuit
              </Link>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 text-xs sm:text-sm md:text-base font-medium
                           border-2 border-white/50 sm:border-black/50 dark:border-white/30 text-black dark:text-white sm:text-black dark:text-white hover:bg-white/15 sm:hover:bg-black/15 dark:hover:bg-white/10 hover:border-white/70 sm:hover:border-black/70 dark:hover:border-white/50
                           transition-all duration-300 backdrop-blur-sm"
              >
                Découvrir
              </a>
            </div>
          </motion.div>
        </div>

        {/* Indicateur de scroll */}
        <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
          <div className="h-8 w-[1px] bg-white/50 dark:bg-white/50 animate-pulse" />
        </div>
      </section>

      
      <div className="bg-white dark:bg-black py-4">
      </div>
      
      {/* Section Cestas - Texte défilant au scroll */}
      <section className="relative py-12 overflow-hidden">
        <div
          className="absolute inset-0 -z-10 w-full h-full bg-white dark:bg-black"
          aria-hidden="true"
        ></div>
        
        {/* Titre centré */}
        <div className="relative z-10 container mx-auto px-4 mb-4">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-800 dark:text-black dark:text-white text-center">
            Cestas, cadre résidentiel et confort thermique maîtrisé
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
                <p className="text-lg text-gray-800 dark:text-white leading-normal">
                  Cestas est une <strong className="text-black dark:text-white">commune résidentielle entourée de forêts</strong>, appréciée pour son calme, ses grands terrains et sa qualité de vie.
                </p>
                
                <p className="text-base text-gray-800 dark:text-white leading-normal">
                  Que vous soyez situé près du <strong className="text-black dark:text-white">Bourg, de Gazinet ou de Pierroton</strong>, ClimGO conçoit et installe des équipements thermiques adaptés.
                </p>
                
                <p className="text-base text-gray-800 dark:text-white leading-normal">
                  Située entre Bordeaux, Canéjan et le bassin d'Arcachon, Cestas offre un <strong className="text-black dark:text-white">environnement privilégié</strong> mêlant forêts, grands terrains et quartiers résidentiels calmes.
                </p>
                
                <p className="text-base text-gray-800 dark:text-white leading-normal">
                  Avec plus de <strong className="text-black dark:text-white">17 000 habitants</strong>, la commune attire familles et actifs recherchant confort et accessibilité. Proximité gare de Gazinet, accès rapide A63.
                </p>
                
                <p className="text-base text-gray-800 dark:text-white leading-normal">
                  ClimGO intervient sur toute la commune : <strong className="text-black dark:text-white">quartier Gazinet, Bourg, Pierroton ou Toctoucau</strong>. Équipements adaptés tous types de logements.
                </p>
                
                <p className="text-base text-gray-800 dark:text-white leading-normal">
                  Du <strong className="text-black dark:text-white">pavillon des années 80 aux constructions neuves RT2012</strong>. Terrains sablonneux, expositions sud-ouest, toitures inclinées.
                </p>
                
                <p className="text-base text-gray-800 dark:text-white leading-normal">
                  Attention particulière à l'<strong className="text-black dark:text-white">intégration esthétique des équipements</strong>, souvent posés sur terrasse, en façade ou en local technique.
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
        `}</style>
      </section>

      {/* Section Services */}
      <Services />

      {/* Section Nos interventions - Timeline verticale élégante */}
      <section className="relative py-24 overflow-hidden bg-white dark:bg-black">
        
        <SimpleWrapper>
          <div className="relative z-10 max-w-6xl mx-auto px-4">
            {/* Titre avec animation */}
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-medium text-black dark:text-white mb-6">
                Nos interventions à Cestas
              </h2>
              <p className="text-xl text-black dark:text-white max-w-3xl mx-auto leading-relaxed">
                De Gazinet au bourg en passant par les hameaux, nous intervenons dans toute la commune de Cestas avec précision. Chaque chantier est réalisé avec soin, pour un confort optimal été comme hiver.
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                
                <div className="w-5/12 pr-8 text-right">
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-3">Cadre Résidentiel Privilégié</h3>
                  <p className="text-black dark:text-white leading-relaxed">
                    Commune résidentielle entourée de forêts, appréciée pour son calme, grands terrains et qualité de vie. Plus de 17 000 habitants, familles et actifs recherchant confort et accessibilité.
                  </p>
                </div>
              </div>
              
              {/* Étape 2 */}
              <div className="relative flex items-center mb-16">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white dark:bg-black rounded-full shadow-2xl flex items-center justify-center z-10">
                  <svg className="w-8 h-8 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                
                <div className="w-5/12 ml-auto pl-8">
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-3">Quartiers et Accessibilité</h3>
                  <p className="text-black dark:text-white leading-relaxed">
                    Bourg, Gazinet, Pierroton, Toctoucau. Proximité gare de Gazinet, accès rapide A63, établissements scolaires variés. Tissu associatif actif, urbanisme à taille humaine.
                  </p>
                </div>
              </div>
              
              {/* Étape 3 */}
              <div className="relative flex items-center mb-16">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white dark:bg-black rounded-full shadow-2xl flex items-center justify-center z-10">
                  <svg className="w-8 h-8 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  </svg>
                </div>
                
                <div className="w-5/12 pr-8 text-right">
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-3">Adaptation Technique</h3>
                  <p className="text-black dark:text-white leading-relaxed">
                    Terrains sablonneux, expositions sud-ouest fréquentes, toitures inclinées. Dimensionnement selon orientation, surface et isolation. Pavillon années 80 aux constructions neuves RT2012.
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
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-3">Intégration Esthétique</h3>
                  <p className="text-black dark:text-white leading-relaxed">
                    Attention particulière intégration esthétique équipements, souvent posés sur terrasse, façade ou local technique. Solutions discrètes et performantes pour chaque configuration.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Call-to-action */}
            <div className="text-center mt-16">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white dark:bg-black text-black dark:text-white font-semibold rounded-full hover:bg-white dark:hover:bg-black transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
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
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                      Cestas, un cadre de vie résidentiel prisé
                    </h3>
                    <div className="space-y-3 text-black dark:text-white leading-relaxed">
                      <p>
                        Située entre Bordeaux, Canéjan et le bassin d'Arcachon, Cestas offre un <strong className="text-black dark:text-white">environnement privilégié</strong> mêlant forêts, grands terrains et quartiers calmes.
                      </p>
                      <p>
                        Avec plus de <strong className="text-black dark:text-white">17 000 habitants</strong>, la commune attire familles et actifs recherchant confort et accessibilité.
                      </p>
                    </div>
                  </div>
                  
                  {/* Bloc 2 */}
                  <div className="w-72 flex-shrink-0 bg-white dark:bg-black rounded-2xl md:shadow-lg p-6 border border-gray-100 dark:border-gray-700">
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                      Exemples concrets d'interventions à Cestas
                    </h3>
                    <div className="space-y-3 text-black dark:text-white leading-relaxed">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></div>
                        <p><strong>Rue de la Forêt :</strong> PAC air/eau sur dalle ventilée pour maison de plain-pied.</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></div>
                        <p><strong>Quartier Gazinet :</strong> climatisation gainable Daikin posée en faux plafond, solution discrète.</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></div>
                        <p><strong>Chemin de Pierroton :</strong> remplacement chauffe-eau classique par thermodynamique.</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bloc 3 */}
                  <div className="w-72 flex-shrink-0 bg-white dark:bg-black rounded-2xl md:shadow-lg p-6 border border-gray-100 dark:border-gray-700">
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                      Un savoir-faire adapté aux particularités de Cestas
                    </h3>
                    <div className="space-y-3 text-black dark:text-white leading-relaxed">
                      <p>
                        Les <strong className="text-black dark:text-white">terrains sablonneux, expositions sud-ouest</strong> et toitures inclinées imposent une vraie précision dans nos installations.
                      </p>
                      <p>
                        Chaque projet est <strong className="text-black dark:text-white">dimensionné selon l'orientation, surface et isolation</strong> du logement.
                      </p>
                    </div>
                  </div>
                  
                  {/* Bloc 4 */}
                  <div className="w-72 flex-shrink-0 bg-white dark:bg-black rounded-2xl md:shadow-lg p-6 border border-gray-100 dark:border-gray-700">
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                      Vous avez un projet thermique à Cestas ?
                    </h3>
                    <div className="space-y-3 text-black dark:text-white leading-relaxed">
                      <p>
                        Que vous envisagiez une <strong className="text-black dark:text-white">rénovation énergétique</strong> ou une installation dans une maison neuve, ClimGO vous accompagne.
                      </p>
                      <p>
                        Contactez-nous pour obtenir un <strong className="text-black dark:text-white">devis adapté à votre maison</strong> à Cestas.
                      </p>
                      <div className="mt-4">
                        <a
                          href="/contact"
                          className="inline-flex items-center px-6 py-3 bg-white dark:bg-black text-black dark:text-white font-semibold rounded-lg hover:bg-white dark:hover:bg-black"
                        >
                          Contactez-nous
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
              <h2 className="text-3xl md:text-4xl font-medium text-black dark:text-white mb-6">
                Pourquoi choisir ClimGO à Cestas ?
              </h2>
              <p className="text-xl text-black dark:text-white max-w-3xl mx-auto leading-relaxed">
                Faire appel à ClimGO à Cestas, c'est choisir une entreprise engagée, qui comprend les particularités climatiques et architecturales de la commune.
              </p>
            </div>
            
            {/* Pourquoi choisir ClimGO à Cestas - Version personnalisée */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto mb-8 md:mb-12 lg:mb-16">
              {/* Entreprise Engagée */}
              <div className="group bg-white dark:bg-black backdrop-blur-sm rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-600/30 hover:border-black dark:hover:border-white min-h-[320px] md:min-h-[380px] lg:min-h-[420px] flex flex-col">
                <div className="text-center flex flex-col h-full">
                  <div className="bg-black dark:bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-12 h-12 text-white dark:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black dark:text-white mb-3 sm:mb-4 group-hover:text-black dark:group-hover:text-white transition-colors">
                    Entreprise Engagée
                  </h3>
                  <p className="text-black dark:text-white text-sm leading-relaxed mb-4 sm:mb-6 flex-grow">
                    Choisir une <strong className="text-black dark:text-white">entreprise engagée</strong>, qui comprend les particularités climatiques et architecturales de la commune de Cestas.
                  </p>
                </div>
              </div>

              {/* Efficacité et Durabilité */}
              <div className="group bg-white dark:bg-black backdrop-blur-sm rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-600/30 hover:border-black dark:hover:border-white min-h-[320px] md:min-h-[380px] lg:min-h-[420px] flex flex-col">
                <div className="text-center flex flex-col h-full">
                  <div className="bg-black dark:bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-12 h-12 text-white dark:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black dark:text-white mb-3 sm:mb-4 group-hover:text-black dark:group-hover:text-white transition-colors">
                    Efficacité et Durabilité
                  </h3>
                  <p className="text-black dark:text-white text-sm leading-relaxed mb-4 sm:mb-6 flex-grow">
                    Nos PAC, climatiseurs et chauffe-eaux sélectionnés pour garantir <strong className="text-black dark:text-white">efficacité, discrétion et durabilité</strong> dans résidences familiales.
                  </p>
                </div>
              </div>

              {/* Proximité et Rigueur */}
              <div className="group bg-white dark:bg-black backdrop-blur-sm rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-600/30 hover:border-black dark:hover:border-white min-h-[320px] md:min-h-[380px] lg:min-h-[420px] flex flex-col">
                <div className="text-center flex flex-col h-full">
                  <div className="bg-black dark:bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-12 h-12 text-white dark:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black dark:text-white mb-3 sm:mb-4 group-hover:text-black dark:group-hover:text-white transition-colors">
                    Proximité et Rigueur
                  </h3>
                  <p className="text-black dark:text-white text-sm leading-relaxed mb-4 sm:mb-6 flex-grow">
                    Notre <strong className="text-black dark:text-white">proximité et rigueur</strong> font la différence : service rapide, finitions propres, accompagnement administratif complet.
                  </p>
                </div>
              </div>

              {/* Intégration Esthétique */}
              <div className="group bg-white dark:bg-black backdrop-blur-sm rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-600/30 hover:border-black dark:hover:border-white min-h-[320px] md:min-h-[380px] lg:min-h-[420px] flex flex-col">
                <div className="text-center flex flex-col h-full">
                  <div className="bg-black dark:bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-12 h-12 text-white dark:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black dark:text-white mb-3 sm:mb-4 group-hover:text-black dark:group-hover:text-white transition-colors">
                    Intégration Esthétique
                  </h3>
                  <p className="text-black dark:text-white text-sm leading-relaxed mb-4 sm:mb-6 flex-grow">
                    Attention particulière à l'<strong className="text-black dark:text-white">intégration esthétique</strong> des équipements, posés sur terrasse, façade ou local technique.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Call-to-action */}
            <div className="text-center mt-16">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white dark:bg-black text-black dark:text-white font-semibold rounded-full hover:bg-white dark:hover:bg-black transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
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

      {/* Section Services - Design Moderne avec les 4 cartes */}
      <section className="relative py-20 overflow-hidden bg-white dark:bg-black z-10">
        {}<div className="relative z-10 max-w-7xl mx-auto px-4">
          <SimpleWrapper>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-black dark:text-white mb-6">
                Nos Solutions ClimGO
              </h2>
              <p className="text-lg text-black dark:text-white max-w-3xl mx-auto">
                Des solutions complètes et personnalisées pour votre confort thermique à Cestas
              </p>
            </div>
          </SimpleWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Carte 1 - Types de logements */}
            <SimpleWrapper>
              <motion.div 
                className="group relative bg-white dark:bg-black rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border-2 border-gray-200 dark:border-gray-600 min-h-[300px] md:min-h-[380px] lg:min-h-[400px] flex flex-col"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Icône avec effet de brillance */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-white dark:bg-black rounded-2xl flex items-center justify-center mx-auto group-hover:bg-white dark:group-hover:bg-black transition-all duration-300 border-2 border-black dark:border-white">
                    <svg className="w-8 h-8 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    </svg>
                  </div>
                  
                </div>

                <h3 className="text-2xl font-bold text-black dark:text-white mb-4 text-center">Types de logements desservis</h3>
                <p className="text-black dark:text-white leading-relaxed text-center text-lg flex-grow">
                  Résidences étudiantes, maisons familiales, logements collectifs : nous maîtrisons les contraintes thermiques de tous les types d'habitat à Cestas.
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
                className="group relative bg-white dark:bg-black rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border-2 border-gray-200 dark:border-gray-600 min-h-[300px] md:min-h-[380px] lg:min-h-[400px] flex flex-col"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Icône avec effet de brillance */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-white dark:bg-black rounded-2xl flex items-center justify-center mx-auto group-hover:bg-white dark:group-hover:bg-black transition-all duration-300 border-2 border-black dark:border-white">
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
                  <span className="inline-block bg-white dark:bg-black text-black dark:text-white text-sm font-medium px-4 py-2 rounded-full">
                    Devis gratuit
                  </span>
                </div>
              </motion.div>
            </SimpleWrapper>

            {/* Carte 3 - Entretien & maintenance */}
            <SimpleWrapper>
              <motion.div 
                className="group relative bg-white dark:bg-black rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border-2 border-gray-200 dark:border-gray-600 min-h-[300px] md:min-h-[380px] lg:min-h-[400px] flex flex-col"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Icône avec effet de brillance */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-white dark:bg-black rounded-2xl flex items-center justify-center mx-auto group-hover:bg-white dark:group-hover:bg-black transition-all duration-300 border-2 border-black dark:border-white">
                    <svg className="w-8 h-8 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                    </svg>
                  </div>
                  
                </div>

                <h3 className="text-2xl font-bold text-black dark:text-white mb-4 text-center">Entretien &amp; maintenance</h3>
                <p className="text-black dark:text-white leading-relaxed text-center text-lg flex-grow">
                  ClimGO assure un suivi complet de vos équipements, avec des interventions de maintenance planifiées pour préserver performances et économies d'énergie, année après année.
                </p>

                {/* Badge de service */}
                <div className="mt-6 text-center">
                  <span className="inline-block bg-white dark:bg-black text-black dark:text-white text-sm font-medium px-4 py-2 rounded-full">
                    Suivi personnalisé
                  </span>
                </div>
              </motion.div>
            </SimpleWrapper>

            {/* Carte 4 - Aides financières */}
            <SimpleWrapper>
              <motion.div 
                className="group relative bg-white dark:bg-black rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border-2 border-gray-200 dark:border-gray-600 min-h-[300px] md:min-h-[380px] lg:min-h-[400px] flex flex-col"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Icône avec effet de brillance */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-white dark:bg-black rounded-2xl flex items-center justify-center mx-auto group-hover:bg-white dark:group-hover:bg-black transition-all duration-300 border-2 border-black dark:border-white">
                    <svg className="w-8 h-8 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                    </svg>
                  </div>
                  
                </div>

                <h3 className="text-2xl font-bold text-black dark:text-white mb-4 text-center">Aides financières à Cestas</h3>
                <p className="text-black dark:text-white leading-relaxed text-center text-lg flex-grow">
                  MaPrimeRénov', CEE, Éco-PTZ… à Cestas, de nombreuses aides sont accessibles. Nous vous aidons à maximiser vos subventions sans vous perdre dans la paperasse.
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
              <p className="text-black dark:text-white mb-6 text-lg">
                Prêt à améliorer votre confort thermique ?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white dark:bg-black text-black dark:text-white font-semibold rounded-full hover:bg-white dark:hover:bg-black transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
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

      {/* Section FAQ - Style Chat Moderne avec questions variées */}
      <FAQChat

      />

      {/* Section Liste des Villes - Juste au-dessus de la carte */}
      <CityLinksList />

      {/* Section Liste des Villes - Juste au-dessus de la carte */}
      <CityLinksList />

      {/* Section Carte en pleine largeur */}
      <section className="relative w-full overflow-hidden bg-white dark:bg-black">
        <div className="relative z-10 w-full px-4">
          <SimpleWrapper>
            <div className="relative w-full">
              {/* Carte Google Maps en pleine largeur */}
              <div className="relative w-full h-[600px] transform hover:scale-[1.02] transition-transform duration-700 ease-out">
                <iframe
                  src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&q=Cestas,France&zoom=13&center=44.7444,-0.6758`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ClimGO - Zone d'intervention à Cestas, Gironde"
                  aria-label="Carte Google Maps montrant la zone d'intervention de ClimGO à Cestas et ses quartiers"
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




