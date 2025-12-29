import { Recipe } from '@/types/recipe'

export const filetDeTruiteAuCoulisDePoivrons: Recipe = {
  id: 'filet-de-truite-au-coulis-de-poivrons',
  title: 'Filet de truite au coulis de poivrons',
  description:
    "Une recette délicieuse de truite cuite dans un vin blanc, servie avec une sauce aux poivrons, oignons et crème, garnie d'aneth fraîche.",
  categories: ['Poisson'],
  prepTime: { min: 60, max: 60 },
  cookTime: { min: 45, max: 45 },
  servings: 5,
  difficulty: 'Facile',
  ingredients: [
    'Poisson 4 à 6 filets de truite saumonée',
    '2 tasse de vin blanc',
    '1 c. à soupe de beurre',
    '1/3 de c. à thé de sel',
    '1/3 de c. à thé de poivre',
    '1/2 oignon émincé',
    '2 poivrons rouges en dés',
    'le jus de cuisson des truites',
    '1 tasse de crème 35%',
    "1 bouquet d'aneth fraîche hachée",
  ],
  instructions: [
    'Dans une grosse poêle (ou 2 poêlons), portez à ébullition le vin, le beurre ainsi que les épices, le sel et le poivre.',
    'Déposez-y les filets et faites cuire de 3 à 5 minutes (il faut que les filets soient couverts; sinon faites cuire durant 2 minutes de chaque côté).',
    'Retirez et réservez.',
    "Faites revenir dans du beurre, pendant 5 minutes à feu doux, les poivrons et l'oignon en y ajoutant le sel, le poivre et l'aneth.",
    'Ajoutez le jus de cuisson. Portez à ébullition et faites cuire durant 5 minutes.',
    'Ajoutez la crème et réduisez à feu doux durant 15 à 20 minutes (légère ébullition).',
    'Passez le tout au mélangeur pour rendre la sauce homogène.',
    'Remettez les filets de truite dans le poêlon, portez à ébullition avec la sauce, de 2 à 3 minutes.',
  ],
  tags: ['poisson', 'sauce crémeuse', 'poivrons'],
  slug: 'filet-de-truite-au-coulis-de-poivrons',
}
