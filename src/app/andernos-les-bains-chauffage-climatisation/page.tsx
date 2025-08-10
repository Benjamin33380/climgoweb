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
              <Link href="/zones-desservies" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                Zones desservies
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-gray-500 dark:text-gray-400">
              Andernos-les-Bains
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
        </Breadcrumb>
      </div>
      
      {/* Section Bassin d'Arcachon - Texte défilant au scroll */}
      <section className="relative py-12 overflow-hidden">
        <div
          className="absolute inset-0 -z-10 w-full h-full bg-white dark:bg-black"
          aria-hidden="true"
        ></div>
        
        {/* Titre centré */}
        <div className="relative z-10 container mx-auto px-4 mb-4">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-800 dark:text-white text-center">
            Chauffage Climatisation Andernos-les-Bains - ClimGO Bassin d&apos;Arcachon
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
                  Située au bord du bassin, <strong className="text-gray-900 dark:text-white">Andernos-les-Bains</strong> séduit par son cadre maritime et ses quartiers variés, du centre-ville animé au <strong className="text-gray-900 dark:text-white">Bétey</strong> paisible. ClimGO adapte ses solutions à chaque type d'habitat pour garantir votre confort thermique toute l'année.
                </p>
                
                <p className="text-base text-gray-800 dark:text-gray-200 leading-normal">
                  Nous accompagnons les <strong className="text-gray-900 dark:text-white">familles</strong>, <strong className="text-gray-900 dark:text-white">retraités</strong> et <strong className="text-gray-900 dark:text-white">nouveaux arrivants</strong> dans leurs projets d'installation, en tenant compte des spécificités locales et des réglementations environnementales.
                </p>
                
                <p className="text-base text-gray-800 dark:text-gray-200 leading-normal">
                  Chaque intervention vise à optimiser la <strong className="text-gray-900 dark:text-white">performance énergétique</strong> de votre logement tout en respectant l'intégration harmonieuse dans ce cadre naturel et urbain.
                </p>
                
                <p className="text-base text-gray-800 dark:text-gray-200 leading-normal">
                  Notre expertise locale nous permet de comprendre les <strong className="text-gray-900 dark:text-white">contraintes climatiques</strong> du Bassin d'Arcachon : l'humidité marine, les vents côtiers et les variations saisonnières qui influencent le choix des équipements et leur installation.
                </p>
                
                <p className="text-base text-gray-800 dark:text-gray-200 leading-normal">
                  Nous privilégions les <strong className="text-gray-900 dark:text-white">solutions durables</strong> et respectueuses de l'environnement, en accord avec la sensibilité écologique des habitants d'Andernos et les réglementations en vigueur dans cette zone protégée.
                </p>
                
                <p className="text-base text-gray-800 dark:text-gray-200 leading-normal">
                  De la <strong className="text-gray-900 dark:text-white">pompe à chaleur</strong> à la <strong className="text-gray-900 dark:text-white">climatisation réversible</strong>, en passant par la <strong className="text-gray-900 dark:text-white">production d'eau chaude sanitaire</strong>, nos solutions s'adaptent à chaque type de logement et à chaque budget.
                </p>
                
                <p className="text-base text-gray-800 dark:text-gray-200 leading-normal">
                  Notre équipe d'<strong className="text-gray-900 dark:text-white">experts certifiés</strong> intervient dans tous les quartiers d'Andernos, du centre historique aux résidences modernes du Bétey, en passant par les maisons traditionnelles du port ostréicole.
                </p>
                
                <p className="text-base text-gray-800 dark:text-gray-200 leading-normal">
                  Nous garantissons un <strong className="text-gray-900 dark:text-white">service personnalisé</strong> et un suivi rigoureux de chaque projet, de la première visite à la mise en service, en passant par l'installation et la maintenance préventive.
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
        `}</style>
      </section>

      {/* Section 4 blocs horizontaux avec ScrollShadow HeroUI */}
      <section className="py-20 bg-white dark:bg-black">
        <SimpleWrapper>
          <div className="max-w-7xl mx-auto">
            <div className="relative max-w-full overflow-hidden">
              {/* Ombre gauche */}
              <div className="absolute left-0 top-0 bottom-0 w-90 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-black dark:via-black/80 z-10 pointer-events-none" />
              
              {/* Ombre droite */}
              <div className="absolute right-0 top-0 bottom-0 w-90 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-black dark:via-black/80 z-10 pointer-events-none" />
              
              <div className="overflow-x-auto">
                <div className="flex space-x-8 min-w-max px-4" style={{ marginLeft: 'calc(50% - 144px)', marginRight: 'calc(50% - 144px)' }}>
                  {/* Bloc 1 */}
                  <div className="w-72 flex-shrink-0 bg-white dark:bg-black rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Un cadre de vie recherché au bord du Bassin
                    </h3>
                    <div className="space-y-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                      <p>
                        Située entre plages, forêt et piste cyclable, <strong className="text-gray-900 dark:text-white">Andernos-les-Bains</strong> séduit par son cadre naturel privilégié. Avec ses 12 000 habitants, la ville attire aussi bien les familles en quête de tranquillité que les retraités ou jeunes actifs souhaitant s'installer à proximité de Bordeaux.
                      </p>
                      <p>
                        Le centre-ville dynamique, le port ostréicole typique, les établissements scolaires et les nombreuses pistes cyclables font d'Andernos une commune vivante toute l'année.
                      </p>
                    </div>
                  </div>
                  
                  {/* Bloc 2 */}
                  <div className="w-72 flex-shrink-0 bg-white dark:bg-black rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Exemples concrets d'interventions à Andernos
                    </h3>
                    <div className="space-y-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p><strong>Quartier du Bétey :</strong> installation d'une pompe à chaleur air/air dans une maison secondaire, avec optimisation acoustique pour le voisinage.</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p><strong>Avenue Pasteur :</strong> remplacement d'un ancien chauffage au gaz par une PAC air/eau haute performance pour une résidence principale de plain-pied.</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p><strong>Rue du Port :</strong> entretien annuel d'un système multisplit Mitsubishi dans une maison rénovée avec vue sur le Bassin.</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bloc 3 */}
                  <div className="w-72 flex-shrink-0 bg-white dark:bg-black rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Un savoir-faire adapté à l'environnement andernosien
                    </h3>
                    <div className="space-y-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                      <p>
                        L'air marin, l'humidité du Bassin et la proximité des pins exigent des installations robustes et bien pensées. Chez ClimGO, chaque PAC est installée avec des supports surélevés et des traitements anticorrosion pour résister aux conditions locales.
                      </p>
                      <p>
                        Nous tenons compte des expositions souvent plein ouest, de l'ombre partielle liée aux grands arbres, et des contraintes de voisinage, pour assurer un confort optimal en toute saison.
                      </p>
                    </div>
                  </div>
                  
                  {/* Bloc 4 */}
                  <div className="w-72 flex-shrink-0 bg-white dark:bg-black rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Un projet thermique à Andernos ? On en parle ?
                    </h3>
                    <div className="space-y-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                      <p>
                        Vous habitez <strong className="text-gray-900 dark:text-white">Andernos-les-Bains</strong> ou venez d'acquérir un bien ? Nos conseillers sont à votre écoute pour définir ensemble une solution de chauffage, climatisation ou production d'eau chaude parfaitement adaptée à votre logement.
                      </p>
                      <p>
                        Contactez-nous pour un <strong className="text-gray-900 dark:text-white">Devis gratuit</strong> et personnalisé.
                      </p>
                      <div className="mt-4">
                        <a
                          href="/contact"
                          className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors duration-300"
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

      {/* Section Nos interventions - Timeline verticale élégante */}
      <section className="relative py-24 overflow-hidden bg-white dark:bg-black">
        
        <SimpleWrapper>
          <div className="relative z-10 max-w-6xl mx-auto px-4">
            {/* Titre avec animation */}
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Nos interventions à Andernos-les-Bains
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Du centre-ville au Bétey, nous couvrons tous les secteurs d'Andernos. Nos solutions s'adaptent aux constructions neuves comme aux maisons anciennes, avec un souci constant d'efficacité et de durabilité.
              </p>
            </div>
            
            {/* Timeline verticale */}
            <div className="relative">
              {/* Ligne de connexion */}
              <div className="absolute left-1/2 transform -translate-x-px w-0.5 h-full bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500" />
              
              {/* Étape 1 */}
              <div className="relative flex items-center mb-16">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-2xl flex items-center justify-center z-10">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                
                <div className="w-5/12 pr-8 text-right">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Centre-ville & Bétey</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Interventions dans tous les quartiers d'Andernos, du centre animé au Bétey paisible, avec des solutions adaptées à chaque type d'habitat.
                  </p>
                </div>
              </div>
              
              {/* Étape 2 */}
              <div className="relative flex items-center mb-16">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full shadow-2xl flex items-center justify-center z-10">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                
                <div className="w-5/12 ml-auto pl-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Constructions & Rénovations</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Solutions adaptées aux constructions neuves comme aux maisons anciennes, avec un souci constant d'efficacité et de durabilité.
                  </p>
                </div>
              </div>
              
              {/* Étape 3 */}
              <div className="relative flex items-center mb-16">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full shadow-2xl flex items-center justify-center z-10">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                
                <div className="w-5/12 pr-8 text-right">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Service Réactif</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Où que vous soyez, nous vous garantissons un service réactif et personnalisé, avec des interventions rapides et efficaces.
                  </p>
                </div>
              </div>
              
              {/* Étape 4 */}
              <div className="relative flex items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full shadow-2xl flex items-center justify-center z-10">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                <div className="w-5/12 ml-auto pl-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Excellence Garantie</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Chaque intervention est réalisée avec la plus grande exigence, du premier contact à la mise en service, pour votre satisfaction totale.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Call-to-action */}
            <div className="text-center mt-16">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white font-semibold rounded-full hover:from-gray-700 hover:to-gray-900 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
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

      {/* Section Pourquoi choisir - Stats cards avec icônes */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e40af]/10 via-blue-100/30 to-[#3b82f6]/10 dark:from-[#1e40af]/20 dark:via-gray-900/50 dark:to-[#3b82f6]/20" />
        
        <SimpleWrapper>
          <div className="relative z-10 max-w-7xl mx-auto px-4">
            {/* Titre principal */}
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Pourquoi choisir ClimGO à Andernos-les-Bains ?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Choisir ClimGO à Andernos-les-Bains, c'est faire appel à des experts qui connaissent les contraintes spécifiques du climat local et la richesse environnementale de la commune.
              </p>
            </div>
            
            {/* Grid de stats cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {/* Card 1 - Expertise locale */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 rounded-3xl p-8 text-center hover:transform hover:-translate-y-2 transition-all duration-500 shadow-xl hover:shadow-2xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Expertise Locale</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Connaissance approfondie du climat local et de l'environnement andernosien
                  </p>
                </div>
              </div>
              
              {/* Card 2 - Qualité */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 rounded-3xl p-8 text-center hover:transform hover:-translate-y-2 transition-all duration-500 shadow-xl hover:shadow-2xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Qualité Premium</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Matériaux performants, normes rigoureuses et finitions impeccables
                  </p>
                </div>
              </div>
              
              {/* Card 3 - Proximité */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 rounded-3xl p-8 text-center hover:transform hover:-translate-y-2 transition-all duration-500 shadow-xl hover:shadow-2xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Proximité</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Intervention rapide sur tout Andernos, dépannages et installations urgentes
                  </p>
                </div>
              </div>
              
              {/* Card 4 - Excellence */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 rounded-3xl p-8 text-center hover:transform hover:-translate-y-2 transition-all duration-500 shadow-xl hover:shadow-2xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Excellence</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Chaque projet traité avec la plus grande exigence, du premier contact à la mise en service
                  </p>
                </div>
              </div>
            </div>
            
            {/* Section de texte détaillé */}
            <div className="bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 rounded-3xl p-12 shadow-2xl max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Savoir-faire reconnu</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Notre équipe d'experts maîtrise parfaitement les spécificités du climat local et la richesse environnementale de la commune d'Andernos-les-Bains.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Service personnalisé</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Chaque intervention est adaptée aux besoins spécifiques de votre habitat, avec un accompagnement complet du début à la fin de votre projet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SimpleWrapper>
      </section>

      {/* Section Services - Design Moderne */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-white/80 via-gray-50/80 to-blue-50/80 dark:from-gray-900/80 dark:via-gray-800/80 dark:to-blue-900/80 z-10">
        {/* Éléments décoratifs de fond */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 left-20 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <SimpleWrapper>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
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
                className="group relative bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-gray-900/20"
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

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">Processus d'installation</h3>
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

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">Entretien & maintenance</h3>
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
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white font-semibold rounded-full hover:from-gray-700 hover:to-gray-900 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
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

      {/* Section FAQ - Accordéon moderne */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#03144a]/10 via-blue-50/30 to-[#1e3a8a]/10 dark:from-[#03144a]/20 dark:via-gray-900/50 dark:to-[#1e3a8a]/20" />
        
        <SimpleWrapper>
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            {/* Titre */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Questions fréquentes
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Tout ce que vous devez savoir sur nos services à Andernos-les-Bains
              </p>
            </div>
            
            {/* Accordéon */}
            <div className="space-y-4">
              {/* Question 1 */}
              <div className="group">
                <div className="bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="p-6 cursor-pointer group-hover:bg-gradient-to-r group-hover:from-blue-50/50 group-hover:to-purple-50/50 dark:group-hover:from-gray-800/50 dark:group-hover:to-gray-700/50 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-gray-700 transition-colors duration-300">
                        Quels sont vos services à Andernos-les-Bains ?
                      </h3>
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-5 h-5 text-white transform group-hover:rotate-45 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Nous assurons l'installation, l'entretien et le dépannage de systèmes de chauffage, climatisation et production d'eau chaude à Andernos et ses alentours.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Question 2 */}
              <div className="group">
                <div className="bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="p-6 cursor-pointer group-hover:bg-gradient-to-r group-hover:from-green-50/50 group-hover:to-blue-50/50 dark:group-hover:from-gray-800/50 dark:group-hover:to-gray-700/50 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-[#03144a] dark:text-white group-hover:text-[#1e40af] transition-colors duration-300">
                        Proposez-vous un accompagnement pour les aides ?
                      </h3>
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-5 h-5 text-white transform group-hover:rotate-45 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Oui. Nous vous guidons dans les démarches pour obtenir MaPrimeRénov', les CEE, la TVA réduite ou l'Éco-PTZ, selon votre projet.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Question 3 */}
              <div className="group">
                <div className="bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="p-6 cursor-pointer group-hover:bg-gradient-to-r group-hover:from-purple-50/50 group-hover:to-pink-50/50 dark:group-hover:from-gray-800/50 dark:group-hover:to-gray-700/50 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-[#03144a] dark:text-white group-hover:text-[#1e40af] transition-colors duration-300">
                        Intervenez-vous dans les quartiers d'Andernos ?
                      </h3>
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-5 h-5 text-white transform group-hover:rotate-45 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Absolument. Nos techniciens se déplacent dans tous les quartiers d'Andernos, notamment le centre-ville, le Bétey, la Jetée ou encore les zones pavillonnaires.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Call-to-action */}
            <div className="text-center mt-12">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Vous avez d'autres questions ?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white font-semibold rounded-full hover:from-gray-700 hover:to-gray-900 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contactez-nous
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
            </div>
          </div>
        </SimpleWrapper>
      </section>



      {/* Section Carte en pleine largeur */}
      <section className="relative w-full overflow-hidden bg-white dark:bg-white">
        <div className="relative z-10 w-full px-4">
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


