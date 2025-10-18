'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, User, MessageSquare, Building, Home } from 'lucide-react';
import LazyGoogleMaps from '@/components/LazyGoogleMaps';

export default function PompeAChaleurPage() {
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
      id: 'climatisation-murale',
      title: "Pompe à chaleur air/air",
      image: "/outro/cardclim.png",
    },
    {
      id: 'chauffage-ecs',
      title: "Pompe à chaleur air/eau",
      image: "/img/uipacspacex.png",
    },
    {
      id: 'thermodynamique',
      title: "Thermodynamique",
      image: "/img/thermoecs.png",
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f172a]">
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
            <span className="text-black dark:text-white font-medium">
              Pompe à Chaleur
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
                <span className="bg-gradient-to-r from-[#FF8C00] via-[#2563EB] to-[#FF8C00] dark:from-[#FFA500] dark:via-[#60A5FA] dark:to-[#FFA500] bg-clip-text text-transparent">
                  Pompe à Chaleur
                </span>
              </h1>
              
              <div className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-xl leading-relaxed text-gray-700 dark:text-gray-100 max-w-full lg:max-w-4xl mx-auto lg:mx-0 px-0 sm:px-2 lg:px-0 mb-6 xs:mb-7 sm:mb-8">
                <p className="mb-3 font-light">
                  Chez <strong className="text-black dark:text-white font-medium">ClimGO</strong>, nous sommes spécialisés dans les solutions de <strong className="text-black dark:text-white font-medium">pompes à chaleur</strong>, offrant un large éventail de services pour répondre à tous vos besoins en matière de <strong className="text-black dark:text-white font-medium">chauffage</strong> et de <strong className="text-black dark:text-white font-medium">climatisation</strong>.
                </p>
                <p className="mb-3 font-light">
                  De la <strong className="text-black dark:text-white font-medium">consultation initiale</strong> à l'<strong className="text-black dark:text-white font-medium">installation</strong>, en passant par l'<strong className="text-black dark:text-white font-medium">entretien</strong> et le <strong className="text-black dark:text-white font-medium">dépannage</strong>, notre équipe d'experts dédiée est là pour vous conseiller.
                </p>
                <p className="mb-4 font-light">
                  Contactez-nous pour plus d'informations ou pour demander un <strong className="text-black dark:text-white font-medium">devis gratuit</strong>.
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
                  
            {/* Cartes des solutions - Animation depuis la droite */}
            <div className="w-full max-w-2xl mx-auto lg:mx-0 order-2 lg:order-2">
              <div className="grid grid-cols-1 gap-6">
                {solutions.map((solution, index) => (
                  <Link 
                    key={index} 
                    href="/contact" 
                    className="block group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-white hover:-translate-y-2 h-[350px] sm:h-[380px] lg:h-[350px] cursor-pointer"
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
                        backgroundPosition: 'center center'
                      }}
                    >
                      {/* Overlay pour contraste - desktop uniquement */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/20 to-transparent dark:from-black/30 dark:via-black/15 dark:to-transparent group-hover:from-white/30 group-hover:via-white/15 group-hover:to-transparent dark:group-hover:from-black/20 dark:group-hover:via-black/10 dark:group-hover:to-transparent transition-all duration-300" />
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

      {/* Section Information Pompe à Chaleur */}
      <section ref={solutionsRef} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-background">
        <div className="container mx-auto px-4 xs:px-5 sm:px-6 max-w-4xl">
          
          {/* Bloc 1 */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-black dark:text-white mb-4 sm:mb-6">
              Consultation et conseil personnalisé
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
              Chez <strong className="text-black dark:text-white font-medium">ClimGO</strong>, chaque projet débute par une <strong className="text-black dark:text-white font-medium">visite technique approfondie</strong> afin d'analyser vos besoins réels en matière de chauffage et de climatisation.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mt-4 font-light">
              Nos techniciens experts étudient les particularités de votre logement ou de votre piscine pour vous orienter vers la <strong className="text-black dark:text-white font-medium">pompe à chaleur la plus adaptée</strong> à votre confort et à votre consommation.
            </p>
        </div>
        
          {/* Séparateur */}
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#FF8C00] to-transparent mx-auto mb-12 sm:mb-16" />

          {/* Bloc 2 */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-black dark:text-white mb-4 sm:mb-6">
              Installation de pompe à chaleur
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
              Nous assurons la pose complète de <strong className="text-black dark:text-white font-medium">pompes à chaleur air/eau, air/air et pour piscine</strong>.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mt-4 font-light">
              Nos installateurs qualifiés et <strong className="text-black dark:text-white font-medium">certifiés RGE</strong> réalisent des installations soignées, conformes aux normes en vigueur et adaptées à chaque configuration.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mt-4 font-light">
              Notre priorité : <strong className="text-black dark:text-white font-medium">efficacité, propreté et discrétion</strong>, afin que les travaux s'intègrent naturellement dans votre quotidien.
            </p>
          </div>
          
          {/* Séparateur */}
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#2563EB] to-transparent mx-auto mb-12 sm:mb-16" />

          {/* Bloc 3 */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-black dark:text-white mb-4 sm:mb-6">
              Entretien de pompe à chaleur
          </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
              Pour garantir la durée de vie et la performance de votre installation, un <strong className="text-black dark:text-white font-medium">entretien régulier</strong> est indispensable.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mt-4 font-light">
              ClimGO propose des <strong className="text-black dark:text-white font-medium">contrats d'entretien personnalisés</strong> comprenant :
            </p>
            <ul className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mt-4 ml-6 space-y-2 font-light">
              <li>• une visite annuelle de contrôle,</li>
              <li>• le nettoyage complet des équipements,</li>
              <li>• et le remplacement préventif des pièces si nécessaire.</li>
            </ul>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mt-4 font-light">
              Nos interventions assurent un fonctionnement <strong className="text-black dark:text-white font-medium">silencieux, économique et durable</strong> de votre pompe à chaleur.
            </p>
          </div>

          {/* Séparateur */}
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#FF8C00] to-transparent mx-auto mb-12 sm:mb-16" />

          {/* Bloc 4 */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-black dark:text-white mb-4 sm:mb-6">
              Dépannage rapide et fiable
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
              En cas de panne ou de dysfonctionnement, notre équipe de dépannage <strong className="text-black dark:text-white font-medium">intervient dans les plus brefs délais</strong>.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mt-4 font-light">
              Formés à tous les types et toutes les marques de pompes à chaleur, nos techniciens diagnostiquent rapidement l'origine du problème et assurent une <strong className="text-black dark:text-white font-medium">remise en service efficace et durable</strong>.
            </p>
          </div>

          {/* Message final */}
          <div className="text-center">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
              Avec <strong className="text-black dark:text-white font-medium">ClimGO</strong>, vous bénéficiez d'un service complet, du conseil à la maintenance, pour un <strong className="text-black dark:text-white font-medium">confort maîtrisé toute l'année</strong>.
            </p>
          </div>
          
        </div>
      </section>

      {/* Section Pourquoi ClimGO */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-background">
        <div className="container mx-auto px-4 xs:px-5 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-black dark:text-white mb-8 sm:mb-12">
              Pourquoi choisir ClimGO pour votre projet de pompe à chaleur ?
            </h2>
            
            <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed font-light">
              <p className="text-base sm:text-lg">
                Chez <strong className="text-black dark:text-white font-medium">ClimGO</strong>, chaque client bénéficie d'un accompagnement personnalisé et d'un service irréprochable à chaque étape de son projet.
                Notre priorité : vous offrir un <strong className="text-black dark:text-white font-medium">confort thermique optimal</strong> tout en réduisant durablement votre consommation d'énergie.
              </p>
              
              <p className="text-base sm:text-lg">
                Entreprise <strong className="text-black dark:text-white font-medium">certifiée RGE</strong>, ClimGO est un gage de sérieux et de qualité, vous assurant des travaux réalisés dans le respect des normes et des performances attendues.
                Cette qualification vous permet également de profiter des <strong className="text-black dark:text-white font-medium">aides de l'État</strong>, sous réserve d'éligibilité, pour faciliter le financement de votre installation.
              </p>
              
              <p className="text-base sm:text-lg">
                Contactez-nous dès aujourd'hui pour étudier ensemble la solution la plus adaptée à votre logement.
              </p>
            </div>
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
