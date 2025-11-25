import ClassTemplate from '@/components/ClassTemplate';

export const metadata = {
  title: '1ère Bac Lettres | BHMath',
  description: 'Ressources mathématiques pour la 1ère Bac Lettres',
};

const sections = [
  {
    title: 'Cours',
    href: '/course/firstBacLetters',
    action: 'Voir les cours'
  },
  {
    title: 'Exercices',
    description: 'Exercices et problèmes pratiques',
    href: '/exercice/firstBacLetters',
    action: 'Pratiquer'
  },
  {
    title: 'Devoirs',
    href: '/devoir/firstBacLettres',
    action: 'S\'entraîner'
  },
  {
    title: 'Résumés',
    href: '/course/firstBac/summaries',
    action: 'Réviser'
  }
];

export default function FirstBacLiterature() {
  return (
    <ClassTemplate
      title="1ère Bac - Lettres"
      description="Cours, exercices et devoirs de mathématiques pour Lettres"
      sections={sections}
      colorScheme="blue"
    />
  );
} 