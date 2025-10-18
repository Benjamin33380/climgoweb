'use client';

import React from 'react';
import Link from 'next/link';
import LazyGoogleMaps from '@/components/LazyGoogleMaps';

export default function PompeAChaleurPage() {

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f172a]">
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
              Pompe à Chaleur
            </span>
          </nav>
        </div>
                  </div>
                  
      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] bg-gray-50 dark:bg-background overflow-hidden">
        <div className="relative container mx-auto px-4 xs:px-5 sm:px-6 py-6 xs:py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="flex flex-col lg:grid lg:grid-cols-1 gap-6 sm:gap-8 lg:gap-10 items-center justify-center min-h-[40vh] sm:min-h-[50vh]">
            {/* Contenu texte centré */}
            <div 
              className="w-full max-w-4xl mx-auto text-left"
              style={{ 
                animation: 'slide-in-left 1.2s ease-out both'
              }}
            >
              <h1 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold lg:font-light tracking-tight mb-4 xs:mb-5 sm:mb-5 md:mb-6 lg:mb-8 text-[#03144A] dark:text-white break-words leading-tight">
                <span className="bg-gradient-to-r from-[#FF8C00] via-[#2563EB] to-[#FF8C00] dark:from-[#FFA500] dark:via-[#60A5FA] dark:to-[#FFA500] bg-clip-text text-transparent">
                  Pompe à Chaleur
                </span>
              </h1>
              
              <div className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-xl leading-relaxed text-gray-700 dark:text-gray-100 max-w-full mx-auto px-0 sm:px-2 lg:px-0 mb-6 xs:mb-7 sm:mb-8">
                <p className="mb-3 font-light">
                  Chez <strong className="text-black dark:text-white font-medium">ClimGO</strong>, nous sommes spécialisés dans les solutions de <strong className="text-black dark:text-white font-medium">pompes à chaleur</strong>, offrant un large éventail de services pour répondre à tous vos besoins en matière de <strong className="text-black dark:text-white font-medium">chauffage</strong> et de <strong className="text-black dark:text-white font-medium">climatisation</strong>.
                </p>
                <p className="mb-3 font-light">
                  De la <strong className="text-black dark:text-white font-medium">consultation initiale</strong> à l'<strong className="text-black dark:text-white font-medium">installation</strong>, en passant par l'<strong className="text-black dark:text-white font-medium">entretien</strong> et le <strong className="text-black dark:text-white font-medium">dépannage</strong>, notre équipe d'experts dédiée est là pour vous conseiller.
                </p>
                <p className="mb-4 font-light">
                  Contactez-nous pour plus d'informations ou pour demander un <strong className="text-black dark:text-white font-medium">devis gratuit</strong>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-start">
                <Link href="/climatisation">
                  <button className="px-10 sm:px-12 py-4 sm:py-4 bg-gray-50 dark:bg-gray-800 border border-black dark:border-white text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 text-base sm:text-lg font-semibold rounded-full transition-colors duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    Climatisation
                  </button>
                </Link>
                
                <Link href="/chauffage">
                  <button className="px-10 sm:px-12 py-4 sm:py-4 bg-gray-50 dark:bg-gray-800 border border-black dark:border-white text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 text-base sm:text-lg font-semibold rounded-full transition-colors duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    Chauffage
                  </button>
                </Link>

                <Link href="/eau-chaude-sanitaire">
                  <button className="px-10 sm:px-12 py-4 sm:py-4 bg-gray-50 dark:bg-gray-800 border border-black dark:border-white text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 text-base sm:text-lg font-semibold rounded-full transition-colors duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    Eau Chaude Sanitaire
                  </button>
                    </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <LazyGoogleMaps backgroundColor="bg-gray-50 dark:bg-background" />

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-10px) translateX(5px); }
          100% { transform: translateY(0px) translateX(0px); }
        }
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
