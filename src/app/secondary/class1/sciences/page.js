import ClassTemplate from '@/components/ClassTemplate';

export const metadata = {
  title: 'Tronc Commun Sciences | BHMath',
  description: 'Ressources mathématiques pour le Tronc Commun Sciences',
};

const sections = [
  {
    title: 'Cours',
    href: '/course/TroncCommunSc',
    action: 'Voir les cours'
  },
  {
    title: 'Exercices',
    description: 'Exercices et problèmes pratiques',
    href: '/exercice/TroncCommunSc',
    action: 'Pratiquer'
  },
  {
    title: 'Devoirs',
    href: '/devoir/TroncCommunSc',
    action: 'S\'entraîner'
  }
];

export default function TroncCommunSciences() {
  return (
    <ClassTemplate
      title="Tronc Commun - Sciences"
      description="Cours, exercices et devoirs de mathématiques"
      sections={sections}
    />
  );
} 