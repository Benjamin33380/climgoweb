'use client';

import Link from "next/link";
import { motion } from 'framer-motion';
import { Search, MapPin } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { SimpleWrapper } from '@/components/ui/SimpleWrapper';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Andernos() {
  // Variables pour l'effet de scroll
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
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
      // Initialize maxScroll
      setMaxScroll(scrollElement.scrollHeight - scrollElement.clientHeight);
      
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const topShadowOpacity = Math.min(scrollPosition / 50, 1);
  const bottomShadowOpacity = Math.min((maxScroll - scrollPosition) / 50, 1);

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
          <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-black/20 dark:border-white/30 max-h-60 overflow-y-auto z-50">
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
              src="/mp4/andernos.mp4"
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
              src="/mp4/andernos.mp4"
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
              ClimGO à Andernos-les-Bains
            </h1>
            <p className="text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl text-white/90 sm:text-black/90 dark:text-white/90 mb-3 sm:mb-4 md:mb-6 lg:mb-8 leading-relaxed max-w-[280px] sm:max-w-sm md:max-w-lg lg:max-w-none whitespace-pre-line">
              Votre expert en chauffage et climatisation{'\n'}sur le Bassin d'Arcachon
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
      
      <Breadcrumb className="max-w-7xl mx-auto px-4 my-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/" className="hover:text-[#03144a] transition-colors">
                Accueil
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/zones-desservies" className="hover:text-[#03144a] transition-colors">
                Zones desservies
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-gray-500">
              Andernos-les-Bains
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <section className="relative py-12 overflow-hidden">
        <div
          className="absolute inset-0 -z-10 w-full h-full bg-white dark:bg-black"
          aria-hidden="true"
        ></div>
        
        {/* Titre centré */}
        <SimpleWrapper>
          <div className="relative z-10 container mx-auto px-4 mb-4">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-800 dark:text-white text-center">
              Bassin d&apos;Arcachon, Habitant d&apos;Andernos-les-Bains
            </h2>
          </div>
        </SimpleWrapper>
        
        {/* Container de scroll sur toute la largeur de la page */}
        <div className="relative w-full">
          {/* Gradient de flou du haut */}
          <div 
            className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white dark:from-black to-transparent z-10 pointer-events-none transition-opacity duration-300"
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
              <div className="space-y-4 text-center">
                <SimpleWrapper>
                  <p className="text-lg text-gray-800 dark:text-gray-200 leading-normal">
                    Située au bord du bassin, <strong>Andernos-les-Bains</strong> séduit par son cadre maritime et ses quartiers variés, du centre-ville animé au <strong>Bétey</strong> paisible. ClimGO adapte ses solutions à chaque type d'habitat pour garantir votre confort thermique toute l'année.
                  </p>
                </SimpleWrapper>
                
                <SimpleWrapper>
                  <p className="text-base text-gray-800 dark:text-gray-200 leading-normal">
                    Nous accompagnons les <strong>familles</strong>, <strong>retraités</strong> et <strong>nouveaux arrivants</strong> dans leurs projets d'installation, en tenant compte des spécificités locales et des réglementations environnementales.
                  </p>
                </SimpleWrapper>
                
                <SimpleWrapper>
                  <p className="text-base text-gray-800 dark:text-gray-200 leading-normal">
                    Chaque intervention vise à optimiser la <strong>performance énergétique</strong> de votre logement tout en respectant l'intégration harmonieuse dans ce cadre naturel et urbain.
                  </p>
                </SimpleWrapper>
              </div>
            </div>
          </div>
          
          {/* Gradient de flou du bas */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white dark:from-black to-transparent z-10 pointer-events-none transition-opacity duration-300"
            style={{ opacity: bottomShadowOpacity }}
          />
        </div>
        
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </section>



      {/* Section Avis Clients - Design Moderne */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        {/* Éléments décoratifs de fond */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <SimpleWrapper>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#03144a] to-[#1e40af] bg-clip-text text-transparent mb-6">
                Avis clients ClimGO à Andernos-les-Bains
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Découvrez ce que nos clients disent de nos services de chauffage et climatisation
              </p>
            </div>
          </SimpleWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Carte Avis 1 */}
            <SimpleWrapper>
              <motion.div 
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 dark:border-gray-700"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Badge de vérification */}
                <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                  ✓ Vérifié
                </div>
                
                {/* Note avec étoiles */}
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400 mr-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">5.0</span>
                </div>

                {/* Citation */}
                <div className="mb-6">
                  <svg className="w-8 h-8 text-blue-200 dark:text-blue-700 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed italic">
                    "Service impeccable ! Installation rapide et propre. L'équipe de ClimGO est très professionnelle et à l'écoute. Je recommande vivement."
                  </p>
                </div>

                {/* Auteur */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    MD
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Marie Dubois</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Andernos-les-Bains</p>
                  </div>
                </div>
              </motion.div>
            </SimpleWrapper>

            {/* Carte Avis 2 */}
            <SimpleWrapper>
              <motion.div 
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 dark:border-gray-700"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Badge de vérification */}
                <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                  ✓ Vérifié
                </div>
                
                {/* Note avec étoiles */}
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400 mr-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">5.0</span>
                </div>

                {/* Citation */}
                <div className="mb-6">
                  <svg className="w-8 h-8 text-blue-200 dark:text-blue-700 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed italic">
                    "Excellent travail pour l'installation de notre pompe à chaleur. Très satisfait du résultat et du service après-vente."
                  </p>
                </div>

                {/* Auteur */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    JM
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Jean Martin</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Andernos-les-Bains</p>
                  </div>
                </div>
              </motion.div>
            </SimpleWrapper>

            {/* Carte Avis 3 */}
            <SimpleWrapper>
              <motion.div 
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 dark:border-gray-700"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Badge de vérification */}
                <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                  ✓ Vérifié
                </div>
                
                {/* Note avec étoiles */}
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400 mr-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">5.0</span>
                </div>

                {/* Citation */}
                <div className="mb-6">
                  <svg className="w-8 h-8 text-blue-200 dark:text-blue-700 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed italic">
                    "Entreprise sérieuse et compétente. Installation de climatisation réalisée dans les temps avec un excellent rapport qualité-prix."
                  </p>
                </div>

                {/* Auteur */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    SL
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Sophie Laurent</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Andernos-les-Bains</p>
                  </div>
                </div>
              </motion.div>
            </SimpleWrapper>
          </div>

          {/* Call-to-action en bas */}
          <SimpleWrapper>
            <div className="text-center mt-12">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Rejoignez nos clients satisfaits !
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#03144a] to-[#1e40af] text-white font-semibold rounded-full hover:from-[#1e40af] hover:to-[#03144a] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Demander un devis gratuit
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </SimpleWrapper>
        </div>

        {/* Styles CSS personnalisés */}
        <style jsx>{`
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}</style>
      </section>

      <section
        className="relative py-20 mb-12 bg-gradient-to-br from-[#03144a] to-[#1e3a8a]"
      >
        <div className="absolute inset-0 bg-black/20 z-0" />
        <SimpleWrapper>
          <div className="relative z-10 bg-white/70 backdrop-blur-lg p-8 rounded-xl shadow-xl max-w-3xl mx-auto">
            <SimpleWrapper>
              <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Nos interventions à Andernos-les-Bains</h2>
            </SimpleWrapper>
            <SimpleWrapper>
              <p className="text-gray-800 leading-relaxed text-center">
                Du centre-ville au Bétey, nous couvrons tous les secteurs d'Andernos. Nos solutions s'adaptent aux constructions neuves comme aux maisons anciennes, avec un souci constant d'efficacité et de durabilité. Où que vous soyez, nous vous garantissons un service réactif et personnalisé.
              </p>
            </SimpleWrapper>
          </div>
        </SimpleWrapper>
      </section>

      <div
        className="relative py-20 bg-gradient-to-br from-[#1e40af] to-[#3b82f6]"
      >
        <div className="absolute inset-0 bg-black/20 z-0" />
        <div className="relative z-10 bg-white/80 backdrop-blur-md p-6 rounded-lg max-w-4xl mx-auto">
          <section className="mb-12">
            <SimpleWrapper>
              <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Pourquoi choisir ClimGO à Andernos-les-Bains ?</h2>
            </SimpleWrapper>
            <SimpleWrapper>
              <p className="text-gray-800 leading-relaxed mb-4 text-center">
                Choisir ClimGO à Andernos-les-Bains, c'est faire appel à des experts qui connaissent les contraintes spécifiques du climat local et la richesse environnementale de la commune.
              </p>
            </SimpleWrapper>
            <SimpleWrapper>
              <p className="text-gray-800 leading-relaxed mb-4 text-center">
                Matériaux performants, normes rigoureuses et finitions impeccables : chaque projet est traité avec la plus grande exigence, du premier contact à la mise en service.
              </p>
            </SimpleWrapper>
            <SimpleWrapper>
              <p className="text-gray-800 leading-relaxed text-center">
                Notre proximité nous permet d&apos;intervenir rapidement sur tout Andernos, pour des dépannages ou des installations urgentes sans attente.
              </p>
            </SimpleWrapper>
          </section>
        </div>
      </div>

      {/* Section Services - Design Moderne */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        {/* Éléments décoratifs de fond */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 left-20 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <SimpleWrapper>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#03144a] to-[#1e40af] bg-clip-text text-transparent mb-6">
                Nos Services ClimGO
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Des solutions complètes et personnalisées pour votre confort thermique à Andernos-les-Bains
              </p>
            </div>
          </SimpleWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Carte 1 - Types de logements */}
            <SimpleWrapper>
              <motion.div 
                className="group relative bg-gradient-to-br from-[#03144a] to-[#1e40af] rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-[#03144a]/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Icône avec effet de brillance */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-white/30 transition-all duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-white/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 text-center">Types de logements desservis</h3>
                <p className="text-white/90 leading-relaxed text-center text-lg">
                  Nous intervenons aussi bien dans les maisons individuelles neuves que dans les bâtisses traditionnelles rénovées. Notre expérience nous permet d'adapter nos solutions aux contraintes architecturales et énergétiques propres à chaque logement.
                </p>

                {/* Badge de service */}
                <div className="mt-6 text-center">
                  <span className="inline-block bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-full">
                    Tous types d'habitats
                  </span>
                </div>
              </motion.div>
            </SimpleWrapper>

            {/* Carte 2 - Processus d'installation */}
            <SimpleWrapper>
              <motion.div 
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-gray-100 dark:border-gray-700"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Icône avec effet de brillance */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto group-hover:from-yellow-300 group-hover:to-orange-400 transition-all duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-yellow-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                </div>

                <h3 className="text-2xl font-bold text-[#03144a] dark:text-white mb-4 text-center">Processus d'installation</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center text-lg">
                  Après une étude personnalisée de votre habitat, nous vous proposons un devis gratuit et détaillé. Nos équipes assurent ensuite une installation soignée, en respectant les délais convenus et les normes en vigueur.
                </p>

                {/* Badge de service */}
                <div className="mt-6 text-center">
                  <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-medium px-4 py-2 rounded-full">
                    Devis gratuit
                  </span>
                </div>
              </motion.div>
            </SimpleWrapper>

            {/* Carte 3 - Entretien & maintenance */}
            <SimpleWrapper>
              <motion.div 
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-gray-100 dark:border-gray-700"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Icône avec effet de brillance */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto group-hover:from-green-300 group-hover:to-blue-400 transition-all duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-green-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                </div>

                <h3 className="text-2xl font-bold text-[#03144a] dark:text-white mb-4 text-center">Entretien & maintenance</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center text-lg">
                  Pour garantir la performance et la durabilité de vos équipements, nous proposons des contrats d'entretien personnalisés avec des visites régulières pour vérification, nettoyage et optimisation.
                </p>

                {/* Badge de service */}
                <div className="mt-6 text-center">
                  <span className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white text-sm font-medium px-4 py-2 rounded-full">
                    Contrats personnalisés
                  </span>
                </div>
              </motion.div>
            </SimpleWrapper>

            {/* Carte 4 - Aides financières */}
            <SimpleWrapper>
              <motion.div 
                className="group relative bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-purple-500/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Icône avec effet de brillance */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-white/30 transition-all duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-white/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 text-center">Aides financières à Andernos-les-Bains</h3>
                <p className="text-white/90 leading-relaxed text-center text-lg">
                  Nous vous accompagnons dans l'obtention des aides telles que MaPrimeRénov', les Certificats d'Économies d'Énergie (CEE), la TVA réduite ou l'Éco-PTZ, afin de rendre vos projets plus accessibles et avantageux.
                </p>

                {/* Badge de service */}
                <div className="mt-6 text-center">
                  <span className="inline-block bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-full">
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
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#03144a] to-[#1e40af] text-white font-semibold rounded-full hover:from-[#1e40af] hover:to-[#03144a] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
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

      <div
        className="relative py-20 mb-12 bg-gradient-to-br from-[#03144a] to-[#1e3a8a]"
      >
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="relative z-10 bg-white/60 backdrop-blur-md p-6 rounded-lg max-w-4xl mx-auto px-4">
          <section>
            <SimpleWrapper>
              <h2 className="text-2xl font-semibold text-[#03144a] mb-6 text-center">Mini FAQ locale</h2>
            </SimpleWrapper>
            <div className="space-y-4">
              <SimpleWrapper>
                <div className="bg-white/80 rounded-lg p-4">
                  <h3 className="font-semibold text-[#03144a] mb-2">Quels sont vos services à Andernos-les-Bains ?</h3>
                  <p className="text-gray-700">Nous assurons l'installation, l'entretien et le dépannage de systèmes de chauffage, climatisation et production d'eau chaude à Andernos et ses alentours.</p>
                </div>
              </SimpleWrapper>
              <SimpleWrapper>
                <div className="bg-white/80 rounded-lg p-4">
                  <h3 className="font-semibold text-[#03144a] mb-2">Proposez-vous un accompagnement pour les aides ?</h3>
                  <p className="text-gray-700">Oui. Nous vous guidons dans les démarches pour obtenir MaPrimeRénov', les CEE, la TVA réduite ou l'Éco-PTZ, selon votre projet.</p>
                </div>
              </SimpleWrapper>
              <SimpleWrapper>
                <div className="bg-white/80 rounded-lg p-4">
                  <h3 className="font-semibold text-[#03144a] mb-2">Intervenez-vous dans les quartiers d'Andernos ?</h3>
                  <p className="text-gray-700">Absolument. Nos techniciens se déplacent dans tous les quartiers d'Andernos, notamment le centre-ville, le Bétey, la Jetée ou encore les zones pavillonnaires.</p>
                </div>
              </SimpleWrapper>
            </div>
          </section>
        </div>
      </div>

    {/* Ajout des sections enrichies pour Andernos-les-Bains */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 my-12">
      <SimpleWrapper>
        <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-[#03144a] mb-4 text-center">Un cadre de vie recherché au bord du Bassin</h2>
          <p className="text-[#03144a] leading-relaxed text-center">
            Située entre plages, forêt et piste cyclable, Andernos-les-Bains séduit par son cadre naturel privilégié. Avec ses 12 000 habitants, la ville attire aussi bien les familles en quête de tranquillité que les retraités ou jeunes actifs souhaitant s'installer à proximité de Bordeaux.
          </p>
          <p className="text-[#03144a] leading-relaxed text-center">
            Le centre-ville dynamique, le port ostréicole typique, les établissements scolaires et les nombreuses pistes cyclables font d'Andernos une commune vivante toute l'année. La zone de la Jetée, le quartier du Bétey ou encore Coubertin accueillent une diversité de logements adaptés à tous les styles de vie.
          </p>
          <p className="text-[#03144a] leading-relaxed text-center">
            ClimGO intervient dans tous les quartiers d'Andernos, des villas contemporaines du port aux maisons typiques du centre, en passant par les nouvelles constructions côté Mauret ou Grand Large.
          </p>
        </div>
      </SimpleWrapper>

      <SimpleWrapper>
        <div className="bg-[#03144a]/90 backdrop-blur-md rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-white mb-4 text-center">Exemples concrets d'interventions à Andernos</h2>
          <p className="text-white leading-relaxed text-center">
            • Quartier du Bétey : installation d'une pompe à chaleur air/air dans une maison secondaire, avec optimisation acoustique pour le voisinage.
          </p>
          <p className="text-white leading-relaxed text-center">
            • Avenue Pasteur : remplacement d'un ancien chauffage au gaz par une PAC air/eau haute performance pour une résidence principale de plain-pied.
          </p>
          <p className="text-white leading-relaxed text-center">
            • Rue du Port : entretien annuel d'un système multisplit Mitsubishi dans une maison rénovée avec vue sur le Bassin.
          </p>
          <p className="text-white leading-relaxed text-center">
            • Lotissement Coubertin : pose d'un chauffe-eau thermodynamique compact dans une construction neuve RT2012.
          </p>
        </div>
      </SimpleWrapper>

      <SimpleWrapper>
        <div className="bg-[#03144a]/90 backdrop-blur-md rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-white mb-4 text-center">Un savoir-faire adapté à l'environnement andernosien</h2>
          <p className="text-white leading-relaxed text-center">
            L'air marin, l'humidité du Bassin et la proximité des pins exigent des installations robustes et bien pensées. Chez ClimGO, chaque PAC est installée avec des supports surélevés et des traitements anticorrosion pour résister aux conditions locales.
          </p>
          <p className="text-white leading-relaxed text-center">
            Nous tenons compte des expositions souvent plein ouest, de l'ombre partielle liée aux grands arbres, et des contraintes de voisinage, pour assurer un confort optimal en toute saison.
          </p>
        </div>
      </SimpleWrapper>

      <SimpleWrapper>
        <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-[#03144a] mb-4 text-center">Un projet thermique à Andernos ? On en parle ?</h2>
          <p className="text-[#03144a] leading-relaxed text-center">
            Vous habitez Andernos-les-Bains ou venez d'acquérir un bien ? Nos conseillers sont à votre écoute pour définir ensemble une solution de chauffage, climatisation ou production d'eau chaude parfaitement adaptée à votre logement. Contactez-nous pour un diagnostic gratuit.
          </p>
        </div>
      </SimpleWrapper>
    </div>
     <section className="text-center my-20">
        <h2 className="text-2xl font-semibold text-[#03144a] mb-6 text-center">Besoin d&apos;un devis à Andernos-les-Bains ?</h2>
        <p className="text-gray-800 leading-relaxed mb-6 text-center">
          Faites confiance à ClimGO pour vos projets. Contactez-nous dès maintenant pour un devis gratuit et personnalisé.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#03144a] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#021037] transition"
        >
          Demandez votre devis gratuit à Andernos-les-Bains
        </a>
      </section>

      {/* Section Carte en pleine largeur collée au footer */}
      <section className="relative w-full overflow-hidden bg-white dark:bg-white">
        
        <div className="relative z-10 w-full px-4">
          <SimpleWrapper>
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-light text-[#03144a] dark:text-white mb-4 tracking-tight">
                Notre zone d&apos;intervention
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Découvrez où ClimGO intervient à Andernos-les-Bains et dans tout le Bassin d&apos;Arcachon
              </p>
            </div>
          </SimpleWrapper>

          <SimpleWrapper>
            <div className="relative w-full">
              {/* Carte Google Maps en pleine largeur */}
              <div className="relative w-full h-[600px] transform hover:scale-[1.02] transition-transform duration-700 ease-out">
                <iframe
                  src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&q=Andernos-les-Bains,France&zoom=13&center=44.7457,-1.1035`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ClimGO - Zone d'intervention à Andernos-les-Bains, Bassin d'Arcachon"
                  aria-label="Carte Google Maps montrant la zone d'intervention de ClimGO à Andernos-les-Bains et dans le Bassin d'Arcachon"
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


