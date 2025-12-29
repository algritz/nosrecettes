import { Recipe } from '@/types/recipe';

export const rotinisStyleHamburgerHelper: Recipe = {
  id: 'rotinis-style-hamburger-helper',
  title: 'Rotinis style Hamburger Helper',
  description: 'Un plat réconfortant de pâtes avec viande hachée, légumes et fromage, mijoté dans une sauce tomate savoureuse.',
  categories: ['Plats principaux'],
  prepTime: { min: 30, max: 30 },
  cookTime: { min: 30, max: 30 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '3 c. à soupe d’huile d’olive',
    '2 carottes moyennes, pelées et coupées en mini-cubes',
    '1 oignon espagnol, haché finement',
    '2 grosses gousses d’ail, hachées finement',
    '1 courgette moyenne, coupée en mini-cubes',
    '1 lb de boeuf haché',
    '1 c. à thé de persil séché',
    '1 c. à thé d’origan séché',
    '1 c. à thé de paprika',
    '1 1/2 tasse de lait',
    '1 1/2 tasse de bouillon de boeuf',
    '1 c. à soupe de sauce Worcestershire',
    '1 c. à thé de Sambal Oelek',
    'Une canne (398ml) de sauce tomate Hunts',
    '1 boite de 450g de rotinis non-cuits',
    '2 tasses de cheddar fort râpé',
    'Sel et poivre du moulin'
  ],
  instructions: [
    'Dans une grande casserole faire chauffer l’huile d’olive et ajouter les carottes, l’oignon et de l’ail. Saler et poivrer, mélanger et cuire pendant 5 minutes en remuant.',
    'Ajouter la courgette et poursuivre la cuisson 3 minutes.',
    'Ajouter le boeuf haché et cuire pendant 4-5 minutes ou jusqu’à ce que la viande soit brunit. Égoutter le gras.',
    'À l’exception du fromage, ajouter le reste des ingrédients puis saler et poivrer. Bien mélanger, couvrir et amener à ébullition.',
    'Réduire à feu moyen-bas et laisser mijoter pendant 12-14 minutes ou jusqu’à ce que les pâtes soient cuites. Remuer de temps en temps. S\'il manque de liquidité et que les pâtes ne sont pas assez cuites, ajouter un peu de lait.',
    'Retirer du feu et ajouter le fromage. Mélanger pour faire fondre le fromage puis servir immédiatement.'
  ],
  tags: ['pâtes', 'viande hachée', 'mijoteuse'],
  slug: 'rotinis-style-hamburger-helper'
};
