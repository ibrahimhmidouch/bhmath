'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

// AdSense Ad Component
function AdSenseAd({ adSlot, className = '' }) {
  const adRef = useRef(null);

  useEffect(() => {
    if (adRef.current && window.adsbygoogle && !adRef.current.hasAttribute('data-adsbygoogle-status')) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error('AdSense error:', err);
      }
    }
  }, []);

  return (
    <div className={className}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-3523606019399197"
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}

const pricingPlans = [
  {
    name: 'Gratuit',
    price: '0 DH',
    features: [
      'Accès aux cours de base',
      'Exercices limités',
      'Ressources gratuites',
      'Support communautaire'
    ],
    buttonText: 'Commencer',
    buttonLink: '/course',
    highlighted: false,
    isSubscription: false
  },
  {
    name: 'Premium',
    price: '199 DH',
    period: '/mois',
    features: [
      'Tous les cours premium',
      'Exercices illimités',
      'Devoirs corrigés',
      'Support WhatsApp prioritaire',
      'Accès aux concours',
      'Résumés exclusifs'
    ],
    buttonText: 'S\'abonner',
    buttonLink: '#',
    highlighted: true,
    isSubscription: true
  },
  {
    name: 'Annuel',
    price: '1990 DH',
    period: '/an',
    features: [
      'Tous les avantages Premium',
      '2 mois gratuits',
      'Accès aux archives',
      'Support WhatsApp 24/7',
      'Cours particuliers (2h/mois)',
      'Résumés personnalisés'
    ],
    buttonText: 'S\'abonner',
    buttonLink: '#',
    highlighted: false,
    isSubscription: true
  }
];

