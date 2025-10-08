'use client';

import { FileText, Calculator, Settings, Award } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { AidesStickyScroll } from '@/components/AidesStickyScroll';

// Import dynamique du Logo3D pour optimiser le chargement
const Logo3D = dynamic(() => import('@/components/Logo3D').then(mod => ({ default: mod.Logo3D })), {
  ssr: false,
  loading: () => <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-gray-200 animate-pulse rounded-lg" />
})

// Clé unique pour éviter le cache

export default function AidesEtatPage() {

  const steps = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Analyse de votre projet",
      description: "On évalue vos besoins, votre logement et votre éligibilité aux aides."
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Devis & estimation des aides",
      description: "Vous recevez un devis clair avec les aides estimées, sans mauvaise surprise."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Constitution du dossier",
      description: "On gère toute la paperasse : dossier, justificatifs, formulaires… vous soufflez."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Installation & aides appliquées",
      description: "On installe, les aides sont directement déduites ou versées."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-background">
      {/* Hero Section personnalisé avec logos */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] bg-white dark:bg-background overflow-hidden">
        <div className="relative container mx-auto px-4 xs:px-5 sm:px-6 py-8 xs:py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center min-h-[50vh] sm:min-h-[60vh]">
            {/* Contenu texte */}
            <div className="w-full max-w-2xl mx-auto lg:mx-0 text-center lg:text-left order-2 lg:order-1">
              <div className="mb-6 xs:mb-7 sm:mb-8">
                <span className="inline-block px-3 xs:px-4 py-1.5 xs:py-2 bg-black/10 dark:bg-white/10 border border-black dark:border-white rounded-full text-xs xs:text-sm font-medium text-black dark:text-white">
                  Financement & Subventions
                </span>
              </div>
              
              <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold lg:font-light tracking-tight mb-2 xs:mb-3 sm:mb-4 md:mb-6 text-black dark:text-white break-words leading-tight">
                Aides & Subventions
              </h1>
              
              <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-black dark:text-white mb-3 xs:mb-4 sm:mb-4 md:mb-6 lg:mb-8 leading-relaxed font-medium lg:font-normal">
                Simplifiez vos démarches avec ClimGO
              </h2>
              
              <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-black dark:text-white max-w-full lg:max-w-4xl mx-auto lg:mx-0 px-0 sm:px-2 lg:px-0 mb-6 xs:mb-8 sm:mb-10">
                Plusieurs dispositifs existent pour alléger le coût de vos travaux de chauffage, climatisation ou rénovation énergétique. Chez ClimGO, nous vous aidons à chaque étape pour bénéficier sereinement des aides de l'État.
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
          <div className="w-16 xs:w-20 sm:w-24 h-1 bg-black dark:bg-white mx-auto"></div>
        </div>
      </section>

      {/* Section Aides avec Sticky Scroll */}
      <section className="bg-gray-50 dark:bg-background">
        <AidesStickyScroll />
      </section>



      {/* Section Comment ça se passe avec ClimGO */}
      <section className="py-8 xs:py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 xs:px-5 sm:px-6 relative">
          <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-14 lg:mb-16">
            <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-black dark:text-white mb-3 xs:mb-4 sm:mb-6">
              Comment ça se passe avec ClimGO ?
            </h2>
            <div className="w-16 xs:w-20 sm:w-24 h-1 bg-black dark:bg-white mx-auto"></div>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-7 sm:gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-4 xs:mb-5 sm:mb-6">
                    <div className="w-14 h-14 xs:w-16 xs:h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gray-50 dark:bg-background border border-black dark:border-white rounded-full flex items-center justify-center mx-auto shadow-md group-hover:scale-110 transition-transform duration-300">
                      <div className="text-black dark:text-white text-xs xs:text-sm sm:text-base md:text-lg">
                        {step.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-semibold text-black dark:text-white mb-2 xs:mb-3 sm:mb-4">
                    {step.title}
                  </h3>
                  <p className="text-xs xs:text-sm sm:text-base md:text-lg text-black dark:text-white leading-relaxed px-1 xs:px-2">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA Final */}
      <section className="py-8 xs:py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-background">
        <div className="container mx-auto px-4 xs:px-5 sm:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-black dark:text-white mb-3 xs:mb-4 sm:mb-6">
              Profitez des aides avec ClimGO
            </h2>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-black dark:text-white leading-relaxed px-1 xs:px-2 font-medium mb-3 xs:mb-4 sm:mb-6">
              Bénéficiez d&apos;un accompagnement complet pour optimiser vos aides, sans stress ni paperasse.
            </p>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg text-black dark:text-white leading-relaxed px-1 xs:px-2 mb-6 xs:mb-8 sm:mb-10 md:mb-12">
              ClimGO s&apos;occupe de tout, vous profitez des économies.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 py-2 xs:py-2.5 sm:py-3 md:py-3.5 lg:py-4 text-xs xs:text-sm sm:text-base md:text-lg font-medium bg-transparent border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 mb-8 xs:mb-12 sm:mb-16 md:mb-20">
                Demander mon devis
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
