import { Recipe } from '@/types/recipe'

export const filetDePorcSauceMoutarde: Recipe = {
  id: '1759439126921',
  title: 'Filet de porc sauce moutarde',
  description: '',
  categories: ['Porc'],
  prepTime: { min: 5, max: 5 },
  cookTime: { min: 15, max: 15 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '15 ml (1 c. à soupe) beurre',
    '15 ml (1 c. à soupe) Huile',
    'Filet de porc, coupé en tranches',
    '200 ml (⅘ tasse) Vin blanc sec',
    '35% 150 ml (⅔ tasse) Crème',
    "30 ml (2 c. à soupe) Moutarde à l'ancienne",
    'Poivre-Au goût',
  ],
  instructions: [
    'Chauffez le beurre et l’huile dans un poêlon. Lorsque le beurre est mousseux, saisissez la viande 2 à 3 minutes de chaque côté.',
    'Réduisez le feu et faites cuire 4 à 5 minutes. Réservez. Déposez la viande dans une assiette de service et gardez au chaud.',
    'À feu vif, versez le vin dans le poêlon en déglaçant le fond avec une cuillère de bois. Faites bouillir jusqu’à ce que le vin soit réduit à environ 45 ml (3 c. à soupe).',
    'Ajoutez la crème, la moutarde et le poivre; mélangez. Faites bouillir légèrement.',
    'Versez la sauce sur le porc et servez accompagné de légumes de saison.',
  ],
  tags: ['rapide', 'simple'],
  images: [
    {
      small:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/1000014459',
      medium:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/1000014459',
      large:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/1000014459',
    },
  ],
  source:
    'https://ici.radio-canada.ca/mordu/recettes/1706/filet-porc-sauce-moutarde',
  slug: 'filet-de-porc-sauce-moutarde',
}
