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
              className="w-full max-w-2xl mx-auto lg:mx-0 text-center lg:text-left order-1 lg:order-1"
              style={{ 
                animation: 'slide-in-left 0.8s ease-out both'
              }}
            >
              <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold lg:font-light tracking-tight mb-2 xs:mb-3 sm:mb-3 md:mb-4 lg:mb-6 text-[#03144A] dark:text-white break-words leading-tight">
                <span className="bg-gradient-to-r from-[#2563EB] via-[#03144A] to-[#2563EB] dark:from-[#60A5FA] dark:via-white dark:to-[#60A5FA] bg-clip-text text-transparent">
                  Climatisation
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#03144A] via-[#2563EB] to-[#03144A] dark:from-white dark:via-[#60A5FA] dark:to-white bg-clip-text text-transparent">
                  Réversibles
                </span>
              </h1>
              
              <div className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed text-gray-900 dark:text-gray-100 max-w-full lg:max-w-4xl mx-auto lg:mx-0 px-0 sm:px-2 lg:px-0 mb-4 xs:mb-6 sm:mb-6">
                <p className="mb-3">
                  Votre artisan <strong className="text-gray-900 dark:text-white font-semibold">ClimGO</strong> <strong className="text-gray-900 dark:text-white font-semibold">installe</strong>, <strong className="text-gray-900 dark:text-white font-semibold">entretient</strong> et <strong className="text-gray-900 dark:text-white font-semibold">dépanne</strong><br />
                  vos systèmes de <strong className="text-gray-900 dark:text-white font-semibold">climatisation réversible</strong> (pompes à chaleur air/air)<br />
                  partout en <strong className="text-gray-900 dark:text-white font-semibold">Gironde</strong>.
                </p>
                <p className="mb-3">
                  <strong className="text-gray-900 dark:text-white font-semibold">Murale</strong>, <strong className="text-gray-900 dark:text-white font-semibold">gainable</strong>, <strong className="text-gray-900 dark:text-white font-semibold">console</strong> ou <strong className="text-gray-900 dark:text-white font-semibold">cassette</strong> —<br />
                  nous proposons des solutions <strong className="text-gray-900 dark:text-white font-semibold">sur mesure</strong>, <strong className="text-gray-900 dark:text-white font-semibold">performantes</strong><br />
                  et adaptées à votre budget.
                </p>
                <p className="mb-3">
                  Que vous souhaitiez <strong className="text-gray-900 dark:text-white font-semibold">rafraîchir</strong> votre logement en été<br />
                  ou le <strong className="text-gray-900 dark:text-white font-semibold">chauffer</strong> en hiver, nos équipements garantissent<br />
                  <strong className="text-gray-900 dark:text-white font-semibold">confort</strong>, <strong className="text-gray-900 dark:text-white font-semibold">performance</strong> et <strong className="text-gray-900 dark:text-white font-semibold">économies d'énergie</strong><br />
                  au quotidien.
                </p>
                <p className="mb-3">
                  Nous vous accompagnons à chaque étape :<br />
                  <strong className="text-gray-900 dark:text-white font-semibold">conseil</strong>, <strong className="text-gray-900 dark:text-white font-semibold">sélection du matériel</strong>, <strong className="text-gray-900 dark:text-white font-semibold">installation</strong><br />
                  et <strong className="text-gray-900 dark:text-white font-semibold">maintenance</strong>.
                </p>
                <p className="mb-4">
                  Contactez-nous dès aujourd'hui pour obtenir<br />
                  un <strong className="text-gray-900 dark:text-white font-semibold">devis gratuit</strong> et découvrir la solution<br />
                  la plus adaptée à votre habitat.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
                <button
                  onClick={() => solutionsRef.current?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 sm:px-10 py-3 sm:py-4 bg-gray-50 dark:bg-gray-800 border border-black dark:border-white text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 text-sm sm:text-base font-semibold rounded-full transition-colors duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Découvrir nos solutions
                </button>
                
                <Link href="/contact">
                  <button className="px-8 sm:px-10 py-3 sm:py-4 bg-gray-50 dark:bg-gray-800 border border-black dark:border-white text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 text-sm sm:text-base font-semibold rounded-full transition-colors duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
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
                      animation: `slide-in-right 0.8s ease-out ${index * 0.2}s both`
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
                        backgroundPosition: 
                          index === 0 ? '20% 5%'   // Climatisation cassette - LA MACHINE à droite, en haut
                          : index === 1 ? '90% 10%'  // Climatisation gainable - LA GRILLE à droite
                          : index === 2 ? '10% 15%'  // Climatisation murale - LA CASSETTE au centre
                          : index === 3 ? '85% 80%'  // Climatisation console - LA CONSOLE en bas à droite
                          : 'right center'
                      }}
                    >
                      {/* Overlay pour contraste - desktop uniquement */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/30 to-transparent dark:from-black/60 dark:via-black/35 dark:to-transparent group-hover:from-white/50 group-hover:via-white/25 group-hover:to-transparent dark:group-hover:from-black/50 dark:group-hover:via-black/30 dark:group-hover:to-transparent transition-all duration-300" />
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

      {/* Location Map Section */}
              <LazyGoogleMaps backgroundColor="bg-gray-50 dark:bg-background" />

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-10px) translateX(5px); }
          100% { transform: translateY(0px) translateX(0px); }
        }
      `}</style>
    </div>
  );
}
