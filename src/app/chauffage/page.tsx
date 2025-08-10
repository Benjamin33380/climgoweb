'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Wrench, Ruler, ShieldCheck, BadgeEuro } from 'lucide-react';
import { SimpleWrapper } from '@/components/ui/SimpleWrapper';
import LocationMap from '@/components/LocationMap';

export default function ChauffagePage() {
  const solutionsRef = useRef<HTMLDivElement>(null);

  const solutions = [
    {
      id: 'pac-air-eau',
      title: "Pompe à chaleur air/eau",
      subtitle: "Performance & Économies",
      image: "/PacAirEau.png",
      badge: "Jusqu'à -70% sur votre facture",
      features: [
        "Coefficient de performance exceptionnel",
        "Compatible MaPrimeRénov' & CEE",
        "Intégration plancher chauffant",
        "Fonctionnement jusqu'à -15°C"
      ],
      description: "Technologie de pointe qui transforme l'énergie gratuite de l'air en chaleur pour votre habitation. Solution idéale pour remplacer votre ancienne chaudière.",
      price: "À partir de 9 990€",
      gradient: "from-[#03144A] to-[#DC2626]"
    },
    {
      id: 'pac-air-air',
      title: "Pompe à chaleur air/air",
      subtitle: "Réversible 4 Saisons",
      image: "/PompeChaleurAirAir.webp",
      badge: "Chauffage + Climatisation",
      features: [
        "Système réversible intégral",
        "Installation rapide et propre",
        "Contrôle zone par zone",
        "Design ultra-moderne"
      ],
      description: "Un seul équipement pour votre confort toute l'année. Chauffage l'hiver, climatisation l'été, avec une efficacité énergétique remarquable.",
      price: "À partir de 1 490€",
      gradient: "from-[#03144A] to-[#DC2626]"
    },
    {
      id: 'plancher-chauffant',
      title: "Plancher chauffant",
      subtitle: "Confort Invisible",
      image: "/PlancherChauffantAnime.webp",
      badge: "Luxe & Discrétion",
      features: [
        "Chaleur homogène optimale",
        "Libération totale des murs",
        "Silence absolu garanti",
        "Température pièce par pièce"
      ],
      description: "Le summum du confort thermique. Invisible mais omniprésent, il transforme votre sol en source de bien-être permanent.",
      price: "À partir de 65€/m²",
      gradient: "from-[#03144A] to-[#DC2626]"
    },
    {
      id: 'radiateurs',
      title: "Radiateurs nouvelle génération",
      subtitle: "Design & Performance",
      image: "/Radiateur.png",
      badge: "Montée en température rapide",
      features: [
        "Inertie intelligente avancée",
        "Formats décoratifs variés",
        "Compatibilité PAC optimale",
        "Installation sans gros œuvre"
      ],
      description: "L'évolution des radiateurs traditionnels. Design contemporain, performance énergétique et facilité d'installation réunis.",
      price: "À partir de 290€",
      gradient: "from-[#03144A] to-[#DC2626]"
    }
  ];

  const advantages = [
    {
      icon: <Wrench className="inline w-6 h-6 text-[#DC2626]" />,
      title: "Expertise technique",
      desc: "10 ans d'expérience dans le thermique"
    },
    {
      icon: <Ruler className="inline w-6 h-6 text-[#DC2626]" />,
      title: "Installation sur mesure",
      desc: "Prestation certifiée"
    },
    {
      icon: <ShieldCheck className="inline w-6 h-6 text-[#DC2626]" />,
      title: "Garantie",
      desc: "SAV réactif et pièces d'origine"
    },
    {
      icon: <BadgeEuro className="inline w-6 h-6 text-[#DC2626]" />,
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
    <div className="min-h-screen bg-[#F8F9F4] dark:bg-black dark:bg-black text-[#03144A] dark:text-white dark:text-white">
      
      {/* Hero Section */}
      <section className="relative min-h-screen pt-24 md:pt-0 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#F8F9F4] dark:bg-black dark:bg-black" />
        
        {/* Background effects */}
        {/* Blue particles */}
        <div className="absolute w-2 h-2 bg-[#03144a] dark:bg-white rounded-full top-10 left-10" style={{ animation: 'float 4s ease-in-out infinite' }} />
        <div className="absolute w-2 h-2 bg-[#03144a] dark:bg-white rounded-full top-1/3 left-1/2" style={{ animation: 'float 4s ease-in-out infinite' }} />
        <div className="absolute w-2 h-2 bg-[#03144a] dark:bg-white rounded-full bottom-1/3 right-20" style={{ animation: 'float 4s ease-in-out infinite' }} />

        {/* Accent particles */}
        <div className="absolute w-2 h-2 bg-[#DC2626] rounded-full top-20 right-10" style={{ animation: 'float 4s ease-in-out infinite' }} />
        <div className="absolute w-2 h-2 bg-[#DC2626] rounded-full bottom-10 left-1/3" style={{ animation: 'float 4s ease-in-out infinite' }} />
        <div className="absolute w-2 h-2 bg-[#DC2626] rounded-full top-1/2 right-1/4" style={{ animation: 'float 4s ease-in-out infinite' }} />

        {/* New animated particles */}
        <div className="absolute w-2 h-2 bg-[#03144a] dark:bg-white rounded-full top-[15%] left-[20%]" style={{ animation: 'float 6s ease-in-out infinite' }} />
        <div className="absolute w-2 h-2 bg-[#DC2626] rounded-full bottom-[20%] right-[15%]" style={{ animation: 'float 5s ease-in-out infinite' }} />
        <div className="absolute w-2 h-2 bg-[#03144a] dark:bg-white rounded-full top-[60%] left-[45%]" style={{ animation: 'float 7s ease-in-out infinite' }} />

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#DC2626] rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#F8F9F4] dark:bg-black rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-6 py-3 rounded-full border border-[#03144A] dark:border-white/20 text-sm tracking-widest uppercase mb-8 text-[#03144A] dark:text-white bg-[#F8F9F4] dark:bg-black backdrop-blur-sm">
            <div className="w-2 h-2 bg-[#DC2626] rounded-full mr-3 animate-pulse" />
            Nos solutions thermiques
          </div>
          
          <SimpleWrapper>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extralight tracking-wide mb-8">
              <span className="bg-gradient-to-r from-[#DC2626] via-[#03144A] to-[#DC2626] dark:from-[#F87171] dark:via-white dark:to-[#F87171] bg-clip-text text-transparent">
                Chauffage
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#03144A] via-[#DC2626] to-[#03144A] dark:from-white dark:via-[#F87171] dark:to-white bg-clip-text text-transparent">
                ClimGO
              </span>
            </h1>
          </SimpleWrapper>
          
          <SimpleWrapper>
            <p className="text-xl md:text-2xl text-[#03144A] dark:text-white mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Découvrez nos solutions thermiques d'exception. Performance, économies et confort réunis dans des technologies de pointe.
            </p>
          </SimpleWrapper>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => solutionsRef.current?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-10 py-4 bg-[#F8F9F4] dark:bg-black text-[#03144A] dark:text-white rounded-full font-medium transition-all duration-300 hover:scale-105 overflow-hidden border border-[#03144A] dark:border-white/30"
            >
              <span className="relative z-10">Découvrir nos solutions</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#03144A] to-[#DC2626] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button className="group px-10 py-4 border border-[#03144A] dark:border-white rounded-full font-medium transition-all duration-300 hover:border-[#DC2626] hover:bg-[#03144A]/5 text-[#03144A] dark:text-white">
              Demander un devis
            </button>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section 
        ref={solutionsRef} 
        className="py-24 relative"
        onMouseEnter={() => {
          carouselHovering.current = true;
          clearAutoScroll();
        }}
        onMouseLeave={() => {
          carouselHovering.current = false;
          startAutoScroll();
        }}
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

          {/* Carousel Solutions */}
          <div className="relative">
            {/* Desktop version : une solution visible à la fois */}
            <div className="hidden md:block">
              <div className="transition-all duration-700">
                {solutions.map((solution, index) =>
                  index === currentIndex ? (
                    <div key={index} className="inline-block w-full px-4">
                      <div className="bg-white dark:bg-gray-900 rounded-3xl border border-[#03144A] dark:border-white/20 overflow-hidden backdrop-blur-sm shadow-xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                          {/* Content Side */}
                          <div className="p-12 lg:p-16">
                            <div className="mb-8">
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#03144A]/10 to-[#DC2626]/10 border border-[#DC2626] text-[#DC2626] text-sm font-medium mb-6">
                                {solution.badge}
                              </div>
                              <h3 className="text-3xl md:text-4xl font-light mb-4 text-[#03144A] dark:text-white">
                                {solution.title}
                              </h3>
                              <p className="text-xl text-[#DC2626] mb-6 font-light">
                                {solution.subtitle}
                              </p>
                            </div>
                            <p className="text-[#03144A] dark:text-white text-lg leading-relaxed mb-8">
                              {solution.description}
                            </p>
                            <div className="space-y-4 mb-8">
                              {solution.features.map((feature, i) => (
                                <div key={i} className="flex items-center space-x-3">
                                  <div className="w-2 h-2 bg-[#DC2626] rounded-full flex-shrink-0" />
                                  <span className="text-[#03144A] dark:text-white">{feature}</span>
                                </div>
                              ))}
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="text-2xl font-light text-[#03144A] dark:text-white">
                                {solution.price}
                              </div>
                              <Link
                                href="/contact"
                                className="group px-8 py-3 bg-gradient-to-r from-[#03144A] to-[#DC2626] rounded-full text-[#F8F9F4] font-medium transition-all duration-300 hover:scale-105"
                              >
                                Devis gratuit
                              </Link>
                            </div>
                          </div>

                          {/* Image Side */}
                          <div className="relative bg-gradient-to-br from-[#DC2626]/5 to-[#03144A]/5 dark:from-[#DC2626]/10 dark:to-[#03144A]/10 flex items-center justify-center p-12">
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
                      </div>
                    </div>
                  ) : null
                )}
              </div>

              {/* Boutons de sélection */}
              <div className="flex justify-center gap-4 mt-6">
                {solutions.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-4 h-4 rounded-full ${
                      i === currentIndex ? 'bg-[#DC2626]' : 'bg-[#03144A]/30'
                    } transition-all duration-300`}
                  />
                ))}
              </div>
            </div>

            {/* Mobile version : carrousel horizontal */}
            <div className="md:hidden overflow-x-auto flex snap-x snap-mandatory scrollbar-hide px-2">
              {solutions.map((solution, index) => (
                <div key={index} className="snap-center flex-shrink-0 w-full px-2">
                  <div className="bg-white dark:bg-gray-900 rounded-3xl border border-[#03144A] dark:border-white/20 overflow-hidden backdrop-blur-sm shadow-xl min-h-[600px] flex flex-col">
                    <div className="w-full h-48 relative">
                      <Image
                        src={solution.image}
                        alt={solution.title}
                        fill
                        className="object-contain rounded-t-3xl"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl text-[#03144A] dark:text-white mb-2">{solution.title}</h3>
                        <p className="text-[#DC2626] mb-4">{solution.subtitle}</p>
                        <p className="text-[#03144A] dark:text-white mb-4">{solution.description}</p>
                      </div>
                      <div>
                        <p className="text-[#03144A] dark:text-white text-lg mb-2">{solution.price}</p>
                        <Link href="/contact" className="text-[#DC2626] underline">Devis</Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#F8F9F4] dark:bg-black" />
        
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
                className="group text-center p-8 rounded-2xl bg-[#F8F9F4] dark:bg-black border border-[#03144A] dark:border-white/20 hover:border-[#DC2626]/50 transition-all duration-300 hover:bg-[#DC2626]/5"
              >
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-medium mb-4 text-[#03144A] dark:text-white group-hover:text-[#DC2626] transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-[#03144A] dark:text-white/80 group-hover:text-[#DC2626] transition-colors">
                  {advantage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="bg-gradient-to-br from-[#DC2626]/5 to-[#03144A]/5 dark:from-[#DC2626]/10 dark:to-[#03144A]/10 rounded-3xl p-16 border border-[#03144A] dark:border-white/20 backdrop-blur-sm shadow-xl">
            <h2 className="text-4xl md:text-5xl font-light mb-8">
              Prêt à optimiser votre
              <br />
              <span className="text-[#DC2626]">confort thermique</span> ?
            </h2>
            
            <p className="text-xl text-[#03144A] dark:text-white mb-12 leading-relaxed">
              Nos experts vous accompagnent dans le choix de la solution parfaite pour votre habitat
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="group relative px-10 py-4 bg-gradient-to-r from-[#03144A] to-[#DC2626] rounded-full text-[#F8F9F4] font-medium transition-all duration-300 hover:scale-105"
              >
                Demander un devis gratuit
              </Link>
            </div>
          </div>
        </div>
        <nav className="max-w-7xl mx-auto px-4 text-sm text-gray-600 dark:text-gray-300 mt-12 mb-24" aria-label="Fil d'Ariane">
          <ol className="list-reset flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:underline text-[#DC2626] dark:text-[#F87171]">Accueil</Link>
              <span className="mx-2 dark:text-gray-400">/</span>
            </li>
            <li>
              <Link href="/services" className="hover:underline text-[#DC2626] dark:text-[#F87171]">Nos services</Link>
              <span className="mx-2 dark:text-gray-400">/</span>
            </li>
            <li className="text-gray-500 dark:text-gray-400">Chauffage</li>
          </ol>
        </nav>
      </section>

      {/* Location Map Section */}
      <LocationMap backgroundColor="bg-[#F8F9F4] dark:bg-black" />

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
