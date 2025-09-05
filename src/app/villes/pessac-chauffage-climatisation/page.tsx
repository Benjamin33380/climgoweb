'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from 'framer-motion';
import { Search, MapPin } from "lucide-react";
import { useState } from "react";
import { SimpleWrapper } from '@/components/ui/SimpleWrapper';
import Services from '@/components/Services';
import GoogleReviews from '@/components/GoogleReviews';

import CityLinksList from '@/components/CityLinksList';

export default function Pessac() {

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
      <section className="hero-mobile-section relative h-[100vh] xs:h-[95vh] sm:h-[90vh] min-h-[500px] xs:min-h-[550px] sm:min-h-[600px] md:min-h-[640px] lg:min-h-[700px] xl:min-h-[750px] w-full overflow-hidden bg-transparent sm:bg-white sm:dark:bg-black text-black dark:text-white">
        {/* Zone image avec effet zoom - Responsive avec adaptation mobile */}
        <div className="absolute top-0 left-0 h-full w-full z-1 sm:hidden bg-gray-100 dark:bg-gray-800">
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500 dark:text-gray-400 text-center px-4">
              Pessac - Bordeaux Métropole
            </p>
          </div>
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
            className="hidden sm:block relative h-full w-full overflow-hidden bg-gray-100 dark:bg-gray-800"
            style={{
              clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)'
            }}
          >
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500 dark:text-gray-400 text-center px-4">
                Pessac - Bordeaux Métropole
              </p>
            </div>
          </div>
        </motion.div>

        {/* Forme diagonale sur le premier tiers - Cachée sur mobile */}
        <div 
          className="hidden sm:block absolute top-0 left-0 h-full w-2/5 bg-white dark:bg-black z-5"
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
              ClimGO à Pessac
            </h1>
            <p className="text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl text-white sm:text-black dark:text-white mb-3 xs:mb-4 sm:mb-4 md:mb-6 lg:mb-8 leading-relaxed max-w-[260px] xs:max-w-[280px] sm:max-w-sm md:max-w-lg lg:max-w-none whitespace-pre-line font-medium sm:font-normal mobile-text-shadow">
              Votre expert en chauffage et climatisation{'\n'}entre nature et dynamisme urbain
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
      
      {/* Section Pessac - Texte défilant au scroll */}
      <section className="relative py-8 sm:py-12 overflow-hidden">
        <div
          className="absolute inset-0 -z-10 w-full h-full bg-white dark:bg-black"
          aria-hidden="true"
        ></div>
        
        {/* Titre centré */}
        <div className="relative z-10 container mx-auto px-4 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-800 dark:text-black dark:text-white text-center">
            Pessac, entre nature et dynamisme urbain
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
                  Située entre <strong className="text-black dark:text-white">vignobles et zones d'activité</strong>, Pessac allie cadre résidentiel et vitalité économique. De Saige à Monbalon, ClimGO intervient avec précision sur tous types de logements.
                </p>
                
                <p className="text-sm sm:text-base text-gray-800 dark:text-white leading-normal">
                  Que vous soyez dans le quartier de <strong className="text-black dark:text-white">Saige</strong>, <strong className="text-black dark:text-white">Monbalon</strong> ou <strong className="text-black dark:text-white">Magonty</strong>, ClimGO adapte chaque installation aux spécificités thermiques de votre habitat.
                </p>
                
                <p className="text-sm sm:text-base text-gray-800 dark:text-white leading-normal">
                  Grâce à notre ancrage local et nos certifications, nous garantissons des systèmes performants, sobres et discrets, parfaitement intégrés au <strong className="text-black dark:text-white">cadre de vie pessacais</strong>.
                </p>
                
                <p className="text-base text-gray-800 dark:text-white leading-normal">
                  Située au cœur de la métropole bordelaise, <strong className="text-black dark:text-white">Pessac</strong> conjugue patrimoine, modernité et attractivité. Forte de plus de <strong className="text-black dark:text-white">65 000 habitants</strong>, la commune séduit par ses quartiers résidentiels.
                </p>
                
                <p className="text-base text-gray-800 dark:text-white leading-normal">
                  C'est aussi une <strong className="text-black dark:text-white">ville universitaire et scientifique</strong> dynamique avec l'Université de Bordeaux, technopole Bordeaux InnoCampus, et un réseau de transports performant.
                </p>
                
                <p className="text-base text-gray-800 dark:text-white leading-normal">
                  ClimGO intervient dans tous les secteurs : <strong className="text-black dark:text-white">Saige, Alouette, Toctoucau, Noès, France Alouette</strong> ou encore <strong className="text-black dark:text-white">Bellegrave</strong>. Nos installations s'adaptent aux maisons anciennes en pierre comme aux logements récents.
                </p>
                
                <p className="text-base text-gray-800 dark:text-white leading-normal">
                  Le bâti pessacais est très varié, allant de l'ancien pavillonnaire aux nouvelles résidences BBC. Chaque projet est adapté aux <strong className="text-black dark:text-white">contraintes thermiques du logement</strong> et aux règles d'urbanisme.
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
                Nos interventions à Pessac
              </h2>
              <p className="text-xl text-black dark:text-white max-w-3xl mx-auto leading-relaxed">
                De Saige à Monbalon, nous intervenons dans toute la commune de Pessac. Chaque chantier est réalisé avec précision, pour un confort optimal été comme hiver.
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
              
              {/* Étape 1 */}
              <div className="relative flex items-center mb-16">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white dark:bg-black rounded-full shadow-2xl flex items-center justify-center z-10">
                  <svg className="w-8 h-8 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                
                <div className="w-5/12 pr-8 text-right">
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-3">Toute la commune</h3>
                  <p className="text-black dark:text-white leading-relaxed">
                    Interventions dans tous les quartiers de Pessac : Saige, Alouette, Toctoucau, Noès, France Alouette, Bellegrave. Service adapté à chaque secteur.
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
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-3">Habitat Varié</h3>
                  <p className="text-black dark:text-white leading-relaxed">
                    Maisons anciennes en pierre, pavillonnaire récent, résidences BBC : nos installations s'adaptent à tous types de logements pessacais.
                  </p>
                </div>
              </div>
              
              {/* Étape 3 */}
              <div className="relative flex items-center mb-16">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white dark:bg-black rounded-full shadow-2xl flex items-center justify-center z-10">
                  <svg className="w-8 h-8 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                
                <div className="w-5/12 pr-8 text-right">
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-3">Ville Universitaire</h3>
                  <p className="text-black dark:text-white leading-relaxed">
                    Solutions adaptées au dynamisme universitaire et scientifique : Université de Bordeaux, technopole Bordeaux InnoCampus. Expertise dans les résidences étudiantes.
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
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-3">Qualité & Rigueur</h3>
                  <p className="text-black dark:text-white leading-relaxed">
                    Service rapide, finitions propres et accompagnement administratif complet. Solutions discrètes et performantes adaptées aux espaces réduits.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Call-to-action */}
            <div className="text-center mt-16">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full px-8 py-4 bg-white dark:bg-black text-black dark:text-white font-semibold hover:bg-white dark:hover:bg-black transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-white"
              >
                Demander un devis
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
                      Une ville stratégique entre nature et innovation
                    </h3>
                    <div className="space-y-3 text-black dark:text-white leading-relaxed">
                      <p>
                        Située au cœur de la métropole bordelaise, <strong className="text-black dark:text-white">Pessac</strong> conjugue patrimoine, modernité et attractivité. Forte de plus de <strong className="text-black dark:text-white">65 000 habitants</strong>.
                      </p>
                      <p>
                        C'est aussi une ville universitaire et scientifique dynamique avec l'<strong className="text-black dark:text-white">Université de Bordeaux</strong>, technopole Bordeaux InnoCampus.
                      </p>
                    </div>
                  </div>
                  
                  {/* Bloc 2 */}
                  <div className="w-72 flex-shrink-0 bg-white dark:bg-black rounded-2xl md:shadow-lg p-6 border border-gray-100 dark:border-gray-700">
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                      Exemples concrets d'interventions à Pessac
                    </h3>
                    <div className="space-y-3 text-black dark:text-white leading-relaxed">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></div>
                        <p><strong>Avenue Pasteur :</strong> PAC air/eau avec plancher chauffant maison années 90.</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></div>
                        <p><strong>Résidence Le Monteil :</strong> maintenance complète splits muraux appartement T4.</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></div>
                        <p><strong>Quartier Cap de Bos :</strong> gainable Mitsubishi invisible dans combles.</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bloc 3 */}
                  <div className="w-72 flex-shrink-0 bg-white dark:bg-black rounded-2xl md:shadow-lg p-6 border border-gray-100 dark:border-gray-700">
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                      Des installations pensées pour l'habitat pessacais
                    </h3>
                    <div className="space-y-3 text-black dark:text-white leading-relaxed">
                      <p>
                        Le bâti pessacais est très varié, allant de l'ancien pavillonnaire aux nouvelles <strong className="text-black dark:text-white">résidences BBC</strong>. Chaque projet est adapté aux contraintes thermiques.
                      </p>
                      <p>
                        Nous privilégions des <strong className="text-black dark:text-white">solutions discrètes</strong>, performantes et adaptées aux espaces réduits, en tenant compte de l'exposition.
                      </p>
                    </div>
                  </div>
                  
                  {/* Bloc 4 */}
                  <div className="w-72 flex-shrink-0 bg-white dark:bg-black rounded-2xl md:shadow-lg p-6 border border-gray-100 dark:border-gray-700">
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                      Votre projet énergétique sur Pessac commence ici
                    </h3>
                    <div className="space-y-3 text-black dark:text-white leading-relaxed">
                      <p>
                        Vous habitez <strong className="text-black dark:text-white">Pessac</strong> ou ses environs ? Nos techniciens ClimGO vous accompagnent dans le choix, l'installation et l'entretien.
                      </p>
                      <p>
                        Contactez-nous dès aujourd'hui pour un <strong className="text-black dark:text-white">devis ou un diagnostic gratuit</strong>.
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
                Pourquoi choisir ClimGO à Pessac ?
              </h2>
              <p className="text-xl text-black dark:text-white max-w-3xl mx-auto leading-relaxed">
                Faire appel à ClimGO à Pessac, c'est choisir une entreprise engagée, qui comprend les particularités climatiques et architecturales de la région pessacaise.
              </p>
            </div>
            
            {/* Pourquoi choisir ClimGO à Pessac - Version personnalisée */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto mb-8 md:mb-12 lg:mb-16">
              {/* Métropole Universitaire */}
              <div className="group bg-white dark:bg-black backdrop-blur-sm rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-600/30 hover:border-black dark:hover:border-white min-h-[320px] md:min-h-[380px] lg:min-h-[420px] flex flex-col">
                <div className="text-center flex flex-col h-full">
                  <div className="bg-white dark:bg-black rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-12 h-12 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black dark:text-white mb-3 sm:mb-4 group-hover:text-black dark:group-hover:text-white transition-colors">
                    Métropole Universitaire
                  </h3>
                  <p className="text-black dark:text-white text-sm leading-relaxed mb-4 sm:mb-6 flex-grow">
                    <strong className="text-black dark:text-white">Expertise scientifique</strong> avec l'Université de Bordeaux, technopole InnoCampus. <strong className="text-black dark:text-white">Solutions adaptées</strong> aux résidences étudiantes et logements familiaux.
                  </p>
                </div>
              </div>

              {/* Équipements */}
              <div className="group bg-white dark:bg-black backdrop-blur-sm rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-600/30 hover:border-black dark:hover:border-white min-h-[320px] md:min-h-[380px] lg:min-h-[420px] flex flex-col">
                <div className="text-center flex flex-col h-full">
                  <div className="bg-white dark:bg-black rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-12 h-12 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black dark:text-white mb-3 sm:mb-4 group-hover:text-black dark:group-hover:text-white transition-colors">
                    Qualité Garantie
                  </h3>
                  <p className="text-black dark:text-white text-sm leading-relaxed mb-4 sm:mb-6 flex-grow">
                    <strong className="text-black dark:text-white">Équipements sélectionnés</strong> pour garantir efficacité, discrétion et durabilité. Adaptation aux <strong className="text-black dark:text-white">maisons traditionnelles</strong> et quartiers récents.
                  </p>
                </div>
              </div>

              {/* Habitat Varié */}
              <div className="group bg-white dark:bg-black backdrop-blur-sm rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-600/30 hover:border-black dark:hover:border-white min-h-[320px] md:min-h-[380px] lg:min-h-[420px] flex flex-col">
                <div className="text-center flex flex-col h-full">
                  <div className="bg-white dark:bg-black rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-12 h-12 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black dark:text-white mb-3 sm:mb-4 group-hover:text-black dark:group-hover:text-white transition-colors">
                    Habitat Varié
                  </h3>
                  <p className="text-black dark:text-white text-sm leading-relaxed mb-4 sm:mb-6 flex-grow">
                    <strong className="text-black dark:text-white">Ancien pavillonnaire</strong> aux nouvelles résidences BBC. <strong className="text-black dark:text-white">Solutions discrètes</strong> adaptées aux espaces réduits et règles d'urbanisme.
                  </p>
                </div>
              </div>

              {/* Service */}
              <div className="group bg-white dark:bg-black backdrop-blur-sm rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-600/30 hover:border-black dark:hover:border-white min-h-[320px] md:min-h-[380px] lg:min-h-[420px] flex flex-col">
                <div className="text-center flex flex-col h-full">
                  <div className="bg-white dark:bg-black rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-12 h-12 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black dark:text-white mb-3 sm:mb-4  transition-colors">
                    Service Complet
                  </h3>
                  <p className="text-black dark:text-white text-sm leading-relaxed mb-4 sm:mb-6 flex-grow">
                    <strong className="text-black dark:text-white">Service rapide</strong>, finitions propres et <strong className="text-black dark:text-white">accompagnement administratif</strong> complet. Proximité et rigueur pour tous vos projets pessacais.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Call-to-action */}
            <div className="text-center mt-16">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full px-8 py-4 bg-white dark:bg-black text-black dark:text-white font-semibold hover:bg-white dark:hover:bg-black transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-white"
              >
                Demander un devis
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
                Des solutions complètes et personnalisées pour votre confort thermique à Pessac
              </p>
            </div>
          </SimpleWrapper>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
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
                  Maisons individuelles, résidences récentes, logements collectifs : nous maîtrisons les contraintes thermiques de tous les types d'habitat à Pessac.
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

                <h3 className="text-2xl font-bold text-black dark:text-white mb-4 text-center">Aides financières à Pessac</h3>
                <p className="text-black dark:text-white leading-relaxed text-center text-lg flex-grow">
                  MaPrimeRénov', CEE, Éco-PTZ… à Pessac, de nombreuses aides sont accessibles. Nous vous aidons à maximiser vos subventions sans vous perdre dans la paperasse.
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
                className="inline-flex items-center justify-center rounded-full px-8 py-4 bg-white dark:bg-black text-black dark:text-white font-semibold hover:bg-white dark:hover:bg-black transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-white"
              >
                Découvrir nos solutions
              </Link>
            </div>
          </SimpleWrapper>
        </div>
      </section>

      {/* Section Google Reviews */}
      <GoogleReviews 
        placeId={process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID || "ClimGO-default-place-id"} 
      />



      {/* Section Liste des Villes - Juste au-dessus de la carte */}
      <CityLinksList />
      

      {/* Section Liste des Villes - Juste au-dessus de la carte */}
      

      {/* Section Carte en pleine largeur */}
      <section className="relative w-full overflow-hidden bg-white dark:bg-black">
        <div className="relative z-10 w-full px-4">
          <SimpleWrapper>
            <div className="relative w-full">
              {/* Carte Google Maps en pleine largeur */}
              <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] transform hover:scale-[1.02] transition-transform duration-700 ease-out">
                <iframe
                  src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&q=Pessac,France&zoom=12&center=44.8056,-0.6288`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ClimGO - Zone d'intervention à Pessac, Gironde"
                  aria-label="Carte Google Maps montrant la zone d'intervention de ClimGO à Pessac et ses quartiers"
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




