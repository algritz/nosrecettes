import { Recipe } from '@/types/recipe';

export const painDoreeAuSaumonFumeEtCremeSure: Recipe = {
  id: 'pain-doree-au-saumon-fume-et-creme-sure',
  title: 'Pain dorée au saumon fumé et crème sure',
  description: 'Pain dorée au saumon fumé et crème sure',
  categories: ['Poisson', 'Déjeuners'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 10, max: 10 },
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    '2 gros oeufs (ou 3 petits)',
    '50 ml de crème 15% champêtre',
    '1 pincée de fleur de sel',
    '4 muffins anglais coupés en 2',
    '1 c. à table de beurre',
    '6 c. à table de crème sure',
    '100 g de saumon fumé',
    'Aneth frais émincé'
  ],
  instructions: [
    'Battez ensemble les oeufs et la crème, ajoutez la fleur de sel et faites imbiber les muffins anglais.',
    'Dans une poêle antiadhésive chauffée à feu moyen-élevé, faites fondre le beurre, déposez-y les muffins anglais et laissez d’un côté puis de l’autre jusqu’à ce qu’ils aient pris une belle coloration et soient cuits.',
    'Déposez dans de grandes assiettes, tartinez chaque demi-muffin anglais 1 1/2 c. à table de crème sure, déposez du saumon fumé et décorez d’aneth.'
  ],
  tags: ['fumé', 'crème sure', 'grill'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/pain-doree-au-saumon-fume-et-creme-sure',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/pain-doree-au-saumon-fume-et-creme-sure',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/pain-doree-au-saumon-fume-et-creme-sure'
    }
  ],
  source: 'David Cloutier',
  slug: 'pain-doree-au-saumon-fume-et-creme-sure'
};
