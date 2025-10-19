'use client';

import Link from "next/link";
import { motion } from 'framer-motion';
import { Euro } from "lucide-react";
import { useState, useEffect } from "react";
import { SimpleWrapper } from '@/components/ui/SimpleWrapper';
import Services from '@/components/Services';
import Image from "next/image";
// Importations breadcrumb supprimées car non utilisées

export default function HomePage() {

  // Images hero avec rotation - optimisées
  const heroImages = [
    '/img/clim-caudéran.jpeg',
    '/img/uicauderan.jpeg',
    '/img/sdb-pyla.jpeg',
  ];
  
  // État pour l'index de l'image actuelle
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Changement automatique d'image toutes les 9 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 9000); // 9 secondes
    
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <main className="px-0">
      <section className="hero-mobile-section relative h-[100vh] xs:h-[95vh] sm:h-[90vh] min-h-[500px] xs:min-h-[550px] sm:min-h-[600px] md:min-h-[640px] lg:min-h-[700px] xl:min-h-[750px] w-full overflow-hidden bg-transparent sm:bg-gray-50 sm:dark:bg-background text-black dark:text-white">
        {/* Zone image avec effet zoom - Responsive avec adaptation mobile */}
        <div className="absolute top-0 left-0 h-full w-full z-1 sm:hidden">
          <Image
            key={`mobile-${currentImageIndex}`}
            src={heroImages[currentImageIndex]}
            alt="ClimGO - Installation climatisation"
            fill
            className="h-full w-full object-cover transition-opacity duration-1000"
            priority={currentImageIndex === 0}
            quality={90}
            sizes="100vw"
            fetchPriority={currentImageIndex === 0 ? "high" : "auto"}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
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
            <motion.img
              key={`desktop-${currentImageIndex}`}
              src={heroImages[currentImageIndex]}
              alt="ClimGO - Installation climatisation"
              className="h-full w-full object-cover object-center"
              initial={{ scale: 1 }}
              animate={{ scale: 1.2 }}
              transition={{ duration: 18, ease: "easeInOut" }}
              loading={currentImageIndex === 0 ? "eager" : "lazy"}
              decoding="async"
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
            <h1 className="mb-3 xs:mb-4 sm:mb-4 md:mb-6 lg:mb-8">
              <span className="block text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold sm:font-light tracking-tight mb-2 xs:mb-3 sm:mb-4 md:mb-6 text-white sm:text-black dark:text-white break-words leading-tight mobile-text-shadow">
              ClimGO
              </span>
              <span className="block text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-white sm:text-black/90 dark:text-white leading-relaxed max-w-[260px] xs:max-w-[280px] sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl whitespace-pre-line font-medium sm:font-normal mobile-text-shadow">
                Spécialiste des systèmes de pompe à chaleur,{'\n'}chauffage et climatisation en Gironde
              </span>
            </h1>

            <div className="flex flex-col xs:flex-row sm:flex-row gap-2 xs:gap-2 sm:gap-3 md:gap-4 lg:gap-5 mb-4 xs:mb-5 sm:mb-6">
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
                           border-2 border-white/50 sm:border-black/50 dark:border-white/30 text-white sm:text-black dark:text-white hover:bg-white/15 sm:hover:bg-gray-100/15 dark:hover:bg-white/10 hover:border-white/70 sm:hover:border-black/70 dark:hover:border-white/50
                           transition-all duration-300 backdrop-blur-sm min-w-[120px] xs:min-w-[130px] sm:min-w-[140px]"
              >
                Découvrir
              </a>
            </div>

            {/* Logo RGE */}
            <a 
              href="https://www.qualit-enr.org/entreprises/climgo/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 xs:gap-3 hover:opacity-80 transition-opacity cursor-pointer"
              aria-label="Voir notre certification RGE QualiPAC sur Qualit'EnR"
            >
              <Image
                src="/logoannexe/rge.png"
                alt="RGE QualiPAC"
                width={80}
                height={80}
                className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain"
                quality={100}
                priority
                unoptimized
              />
              <span className="text-xs xs:text-sm sm:text-base md:text-lg text-white sm:text-black/80 dark:text-white/80 font-medium mobile-text-shadow">
                Artisan certifié<br />RGE QualiPAC
              </span>
            </a>
          </motion.div>
        </div>

      </section>

      {/* Section Bassin d'Arcachon - Texte fixe */}
      <section className="relative py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 overflow-hidden bg-gray-50 dark:bg-background">
        <div
          className="absolute inset-0 -z-10 w-full h-full bg-gray-50 dark:bg-background"
          aria-hidden="true"
        ></div>
        
        {/* Container fixe */}
        <motion.div 
          className="relative w-full px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {/* Contenu aligné à droite */}
            <div className="max-w-3xl xs:max-w-4xl sm:max-w-4xl mr-auto">
              <div className="space-y-6 xs:space-y-8 sm:space-y-8 text-left pt-4 xs:pt-6 sm:pt-8 pb-12 xs:pb-16 sm:pb-20">
                
                {/* Titre */}
                <motion.div 
                  className="mb-6 xs:mb-8 sm:mb-8 md:mb-12"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <h2 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 dark:text-white text-left max-w-5xl leading-relaxed">
                    <span className="block mb-2 xs:mb-3 sm:mb-4">
                      Installation, entretien et dépannage
                    </span>
                    <span className="block text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal text-gray-700 dark:text-gray-300 mb-2 xs:mb-3 sm:mb-4">
                      Pompes à chaleur · Chaudières · Climatisations · Chauffe-eau · Sanitaires
                    </span>
                    <span className="block text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-semibold bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
                      Artisan RGE QualiPAC en Gironde
                    </span>
                  </h2>
                </motion.div>
                
                {/* Introduction */}
                <motion.div 
                  className="space-y-4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <p className="text-base xs:text-lg sm:text-xl md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed px-2 font-medium text-left">
                    <strong>ClimGO</strong>, entreprise <strong>RGE QualiPAC certifiée</strong>, est spécialisée dans l'installation, l'entretien et le dépannage de vos équipements thermiques et sanitaires sur <strong>Bordeaux</strong>, <strong>Arcachon</strong> et l'ensemble de la <strong>Gironde</strong>.
                  </p>
                </motion.div>

                {/* Aides financières */}
                <motion.div 
                  className="my-8 xs:my-10 sm:my-12"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                >
                  <div className="flex items-center justify-start mb-4">
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent w-24"></div>
                    <h3 className="text-lg xs:text-xl sm:text-2xl md:text-2xl font-semibold text-gray-900 dark:text-white mx-6 text-left">
                      Aides financières de l'État
                    </h3>
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent w-24"></div>
                  </div>
                  <p className="text-sm xs:text-base sm:text-lg md:text-lg text-gray-800 dark:text-gray-200 leading-relaxed px-2 text-left">
                    En tant qu'<strong>artisan RGE QualiPAC</strong>, nos travaux ouvrent droit aux <strong>aides financières de l'État</strong> : <strong>MaPrimeRénov'</strong>, <strong>Certificats d'Économie d'Énergie (CEE)</strong>, <strong>TVA réduite</strong> et <strong>Éco-PTZ</strong>. Nous vous accompagnons dans toutes les démarches administratives et proposons, lorsque c'est possible, la <strong>déduction directe des aides sur la facture</strong> pour une gestion simplifiée.
                  </p>
                </motion.div>

                {/* Conclusion */}
                <motion.div 
                  className="mt-10 xs:mt-12 sm:mt-14 space-y-4"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                  <p className="text-base xs:text-lg sm:text-xl md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed font-semibold px-2 text-left">
                    De l'installation à l'entretien, <strong>ClimGO</strong> assure votre confort thermique en Gironde avec expertise et réactivité.
                  </p>
                  <p className="text-sm xs:text-base sm:text-lg md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed px-2 italic font-medium text-left">
                    ClimGO – L'art du confort, le goût du détail.
                  </p>
                </motion.div>
              </div>
            </div>
        </motion.div>
      </section>

      {/* Section Services */}
      <Services />

      {/* Section Nos Engagements */}
      <section className="relative py-12 xs:py-16 sm:py-20 md:py-24 overflow-hidden bg-gray-50 dark:bg-background">
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
              

              {/* Étape 1 */}
              <div className="relative flex items-center mb-12 xs:mb-16">
                {/* Pastille */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 xs:w-14 xs:h-14 md:w-16 md:h-16 rounded-full shadow-lg bg-gray-50 dark:bg-background flex items-center justify-center z-10">
                  <svg className="w-5 h-5 xs:w-6 xs:h-6 md:w-7 md:h-7 text-gray-900 dark:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
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
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 xs:w-14 xs:h-14 md:w-16 md:h-16 rounded-full shadow-lg bg-gray-50 dark:bg-background flex items-center justify-center z-10">
                  <svg className="w-5 h-5 xs:w-6 xs:h-6 md:w-7 md:h-7 text-gray-900 dark:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
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
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 xs:w-14 xs:h-14 md:w-16 md:h-16 rounded-full shadow-lg bg-gray-50 dark:bg-background flex items-center justify-center z-10">
                  <svg className="w-5 h-5 xs:w-6 xs:h-6 md:w-7 md:h-7 text-gray-900 dark:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
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
                    <strong>95% de clients nous recommandent</strong>. Suivi après installation, entretien & maintenance
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
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 xs:w-14 xs:h-14 md:w-16 md:h-16 rounded-full shadow-lg bg-gray-50 dark:bg-background flex items-center justify-center z-10">
                  <Euro className="w-5 h-5 xs:w-6 xs:h-6 md:w-7 md:h-7 text-gray-900 dark:text-white" />
                </div>
                {/* Contenu mobile */}
                <div className="ml-20 md:hidden w-full">
                  <h3 className="text-lg xs:text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Financement sur mesure
                  </h3>
                  <p className="text-sm xs:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    Aides mobilisées, paiements facilités, solutions adaptées à votre situation. <strong className="text-gray-900 dark:text-white">Vous ne vous occupez de rien.</strong>
                  </p>
                </div>
                {/* Contenu desktop */}
                <div className="hidden md:block w-5/12 ml-auto pl-8">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Financement sur mesure
                  </h3>
                  <p className="text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    Aides mobilisées, paiements facilités, solutions adaptées à votre situation. <strong className="text-gray-900 dark:text-white">Vous ne vous occupez de rien.</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div id="demander-devis" className="text-center mt-12 xs:mt-16">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 xs:px-7 py-3 rounded-full text-sm xs:text-base font-semibold
                           bg-white text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white
                           dark:bg-transparent dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-gray-900
                           transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="Obtenez votre devis gratuit"
              >
                Obtenez votre devis gratuit
              </Link>
            </div>
          </div>
        </SimpleWrapper>


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
                width: `${(11 * 2) * 320}px`,
                animationDuration: `66s`
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
                    J'ai eu une panne de climatisation en pleine chaleur d'été, ClimGO est intervenu rapidement. Le technicien a diagnostiqué la panne et a réparé la clim sur place. Service sérieux, ponctuel et professionnel. Ma clim fonctionne à nouveau parfaitement.
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
                    Un vrai pro sur Mios, qui trouve la panne là où d'autres changent tout. Après plusieurs devis sur Biganos où on me conseillait de remplacer entièrement mon système de climatisation, Benjamin a pris le temps de diagnostiquer précisément la panne. Résultat : une simple fuite et une recharge de gaz ont suffi. Travail propre, honnête, rapide et efficace.
                    <span className="text-gray-400">"</span>
                  </p>
                  
                  <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-2 sm:pt-3">
                    <span className="font-medium">Juillet 2025</span>
                    <a href="/air+eau" className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-500 dark:hover:text-blue-300 hover:underline transition-colors">PAC</a>
                  </div>
                </div>
              </div>

              {/* Celine Dupuis - Pages Jaunes */}
              <div className="flex-shrink-0 w-[300px] sm:w-[360px] mx-1 sm:mx-2">
                <div className="bg-white dark:bg-card backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700 min-h-[320px] sm:min-h-[380px] flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-3 bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white font-semibold text-base sm:text-lg border-2 border-gray-200 dark:border-gray-500">
                      C
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                        Céline Dupuis
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
                    Remplacement efficace de notre ballon d'eau chaude à Biganos. Nous avons fait appel à cette entreprise pour remplacer notre ancien ballon d'eau chaude par un modèle thermodynamique, plus économique et écologique. L'installation a été rapide, propre, et parfaitement réalisée. Le technicien a pris le temps de tout nous expliquer, avec des conseils clairs et adaptés à notre maison à Biganos. Depuis, on sent la différence sur la consommation.
                    <span className="text-gray-400">"</span>
                  </p>
                  
                  <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-2 sm:pt-3">
                    <span className="font-medium">Juillet 2025</span>
                    <a href="/thermodynamique" className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-500 dark:hover:text-blue-300 hover:underline transition-colors">Eau chaude</a>
                  </div>
                </div>
              </div>

              {/* Jerome Bernard - Google */}
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
                    Jeune entrepreneur avec des qualités d'écoutes, de conseils et un professionnalisme à la hauteur de mes attentes. Pose d'un groupe Clim extérieur avec deux unités intérieures sur une vieilles bâtisse en pierre, sur le nord Gironde. Je recommande.
                    <span className="text-gray-400">"</span>
                  </p>
                  
                  <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-2 sm:pt-3">
                    <span className="font-medium">Il y a 2 mois</span>
                    <a href="/climatisation" className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-500 dark:hover:text-blue-300 hover:underline transition-colors">Climatisation</a>
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
                    Très satisfait de l'intervention pour mon système gainable. Le travail été propre, soigné et réalisé avec beaucoup de professionnalisme. L'installation est discrète et parfaitement réalisée. Il a mis le système en route en mode froid sans aucun souci. Tout fonctionne à merveille. Je recommande sans hésitation pour son sérieux et la qualité de son travail.
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
                    Au Top ! Très bonne relation client. Personnel qui connaît ce qu'il fait et qui est de très bons conseils :)
                    <span className="text-gray-400">"</span>
                  </p>
                  
                  <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-2 sm:pt-3">
                    <span className="font-medium">Il y a 2 mois</span>
                    <a href="/blog" className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-500 dark:hover:text-blue-300 hover:underline transition-colors">Conseil</a>
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
                    <a href="/pompe-a-chaleur" className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-500 dark:hover:text-blue-300 hover:underline transition-colors">Installation</a>
                  </div>
                </div>
              </div>

              {/* Celine Raison - Google */}
              <div className="flex-shrink-0 w-[300px] sm:w-[360px] mx-1 sm:mx-2">
                <div className="bg-white dark:bg-card backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700 min-h-[320px] sm:min-h-[380px] flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-3 bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white font-semibold text-base sm:text-lg border-2 border-gray-200 dark:border-gray-500">
                      C
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                        Céline Raison
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
                    Je vous recommande Mr Cardoso, jeune entrepreneur sérieux, travail soigné, avec de l'expérience.
                    <span className="text-gray-400">"</span>
                  </p>
                  
                  <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-2 sm:pt-3">
                    <span className="font-medium">Il y a 2 mois</span>
                    <a href="/blog" className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-500 dark:hover:text-blue-300 hover:underline transition-colors">Recommandation</a>
                  </div>
                </div>
              </div>

              {/* Patrick Trille - Google */}
              <div className="flex-shrink-0 w-[300px] sm:w-[360px] mx-1 sm:mx-2">
                <div className="bg-white dark:bg-card backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700 min-h-[320px] sm:min-h-[380px] flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-3 bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white font-semibold text-base sm:text-lg border-2 border-gray-200 dark:border-gray-500">
                      P
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                        Patrick Trille
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
                    Très sérieux et disponible. Et de bon conseil.
                    <span className="text-gray-400">"</span>
                  </p>
                  
                  <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-2 sm:pt-3">
                    <span className="font-medium">Il y a 2 mois</span>
                    <a href="/pompe-a-chaleur" className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-500 dark:hover:text-blue-300 hover:underline transition-colors">Service</a>
                  </div>
                </div>
              </div>

              {/* Manuela Nunes - Google */}
              <div className="flex-shrink-0 w-[300px] sm:w-[360px] mx-1 sm:mx-2">
                <div className="bg-white dark:bg-card backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700 min-h-[320px] sm:min-h-[380px] flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-3 bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white font-semibold text-base sm:text-lg border-2 border-gray-200 dark:border-gray-500">
                      M
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                        Manuela Nunes
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
                    Installation d'une clim Daikin au top à Salles. Après avoir comparé plusieurs devis, j'ai choisi Benjamin de ClimGO pour l'installation d'une climatisation monosplit Daikin dans mon salon à Salles, et je ne regrette absolument pas mon choix ! Professionnalisme, ponctualité, conseils avisés et travail soigné : tout y est. Benjamin ne se contente pas de poser un matériel, il prend le temps d'écouter, de conseiller ce qui est réellement adapté, et le résultat est aussi discret qu'efficace.
                    <span className="text-gray-400">"</span>
                  </p>
                  
                  <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-2 sm:pt-3">
                    <span className="font-medium">Il y a 2 mois</span>
                    <a href="/climatisation" className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-500 dark:hover:text-blue-300 hover:underline transition-colors">Climatisation</a>
                  </div>
                </div>
              </div>

              {/* Philippe Rivain - Google */}
              <div className="flex-shrink-0 w-[300px] sm:w-[360px] mx-1 sm:mx-2">
                <div className="bg-white dark:bg-card backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700 min-h-[320px] sm:min-h-[380px] flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-3 bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white font-semibold text-base sm:text-lg border-2 border-gray-200 dark:border-gray-500">
                      P
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                        Philippe Rivain
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
                    Intervention rapide et efficace sur un changement de carte électronique sur la commune de LANTON.
                    <span className="text-gray-400">"</span>
                  </p>
                  
                  <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-2 sm:pt-3">
                    <span className="font-medium">Il y a 2 mois</span>
                    <a href="/maintenance" className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-500 dark:hover:text-blue-300 hover:underline transition-colors">Dépannage</a>
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
                    J'ai eu une panne de climatisation en pleine chaleur d'été, ClimGO est intervenu rapidement. Le technicien a diagnostiqué la panne et a réparé la clim sur place. Service sérieux, ponctuel et professionnel. Ma clim fonctionne à nouveau parfaitement.
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
                    Un vrai pro sur Mios, qui trouve la panne là où d'autres changent tout. Après plusieurs devis sur Biganos où on me conseillait de remplacer entièrement mon système de climatisation, Benjamin a pris le temps de diagnostiquer précisément la panne. Résultat : une simple fuite et une recharge de gaz ont suffi. Travail propre, honnête, rapide et efficace.
                    <span className="text-gray-400">"</span>
                  </p>
                  
                  <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-2 sm:pt-3">
                    <span className="font-medium">Juillet 2025</span>
                    <a href="/air+eau" className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-500 dark:hover:text-blue-300 hover:underline transition-colors">PAC</a>
                  </div>
                </div>
              </div>

              {/* Continue avec les autres avis dupliqués... */}
              {/* Pour économiser l'espace, je vais juste dupliquer quelques-uns de plus */}
              
              {/* Celine Dupuis - Pages Jaunes */}
              <div className="flex-shrink-0 w-[300px] sm:w-[360px] mx-1 sm:mx-2">
                <div className="bg-white dark:bg-card backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700 min-h-[320px] sm:min-h-[380px] flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-3 bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white font-semibold text-base sm:text-lg border-2 border-gray-200 dark:border-gray-500">
                      C
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                        Céline Dupuis
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
                    Remplacement efficace de notre ballon d'eau chaude à Biganos. Nous avons fait appel à cette entreprise pour remplacer notre ancien ballon d'eau chaude par un modèle thermodynamique, plus économique et écologique. L'installation a été rapide, propre, et parfaitement réalisée. Le technicien a pris le temps de tout nous expliquer, avec des conseils clairs et adaptés à notre maison à Biganos. Depuis, on sent la différence sur la consommation.
                    <span className="text-gray-400">"</span>
                  </p>
                  
                  <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-2 sm:pt-3">
                    <span className="font-medium">Juillet 2025</span>
                    <a href="/thermodynamique" className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-500 dark:hover:text-blue-300 hover:underline transition-colors">Eau chaude</a>
                  </div>
                </div>
              </div>

              {/* Jerome Bernard - Google */}
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
                    Jeune entrepreneur avec des qualités d'écoutes, de conseils et un professionnalisme à la hauteur de mes attentes. Pose d'un groupe Clim extérieur avec deux unités intérieures sur une vieilles bâtisse en pierre, sur le nord Gironde. Je recommande.
                    <span className="text-gray-400">"</span>
                  </p>
                  
                  <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-2 sm:pt-3">
                    <span className="font-medium">Il y a 2 mois</span>
                    <a href="/climatisation" className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-500 dark:hover:text-blue-300 hover:underline transition-colors">Climatisation</a>
                  </div>
                </div>
              </div>

              {/* Et ainsi de suite pour les autres avis dupliqués... */}
              {/* J'ajoute quelques autres pour compléter l'effet infini */}
              
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
                    Très satisfait de l'intervention pour mon système gainable. Le travail été propre, soigné et réalisé avec beaucoup de professionnalisme. L'installation est discrète et parfaitement réalisée. Il a mis le système en route en mode froid sans aucun souci. Tout fonctionne à merveille. Je recommande sans hésitation pour son sérieux et la qualité de son travail.
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
                    Au Top ! Très bonne relation client. Personnel qui connaît ce qu'il fait et qui est de très bons conseils :)
                    <span className="text-gray-400">"</span>
                  </p>
                  
                  <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-2 sm:pt-3">
                    <span className="font-medium">Il y a 2 mois</span>
                    <a href="/blog" className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-500 dark:hover:text-blue-300 hover:underline transition-colors">Conseil</a>
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
                    <a href="/pompe-a-chaleur" className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-500 dark:hover:text-blue-300 hover:underline transition-colors">Installation</a>
                  </div>
                </div>
              </div>

              {/* Manuela Nunes - Google */}
              <div className="flex-shrink-0 w-[300px] sm:w-[360px] mx-1 sm:mx-2">
                <div className="bg-white dark:bg-card backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700 min-h-[320px] sm:min-h-[380px] flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-3 bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white font-semibold text-base sm:text-lg border-2 border-gray-200 dark:border-gray-500">
                      M
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                        Manuela Nunes
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
                    Installation d'une clim Daikin au top à Salles. Après avoir comparé plusieurs devis, j'ai choisi Benjamin de ClimGO pour l'installation d'une climatisation monosplit Daikin dans mon salon à Salles, et je ne regrette absolument pas mon choix ! Professionnalisme, ponctualité, conseils avisés et travail soigné : tout y est.
                    <span className="text-gray-400">"</span>
                  </p>
                  
                  <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-2 sm:pt-3">
                    <span className="font-medium">Il y a 2 mois</span>
                    <a href="/climatisation" className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-500 dark:hover:text-blue-300 hover:underline transition-colors">Climatisation</a>
                  </div>
                </div>
              </div>

              {/* Philippe Rivain - Google */}
              <div className="flex-shrink-0 w-[300px] sm:w-[360px] mx-1 sm:mx-2">
                <div className="bg-white dark:bg-card backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700 min-h-[320px] sm:min-h-[380px] flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-3 bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white font-semibold text-base sm:text-lg border-2 border-gray-200 dark:border-gray-500">
                      P
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                        Philippe Rivain
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
                    Intervention rapide et efficace sur un changement de carte électronique sur la commune de LANTON.
                    <span className="text-gray-400">"</span>
                  </p>
                  
                  <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-2 sm:pt-3">
                    <span className="font-medium">Il y a 2 mois</span>
                    <a href="/maintenance" className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-500 dark:hover:text-blue-300 hover:underline transition-colors">Dépannage</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <SimpleWrapper>
            <div className="text-center mt-12 space-y-4">
              {/* Boutons CTA - Layout responsive */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {/* Bouton pour laisser un avis Google */}
                <a
                  href="https://g.page/r/CYU8G8pY5uo1EBM/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                >
                  <svg className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="flex items-center gap-1 whitespace-nowrap">
                    <svg className="w-3 sm:w-4 h-3 sm:h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12h14"/>
                    </svg>
                    Laissez votre avis Google
                  </span>
                </a>

                {/* Bouton pour nous contacter */}
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-gray-50 dark:bg-background border-2 border-blue-600 dark:border-white text-blue-600 dark:text-white hover:bg-blue-50 dark:hover:bg-muted font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                >
                  <svg className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
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

      {/* Section Carte en pleine largeur */}
      <section className="relative w-full overflow-hidden bg-gray-50 dark:bg-background">
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