import { Link } from 'react-router-dom';
import { Cat, Zap, Shield, Sparkles, Upload, CheckCircle, Eye } from 'lucide-react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'Détection Rapide',
      description: 'Identifiez instantanément les chats dans vos images grâce à notre IA avancée.',
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: 'Fiable et Précis',
      description: 'Technologie de pointe pour des résultats précis et fiables à chaque fois.',
    },
    {
      icon: <Sparkles className="w-8 h-8 text-blue-400" />,
      title: 'Simple à Utiliser',
      description: 'Interface intuitive pour une expérience utilisateur optimale et fluide.',
    },
  ];

  const steps = [
    {
      icon: <Upload className="w-12 h-12 text-blue-500" />,
      title: 'Téléchargez une Image',
      description: 'Glissez-déposez ou sélectionnez une image depuis votre appareil. Tous les formats d\'image sont supportés.',
    },
    {
      icon: <Eye className="w-12 h-12 text-blue-500" />,
      title: 'Aperçu et Vérification',
      description: 'Prévisualisez l\'image avant l\'analyse et assurez-vous qu\'elle est claire et bien positionnée.',
    },
    {
      icon: <Zap className="w-12 h-12 text-blue-500" />,
      title: 'Analyse Instantanée',
      description: 'Notre système IA analyse votre image en temps réel avec une précision exceptionnelle.',
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-blue-500" />,
      title: 'Résultat Immédiat',
      description: 'Recevez instantanément le résultat : chat détecté ou non, avec message de confirmation.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center mb-16 md:mb-20" data-aos="fade-up">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-6 rounded-3xl shadow-2xl transform hover:scale-110 transition-transform duration-300">
              <Cat className="w-20 h-20 text-white" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Bienvenue sur DetectCat
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Votre assistant intelligent pour détecter la présence de chats dans vos images. Grâce à notre technologie d'intelligence artificielle de dernière génération, identifiez avec certitude si une image contient un chat, en quelques secondes seulement.
          </p>

          <Link
            to="/detection"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Cat className="w-5 h-5 mr-2" />
            Commencer la détection
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-blue-50 p-4 rounded-2xl">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800" data-aos="fade-up">
            Comment ça marche ?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-blue-100 p-4 rounded-2xl">
                    {step.icon}
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800" data-aos="fade-up">
            Pourquoi choisir DetectCat ?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div data-aos="fade-right" className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Technologie Avancée</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Notre système utilise des algorithmes de machine learning de dernière génération pour une détection fiable et précise des chats. Nous continuons d'améliorer notre IA pour vous offrir les meilleurs résultats possibles.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">✓</span>
                  <span>Reconnaissance multi-race et multi-couleur</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">✓</span>
                  <span>Analyse rapide en moins de 2 secondes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">✓</span>
                  <span>Taux de précision supérieur à 95%</span>
                </li>
              </ul>
            </div>

            <div data-aos="fade-left" className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Sécurité et Confidentialité</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Votre vie privée est notre priorité. Toutes les images que vous téléchargez sont traitées de manière sécurisée et ne sont jamais stockées sans votre consentement.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">✓</span>
                  <span>Chiffrement des données en transit</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">✓</span>
                  <span>Aucun stockage permanent des images</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">✓</span>
                  <span>Conformité RGPD et normes internationales</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-8 md:p-12 text-center shadow-2xl text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à détecter vos chats ?
          </h2>
          <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
            Rejoignez des milliers d'utilisateurs qui font confiance à DetectCat pour identifier les chats dans leurs images. C'est simple, rapide et précis.
          </p>
          <Link
            to="/detection"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <Cat className="w-5 h-5 mr-2" />
            Commencer maintenant
          </Link>
        </div>
      </div>
    </div>
  );
}
