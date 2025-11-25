import TopHeader from '@/components/TopHeader';
import MainHeader from '@/components/MainHeader';
import NavHeader from '@/components/NavHeader';
import Link from 'next/link';

export const metadata = {
  title: 'Lycée | BHMath',
  description: 'Ressources mathématiques pour le lycée',
};

const secondaryLevels = [
  {
    title: 'Tronc commun',
    path: '/secondary/class1',
    options: ['Sciences', 'Lettres']
  },
  {
    title: '1ère Bac',
    path: '/secondary/class2',
    options: ['Sciences Math', 'PC-SVT', 'Economie', 'Lettres']
  },
  {
    title: '2ème Bac',
    path: '/secondary/class3',
    options: ['Math A', 'Math B', 'PC-SVT', 'Sciences Eco', 'Lettres']
  }
];

export default function SecondaryPage() {
  return (
    <>
      
      <main className="py-12">
        <div className="bg-gradient-to-r from-orange-200 to-orange-400 text-black rounded-2xl py-16 mb-12 mx-4">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Mathématiques au Lycée
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Choisissez votre niveau et spécialisation
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {secondaryLevels.map((level, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="text-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {level.title}
                  </h2>
                </div>
                <div className="space-y-3">
                  {level.options.map((option, optIndex) => (
                    <Link 
                      key={optIndex}
                      href={`${level.path}/${option.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors text-center"
                    >
                      <span className="text-gray-800">{option}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
} 