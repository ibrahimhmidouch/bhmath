import Link from 'next/link';

export const metadata = {
  title: 'Concours Mathématiques | BHMath',
  description: 'Concours et compétitions de mathématiques pour les élèves du collège et du lycée',
};

const competitions = [
  {
    title: 'Concours Nationaux',
    description: 'Compétitions officielles organisées par le ministère de l\'éducation',
    items: [
      { title: 'Olympiades Nationales', href: '/concours/olympiades' },
      { title: 'Concours Général', href: '/concours/general' },
      { title: 'Concours Régional', href: '/concours/regional' }
    ]
  },
  {
    title: 'Concours Internationaux',
    description: 'Compétitions internationales de mathématiques',
    items: [
      { title: 'IMO - Olympiade Internationale', href: '/concours/imo' },
      { title: 'Concours Panafricain', href: '/concours/panafricain' },
      { title: 'Concours Maghrébin', href: '/concours/maghrebin' }
    ]
  },
  {
    title: 'Préparation',
    description: 'Ressources pour préparer les concours',
    items: [
      { title: 'Annales', href: '/concours/annales' },
      { title: 'Exercices d\'entraînement', href: '/concours/entrainement' },
      { title: 'Stratégies de résolution', href: '/concours/strategies' }
    ]
  },
  {
    title: 'Résultats',
    description: 'Classements et résultats des concours',
    items: [
      { title: 'Palmarès 2024', href: '/concours/palmares-2024' },
      { title: 'Archives', href: '/concours/archives' },
      { title: 'Médaillés', href: '/concours/medailles' }
    ]
  }
];

export default function ConcoursPage() {
  return (
    <main className="py-12">
      <div className="bg-gradient-to-r from-orange-200 to-orange-400 text-black rounded-2xl py-16 mb-12 mx-4">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Concours Mathématiques
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Découvrez et préparez-vous aux différents concours de mathématiques
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {competitions.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="text-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  {category.title}
                </h2>
                <p className="text-gray-600">
                  {category.description}
                </p>
              </div>
              
              <div className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <Link
                    key={itemIndex}
                    href={item.href}
                    className="block bg-gray-50 hover:bg-orange-50 rounded-lg p-4 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-800 font-medium">
                        {item.title}
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