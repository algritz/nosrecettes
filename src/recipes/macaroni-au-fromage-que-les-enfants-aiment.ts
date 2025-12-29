import { Recipe } from '@/types/recipe';

export const macaroniAuFromageQueLesEnfantsAiment: Recipe = {
  id: 'macaroni-au-fromage-que-les-enfants-aiment',
  title: 'Macaroni au fromage que les enfants aiment',
  description: '',
  categories: ['Plats principaux'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 30, max: 30 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 boite de macaronis crus',
    'Un peu d\'huile d\'olive',
    '1 lb de bœuf haché',
    '1 c. à soupe de poudre de chili',
    '1 boîte de crème de tomate',
    '1 petite boîte de sauce tomate',
    '1 enveloppe de sauce Mac & Cheese Pacini',
    '2 branches de céleri coupé en petits dés',
    '2 petits oignons coupés en petits dés',
    '1 petit piment fort haché finement',
    'Sel poivre au gout'
  ],
  instructions: [
    'Faire cuire les macaronis tel qu\'indiqué l\'emballage',
    'Faire cuire la sauce Mac & Cheese tel qu\'indiqué sur l\'emballage.',
    'Faire dorer la viande dans l\'huile d\'olive.',
    'Ajoutez les légumes.',
    'Salé poivrer et ajouter la poudre de piment.',
    'Ajouter la crème et la sauce tomate.',
    'Ajouter les macaronis cuits et la sauce Mac & Cheese Pacini à la viande.',
    'Bien brasser et servir.'
  ],
  tags: ['fromage', 'bœuf', 'piment'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/macaroni-au-fromage-que-les-enfants-aiment',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/macaroni-au-fromage-que-les-enfants-aiment',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/macaroni-au-fromage-que-les-enfants-aiment'
    }
  ],
  source: 'David Cloutier',
  slug: 'macaroni-au-fromage-que-les-enfants-aiment'
};
