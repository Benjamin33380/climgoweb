'use client';

import Link from 'next/link';
import LazyGoogleMaps from '@/components/LazyGoogleMaps';

export default function ChauffagePage() {

  const solutions = [
    {
      id: 'chauffage-solution',
      title: "Chauffage seul",
      subtitle: "Solution complète",
      image: "/outro/chauffageseul.png",
      badge: "Installation professionnelle",
      features: [],
      description: "",
      gradient: "from-[black] to-[#FF8C00]"
    },
    {
      id: 'pac-air-eau',
      title: "Chauffage avec production d'eau chaude sanitaire",
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
              Chauffage
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
                <span className="bg-gradient-to-r from-[#FF8C00] via-[#03144A] to-[#FF8C00] dark:from-[#FFA500] dark:via-white dark:to-[#FFA500] bg-clip-text text-transparent">
                  Pompe à Chaleur
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#03144A] via-[#FF8C00] to-[#03144A] dark:from-white dark:via-[#FFA500] dark:to-white bg-clip-text text-transparent">
                  Air-Eau
                </span>
              </h1>
              
              <div className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-xl leading-relaxed text-gray-700 dark:text-gray-100 max-w-full lg:max-w-4xl mx-auto lg:mx-0 px-0 sm:px-2 lg:px-0 mb-6 xs:mb-7 sm:mb-8">
                <p className="mb-3 font-light">
                  Votre artisan chauffagiste <strong className="text-black dark:text-white font-medium">RGE ClimGO</strong> vous propose<br />
                  une large gamme de <strong className="text-black dark:text-white font-medium">pompes à chaleur air-eau</strong>,<br />
                  adaptées à vos besoins et à votre budget.
                </p>
                <p className="mb-3 font-light">
                  Nous vous accompagnons dans toutes les étapes :<br />
                  <strong className="text-black dark:text-white font-medium">conseil</strong>, <strong className="text-black dark:text-white font-medium">sélection du matériel</strong>, <strong className="text-black dark:text-white font-medium">installation</strong> et <strong className="text-black dark:text-white font-medium">entretien</strong>.
                </p>
                <p className="mb-3 font-light">
                  ClimGO vous aide à bénéficier des <strong className="text-black dark:text-white font-medium">aides d'État</strong><br />
                  (MaPrimeRénov', CEE, TVA réduite) en déduisant directement<br />
                  les montants sur votre facture.
                </p>
                <p className="mb-3 font-light">
                  Les pompes à chaleur air-eau sont des systèmes<br />
                  <strong className="text-black dark:text-white font-medium">écologiques</strong> et <strong className="text-black dark:text-white font-medium">économiques</strong> qui utilisent l'énergie gratuite<br />
                  de l'air extérieur pour chauffer votre logement.
                </p>
                <p className="mb-3 font-light">
                  Elles s'adaptent parfaitement aux habitations équipées<br />
                  d'un <strong className="text-black dark:text-white font-medium">plancher chauffant</strong> ou de <strong className="text-black dark:text-white font-medium">radiateurs</strong>,<br />
                  et conviennent en remplacement d'une chaudière.
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
            
            {/* Cartes dans le hero - Animation depuis la droite */}
            <div id="solutions" className="w-full max-w-2xl mx-auto lg:mx-0 order-2 lg:order-2">
              <div className="grid grid-cols-1 gap-6">
                {solutions.slice(0, 2).map((solution, index) => (
                  <Link 
                    key={index} 
                    href="/contact" 
                    className="block group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-white hover:-translate-y-2 h-[300px] sm:h-[320px] lg:h-[350px] cursor-pointer"
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
                      {/* Overlay léger pour contraste */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/20 to-transparent dark:from-black/40 dark:via-black/20 dark:to-transparent lg:from-white/40 lg:via-white/20 lg:to-transparent dark:lg:from-black/40 dark:lg:via-black/20 dark:lg:to-transparent" />
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

      {/* Section Information PAC Air-Eau */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-background">
        <div className="container mx-auto px-4 xs:px-5 sm:px-6 max-w-4xl">
          
          {/* Bloc 1 */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-black dark:text-white mb-4 sm:mb-6">
              Qu'est-ce qu'une pompe à chaleur air-eau ?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
              La <strong className="text-black dark:text-white font-medium">pompe à chaleur air-eau</strong> est un système de chauffage performant qui capte les calories présentes dans l'air extérieur pour les transformer en chaleur, utilisée ensuite pour chauffer l'eau de votre logement.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mt-4 font-light">
              Cette eau alimente votre chauffage central (radiateurs, plancher chauffant) et peut également servir à produire l'eau chaude sanitaire.
            </p>
          </div>

          {/* Séparateur */}
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#FF8C00] to-transparent mx-auto mb-12 sm:mb-16" />

          {/* Bloc 2 */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-black dark:text-white mb-4 sm:mb-6">
              Efficacité énergétique et économies
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
              L'un des grands atouts de la pompe à chaleur air-eau est son <strong className="text-black dark:text-white font-medium">rendement exceptionnel</strong>.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mt-4 font-light">
              En exploitant une énergie gratuite et naturelle, elle produit plus d'énergie qu'elle n'en consomme, ce qui se traduit par des <strong className="text-black dark:text-white font-medium">économies importantes</strong> sur vos factures de chauffage.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mt-4 font-light">
              C'est une solution durable, efficace et particulièrement intéressante sur le long terme.
            </p>
          </div>

          {/* Séparateur */}
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#FF8C00] to-transparent mx-auto mb-12 sm:mb-16" />

          {/* Bloc 3 */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-black dark:text-white mb-4 sm:mb-6">
              Respect de l'environnement
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
              Puisant son énergie dans l'air, une <strong className="text-black dark:text-white font-medium">ressource renouvelable et inépuisable</strong>, la pompe à chaleur air-eau contribue à réduire votre empreinte carbone.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mt-4 font-light">
              Elle représente une <strong className="text-black dark:text-white font-medium">alternative écologique</strong> aux systèmes de chauffage classiques, tout en assurant un confort thermique optimal tout au long de l'année.
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
