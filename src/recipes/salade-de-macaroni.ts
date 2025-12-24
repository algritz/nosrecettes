import { Recipe } from '@/types/recipe';

export const saladeDeMacaroni: Recipe = {
  id: 'salade-de-macaroni',
  title: 'Salade de macaroni',
  description: 'Une salade de macaroni rafraîchissante avec légumes croquants et sauce crémeuse, idéale pour un repas léger ou un picnic.',
  categories: ['Salades'],
  prepTime: 20,
  cookTime: 15,
  servings: 1,
  difficulty: 'Facile',
  ingredients: [
    '2 tasses de macaroni non cuit',
    '1/2 tasse de poivron rouge ou orange ou jaune coupé en dés',
    '1/2 tasse de poivron vert coupé en dés',
    '1/2 tasse de céleri coupé en dés',
    '1 oignon vert coupé finement',
    '1/2 tasse de carottes râpées',
    '1/2 tasse de mayonnaise',
    '1 cuillère à soupe de vinaigre de cidre de pommes',
    '1 cuillère à soupe de sucre',
    '1 cuillère à thé de sel',
    '1 cuillère à thé de poivre'
  ],
  instructions: [
    'Faire cuire les macaronis.',
    'Égouttez les pâtes et mettez de côté.',
    'Dans un petit bol, mélanger la mayonnaise, le vinaigre de cidre de pomme, le sucre, le sel et le poivre.',
    'Dans un grand bol, mettre les légumes, les pâtes et la sauce et bien mélanger.',
    'Couvrir et mettre au réfrigérateur pendant 2 à 4 heures avant de servir.'
  ],
  tags: ['salade', 'mayonnaise', 'réfrigération'],
  marinatingTime: 240,
  notes: 'Vous pouvez y ajouter du jambon en cube.',
  slug: 'salade-de-macaroni'
};
