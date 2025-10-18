'use client';

import React from 'react';
import Link from 'next/link';
import LazyGoogleMaps from '@/components/LazyGoogleMaps';

export default function PompeAChaleurPage() {
  const solutions = [
    {
      id: 'climatisation-murale',
      title: "Pompe à chaleur air/air",
      image: "/outro/cardclim.png",
    },
    {
      id: 'chauffage-ecs',
      title: "Pompe à chaleur air/eau",
      image: "/img/uipacspacex.png",
    },
    {
      id: 'thermodynamique',
      title: "Thermodynamique",
      image: "/img/thermoecs.png",
    }
  ];

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
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center min-h-[40vh] sm:min-h-[50vh]">
            {/* Contenu texte - Animation depuis la gauche */}
            <div 
              className="w-full max-w-2xl mx-auto lg:mx-0 text-left order-1 lg:order-1"
              style={{ 
                animation: 'slide-in-left 1.2s ease-out both'
              }}
            >
              <h1 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold lg:font-light tracking-tight mb-4 xs:mb-5 sm:mb-5 md:mb-6 lg:mb-8 text-[#03144A] dark:text-white break-words leading-tight">
                <span className="bg-gradient-to-r from-[#FF8C00] via-[#2563EB] to-[#FF8C00] dark:from-[#FFA500] dark:via-[#60A5FA] dark:to-[#FFA500] bg-clip-text text-transparent">
                  Pompe à Chaleur
                </span>
              </h1>
              
              <div className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-xl leading-relaxed text-gray-700 dark:text-gray-100 max-w-full lg:max-w-4xl mx-auto lg:mx-0 px-0 sm:px-2 lg:px-0 mb-6 xs:mb-7 sm:mb-8">
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
                <Link href="/contact">
                  <button className="px-10 sm:px-12 py-4 sm:py-4 bg-gray-50 dark:bg-gray-800 border border-black dark:border-white text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 text-base sm:text-lg font-semibold rounded-full transition-colors duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    Demander un devis
                  </button>
                    </Link>
              </div>
                  </div>
                  
            {/* Cartes des solutions - Animation depuis la droite */}
            <div className="w-full max-w-2xl mx-auto lg:mx-0 order-2 lg:order-2">
              <div className="grid grid-cols-1 gap-6">
                {solutions.map((solution, index) => (
                  <Link 
                    key={index} 
                    href="/contact" 
                    className="block group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-white hover:-translate-y-2 h-[350px] sm:h-[380px] lg:h-[350px] cursor-pointer"
                    style={{ 
                      animation: `slide-in-right 1.2s ease-out ${index * 0.2}s both`
                    }}
                  >
                    {/* Version MOBILE - Image simple */}
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="lg:hidden absolute inset-0 w-full h-full object-cover"
                    />
                    
                    {/* Version DESKTOP */}
                    <div 
                      className="hidden lg:block absolute inset-0 bg-no-repeat bg-cover transition-transform duration-300 group-hover:scale-105"
                      style={{ 
                        backgroundImage: `url(${solution.image})`,
                        backgroundPosition: 'center center'
                      }}
                    >
                      {/* Overlay pour contraste - desktop uniquement */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/20 to-transparent dark:from-black/30 dark:via-black/15 dark:to-transparent group-hover:from-white/30 group-hover:via-white/15 group-hover:to-transparent dark:group-hover:from-black/20 dark:group-hover:via-black/10 dark:group-hover:to-transparent transition-all duration-300" />
                  </div>
                  
                    {/* Bannière avec le titre - toujours visible sur mobile, au survol sur desktop */}
                    <div className="absolute bottom-0 left-0 z-20 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 transform translate-y-0 lg:translate-y-2 lg:group-hover:translate-y-0">
                      <div className="bg-white/90 dark:bg-black/90 lg:bg-white/60 lg:dark:bg-black/60 backdrop-blur-md text-black dark:text-white px-4 py-2 lg:px-6 lg:py-3 rounded-tr-2xl border border-white/30 dark:border-white/10">
                        <h4 className="text-sm sm:text-base lg:text-lg xl:text-xl font-light tracking-wide">
                          {solution.title}
                        </h4>
                    </div>
                    </div>
                    </Link>
               ))}
                  </div>
                </div>
          </div>
        </div>
      </section>

      {/* Section Information Pompe à Chaleur */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-background">
        <div className="container mx-auto px-4 xs:px-5 sm:px-6 max-w-4xl">
          
          {/* Bloc 1 */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-black dark:text-white mb-4 sm:mb-6">
              Consultation et conseil personnalisé
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
              Chez <strong className="text-black dark:text-white font-medium">ClimGO</strong>, chaque projet débute par une <strong className="text-black dark:text-white font-medium">visite technique approfondie</strong> afin d'analyser vos besoins réels en matière de chauffage et de climatisation.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mt-4 font-light">
              Nos techniciens experts étudient les particularités de votre logement ou de votre piscine pour vous orienter vers la <strong className="text-black dark:text-white font-medium">pompe à chaleur la plus adaptée</strong> à votre confort et à votre consommation.
            </p>
        </div>
        
          {/* Séparateur */}
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#FF8C00] to-transparent mx-auto mb-12 sm:mb-16" />

          {/* Bloc 2 */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-black dark:text-white mb-4 sm:mb-6">
              Installation de pompe à chaleur
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
              Nous assurons la pose complète de <strong className="text-black dark:text-white font-medium">pompes à chaleur air/eau, air/air et pour piscine</strong>.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mt-4 font-light">
              Nos installateurs qualifiés et <strong className="text-black dark:text-white font-medium">certifiés RGE</strong> réalisent des installations soignées, conformes aux normes en vigueur et adaptées à chaque configuration.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mt-4 font-light">
              Notre priorité : <strong className="text-black dark:text-white font-medium">efficacité, propreté et discrétion</strong>, afin que les travaux s'intègrent naturellement dans votre quotidien.
            </p>
          </div>
          
          {/* Séparateur */}
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#2563EB] to-transparent mx-auto mb-12 sm:mb-16" />

          {/* Bloc 3 */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-black dark:text-white mb-4 sm:mb-6">
              Entretien de pompe à chaleur
          </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
              Pour garantir la durée de vie et la performance de votre installation, un <strong className="text-black dark:text-white font-medium">entretien régulier</strong> est indispensable.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mt-4 font-light">
              ClimGO propose des <strong className="text-black dark:text-white font-medium">contrats d'entretien personnalisés</strong> comprenant :
            </p>
            <ul className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mt-4 ml-6 space-y-2 font-light">
              <li>• une visite annuelle de contrôle,</li>
              <li>• le nettoyage complet des équipements,</li>
              <li>• et le remplacement préventif des pièces si nécessaire.</li>
            </ul>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mt-4 font-light">
              Nos interventions assurent un fonctionnement <strong className="text-black dark:text-white font-medium">silencieux, économique et durable</strong> de votre pompe à chaleur.
            </p>
          </div>

          {/* Séparateur */}
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#FF8C00] to-transparent mx-auto mb-12 sm:mb-16" />

          {/* Bloc 4 */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-black dark:text-white mb-4 sm:mb-6">
              Dépannage rapide et fiable
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
              En cas de panne ou de dysfonctionnement, notre équipe de dépannage <strong className="text-black dark:text-white font-medium">intervient dans les plus brefs délais</strong>.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mt-4 font-light">
              Formés à tous les types et toutes les marques de pompes à chaleur, nos techniciens diagnostiquent rapidement l'origine du problème et assurent une <strong className="text-black dark:text-white font-medium">remise en service efficace et durable</strong>.
            </p>
          </div>

          {/* Message final */}
          <div className="text-center">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
              Avec <strong className="text-black dark:text-white font-medium">ClimGO</strong>, vous bénéficiez d'un service complet, du conseil à la maintenance, pour un <strong className="text-black dark:text-white font-medium">confort maîtrisé toute l'année</strong>.
            </p>
          </div>
          
        </div>
      </section>

      {/* Section Contact */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-background">
        <div className="container mx-auto px-4 xs:px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
            
            {/* Carte de contact */}
            <div>
              <div className="bg-gradient-to-br from-[#03144A] to-[#F97316] rounded-3xl p-8 text-white shadow-xl !bg-opacity-100 h-full">
                <h3 className="text-2xl font-light mb-6 flex items-center text-white">
                  <div className="w-1 h-6 bg-white rounded-full mr-3"></div>
                  Besoin d'une réponse immédiate ?
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 rounded-full p-3 backdrop-blur-sm">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/90 text-sm">Appelez directement</p>
                      <Link href="tel:0766460008" className="text-xl font-semibold text-white hover:text-gray-200 transition-colors">
                        07 66 46 00 08
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 rounded-full p-3 backdrop-blur-sm">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/90 text-sm">Email professionnel</p>
                      <Link href="mailto:contact@climgo.fr" className="text-xl font-semibold text-white hover:text-gray-200 transition-colors">
                        contact@climgo.fr
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 rounded-full p-3 backdrop-blur-sm">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/90 text-sm">Notre localisation</p>
                      <span className="text-lg font-medium text-white">28 rue de Cantelaude, 33380 Marcheprime</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 rounded-full p-3 backdrop-blur-sm">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/90 text-sm">Horaires d'ouverture</p>
                      <span className="text-lg font-medium text-white">Lun-Ven: 8h-18h</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <Link
                    href="tel:0766460008"
                    className="w-full bg-white text-[#03144a] px-6 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center space-x-3 group"
                  >
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Appel d'urgence</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Carte formulaire de contact */}
            <div>
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 h-full flex flex-col">
                <h3 className="text-2xl sm:text-3xl font-light text-black dark:text-white mb-4">
                  Démarrons votre projet
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-[#F97316] to-[#03144A] mb-6"></div>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 flex-1">
                  Remplissez notre formulaire de contact et recevez une réponse personnalisée sous 48h. Nos experts analysent votre demande pour vous proposer la meilleure solution adaptée à vos besoins.
                </p>

                <Link 
                  href="/contact"
                  className="w-full px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-[#03144A] to-[#F97316] text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                >
                  Demander un devis gratuit
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
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
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
