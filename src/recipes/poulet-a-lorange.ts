import { Recipe } from '@/types/recipe';

export const pouletALorange: Recipe = {
  id: 'poulet-a-l-orange',
  title: 'Poulet à l\'orange',
  description: 'Poulet à l\'orange avec une sauce acidulée à base de jus d\'orange, citron, vinaigre de riz et sauce soja, servi sur du riz avec échalotes.',
  categories: ['Végétarien', 'Plats principaux'],
  prepTime: 25,
  cookTime: 20,
  servings: 5,
  difficulty: 'Facile',
  ingredients: [
    '2 lbs de poitrine de poulet en cube',
    '1 1/2 tasse de farine tout usage',
    '1 oeuf battu',
    '1/4 c. à thé de sel',
    '1/4 c. à thé de poivre',
    'huile pour la friture',
    '1 1/2 tasse d\'eau',
    '2 c. à table de jus d\'orange frais',
    '1/4 tasse de jus de citron frais',
    '1/3 tasse de vinaigre de riz',
    '2 c. à table de sauce soya',
    '1 c. à table de zeste d\'orange (optionnel)',
    '1 tasse de cassonade tassée',
    '1/2 c. à thé de gingembre frais haché',
    '1/2 c. à thé d\'ail haché',
    '2 c. à table d\'échalotte émincée',
    '1/4 c. à thé de piment broyé',
    '3 c. à table de fécule de maïs',
    '2 c. à table d\'eau (pour épaissir la sauce)'
  ],
  instructions: [
    'Combiner la farine, le sel et le poivre. Tremper le poulet dans l\'œuf battu et enrober du mélange de farine.',
    'Frire les morceaux de poulet dans un bain d\'huile chauffé à 375°F jusqu\'à ce qu\'ils soient cuits. Réserver.',
    'Dans une grande poêle, mettre l\'eau, le jus de citron, le jus d\'orange, le vinaigre de riz et la sauce soya, puis faire frémir quelques minutes à feu moyen-vif.',
    'Ajouter la cassonade, le zeste d\'orange, le gingembre, l\'ail et le piment. Faire mijoter quelques minutes.',
    'Mélanger la fécule de maïs et l\'eau froide. Épaissir la sauce selon la consistance désirée.',
    'Mettre les morceaux de poulet cuits dans la sauce pour réchauffer.'
  ],
  tags: ['orange', 'friture', 'sauce'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/poulet-a-l-orange',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/poulet-a-l-orange',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/poulet-a-l-orange'
    }
  ],
  source: 'David Cloutier',
  slug: 'poulet-a-lorange'
};
