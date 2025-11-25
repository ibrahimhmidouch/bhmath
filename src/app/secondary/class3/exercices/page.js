import Link from 'next/link';

export const metadata = {
  title: 'Exercices Terminal Bac | BHMath',
  description: 'Exercices et problèmes de mathématiques pour la Terminal du Baccalauréat',
};

const categories = [
  {
    title: 'Analyse',
    topics: [
      { title: 'Fonctions exponentielles', href: '/secondary/class3/exercice/fonctions-exponentielles' },
      { title: 'Fonctions logarithmes', href: '/secondary/class3/exercice/fonctions-logarithmes' },
      { title: 'Primitives et intégrales', href: '/secondary/class3/exercice/primitives-integrales' },
      { title: 'Équations différentielles', href: '/secondary/class3/exercice/equations-differentielles' }
    ]
  },
  {
    title: 'Géométrie dans l\'espace',
    topics: [
      { title: 'Vecteurs de l\'espace', href: '/secondary/class3/exercice/vecteurs-espace' },
      { title: 'Produit scalaire', href: '/secondary/class3/exercice/produit-scalaire' },
      { title: 'Produit vectoriel', href: '/secondary/class3/exercice/produit-vectoriel' },
      { title: 'Droites et plans', href: '/secondary/class3/exercice/droites-plans' }
    ]
  },
  {
    title: 'Nombres complexes',
    topics: [
      { title: 'Forme algébrique', href: '/secondary/class3/exercice/complexes-algebrique' },
      { title: 'Forme trigonométrique', href: '/secondary/class3/exercice/complexes-trigonometrique' },
      { title: 'Équations dans C', href: '/secondary/class3/exercice/equations-complexes' }
    ]
  },
  {
    title: 'Probabilités',
    topics: [
      { title: 'Lois de probabilité', href: '/secondary/class3/exercice/lois-probabilite' },
      { title: 'Loi binomiale', href: '/secondary/class3/exercice/loi-binomiale' },
      { title: 'Loi normale', href: '/secondary/class3/exercice/loi-normale' },
      { title: 'Échantillonnage', href: '/secondary/class3/exercice/echantillonnage' }
    ]
  }
];

export default function TerminalBacExercisesPage() {
  return (
    <main className="py-12">
      <div className="bg-gradient-to-r from-blue-200 to-blue-400 text-black rounded-2xl py-16 mb-12 mx-4">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Exercices Terminal Baccalauréat
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Sélectionnez une catégorie pour accéder aux exercices
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="text-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  {category.title}
                </h2>
              </div>
              
              <div className="space-y-3">
                {category.topics.map((topic, topicIndex) => (
                  <Link
                    key={topicIndex}
                    href={topic.href}
                    className="block bg-gray-50 hover:bg-blue-50 rounded-lg p-4 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-800 font-medium">
                        {topic.title}
                      </span>
                      <div className="text-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 