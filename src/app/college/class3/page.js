import ClassTemplate from '@/components/ClassTemplate';

export const metadata = {
  title: '3ème année collège | BHMath',
  description: 'Ressources mathématiques pour la troisième année du collège',
};

const stats = [
  { value: '20+', label: 'Chapitres' },
  { value: '400+', label: 'Exercices' },
  { value: '90+', label: 'Devoirs' },
  { value: '100%', label: 'Programme officiel' }
];

const curriculum = [
  {
    title: 'Fonctions',
    description: 'Fonctions linéaires, affines et leurs applications'
  },
  {
    title: 'Équations et inéquations',
    description: 'Résolution de systèmes et problèmes complexes'
  },
  {
    title: 'Théorème de Thalès',
    description: 'Applications géométriques et problèmes pratiques'
  },
  {
    title: 'Trigonométrie',
    description: 'Sinus, cosinus, tangente et applications'
  },
  {
    title: 'Géométrie dans l\'espace',
    description: 'Solides, volumes, sections et perspectives'
  },
  {
    title: 'Statistiques et probabilités',
    description: 'Analyse de données et calculs de probabilités'
  },
  {
    title: 'Arithmétique',
    description: 'Nombres premiers, PGCD, PPCM et divisibilité'
  },
  {
    title: 'Calcul algébrique',
    description: 'Développement, factorisation et identités remarquables'
  },
  {
    title: 'Préparation au brevet',
    description: 'Sujets types et méthodes de résolution'
  }
];

const sections = [
  {
    title: 'Cours',
    description: 'Cours complets avec toutes les notions essentielles pour le brevet',
    href: '/course/thirdCollege',
    action: 'Voir les cours'
  },
  {
    title: 'Exercices',
    description: 'Exercices progressifs et sujets type brevet avec solutions complètes',
    href: '/exercice/thirdCollege',
    action: 'Pratiquer'
  },
  {
    title: 'Devoirs',
    description: 'Devoirs surveillés et sujets d\'examen avec corrections détaillées',
    href: '/devoir/thirdCollege',
    action: 'S\'entraîner'
  },
  {
    title: 'Résumés',
    description: 'Fiches de révision complètes pour réviser tout le programme',
    href: '/course/thirdCollege/summaries',
    action: 'Réviser'
  },
  {
    title: 'Contrôles',
    description: 'Sujets de brevet blanc et contrôles avec barèmes officiels',
    href: '/exams/thirdCollege',
    action: 'Se tester'
  }
];

export default function ThirdYearCollege() {
  return (
    <ClassTemplate
      title="3ème année collège"
      description="Cours, exercices et devoirs de mathématiques"
      objectives="Préparez-vous efficacement au brevet des collèges et à l'entrée au lycée. Maîtrisez tous les chapitres avec nos ressources complètes et actualisées."
      sections={sections}
      curriculum={curriculum}
      stats={stats}
    />
  );
} 