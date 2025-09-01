import React from 'react';
import { GraduationCap, Briefcase, Star, Target, Users, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Biographie = () => {
  const education = [
    { school: "HEC Paris", degree: "Formation Executive", icon: GraduationCap },
    { school: "INP-HB", degree: "Diplômé", icon: GraduationCap }
  ];

  const timeline = [
    {
      year: "2023",
      title: "Responsable Programmation Artistique",
      description: "CHAN 2023 et CAN 2023 - Animation des stades et booking des artistes",
      icon: Star
    },
    {
      year: "2020+",
      title: "Associé-Gérant SDICI",
      description: "Société de Développement et d'Intermédiation en Côte d'Ivoire",
      icon: Briefcase
    },
    {
      year: "2018+",
      title: "Fondateur du SIMA",
      description: "Salon des Industries Musicales d'Afrique Francophone",
      icon: Target
    },
    {
      year: "2015+",
      title: "Universal Music Africa",
      description: "Directeur Live & Brand et Directeur commercial - Afrique Francophone",
      icon: Globe
    }
  ];

  const expertise = [
    "Production d'événements culturels",
    "Gestion d'artistes",
    "Développement des ICC",
    "Partenariats stratégiques",
    "Formation professionnelle",
    "Innovation dans la musique"
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-orange-500/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-white to-yellow-400 bg-clip-text text-transparent">
                Biographie
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Un parcours d'excellence au service des Industries Culturelles et Créatives
              </p>
              
              {/* Education */}
              <div className="space-y-4">
                <h3 className="text-yellow-400 font-semibold text-lg mb-4">Formation</h3>
                {education.map((edu, index) => {
                  const IconComponent = edu.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-gray-800/30 rounded-xl">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                        <IconComponent size={24} className="text-black" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{edu.school}</h4>
                        <p className="text-gray-400">{edu.degree}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
                <img 
                  src="/Mamby-Diomande-Ayana-2.png"
                  alt="Mamby Diomandé"
                  className="w-full h-96 object-contain rounded-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography Text */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/50">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Parcours Professionnel
              </h2>
              
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed mb-6">
                  Diplômé de l'INP-HB et HEC Paris, Mamby Diomandé est un entrepreneur et expert reconnu dans les Industries Culturelles et Créatives (ICC), avec plus de 10 ans d'expérience en production d'événements culturels et en gestion d'artistes en Afrique francophone.
                </p>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  Il a initié plusieurs projets stratégiques visant à structurer et professionnaliser le secteur des ICC en Côte d'Ivoire et en Afrique. Il est notamment le fondateur du Salon des Industries Musicales d'Afrique Francophone (SIMA), une plateforme dédiée à la promotion, la formation et aux opportunités d'affaires dans l'écosystème musical.
                </p>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  Dans cette continuité, il a lancé Boost by SIMA, un programme de formation certifiante destiné aux jeunes talents africains. Actuellement, il est Associé-Gérant de la Société de Développement et d'Intermédiation en Côte d'Ivoire (SDICI).
                </p>
                
                <p className="text-gray-300 leading-relaxed">
                  Sa vision est de formaliser le secteur des ICC en Côte d'Ivoire, afin de créer un environnement structuré, durable et équitable, propice à l'émergence de nouveaux talents, à l'innovation et à la croissance économique des industries créatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Parcours Chronologique
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 to-orange-500"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="relative flex items-start space-x-8">
                      <div className="relative z-10 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                        <IconComponent size={24} className="text-black" />
                      </div>
                      
                      <div className="flex-1 bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-300">
                        <div className="text-yellow-400 font-bold text-lg mb-2">
                          {item.year}
                        </div>
                        <h3 className="text-white font-bold text-xl mb-3">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Domaines d'Expertise
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {expertise.map((skill, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl hover:bg-gray-700/30 transition-all duration-300 hover:transform hover:scale-105 border border-gray-700/50 hover:border-yellow-400/30"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={24} className="text-black" />
                </div>
                <p className="text-white font-semibold">
                  {skill}
                </p>
              </div>
            ))}
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

export default Biographie;