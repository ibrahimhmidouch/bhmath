'use client';

import { useState, useEffect } from 'react';
import ClassTemplate from '@/components/ClassTemplate';
import PageDescriptionModal from '@/components/PageDescriptionModal';

const stats = [
  { value: '22+', label: 'Chapitres' },
  { value: '500+', label: 'Exercices' },
  { value: '120+', label: 'Devoirs' },
  { value: '4', label: 'Filières' }
];

const curriculum = [
  {
    title: 'Analyse',
    description: 'Fonctions, limites, continuité et dérivées'
  },
  {
    title: 'Algèbre',
    description: 'Nombres complexes, équations et systèmes'
  },
  {
    title: 'Géométrie',
    description: 'Géométrie analytique et transformations'
  },
  {
    title: 'Probabilités',
    description: 'Probabilités conditionnelles et variables aléatoires'
  },
  {
    title: 'Statistiques',
    description: 'Statistiques descriptives et inférentielles'
  },
  {
    title: 'Suites numériques',
    description: 'Suites arithmétiques, géométriques et limites'
  }
];

const sections = [
  {
    title: 'Sciences Mathématiques',
    description: 'Programme complet pour la filière Sciences Mathématiques avec cours approfondis, exercices et devoirs corrigés',
    href: '/secondary/class2/sciences-math',
    action: 'Accéder'
  },
  {
    title: 'Sciences Physiques et SVT',
    description: 'Ressources mathématiques adaptées pour les élèves de Sciences Physiques et Sciences de la Vie et de la Terre',
    href: '/secondary/class2/pc-svt',
    action: 'Accéder'
  },
  {
    title: 'Lettres',
    description: 'Programme de mathématiques appliquées spécialement conçu pour les filières littéraires',
    href: '/secondary/class2/lettres',
    action: 'Accéder'
  },
  {
    title: 'Économie',
    description: 'Mathématiques appliquées à l\'économie avec cours pratiques et exercices concrets',
    href: '/secondary/class2/economie',
    action: 'Accéder'
  }
];

export default function FirstBac() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [description, setDescription] = useState(null);
  const [error, setError] = useState(null);
 
  const fetchDescription = async () => {
    setLoading(true);
    
    setError(null);
    try {
      const response = await fetch(`/api/page-descriptions?path=${encodeURIComponent('/secondary/class2')}`);
      
      if (response.ok) {
        const data = await response.json();
        setDescription(data);
      } else if (response.status === 404) {
        setError('Description not found');
      } else {
        setError('Failed to load description');
      }
    } catch (err) {
      console.error('Error fetching description:', err);
      setError('Failed to load description');
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchDescription();
    
  }, []);
console.log(description)
  return (
    <>
      <ClassTemplate
        title="Première année du Baccalauréat"
        description="Choisissez votre filière pour accéder aux ressources"
        objectives="Maîtrisez les concepts fondamentaux de la première année du baccalauréat. Préparez-vous efficacement pour la 2ème année et développez votre raisonnement mathématique."
        sections={sections}
        curriculum={curriculum}
        descriptions={description?.description}
        stats={stats}
        colorScheme="blue"
        onInfoClick={() => setIsModalOpen(true)}
      />
     
    </>
  );
} 