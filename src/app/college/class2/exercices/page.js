import Link from 'next/link';

export const metadata = {
  title: 'Exercices 2ème Année Collège | BHMath',
  description: 'Exercices et problèmes de mathématiques pour la 2ème année du collège',
};

const categories = [
  {
    title: 'Nombres et Opérations',
    topics: [
      { title: 'Nombres relatifs', href: '/college/class2/exercice/nombres-relatifs' },
      { title: 'Fractions et décimaux', href: '/college/class2/exercice/fractions-decimaux' },
      { title: 'Puissances', href: '/college/class2/exercice/puissances' },
      { title: 'Racines carrées', href: '/college/class2/exercice/racines-carrees' }
    ]
  },
  {
    title: 'Géométrie',
    topics: [
      { title: 'Triangles', href: '/college/class2/exercice/triangles' },
      { title: 'Parallélogrammes', href: '/college/class2/exercice/parallelogrammes' },
      { title: 'Cercle et disque', href: '/college/class2/exercice/cercle-disque' },
      { title: 'Symétries', href: '/college/class2/exercice/symetries' }
    ]
  },
  {
    title: 'Calcul littéral',
    topics: [
      { title: 'Expressions littérales', href: '/college/class2/exercice/expressions-litterales' },
      { title: 'Équations', href: '/college/class2/exercice/equations' },
      { title: 'Inéquations', href: '/college/class2/exercice/inequations' }
    ]
  },
  {
    title: 'Proportions',
    topics: [
      { title: 'Proportionnalité', href: '/college/class2/exercice/proportionnalite' },
      { title: 'Pourcentages', href: '/college/class2/exercice/pourcentages' },
      { title: 'Vitesse moyenne', href: '/college/class2/exercice/vitesse-moyenne' }
    ]
  }
];

export default function SecondYearExercisesPage() {
  return (
    <main className="py-12">
      <div className="bg-gradient-to-r from-orange-200 to-orange-400 text-black rounded-2xl py-16 mb-12 mx-4">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Exercices 2ème Année Collège
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
                    className="block bg-gray-50 hover:bg-orange-50 rounded-lg p-4 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-800 font-medium">
                        {topic.title}
                      </span>
                      <div className="text-orange-500">
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