'use client';

import { useState, useEffect } from 'react';
import ClassTemplate from '@/components/ClassTemplate';
import PageDescriptionModal from '@/components/PageDescriptionModal';

const stats = [
  { value: '25+', label: 'Chapitres' },
  { value: '600+', label: 'Exercices' },
  { value: '150+', label: 'Devoirs' },
  { value: '5', label: 'Filières' }
];

const curriculum = [
  {
    title: 'Analyse avancée',
    description: 'Intégrales, primitives, équations différentielles'
  },
  {
    title: 'Nombres complexes',
    description: 'Opérations, forme exponentielle et applications'
  },
  {
    title: 'Géométrie dans l\'espace',
    description: 'Vecteurs, droites, plans et distances'
  },
  {
    title: 'Probabilités continues',
    description: 'Lois de probabilité et variables aléatoires continues'
  },
  {
    title: 'Statistiques inférentielles',
    description: 'Estimation, tests d\'hypothèses et intervalles de confiance'
  },
  {
    title: 'Suites et séries',
    description: 'Convergence, séries numériques et applications'
  },
  {
    title: 'Fonctions de plusieurs variables',
    description: 'Dérivées partielles et optimisation'
  },
  {
    title: 'Préparation au bac',
    description: 'Sujets types, méthodes et stratégies d\'examen'
  }
];

const sections = [
  {
    title: 'Mathématiques A',
    description: 'Programme complet pour la filière Mathématiques A avec tous les chapitres essentiels pour réussir le baccalauréat',
    href: '/secondary/class3/math-a',
    action: 'Accéder'
  },
  {
    title: 'Mathématiques B',
    description: 'Ressources complètes pour la filière Mathématiques B avec cours, exercices et sujets d\'examen corrigés',
    href: '/secondary/class3/math-b',
    action: 'Accéder'
  },
  {
    title: 'Sciences Physiques et SVT',
    description: 'Mathématiques appliquées pour les élèves de Sciences Physiques et Sciences de la Vie et de la Terre',
    href: '/secondary/class3/pc-svt',
    action: 'Accéder'
  },
  {
    title: 'Technologies',
    description: 'Programme de mathématiques adapté aux filières techniques avec applications pratiques',
    href: '/secondary/class3/technologies',
    action: 'Accéder'
  },
  {
    title: 'Économie',
    description: 'Mathématiques appliquées à l\'économie avec modélisation et résolution de problèmes économiques',
    href: '/secondary/class3/ECO',
    action: 'Accéder'
  }
];

export default function SecondBac() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [description, setDescription] = useState(null);
  const [error, setError] = useState(null);
 
  const fetchDescription = async () => {
    setLoading(true);
    
    setError(null);
    try {
      const response = await fetch(`/api/page-descriptions?path=${encodeURIComponent('/secondary/class3')}`);
      
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
  return (
    <>
      <ClassTemplate
        title="2ème année du Baccalauréat"
        description="Choisissez votre filière pour accéder aux ressources"
        objectives="Préparez-vous intensivement au baccalauréat avec nos ressources complètes. Maîtrisez tous les chapitres et réussissez votre examen avec confiance."
        sections={sections}
        curriculum={curriculum}
        stats={stats}
        descriptions={description?.description}
        colorScheme="blue"
        onInfoClick={() => setIsModalOpen(true)}
      />
      
    </>
  );
} 