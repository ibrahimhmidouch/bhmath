import ClassTemplate from '@/components/ClassTemplate';

export const metadata = {
  title: '1ère Bac PC-SVT | BHMath',
  description: 'Ressources mathématiques pour la 1ère Bac Sciences Physiques et Sciences de la Vie et de la Terre',
};

const sections = [
  {
    title: 'Cours',
    href: '/course/firstBacScience',
    action: 'Voir les cours'
  },
  {
    title: 'Exercices',
    description: 'Exercices et problèmes pratiques',
    href: '/exercice/firstBacScience',
    action: 'Pratiquer'
  },
  {
    title: 'Devoirs',
    href: '/devoir/firstBacSc',
    action: 'S\'entraîner'
  }
];

export default function FirstBacPCSVT() {
  return (
    <ClassTemplate
      title="1ère Bac - Sciences PC-SVT"
      description="Cours, exercices et devoirs de mathématiques pour PC-SVT"
      sections={sections}
      colorScheme="blue"
    />
  );
} 