'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Wrench, DraftingCompass, ShieldCheck, BadgeEuro } from 'lucide-react';
import { SimpleWrapper } from '@/components/ui/SimpleWrapper';
import LazyGoogleMaps from '@/components/LazyGoogleMaps';

export default function ClimatisationPage() {
  const solutionsRef = useRef<HTMLDivElement>(null);

  const solutions = [
    {
      id: 'climatisation-cassette',
      title: "Climatisation cassette",
      subtitle: "Performance Commerciale",
      image: "/outro/cardcassette.png",
      badge: "Idéal commerce & bureaux",
      features: [
        "Puissance adaptée aux grands espaces",
        "Distribution d'air 360°",
        "Installation au plafond",
        "Contrôle professionnel"
      ],
      description: "Spécialement conçue pour les espaces commerciaux et professionnels. Puissance et efficacité réunies pour climatiser efficacement de grandes surfaces.",
      gradient: "from-[#03144A] to-[#2563EB]"
    },
    {
      id: 'climatisation-gainable',
      title: "Climatisation gainable",
      subtitle: "Invisible & Performante",
      image: "/outro/cardgain.png",
      badge: "Installation discrète",
      features: [
        "Intégration dans les faux-plafonds",
        "Distribution d'air optimisée",
        "Contrôle centralisé",
        "Maintenance simplifiée"
      ],
      description: "La climatisation invisible par excellence. Parfaite pour les espaces commerciaux et les résidences de standing, elle offre un confort optimal sans impact visuel.",
      gradient: "from-[#03144A] to-[#2563EB]"
    },
    {
      id: 'climatisation-murale',
      title: "Climatisation murale",
      subtitle: "Confort & Discrétion",
      image: "/outro/cardclim.png",
      badge: "Installation rapide",
      features: [
        "Design ultra-moderne",
        "Contrôle à distance",
        "Fonctionnement silencieux",
        "Filtres anti-allergènes"
      ],
      description: "La solution idéale pour climatiser vos pièces principales. Discrète, efficace et facile à installer, elle s'intègre parfaitement à votre décoration.",
      gradient: "from-[#03144A] to-[#2563EB]"
    },
    {
      id: 'climatisation-console',
      title: "Climatisation console",
      subtitle: "Flexibilité & Mobilité",
      image: "/outro/cardconsole.png",
      badge: "Installation au sol",
      features: [
        "Installation sans travaux",
        "Mobilité maximale",
        "Puissance adaptative",
        "Contrôle intuitif"
      ],
      description: "La solution flexible par excellence. Installation simple, déplacement possible et performance optimale pour climatiser efficacement vos espaces.",
      gradient: "from-[#03144A] to-[#2563EB]"
    }
  ];

  const advantages = [
    {
      icon: <Wrench className="inline w-6 h-6 text-[#2563EB]" />,
      title: "Expertise technique",
      desc: "10 ans d'expérience en climatisation"
    },
    {
      icon: <DraftingCompass className="inline w-6 h-6 text-[#2563EB]" />,
      title: "Installation sur mesure",
      desc: "Prestation certifiée"
    },
    {
      icon: <ShieldCheck className="inline w-6 h-6 text-[#2563EB]" />,
      title: "Garantie",
      desc: "SAV réactif et pièces d'origine"
    },
    {
      icon: <BadgeEuro className="inline w-6 h-6 text-[#2563EB]" />,
      title: "Financement",
      desc: "Solutions adaptées à votre budget"
    }
  ];

  // Carousel state for desktop
  const [currentIndex, setCurrentIndex] = useState(0);
  // For auto-scroll logic
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const carouselHovering = useRef(false);

  // Helper to clear interval
  const clearAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = null;
    }
  };

  // Start auto-scroll
  const startAutoScroll = () => {
    clearAutoScroll();
    autoScrollRef.current = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === solutions.length - 1 ? 0 : prev + 1
      );
    }, 5000);
  };

  // Effect to start auto-scroll and clean up on unmount
  useEffect(() => {
    startAutoScroll();
    return () => {
      clearAutoScroll();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Reset auto-scroll when index is changed manually
  useEffect(() => {
    if (!carouselHovering.current) {
      startAutoScroll();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-background text-[#03144A] dark:text-white">
      
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
            <Link 
              href="/services" 
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
            >
              Nos services
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-black dark:text-white font-medium">
              Climatisation
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
                <span className="bg-gradient-to-r from-[#2563EB] via-[#03144A] to-[#2563EB] dark:from-[#60A5FA] dark:via-white dark:to-[#60A5FA] bg-clip-text text-transparent">
                  Climatisation
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#03144A] via-[#2563EB] to-[#03144A] dark:from-white dark:via-[#60A5FA] dark:to-white bg-clip-text text-transparent">
                  Réversibles
                </span>
              </h1>
              
              <div className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-xl leading-relaxed text-gray-700 dark:text-gray-100 max-w-full lg:max-w-4xl mx-auto lg:mx-0 px-0 sm:px-2 lg:px-0 mb-6 xs:mb-7 sm:mb-8">
                <p className="mb-3 font-light">
                  Votre artisan <strong className="text-black dark:text-white font-medium">ClimGO</strong> <strong className="text-black dark:text-white font-medium">installe</strong>, <strong className="text-black dark:text-white font-medium">entretient</strong> et <strong className="text-black dark:text-white font-medium">dépanne</strong><br />
                  vos systèmes de <strong className="text-black dark:text-white font-medium">climatisation réversible</strong> (pompes à chaleur air/air)<br />
                  partout en <strong className="text-black dark:text-white font-medium">Gironde</strong>.
                </p>
                <p className="mb-3 font-light">
                  <strong className="text-black dark:text-white font-medium">Murale</strong>, <strong className="text-black dark:text-white font-medium">gainable</strong>, <strong className="text-black dark:text-white font-medium">console</strong> ou <strong className="text-black dark:text-white font-medium">cassette</strong> —<br />
                  nous proposons des solutions <strong className="text-black dark:text-white font-medium">sur mesure</strong>, <strong className="text-black dark:text-white font-medium">performantes</strong><br />
                  et adaptées à votre budget.
                </p>
                <p className="mb-3 font-light">
                  Que vous souhaitiez <strong className="text-black dark:text-white font-medium">rafraîchir</strong> votre logement en été<br />
                  ou le <strong className="text-black dark:text-white font-medium">chauffer</strong> en hiver, nos équipements garantissent<br />
                  <strong className="text-black dark:text-white font-medium">confort</strong>, <strong className="text-black dark:text-white font-medium">performance</strong> et <strong className="text-black dark:text-white font-medium">économies d'énergie</strong><br />
                  au quotidien.
                </p>
                <p className="mb-3 font-light">
                  Nous vous accompagnons à chaque étape :<br />
                  <strong className="text-black dark:text-white font-medium">conseil</strong>, <strong className="text-black dark:text-white font-medium">sélection du matériel</strong>, <strong className="text-black dark:text-white font-medium">installation</strong><br />
                  et <strong className="text-black dark:text-white font-medium">maintenance</strong>.
                </p>
                <p className="mb-4 font-light">
                  Contactez-nous dès aujourd'hui pour obtenir<br />
                  un <strong className="text-black dark:text-white font-medium">devis gratuit</strong> et découvrir la solution<br />
                  la plus adaptée à votre habitat.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-start">
                <button
                  onClick={() => solutionsRef.current?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-10 sm:px-12 py-4 sm:py-4 bg-gray-50 dark:bg-gray-800 border border-black dark:border-white text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 text-base sm:text-lg font-semibold rounded-full transition-colors duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Découvrir nos solutions
                </button>
                
                <Link href="/contact">
                  <button className="px-10 sm:px-12 py-4 sm:py-4 bg-gray-50 dark:bg-gray-800 border border-black dark:border-white text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 text-base sm:text-lg font-semibold rounded-full transition-colors duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    Demander un devis
                  </button>
                </Link>
              </div>
            </div>
            
            {/* Cartes des 4 solutions dans le hero - Animation depuis la droite */}
            <div className="w-full max-w-2xl mx-auto lg:mx-0 order-2 lg:order-2">
              <div className="grid grid-cols-1 gap-6">
                {solutions.slice(0, 4).map((solution, index) => (
                  <Link 
                    key={index} 
                    href="/contact" 
                    className="block group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-white hover:-translate-y-2 h-[200px] sm:h-[180px] lg:h-[160px] cursor-pointer"
                    style={{ 
                      animation: `slide-in-right 1.2s ease-out ${index * 0.2}s both`
                    }}
                  >
                    {/* Image simple pour toutes les résolutions */}
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    
                    {/* Bannière avec le titre - toujours visible sur mobile/tablette, au survol sur grand desktop */}
                    <div className="absolute bottom-0 left-0 z-20 opacity-100 xl:opacity-0 xl:group-hover:opacity-100 transition-all duration-300 transform translate-y-0 xl:translate-y-2 xl:group-hover:translate-y-0">
                      <div className="bg-white/90 dark:bg-black/90 xl:bg-white/60 xl:dark:bg-black/60 backdrop-blur-md text-black dark:text-white px-4 py-2 lg:px-6 lg:py-3 rounded-tr-2xl border border-white/30 dark:border-white/10">
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

      {/* Section Information Climatisation */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-background">
        <div className="container mx-auto px-4 xs:px-5 sm:px-6 max-w-4xl">
          
          {/* Bloc 1 */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-black dark:text-white mb-4 sm:mb-6">
              Évaluation et conseil technique
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
              Chez <strong className="text-black dark:text-white font-medium">ClimGO</strong>, chaque projet débute par une <strong className="text-black dark:text-white font-medium">visite technique personnalisée</strong>.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mt-4 font-light">
              Cette étape nous permet de comprendre précisément vos besoins en matière de chauffage et de climatisation.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mt-4 font-light">
              Nos experts en pompes à chaleur air/air vous accompagnent dans le choix du système le plus adapté à votre logement, à votre confort et à votre budget.
            </p>
          </div>

          {/* Séparateur */}
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#2563EB] to-transparent mx-auto mb-12 sm:mb-16" />

          {/* Bloc 2 */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-black dark:text-white mb-4 sm:mb-6">
              Installation de votre système
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
              L'installation de votre pompe à chaleur est assurée par nos <strong className="text-black dark:text-white font-medium">techniciens certifiés et expérimentés</strong>.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mt-4 font-light">
              Nous réalisons des interventions soignées et conformes aux normes en vigueur, garantissant la <strong className="text-black dark:text-white font-medium">performance et la durabilité</strong> de votre équipement.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mt-4 font-light">
              Nos équipes veillent à intervenir de manière efficace et organisée, afin de limiter toute gêne dans votre quotidien.
            </p>
          </div>

          {/* Séparateur */}
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#2563EB] to-transparent mx-auto mb-12 sm:mb-16" />

          {/* Bloc 3 */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-black dark:text-white mb-4 sm:mb-6">
              Maintenance préventive
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
              Pour conserver un <strong className="text-black dark:text-white font-medium">rendement optimal</strong> et prolonger la durée de vie de votre installation, un entretien régulier est essentiel.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mt-4 font-light">
              ClimGO propose des <strong className="text-black dark:text-white font-medium">contrats de maintenance complets</strong>, comprenant :
            </p>
            <ul className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mt-4 ml-6 space-y-2 font-light">
              <li>• une visite annuelle de contrôle,</li>
              <li>• le nettoyage des équipements,</li>
              <li>• et la vérification des performances avec préconisation de remplacement si nécessaire.</li>
            </ul>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mt-4 font-light">
              Nous veillons à ce que votre système fonctionne toujours dans les meilleures conditions.
            </p>
          </div>

          {/* Séparateur */}
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#2563EB] to-transparent mx-auto mb-12 sm:mb-16" />

          {/* Bloc 4 */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-black dark:text-white mb-4 sm:mb-6">
              Dépannage rapide et efficace
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
              En cas de panne ou de dysfonctionnement, nos <strong className="text-black dark:text-white font-medium">techniciens spécialisés interviennent rapidement</strong> pour rétablir le bon fonctionnement de votre installation.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mt-4 font-light">
              Qu'il s'agisse d'un incident mineur ou d'une défaillance plus complexe, nous disposons des compétences nécessaires pour diagnostiquer et réparer tout type de pompe à chaleur, quelle que soit la marque.
            </p>
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