export default function HomePage() {

  const generateWhatsAppMessage = (planName, price, period) => {
    const message = `Bonjour ! Je souhaite m'abonner au forfait ${planName} de BHMaths au prix de ${price}${period}. Pouvez-vous me donner plus d'informations sur le processus d'abonnement ?`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/212629504107?text=${encodedMessage}`;
  };

  const handleSubscriptionClick = (plan) => {
    if (plan.isSubscription) {
      const whatsappUrl = generateWhatsAppMessage(plan.name, plan.price, plan.period);
      window.open(whatsappUrl, '_blank');
    } else {
      // For non-subscription plans, use the regular link
      window.location.href = plan.buttonLink;
    }
  };

  return (
    <>
      <main className="py-12">
        <div className="bg-gradient-to-r from-orange-200 to-orange-400 text-black rounded-2xl py-16 mb-12 mx-4">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Bienvenue sur BHMaths
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-4">
              La plateforme éducative de référence pour l'apprentissage des mathématiques au Maroc
            </p>
            <p className="text-base md:text-lg opacity-80 max-w-2xl mx-auto">
              Cours complets, exercices corrigés, devoirs et ressources pédagogiques pour réussir vos examens du collège au baccalauréat
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          {/* AdSense Banner Ad - Top */}
          <AdSenseAd adSlot="1234567890" className="mb-8 flex justify-center" />

          {/* Features Section */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Cours Complets</h3>
                <p className="text-gray-600">
                  Accédez à des cours détaillés couvrant tous les chapitres du programme officiel marocain
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Exercices Corrigés</h3>
                <p className="text-gray-600">
                  Pratiquez avec des milliers d'exercices progressifs et leurs solutions détaillées
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Devoirs Corrigés</h3>
                <p className="text-gray-600">
                  Consultez des devoirs surveillés avec corrections complètes pour vous préparer aux examens
                </p>
              </div>
            </div>
          </div>

          {/* Education Levels Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Parcours Éducatif Complet
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Des ressources adaptées à chaque niveau, du collège jusqu'au baccalauréat, pour accompagner votre progression
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* College Section */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="bg-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">C</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Collège</h2>
                  <p className="text-sm text-gray-600">Cycle secondaire collégial</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Fondations solides en mathématiques avec des cours adaptés aux programmes du collège marocain. 
                Préparez-vous efficacement pour le passage au lycée.
              </p>
              <div className="space-y-4">
                <Link 
                  href="/college/class1"
                  className="block p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors border-l-4 border-orange-500"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">1ère année collégiale</h3>
                  <p className="text-sm text-gray-600">Nombres, géométrie, statistiques et probabilités</p>
                </Link>
                <Link 
                  href="/college/class2"
                  className="block p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors border-l-4 border-orange-500"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">2ème année collégiale</h3>
                  <p className="text-sm text-gray-600">Algèbre, fonctions, géométrie plane et espace</p>
                </Link>
                <Link 
                  href="/college/class3"
                  className="block p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors border-l-4 border-orange-500"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">3ème année collégiale</h3>
                  <p className="text-sm text-gray-600">Préparation au brevet et transition vers le lycée</p>
                </Link>
              </div>
            </div>

            {/* Secondary Section */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">L</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Lycée</h2>
                  <p className="text-sm text-gray-600">Cycle secondaire qualifiant</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Approfondissement des concepts mathématiques avec des spécialités adaptées. 
                Préparez votre baccalauréat avec des ressources complètes et actualisées.
              </p>
              <div className="space-y-4">
                <Link 
                  href="/secondary/class1"
                  className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors border-l-4 border-blue-500"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Tronc commun</h3>
                  <p className="text-sm text-gray-600">Bases communes pour toutes les filières</p>
                </Link>
                <Link 
                  href="/secondary/class2"
                  className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors border-l-4 border-blue-500"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">1ère année Bac</h3>
                  <p className="text-sm text-gray-600">Spécialisation selon votre filière</p>
                </Link>
                <Link 
                  href="/secondary/class3"
                  className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors border-l-4 border-blue-500"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">2ème année Bac</h3>
                  <p className="text-sm text-gray-600">Préparation intensive au baccalauréat</p>
                </Link>
              </div>
            </div>
            </div>
          </div>

          {/* AdSense In-Content Ad */}
          <AdSenseAd adSlot="1234567891" className="mb-12 flex justify-center" />

          {/* Why Choose Us Section */}
          <div className="mb-16 bg-gradient-to-br from-gray-50 to-orange-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Pourquoi choisir BHMaths ?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Une plateforme conçue spécialement pour les élèves marocains avec des contenus alignés sur les programmes officiels
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-orange-500 text-3xl font-bold mb-2">1000+</div>
                <h3 className="font-semibold text-gray-800 mb-2">Cours disponibles</h3>
                <p className="text-sm text-gray-600">Cours complets et détaillés pour tous les niveaux</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-orange-500 text-3xl font-bold mb-2">5000+</div>
                <h3 className="font-semibold text-gray-800 mb-2">Exercices corrigés</h3>
                <p className="text-sm text-gray-600">Pratiquez avec des exercices variés et progressifs</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-orange-500 text-3xl font-bold mb-2">24/7</div>
                <h3 className="font-semibold text-gray-800 mb-2">Accès illimité</h3>
                <p className="text-sm text-gray-600">Apprenez à votre rythme, quand vous voulez</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-orange-500 text-3xl font-bold mb-2">100%</div>
                <h3 className="font-semibold text-gray-800 mb-2">Programme marocain</h3>
                <p className="text-sm text-gray-600">Contenus conformes aux programmes officiels</p>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Choisissez votre forfait
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-2">
              Accédez à des ressources exclusives et bénéficiez d'un support personnalisé pour exceller en mathématiques
            </p>
            <p className="text-sm text-gray-500 max-w-xl mx-auto">
              Tous nos forfaits incluent l'accès à tous les niveaux, des cours mis à jour régulièrement, 
              et une interface intuitive pour un apprentissage optimal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl shadow-lg p-8 ${
                  plan.highlighted ? 'ring-2 ring-orange-500 transform scale-105' : ''
                }`}
              >
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                    {plan.period && (
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    )}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <svg className="h-5 w-5 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {plan.isSubscription ? (
                  <button
                    onClick={() => handleSubscriptionClick(plan)}
                    className={`block w-full text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
                      plan.highlighted
                        ? 'bg-orange-500 text-white hover:bg-orange-600'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                ) : (
                  <Link
                    href={plan.buttonLink}
                    className={`block w-full text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
                      plan.highlighted
                        ? 'bg-orange-500 text-white hover:bg-orange-600'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {plan.buttonText}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Testimonials Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Ce que disent nos élèves
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-orange-600 font-bold">A</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Ahmed M.</h4>
                    <p className="text-sm text-gray-600">2ème Bac Sciences</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Les cours sont très bien expliqués et les exercices m'ont beaucoup aidé à préparer mon bac. 
                  J'ai réussi avec mention très bien grâce à BHMaths !"
                </p>
                <div className="flex text-orange-500 mt-3">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-orange-600 font-bold">S</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Sara K.</h4>
                    <p className="text-sm text-gray-600">3ème Collège</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "J'adore la façon dont les leçons sont présentées. C'est clair, structuré et facile à comprendre. 
                  Mes notes ont vraiment augmenté cette année."
                </p>
                <div className="flex text-orange-500 mt-3">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-orange-600 font-bold">Y</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Youssef B.</h4>
                    <p className="text-sm text-gray-600">1ère Bac Math</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Le support WhatsApp est excellent ! J'ai toujours une réponse rapide à mes questions. 
                  La plateforme est vraiment complète et professionnelle."
                </p>
                <div className="flex text-orange-500 mt-3">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Contact Section */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl p-8 mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">
                Besoin d'aide ? Contactez-nous sur WhatsApp
              </h2>
              <p className="mb-2">
                Notre équipe d'experts est disponible pour répondre à vos questions et vous accompagner dans votre apprentissage
              </p>
              <p className="text-sm mb-6 opacity-90">
                Réponses rapides • Support personnalisé • Aide aux devoirs • Préparation aux examens
              </p>
              <a
                href="https://wa.me/212629504107"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors shadow-lg"
              >
                <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Contacter sur WhatsApp
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 