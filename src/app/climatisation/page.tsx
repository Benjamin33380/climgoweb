'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Wrench, DraftingCompass, ShieldCheck, BadgeEuro, Phone, Mail, MapPin, Clock, User, MessageSquare, Building, Home } from 'lucide-react';
import { SimpleWrapper } from '@/components/ui/SimpleWrapper';
import LazyGoogleMaps from '@/components/LazyGoogleMaps';

export default function ClimatisationPage() {
  const solutionsRef = useRef<HTMLDivElement>(null);

  // États pour le formulaire de contact
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    postalCode: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const services = [
    'Pompe à chaleur air/eau',
    'Pompe à chaleur air/air',
    'Climatisation',
    'Chauffe-eau thermodynamique',
    'Plancher chauffant',
    'Maintenance',
    'Autre'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Votre demande a été envoyée avec succès !'
        });
        
        // Réinitialiser le formulaire
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          postalCode: '',
          service: '',
          message: ''
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Erreur lors de l\'envoi. Veuillez réessayer.'
        });
      }
    } catch (_error) {
      setSubmitStatus({
        type: 'error',
        message: 'Erreur de connexion. Vérifiez votre connexion internet et réessayez.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
                          index === 0 ? '20% 5%'
                          : index === 1 ? '90% 10%'
                          : index === 2 ? '10% 15%'
                          : index === 3 ? '85% 80%'
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

            {/* Eau chaude sanitaire */}
            <Link 
              href="/eau-chaude-sanitaire"
              className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-red-500 dark:hover:border-red-400 hover:-translate-y-2 h-[300px] sm:h-[320px]"
            >
              {/* Version MOBILE - Image simple */}
              <img
                src="/img/thermoecs.png"
                alt="Eau chaude sanitaire"
                className="lg:hidden absolute inset-0 w-full h-full object-cover"
              />

              {/* Version DESKTOP */}
              <div
                className="hidden lg:block absolute inset-0 bg-no-repeat bg-cover transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundImage: 'url(/img/thermoecs.png)',
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
                    Eau chaude sanitaire
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
          <div className="grid grid-cols-1 gap-8 max-w-7xl mx-auto">
            
            {/* Carte de contact */}
            <div className="order-2">
              <div style={{
                background: 'linear-gradient(to bottom right, #03144A, #F97316)',
                borderRadius: '24px',
                padding: '32px',
                color: 'white'
              }}>
                <h3 style={{ fontSize: '24px', fontWeight: '300', marginBottom: '32px', color: 'white' }}>
                  Besoin d'une réponse immédiate ?
                </h3>
                
                <div style={{ marginBottom: '24px' }}>
                  <p style={{ fontSize: '14px', marginBottom: '8px', color: 'white' }}>Appelez directement</p>
                  <Link href="tel:0766460008" style={{ fontSize: '20px', fontWeight: '600', color: 'white', display: 'block' }}>
                    07 66 46 00 08
                  </Link>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <p style={{ fontSize: '14px', marginBottom: '8px', color: 'white' }}>Email professionnel</p>
                  <Link href="mailto:contact@climgo.fr" style={{ fontSize: '20px', fontWeight: '600', color: 'white', display: 'block' }}>
                    contact@climgo.fr
                  </Link>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <p style={{ fontSize: '14px', marginBottom: '8px', color: 'white' }}>Notre localisation</p>
                  <p style={{ fontSize: '16px', fontWeight: '500', color: 'white' }}>28 rue de Cantelaude, 33380 Marcheprime</p>
                </div>

                <div style={{ marginBottom: '32px' }}>
                  <p style={{ fontSize: '14px', marginBottom: '8px', color: 'white' }}>Horaires d'ouverture</p>
                  <p style={{ fontSize: '16px', fontWeight: '500', color: 'white' }}>Lun-Ven: 8h-18h</p>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '24px', marginTop: '32px' }}>
                  <Link
                    href="tel:0766460008"
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      padding: '16px 24px',
                      borderRadius: '12px',
                      fontWeight: '600',
                      backgroundColor: 'white',
                      color: '#03144a'
                    }}
                  >
                    Appel d'urgence
                  </Link>
                </div>
              </div>
            </div>

            {/* Carte formulaire de contact */}
            <div className="order-1">
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl sm:text-3xl font-light text-black dark:text-white mb-4">
                  Démarrons votre projet
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-[#F97316] to-[#03144A] mb-6"></div>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm mb-6">
                  Remplissez ce formulaire et recevez une réponse personnalisée sous 48h. Nos experts analysent votre demande pour vous proposer la meilleure solution.
                </p>

                {submitStatus.type && (
                  <div className={`mb-6 p-4 rounded-xl ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200' 
                      : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-black dark:text-white mb-2">
                        Nom complet *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white/50 dark:bg-black/50 text-black dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-[#F97316] focus:border-transparent transition-all duration-300"
                          placeholder="Votre nom et prénom"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-black dark:text-white mb-2">
                        Téléphone *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white/50 dark:bg-black/50 text-black dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-[#F97316] focus:border-transparent transition-all duration-300"
                          placeholder="06 12 34 56 78"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-black dark:text-white mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white/50 dark:bg-black/50 text-black dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-[#F97316] focus:border-transparent transition-all duration-300"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-black dark:text-white mb-2">
                        Adresse
                      </label>
                      <div className="relative">
                        <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white/50 dark:bg-black/50 text-black dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-[#F97316] focus:border-transparent transition-all duration-300"
                          placeholder="Votre adresse"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="postalCode" className="block text-sm font-medium text-black dark:text-white mb-2">
                        Code postal
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          id="postalCode"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white/50 dark:bg-black/50 text-black dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-[#F97316] focus:border-transparent transition-all duration-300"
                          placeholder="33000"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-black dark:text-white mb-2">
                      Service souhaité *
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white/50 dark:bg-black/50 text-black dark:text-white focus:ring-2 focus:ring-[#F97316] focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Sélectionnez un service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-black dark:text-white mb-2">
                      Votre message *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white/50 dark:bg-black/50 text-black dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-[#F97316] focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Décrivez votre projet et vos besoins..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl ${
                      isSubmitting
                        ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
                        : 'bg-gradient-to-r from-[#03144A] to-[#F97316] text-white hover:scale-105'
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Envoi en cours...</span>
                      </div>
                    ) : (
                      'Envoyer ma demande'
                    )}
                  </button>
                </form>
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
