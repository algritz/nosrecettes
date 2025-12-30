import { Recipe } from '@/types/recipe';

export const saumonGlaceALerableSurPlancheDeCedre: Recipe = {
  id: 'saumon-glace-a-l-erable-sur-planche-de-cedre',
  title: 'Saumon glacé à l\'érable sur planche de cèdre',
  description: 'Saumon glacé à l\'érable cuit sur une planche de cèdre trempée, avec une marinade à la vinaigrette balsamique et sirop d\'érable, garni d\'oignons rouges.',
  categories: ['Plats principaux', 'Poisson', 'Barbecue'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 20, max: 20 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 planche de cèdre non traitée (environ 7 x 14 x 1 po)',
    '1 c. à soupe d\'huile',
    '1/2 tasse de Vinaigrette Kraft au vinaigre balsamique vieilli et à l\'huile d\'olive extra-vierge ou ordinaire',
    '1/4 tasse de sirop d\'érable',
    '1 filet de saumon, coupe du centre, sans la peau',
    '1 petit oignon rouge, finement tranché, séparé en rondelles'
  ],
  instructions: [
    'Faire tremper la planche dans l\'eau durant 4 heures.',
    'Chauffer le barbecue à feu moyen.',
    'Déposer la planche sur la grille du barbecue ; fermer le couvercle.',
    'Chauffer 5 min ou jusqu\'à ce que la planche fume, puis la badigeonner d\'huile.',
    'Mélanger la vinaigrette et le sirop d\'érable ; verser sur le saumon placé dans un plat peu profond.',
    'Le retourner pour l\'enrober uniformément.',
    'Placer le saumon sur la planche ; garnir d\'oignons.',
    'Refermer le couvercle du barbecue.',
    'Griller pendant 20 min'
  ],
  tags: ['érable', 'planche de cèdre', 'barbecue'],
  source: 'David Cloutier',
  slug: 'saumon-glace-a-lerable-sur-planche-de-cedre'
};
