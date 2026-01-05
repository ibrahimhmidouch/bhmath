import ClassTemplate from '@/components/ClassTemplate';

export const metadata = {
  title: '2ème année Bac - Technologies | BHMath',
  description: 'Ressources mathématiques pour la 2ème année du Baccalauréat - Technologies',
};

const sections = [
  {
    title: 'Cours',
    href: '/course/2BacTCT',
    action: 'Voir les cours'
  },
  {
    title: 'Exercices',
    description: 'Exercices et problèmes pratiques',
    href: '/exercice/2BacTCT',
    action: 'Pratiquer'
  },
  {
    title: 'Devoirs',
    href: '/devoir/2BacTech',
    action: 'S\'entraîner'
  },
  {
    title: 'Examens Nationaux',
    href: '/exams/2BacTech',
    action: 'Se préparer'
  },
  {
    title: 'Examens Blancs',
    href: '/examBlancs/2BacTech',
    action: 'S\'entraîner'
  },
];

export default function SecondBacTechnologies() {
  return (
    <ClassTemplate
      title="2ème année Bac - Technologies"
      description="Cours, exercices et devoirs de mathématiques"
      sections={sections}
      colorScheme="blue"
    />
  );
}

