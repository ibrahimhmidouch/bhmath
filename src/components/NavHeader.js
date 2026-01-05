'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function NavHeader() {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState(null);

  const isActive = (path) => {
    return pathname === path || pathname.startsWith(path + '/');
  };

  const navigationItems = [
    // {
    //   name: 'Collège',
    //   href: '/college',
    //   sections: [
    //     { 
    //       name: '1ère année collège', 
    //       href: '/college/class1',
    //       level: 'firstCollege',
    //       course: '/course/firstCollege',
    //       exercice: '/exercice/firstCollege',
    //       devoir: '/devoir/firstCollege'
    //     },
    //     { 
    //       name: '2ème année collège', 
    //       href: '/college/class2',
    //       level: 'secondCollege',
    //       course: '/course/secondCollege',
    //       exercice: '/exercice/secondCollege',
    //       devoir: '/devoir/secondCollege'
    //     },
    //     { 
    //       name: '3ème année collège', 
    //       href: '/college/class3',
    //       level: 'thirdCollege',
    //       course: '/course/thirdCollege',
    //       exercice: '/exercice/thirdCollege',
    //       devoir: '/devoir/thirdCollege'
    //     }
    //   ]
    // },
    {
      name: 'Tronc Commun',
      href: '/secondary/class1',
      sections: [
        { 
          name: 'Tronc Commun Sciences', 
          href: '/secondary/class1/sciences',
          level: 'TroncCommunSc',
          course: '/course/TroncCommunSc',
          exercice: '/exercice/TroncCommunSc',
          devoir: '/devoir/TroncCommunSc'
        },
        { 
          name: 'Tronc Commun Lettres', 
          href: '/secondary/class1/lettres',
          level: 'TroncCommunLettres',
          course: '/course/TroncCommunLettres',
          exercice: '/exercice/TroncCommunLettres',
          devoir: '/devoir/TroncCommunLettres'
        },
        { 
          name: 'Sciences Techniques', 
          href: '/secondary/class1/technique',
          level: 'TroncCommunTech',
          course: '/course/TroncCommunTech',
          exercice: '/exercice/TroncCommunTech',
          devoir: '/devoir/TroncCommunTech'
        }
      ]
    },
    {
      name: '1ère Bac',
      href: '/secondary/class2',
      sections: [
        { 
          name: 'Sciences Mathématiques', 
          href: '/secondary/class2/sciences-math',
          level: 'firstBacMath',
          course: '/course/firstBacMath',
          exercice: '/exercice/firstBacMath',
          devoir: '/devoir/firstBacMath'
        },
        { 
          name: 'Sciences Physiques et SVT', 
          href: '/secondary/class2/pc-svt',
          level: 'firstBacScience',
          course: '/course/firstBacScience',
          exercice: '/exercice/firstBacScience',
          devoir: '/devoir/firstBacSc'
        },
        { 
          name: 'Lettres', 
          href: '/secondary/class2/lettres',
          level: 'firstBacLetters',
          course: '/course/firstBacLetters',
          exercice: '/exercice/firstBacLetters',
          devoir: '/devoir/firstBacLettres'
        },
        { 
          name: 'Économie', 
          href: '/secondary/class2/economie',
          level: 'firstBacEconomics',
          course: '/course/firstBacEconomics',
          exercice: '/exercice/firstBacEconomics',
          devoir: '/devoir/firstBacEconomics'
        }
      ]
    },
    {
      name: '2ème Bac',
      href: '/secondary/class3',
      sections: [
        { 
          name: 'Mathématiques A', 
          href: '/secondary/class3/math-a',
          level: '2BacMathA',
          course: '/course/2BacMathA',
          exercice: '/exercice/2BacMathA',
          devoir: '/devoir/2BacMathA'
        },
        { 
          name: 'Mathématiques B', 
          href: '/secondary/class3/math-b',
          level: '2BacMathB',
          course: '/course/2BacMathB',
          exercice: '/exercice/2BacMathB',
          devoir: '/devoir/2BacMath'
        },
        { 
          name: 'Sciences Physiques et SVT', 
          href: '/secondary/class3/pc-svt',
          level: '2BacPCSVT',
          course: '/course/2BacPCSVT',
          exercice: '/exercice/2BacPCSVT',
          devoir: '/devoir/2BacPCSVT'
        },
        { 
          name: 'Technologies', 
          href: '/secondary/class3/technologies',
          level: '2BacTCT',
          course: '/course/2BacTCT',
          exercice: '/exercice/2BacTCT',
          devoir: '/devoir/2BacTech'
        },
        { 
          name: 'Économie', 
          href: '/secondary/class3/ECO',
          level: '2BacEco',
          course: '/course/2BacEco',
          exercice: '/exercice/2BacEco',
          devoir: '/devoir/2BacEco'
        }
      ]
    }
  ];

  return (
    <nav className="bg-orange-500 rounded-b-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center space-x-6">
            {navigationItems.map((item) => (
              <div 
                key={item.name}
                className="relative"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  href={item.href}
                  className={`text-white hover:text-orange-100 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.href) ? 'bg-orange-600' : ''
                  }`}
                >
                  {item.name}
                </Link>
                
                {/* Dropdown Menu */}
                {hoveredItem === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-96 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-gray-800 mb-3 border-b border-gray-200 pb-2">
                        {item.name}
                      </h3>
                      
                      {/* Sections with Directions */}
                      <div className="space-y-3">
                        {item.sections.map((section) => (
                          <div key={section.href} className="border-b border-gray-100 last:border-b-0 pb-3 last:pb-0">
                            <Link
                              href={section.href}
                              className="block text-sm font-semibold text-gray-800 mb-2 hover:text-orange-600 transition-colors"
                            >
                              {section.name}
                            </Link>
                            <div className="flex gap-2 ml-2">
                              <Link
                                href={section.course}
                                className="flex-1 flex items-center justify-center gap-1 px-2 py-1.5 text-xs text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-md transition-colors border border-gray-200"
                              >
                                <span>📚</span>
                                <span>Cours</span>
                              </Link>
                              <Link
                                href={section.exercice}
                                className="flex-1 flex items-center justify-center gap-1 px-2 py-1.5 text-xs text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-md transition-colors border border-gray-200"
                              >
                                <span>✏️</span>
                                <span>Exercices</span>
                              </Link>
                              <Link
                                href={section.devoir}
                                className="flex-1 flex items-center justify-center gap-1 px-2 py-1.5 text-xs text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-md transition-colors border border-gray-200"
                              >
                                <span>📝</span>
                                <span>Devoirs</span>
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* Les Livres Link */}
            <Link
              href="/livres"
              className={`text-white hover:text-orange-100 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/livres') ? 'bg-orange-600' : ''
              }`}
            >
              Les Livres
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
