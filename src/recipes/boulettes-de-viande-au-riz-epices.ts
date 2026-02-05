import { Recipe } from '@/types/recipe';

export const boulettesDeViandeAuRizEpices: Recipe = {
  id: 'boulettes-de-viande-au-riz-epices',
  title: 'Boulettes de viande au riz épicés',
  description: 'Une recette de boulettes de viande épicées avec riz, mijotées dans une sauce tomate, servies avec du pain chaud et croustillant.',
  categories: ['Plats principaux'],
  prepTime: { min: 25, max: 25 },
  cookTime: { min: 30, max: 30 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '400g de viande',
    'Une pincée de poivre de cayenne',
    'Une gousse d\'ail finement hachée',
    'Chapelure',
    'Un oeuf',
    '1/2 c. à thé de sauce Worcestershire',
    '1 c. soupe d\'huile d\'olive',
    '1 petit oignon haché finement',
    '1 gousse d\'ail hachée',
    '2 c. thé de cumin',
    '2 c. thé de coriandre',
    '1/2 tasse de riz long',
    '750 ml de bouillon de légumes (peut être remplacé par boeuf ou poulet)',
    'Une grosse boîte de tomate en cube',
    'Une poignée de coriandre fraîche (peut être remplacée par du persil plat)',
    'Sel et poivre'
  ],
  instructions: [
    'Façonnez les boulettes de viande, et dans une poêle, mettez-y l\'huile à chauffer. Faites-y dorer les boulettes et réservez-les.',
    'Hachez un demi oignon et l\'ail, puis faites-les revenir dans la poêle.',
    'Incorporez les épices et le riz, et laissez cuire 1 minute.',
    'Ajoutez le bouillon et la tomate; laissez mijoter 10-15 minutes.',
    'Remettez les boulettes dans la poêle et laissez mijoter quelques instants.',
    'Ciselez la coriandre.'
  ],
  tags: ['épicé', 'riz', 'mijoté'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/boulettes_viande_riz_epice',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/boulettes_viande_riz_epice',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/boulettes_viande_riz_epice'
    }
  ],
  source: 'David Cloutier',
  slug: 'boulettes-de-viande-au-riz-epices'
};
