import Link from 'next/link';

export const metadata = {
  title: '2ème Bac - Lettres | BHMath',
  description: 'Ressources mathématiques pour la 2ème année du Baccalauréat - Section Lettres',
};

const resources = [
  {
    title: 'Cours',
    description: 'Accédez à tous les cours de mathématiques',
    href: '/course/2BacTCT',
  },
  {
    title: 'Exercices',
    href: '/exercice/2BacTCT',
    description: 'Exercices d\'application et de pratique'
  },
  {
    title: 'Devoirs',
    href: '/devoir/2BacTCT',
    description: 'Devoirs et examens corrigés'
  },
  {
    title: 'Résumés',
    href: '/secondary/class3/lettres/resumes',
    description: 'Fiches de révision et résumés'
  }
];

export default function SecondBacLettresPage() {
  return (
    <main className="py-12">
      <div className="bg-gradient-to-r from-blue-200 to-blue-400 text-black rounded-2xl py-16 mb-12 mx-4">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            2ème Bac - Section Lettres
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Sélectionnez une ressource pour commencer
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource, index) => (
            <Link 
              key={index}
              href={resource.href}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-blue-500"
            >
              <div className="text-center">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  {resource.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {resource.description}
                </p>
                <div className="inline-block bg-blue-500 text-white text-sm px-4 py-2 rounded-full">
                  Accéder aux {resource.title.toLowerCase()}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
} 