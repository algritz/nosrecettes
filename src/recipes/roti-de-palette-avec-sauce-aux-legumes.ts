import { Recipe } from '@/types/recipe';

export const rotiDePaletteAvecSauceAuxLegumes: Recipe = {
  id: 'roti-de-palette-avec-sauce-aux-legumes',
  title: 'Rôti de palette avec sauce aux légumes',
  description: 'Une recette de rôti de palette mijoté avec une sauce crémeuse aux légumes, servi avec des pâtes ou des pommes de terre pilées.',
  categories: ['Plats principaux'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 180, max: 180 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 rôti de palette',
    '1 Poireau',
    '2 Branches de céleri',
    '2 Carotte',
    '1 Oignon',
    '2 gousses d\'ail',
    '1/4 de tasse de pâte de tomate',
    '3 tasses de vin rouge',
    '2 tasses de bouillon de bœuf',
    'lait'
  ],
  instructions: [
    'Dans une cocotte, verser de l\'huile et faire dorer le rôti de palette sur tous les côtés et réserver dans une assiette.',
    'Couper grossièrement le poireau, le céleri, l\'oignon et les carottes.',
    'Dans la même cocotte, faire dorer les légumes quelques minutes.',
    'Une fois les légumes colorés, ajouter l\'ail, la pâte de tomate et le vin rouge et laisser mijoter environ 7 minutes.',
    'Ajouter le bouillon de bœuf et remettre la viande dans la cocotte.',
    'S\'assurer que la viande soit bien recouverte de liquide au complet.',
    'Cuire 2h30 à 3h à 350°F ou jusqu\'à ce qu\'elle s\'effiloche à la fourchette.',
    'Une fois la viande parfaitement cuite, la mettre dans un plat, l\'effilocher et réserver pour qu\'elle reste chaude.',
    'Verser le bouillon et les légumes dans un mélangeur et bien mixer.',
    'Ajouter un peu de lait pour en faire une sauce crémeuse.',
    'Servir la viande et verser la sauce aux légumes dessus.'
  ],
  tags: ['mijoteuse', 'sauce crémeuse', 'bœuf'],
  slug: 'roti-de-palette-avec-sauce-aux-legumes'
};
