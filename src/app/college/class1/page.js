import ClassTemplate from '@/components/ClassTemplate';

export const metadata = {
  title: '1ère année collège | BHMath',
  description: 'Ressources mathématiques pour la première année du collège',
};

const stats = [
  { value: '15+', label: 'Chapitres' },
  { value: '200+', label: 'Exercices' },
  { value: '50+', label: 'Devoirs' },
  { value: '100%', label: 'Programme officiel' }
];

const curriculum = [
  {
    title: 'Nombres et opérations',
    description: 'Nombres entiers, décimaux, fractions et opérations de base'
  },
  {
    title: 'Géométrie plane',
    description: 'Figures géométriques, périmètres, aires et angles'
  },
  {
    title: 'Statistiques',
    description: 'Collecte, organisation et représentation de données'
  },
  {
    title: 'Probabilités',
    description: 'Introduction aux probabilités et aux événements'
  },
  {
    title: 'Proportionnalité',
    description: 'Tableaux de proportionnalité et pourcentages'
  },
  {
    title: 'Expressions littérales',
    description: 'Introduction à l\'algèbre et aux expressions'
  }
];

const sections = [
  {
    title: 'Cours',
    description: 'Cours complets et détaillés couvrant tous les chapitres du programme officiel',
    href: '/course/firstCollege',
    action: 'Voir les cours'
  },
  {
    title: 'Exercices',
    description: 'Exercices progressifs avec solutions détaillées pour maîtriser chaque notion',
    href: '/exercice/firstCollege',
    action: 'Pratiquer'
  },
  {
    title: 'Devoirs',
    description: 'Devoirs surveillés corrigés pour vous préparer aux contrôles et examens',
    href: '/devoir/firstCollege',
    action: 'S\'entraîner'
  }
];

export default function FirstYearCollege() {
  return (
    <ClassTemplate
      title="1ère année collège"
      description="Cours, exercices et devoirs de mathématiques"
      objectives="Construisez des bases solides en mathématiques avec des cours adaptés au programme marocain. Maîtrisez les fondamentaux pour réussir votre passage au collège."
      sections={sections}
      curriculum={curriculum}
      stats={stats}
    />
  );
} 