import { Recipe } from '@/types/recipe';

export const tartareDeBoeufAsiatique: Recipe = {
  id: 'tartare-de-boeuf-asiatique',
  title: 'Tartare de boeuf asiatique',
  description: 'Tartare de boeuf asiatique',
  categories: ['Entrées'],
  prepTime: 20,
  cookTime: 0,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '225 g de boeuf pour tartare',
    '30 ml huile d\'olive extra',
    '15 ml sauce soya',
    '15 ml vinaigre balsamique',
    '15 ml huile de sésame grillé',
    '15 ml gingembre, haché finement',
    '2 oignons verts, hachés finement',
    '30 ml coriandre, ciselée',
    '30 ml menthe, ciselée',
    '30 ml ciboulette, ciselée',
    '30 ml pistaches écaillées, rôties et hachées grossièrement',
    '2.5 à 5 ml Sambal Oelek'
  ],
  instructions: [
    'Couper la viande en très petits dés. Réserver au froid.',
    'Dans un bol, mélanger l\'huile d\'olive, la sauce soya, le vinaigre balsamique, l\'huile de sésame et le gingembre.',
    'Ajouter la viande, les oignons verts, la coriandre, la menthe, la ciboulette et les pistaches.',
    'Assaisonner.',
    'Déguster avec des croutons à l\'ail'
  ],
  tags: ['asiatique', 'cru', 'marinade sèche'],
  notes: 'Temps de préparation estimé entre 20 et 25 minutes.',
  slug: 'tartare-de-boeuf-asiatique'
};
