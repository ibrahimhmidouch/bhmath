import ClassTemplate from '@/components/ClassTemplate';

export const metadata = {
  title: '2ème année collège | BHMath',
  description: 'Ressources mathématiques pour la deuxième année du collège',
};

const stats = [
  { value: '18+', label: 'Chapitres' },
  { value: '300+', label: 'Exercices' },
  { value: '70+', label: 'Devoirs' },
  { value: '100%', label: 'Programme officiel' }
];

const curriculum = [
  {
    title: 'Algèbre',
    description: 'Équations, inéquations et systèmes d\'équations'
  },
  {
    title: 'Fonctions',
    description: 'Introduction aux fonctions linéaires et affines'
  },
  {
    title: 'Géométrie plane',
    description: 'Triangles, cercles, parallélogrammes et transformations'
  },
  {
    title: 'Géométrie dans l\'espace',
    description: 'Solides, volumes et sections planes'
  },
  {
    title: 'Statistiques avancées',
    description: 'Moyennes, médianes et représentations graphiques'
  },
  {
    title: 'Théorème de Pythagore',
    description: 'Applications et problèmes pratiques'
  },
  {
    title: 'Proportionnalité',
    description: 'Applications pratiques et problèmes concrets'
  },
  {
    title: 'Calcul littéral',
    description: 'Développement, factorisation et identités remarquables'
  }
];

const sections = [
  {
    title: 'Cours',
    description: 'Cours approfondis avec exemples concrets et méthodes de résolution',
    href: '/course/secondCollege',
    action: 'Voir les cours'
  },
  {
    title: 'Exercices',
    description: 'Exercices variés du niveau débutant au niveau avancé avec corrections',
    href: '/exercice/secondCollege',
    action: 'Pratiquer'
  },
  {
    title: 'Devoirs',
    description: 'Devoirs surveillés avec barèmes et corrections détaillées',
    href: '/devoir/secondCollege',
    action: 'S\'entraîner'
  },
  {
    title: 'Résumés',
    description: 'Fiches de révision synthétiques pour réviser efficacement',
    href: '/course/secondCollege/summaries',
    action: 'Réviser'
  },
  {
    title: 'Contrôles',
    description: 'Sujets de contrôles avec corrigés pour vous préparer aux examens',
    href: '/exams/secondCollege',
    action: 'Se tester'
  }
];

export default function SecondYearCollege() {
  return (
    <ClassTemplate
      title="2ème année collège"
      description="Cours, exercices et devoirs de mathématiques"
      objectives="Approfondissez vos connaissances mathématiques et développez votre raisonnement. Préparez-vous efficacement pour la 3ème année et le brevet."
      sections={sections}
      curriculum={curriculum}
      stats={stats}
    />
  );
} 