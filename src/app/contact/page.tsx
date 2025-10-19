'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Star, User, MessageSquare, Building, Flame, Droplet, Settings, FileText, Home, AirVent } from 'lucide-react';
import { SimpleWrapper } from '@/components/ui/SimpleWrapper';
import LazyGoogleMaps from '@/components/LazyGoogleMaps';

export default function ContactPage() {
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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-background text-[#03144A] dark:text-white">
      
      {/* Hero Section */}
      <section className="relative min-h-screen pt-24 md:pt-0 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gray-50 dark:bg-background" />
        
        {/* Background effects */}
        <div className="absolute w-2 h-2 bg-[#03144a] dark:bg-white rounded-full top-10 left-10" style={{ animation: 'float 4s ease-in-out infinite' }} />
        <div className="absolute w-2 h-2 bg-[#03144a] dark:bg-white rounded-full top-1/3 left-1/2" style={{ animation: 'float 4s ease-in-out infinite' }} />
        <div className="absolute w-2 h-2 bg-[#03144a] dark:bg-white rounded-full bottom-1/3 right-20" style={{ animation: 'float 4s ease-in-out infinite' }} />

        {/* Accent particles */}
        <div className="absolute w-2 h-2 bg-[#F97316] rounded-full top-20 right-10" style={{ animation: 'float 4s ease-in-out infinite' }} />
        <div className="absolute w-2 h-2 bg-[#F97316] rounded-full bottom-10 left-1/3" style={{ animation: 'float 4s ease-in-out infinite' }} />
        <div className="absolute w-2 h-2 bg-[#F97316] rounded-full top-1/2 right-1/4" style={{ animation: 'float 4s ease-in-out infinite' }} />

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F97316] rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gray-50 dark:bg-background rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-6 py-3 rounded-full border border-[#03144A] dark:border-white/20 text-sm tracking-widest uppercase mb-8 text-[#03144A] dark:text-white bg-gray-50 dark:bg-background backdrop-blur-sm">
            <div className="w-2 h-2 bg-[#F97316] rounded-full mr-3 animate-pulse" />
            Parlons de votre projet
          </div>
          
          <SimpleWrapper>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extralight tracking-wide mb-8">
              <span className="bg-gradient-to-r from-[#F97316] via-[#03144A] to-[#F97316] dark:from-[#FB923C] dark:via-white dark:to-[#FB923C] bg-clip-text text-transparent">
                Contactez
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#03144A] via-[#F97316] to-[#03144A] dark:from-white dark:via-[#FB923C] dark:to-white bg-clip-text text-transparent">
                ClimGO
              </span>
            </h1>
          </SimpleWrapper>
          
          <SimpleWrapper>
            <p className="text-xl md:text-2xl text-[#03144A] dark:text-white mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Des solutions thermiques sur mesure avec un accompagnement personnalisé. Votre confort, notre expertise.
            </p>
          </SimpleWrapper>
          
          {/* Stats rapides */}
          <SimpleWrapper>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
              <div className="text-center bg-gray-50 dark:bg-background backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-600/30">
                <div className="text-3xl font-bold text-[#03144a] dark:text-white mb-2">48h</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">Délai de réponse moyen</div>
              </div>
              <div className="text-center bg-gray-50 dark:bg-background backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-600/30">
                <div className="text-3xl font-bold text-[#03144a] dark:text-white mb-2">100%</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">Devis gratuits</div>
              </div>
              <div className="text-center bg-gray-50 dark:bg-background backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-600/30">
                <div className="text-3xl font-bold text-[#03144a] dark:text-white mb-2">10+</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">Années d'expérience</div>
              </div>
            </div>
          </SimpleWrapper>
        </div>
      </section>

      {/* Section principale */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Colonne gauche - Formulaire */}
            <div className="order-2 lg:order-1">
              <SimpleWrapper>
                <div className="bg-gray-50 dark:bg-background backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-600/30">
                  <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-light mb-4 text-[#03144A] dark:text-white">
                      Démarrons votre projet
                    </h2>
                    <div className="w-24 h-1 bg-[#F97316] mx-0 mb-6"></div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Remplissez ce formulaire et recevez une réponse personnalisée sous 48h. 
                      Nos experts analysent votre demande pour vous proposer la meilleure solution.
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Message de statut */}
                    {submitStatus.type && (
                      <div className={`p-4 rounded-xl border ${
                        submitStatus.type === 'success' 
                          ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200' 
                          : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200'
                      }`}>
                        <p className="text-sm font-medium">{submitStatus.message}</p>
                      </div>
                    )}
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[#03144A] dark:text-white mb-2">
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
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white/50 dark:bg-black/50 text-[#03144A] dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-[#F97316] focus:border-transparent transition-all duration-300"
                            placeholder="Votre nom et prénom"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-[#03144A] dark:text-white mb-2">
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
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white/50 dark:bg-black/50 text-[#03144A] dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-[#F97316] focus:border-transparent transition-all duration-300"
                            placeholder="06 12 34 56 78"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#03144A] dark:text-white mb-2">
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
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white/50 dark:bg-black/50 text-[#03144A] dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-[#F97316] focus:border-transparent transition-all duration-300"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="address" className="block text-sm font-medium text-[#03144A] dark:text-white mb-2">
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
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white/50 dark:bg-black/50 text-[#03144A] dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-[#F97316] focus:border-transparent transition-all duration-300"
                            placeholder="Votre adresse"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="postalCode" className="block text-sm font-medium text-[#03144A] dark:text-white mb-2">
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
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white/50 dark:bg-black/50 text-[#03144A] dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-[#F97316] focus:border-transparent transition-all duration-300"
                            placeholder="33000"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-[#03144A] dark:text-white mb-2">
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
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white/50 dark:bg-black/50 text-[#03144A] dark:text-white focus:ring-2 focus:ring-[#F97316] focus:border-transparent transition-all duration-300"
                        >
                          <option value="">Sélectionnez un service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[#03144A] dark:text-white mb-2">
                        Votre message *
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white/50 dark:bg-black/50 text-[#03144A] dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-[#F97316] focus:border-transparent transition-all duration-300 resize-none"
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
              </SimpleWrapper>
            </div>

            {/* Colonne droite - Informations */}
            <div className="order-1 lg:order-2 space-y-8">
              
              {/* Contact direct */}
              <SimpleWrapper>
                <div className="bg-gradient-to-br from-[#03144A] to-[#F97316] rounded-3xl p-8 text-white shadow-xl !bg-opacity-100">
                  <h3 className="text-2xl font-light mb-6 flex items-center text-white">
                    <div className="w-1 h-6 bg-white rounded-full mr-3"></div>
                    Besoin d'une réponse immédiate ?
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-white/20 rounded-full p-3 backdrop-blur-sm">
                        <Phone className="w-6 h-6 text-white" />
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
                        <Mail className="w-6 h-6 text-white" />
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
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white/90 text-sm">Notre localisation</p>
                        <span className="text-lg font-medium text-white">28 rue de Cantelaude, 33380 Marcheprime</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="bg-white/20 rounded-full p-3 backdrop-blur-sm">
                        <Clock className="w-6 h-6 text-white" />
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
                      <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span>Appel d'urgence</span>
                    </Link>
                  </div>
                </div>
              </SimpleWrapper>

              {/* Note Google */}
              <SimpleWrapper>
                <div className="bg-gray-50 dark:bg-background backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-600/30">
                  <h3 className="text-xl font-medium text-[#03144A] dark:text-white mb-6 flex items-center">
                    <div className="w-1 h-6 bg-gradient-to-b from-[#F97316] to-[#03144A] rounded-full mr-3"></div>
                    Nos clients nous font confiance
                  </h3>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <span className="text-2xl font-bold text-[#03144A] dark:text-white">5/5</span>
                    <span className="text-gray-600 dark:text-gray-300">(25 avis Google)</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 italic">
                    "Excellent travail pour l'installation de notre pompe à chaleur. Très satisfait du résultat et du service après-vente."
                  </p>
                </div>
              </SimpleWrapper>

              {/* Services */}
              <SimpleWrapper>
                <div className="bg-gray-50 dark:bg-background backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-600/30">
                  <h3 className="text-xl font-medium text-[#03144A] dark:text-white mb-6 flex items-center">
                    <div className="w-1 h-6 bg-gradient-to-b from-[#03144A] to-[#F97316] rounded-full mr-3"></div>
                    Nos domaines d'expertise
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: <Flame className="w-6 h-6" />, title: "Chauffage", desc: "Installation et maintenance de systèmes performants", hoverColor: "group-hover:text-[#FF8C00]", link: "/air+eau" },
                      { icon: <AirVent className="w-6 h-6" />, title: "Climatisation", desc: "Solutions de climatisation adaptées", hoverColor: "group-hover:text-[#2563EB]", link: "/climatisation" },
                      { icon: <Droplet className="w-6 h-6" />, title: "Eau chaude sanitaire", desc: "Systèmes d'eau chaude efficaces", hoverColor: "group-hover:text-[#0EA5E9]", link: "/eau-chaude-sanitaire" },
                      { icon: <Settings className="w-6 h-6" />, title: "Pompe à chaleur", desc: "Pompes à chaleur air-air et air-eau", hoverColor: "group-hover:text-[#8B5CF6]", link: "/pompe-a-chaleur" },
                      { icon: <FileText className="w-6 h-6" />, title: "Maintenance", desc: "Entretien professionnel de vos équipements", hoverColor: "group-hover:text-[#10B981]", link: "/maintenance" }
                    ].map((service, index) => (
                      <Link key={index} href={service.link} className="text-center p-4 rounded-2xl bg-gray-50 dark:bg-black/20 hover:bg-[#03144a]/5 dark:hover:bg-white/5 transition-colors group cursor-pointer">
                        <div className={`flex justify-center mb-3 text-[#03144a] dark:text-white ${service.hoverColor} transition-colors`}>
                          {service.icon}
                        </div>
                        <div className={`font-semibold text-[#03144a] dark:text-white text-sm mb-1 ${service.hoverColor} transition-colors`}>
                          {service.title}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{service.desc}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </SimpleWrapper>
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
      `}</style>
    </div>
  );
}
