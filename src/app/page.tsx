'use client';

import Link from "next/link";
import { motion } from 'framer-motion';
import { Search, MapPin, Euro } from "lucide-react";
import { useState, useEffect } from "react";
import { SimpleWrapper } from '@/components/ui/SimpleWrapper';
import Services from '@/components/Services';
import GoogleReviews from '@/components/GoogleReviews';
// Importations breadcrumb supprimées car non utilisées

export default function HomePage() {

  // Images hero avec rotation
  const heroImages = [
    '/img/clim-caudéran.jpeg',
    '/img/uicauderan.jpeg',
    '/img/sdb-pyla.jpeg'
  ];
  
  // État pour l'index de l'image actuelle
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Changement automatique d'image toutes les 20 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 20000); // 20 secondes
    
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Composant CitySearch
  const CitySearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [showSearchResults, setShowSearchResults] = useState(false);

    const cities = [
      { name: 'Arcachon', url: '/villes/arcachon-chauffage-climatisation' },
      { name: 'La Teste-de-Buch', url: '/villes/la-teste-de-buch-chauffage-climatisation' },
      { name: 'Gujan-Mestras', url: '/villes/gujan-mestras-chauffage-climatisation' },
      { name: 'Le Teich', url: '/villes/le-teich-chauffage-climatisation' },
      { name: 'Biganos', url: '/villes/biganos-chauffage-climatisation' },
      { name: 'Audenge', url: '/villes/audenge-chauffage-climatisation' },
      { name: 'Lanton', url: '/villes/lanton-chauffage-climatisation' },
      { name: 'Andernos-les-Bains', url: '/villes/andernos-les-bains-chauffage-climatisation' },
      { name: 'Arès', url: '/villes/ares-chauffage-climatisation' },
      { name: 'Lège Cap Ferret', url: '/villes/lege-cap-ferret-chauffage-climatisation' },
      { name: 'Marcheprime', url: '/villes/marcheprime-chauffage-climatisation' },
      { name: 'Le Barp', url: '/villes/le-barp-chauffage-climatisation' },
      { name: 'Mios', url: '/villes/mios-chauffage-climatisation' },
      { name: 'Salles', url: '/villes/salles-chauffage-climatisation' },
      { name: 'Belin-Béliet', url: '/villes/belin-beliet-chauffage-climatisation' },
      { name: 'Sanguinet', url: '/villes/sanguinet-chauffage-climatisation' },
      { name: 'Parentis-en-Born', url: '/villes/parentis-chauffage-climatisation' },
      { name: 'Biscarrosse', url: '/villes/biscarrosse-chauffage-climatisation' },
      { name: 'Mimizan', url: '/villes/mimizan-chauffage-climatisation' },
      { name: 'Canéjan', url: '/villes/canejan-chauffage-climatisation' },
      { name: 'Gradignan', url: '/villes/gradignan-chauffage-climatisation' },
      { name: 'Saucats', url: '/villes/saucats-chauffage-climatisation' },
      { name: 'Saint-Selve', url: '/villes/saint-selve-chauffage-climatisation' },
      { name: 'Martillac', url: '/villes/martillac-chauffage-climatisation' },
      { name: 'Léognan', url: '/villes/leognan-chauffage-climatisation' },
      { name: 'La Brède', url: '/villes/la-brede-chauffage-climatisation' },
      { name: 'Cadaujac', url: '/villes/cadaujac-chauffage-climatisation' },
      { name: 'Cestas', url: '/villes/cestas-chauffage-climatisation' },
      { name: 'Bordeaux', url: '/villes/bordeaux-chauffage-climatisation' },
      { name: 'Le Haillan', url: '/villes/le-haillan-chauffage-climatisation' },
      { name: 'Le Bouscat', url: '/villes/le-bouscat-chauffage-climatisation' },
      { name: 'Bruges', url: '/villes/bruges-chauffage-climatisation' },
      { name: 'Eysines', url: '/villes/eysines-chauffage-climatisation' },
      { name: 'Bouliac', url: '/villes/bouliac-chauffage-climatisation' },
      { name: 'Mérignac', url: '/villes/merignac-chauffage-climatisation' },
      { name: 'Pessac', url: '/villes/pessac-chauffage-climatisation' },
      { name: 'Talence', url: '/villes/talence-chauffage-climatisation' },
      { name: "Villenave-d'Ornon", url: '/villes/villenave-d-ornon-chauffage-climatisation' },
      { name: 'Bègles', url: '/villes/begles-chauffage-climatisation' },
      { name: 'Lacanau', url: '/villes/lacanau-chauffage-climatisation' },
      { name: 'Saint-Loubès', url: '/villes/saint-loubes-chauffage-climatisation' },
      { name: "Saint-Jean-d'Illac", url: '/villes/saint-jean-d-illac-chauffage-climatisation' },
      { name: "Saint-Médard-en-Jalles", url: '/villes/saint-medard-en-jalles-chauffage-climatisation' },
      { name: "Saint-Aubin-de-Médoc", url: '/villes/saint-aubin-de-medoc-chauffage-climatisation' },
      { name: 'Martignas-sur-Jalle', url: '/villes/martignas-sur-jalle-chauffage-climatisation' }
    ];

    // Filtrer les villes basé sur la recherche
    const filteredCities = cities.filter(city =>
      city.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div className="max-w-[220px] xs:max-w-[240px] sm:max-w-xs md:max-w-sm lg:max-w-md relative">
        <div className="relative">
          <Search className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-white sm:text-muted-foreground dark:text-muted-foreground w-3 sm:w-4 h-3 sm:h-4" />
          <input
            type="text"
            placeholder="Rechercher votre ville..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowSearchResults(e.target.value.length > 0);
            }}
            onFocus={() => setShowSearchResults(searchQuery.length > 0)}
            className="w-full bg-white/30 sm:bg-background/90 dark:bg-background/10 backdrop-blur-md border border-white/50 sm:border-border dark:border-border rounded-lg px-5 xs:px-6 sm:px-8 py-1.5 xs:py-2 sm:py-2 text-white sm:text-foreground dark:text-white placeholder-white/70 sm:placeholder-muted-foreground dark:placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-xs xs:text-xs sm:text-sm"
          />
          <MapPin className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-white sm:text-muted-foreground dark:text-muted-foreground w-3 sm:w-4 h-3 sm:h-4" />
        </div>
        
        {/* Résultats de recherche */}
        {showSearchResults && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-background/95 backdrop-blur-md rounded-xl shadow-2xl border border-border max-h-60 overflow-y-auto z-50">
            {filteredCities.length > 0 ? (
              filteredCities.slice(0, 8).map((city, index) => (
                <Link
                  key={index}
                  href={city.url}
                  onClick={() => {
                    setSearchQuery('');
                    setShowSearchResults(false);
                  }}
                  className="block w-full text-left px-4 py-3 hover:bg-muted/50 text-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  {city.name}
                </Link>
              ))
            ) : (
              <div className="px-4 py-3 text-muted-foreground">
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
      <section className="relative h-[100vh] xs:h-[95vh] sm:h-[90vh] min-h-[500px] xs:min-h-[550px] sm:min-h-[600px] md:min-h-[640px] lg:min-h-[700px] xl:min-h-[750px] w-full overflow-hidden bg-white dark:bg-black text-black dark:text-white">
        {/* Zone image avec effet zoom - Responsive avec adaptation mobile */}
        <motion.div
          className="absolute top-0 right-0 h-full w-full sm:w-2/3"
          aria-hidden
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Version mobile - image plein écran */}
          <div className="block sm:hidden relative h-full w-full overflow-hidden">
            <motion.img
              key={`mobile-${currentImageIndex}`}
              src={heroImages[currentImageIndex]}
              alt="ClimGO - Installation climatisation"
              className="h-full w-full object-cover object-center"
              initial={{ scale: 1 }}
              animate={{ scale: 1.2 }}
              transition={{ duration: 18, ease: "easeInOut" }}
            />
          </div>
          
          {/* Version desktop - forme diagonale */}
          <div 
            className="hidden sm:block relative h-full w-full overflow-hidden"
            style={{
              clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)'
            }}
          >
            <motion.img
              key={`desktop-${currentImageIndex}`}
              src={heroImages[currentImageIndex]}
              alt="ClimGO - Installation climatisation"
              className="h-full w-full object-cover object-center"
              initial={{ scale: 1 }}
              animate={{ scale: 1.2 }}
              transition={{ duration: 18, ease: "easeInOut" }}
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
            className="w-full xs:max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-light tracking-tight mb-2 xs:mb-3 sm:mb-4 md:mb-6 text-white sm:text-black dark:text-white break-words leading-tight">
              ClimGO
            </h1>
            <p className="text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-white/90 sm:text-black/90 dark:text-white/90 mb-3 xs:mb-4 sm:mb-4 md:mb-6 lg:mb-8 leading-relaxed max-w-[260px] xs:max-w-[280px] sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl whitespace-pre-line">
              Installateur de pompe à chaleur{'\n'}chauffage et climatisation
            </p>

            {/* Composant de recherche de villes */}
            <div className="mb-3 sm:mb-4 md:mb-6 lg:mb-8">
              <CitySearch />
            </div>

            <div className="flex flex-col xs:flex-row sm:flex-row gap-2 xs:gap-2 sm:gap-3 md:gap-4 lg:gap-5">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full px-3 xs:px-4 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-2 xs:py-2 sm:py-2.5 md:py-3 lg:py-4 text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg font-medium
                           bg-white dark:bg-black text-black dark:text-white hover:bg-white/90 dark:hover:bg-black/90
                           border border-black/20 dark:border-white/20
                           transition-all duration-300 transform hover:scale-105 shadow-lg min-w-[120px] xs:min-w-[130px] sm:min-w-[140px]"
              >
                Devis gratuit
              </Link>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full px-3 xs:px-4 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-2 xs:py-2 sm:py-2.5 md:py-3 lg:py-4 text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg font-medium
                           border-2 border-white/50 sm:border-black/50 dark:border-white/30 text-white sm:text-black dark:text-white hover:bg-white/15 sm:hover:bg-black/15 dark:hover:bg-white/10 hover:border-white/70 sm:hover:border-black/70 dark:hover:border-white/50
                           transition-all duration-300 backdrop-blur-sm min-w-[120px] xs:min-w-[130px] sm:min-w-[140px]"
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

      {/* Section Bassin d'Arcachon - Texte défilant au scroll */}
      <section className="relative py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 overflow-hidden">
        <div
          className="absolute inset-0 -z-10 w-full h-full bg-white dark:bg-black"
          aria-hidden="true"
        ></div>
        
        {/* Titre centré */}
        <div className="relative z-10 container mx-auto px-4 xs:px-6 sm:px-6 md:px-8 lg:px-12 mb-6 xs:mb-8 sm:mb-8 md:mb-12">
          <h2 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 dark:text-white text-center">
            Le confort, tout simplement.
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
            className="w-full h-[350px] xs:h-[380px] sm:h-[400px] md:h-[420px] px-4 xs:px-6 sm:px-6 md:px-8 lg:px-12 py-12 xs:py-16 sm:py-20 md:py-24 overflow-y-auto scrollbar-hide cursor-default"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
                        {/* Contenu centré dans la zone élargie */}
            <div className="max-w-3xl xs:max-w-4xl sm:max-w-4xl mx-auto">
              <div className="space-y-6 xs:space-y-8 sm:space-y-8 text-center pt-4 xs:pt-6 sm:pt-8 pb-12 xs:pb-16 sm:pb-20">
                
                {/* Introduction avec plus de taille */}
                <div className="space-y-4">
                  <p className="text-base xs:text-lg sm:text-xl md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed px-2 font-medium">
                    Imaginez rentrer chez vous en plein été, ouvrir la porte… et sentir une vague de fraîcheur vous envelopper. Ou, en plein hiver, poser vos mains sur un radiateur tiède pendant que dehors la pluie tombe sans relâche.
                  </p>

                  <p className="text-sm xs:text-base sm:text-lg md:text-lg text-gray-800 dark:text-gray-200 leading-relaxed px-2">
                    C'est ça, l'effet <strong>ClimGO</strong> : des installations pensées pour que votre maison devienne un cocon où il fait bon vivre, été comme hiver.
                  </p>
                </div>

                {/* Chapitre 1 avec ligne gradient */}
                <div className="my-8 xs:my-10 sm:my-12">
                  <div className="flex items-center justify-center mb-4">
                    <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent w-24"></div>
                    <h3 className="text-lg xs:text-xl sm:text-2xl md:text-2xl font-semibold text-gray-900 dark:text-white mx-6 bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
                      Ce qu'on vous apporte
                    </h3>
                    <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent w-24"></div>
                  </div>
                  <p className="text-sm xs:text-base sm:text-lg md:text-lg text-gray-800 dark:text-gray-200 leading-relaxed px-2">
                    Plus qu'un service technique, on installe du <strong>confort durable</strong>, de la <strong>tranquillité</strong> et de <strong>vraies économies</strong>. Chaque intervention est calibrée pour que vous oubliiez vos appareils… sauf quand vous profitez de leurs bienfaits.
                  </p>
                </div>

                {/* Chapitre 2 avec ligne gradient */}
                <div className="my-8 xs:my-10 sm:my-12">
                  <div className="flex items-center justify-center mb-4">
                    <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-24"></div>
                    <h3 className="text-lg xs:text-xl sm:text-2xl md:text-2xl font-semibold text-gray-900 dark:text-white mx-6 bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                      Avant / Après
                    </h3>
                    <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-24"></div>
                  </div>
                  <p className="text-sm xs:text-base sm:text-lg md:text-lg text-gray-800 dark:text-gray-200 leading-relaxed px-2">
                    Avant ClimGO : factures qui grimpent, appareils bruyants, confort inégal. Après ClimGO : une maison silencieuse, agréable, avec des économies visibles dès les premiers mois.
                  </p>
                </div>

                {/* Chapitre 3 avec ligne gradient */}
                <div className="my-8 xs:my-10 sm:my-12">
                  <div className="flex items-center justify-center mb-4">
                    <div className="h-px bg-gradient-to-r from-transparent via-orange-600 to-transparent w-24"></div>
                    <h3 className="text-lg xs:text-xl sm:text-2xl md:text-2xl font-semibold text-gray-900 dark:text-white mx-6 bg-gradient-to-r from-orange-600 to-blue-700 bg-clip-text text-transparent">
                      Notre promesse
                    </h3>
                    <div className="h-px bg-gradient-to-r from-transparent via-orange-600 to-transparent w-24"></div>
                  </div>
                  <p className="text-sm xs:text-base sm:text-lg md:text-lg text-gray-800 dark:text-gray-200 leading-relaxed px-2">
                    Intervenir vite, travailler propre, respecter vos délais et vous laisser avec un confort qui dure. Ni blabla, ni déco : juste du concret, garanti et certifié.
                  </p>
                </div>

                {/* Conclusion avec plus d'impact */}
                <div className="mt-10 xs:mt-12 sm:mt-14 space-y-3">
                  <p className="text-base xs:text-lg sm:text-xl md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed font-semibold px-2">
                    Avec <strong className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">ClimGO</strong>, vous investissez dans plus qu'un équipement : vous investissez dans votre quotidien.
                  </p>
                  <p className="text-sm xs:text-base sm:text-lg md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed px-2 italic">
                    Et si on commençait à transformer le vôtre ?
                  </p>
                </div>
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

      {/* Section Nos Engagements */}
      <section className="relative py-12 xs:py-16 sm:py-20 md:py-24 overflow-hidden bg-white dark:bg-black">
        <SimpleWrapper>
          <div className="relative z-10 max-w-6xl mx-auto px-4">
            {/* En-tête */}
            <div className="text-center mb-12 xs:mb-16 sm:mb-20">
              <h2 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 dark:text-white mb-4 xs:mb-6">
                Nos engagements, votre tranquillité
              </h2>
              <p className="text-sm xs:text-base sm:text-lg md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
                De l'étude aux aides, des travaux au suivi, on s'occupe de tout. Vous, vous profitez.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Ligne centrale - cachée sur mobile, visible sur desktop */}
              <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 w-px h-full bg-gray-300 dark:bg-gray-700 hidden md:block" />
              {/* Ligne verticale mobile - visible seulement sur mobile */}
              <div className="pointer-events-none absolute left-8 top-0 w-px h-full bg-gray-300 dark:bg-gray-700 md:hidden" />
              
              {/* Lumière qui défile - seulement sur desktop */}
              <div
                className="pointer-events-none absolute left-1/2 -translate-x-1/2 w-[2px] h-20 rounded-full hidden md:block"
                style={{
                  animation: 'lightMove 4s infinite linear',
                  background:
                    'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(255,255,255,0.8) 20%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.8) 80%, rgba(0,0,0,0) 100%)',
                  boxShadow: '0 0 24px rgba(255,255,255,.35)'
                }}
                aria-hidden="true"
              />

              {/* Étape 1 */}
              <div className="relative flex items-center mb-12 xs:mb-16">
                {/* Pastille */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 xs:w-14 xs:h-14 md:w-16 md:h-16 rounded-full shadow-lg bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center z-10">
                  <svg className="w-5 h-5 xs:w-6 xs:h-6 md:w-7 md:h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <path d="M14 2v6h6" />
                  </svg>
                </div>
                {/* Contenu mobile */}
                <div className="ml-20 md:hidden w-full">
                  <h3 className="text-lg xs:text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Clarté dès le départ
                  </h3>
                  <p className="text-sm xs:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    Audit énergétique précis, aides identifiées, <strong>devis 100% gratuit</strong> et sans surprise.
                    Vous profitez des aides <strong>sans avancer un centime</strong>.
                  </p>
                </div>
                {/* Contenu desktop */}
                <div className="hidden md:block w-5/12 pr-8 text-right">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Clarté dès le départ
                  </h3>
                  <p className="text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    Audit énergétique précis, aides identifiées, <strong>devis 100% gratuit</strong> et sans surprise.
                    Vous profitez des aides <strong>sans avancer un centime</strong>.
                  </p>
                </div>
                <div className="hidden md:block w-5/12" />
              </div>

              {/* Étape 2 */}
              <div className="relative flex items-center mb-12 xs:mb-16">
                <div className="hidden md:block w-5/12" />
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 xs:w-14 xs:h-14 md:w-16 md:h-16 rounded-full shadow-lg bg-gradient-to-br from-blue-600 to-orange-500 flex items-center justify-center z-10">
                  <svg className="w-5 h-5 xs:w-6 xs:h-6 md:w-7 md:h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {/* Contenu mobile */}
                <div className="ml-20 md:hidden w-full">
                  <h3 className="text-lg xs:text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Travaux garantis RGE
                  </h3>
                  <p className="text-sm xs:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    Équipes formées, grandes marques, <strong>zéro sous-traitance</strong>. Pose propre, délais respectés.
                  </p>
                </div>
                {/* Contenu desktop */}
                <div className="hidden md:block w-5/12 ml-auto pl-8">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Travaux garantis RGE
                  </h3>
                  <p className="text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    Équipes formées, grandes marques, <strong>zéro sous-traitance</strong>. Pose propre, délais respectés.
                  </p>
                </div>
              </div>

              {/* Étape 3 */}
              <div className="relative flex items-center mb-12 xs:mb-16">
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 xs:w-14 xs:h-14 md:w-16 md:h-16 rounded-full shadow-lg bg-gradient-to-br from-orange-600 to-blue-700 flex items-center justify-center z-10">
                  <svg className="w-5 h-5 xs:w-6 xs:h-6 md:w-7 md:h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 9h.01" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 9h.01" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {/* Contenu mobile */}
                <div className="ml-20 md:hidden w-full">
                  <h3 className="text-lg xs:text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Votre satisfaction, notre fierté
                  </h3>
                  <p className="text-sm xs:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    <strong>95% de clients nous recommandent</strong>. Suivi après installation, entretien et maintenance
                    pour un confort qui dure.
                  </p>
                </div>
                {/* Contenu desktop */}
                <div className="hidden md:block w-5/12 pr-8 text-right">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Votre satisfaction, notre fierté
                  </h3>
                  <p className="text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    <strong>95% de clients nous recommandent</strong>. Suivi après installation, entretien et maintenance
                    pour un confort qui dure.
                  </p>
                </div>
                <div className="hidden md:block w-5/12" />
              </div>

              {/* Étape 4 */}
              <div className="relative flex items-center">
                <div className="hidden md:block w-5/12" />
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 xs:w-14 xs:h-14 md:w-16 md:h-16 rounded-full shadow-lg bg-gradient-to-br from-blue-700 to-orange-600 flex items-center justify-center z-10">
                  <Euro className="w-5 h-5 xs:w-6 xs:h-6 md:w-7 md:h-7 text-white" />
                </div>
                {/* Contenu mobile */}
                <div className="ml-20 md:hidden w-full">
                  <h3 className="text-lg xs:text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Financement sur mesure
                  </h3>
                  <p className="text-sm xs:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    Aides mobilisées, paiements facilités, solutions adaptées à votre situation. <strong>Vous ne vous occupez de rien.</strong>
                  </p>
                </div>
                {/* Contenu desktop */}
                <div className="hidden md:block w-5/12 ml-auto pl-8">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Financement sur mesure
                  </h3>
                  <p className="text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    Aides mobilisées, paiements facilités, solutions adaptées à votre situation. <strong>Vous ne vous occupez de rien.</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div id="demander-devis" className="text-center mt-12 xs:mt-16">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 xs:px-7 py-3 rounded-full text-sm xs:text-base font-semibold
                           bg-white text-gray-900 ring-1 ring-black/10 shadow-md hover:shadow-lg
                           dark:bg-gray-100 dark:text-gray-900 transition-transform hover:-translate-y-0.5"
                aria-label="Obtenez votre devis gratuit"
              >
                Obtenez votre devis gratuit
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </SimpleWrapper>


      </section>

      {/* Section Google Reviews */}
      <GoogleReviews 
        placeId={process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID || "ClimGO-default-place-id"} 
      />


      {/* Section Carte en pleine largeur */}
      <section className="relative w-full overflow-hidden bg-white dark:bg-black">
        <div className="relative z-10 w-full px-4">
          <SimpleWrapper>
            <div className="relative w-full">
              {/* Carte Google Maps en pleine largeur */}
              <div className="relative w-full h-[600px] transform hover:scale-[1.02] transition-transform duration-700 ease-out">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.9835896155786!2d-0.8562622!3d44.6965443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x55e91babdbbad05%3A0x35eae658ca1b3c85!2sClimGO!5e0!3m2!1sfr!2sfr!4v1699999999999!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ClimGO - Localisation à Marcheprime"
                  aria-label="Carte Google Maps montrant la localisation de ClimGO à Marcheprime"
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