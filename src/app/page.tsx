'use client';

import Link from "next/link";
import { motion } from 'framer-motion';
import { Search, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { SimpleWrapper } from '@/components/ui/SimpleWrapper';
import Services from '@/components/Services';
import GoogleReviews from '@/components/GoogleReviews';
import FAQChat from '@/components/FAQChat';
// Importations breadcrumb supprimées car non utilisées

export default function HomePage() {

  // Liste des vidéos disponibles
  const videos = [
    '/mp4/sdbpyla.mp4',
    '/mp4/Gen-4 Turbo Cinematic slow push-in from low angle onto a high-end air-source heat pump on a modern wooden terrace Golden hour sunlight shimmering through tropical leaves, casting moving shadows on wa 4K.mp4'
  ];
  
  // État pour l'index de la vidéo actuelle
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
  // Changement automatique de vidéo toutes les 10 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 10000); // 10 secondes
    
    return () => clearInterval(interval);
  }, [videos.length]);

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
      <div className="max-w-[220px] xs:max-w-[240px] sm:max-w-xs md:max-w-sm lg:max-w-md relative">
        <div className="relative">
          <Search className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-white sm:text-gray-600 dark:text-gray-400 w-3 sm:w-4 h-3 sm:h-4" />
          <input
            type="text"
            placeholder="Rechercher votre ville..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowSearchResults(e.target.value.length > 0);
            }}
            onFocus={() => setShowSearchResults(searchQuery.length > 0)}
            className="w-full bg-white/30 sm:bg-white/90 dark:bg-white/10 backdrop-blur-md border border-white/50 sm:border-black/40 dark:border-white/30 rounded-lg px-5 xs:px-6 sm:px-8 py-1.5 xs:py-2 sm:py-2 text-white sm:text-black dark:text-white placeholder-white/70 sm:placeholder-gray-600 dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent text-xs xs:text-xs sm:text-sm"
          />
          <MapPin className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-white sm:text-gray-600 dark:text-gray-400 w-3 sm:w-4 h-3 sm:h-4" />
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
      <section className="relative h-[100vh] xs:h-[95vh] sm:h-[90vh] min-h-[500px] xs:min-h-[550px] sm:min-h-[600px] md:min-h-[640px] lg:min-h-[700px] xl:min-h-[750px] w-full overflow-hidden bg-white dark:bg-black text-black dark:text-white">
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
              key={currentVideoIndex}
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              src={videos[currentVideoIndex]}
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
              key={`desktop-${currentVideoIndex}`}
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              src={videos[currentVideoIndex]}
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
          <h2 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-gray-800 dark:text-white text-center">
            Notre savoir-faire
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
            className="w-full h-[250px] xs:h-[280px] sm:h-[300px] md:h-[320px] px-4 xs:px-6 sm:px-6 md:px-8 lg:px-12 py-12 xs:py-16 sm:py-20 md:py-24 overflow-y-auto scrollbar-hide cursor-default"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {/* Contenu centré dans la zone élargie */}
            <div className="max-w-3xl xs:max-w-4xl sm:max-w-4xl mx-auto">
              <div className="space-y-3 xs:space-y-4 sm:space-y-4 text-center pt-4 xs:pt-6 sm:pt-8 pb-12 xs:pb-16 sm:pb-20">
                <p className="text-sm xs:text-base sm:text-lg md:text-lg text-gray-800 dark:text-gray-200 leading-normal px-2">
                  Chez <strong>ClimGO</strong>, nous vous accompagnons dans tous les domaines du confort thermique et sanitaire : <strong>chauffage</strong>, <strong>climatisation</strong>, <strong>eau chaude sanitaire</strong> et <strong>maintenance</strong>.
                </p>

                <p className="text-xs xs:text-sm sm:text-base md:text-base text-gray-800 dark:text-gray-200 leading-normal px-2">
                  Nos solutions sont pensées pour allier <strong>performance</strong>, <strong>durabilité</strong>, <strong>économies d'énergie</strong> et <strong>sérénité</strong>, année après année.
                </p>

                <div className="my-4 xs:my-5 sm:my-6">
                  <h3 className="text-base xs:text-lg sm:text-xl md:text-xl font-semibold text-gray-900 dark:text-white mb-2 xs:mb-3 sm:mb-3">Notre Expertise</h3>
                  <p className="text-xs xs:text-sm sm:text-base md:text-base text-gray-800 dark:text-gray-200 leading-normal px-2">
                    Notre expertise technique, développée depuis plus de 10 ans, nous permet de vous proposer les équipements les plus adaptés à votre habitat et à votre mode de vie.
                  </p>
                </div>

                <div className="my-4 xs:my-5 sm:my-6">
                  <h3 className="text-base xs:text-lg sm:text-xl md:text-xl font-semibold text-gray-900 dark:text-white mb-2 xs:mb-3 sm:mb-3">Service Complet</h3>
                  <p className="text-xs xs:text-sm sm:text-base md:text-base text-gray-800 dark:text-gray-200 leading-normal px-2">
                    De l'installation à la maintenance, en passant par le conseil et le dépannage, nous vous garantissons un service complet et personnalisé.
                  </p>
                </div>

                <div className="my-4 xs:my-5 sm:my-6">
                  <h3 className="text-base xs:text-lg sm:text-xl md:text-xl font-semibold text-gray-900 dark:text-white mb-2 xs:mb-3 sm:mb-3">Qualité & Conformité</h3>
                  <p className="text-xs xs:text-sm sm:text-base md:text-base text-gray-800 dark:text-gray-200 leading-normal px-2">
                    Chaque intervention est réalisée dans le respect des normes en vigueur, avec des équipements certifiés et une garantie sur nos prestations.
                  </p>
                </div>

                <div className="my-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Nos Engagements</h3>
                  <ul className="text-center text-base text-gray-800 dark:text-gray-200 leading-normal space-y-1 max-w-xl mx-auto">
                    <li>✓ Intervention rapide et professionnelle</li>
                    <li>✓ Devis gratuit et transparent</li>
                    <li>✓ Garantie sur toutes nos prestations</li>
                    <li>✓ Équipements certifiés et de qualité</li>
                    <li>✓ Respect des délais convenus</li>
                    <li>✓ SAV réactif et disponible</li>
                  </ul>
                </div>

                <div className="my-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Zone d'Intervention</h3>
                  <p className="text-base text-gray-800 dark:text-gray-200 leading-normal">
                    Nous intervenons dans toute la Gironde : Bordeaux métropole, Bassin d'Arcachon, Médoc, Entre-deux-Mers et leurs communes environnantes.
                  </p>
                </div>

                <p className="text-lg text-gray-800 dark:text-gray-200 leading-normal font-medium mt-6">
                  Notre objectif : votre satisfaction et votre confort au quotidien, dans le respect de l'environnement et de votre budget.
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

      {/* Section Google Reviews */}
      <GoogleReviews 
        placeId={process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID || "ClimGO-default-place-id"} 
      />

      {/* Section FAQ - Style Chat Moderne */}
      <FAQChat 
        title="Questions Fréquentes"
        subtitle="Nos réponses aux questions les plus courantes sur le chauffage et la climatisation en Gironde"
        faqs={[
          {
            question: "Quel est le prix d'une pompe à chaleur air/eau ?",
            answer: "Le prix varie entre 8 000€ et 15 000€ selon la puissance et les options. Avec les aides MaPrimeRénov' et CEE, votre reste à charge peut être divisé par 2. Je vous propose un devis personnalisé gratuit."
          },
          {
            question: "Combien coûte l'installation d'une climatisation ?",
            answer: "Pour un mono-split : 1 500€ à 3 000€. Pour un multi-split 3 zones : 4 000€ à 7 000€. Prix incluant pose, mise en service et garantie. Devis gratuit sous 24h avec visite technique."
          },
          {
            question: "Quelle différence entre pompe à chaleur air/air et air/eau ?",
            answer: "La PAC air/air (climatisation réversible) chauffe et rafraîchit via des splits muraux. La PAC air/eau alimente vos radiateurs et plancher chauffant + eau chaude sanitaire. Je vous conseille selon votre installation existante."
          },
          {
            question: "Vous intervenez en dépannage urgent ?",
            answer: "Oui, 24h/24 et 7j/7 ! Panne de chauffage en hiver, climatisation défaillante en été... J'interviens dans l'heure en urgence dans toute la Gironde. Devis gratuit, réparation immédiate."
          }
        ]}
        ctaTitle="Une autre question ?"
        ctaSubtitle="N'hésitez pas à nous contacter directement !"
        phoneNumber="0123456789"
        email="contact@climgo.fr"
      />

      {/* Section Carte en pleine largeur */}
      <section className="relative w-full overflow-hidden bg-white dark:bg-black">
        <div className="relative z-10 w-full px-4">
          <SimpleWrapper>
            <div className="relative w-full">
              {/* Carte Google Maps en pleine largeur */}
              <div className="relative w-full h-[600px] transform hover:scale-[1.02] transition-transform duration-700 ease-out">
                <iframe
                  src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&q=Bassin+d'Arcachon,France&zoom=11&center=44.7,-1.15`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ClimGO - Zone d'intervention sur le Bassin d'Arcachon"
                  aria-label="Carte Google Maps montrant la zone d'intervention de ClimGO sur le Bassin d'Arcachon"
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