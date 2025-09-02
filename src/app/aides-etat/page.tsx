'use client';

import { FileText, Calculator, Settings, Award } from 'lucide-react';
import Link from 'next/link';
import { AidesStickyScroll } from '@/components/AidesStickyScroll';
import CityLinksList from '@/components/CityLinksList';
import { SplineHero } from '@/components/SplineHero';

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
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section avec Spline */}
      <SplineHero
        title="Aides & Subventions"
        subtitle="Simplifiez vos démarches avec ClimGO"
        description="Plusieurs dispositifs existent pour alléger le coût de vos travaux de chauffage, climatisation ou rénovation énergétique. Chez ClimGO, nous vous aidons à chaque étape pour bénéficier sereinement des aides de l'État."
        badge="Financement & Subventions"
      />

      {/* Section Introduction */}
      <section className="py-8 xs:py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4 xs:px-5 sm:px-6 text-center">
          <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-black dark:text-white mb-3 xs:mb-4 sm:mb-6">
            Quelles aides & subventions pour vos travaux en 2025 ?
          </h2>
          <div className="w-16 xs:w-20 sm:w-24 h-1 bg-black dark:bg-white mx-auto"></div>
        </div>
      </section>

      {/* Section Aides avec Sticky Scroll */}
      <section className="bg-white dark:bg-black">
        <AidesStickyScroll />
      </section>



      {/* Section Comment ça se passe avec ClimGO */}
      <section className="py-8 xs:py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-black relative overflow-hidden">
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
                    <div className="w-14 h-14 xs:w-16 xs:h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-white dark:bg-black border border-black dark:border-white rounded-full flex items-center justify-center mx-auto shadow-md group-hover:scale-110 transition-transform duration-300">
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
      <section className="py-8 xs:py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-black">
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
            
            {/* Liste des villes */}
            <div className="pt-8 xs:pt-12 sm:pt-16 md:pt-20">
              <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-medium text-white mb-4 xs:mb-6 sm:mb-8">
                Nos zones d&apos;intervention
              </h3>
              <CityLinksList />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
