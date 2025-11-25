import ClassTemplate from '@/components/ClassTemplate';

export const metadata = {
  title: 'Tronc Commun Technique | BHMath',
  description: 'Ressources mathématiques pour le Tronc Commun Technique',
};

const sections = [
  {
    title: 'Cours',
    href: '/course/TroncCommunTech',
    action: 'Voir les cours'
  },
  {
    title: 'Exercices',
    description: 'Exercices et problèmes pratiques',
    href: '/exercice/TroncCommunTech',
    action: 'Pratiquer'
  },
  {
    title: 'Devoirs',
    href: '/devoir/TroncCommunTech',
    action: 'S\'entraîner'
  }
];

export default function TroncCommunTechnique() {
  return (
    <ClassTemplate
      title="Tronc Commun - Technique"
      description="Cours, exercices et devoirs de mathématiques"
      sections={sections}
    />
  );
} 