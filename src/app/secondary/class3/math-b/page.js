import ClassTemplate from '@/components/ClassTemplate';

export const metadata = {
  title: '2ème Bac Math B | BHMath',
  description: 'Ressources mathématiques pour la 2ème Bac Sciences Mathématiques B',
};

const sections = [
  {
    title: 'Cours',
    href: '/course/2BacMathB',
    action: 'Voir les cours'
  },
  {
    title: 'Exercices',
    description: 'Exercices et problèmes pratiques',
    href: '/exercice/2BacMathB',
    action: 'Pratiquer'
  },
  {
    title: 'Devoirs',
    href: '/devoir/2BacMath',
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
  },
  {
    title: 'Probabilités',
    href: '/course/2BacMath/proba',
    action: 'Approfondir'
  }
];

export default function SecondBacMathB() {
  return (
    <ClassTemplate
      title="2ème Bac - Sciences Mathématiques B"
      description="Cours, exercices et préparation aux examens nationaux"
      sections={sections}
      colorScheme="blue"
    />
  );
} 