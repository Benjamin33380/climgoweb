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
