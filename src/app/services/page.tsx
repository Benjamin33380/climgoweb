'use client';

import React, { useState } from 'react';
import { Droplets, Flame, Snowflake, Settings } from 'lucide-react';
import Link from 'next/link';
import { SimpleWrapper } from '@/components/ui/SimpleWrapper';
import LazyGoogleMaps from '@/components/LazyGoogleMaps';

// Définir le type pour les sections
type SectionType = 'clim' | 'chauffage' | 'eau-chaude' | 'maintenance' | null;

export default function ServicesPage() {
  const [activeSection, setActiveSection] = useState<SectionType>(null);
  const servicesRef = React.useRef<HTMLElement>(null);

  // Typer correctement le paramètre section
  const toggleSection = (section: SectionType) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-background text-[#03144A] dark:text-white">
      
      {/* Hero Section with Floating Particles */}
      <section className="relative min-h-screen pt-24 md:pt-0 flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-background">
        <div className="absolute inset-0 bg-gray-50 dark:bg-background" />
        
        {/* Floating Particles - Réduits en opacité pour mode light */}
        {/* Red particles */}
        <div className="absolute w-3 h-3 bg-[#FF8C00] rounded-full top-10 left-10 animate-bounce opacity-10 dark:opacity-100" />
        <div className="absolute w-2 h-2 bg-[#FF8C00] rounded-full top-1/3 left-1/2 animate-pulse opacity-10 dark:opacity-100" />
        <div className="absolute w-4 h-4 bg-[#FF8C00] rounded-full bottom-1/3 right-20 animate-bounce opacity-10 dark:opacity-100" />
        <div className="absolute w-2 h-2 bg-[#FF8C00] rounded-full top-[15%] left-[25%] animate-pulse opacity-10 dark:opacity-100" />

        {/* Blue particles */}
        <div className="absolute w-3 h-3 bg-[#2563EB] rounded-full top-20 right-10 animate-bounce opacity-10 dark:opacity-100" />
        <div className="absolute w-2 h-2 bg-[#2563EB] rounded-full bottom-10 left-1/3 animate-pulse opacity-10 dark:opacity-100" />
        <div className="absolute w-4 h-4 bg-[#2563EB] rounded-full top-1/2 right-1/4 animate-bounce opacity-10 dark:opacity-100" />
        <div className="absolute w-3 h-3 bg-[#2563EB] rounded-full bottom-[25%] left-[60%] animate-pulse opacity-10 dark:opacity-100" />

        {/* Orange particles */}
        <div className="absolute w-2 h-2 bg-[#FF8C00] rounded-full top-[35%] left-[15%] animate-pulse opacity-10 dark:opacity-100" />
        <div className="absolute w-3 h-3 bg-[#2563EB] rounded-full bottom-[40%] right-[30%] animate-bounce opacity-10 dark:opacity-100" />
        <div className="absolute w-2 h-2 bg-[#FF8C00] rounded-full top-[70%] left-[40%] animate-pulse opacity-10 dark:opacity-100" />
        <div className="absolute w-4 h-4 bg-[#2563EB] rounded-full top-[20%] right-[45%] animate-bounce opacity-10 dark:opacity-100" />

        {/* Blue particles */}
        <div className="absolute w-3 h-3 bg-[#2563EB] rounded-full top-[45%] left-[70%] animate-bounce opacity-10 dark:opacity-100" />
        <div className="absolute w-2 h-2 bg-[#FF8C00] rounded-full bottom-[15%] left-[20%] animate-pulse opacity-10 dark:opacity-100" />
        <div className="absolute w-4 h-4 bg-[#2563EB] rounded-full top-[60%] right-[15%] animate-bounce opacity-10 dark:opacity-100" />
        <div className="absolute w-2 h-2 bg-[#FF8C00] rounded-full bottom-[50%] left-[80%] animate-pulse opacity-10 dark:opacity-100" />

        {/* Background gradient effects - Réduits en opacité pour mode light */}
        <div className="absolute inset-0 opacity-5 dark:opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF8C00] rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#2563EB] rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
          <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-[#FF8C00] rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '4s'}} />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-6 py-3 rounded-full border border-[#03144A] dark:border-white/20 text-sm tracking-widest uppercase mb-8 text-[#03144A] dark:text-white bg-gray-50 dark:bg-background backdrop-blur-sm">
            <div className="w-2 h-2 bg-[#FF8C00] rounded-full mr-3 animate-pulse" />
            Notre savoir-faire
          </div>
          
          <SimpleWrapper>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extralight tracking-wide mb-8">
              <span className="bg-gradient-to-r from-[#FF8C00] to-[#2563EB] bg-clip-text text-transparent">
                Services
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#2563EB] to-[#FF8C00] bg-clip-text text-transparent">
                ClimGO
              </span>
            </h1>
          </SimpleWrapper>
          
          <SimpleWrapper>
            <p className="text-xl md:text-2xl text-[#03144A] dark:text-white mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              Nos services ClimGO couvrent tous vos besoins en chauffage, climatisation, chauffe-eau et entretien.
            </p>
          </SimpleWrapper>
          
          <SimpleWrapper>
            <p className="text-lg text-[#03144A] dark:text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              ClimGO met tout son savoir-faire à votre service pour concrétiser vos projets d&apos;équipement thermique. 
              Chauffage, climatisation, chauffe-eau ou maintenance : nous vous proposons des solutions fiables, 
              performantes et adaptées à vos besoins, avec un accompagnement sur-mesure.
            </p>
          </SimpleWrapper>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={scrollToServices}
              className="group relative px-10 py-4 bg-gradient-to-r from-[#FF8C00] to-[#2563EB] text-white rounded-full font-medium transition-all duration-300 hover:scale-105 overflow-hidden shadow-xl"
            >
              <span className="relative z-10">Découvrir nos services</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </button>
            
            <Link 
              href="tel:0766460008"
              className="group px-10 py-4 border-2 border-[#03144A] dark:border-white rounded-full font-medium transition-all duration-300 hover:border-[#FF8C00] hover:bg-gradient-to-r hover:from-[#FF8C00]/10 hover:to-[#2563EB]/10 text-[#03144A] dark:text-white backdrop-blur-sm"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <nav className="text-sm text-[#03144A] dark:text-white">
          <ol className="list-reset flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:underline text-[#03144a] dark:text-white">Accueil</Link>
              <span className="mx-2">/</span>
            </li>
            <li className="text-[#03144A] dark:text-white/70">Nos services</li>
          </ol>
        </nav>
      </div>

      {/* Expertise Section */}
      <section className="relative bg-gray-50 dark:bg-background text-[#0a0f2c] py-32 overflow-hidden">
        {/* Particules décoratives pour cette section */}
        <div className="absolute w-1 h-1 bg-[#FF8C00] rounded-full top-20 left-20 opacity-60 animate-pulse" />
        <div className="absolute w-2 h-2 bg-[#2563EB] rounded-full bottom-20 right-20 opacity-60 animate-bounce" />
        <div className="absolute w-1 h-1 bg-[#FF8C00] rounded-full top-1/2 left-10 opacity-60 animate-pulse" />
        
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-64 h-64 bg-[#FF8C00] rounded-full filter blur-3xl" />
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-[#2563EB] rounded-full filter blur-3xl" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
          <div className="inline-flex items-center px-6 py-3 rounded-full border border-[#03144A] dark:border-white/30 text-sm tracking-widest uppercase mb-8 text-[#03144A] dark:text-white bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
            <div className="w-2 h-2 bg-[#FF8C00] rounded-full mr-3 animate-pulse" />
            Expertise & Excellence
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extralight mb-6 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-[#FF8C00] to-[#2563EB] bg-clip-text text-transparent">
              Nos domaines
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#2563EB] to-[#FF8C00] bg-clip-text text-transparent">
              d&apos;expertise
            </span>
          </h2>
          
          <p className="text-xl text-[#03144A] dark:text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
            Quatre domaines de compétence, une seule promesse : votre confort optimal.
          </p>
          
          <div className="h-1 w-40 mx-auto mt-8 bg-gradient-to-r from-[#FF8C00] to-[#2563EB] rounded-full"></div>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={servicesRef}
        id="services"
        className="pt-20 pb-32 relative bg-gray-50 dark:bg-background text-[#0a0f2c] overflow-hidden scroll-mt-28"
      >
        {/* Effet de particules pour cette section */}
        <div className="absolute w-2 h-2 bg-[#FF8C00] rounded-full top-32 left-16 opacity-40 animate-bounce" />
        <div className="absolute w-1 h-1 bg-[#2563EB] rounded-full bottom-32 right-16 opacity-40 animate-pulse" />
        <div className="absolute w-3 h-3 bg-[#FF8C00] rounded-full top-1/2 right-1/3 opacity-30 animate-bounce" />
        
        <div className="container relative z-10 mx-auto px-6">
          <div className="space-y-8 max-w-5xl mx-auto">
            
            {/* Bloc Climatisation */}
            <div
              onClick={() => toggleSection('clim')}
              className="group block cursor-pointer border-2 border-[#1E40AF]/20 border-t-4 border-t-[#1E40AF] rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out p-10 text-center bg-gradient-to-br from-[#2563EB]/5 to-[#03144A]/5 dark:from-[#2563EB]/10 dark:to-[#03144A]/10 hover:bg-gradient-to-br hover:from-[#1E40AF] hover:to-[#1d4ed8] backdrop-blur-sm"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-[#1E40AF]/10 group-hover:bg-white/20 transition-colors duration-300">
                  <Snowflake className="w-12 h-12 text-[#1E40AF] group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <div className="inline-block bg-[#dbeafe] text-[#1E40AF] group-hover:bg-white/20 group-hover:text-white text-xs font-semibold px-4 py-2 rounded-full mb-4 transition-all duration-300">
                Air pur & confort
              </div>
              <h3 className="text-2xl font-semibold text-[#1E40AF] group-hover:text-white mb-3 transition-colors duration-300">Climatisation</h3>
              <p className="text-gray-600 dark:text-gray-200 group-hover:text-white/90 transition-colors duration-300 text-lg leading-relaxed">
                Installation, entretien et dépannage de systèmes de climatisation haute performance.
              </p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white/80 text-sm">Cliquez pour plus de détails →</span>
              </div>
            </div>
            {activeSection === 'clim' && (
              <div className="mt-8 bg-gradient-to-br from-white to-[#f8fafc] dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-2xl px-10 py-16 transition-all duration-700 ease-out text-center border border-[#1E40AF]/20 dark:border-[#1E40AF]/40">
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="p-3 rounded-full bg-[#1E40AF]/10">
                      <Snowflake className="w-8 h-8 text-[#1E40AF]" />
                    </div>
                    <h2 className="text-3xl font-light text-[#1E40AF]">Climatisation</h2>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
                    Un air pur en toute saison. Un confort sur-mesure au quotidien.
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="text-left">
                      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        ClimGO installe des climatiseurs muraux, gainables, consoles ou cassettes, selon la configuration de votre logement.
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Performants, discrets et silencieux, nos systèmes vous offrent une température idéale toute l&apos;année, dans un confort absolu.
                      </p>
                    </div>
                    <div>
                      <ul className="text-gray-700 dark:text-gray-300 list-none space-y-3">
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-[#1E40AF] rounded-full"></div>
                          Confort thermique toute l&apos;année
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-[#1E40AF] rounded-full"></div>
                          Systèmes discrets et silencieux
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-[#1E40AF] rounded-full"></div>
                          Entretien simple et performant
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-[#1E40AF]/5 rounded-xl p-6 mb-8">
                    <p className="text-[#1E40AF] font-medium text-lg">
                      Profitez d&apos;un air pur et d&apos;une température idéale, été comme hiver.
                    </p>
                  </div>
                  
                  <div className="flex justify-center">
                    <Link
                      href="/climatisation"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#1E40AF] to-[#1d4ed8] text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      En savoir plus
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
            
            {/* Bloc Chauffage */}
            <div
              onClick={() => toggleSection('chauffage')}
              className="group block cursor-pointer border-2 border-[#FF8C00]/20 border-t-4 border-t-[#FF8C00] rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out p-10 text-center bg-gradient-to-br from-[#FF8C00]/5 to-[#03144A]/5 dark:from-[#FF8C00]/10 dark:to-[#03144A]/10 hover:bg-gradient-to-br hover:from-[#FF8C00] hover:to-[#FFA500] backdrop-blur-sm"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-[#FF8C00]/10 group-hover:bg-white/20 transition-colors duration-300">
                  <Flame className="w-12 h-12 text-[#FF8C00] group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <div className="inline-block bg-[#fff7ed] text-[#FF8C00] group-hover:bg-white/20 group-hover:text-white text-xs font-semibold px-4 py-2 rounded-full mb-4 transition-all duration-300">
                Chaleur & économies
              </div>
              <h3 className="text-2xl font-semibold text-[#FF8C00] group-hover:text-white mb-3 transition-colors duration-300">Chauffage</h3>
              <p className="text-gray-600 dark:text-gray-200 group-hover:text-white/90 transition-colors duration-300 text-lg leading-relaxed">
                Solutions de chauffage économiques et performantes pour votre confort.
              </p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white/80 text-sm">Cliquez pour plus de détails →</span>
              </div>
            </div>
            {activeSection === 'chauffage' && (
              <div className="mt-8 bg-gradient-to-br from-white to-[#fff7ed] dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-2xl px-10 py-16 transition-all duration-700 ease-out text-center border border-[#FF8C00]/20 dark:border-[#FF8C00]/40">
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="p-3 rounded-full bg-[#FF8C00]/10">
                      <Flame className="w-8 h-8 text-[#FF8C00]" />
                    </div>
                    <h2 className="text-3xl font-light text-[#FF8C00]">Chauffage</h2>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
                    Chaleur douce, économies fortes.
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="text-left">
                      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        Nos solutions de chauffage s&apos;adaptent à tous les intérieurs : pompes à chaleur air/eau ou air/air, plancher chauffant ou radiateurs nouvelle génération.
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Fiables, performants et éligibles aux aides, nos équipements garantissent confort durable et consommation maîtrisée.
                      </p>
                    </div>
                    <div>
                      <ul className="text-gray-700 dark:text-gray-300 list-none space-y-3">
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-[#FF8C00] rounded-full"></div>
                          Jusqu&apos;à 70% d&apos;économies sur votre facture
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-[#FF8C00] rounded-full"></div>
                          Systèmes éligibles aux aides de l&apos;État
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-[#FF8C00] rounded-full"></div>
                          Installation rapide et personnalisée
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-[#FF8C00]/5 rounded-xl p-6 mb-8">
                    <p className="text-[#FF8C00] font-medium text-lg">
                      Profitez d&apos;une chaleur homogène et économe en énergie, tout au long de l&apos;année.
                    </p>
                  </div>
                  
                  <div className="flex justify-center">
                    <Link
                      href="/chauffage"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FF8C00] to-[#FFA500] text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      En savoir plus
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
            
            {/* Bloc Eau Chaude Sanitaire */}
            <div
              onClick={() => toggleSection('eau-chaude')}
              className="group block cursor-pointer border-2 border-[#FF6B6B]/20 border-t-4 border-t-[#FF6B6B] rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out p-10 text-center bg-gradient-to-br from-[#FF6B6B]/5 to-[#03144A]/5 dark:from-[#FF6B6B]/10 dark:to-[#03144A]/10 hover:bg-gradient-to-br hover:from-[#FF6B6B] hover:to-[#FF6B6B] backdrop-blur-sm"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-[#FF6B6B]/10 group-hover:bg-white/20 transition-colors duration-300">
                  <Droplets className="w-12 h-12 text-[#FF6B6B] group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <div className="inline-block bg-[#fecaca] text-[#FF6B6B] group-hover:bg-white/20 group-hover:text-white text-xs font-semibold px-4 py-2 rounded-full mb-4 transition-all duration-300">
                Eau chaude & sérénité
              </div>
              <h3 className="text-2xl font-semibold text-[#FF6B6B] group-hover:text-white mb-3 transition-colors duration-300">Eau chaude sanitaire</h3>
              <p className="text-gray-600 dark:text-gray-200 group-hover:text-white/90 transition-colors duration-300 text-lg leading-relaxed">
                Production d&apos;eau chaude fiable et économique pour votre quotidien.
              </p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white/80 text-sm">Cliquez pour plus de détails →</span>
              </div>
            </div>
            {activeSection === 'eau-chaude' && (
              <div className="mt-8 bg-gradient-to-br from-white to-[#fef2f2] dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-2xl px-10 py-16 transition-all duration-700 ease-out text-center border border-[#FF6B6B]/20 dark:border-[#FF6B6B]/40">
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="p-3 rounded-full bg-[#FF6B6B]/10">
                      <Droplets className="w-8 h-8 text-[#FF6B6B]" />
                    </div>
                    <h2 className="text-3xl font-light text-[#FF6B6B]">Eau chaude sanitaire</h2>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
                    De l&apos;eau chaude quand vous en avez besoin, sans gaspiller un centime.
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="text-left">
                      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        ClimGO vous propose des chauffe-eaux thermodynamiques ou classiques, parfaitement adaptés à votre rythme de vie et à votre logement.
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Des équipements sobres, fiables, silencieux, et conçus pour durer, tout en allégeant vos factures.
                      </p>
                    </div>
                    <div>
                      <ul className="text-gray-700 dark:text-gray-300 list-none space-y-3">
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-[#FF6B6B] rounded-full"></div>
                          Jusqu&apos;à 60% d&apos;économie sur votre production d&apos;eau chaude
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-[#FF6B6B] rounded-full"></div>
                          Installation adaptée à vos besoins et à votre logement
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-[#FF6B6B] rounded-full"></div>
                          Équipements éligibles aux aides financières
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-[#FF6B6B]/5 rounded-xl p-6 mb-8">
                    <p className="text-[#FF6B6B] font-medium text-lg">
                      Profitez d&apos;une eau chaude fiable, économique et disponible à tout moment.
                    </p>
                  </div>
                  
                  <div className="flex justify-center">
                    <Link
                      href="/eau-chaude-sanitaire"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FF6B6B] to-[#FF6B6B] text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      En savoir plus
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
            
            {/* Bloc Maintenance */}
            <div
              onClick={() => toggleSection('maintenance')}
              className="group block cursor-pointer border-2 border-[#10B981]/20 border-t-4 border-t-[#10B981] rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out p-10 text-center bg-gradient-to-br from-[#10B981]/5 to-[#03144A]/5 dark:from-[#10B981]/10 dark:to-[#03144A]/10 hover:bg-gradient-to-br hover:from-[#10B981] hover:to-[#059669] backdrop-blur-sm"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-[#10B981]/10 group-hover:bg-white/20 transition-colors duration-300">
                  <Settings className="w-12 h-12 text-[#10B981] group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <div className="inline-block bg-[#d1fae5] text-[#10B981] group-hover:bg-white/20 group-hover:text-white text-xs font-semibold px-4 py-2 rounded-full mb-4 transition-all duration-300">
                Suivi & tranquillité
              </div>
              <h3 className="text-2xl font-semibold text-[#10B981] group-hover:text-white mb-3 transition-colors duration-300">Maintenance</h3>
              <p className="text-gray-600 dark:text-gray-200 group-hover:text-white/90 transition-colors duration-300 text-lg leading-relaxed">
                Entretien et suivi régulier de vos équipements.
              </p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white/80 text-sm">Cliquez pour plus de détails →</span>
              </div>
            </div>
            {activeSection === 'maintenance' && (
              <div className="mt-8 bg-gradient-to-br from-white to-[#f0fdf4] dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-2xl px-10 py-16 transition-all duration-700 ease-out text-center border border-[#10B981]/20 dark:border-[#10B981]/40">
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="p-3 rounded-full bg-[#10B981]/10">
                      <Settings className="w-8 h-8 text-[#10B981]" />
                    </div>
                    <h2 className="text-3xl font-light text-[#10B981]">Maintenance</h2>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
                    Parce qu&apos;un bon équipement mérite un bon suivi.
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="text-left">
                      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        Nos équipes assurent un entretien rigoureux et préventif de vos installations : clim, PAC, chauffe-eau.
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Objectif : performance maximale, durée de vie prolongée, zéro imprévu.
                      </p>
                    </div>
                    <div>
                      <ul className="text-gray-700 dark:text-gray-300 list-none space-y-3">
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
                          Nettoyage complet et vérification des réglages
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
                          Diagnostic préventif pour éviter les pannes
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
                          Intervention rapide et suivie
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-[#10B981]/5 rounded-xl p-6 mb-8">
                    <p className="text-[#10B981] font-medium text-lg">
                      Prolongez la durée de vie de vos équipements en toute sérénité.
                    </p>
                  </div>
                  
                  <div className="flex justify-center">
                    <Link
                      href="/maintenance"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#10B981] to-[#059669] text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      En savoir plus
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gray-50 dark:bg-background text-[#03144A] dark:text-white py-32 overflow-hidden">
        {/* Particules pour CTA */}
        <div className="absolute w-3 h-3 bg-[#FF8C00] rounded-full top-20 left-20 opacity-60 animate-bounce" />
        <div className="absolute w-2 h-2 bg-[#2563EB] rounded-full bottom-20 right-20 opacity-60 animate-pulse" />
        <div className="absolute w-4 h-4 bg-[#FF8C00] rounded-full top-1/2 left-10 opacity-40 animate-bounce" />
        <div className="absolute w-1 h-1 bg-[#2563EB] rounded-full bottom-1/3 right-1/3 opacity-60 animate-pulse" />
        
        {/* Effets de fond légers */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF8C00] rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#2563EB] rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
          <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-[#FF8C00] rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '4s'}} />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
          <div className="inline-flex items-center px-6 py-3 rounded-full border border-[#03144A] dark:border-white/30 text-sm tracking-widest uppercase mb-8 text-[#03144A] dark:text-white bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg">
            <div className="w-2 h-2 bg-[#FF8C00] rounded-full mr-3 animate-pulse" />
            Votre projet nous intéresse
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extralight mb-8 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-[#FF8C00] to-[#2563EB] bg-clip-text text-transparent">
              Vous avez un projet ?
            </span>
            <br />
            <span className="text-[#03144A] dark:text-white">
              On le rend possible.
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-[#03144A] dark:text-white/80 font-light leading-relaxed">
            Demandez votre devis personnalisé, rapide et sans engagement.
          </p>
          <p className="text-lg mb-12 text-[#03144A] dark:text-white/60 font-light">
            Un expert vous rappelle sous 48h.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="tel:0766460008"
              className="group px-12 py-5 bg-gradient-to-r from-[#FF8C00] to-[#2563EB] text-white font-semibold rounded-full text-lg shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[#FF8C00]/25 relative overflow-hidden"
            >
              <span className="relative z-10">Je veux être rappelé</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#FF8C00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            
            <Link
              href="/contact"
              className="group px-12 py-5 border-2 border-[#03144A] dark:border-white/50 rounded-full font-semibold text-lg transition-all duration-300 hover:border-[#03144a] dark:hover:border-white hover:bg-[#FF8C00]/10 dark:hover:bg-white/10 text-[#03144A] dark:text-white backdrop-blur-sm"
            >
              Formulaire de contact
            </Link>
          </div>
          
          <div className="h-1 w-40 mx-auto mt-12 bg-gradient-to-r from-[#FF8C00] to-[#2563EB] rounded-full"></div>
        </div>
      </section>

      {/* Location Map Section */}
      <LazyGoogleMaps backgroundColor="bg-gray-50 dark:bg-background" />

    </div>
  );
}
