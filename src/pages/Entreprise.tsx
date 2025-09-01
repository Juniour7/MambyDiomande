import React from 'react';
import { Building2, Users, Award, Globe, Heart, Handshake, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Entreprise = () => {
  const businesses = [
    {
      title: "Salon des industries musicales de l'Afrique francophone (SIMA)",
      role: "Fondateur",
      description: "Plateforme dédiée à la promotion, la formation et aux opportunités d'affaires dans l'écosystème musical africain.",
      icon: Building2,
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Société de Développement et d'Intermédiation en Côte d'Ivoire (SDICI)",
      role: "Associé-Gérant",
      description: "Formalisation du secteur des ICC en Côte d'Ivoire pour créer un environnement structuré et durable.",
      icon: Globe,
      color: "from-blue-400 to-purple-500"
    },
    {
      title: "Universal Music Africa",
      role: "Live & Brand West Africa Director",
      description: "Direction des activités live et brand pour l'Afrique de l'Ouest et les pays francophones.",
      icon: Award,
      color: "from-green-400 to-blue-500"
    },
    {
      title: "MNGRS.AI",
      role: "Board Member",
      description: "Le premier manager d'artiste alimenté par l'IA, révolutionnant la gestion artistique.",
      icon: Users,
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "LEAYA",
      role: "Board Member",
      description: "L'application qui connecte l'Afrique, favorisant les échanges et collaborations continentales.",
      icon: Handshake,
      color: "from-red-400 to-yellow-500"
    }
  ];

  const achievements = [
    "Responsable de la programmation artistique du CHAN 2023 et de la CAN 2023",
    "Partenariats avec Pernod Ricard, Castel Group, Orange, TotalEnergies, MTN",
    "Organisation de concerts pour Burna Boy, Dadju, Fally Ipupa",
    "Ancien Directeur commercial d'Universal Music Africa"
  ];

  const socialCauses = [
    {
      title: "Formation des Jeunes Talents",
      description: "Boost by SIMA - Programme de formation certifiante pour les jeunes talents africains",
      icon: Users,
      impact: "500+ jeunes formés"
    },
    {
      title: "Structuration des ICC",
      description: "Professionnalisation du secteur des Industries Culturelles et Créatives en Afrique",
      icon: Building2,
      impact: "10+ projets lancés"
    },
    {
      title: "Promotion de la Culture Africaine",
      description: "Valorisation et promotion des artistes et de la culture africaine à l'international",
      icon: Globe,
      impact: "Rayonnement continental"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-white to-yellow-400 bg-clip-text text-transparent">
            Entreprise
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Une vision entrepreneuriale au service du développement des Industries Culturelles et Créatives en Afrique
          </p>
        </div>
      </section>

      {/* Businesses Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Mes Entreprises & Responsabilités
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {businesses.map((business, index) => {
              const IconComponent = business.icon;
              return (
                <div 
                  key={index}
                  className="group relative bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 hover:bg-gray-700/30 transition-all duration-500 hover:transform hover:scale-105 border border-gray-700/50 hover:border-yellow-400/30"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${business.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={32} className="text-white" />
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">
                      {business.role}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                    {business.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {business.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Réalisations Notables
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl hover:bg-gray-700/30 transition-all duration-300 border border-gray-700/50 hover:border-yellow-400/30"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Award size={16} className="text-black" />
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {achievement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Causes Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Impact Social
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Contribuer au développement et à l'émancipation de la jeunesse africaine
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialCauses.map((cause, index) => {
              const IconComponent = cause.icon;
              return (
                <div 
                  key={index}
                  className="text-center group hover:transform hover:scale-105 transition-all duration-500"
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <IconComponent size={40} className="text-black" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                      <Heart size={16} className="text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                    {cause.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {cause.description}
                  </p>
                  
                  <div className="inline-block bg-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold">
                    {cause.impact}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-500">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-white to-yellow-400 bg-clip-text text-transparent">
                Prêt à Transformer Votre Vision en Réalité?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                Avec plus de 10 ans d'expérience dans les ICC, je vous accompagne dans la réalisation de vos projets les plus ambitieux.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-4 px-8 rounded-xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/25"
              >
                <span>Contactez-moi</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Entreprise;