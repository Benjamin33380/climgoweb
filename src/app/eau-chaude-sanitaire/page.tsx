'use client';

import Link from 'next/link';
import LazyGoogleMaps from '@/components/LazyGoogleMaps';

export default function EauChaudeSanitairePage() {

  const solutions = [
    {
      id: 'chauffe-eau-thermodynamique',
      title: "Thermodynamique",
      subtitle: "Économique & Écoresponsable",
      image: "/img/thermoecs.png",
      badge: "Jusqu'à -70% sur votre facture",
      features: [
        "Jusqu'à 70% d'économie d'énergie",
        "Éligible aux aides (CEE, MaPrimeRénov')",
        "Eau chaude disponible en continu",
        "Technologie écologique avancée"
      ],
      description: "Ce système capte les calories de l'air ambiant pour chauffer l'eau de votre ballon. Une eau chaude sanitaire économique et écoresponsable.",
      gradient: "from-[black] to-[#FF6B6B]"
    },
    {
      id: 'chauffe-eau-extra-plat',
      title: "Chauffe-eau extra plat",
      subtitle: "Confort & Gain de Place",
      image: "/img/extraplatchauf.png",
      badge: "Format compact",
      features: [
        "Format compact, idéal petits espaces",
        "Consommation maîtrisée et intelligente",
        "Confort quotidien, sans compromis",
        "Design discret et moderne"
      ],
      description: "Un maximum de confort dans un minimum d'espace pour votre eau chaude sanitaire. Parfait pour les petits logements ou les espaces optimisés.",
      gradient: "from-[black] to-[#FF6B6B]"
    },
    {
      id: 'chauffe-eau-electrique',
      title: "Chauffe-eau électrique",
      subtitle: "Simple & Fiable",
      image: "/img/ballonecs.png",
      badge: "Installation rapide",
      features: [
        "Eau chaude disponible à toute heure",
        "Installation rapide et sans contraintes",
        "Solution économique à l'achat",
        "Maintenance simplifiée"
      ],
      description: "Le chauffe-eau électrique classique assure une production d'eau chaude constante pour toute la maison. Discret, facile à installer et adapté aux petits budgets.",
      gradient: "from-[black] to-[#FF6B6B]"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-background text-[black] dark:text-white">
      
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
              Eau chaude sanitaire
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
                <span className="bg-gradient-to-r from-[#FF6B6B] via-[#03144A] to-[#FF6B6B] dark:from-[#FF8A8A] dark:via-white dark:to-[#FF8A8A] bg-clip-text text-transparent">
                  Chauffe-eau
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#03144A] via-[#FF6B6B] to-[#03144A] dark:from-white dark:via-[#FF8A8A] dark:to-white bg-clip-text text-transparent">
                  Eau Chaude Sanitaire
                </span>
              </h1>
              
              <div className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-xl leading-relaxed text-gray-700 dark:text-gray-100 max-w-full lg:max-w-4xl mx-auto lg:mx-0 px-0 sm:px-2 lg:px-0 mb-6 xs:mb-7 sm:mb-8">
                <p className="mb-3 font-light">
                  Le <strong className="text-black dark:text-white font-medium">chauffe-eau</strong> est un élément essentiel<br />
                  pour assurer votre <strong className="text-black dark:text-white font-medium">confort</strong> au quotidien.
                </p>
                <p className="mb-3 font-light">
                  Chez <strong className="text-black dark:text-white font-medium">ClimGO</strong>, nous proposons plusieurs solutions<br />
                  selon vos besoins : le <strong className="text-black dark:text-white font-medium">cumulus électrique</strong>,<br />
                  le <strong className="text-black dark:text-white font-medium">chauffe-eau thermodynamique</strong> et le modèle <strong className="text-black dark:text-white font-medium">extra-plat</strong>.
                </p>
                <p className="mb-3 font-light">
                  <strong className="text-black dark:text-white font-medium">Fiables</strong> et <strong className="text-black dark:text-white font-medium">performants</strong>, nos équipements assurent<br />
                  une production d'eau chaude <strong className="text-black dark:text-white font-medium">constante</strong> et <strong className="text-black dark:text-white font-medium">économique</strong>,<br />
                  tout en s'intégrant harmonieusement à votre intérieur.
                </p>
                <p className="mb-3 font-light">
                  Grâce à nos installations soignées et à notre expertise<br />
                  <strong className="text-black dark:text-white font-medium">certifiée RGE</strong>, vous profitez d'un confort durable<br />
                  et de réelles <strong className="text-black dark:text-white font-medium">économies d'énergie</strong>.
                </p>
                <p className="mb-4 font-light">
                  Contactez-nous pour plus d'informations ou pour<br />
                  demander un <strong className="text-black dark:text-white font-medium">devis gratuit</strong>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-start">
                <a href="#solutions">
                  <button className="px-10 sm:px-12 py-4 sm:py-4 bg-gray-50 dark:bg-gray-800 border border-black dark:border-white text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 text-base sm:text-lg font-semibold rounded-full transition-colors duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    Découvrir nos solutions
                  </button>
                </a>
                
                <Link href="/contact">
                  <button className="px-10 sm:px-12 py-4 sm:py-4 bg-gray-50 dark:bg-gray-800 border border-black dark:border-white text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 text-base sm:text-lg font-semibold rounded-full transition-colors duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    Demander un devis
                  </button>
                </Link>
              </div>
            </div>
            
            {/* Carte du thermodynamique dans le hero - Animation depuis la droite */}
            <div id="solutions" className="w-full max-w-2xl mx-auto lg:mx-0 order-2 lg:order-2">
              <div className="grid grid-cols-1 gap-6">
                {solutions.slice(0, 1).map((solution, index) => (
                  <Link 
                    key={index} 
                    href="/contact" 
                    className="block group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-white hover:-translate-y-2 h-[400px] sm:h-[450px] lg:h-[500px] cursor-pointer"
                    style={{ 
                      animation: `slide-in-right 1.2s ease-out ${index * 0.2}s both`
                    }}
                  >
                    {/* Image en fond pour toutes les résolutions */}
                    <div 
                      className="absolute inset-0 bg-no-repeat bg-center bg-cover"
                      style={{ 
                        backgroundImage: `url(${solution.image})`,
                        backgroundColor: '#f3f4f6'
                      }}
                    >
                      {/* Overlay léger pour contraste sur desktop uniquement */}
                      <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white/40 via-white/20 to-transparent dark:from-black/40 dark:via-black/20 dark:to-transparent" />
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

      {/* Section Information Ballon Thermodynamique */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-background">
        <div className="container mx-auto px-4 xs:px-5 sm:px-6 max-w-4xl">
          
          {/* Bloc 1 */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-black dark:text-white mb-4 sm:mb-6">
              Qu'est-ce qu'un ballon thermodynamique ?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
              Le <strong className="text-black dark:text-white font-medium">ballon thermodynamique</strong> associe les performances d'une pompe à chaleur et d'un ballon d'eau chaude sanitaire.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mt-4 font-light">
              Ce système capte les <strong className="text-black dark:text-white font-medium">calories naturellement présentes dans l'air ambiant</strong> pour chauffer l'eau, offrant ainsi une solution bien plus économe qu'un chauffe-eau électrique classique.
            </p>
          </div>

          {/* Séparateur */}
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#FF6B6B] to-transparent mx-auto mb-12 sm:mb-16" />

          {/* Bloc 2 */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-black dark:text-white mb-4 sm:mb-6">
              Efficacité énergétique et économies
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
              Grâce à son <strong className="text-black dark:text-white font-medium">haut rendement énergétique</strong>, le ballon thermodynamique utilise une énergie renouvelable et gratuite : l'air.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mt-4 font-light">
              Il permet de réduire considérablement la consommation électrique tout en assurant la même quantité d'eau chaude.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mt-4 font-light">
              Résultat : <strong className="text-black dark:text-white font-medium">jusqu'à 70 % d'économies</strong> sur vos factures par rapport à un système traditionnel, tout en limitant votre impact environnemental.
            </p>
          </div>

          {/* Séparateur */}
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#FF6B6B] to-transparent mx-auto mb-12 sm:mb-16" />

          {/* Bloc 3 */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-black dark:text-white mb-4 sm:mb-6">
              Confort et fiabilité
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
              Le ballon thermodynamique garantit une <strong className="text-black dark:text-white font-medium">production d'eau chaude constante et homogène</strong>, même en cas de forte demande.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mt-4 font-light">
              Sa conception robuste et son fonctionnement automatisé en font un <strong className="text-black dark:text-white font-medium">équipement fiable et durable</strong>, nécessitant peu d'entretien au quotidien.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mt-4 font-light">
              C'est la solution idéale pour concilier confort, performance et économies d'énergie.
            </p>
          </div>

        </div>
      </section>

      {/* Section Professionnels & Particuliers */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-background">
        <div className="container mx-auto px-4 xs:px-5 sm:px-6 max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-black dark:text-white mb-6 sm:mb-8">
              Professionnels & Particuliers
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6 font-light">
              Que vous soyez particulier ou professionnel, <strong className="text-black dark:text-white font-medium">ClimGO</strong> vous garantit des interventions <strong className="text-black dark:text-white font-medium">rapides, soignées et adaptées</strong> à vos besoins.
            </p>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6 font-light">
              Chaque projet fait l'objet d'une <strong className="text-black dark:text-white font-medium">étude personnalisée</strong> et de conseils précis, afin de vous proposer la solution la plus performante pour votre confort.
            </p>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
              En tant qu'entreprise <strong className="text-black dark:text-white font-medium">certifiée RGE</strong>, ClimGO vous permet également de bénéficier des <strong className="text-black dark:text-white font-medium">aides de l'État</strong>, sous réserve d'éligibilité.
            </p>
          </div>
        </div>
      </section>

      {/* Section Découvrir nos autres services */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-background">
        <div className="container mx-auto px-4 xs:px-5 sm:px-6 max-w-6xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-black dark:text-white mb-8 sm:mb-12 text-center">
            Découvrir nos autres services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Climatisation */}
            <Link 
              href="/climatisation"
              className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:-translate-y-2 h-[300px] sm:h-[320px]"
            >
              {/* Version MOBILE - Image simple */}
              <img
                src="/outro/cardclim.png"
                alt="Climatisation"
                className="lg:hidden absolute inset-0 w-full h-full object-cover"
              />

              {/* Version DESKTOP */}
              <div
                className="hidden lg:block absolute inset-0 bg-no-repeat bg-cover transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundImage: 'url(/outro/cardclim.png)',
                  backgroundPosition: 'center center'
                }}
              >
                {/* Overlay pour contraste - desktop uniquement */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/30 to-transparent dark:from-black/60 dark:via-black/35 dark:to-transparent group-hover:from-white/50 group-hover:via-white/25 group-hover:to-transparent dark:group-hover:from-black/50 dark:group-hover:via-black/30 dark:group-hover:to-transparent transition-all duration-300" />
              </div>

              {/* Bannière avec le titre - toujours visible sur mobile, au survol sur desktop */}
              <div className="absolute bottom-0 left-0 z-20 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 transform translate-y-0 lg:translate-y-2 lg:group-hover:translate-y-0">
                <div className="bg-white/90 dark:bg-black/90 lg:bg-white/60 lg:dark:bg-black/60 backdrop-blur-md text-black dark:text-white px-4 py-2 lg:px-6 lg:py-3 rounded-tr-2xl border border-white/30 dark:border-white/10">
                  <h4 className="text-sm sm:text-base lg:text-lg xl:text-xl font-light tracking-wide">
                    Climatisation
                  </h4>
                </div>
              </div>
            </Link>

            {/* Chauffage */}
            <Link 
              href="/chauffage"
              className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-400 hover:-translate-y-2 h-[300px] sm:h-[320px]"
            >
              {/* Version MOBILE - Image simple */}
              <img
                src="/img/uipacspacex.png"
                alt="Chauffage"
                className="lg:hidden absolute inset-0 w-full h-full object-cover"
              />

              {/* Version DESKTOP */}
              <div
                className="hidden lg:block absolute inset-0 bg-no-repeat bg-cover transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundImage: 'url(/img/uipacspacex.png)',
                  backgroundPosition: 'center center'
                }}
              >
                {/* Overlay pour contraste - desktop uniquement */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/30 to-transparent dark:from-black/60 dark:via-black/35 dark:to-transparent group-hover:from-white/50 group-hover:via-white/25 group-hover:to-transparent dark:group-hover:from-black/50 dark:group-hover:via-black/30 dark:group-hover:to-transparent transition-all duration-300" />
              </div>

              {/* Bannière avec le titre - toujours visible sur mobile, au survol sur desktop */}
              <div className="absolute bottom-0 left-0 z-20 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 transform translate-y-0 lg:translate-y-2 lg:group-hover:translate-y-0">
                <div className="bg-white/90 dark:bg-black/90 lg:bg-white/60 lg:dark:bg-black/60 backdrop-blur-md text-black dark:text-white px-4 py-2 lg:px-6 lg:py-3 rounded-tr-2xl border border-white/30 dark:border-white/10">
                  <h4 className="text-sm sm:text-base lg:text-lg xl:text-xl font-light tracking-wide">
                    Chauffage
                  </h4>
                </div>
              </div>
            </Link>
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
