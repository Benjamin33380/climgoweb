'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Wrench, DraftingCompass, ShieldCheck, BadgeEuro } from 'lucide-react';
import { SimpleWrapper } from '@/components/ui/SimpleWrapper';
import LazyGoogleMaps from '@/components/LazyGoogleMaps';

export default function MaintenancePage() {
  const solutionsRef = useRef<HTMLDivElement>(null);

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

  const solutions = [
    {
      id: 'maintenance-climatisation',
      title: "Maintenance climatisation",
      subtitle: "Entretien Professionnel",
      image: "/machine/maintenance.png",
      badge: "Contrat annuel",
      features: [
        "Vérification complète du système",
        "Nettoyage des filtres et échangeurs",
        "Contrôle des pressions et températures",
        "Rapport détaillé d'intervention"
      ],
      description: "Maintenez votre climatisation en parfait état avec nos contrats d'entretien personnalisés. Performance optimale et longévité garanties.",
      price: "À partir de 80€",
      gradient: "from-[#03144A] to-[#10B981]"
    },
    {
      id: 'maintenance-gainable',
      title: "Maintenance gainable",
      subtitle: "Sécurité & Performance",
      image: "/machine/gainable.webp",
      badge: "Intervention rapide",
      features: [
        "Contrôle des systèmes de sécurité",
        "Vérification des performances",
        "Nettoyage des composants",
        "Mise à jour des réglages"
      ],
      description: "Nos techniciens qualifiés assurent l'entretien de votre système de chauffage pour votre sécurité et votre confort optimal.",
      price: "À partir de 100€",
      gradient: "from-[#03144A] to-[#10B981]"
    },
    {
      id: 'maintenance-eau-chaude',
      title: "Maintenance Thermodynamique",
      subtitle: "Fiabilité & Durabilité",
      image: "/machine/thermo.webp",
      badge: "Préventif",
      features: [
        "Détartrage et nettoyage",
        "Contrôle des résistances",
        "Vérification de l'isolation",
        "Test des systèmes de sécurité"
      ],
      description: "Préservez votre production d'eau chaude sanitaire avec un entretien régulier adapté à votre installation.",
      price: "À partir de 120€",
      gradient: "from-[#03144A] to-[#10B981]"
    },
    {
      id: 'maintenance-pompe-chaleur',
      title: "Maintenance pompe à chaleur air/eau",
      subtitle: "Expertise Technique",
      image: "/machine/pacaireau.png",
      badge: "Obligatoire",
      features: [
        "Contrôle du fluide frigorigène",
        "Vérification des échangeurs",
        "Test des performances COP",
        "Maintenance préventive complète"
      ],
      description: "Entretien obligatoire pour les PAC, nos experts certifiés garantissent performance énergétique et conformité réglementaire.",
      price: "À partir de 150€",
      gradient: "from-[#03144A] to-[#10B981]"
    }
  ];

  const advantages = [
    {
      icon: <Wrench className="inline w-6 h-6 text-[#10B981]" />,
      title: "Expertise maintenance",
      desc: "10 ans d'expérience dans l'entretien"
    },
    {
      icon: <DraftingCompass className="inline w-6 h-6 text-[#10B981]" />,
      title: "Intervention sur mesure",
      desc: "Prestation certifiée"
    },
    {
      icon: <ShieldCheck className="inline w-6 h-6 text-[#10B981]" />,
      title: "Garantie",
      desc: "SAV réactif et pièces d'origine"
    },
    {
      icon: <BadgeEuro className="inline w-6 h-6 text-[#10B981]" />,
      title: "Tarifs transparents",
      desc: "Devis gratuit et sans surprise"
    }
  ];



  return (
    <div className="min-h-screen bg-gray-50 dark:bg-background text-[#03144A] dark:text-white">
      
      {/* Hero Section */}
      <section className="relative min-h-screen pt-24 md:pt-0 flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-background">
        <div className="absolute inset-0 bg-gray-50 dark:bg-background" />
        
        {/* Background effects */}
        <div className="absolute w-2 h-2 bg-[#03144a] dark:bg-white rounded-full top-10 left-10" style={{ animation: 'float 4s ease-in-out infinite' }} />
        <div className="absolute w-2 h-2 bg-[#03144a] dark:bg-white rounded-full top-1/3 left-1/2" style={{ animation: 'float 4s ease-in-out infinite' }} />
        <div className="absolute w-2 h-2 bg-[#03144a] dark:bg-white rounded-full bottom-1/3 right-20" style={{ animation: 'float 4s ease-in-out infinite' }} />
        <div className="absolute w-2 h-2 bg-[#10B981] rounded-full top-20 right-10" style={{ animation: 'float 4s ease-in-out infinite' }} />
        <div className="absolute w-2 h-2 bg-[#10B981] rounded-full bottom-10 left-1/3" style={{ animation: 'float 4s ease-in-out infinite' }} />
        <div className="absolute w-2 h-2 bg-[#10B981] rounded-full top-1/2 right-1/4" style={{ animation: 'float 4s ease-in-out infinite' }} />

        <div className="absolute inset-0 opacity-5 dark:opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#10B981] rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gray-50 dark:bg-background rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-6 py-3 rounded-full border border-[#03144A] dark:border-white/20 text-sm tracking-widest uppercase mb-8 text-[#03144A] dark:text-white bg-gray-50 dark:bg-background backdrop-blur-sm">
            <div className="w-2 h-2 bg-[#10B981] rounded-full mr-3 animate-pulse" />
            Nos solutions de maintenance
          </div>
          
          <SimpleWrapper>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extralight tracking-wide mb-8">
              <span className="bg-gradient-to-r from-[#10B981] via-[#03144A] to-[#10B981] dark:from-[#34D399] dark:via-white dark:to-[#34D399] bg-clip-text text-transparent">
                Maintenance
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#03144A] via-[#10B981] to-[#03144A] dark:from-white dark:via-[#34D399] dark:to-white bg-clip-text text-transparent">
                ClimGO
              </span>
            </h1>
          </SimpleWrapper>
          
          <SimpleWrapper>
            <p className="text-xl md:text-2xl text-[#03144A] dark:text-white mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Entretenez vos équipements pour durer. Performance, sécurité et longévité garanties par nos experts techniques.
            </p>
          </SimpleWrapper>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => solutionsRef.current?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-10 py-4 bg-gray-50 dark:bg-background text-[#03144A] dark:text-white rounded-full font-medium transition-all duration-300 hover:scale-105 overflow-hidden border border-[#03144A] dark:border-white/30"
            >
              <span className="relative z-10">Découvrir nos solutions</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#03144A] to-[#10B981] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <Link 
              href="/contact"
              className="group px-10 py-4 border border-[#03144A] dark:border-white rounded-full font-medium transition-all duration-300 hover:border-[#10B981] hover:bg-[#03144A]/5 text-[#03144A] dark:text-white"
            >
              Demander un devis
            </Link>
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
              Nos <span className="text-[#03144a] dark:text-white">Services</span>
            </h2>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#03144a] dark:via-white to-transparent mx-auto mb-8" />
            <p className="text-xl text-[#03144A] dark:text-white max-w-3xl mx-auto">
              Chaque solution est pensée pour maximiser la durée de vie de vos équipements tout en optimisant leurs performances énergétiques
            </p>
          </div>

          {/* Solutions en Colonne - Cartes Grandes */}
          <div className="space-y-12">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gray-50 dark:bg-background rounded-3xl border border-[#03144A] dark:border-white/20 overflow-hidden backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Content Side */}
                  <div className="p-12 lg:p-16">
                    <div className="mb-8">
                      <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#03144A]/10 to-[#10B981]/10 border border-[#10B981] text-[#10B981] text-sm font-medium mb-6">
                        {solution.badge}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-light mb-4 text-[#03144A] dark:text-white">
                        {solution.title}
                      </h3>
                      <p className="text-xl text-[#10B981] mb-6 font-light">
                        {solution.subtitle}
                      </p>
                    </div>
                    <p className="text-[#03144A] dark:text-white text-lg leading-relaxed mb-8">
                      {solution.description}
                    </p>
                    <div className="space-y-4 mb-8">
                      {solution.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[#10B981] rounded-full flex-shrink-0" />
                          <span className="text-[#03144A] dark:text-white">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
                      <div className="text-2xl font-light text-[#03144A] dark:text-white whitespace-nowrap">
                        {solution.price}
                      </div>
                      <Link
                        href="/contact"
                        className="group px-8 py-3 bg-gradient-to-r from-[#03144A] to-[#10B981] rounded-full text-white font-medium transition-all duration-300 hover:scale-105 text-center"
                      >
                        Devis gratuit
                      </Link>
                    </div>
                  </div>

                  {/* Image Side */}
                  <div className="relative bg-gray-50 dark:bg-background flex items-center justify-center p-12">
                    <div className="relative w-80 h-80">
                      {solution.image ? (
                        <Image
                          src={solution.image}
                          alt={solution.title}
                          fill
                          className="object-contain filter drop-shadow-2xl"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-50 dark:bg-background rounded-full flex items-center justify-center">
                          <span className="text-6xl">🔧</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
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
                <h3 className="text-xl font-medium mb-4 text-[#03144A] dark:text-white group-hover:text-[#10B981] transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-[#03144A] dark:text-white/80 group-hover:text-[#10B981] transition-colors">
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
              <span className="text-[#10B981]">confort thermique</span> ?
            </h2>
            
            <p className="text-base md:text-xl text-[#03144A] dark:text-white mb-8 md:mb-12 leading-relaxed">
              Nos experts vous accompagnent dans le choix de la solution parfaite pour votre habitat
            </p>
            
            <Link
              href="/contact"
              className="inline-block px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-[#03144A] to-[#10B981] rounded-full text-white font-medium transition-all duration-300 hover:scale-105 text-sm md:text-base"
            >
              Demander un devis gratuit
            </Link>
          </div>
        </div>
        <nav className="max-w-7xl mx-auto px-4 text-sm text-gray-600 dark:text-gray-300 mt-12 mb-24" aria-label="Fil d'Ariane">
            <ol className="list-reset flex items-center space-x-2">
              <li>
                <Link href="/" className="hover:underline text-[#10B981] dark:text-[#34D399]">Accueil</Link>
                <span className="mx-2 dark:text-gray-400">/</span>
              </li>
              <li>
                <Link href="/services" className="hover:underline text-[#10B981] dark:text-[#34D399]">Nos services</Link>
                <span className="mx-2 dark:text-gray-400">/</span>
              </li>
              <li className="text-[#03144A] dark:text-white/70">Maintenance</li>
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