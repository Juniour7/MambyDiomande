import React from 'react';
import { Play, ExternalLink, Facebook, Linkedin, Instagram, Twitter, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Accueil = () => {
  const interviews = [
    {
      title: "MAMBY DIOMANDÉ entre la production de concert, Les majors et le SIMA",
      url: "https://www.youtube.com/watch?v=IuaTpzfWnIQ&t=15s",
      platform: "YouTube",
      thumbnail: "/im-1.png"
    },
    {
      title: "Interview avec Investir au Pays",
      url: "https://www.youtube.com/watch?v=gUevMYk2X-Q",
      platform: "YouTube",
      thumbnail: "/im-2.png"
    },
    {
      title: "Mamby discussion avec le Président Macron",
      url: "https://www.instagram.com/p/DI6tZpso9uV/",
      platform: "Instagram",
      thumbnail: "/im-3.png"
    },
    {
      title: "Interview sur Jeune Afrique",
      url: "https://www.jeuneafrique.com/auteurs/m-diomande/",
      platform: "Jeune Afrique",
      thumbnail: "/im-4.png"
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/jo.le.rapide7', color: 'hover:text-blue-500' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://ci.linkedin.com/in/mamby-laye-diomand', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/mambyd', color: 'hover:text-pink-500' },
    { name: 'Twitter', icon: Twitter, url: 'https://x.com/layediom', color: 'hover:text-blue-400' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('/Mamby-Diomande-scaled.jpg')`
          }}
        ></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent animate-pulse">
            MAMBY DIOMANDÉ
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            Entrepreneur • Expert ICC • Visionnaire
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Structurer et professionnaliser les Industries Culturelles et Créatives en Afrique francophone
          </p>
          
          {/* Latest Apparition */}
          <div className="mb-8">
            <h3 className="text-yellow-400 text-sm font-semibold mb-4 uppercase tracking-wider">Dernière Apparition</h3>
            <a 
              href="https://www.facebook.com/share/v/17FeKTMNGB/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 group"
            >
              <Play size={20} className="text-yellow-400 group-hover:scale-110 transition-transform" />
              <span className="text-white">Voir sur Facebook</span>
              <ExternalLink size={16} className="text-gray-400" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Most Popular Interviews Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Interviews Populaires
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Découvrez les moments forts et les insights de Mamby Diomandé
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {interviews.map((interview, index) => (
              <div 
                key={index}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-400/20"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={interview.thumbnail}
                    alt={interview.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-yellow-400/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play size={24} className="text-black ml-1" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="text-yellow-400 text-xs font-semibold mb-2 uppercase tracking-wider">
                    {interview.platform}
                  </div>
                  <h3 className="text-white font-semibold mb-4 line-clamp-3 group-hover:text-yellow-400 transition-colors">
                    {interview.title}
                  </h3>
                  <a 
                    href={interview.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                  >
                    <span>Regarder</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Suivez-moi
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Restez connecté pour les dernières actualités et insights
          </p>

          <div className="flex justify-center space-x-8">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl hover:bg-gray-700/50 transition-all duration-300 hover:transform hover:scale-110 ${social.color}`}
                >
                  <IconComponent size={32} className="transition-all duration-300" />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/90 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                      {social.name}
                    </div>
                  </div>
                </a>
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

export default Accueil;