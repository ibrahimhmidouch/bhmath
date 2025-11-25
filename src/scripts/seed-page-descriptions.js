/**
 * Script to seed page descriptions in MongoDB
 * 
 * Usage:
 * 1. Make sure your MongoDB connection is configured in .env.local
 * 2. Run: node src/scripts/seed-page-descriptions.js
 * 
 * Or use the API endpoint POST /api/page-descriptions with:
 * {
 *   "pagePath": "/secondary/class1",
 *   "title": "Tronc Commun",
 *   "description": "Your full description text here...",
 *   "shortDescription": "Short description (optional)"
 * }
 */

import connectDB from '@/lib/mongoose';
import PageDescription from '@/models/PageDescription';

const pageDescriptions = [
  {
    pagePath: '/secondary/class1',
    title: 'Tronc Commun',
    description: `Le Tronc Commun représente la première année du Baccalauréat au Maroc. Cette année est cruciale car elle pose les bases mathématiques essentielles pour toutes les filières.

Durant cette année, les élèves explorent les concepts fondamentaux des mathématiques qui leur serviront tout au long de leur parcours. Le programme est conçu pour être accessible à tous, quelle que soit la filière choisie par la suite.

Les principales filières disponibles sont :
- Tronc Commun Sciences : Pour les élèves orientés vers les filières scientifiques
- Tronc Commun Lettres : Pour les élèves des filières littéraires
- Sciences Techniques : Pour les filières techniques et professionnelles

Chaque filière propose un programme adapté avec des cours complets, des exercices pratiques et des devoirs corrigés pour assurer une compréhension approfondie des concepts.`,
    shortDescription: 'Première année du Baccalauréat avec programme adapté selon votre filière'
  },
  {
    pagePath: '/secondary/class2',
    title: 'Première année du Baccalauréat',
    description: `La première année du Baccalauréat (1ère Bac) est une étape importante dans le parcours scolaire. Les élèves approfondissent leurs connaissances mathématiques et se spécialisent selon leur filière choisie.

Le programme couvre des domaines essentiels :
- Analyse : Fonctions, limites, continuité et dérivées
- Algèbre : Nombres complexes, équations et systèmes
- Géométrie : Géométrie analytique et transformations
- Probabilités : Probabilités conditionnelles et variables aléatoires
- Statistiques : Statistiques descriptives et inférentielles
- Suites numériques : Suites arithmétiques, géométriques et limites

Les filières disponibles incluent :
- Sciences Mathématiques : Programme approfondi pour les mathématiciens
- Sciences Physiques et SVT : Mathématiques appliquées aux sciences
- Lettres : Mathématiques appliquées pour les filières littéraires
- Économie : Mathématiques appliquées à l'économie

Chaque filière dispose de ressources complètes avec cours, exercices et devoirs pour une préparation optimale.`,
    shortDescription: 'Programme complet de mathématiques pour la première année du baccalauréat'
  },
  {
    pagePath: '/secondary/class3',
    title: '2ème année du Baccalauréat',
    description: `La 2ème année du Baccalauréat (2ème Bac) est l'année décisive qui prépare directement à l'examen du baccalauréat. C'est une année intensive où les élèves consolident leurs acquis et préparent leur examen final.

Le programme est plus avancé et couvre :
- Analyse avancée : Intégrales, primitives, équations différentielles
- Nombres complexes : Opérations, forme exponentielle et applications
- Géométrie dans l'espace : Vecteurs, droites, plans et distances
- Probabilités continues : Lois de probabilité et variables aléatoires continues
- Statistiques inférentielles : Estimation, tests d'hypothèses et intervalles de confiance
- Suites et séries : Convergence, séries numériques et applications
- Fonctions de plusieurs variables : Dérivées partielles et optimisation
- Préparation au bac : Sujets types, méthodes et stratégies d'examen

Les filières disponibles sont :
- Mathématiques A : Programme complet pour réussir le bac
- Mathématiques B : Ressources complètes avec sujets d'examen
- Sciences Physiques et SVT : Mathématiques appliquées
- Lettres : Programme adapté aux filières littéraires
- Économie : Mathématiques appliquées à l'économie

Cette année est cruciale pour la réussite au baccalauréat. Nos ressources incluent des sujets d'examen corrigés, des méthodes de résolution et des stratégies pour optimiser votre performance.`,
    shortDescription: 'Préparation intensive au baccalauréat avec ressources complètes et sujets d\'examen'
  }
];

async function seedPageDescriptions() {
  try {
    await connectDB();
    console.log('Connected to MongoDB');

    for (const desc of pageDescriptions) {
      const existing = await PageDescription.findOne({ pagePath: desc.pagePath });
      
      if (existing) {
        await PageDescription.findOneAndUpdate(
          { pagePath: desc.pagePath },
          desc,
          { new: true }
        );
        console.log(`Updated: ${desc.pagePath}`);
      } else {
        await PageDescription.create(desc);
        console.log(`Created: ${desc.pagePath}`);
      }
    }

    console.log('✅ Page descriptions seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding page descriptions:', error);
    process.exit(1);
  }
}

seedPageDescriptions();

