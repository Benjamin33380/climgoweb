'use client';

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
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-background">
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 dark:bg-background">
        <div className="container mx-auto px-4 xs:px-5 sm:px-6 py-3">
          <nav className="flex items-center space-x-2 text-sm">
            <Link 
              href="/" 
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
            >
              Accueil
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-black dark:text-white font-medium">
              Aides & Subventions
            </span>
          </nav>
        </div>
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
    </div>
  );
}
