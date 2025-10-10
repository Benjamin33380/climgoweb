'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Wrench, DraftingCompass, ShieldCheck, BadgeEuro } from 'lucide-react';
import { SimpleWrapper } from '@/components/ui/SimpleWrapper';
import LazyGoogleMaps from '@/components/LazyGoogleMaps';

export default function ChauffagePage() {
  const solutionsRef = useRef<HTMLDivElement>(null);

  const solutions = [
    {
      id: 'pac-air-eau',
      title: "Pompe à chaleur air/eau",
      subtitle: "Performance & Économies",
      image: "/img/uipacspacex.png",
      badge: "Jusqu'à -70% sur votre facture",
      features: [
        "Coefficient de performance exceptionnel",
        "Compatible MaPrimeRénov' & CEE",
        "Intégration plancher chauffant",
        "Fonctionnement jusqu'à -15°C"
      ],
      description: "Technologie de pointe qui transforme l'énergie gratuite de l'air en chaleur pour votre habitation. Solution idéale pour remplacer votre ancienne chaudière.",
      gradient: "from-[black] to-[#FF8C00]"
    },
    {
      id: 'pac-air-air',
      title: "Pompe à chaleur air/air",
      subtitle: "Réversible 4 Saisons",
      image: "/img/testaachauf.png",
      badge: "Chauffage + Climatisation",
      features: [
        "Système réversible intégral",
        "Installation rapide et propre",
        "Contrôle zone par zone",
        "Design ultra-moderne"
      ],
      description: "Un seul équipement pour votre confort toute l'année. Chauffage l'hiver, climatisation l'été, avec une efficacité énergétique remarquable.",
      gradient: "from-[black] to-[#FF8C00]"
    },
    {
      id: 'plancher-chauffant',
      title: "Plancher chauffant",
      subtitle: "Confort Invisible",
      image: "/img/plancherchauf.png",
      badge: "Luxe & Discrétion",
      features: [
        "Chaleur homogène optimale",
        "Libération totale des murs",
        "Silence absolu garanti",
        "Température pièce par pièce"
      ],
      description: "Le summum du confort thermique. Invisible mais omniprésent, il transforme votre sol en source de bien-être permanent.",
      gradient: "from-[black] to-[#FF8C00]"
    },
    {
      id: 'radiateurs',
      title: "Radiateurs nouvelle génération",
      subtitle: "Design & Performance",
      image: "/img/radspacex.png",
      badge: "Montée en température rapide",
      features: [
        "Inertie intelligente avancée",
        "Formats décoratifs variés",
        "Compatibilité PAC optimale",
        "Installation sans gros œuvre"
      ],
      description: "L'évolution des radiateurs traditionnels. Design contemporain, performance énergétique et facilité d'installation réunis.",
      gradient: "from-[black] to-[#FF8C00]"
    }
  ];

  const advantages = [
    {
      icon: <Wrench className="inline w-6 h-6 text-[#FF8C00]" />,
      title: "Expertise technique",
      desc: "10 ans d'expérience dans le thermique"
    },
    {
      icon: <DraftingCompass className="inline w-6 h-6 text-[#FF8C00]" />,
      title: "Installation sur mesure",
      desc: "Prestation certifiée"
    },
    {
      icon: <ShieldCheck className="inline w-6 h-6 text-[#FF8C00]" />,
      title: "Garantie",
      desc: "SAV réactif et pièces d'origine"
    },
    {
      icon: <BadgeEuro className="inline w-6 h-6 text-[#FF8C00]" />,
      title: "Financement",
      desc: "Solutions adaptées à votre budget"
    }
  ];



  return (
    <div className="min-h-screen bg-gray-50 dark:bg-background text-[black] dark:text-white">
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 dark:bg-background pt-24 pb-4 px-6">
        <nav className="max-w-7xl mx-auto text-sm text-[black] dark:text-white">
          <ol className="list-reset flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:underline text-[black] dark:text-white opacity-70 hover:opacity-100 transition-opacity">Accueil</Link>
              <span className="mx-2 opacity-50">/</span>
            </li>
            <li>
              <Link href="/services" className="hover:underline text-[black] dark:text-white opacity-70 hover:opacity-100 transition-opacity">Services</Link>
              <span className="mx-2 opacity-50">/</span>
            </li>
            <li className="text-[black] dark:text-white font-medium">Chauffage</li>
          </ol>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen pt-8 md:pt-0 flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-background">
        <div className="absolute inset-0 bg-gray-50 dark:bg-background" />
        
        {/* Background effects */}
        {/* Blue particles */}
        <div className="absolute w-2 h-2 bg-[black] dark:bg-white rounded-full top-10 left-10" style={{ animation: 'float 4s ease-in-out infinite' }} />
        <div className="absolute w-2 h-2 bg-[black] dark:bg-white rounded-full top-1/3 left-1/2" style={{ animation: 'float 4s ease-in-out infinite' }} />
        <div className="absolute w-2 h-2 bg-[black] dark:bg-white rounded-full bottom-1/3 right-20" style={{ animation: 'float 4s ease-in-out infinite' }} />

        {/* Accent particles */}
        <div className="absolute w-2 h-2 bg-[#FF8C00] rounded-full top-20 right-10" style={{ animation: 'float 4s ease-in-out infinite' }} />
        <div className="absolute w-2 h-2 bg-[#FF8C00] rounded-full bottom-10 left-1/3" style={{ animation: 'float 4s ease-in-out infinite' }} />
        <div className="absolute w-2 h-2 bg-[#FF8C00] rounded-full top-1/2 right-1/4" style={{ animation: 'float 4s ease-in-out infinite' }} />

        {/* New animated particles */}
        <div className="absolute w-2 h-2 bg-[black] dark:bg-white rounded-full top-[15%] left-[20%]" style={{ animation: 'float 6s ease-in-out infinite' }} />
        <div className="absolute w-2 h-2 bg-[#FF8C00] rounded-full bottom-[20%] right-[15%]" style={{ animation: 'float 5s ease-in-out infinite' }} />
        <div className="absolute w-2 h-2 bg-[black] dark:bg-white rounded-full top-[60%] left-[45%]" style={{ animation: 'float 7s ease-in-out infinite' }} />

        <div className="absolute inset-0 opacity-5 dark:opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF8C00] rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gray-50 dark:bg-background rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-6 py-3 rounded-full border border-[black] dark:border-white/20 text-sm tracking-widest uppercase mb-8 text-[black] dark:text-white bg-gray-50 dark:bg-background backdrop-blur-sm">
            <div className="w-2 h-2 bg-[#FF8C00] rounded-full mr-3 animate-pulse" />
            Nos solutions thermiques
          </div>
          
          <SimpleWrapper>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extralight tracking-wide mb-8">
              <span className="bg-gradient-to-r from-[#FF8C00] via-[black] to-[#FF8C00] dark:from-[#FFA500] dark:via-white dark:to-[#FFA500] bg-clip-text text-transparent">
                Chauffage
              </span>
              <br />
              <span className="bg-gradient-to-r from-[black] via-[#FF8C00] to-[black] dark:from-white dark:via-[#FFA500] dark:to-white bg-clip-text text-transparent">
                ClimGO
              </span>
            </h1>
          </SimpleWrapper>
          
          <SimpleWrapper>
            <p className="text-xl md:text-2xl text-[black] dark:text-white mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Découvrez nos solutions thermiques d'exception. Performance, économies et confort réunis dans des technologies de pointe.
            </p>
          </SimpleWrapper>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => solutionsRef.current?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-10 py-4 bg-gray-50 dark:bg-background text-[black] dark:text-white rounded-full font-medium transition-all duration-300 hover:scale-105 overflow-hidden border border-[black] dark:border-white/30"
            >
              <span className="relative z-10">Découvrir nos solutions</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[black] to-[#FF8C00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button className="group px-10 py-4 border border-[black] dark:border-white rounded-full font-medium transition-all duration-300 hover:border-[#FF8C00] hover:bg-[black]/5 text-[black] dark:text-white">
              Demander un devis
            </button>
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
              Nos <span className="text-[black] dark:text-white">Technologies</span>
            </h2>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[black] dark:via-white to-transparent mx-auto mb-8" />
            <p className="text-xl text-[black] dark:text-white max-w-3xl mx-auto">
              Chaque solution est pensée pour maximiser votre confort tout en optimisant vos économies d'énergie
            </p>
          </div>

                    {/* Solutions en Colonne - Cartes Grandes */}
          <div className="space-y-12">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gray-50 dark:bg-background rounded-3xl border border-gray-50 dark:border-background overflow-hidden backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {index === 0 || index === 1 || index === 2 || index === 3 ? (
                  // Toutes les cards avec image en fond complet
                  <div 
                    className="relative bg-center bg-no-repeat min-h-[600px] flex items-center"
                    style={{ 
                      backgroundImage: `url(${solution.image})`,
                      backgroundPosition: 'center center',
                      backgroundSize: 'cover'
                    }}
                  >
                    {/* Overlay adaptatif selon le thème */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/50 to-transparent dark:from-black/70 dark:via-black/40 dark:to-transparent" />
                    <div className="relative z-10 p-12 lg:p-16 max-w-xl">
                      <div className="mb-8">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[black]/20 to-[#FF6B35]/20 border border-[#FF6B35] text-[#FF6B35] text-sm font-medium mb-6 backdrop-blur-sm shadow-lg">
                          {solution.badge}
                        </div>
                        <h3 className="text-3xl md:text-4xl font-light mb-4 text-[black] dark:text-white">
                          {solution.title}
                        </h3>
                        <p className="text-xl text-[#FF6B35] dark:text-[#FFA500] mb-6 font-light drop-shadow-sm">
                          {solution.subtitle}
                        </p>
                      </div>
                      <p className="text-[black] dark:text-white text-lg leading-relaxed mb-8 drop-shadow-sm">
                        {solution.description}
                      </p>
                      <div className="space-y-4 mb-8">
                        {solution.features.map((feature, i) => (
                          <div key={i} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-[#FF6B35] dark:bg-[#FFA500] rounded-full flex-shrink-0" />
                            <span className="text-[black] dark:text-white drop-shadow-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-4 sm:gap-0">
                        <Link
                          href="/contact"
                          className="group px-8 py-3 bg-gradient-to-r from-[black] to-[#FF8C00] rounded-full text-white font-medium transition-all duration-300 hover:scale-105 text-center"
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
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[black]/20 to-[#FF6B35]/20 border border-[#FF6B35] text-[#FF6B35] text-sm font-medium mb-6 backdrop-blur-sm shadow-lg">
                          {solution.badge}
                        </div>
                        <h3 className="text-3xl md:text-4xl font-light mb-4 text-[black] dark:text-white">
                          {solution.title}
                        </h3>
                        <p className="text-xl text-[#FF8C00] mb-6 font-light">
                          {solution.subtitle}
                        </p>
                      </div>
                      <p className="text-[black] dark:text-white text-lg leading-relaxed mb-8">
                        {solution.description}
                      </p>
                      <div className="space-y-4 mb-8">
                        {solution.features.map((feature, i) => (
                          <div key={i} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-[#FF8C00] rounded-full flex-shrink-0" />
                            <span className="text-[black] dark:text-white">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 sm:gap-0">
                        <Link
                          href="/contact"
                          className="group px-8 py-3 bg-gradient-to-r from-[black] to-[#FF8C00] rounded-full text-white font-medium transition-all duration-300 hover:scale-105 text-center"
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
              Pourquoi nous <span className="text-[black] dark:text-white">choisir</span> ?
            </h2>
            <p className="text-xl text-[black] dark:text-white max-w-2xl mx-auto">
              L'alliance du savoir-faire technique et de l'excellence service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="group text-center p-8 rounded-2xl bg-gray-50 dark:bg-background border border-[black] dark:border-white/20 hover:border-white/50 dark:hover:border-black/50 transition-all duration-300"
              >
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-medium mb-4 text-[black] dark:text-white group-hover:text-[#FF8C00] transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-[black] dark:text-white/80 group-hover:text-[#FF8C00] transition-colors">
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
          <div className="bg-gray-50 dark:bg-background rounded-2xl md:rounded-3xl p-8 md:p-16 border border-[black] dark:border-white/20 backdrop-blur-sm shadow-xl">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-light mb-6 md:mb-8 leading-tight">
              Prêt à optimiser votre
              <br className="hidden sm:block" />
              <span className="text-[#FF8C00]">confort thermique</span> ?
            </h2>
            
            <p className="text-base md:text-xl text-[black] dark:text-white mb-8 md:mb-12 leading-relaxed">
              Nos experts vous accompagnent dans le choix de la solution parfaite pour votre habitat
            </p>
            
            <Link
              href="/contact"
              className="inline-block px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-[black] to-[#FF8C00] rounded-full text-white font-medium transition-all duration-300 hover:scale-105 text-sm md:text-base"
            >
              Demander un devis gratuit
            </Link>
          </div>
        </div>
        <nav className="max-w-7xl mx-auto px-4 text-sm text-gray-600 dark:text-gray-300 mt-12 mb-24" aria-label="Fil d'Ariane">
          <ol className="list-reset flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:underline text-[#FF8C00] dark:text-[#FFA500]">Accueil</Link>
              <span className="mx-2 dark:text-gray-400">/</span>
            </li>
            <li>
              <Link href="/services" className="hover:underline text-[#FF8C00] dark:text-[#FFA500]">Nos services</Link>
              <span className="mx-2 dark:text-gray-400">/</span>
            </li>
            <li className="text-gray-500 dark:text-gray-400">Chauffage</li>
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
