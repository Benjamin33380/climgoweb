'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, User, MessageSquare, Building, Home } from 'lucide-react';
import LazyGoogleMaps from '@/components/LazyGoogleMaps';

export default function EauChaudeSanitairePage() {
  const solutionsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

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
              href="/thermodynamique" 
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
            >
              Eau chaude sanitaire
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link 
              href="/pompe-a-chaleur" 
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
            >
              Pompe à chaleur
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-black dark:text-white font-medium">
              Thermodynamique
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
                  Eau chaude sanitaire
              </span>
              <br />
                <span className="bg-gradient-to-r from-[#03144A] via-[#FF6B6B] to-[#03144A] dark:from-white dark:via-[#FF8A8A] dark:to-white bg-clip-text text-transparent">
                  Ballon thermodynamique
              </span>
            </h1>
              
              <div className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-xl leading-relaxed text-gray-700 dark:text-gray-100 max-w-full lg:max-w-4xl mx-auto lg:mx-0 px-0 sm:px-2 lg:px-0 mb-6 xs:mb-7 sm:mb-8">
                <p className="mb-4 font-light">
                  Le <strong className="text-black dark:text-white font-medium">ballon thermodynamique</strong> est aujourd'hui l'une des solutions les plus efficaces pour produire votre <strong className="text-black dark:text-white font-medium">eau chaude sanitaire</strong> tout en réduisant vos consommations d'énergie.
                  Son principe est simple : il capte les <strong className="text-black dark:text-white font-medium">calories présentes dans l'air ambiant</strong> pour chauffer l'eau du ballon, ce qui permet de réaliser jusqu'à <strong className="text-black dark:text-white font-medium">70 % d'économies</strong> par rapport à un chauffe-eau électrique classique.
                </p>
                
                <p className="mb-4 font-light">
                  Idéal en <strong className="text-black dark:text-white font-medium">rénovation</strong> comme en <strong className="text-black dark:text-white font-medium">construction neuve</strong>, il s'adapte facilement à tous types de logements.
                  <strong className="text-black dark:text-white font-medium">Silencieux</strong>, <strong className="text-black dark:text-white font-medium">fiable</strong> et <strong className="text-black dark:text-white font-medium">écologique</strong>, le ballon thermodynamique vous garantit un confort constant tout au long de l'année, tout en limitant votre impact environnemental.
                </p>
                
                <p className="mb-4 font-light">
                  Grâce au savoir-faire <strong className="text-black dark:text-white font-medium">ClimGO</strong> et à notre <strong className="text-black dark:text-white font-medium">certification RGE</strong>, vous bénéficiez d'une installation professionnelle, durable et éligible aux <strong className="text-black dark:text-white font-medium">aides financières de l'État</strong>.
                </p>
                
                <p className="mb-4 font-light">
                  Contactez-nous dès maintenant pour obtenir un <strong className="text-black dark:text-white font-medium">devis gratuit</strong> et découvrir la solution la plus adaptée à votre foyer.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-start">
            <button
              onClick={() => solutionsRef.current?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-10 sm:px-12 py-4 sm:py-4 bg-gray-50 dark:bg-gray-800 border border-black dark:border-white text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 text-base sm:text-lg font-semibold rounded-full transition-colors duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
                  Découvrir nos solutions
            </button>
            
                <button
                  onClick={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-10 sm:px-12 py-4 sm:py-4 bg-gray-50 dark:bg-gray-800 border border-black dark:border-white text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 text-base sm:text-lg font-semibold rounded-full transition-colors duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
              Demander un devis
            </button>
          </div>
        </div>
            
            {/* Carte du thermodynamique dans le hero - Animation depuis la droite */}
            <div ref={solutionsRef} className="w-full max-w-2xl mx-auto lg:mx-0 order-2 lg:order-2">
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
        <div className="container mx-auto px-4 xs:px-5 sm:px-6 max-w-7xl">
          <div className="text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-black dark:text-white mb-6 sm:mb-8">
              Professionnels & Particuliers
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6 font-light">
              Que vous soyez particulier ou professionnel, <strong className="text-black dark:text-white font-medium">ClimGO</strong> vous garantit des interventions <strong className="text-black dark:text-white font-medium">rapides, soignées et adaptées</strong> à vos besoins.
            </p>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6 font-light">
              Chaque projet fait l'objet d'une <strong className="text-black dark:text-white font-medium">étude personnalisée</strong> et de conseils précis, afin de vous proposer la solution la plus performante pour votre confort.
            </p>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light mb-8">
              En tant qu'entreprise <strong className="text-black dark:text-white font-medium">certifiée RGE</strong>, ClimGO vous permet également de bénéficier des <strong className="text-black dark:text-white font-medium">aides de l'État</strong>, sous réserve d'éligibilité.
            </p>
            
            {/* Logos RGE et République Française */}
            <div className="flex items-center justify-start gap-6 sm:gap-8 mt-8 ml-0">
              <Image
                src="/logoannexe/rge.png"
                alt="Certifié RGE"
                width={120}
                height={80}
                className="h-16 sm:h-20 w-auto object-contain"
              />
              <Image
                src="/logoannexe/rf.svg.png"
                alt="République Française"
                width={120}
                height={80}
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </div>
            
            {/* Bouton Découvrir les aides d'État */}
            <div className="flex justify-start mt-8 ml-0">
              <Link
                href="/aides-etat"
                className="inline-flex items-center justify-center px-10 sm:px-12 py-4 sm:py-4 bg-gray-50 dark:bg-gray-800 border border-black dark:border-white text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 text-base sm:text-lg font-semibold rounded-full transition-colors duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Découvrir les aides d'État
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Découvrir nos systèmes de production d'eau chaude sanitaire */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-background">
        <div className="container mx-auto px-4 xs:px-5 sm:px-6 max-w-6xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-black dark:text-white mb-4 sm:mb-6 text-center">
            Découvrir nos systèmes de production d'eau chaude sanitaire
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 text-center italic">
            *non éligible aux aides d'état
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Chauffe-eau thermodynamique */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:-translate-y-2 h-[300px] sm:h-[320px]">
              {/* Version MOBILE - Image simple */}
              <img
                src="/img/chauffeeau.png"
                alt="Chauffe-eau thermodynamique"
                className="lg:hidden absolute inset-0 w-full h-full object-cover"
              />

              {/* Version DESKTOP */}
              <div
                className="hidden lg:block absolute inset-0 bg-no-repeat bg-cover transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundImage: 'url(/img/chauffeeau.png)',
                  backgroundPosition: 'center center'
                }}
              >
                {/* Overlay pour contraste - desktop uniquement */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/30 to-transparent dark:from-black/60 dark:via-black/35 dark:to-transparent group-hover:from-white/50 group-hover:via-white/25 group-hover:to-transparent dark:group-hover:from-black/50 dark:group-hover:via-black/30 dark:group-hover:to-transparent transition-all duration-300" />
              </div>

              {/* Overlay et titre centré sur l'image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h4 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white uppercase tracking-wide drop-shadow-2xl text-center px-4" style={{ textShadow: '3px 3px 10px rgba(0,0,0,0.9)' }}>
                  Chauffe-eau cumulus
                </h4>
              </div>
            </div>

            {/* Chauffe-eau extra plat */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-400 hover:-translate-y-2 h-[300px] sm:h-[320px]">
              {/* Version MOBILE - Image simple */}
              <img
                src="/img/extraplatchauf.png"
                alt="Chauffe-eau extra plat"
                className="lg:hidden absolute inset-0 w-full h-full object-cover"
              />

              {/* Version DESKTOP */}
              <div
                className="hidden lg:block absolute inset-0 bg-no-repeat bg-cover transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundImage: 'url(/img/extraplatchauf.png)',
                  backgroundPosition: 'center center'
                }}
              >
                {/* Overlay pour contraste - desktop uniquement */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/30 to-transparent dark:from-black/60 dark:via-black/35 dark:to-transparent group-hover:from-white/50 group-hover:via-white/25 group-hover:to-transparent dark:group-hover:from-black/50 dark:group-hover:via-black/30 dark:group-hover:to-transparent transition-all duration-300" />
              </div>

              {/* Overlay et titre centré sur l'image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h4 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white uppercase tracking-wide drop-shadow-2xl text-center px-4" style={{ textShadow: '3px 3px 10px rgba(0,0,0,0.9)' }}>
                  Chauffe-eau cumulus extra plat
                </h4>
              </div>
            </div>
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

              {/* Overlay et titre centré sur l'image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h4 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white uppercase tracking-wide drop-shadow-2xl text-center px-4" style={{ textShadow: '3px 3px 10px rgba(0,0,0,0.9)' }}>
                  Climatisation
                </h4>
              </div>
            </Link>

            {/* Chauffage */}
            <Link 
              href="/air+eau"
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

              {/* Overlay et titre centré sur l'image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h4 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white uppercase tracking-wide drop-shadow-2xl text-center px-4" style={{ textShadow: '3px 3px 10px rgba(0,0,0,0.9)' }}>
                  Chauffage
                </h4>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section ref={contactRef} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-background">
        <div className="container mx-auto px-4 xs:px-5 sm:px-6">
          <div className="grid grid-cols-1 gap-8 max-w-7xl mx-auto">
            
            {/* Carte formulaire de contact */}
            <div>
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
