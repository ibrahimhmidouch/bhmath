import ClassTemplate from '@/components/ClassTemplate';

export const metadata = {
  title: '2ème année Bac - Mathématiques A | BHMath',
  description: 'Ressources mathématiques pour la 2ème année du Baccalauréat - Mathématiques A',
};

const sections = [
  {
    title: 'Cours',
    href: '/course/2BacMathA',
    action: 'Voir les cours'
  },
  {
    title: 'Exercices',
    description: 'Exercices et problèmes pratiques',
    href: '/exercice/2BacMathA',
    action: 'Pratiquer'
  },
  {
    title: 'Devoirs',
    href: '/devoir/2BacMathA',
    action: 'S\'entraîner'
  },
  {
    title: 'Examens Nationaux',
    href: '/exams/2BacMath/national',
    action: 'Se préparer'
  },
  {
    title: 'Examens Régionaux',
    href: '/exams/2BacMath/regional',
    action: 'Réviser'
  }
];

export default function SecondBacMathA() {
  return (
    <ClassTemplate
      title="2ème année Bac - Mathématiques A"
      description="Cours, exercices et devoirs de mathématiques"
      sections={sections}
      colorScheme="blue"
    />
  );
} 