'use client';

import { Search, Euro, FolderCheck, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { AidesCards } from '@/components/AidesCards';

// Import dynamique du Logo3D avec cache optimisé
const Logo3D = dynamic(() => import('@/components/Logo3D').then(mod => ({ default: mod.Logo3D })), {
  ssr: false,
  loading: () => <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80" />
})

// Clé unique pour éviter le cache

export default function AidesEtatPage() {

  const steps = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Analyse de votre projet",
      description: "On évalue vos besoins, votre logement et votre <strong>éligibilité aux aides</strong>."
    },
    {
      icon: <Euro className="w-6 h-6" />,
      title: "Devis & estimation des aides",
      description: "Vous recevez un <strong>devis clair</strong> avec les <strong>aides estimées</strong>, sans mauvaise surprise."
    },
    {
      icon: <FolderCheck className="w-6 h-6" />,
      title: "Constitution du dossier",
      description: "On gère toute la paperasse : dossier, justificatifs, formulaires… <strong>vous soufflez</strong>."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Installation & aides appliquées",
      description: "On installe, les aides sont <strong>directement déduites ou versées</strong>."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-background">
      {/* Fil d'Ariane */}
      <div className="bg-gray-50 dark:bg-background pt-16 pb-1 px-4 xs:px-6">
        <nav className="max-w-7xl mx-auto">
          <ol className="list-reset flex items-center space-x-2 text-xs xs:text-sm text-gray-900 dark:text-white">
            <li>
              <Link href="/" className="hover:underline opacity-70 hover:opacity-100 transition-opacity">Accueil</Link>
              <span className="mx-1.5 opacity-50">/</span>
            </li>
            <li className="font-medium">Aides & Subventions</li>
          </ol>
        </nav>
      </div>

      {/* Hero Section personnalisé avec logos */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] bg-gray-50 dark:bg-background overflow-hidden">
        <div className="relative container mx-auto px-4 xs:px-5 sm:px-6 py-8 xs:py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center min-h-[50vh] sm:min-h-[60vh]">
            {/* Contenu texte */}
            <div className="w-full max-w-2xl mx-auto lg:mx-0 text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold lg:font-light tracking-tight mb-3 xs:mb-4 sm:mb-4 md:mb-6 lg:mb-8 text-black dark:text-white break-words leading-tight">
                Aides & Subventions 2025
              </h1>
              
              <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-black dark:text-white max-w-full lg:max-w-4xl mx-auto lg:mx-0 px-0 sm:px-2 lg:px-0 mb-6 xs:mb-8 sm:mb-10">
                En 2025, plusieurs dispositifs permettent de réduire considérablement le coût d'une <strong>pompe à chaleur air/eau</strong>, d'un système de <strong>climatisation air/air</strong>, ou du remplacement d'une ancienne chaudière par une solution de <strong>chauffage plus écologique</strong>. Chez ClimGO, nous vous accompagnons dans la constitution de votre dossier pour bénéficier sereinement des aides de l'État : <strong>MaPrimeRénov'</strong>, <strong>Certificats d'Économie d'Énergie (CEE)</strong>, <strong>TVA à taux réduit</strong>, <strong>Éco-PTZ</strong>, ainsi que les <strong>aides locales</strong> applicables.
                <br /><br />
                Ces subventions concernent aussi bien les projets de chauffage, de <strong>climatisation réversible</strong>, que l'installation d'un <strong>chauffe-eau thermodynamique</strong>, afin d'alléger votre investissement tout en améliorant le confort et la <strong>performance énergétique</strong> de votre logement.
              </p>

              {/* Logos RF et RGE intégrés dans le hero */}
              <div className="flex items-end justify-center lg:justify-start gap-6 md:gap-8 mt-8">
                <div className="flex items-center justify-center">
                  <Image
                    src="/logoannexe/rf.svg.png"
                    alt="République Française"
                    width={100}
                    height={100}
                    className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
                    priority
                  />
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/logoannexe/rge.png"
                    alt="RGE QualiPAC - Reconnu Garant de l'Environnement"
                    width={100}
                    height={100}
                    className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
            
            {/* Logo 3D GLB */}
            <div className="relative flex items-center justify-center w-full order-1 lg:order-2">
              <Logo3D className="transform-gpu w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80" />
            </div>
          </div>
        </div>
      </section>

      {/* Section Introduction */}
      <section className="py-8 xs:py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-background">
        <div className="container mx-auto px-4 xs:px-5 sm:px-6 text-center">
          <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-black dark:text-white mb-3 xs:mb-4 sm:mb-6">
            Quelles aides & subventions pour vos travaux en 2025 ?
          </h2>
          <div className="w-16 xs:w-20 sm:w-24 h-1 bg-black dark:bg-white mx-auto mb-6 xs:mb-8 sm:mb-10"></div>
          
          <p className="text-sm xs:text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
            Ces aides sont <strong>cumulables entre elles</strong> pour maximiser votre financement. Chez <strong>ClimGO, entreprise RGE QualiPAC</strong>, nous vous accompagnons dans toutes vos démarches administratives (constitution des dossiers, demande de subventions, obtention des primes CEE, suivi jusqu'au versement final). Un projet ? Nous vous proposons un <strong>bilan énergétique gratuit</strong> et un <strong>devis personnalisé</strong> incluant les aides déduites.
          </p>
        </div>
      </section>

      {/* Section Aides avec Cards */}
      <AidesCards />



      {/* Section Comment ça se passe avec ClimGO - Timeline */}
      <section className="py-12 xs:py-16 sm:py-20 md:py-24 bg-gray-50 dark:bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 xs:px-5 sm:px-6 max-w-6xl">
          {/* En-tête */}
          <div className="text-center mb-12 xs:mb-16 sm:mb-20">
            <h2 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 dark:text-white mb-4 xs:mb-6">
              Comment ça se passe avec ClimGO ?
            </h2>
            <p className="text-sm xs:text-base sm:text-lg md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
              De l'audit à l'installation, on s'occupe de tout pour que vous profitiez sereinement de vos aides.
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
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 xs:w-14 xs:h-14 md:w-16 md:h-16 rounded-full shadow-lg bg-gray-50 dark:bg-background flex items-center justify-center z-10 border-2 border-gray-300 dark:border-gray-700">
                {steps[0].icon}
              </div>
              {/* Contenu mobile */}
              <div className="ml-20 md:hidden w-full">
                <h3 className="text-lg xs:text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {steps[0].title}
                </h3>
                <p 
                  className="text-sm xs:text-base text-gray-600 dark:text-gray-300 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: steps[0].description }}
                />
              </div>
              {/* Contenu desktop */}
              <div className="hidden md:block w-5/12 pr-8 text-right">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {steps[0].title}
                </h3>
                <p 
                  className="text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: steps[0].description }}
                />
              </div>
              <div className="hidden md:block w-5/12" />
            </div>

            {/* Étape 2 */}
            <div className="relative flex items-center mb-12 xs:mb-16">
              <div className="hidden md:block w-5/12" />
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 xs:w-14 xs:h-14 md:w-16 md:h-16 rounded-full shadow-lg bg-gray-50 dark:bg-background flex items-center justify-center z-10 border-2 border-gray-300 dark:border-gray-700">
                {steps[1].icon}
              </div>
              {/* Contenu mobile */}
              <div className="ml-20 md:hidden w-full">
                <h3 className="text-lg xs:text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {steps[1].title}
                </h3>
                <p 
                  className="text-sm xs:text-base text-gray-600 dark:text-gray-300 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: steps[1].description }}
                />
              </div>
              {/* Contenu desktop */}
              <div className="hidden md:block w-5/12 ml-auto pl-8">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {steps[1].title}
                </h3>
                <p 
                  className="text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: steps[1].description }}
                />
              </div>
            </div>

            {/* Étape 3 */}
            <div className="relative flex items-center mb-12 xs:mb-16">
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 xs:w-14 xs:h-14 md:w-16 md:h-16 rounded-full shadow-lg bg-gray-50 dark:bg-background flex items-center justify-center z-10 border-2 border-gray-300 dark:border-gray-700">
                {steps[2].icon}
              </div>
              {/* Contenu mobile */}
              <div className="ml-20 md:hidden w-full">
                <h3 className="text-lg xs:text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {steps[2].title}
                </h3>
                <p 
                  className="text-sm xs:text-base text-gray-600 dark:text-gray-300 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: steps[2].description }}
                />
              </div>
              {/* Contenu desktop */}
              <div className="hidden md:block w-5/12 pr-8 text-right">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {steps[2].title}
                </h3>
                <p 
                  className="text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: steps[2].description }}
                />
              </div>
              <div className="hidden md:block w-5/12" />
            </div>

            {/* Étape 4 */}
            <div className="relative flex items-center">
              <div className="hidden md:block w-5/12" />
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 xs:w-14 xs:h-14 md:w-16 md:h-16 rounded-full shadow-lg bg-gray-50 dark:bg-background flex items-center justify-center z-10 border-2 border-gray-300 dark:border-gray-700">
                {steps[3].icon}
              </div>
              {/* Contenu mobile */}
              <div className="ml-20 md:hidden w-full">
                <h3 className="text-lg xs:text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {steps[3].title}
                </h3>
                <p 
                  className="text-sm xs:text-base text-gray-600 dark:text-gray-300 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: steps[3].description }}
                />
              </div>
              {/* Contenu desktop */}
              <div className="hidden md:block w-5/12 ml-auto pl-8">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {steps[3].title}
                </h3>
                <p 
                  className="text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: steps[3].description }}
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Section CTA Final */}
      <section className="py-12 xs:py-16 sm:py-20 md:py-24 bg-gray-50 dark:bg-background">
        <div className="container mx-auto px-4 xs:px-5 sm:px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-6 xs:space-y-8">
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900 dark:text-white">
              Profitez des aides 2025 avec ClimGO
            </h2>
            
            <p className="text-base xs:text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Jusqu'à <strong>80% de vos travaux financés</strong>. <strong>ClimGO</strong> s'occupe de toutes vos démarches administratives pour que vous bénéficiez sereinement de <strong>MaPrimeRénov'</strong>, <strong>CEE</strong>, <strong>TVA réduite</strong> et <strong>Éco-PTZ</strong>.
            </p>
            
            <Link
              href="/contact"
              className="inline-flex items-center px-6 xs:px-7 py-3 rounded-full text-sm xs:text-base font-semibold
                         bg-white text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white
                         dark:bg-transparent dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-gray-900
                         transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Obtenez votre devis gratuit
            </Link>

            <p className="text-sm text-gray-600 dark:text-gray-400 pt-4">
              ClimGO – L'art du confort, le goût du détail.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
