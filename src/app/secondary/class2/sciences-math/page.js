import ClassTemplate from '@/components/ClassTemplate';

export const metadata = {
  title: 'Première année Bac - Sciences Mathématiques | BHMath',
  description: 'Ressources mathématiques pour la première année du Baccalauréat - Sciences Mathématiques',
};

const sections = [
  {
    title: 'Cours',
    href: '/course/firstBacMath',
    action: 'Voir les cours'
  },
  {
    title: 'Exercices',
    description: 'Exercices et problèmes pratiques',
    href: '/exercice/firstBacMath',
    action: 'Pratiquer'
  },
  {
    title: 'Devoirs',
    href: '/devoir/firstBacMath',
    action: 'S\'entraîner'
  },
  {
    title: 'Examens',
    href: '/exams/firstBacMath',
    action: 'Se préparer'
  }
];

export default function FirstBacMath() {
  return (
    <ClassTemplate
      title="Première année Bac - Sciences Mathématiques"
      description="Cours, exercices et devoirs de mathématiques"
      sections={sections}
      colorScheme="blue"
    />
  );
} 