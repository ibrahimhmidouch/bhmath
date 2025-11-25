'use client';

import Link from 'next/link';

export default function ClassTemplate({ title, description, sections, curriculum, objectives, stats, colorScheme = 'orange', onInfoClick,descriptions }) {
  const colors = {
    orange: {
      gradient: 'from-orange-200 to-orange-400',
      stat: 'text-orange-500',
      border: 'border-orange-500',
      button: 'bg-orange-500',
      curriculumBg: 'from-gray-50 to-orange-50',
      curriculumNumber: 'bg-orange-500'
    },
    blue: {
      gradient: 'from-blue-200 to-blue-400',
      stat: 'text-blue-500',
      border: 'border-blue-500',
      button: 'bg-blue-500',
      curriculumBg: 'from-gray-50 to-blue-50',
      curriculumNumber: 'bg-blue-500'
    }
  };

  const color = colors[colorScheme] || colors.orange;

  return (
    <main className="py-12">
      <div className={`bg-gradient-to-r ${color.gradient} text-black rounded-2xl py-16 mb-12 mx-4`}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-4">
            {description}
          </p>
          {objectives && (
            <p className="text-base md:text-lg opacity-80 max-w-2xl mx-auto mb-4">
              {objectives}
            </p>
          )}
          {onInfoClick && (
            <button
              onClick={onInfoClick}
              className="inline-flex items-center px-4 py-2 bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-700 font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <svg
                className="h-5 w-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              En savoir plus
            </button>
          )}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Stats Section */}
        {stats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md text-center">
                <div className={`text-2xl md:text-3xl font-bold ${color.stat} mb-1`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Curriculum Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Ressources disponibles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section, index) => (
              <Link 
                key={index}
                href={section.href}
                className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 ${color.border}`}
              >
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {section.title}
                  </h2>
                  {section.description && (
                    <p className="text-sm text-gray-600 mb-4">
                      {section.description}
                    </p>
                  )}
                  <div className={`inline-block ${color.button} text-white text-sm px-4 py-2 rounded-full`}>
                    {section.action || 'Accéder'}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {curriculum && (
          <div className={`bg-gradient-to-br ${color.curriculumBg} rounded-2xl p-6 md:p-8 mb-12`}>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Programme de l'année
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {curriculum.map((topic, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-start">
                    <div className={`${color.curriculumNumber} text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0`}>
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">{topic.title}</h3>
                      {topic.description && (
                        <p className="text-sm text-gray-600">{topic.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sections Grid */}
      <div>
        {descriptions}
      </div>
      </div>
    </main>
  );
} 