import { Recipe } from '@/types/recipe';

export const sushiSMores: Recipe = {
  id: 'sushi-s-mores',
  title: 'Sushi S\'mores',
  description: 'Une recette de s\'mores sous forme de sushi, combinant guimauves, céréales, biscuits Graham et chocolat, pour une présentation originale et gourmande.',
  categories: ['Pâtisseries et desserts'],
  prepTime: 20,
  cookTime: 15,
  servings: 15,
  difficulty: 'Facile',
  ingredients: [
    '1/4 tasse de beurre',
    '10 oz. mini guimauves',
    '5 tasse de Céréales Rice Krispies',
    '2 tasse fluff de guimauve, 1 pot',
    '1 tasse biscuits Graham broyés',
    '1 tasse de pépites de chocolat mi-sucré, fondues'
  ],
  instructions: [
    'Tapisser une plaque à pâtisserie de papier ciré et graisser avec un aérosol de cuisson.',
    'Dans une casserole à feu doux, faites fondre le beurre.',
    'Ajouter les guimauves et remuer jusqu\'à ce que le mélange soit fondu.',
    'Éteindre le feu et incorporer immédiatement les céréales.',
    'Remuer jusqu\'à ce que complètement enrobé.',
    'Presser le mélange sur la plaque préparée et tapoter pour faire un rectangle plat et fin.',
    'Étaler la guimauve fluff en une seule couche et saupoudrer de biscuits Graham, en appuyant pour les coller.',
    'Verser le chocolat fondu sur les biscuits Graham et utiliser une spatule pour bien lisser.',
    'Couper les sushis en deux dans le sens de la longueur, puis rouler les moitiés en commençant par le côté le plus long.',
    'Réfrigérer jusqu\'à consistance, 1 heure.',
    'Couper en tranches de sushi et servir avec du chocolat fondu.'
  ],
  tags: ['gourmandise', 'guimauve', 'chocolat'],
  slug: 'sushi-s-mores'
};
