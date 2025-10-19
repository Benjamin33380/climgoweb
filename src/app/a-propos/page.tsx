'use client';

import { useState } from 'react';
import { Users, Award, Clock, MapPin, Phone, Mail, CheckCircle, Star, Shield, Wrench, Settings, ThermometerSun, Camera } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function AProposPage() {
  const [activeTab, setActiveTab] = useState('histoire');

  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      number: "50+",
      label: "Clients satisfaits",
      description: "Particuliers et professionnels"
    },
    {
      icon: <Award className="w-6 h-6" />,
      number: "10+",
      label: "Années d'expérience",
      description: "Dans le chauffage et climatisation"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      number: "48",
      label: "Communes desservies",
      description: "En Gironde et Nord des Landes"
    },
    {
      icon: <Star className="w-6 h-6" />,
      number: "5/5",
      label: "Satisfaction client",
      description: "Note moyenne Google"
    }
  ];

  const certifications = [
    {
      title: "Certification RGE",
      description: "Reconnu Garant de l'Environnement pour vos aides",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "QualiPAC",
      description: "Qualification pompe à chaleur air/eau et air/air",
      icon: <ThermometerSun className="w-8 h-8" />
    },
    {
      title: "Qualibat",
      description: "Certification qualité pour les travaux du bâtiment",
      icon: <Settings className="w-8 h-8" />
    },
    {
      title: "Dépannage Urgent",
      description: "Intervention 7j/7 pour vos urgences chauffage",
      icon: <Wrench className="w-8 h-8" />
    }
  ];

  const valeurs = [
    {
      title: "Qualité",
      description: "Nous sélectionnons uniquement des équipements haut de gamme et utilisons des techniques d'installation rigoureuses pour garantir la durabilité de vos installations.",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Transparence",
      description: "Devis détaillés, explications claires, pas de surprise. Nous vous accompagnons à chaque étape avec honnêteté et pédagogie.",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Réactivité",
      description: "Devis sous 48h, intervention rapide, dépannage d'urgence. Votre confort ne peut pas attendre.",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Proximité",
      description: "Une entreprise locale qui connaît le territoire. Nous sommes là pour vous, avant, pendant et après l'installation.",
      icon: <MapPin className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-background">
      {/* Header Fluide */}
      <div className="bg-gray-50 dark:bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge doux */}
            <div className="inline-flex items-center px-4 py-2 bg-black/5 dark:bg-white/5 text-black dark:text-white rounded-full text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-black/40 dark:bg-white/40 rounded-full mr-2"></span>
              À propos de ClimGO
            </div>
            
            {/* Titre principal */}
            <h1 className="text-4xl md:text-6xl font-light text-black dark:text-white mb-8 leading-tight">
              Votre Expert en 
              <span className="block font-normal">
                Chauffage & Climatisation
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-xl text-black/70 dark:text-white/70 leading-relaxed mb-12 max-w-3xl mx-auto">
              Depuis plus de 10 ans, <strong className="text-black dark:text-white">ClimGO</strong> accompagne particuliers et professionnels en Gironde et dans le Nord des Landes. 
              Notre expertise : installation, <Link href="/maintenance" className="text-black dark:text-white font-medium hover:opacity-70 transition-opacity">maintenance</Link> et dépannage de <Link href="/pompe-a-chaleur" className="text-black dark:text-white font-medium hover:opacity-70 transition-opacity">pompes à chaleur</Link>, <Link href="/climatisation" className="text-black dark:text-white font-medium hover:opacity-70 transition-opacity">climatisation</Link> et systèmes de <Link href="/air+eau" className="text-black dark:text-white font-medium hover:opacity-70 transition-opacity">chauffage</Link>.
            </p>
          </div>
        </div>
      </div>

      {/* Section Stats Fluide */}
      <section className="py-20 bg-black/[0.02] dark:bg-white/[0.02]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-black dark:text-white mb-4">
              ClimGO en Chiffres
            </h2>
            <p className="text-black/60 dark:text-white/60 text-lg">Des résultats qui parlent d'eux-mêmes</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-black/5 dark:bg-white/5 rounded-full mb-6 group-hover:bg-black/10 dark:group-hover:bg-white/10 transition-all duration-300">
                  <div className="text-black/60 dark:text-white/60 group-hover:text-black dark:group-hover:text-white transition-colors">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl font-light text-black dark:text-white mb-3">
                  {stat.number}
                </div>
                <h3 className="text-sm font-medium text-black dark:text-white mb-2 uppercase tracking-wider">
                  {stat.label}
                </h3>
                <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Histoire Fluide */}
      <section className="py-20 bg-gray-50 dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Colonne Texte */}
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-black/5 dark:bg-white/5 text-black dark:text-white rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-black/40 dark:bg-white/40 rounded-full mr-2"></span>
                Notre Histoire
              </div>
              
              <h2 className="text-3xl md:text-4xl font-light text-black dark:text-white">
                Comment tout a commencé
              </h2>
              
              <div className="space-y-6 text-lg text-black/70 dark:text-white/70 leading-relaxed">
                <p>
                  <span className="text-black dark:text-white font-medium">ClimGO est née d'une passion</span> pour les technologies énergétiques et d'un constat simple : 
                  les particuliers et professionnels méritent un service de qualité, transparent et accessible 
                  pour leurs installations de <Link href="/air+eau" className="text-black dark:text-white font-medium hover:opacity-70 transition-opacity">chauffage</Link> et <Link href="/climatisation" className="text-black dark:text-white font-medium hover:opacity-70 transition-opacity">climatisation</Link>.
                </p>
                <p>
                  Depuis nos débuts, nous avons fait le choix de la spécialisation et de l'excellence. 
                  Plutôt que de disperser notre expertise, nous nous concentrons sur ce que nous savons 
                  faire de mieux : les <Link href="/pompe-a-chaleur" className="text-black dark:text-white font-medium hover:opacity-70 transition-opacity">pompes à chaleur</Link>, la <Link href="/climatisation" className="text-black dark:text-white font-medium hover:opacity-70 transition-opacity">climatisation</Link> et les systèmes de <Link href="/air+eau" className="text-black dark:text-white font-medium hover:opacity-70 transition-opacity">chauffage</Link> performants.
                </p>
                <p>
                  <span className="text-black dark:text-white font-medium">Aujourd'hui, avec plus de 50 clients satisfaits</span> et une présence sur 48 communes, 
                  ClimGO est devenu un acteur incontournable du secteur en Gironde et dans le Nord des Landes.
                </p>
              </div>
            </div>
            
            {/* Colonne Photo */}
            <div className="relative">
              <div className="aspect-[4/3] bg-black/[0.02] dark:bg-white/[0.02] rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-black/60 dark:text-white/60">
                    <Camera className="w-16 h-16 mx-auto mb-4 opacity-40" />
                    <p className="text-lg font-medium text-black dark:text-white">Photo à venir</p>
                    <p className="text-sm">Benjamin et son camion ClimGO</p>
                  </div>
                </div>
                
                {/* Badge sur la photo */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-xl p-4">
                    <p className="text-sm font-medium text-black dark:text-white">
                      📸 Benjamin Cardoso, fondateur de ClimGO
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Section Valeurs Fluide */}
      <section className="py-20 bg-black/[0.02] dark:bg-white/[0.02]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-black dark:text-white mb-4">
              Nos Valeurs
            </h2>
            <p className="text-black/60 dark:text-white/60 text-lg">Ce qui nous guide au quotidien</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {valeurs.map((valeur, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-black/5 dark:bg-white/5 rounded-2xl mb-6 group-hover:bg-black/10 dark:group-hover:bg-white/10 transition-all duration-300">
                  <div className="text-black/60 dark:text-white/60 group-hover:text-black dark:group-hover:text-white transition-colors">
                    {valeur.icon}
                  </div>
                </div>
                <h3 className="text-xl font-medium text-black dark:text-white mb-4">
                  {valeur.title}
                </h3>
                <p className="text-black/70 dark:text-white/70 leading-relaxed">
                  {valeur.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Certifications Fluide */}
      <section className="py-20 bg-gray-50 dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-black dark:text-white mb-4">
              Nos Certifications
            </h2>
            <p className="text-black/60 dark:text-white/60 text-lg">Votre garantie qualité</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-black/5 dark:bg-white/5 rounded-2xl mb-6 group-hover:bg-black/10 dark:group-hover:bg-white/10 transition-all duration-300">
                  <div className="text-black/60 dark:text-white/60 group-hover:text-black dark:group-hover:text-white transition-colors">
                    {cert.icon}
                  </div>
                </div>
                <h3 className="text-lg font-medium text-black dark:text-white mb-4">
                  {cert.title}
                </h3>
                <p className="text-sm text-black/70 dark:text-white/70 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Fluide */}
      <section className="py-24 bg-black/[0.02] dark:bg-white/[0.02]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-light text-black dark:text-white mb-8 leading-tight">
              Prêt à découvrir l'excellence ClimGO ?
            </h2>
            <p className="text-xl text-black/70 dark:text-white/70 mb-12 leading-relaxed max-w-2xl mx-auto">
              Rejoignez nos 50+ clients satisfaits et bénéficiez d'une expertise reconnue 
              en Gironde et dans le Nord des Landes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center bg-black dark:bg-white text-white dark:text-black px-10 py-5 rounded-2xl font-medium text-lg hover:bg-black/90 dark:hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5 mr-3" />
                Demander un devis gratuit
              </Link>
              
              <a 
                href="tel:0766460008" 
                className="inline-flex items-center justify-center bg-black/5 dark:bg-white/5 text-black dark:text-white px-10 py-5 rounded-2xl font-medium text-lg hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-3" />
                07 66 46 00 08
              </a>
            </div>
            
            <div className="flex justify-center items-center text-black/60 dark:text-white/60">
              <MapPin className="w-4 h-4 mr-2" />
              <Link href="/zones-interventions" className="hover:text-black dark:hover:text-white transition-colors">
                Découvrir notre zone d'intervention
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
