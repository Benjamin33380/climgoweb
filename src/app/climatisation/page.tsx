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
            <div className="w-full max-w-2xl mx-auto lg:mx-0 text-center lg:text-left order-2 lg:order-1 animate-slide-in-left">
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
                  className="px-8 sm:px-10 py-3 sm:py-4 bg-gray-50 dark:bg-background border border-black text-black hover:bg-gray-100 dark:hover:bg-gray-800 text-sm sm:text-base font-semibold rounded-full transition-colors duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Découvrir nos solutions
                </button>
                
                <Link href="/contact">
                  <button className="px-8 sm:px-10 py-3 sm:py-4 bg-gray-50 dark:bg-background border border-black text-black hover:bg-gray-100 dark:hover:bg-gray-800 text-sm sm:text-base font-semibold rounded-full transition-colors duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    Demander un devis
                  </button>
                </Link>
              </div>
            </div>
            
            {/* Cartes des 4 solutions dans le hero - Animation depuis la droite */}
            <div className="w-full max-w-2xl mx-auto lg:mx-0 order-1 lg:order-2 animate-slide-in-right">
              <div className="grid grid-cols-1 gap-6">
                {solutions.slice(0, 4).map((solution, index) => (
                  <Link 
                    key={index} 
                    href="/contact" 
                    className="block group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-white hover:-translate-y-2 h-[160px] cursor-pointer"
                  >
                    {/* Image en fond */}
                    <div 
                      className="absolute inset-0 bg-no-repeat bg-cover transition-transform duration-300 group-hover:scale-105"
                      style={{ 
                        backgroundImage: `url(${solution.image})`,
                        backgroundPosition: 
                          index === 0 ? '20% 5%' :   // Climatisation murale - LA MACHINE à droite, en haut
                          index === 1 ? '90% 10%' :   // Climatisation gainable - LA GRILLE à droite
                          index === 2 ? '10% 15%' :   // Climatisation cassette - LA CASSETTE au centre
                          index === 3 ? '85% 80%' :   // Climatisation console - LA CONSOLE en bas à droite
                          'right center'
                      }}
                    >
                      {/* Overlay pour contraste */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/30 to-transparent dark:from-black/60 dark:via-black/35 dark:to-transparent group-hover:from-white/50 group-hover:via-white/25 group-hover:to-transparent dark:group-hover:from-black/50 dark:group-hover:via-black/30 dark:group-hover:to-transparent transition-all duration-300" />
                    </div>
                    
                    {/* Bannière avec le titre - apparaît au survol */}
                    <div className="absolute bottom-0 left-0 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="bg-white/60 dark:bg-black/60 backdrop-blur-md text-black dark:text-white px-6 py-3 rounded-tr-2xl border border-white/30 dark:border-white/10">
                        <h4 className="text-lg sm:text-xl font-light tracking-wide">
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


      {/* Solutions Section */}
      <section 
        ref={solutionsRef} 
        className="py-24 relative"
      >
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extralight mb-6 tracking-wide">
              Nos <span className="text-[#03144a] dark:text-white">Technologies</span>
            </h2>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#03144a] dark:via-white to-transparent mx-auto mb-8" />
            <p className="text-xl text-[#03144A] dark:text-white max-w-3xl mx-auto">
              Chaque solution est pensée pour maximiser votre confort tout en optimisant vos économies d'énergie
            </p>
          </div>

          {/* Solutions en Colonne - Cartes Grandes */}
          <div className="space-y-12">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gray-50 dark:bg-background rounded-3xl border border-gray-50 dark:border-background overflow-hidden backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {index === 0 || index === 1 || index === 2 || index === 3 ? (
                  // Cards climatisation avec image en fond complet
                  <div 
                    className="relative bg-center bg-no-repeat min-h-[600px] flex items-center"
                    style={{ 
                      backgroundImage: `url(${solution.image})`,
                      backgroundPosition: index === 2 ? 'center 30%' : index === 1 ? 'center 40%' : 'center center',
                      backgroundSize: 'cover'
                    }}
                  >
                    {/* Overlay adaptatif selon le thème */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent dark:from-black/70 dark:via-black/40 dark:to-transparent" />
                    <div className="relative z-10 p-12 lg:p-16 max-w-xl">
                      <div className="mb-8">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#03144A]/10 to-[#2563EB]/10 border border-[#2563EB] text-[#2563EB] text-sm font-medium mb-6">
                          {solution.badge}
                        </div>
                        <h3 className="text-3xl md:text-4xl font-light mb-4 text-[#03144A] dark:text-white">
                          {solution.title}
                        </h3>
                        <p className="text-xl text-[#2563EB] dark:text-[#60A5FA] mb-6 font-light">
                          {solution.subtitle}
                        </p>
                      </div>
                      <p className="text-[#03144A] dark:text-white text-lg leading-relaxed mb-8">
                        {solution.description}
                      </p>
                      <div className="space-y-4 mb-8">
                        {solution.features.map((feature, i) => (
                          <div key={i} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-[#2563EB] dark:bg-[#60A5FA] rounded-full flex-shrink-0" />
                            <span className="text-[#03144A] dark:text-white">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-4 sm:gap-0">
                        <Link
                          href="/contact"
                          className="group px-8 py-3 bg-gradient-to-r from-[#03144A] to-[#2563EB] rounded-full text-white font-medium transition-all duration-300 hover:scale-105 text-center"
                        >
                          Devis gratuit
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Autres cards avec le layout original
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Content Side */}
                    <div className="p-12 lg:p-16">
                      <div className="mb-8">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#03144A]/10 to-[#2563EB]/10 border border-[#2563EB] text-[#2563EB] text-sm font-medium mb-6">
                          {solution.badge}
                        </div>
                        <h3 className="text-3xl md:text-4xl font-light mb-4 text-[#03144A] dark:text-white">
                          {solution.title}
                        </h3>
                        <p className="text-xl text-[#2563EB] mb-6 font-light">
                          {solution.subtitle}
                        </p>
                      </div>
                      <p className="text-[#03144A] dark:text-white text-lg leading-relaxed mb-8">
                        {solution.description}
                      </p>
                      <div className="space-y-4 mb-8">
                        {solution.features.map((feature, i) => (
                          <div key={i} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-[#2563EB] rounded-full flex-shrink-0" />
                            <span className="text-[#03144A] dark:text-white">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 sm:gap-0">
                        <Link
                          href="/contact"
                          className="group px-8 py-3 bg-gradient-to-r from-[#03144A] to-[#2563EB] rounded-full text-white font-medium transition-all duration-300 hover:scale-105 text-center"
                        >
                          Devis gratuit
                        </Link>
                      </div>
                    </div>

                    {/* Image Side */}
                    <div className="relative bg-gray-50 dark:bg-background flex items-center justify-center p-12">
                      <div className="relative w-80 h-80">
                        <Image
                          src={solution.image}
                          alt={solution.title}
                          fill
                          className="object-contain filter drop-shadow-2xl"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-50 dark:bg-background" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight mb-8">
              Pourquoi nous <span className="text-[#03144A] dark:text-white">choisir</span> ?
            </h2>
            <p className="text-xl text-[#03144A] dark:text-white max-w-2xl mx-auto">
              L'alliance du savoir-faire technique et de l'excellence service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="group text-center p-8 rounded-2xl bg-gray-50 dark:bg-background border border-[#03144A] dark:border-white/20 hover:border-white/50 dark:hover:border-black/50 transition-all duration-300"
              >
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-medium mb-4 text-[#03144A] dark:text-white group-hover:text-[#2563EB] transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-[#03144A] dark:text-white/80 group-hover:text-[#2563EB] transition-colors">
                  {advantage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Optimisé Mobile */}
      <section className="py-12 md:py-24 relative">
        <div className="max-w-4xl mx-auto text-center px-4 md:px-6">
          <div className="bg-gray-50 dark:bg-background rounded-2xl md:rounded-3xl p-8 md:p-16 border border-[#03144A] dark:border-white/20 backdrop-blur-sm shadow-xl">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-light mb-6 md:mb-8 leading-tight">
              Prêt à optimiser votre
              <br className="hidden sm:block" />
              <span className="text-[#2563EB]">confort climatique</span> ?
            </h2>
            
            <p className="text-base md:text-xl text-[#03144A] dark:text-white mb-8 md:mb-12 leading-relaxed">
              Nos experts vous accompagnent dans le choix de la solution parfaite pour votre habitat
            </p>
            
            <Link
              href="/contact"
              className="inline-block px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-[#03144A] to-[#2563EB] rounded-full text-white font-medium transition-all duration-300 hover:scale-105 text-sm md:text-base"
            >
              Demander un devis gratuit
            </Link>
          </div>
        </div>
        <nav className="max-w-7xl mx-auto px-4 text-sm text-gray-600 dark:text-gray-300 mt-12 mb-24" aria-label="Fil d'Ariane">
          <ol className="list-reset flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:underline text-[#2563EB] dark:text-[#60A5FA]">Accueil</Link>
              <span className="mx-2 dark:text-gray-400">/</span>
            </li>
            <li>
              <Link href="/services" className="hover:underline text-[#2563EB] dark:text-[#60A5FA]">Nos services</Link>
              <span className="mx-2 dark:text-gray-400">/</span>
            </li>
            <li className="text-gray-500 dark:text-gray-400">Climatisation</li>
          </ol>
        </nav>
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
