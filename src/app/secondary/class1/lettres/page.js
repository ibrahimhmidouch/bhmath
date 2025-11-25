import Link from 'next/link';
import ClassTemplate from '@/components/ClassTemplate';

export const metadata = {
  title: 'Tronc Commun Lettres | BHMath',
  description: 'Ressources mathématiques pour le Tronc Commun Lettres',
};

const sections = [
  {
    title: 'Cours',
    href: '/course/TroncCommunLettres',
    action: 'Voir les cours'
  },
  {
    title: 'Exercices',
    description: 'Exercices et problèmes pratiques',
    href: '/exercice/TroncCommunLettres',
    action: 'Pratiquer'
  },
  {
    title: 'Devoirs',
    href: '/devoir/TroncCommunLettres',
    action: 'S\'entraîner'
  }
];

export default function TroncCommunLettres() {
  return (
    <ClassTemplate
      title="Tronc Commun - Lettres"
      description="Cours, exercices et devoirs de mathématiques"
      sections={sections}
    />
  );
} 