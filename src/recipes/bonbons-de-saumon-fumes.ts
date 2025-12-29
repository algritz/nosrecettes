import { Recipe } from '@/types/recipe';

export const bonbonsDeSaumonFumes: Recipe = {
  id: 'bonbons-de-saumon-fumes',
  title: 'Bonbons de saumon fumés',
  description: 'Recette de bonbons de saumon fumés avec marinade, séchage et fumage, badigeonnés de sirop d\'érable pour une saveur sucrée-salée.',
  categories: ['Fumoir', 'Poisson'],
  prepTime: { min: 25, max: 25 },
  cookTime: { min: 240, max: 240 },
  marinatingTime: { min: 720, max: 720 },
  servings: 8,
  difficulty: 'Facile',
  ingredients: [
    '1 filet de saumon',
    '1/2 tasse de cassonade',
    '4 tasses d\'eau',
    '60 grammes de sel',
    '1 tasse de sirop d\'érable'
  ],
  instructions: [
    'Découper le filet de saumon en petit cube mais garder la peau.',
    'Mélanger la cassonade et le sel dans l’eau, bien diluer.',
    'Incorporer votre saumon dans le mélange et laisser au réfrigérateur pendant 8 à 12 heures.',
    'Mettre votre saumon dans une passoire et bien rincer pour enlever l’excédent de sel.',
    'Bien éponger le saumon et laisser sécher au réfrigérateur pendant 1 heure.',
    'Après une heure, mettre votre saumon dans le fumoir à une température d’environ 150°F, côté peau sur la grille.',
    'Avec un pinceau de cuisine, badigeonner une couche de sirop d’érable sur le saumon toutes les 30 minutes.',
    'Cuire de 2 à 4 heures au goût, en augmentant la température de 10°F chaque heure jusqu\'à un maximum de 180°F.'
  ],
  tags: ['fumage', 'sirop d\'érable', 'saumon'],
  source: 'David Cloutier',
  notes: 'Temps de marinade de 8 à 12 heures, cuisson de 2 à 4 heures, portions pour 6 à 8 personnes.',
  slug: 'bonbons-de-saumon-fumes'
};
