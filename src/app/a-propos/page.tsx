'use client';

import { useState } from 'react';
import { Users, Award, Clock, MapPin, Phone, Mail, CheckCircle, Star, Shield, Wrench, Settings, ThermometerSun } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function AProposPage() {
  const [activeTab, setActiveTab] = useState('histoire');

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "500+",
      label: "Clients satisfaits",
      description: "Particuliers et professionnels"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "10+",
      label: "Années d'expérience",
      description: "Dans le chauffage et climatisation"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      number: "48",
      label: "Communes desservies",
      description: "En Gironde et Nord des Landes"
    },
    {
      icon: <Star className="w-8 h-8" />,
      number: "4.8/5",
      label: "Satisfaction client",
      description: "Note moyenne Google"
    }
  ];

  const certifications = [
    {
      title: "Certification RGE",
      description: "Reconnu Garant de l'Environnement pour vos aides",
      icon: <Shield className="w-12 h-12" />
    },
    {
      title: "QualiPAC",
      description: "Qualification pompe à chaleur air/eau et air/air",
      icon: <ThermometerSun className="w-12 h-12" />
    },
    {
      title: "Qualibat",
      description: "Certification qualité pour les travaux du bâtiment",
      icon: <Settings className="w-12 h-12" />
    },
    {
      title: "Dépannage Urgent",
      description: "Intervention 7j/7 pour vos urgences chauffage",
      icon: <Wrench className="w-12 h-12" />
    }
  ];

  const valeurs = [
    {
      title: "Qualité",
      description: "Nous sélectionnons uniquement des équipements haut de gamme et utilisons des techniques d'installation rigoureuses pour garantir la durabilité de vos installations.",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Transparence",
      description: "Devis détaillés, explications claires, pas de surprise. Nous vous accompagnons à chaque étape avec honnêteté et pédagogie.",
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      title: "Réactivité",
      description: "Devis sous 48h, intervention rapide, dépannage d'urgence. Votre confort ne peut pas attendre.",
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: "Proximité",
      description: "Une entreprise locale qui connaît le territoire. Nous sommes là pour vous, avant, pendant et après l'installation.",
      icon: <MapPin className="w-8 h-8" />
    }
  ];

  const equipe = [
    {
      nom: "L'équipe ClimGO",
      role: "Experts en chauffage et climatisation",
      description: "Une équipe de professionnels passionnés, formés aux dernières technologies et certifiés RGE.",
      specialites: ["Pompes à chaleur", "Climatisation", "Chauffage", "Maintenance"]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="relative bg-[#03144a] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Motifs décoratifs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full translate-y-32 -translate-x-32"></div>
        
        <div className="relative container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-blue-700/50 rounded-full text-sm font-medium mb-6">
                Notre Histoire
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                À propos de ClimGO
              </h1>
              <h2 className="text-2xl md:text-3xl font-light mb-8 text-blue-100">
                Votre expert local en chauffage et climatisation
              </h2>
            </div>
            <p className="text-xl leading-relaxed text-blue-100 max-w-3xl mx-auto">
              Depuis plus de 10 ans, <strong className="text-white">ClimGO</strong> accompagne particuliers et professionnels en Gironde et dans le Nord des Landes. Notre expertise : installation, maintenance et dépannage de pompes à chaleur, climatisation et systèmes de chauffage.
            </p>
          </div>
        </div>
        
        {/* Vague décorative */}
        <div className="absolute -bottom-1 left-0 right-0 h-24 bg-white dark:bg-black" 
             style={{clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 60%)'}}>
        </div>
      </section>

      {/* Section Statistiques */}
      <section className="py-12 xs:py-16 sm:py-20 md:py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4 xs:px-5 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 xs:gap-7 sm:gap-8 md:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 xs:w-18 xs:h-18 sm:w-20 sm:h-20 md:w-20 md:h-20 bg-[#03144a] dark:bg-white/10 rounded-xl xs:rounded-2xl flex items-center justify-center mx-auto mb-4 xs:mb-5 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white dark:text-white">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl font-bold text-[#03144a] dark:text-white mb-1 xs:mb-2 sm:mb-2">
                    {stat.number}
                  </div>
                  <h3 className="text-sm xs:text-base sm:text-lg md:text-lg font-semibold text-black dark:text-white mb-1 xs:mb-2 sm:mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-black/70 dark:text-white/70 text-xs xs:text-sm sm:text-sm">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Histoire/Mission avec onglets */}
      <section className="py-20 bg-gray-50 dark:bg-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Onglets */}
            <div className="flex flex-wrap justify-center mb-12 bg-white dark:bg-black/20 rounded-2xl p-2 shadow-lg">
              {[
                { id: 'histoire', label: 'Notre Histoire' },
                { id: 'mission', label: 'Notre Mission' },
                { id: 'vision', label: 'Notre Vision' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-[#03144a] text-white shadow-lg'
                      : 'text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Contenu des onglets */}
            <div className="bg-white dark:bg-black/20 rounded-2xl p-8 shadow-lg">
              {activeTab === 'histoire' && (
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-[#03144a] dark:text-white mb-6">
                    Comment tout a commencé
                  </h3>
                  <p className="text-lg text-black/80 dark:text-white/80 leading-relaxed">
                    ClimGO est née d'une passion pour les technologies énergétiques et d'un constat simple : 
                    les particuliers et professionnels méritent un service de qualité, transparent et accessible 
                    pour leurs installations de chauffage et climatisation.
                  </p>
                  <p className="text-lg text-black/80 dark:text-white/80 leading-relaxed">
                    Depuis nos débuts, nous avons fait le choix de la spécialisation et de l'excellence. 
                    Plutôt que de disperser notre expertise, nous nous concentrons sur ce que nous savons 
                    faire de mieux : les pompes à chaleur, la climatisation et les systèmes de chauffage 
                    performants.
                  </p>
                  <p className="text-lg text-black/80 dark:text-white/80 leading-relaxed">
                    Aujourd'hui, avec plus de 500 clients satisfaits et une présence sur 48 communes, 
                    ClimGO est devenu un acteur incontournable du secteur en Gironde et dans le Nord des Landes.
                  </p>
                </div>
              )}

              {activeTab === 'mission' && (
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-[#03144a] dark:text-white mb-6">
                    Notre engagement au quotidien
                  </h3>
                  <p className="text-lg text-black/80 dark:text-white/80 leading-relaxed">
                    Notre mission est de démocratiser l'accès aux technologies énergétiques performantes 
                    et respectueuses de l'environnement. Nous croyons que chacun doit pouvoir bénéficier 
                    d'un confort thermique optimal tout en réduisant son impact écologique.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-black dark:text-white mb-2">Installation professionnelle</h4>
                        <p className="text-black/70 dark:text-white/70">Équipements haut de gamme et installation selon les normes</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-black dark:text-white mb-2">Accompagnement complet</h4>
                        <p className="text-black/70 dark:text-white/70">De l'étude à la mise en service, en passant par les aides</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-black dark:text-white mb-2">Service après-vente</h4>
                        <p className="text-black/70 dark:text-white/70">Maintenance préventive et dépannage d'urgence</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-black dark:text-white mb-2">Garantie et tranquillité</h4>
                        <p className="text-black/70 dark:text-white/70">Garanties étendues et intervention rapide</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'vision' && (
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-[#03144a] dark:text-white mb-6">
                    L'avenir énergétique que nous construisons
                  </h3>
                  <p className="text-lg text-black/80 dark:text-white/80 leading-relaxed">
                    Nous envisageons un futur où chaque foyer et entreprise bénéficie d'un système énergétique 
                    intelligent, économique et respectueux de l'environnement. Notre vision s'articule autour 
                    de trois piliers fondamentaux.
                  </p>
                  <div className="space-y-6 mt-8">
                    <div className="bg-blue-50 dark:bg-white/5 rounded-xl p-6">
                      <h4 className="text-xl font-semibold text-[#03144a] dark:text-white mb-3">
                        Innovation technologique
                      </h4>
                      <p className="text-black/80 dark:text-white/80">
                        Nous investissons continuellement dans la formation et les technologies émergentes 
                        pour offrir à nos clients les solutions les plus avancées du marché.
                      </p>
                    </div>
                    <div className="bg-green-50 dark:bg-white/5 rounded-xl p-6">
                      <h4 className="text-xl font-semibold text-[#03144a] dark:text-white mb-3">
                        Transition énergétique
                      </h4>
                      <p className="text-black/80 dark:text-white/80">
                        Accompagner nos clients dans leur transition vers des énergies renouvelables, 
                        avec un objectif de réduction significative des émissions de CO₂.
                      </p>
                    </div>
                    <div className="bg-orange-50 dark:bg-white/5 rounded-xl p-6">
                      <h4 className="text-xl font-semibold text-[#03144a] dark:text-white mb-3">
                        Excellence du service
                      </h4>
                      <p className="text-black/80 dark:text-white/80">
                        Maintenir et dépasser les standards de qualité les plus élevés, 
                        tout en conservant une approche humaine et personnalisée.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section Nos Valeurs */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#03144a] dark:text-white mb-6">
              Nos Valeurs
            </h2>
            <div className="w-24 h-1 bg-[#03144a] dark:bg-white mx-auto mb-6"></div>
            <p className="text-xl text-black/80 dark:text-white/80 max-w-3xl mx-auto">
              Ces valeurs guident chacune de nos actions et définissent notre approche unique du métier.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {valeurs.map((valeur, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-50 dark:bg-white/5 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <div className="w-16 h-16 bg-[#03144a] dark:bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">
                        {valeur.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-[#03144a] dark:text-white mb-4">
                      {valeur.title}
                    </h3>
                    <p className="text-black/80 dark:text-white/80 leading-relaxed">
                      {valeur.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Certifications */}
      <section className="py-20 bg-gray-50 dark:bg-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#03144a] dark:text-white mb-6">
              Nos Certifications
            </h2>
            <div className="w-24 h-1 bg-[#03144a] dark:bg-white mx-auto mb-6"></div>
            <p className="text-xl text-black/80 dark:text-white/80 max-w-3xl mx-auto">
              Des certifications qui garantissent la qualité de nos interventions et votre éligibilité aux aides.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {certifications.map((cert, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white dark:bg-black/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <div className="w-20 h-20 bg-[#03144a] dark:bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">
                        {cert.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-[#03144a] dark:text-white mb-4">
                      {cert.title}
                    </h3>
                    <p className="text-black/70 dark:text-white/70 text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Équipe */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#03144a] dark:text-white mb-6">
              Notre Équipe
            </h2>
            <div className="w-24 h-1 bg-[#03144a] dark:bg-white mx-auto mb-6"></div>
            <p className="text-xl text-black/80 dark:text-white/80 max-w-3xl mx-auto">
              Une équipe de passionnés au service de votre confort thermique.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {equipe.map((membre, index) => (
              <div key={index} className="bg-gray-50 dark:bg-white/5 rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 bg-[#03144a] dark:bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#03144a] dark:text-white mb-2">
                    {membre.nom}
                  </h3>
                  <p className="text-lg text-black/70 dark:text-white/70 mb-4">
                    {membre.role}
                  </p>
                  <p className="text-black/80 dark:text-white/80 leading-relaxed max-w-2xl mx-auto">
                    {membre.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {membre.specialites.map((specialite, idx) => (
                    <div key={idx} className="bg-white dark:bg-black/20 rounded-xl p-4 text-center shadow-sm">
                      <span className="text-sm font-medium text-[#03144a] dark:text-white">
                        {specialite}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section className="py-20 bg-[#03144a] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Motifs décoratifs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/10 rounded-full translate-y-24 -translate-x-24"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Prêt à faire équipe avec ClimGO ?
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Parlons de votre projet. Nos experts vous accompagnent de A à Z pour votre confort thermique.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center group">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Appelez-nous</h3>
                <p className="text-blue-100">07 66 46 00 08</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Écrivez-nous</h3>
                <p className="text-blue-100">contact@climgo.fr</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Notre zone</h3>
                <p className="text-blue-100">Gironde & Nord Landes</p>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center bg-white text-[#03144a] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Demander un devis gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
