import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle, Building, Users, Handshake } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    partnershipType: '',
    budget: '',
    message: '',
    phone: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const partnershipTypes = [
    "Événement Musical",
    "Partenariat de Marque",
    "Formation & Consulting",
    "Production de Concert",
    "Développement d'Artiste",
    "Autre"
  ];

  const budgetRanges = [
    "< 10 000 €",
    "10 000 € - 50 000 €",
    "50 000 € - 100 000 €",
    "100 000 € - 500 000 €",
    "> 500 000 €"
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-white to-yellow-400 bg-clip-text text-transparent">
            Contact
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Collaborons ensemble pour développer les Industries Culturelles et Créatives en Afrique
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Parlons Business
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  Que vous soyez une marque cherchant un partenariat, un artiste en quête de développement, ou une organisation souhaitant structurer ses activités culturelles, je suis là pour vous accompagner.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <Phone size={24} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Téléphone</h3>
                    <p className="text-gray-400">+225 09 39 49 50</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Email</h3>
                    <p className="text-gray-400">mamby586@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-white font-bold text-xl mb-6 flex items-center">
                  <Handshake size={24} className="text-yellow-400 mr-3" />
                  Services Proposés
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Conseil stratégique ICC",
                    "Production d'événements",
                    "Gestion d'artistes",
                    "Partenariats de marque",
                    "Formation professionnelle",
                    "Développement de projets"
                  ].map((service, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-yellow-400" />
                      <span className="text-gray-300 text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Demande de Partenariat
              </h2>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle size={64} className="text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Message Envoyé!</h3>
                  <p className="text-gray-400">Nous vous recontacterons sous 48h.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 font-semibold mb-2">
                        Nom Complet *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                        placeholder="Votre nom"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 font-semibold mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 font-semibold mb-2">
                        Entreprise
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                        placeholder="Nom de votre entreprise"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 font-semibold mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                        placeholder="+225 XX XX XX XX"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 font-semibold mb-2">
                        Type de Partenariat *
                      </label>
                      <select
                        name="partnershipType"
                        value={formData.partnershipType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-yellow-400 transition-colors"
                      >
                        <option value="">Sélectionnez un type</option>
                        {partnershipTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-300 font-semibold mb-2">
                        Budget Estimé
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-yellow-400 transition-colors"
                      >
                        <option value="">Sélectionnez une fourchette</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                      placeholder="Décrivez votre projet et vos objectifs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-4 px-8 rounded-xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 flex items-center justify-center space-x-2 hover:transform hover:scale-105"
                  >
                    <Send size={20} />
                    <span>Envoyer la Demande</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Prêt à Transformer Votre Vision en Réalité?
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Avec plus de 10 ans d'expérience dans les ICC, je vous accompagne dans la réalisation de vos projets les plus ambitieux.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building size={32} className="text-black" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Entreprises</h3>
                <p className="text-gray-400 text-sm">Partenariats stratégiques et développement commercial</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={32} className="text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Artistes</h3>
                <p className="text-gray-400 text-sm">Gestion de carrière et développement artistique</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake size={32} className="text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Institutions</h3>
                <p className="text-gray-400 text-sm">Consulting et structuration des ICC</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;