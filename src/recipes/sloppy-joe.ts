import { Recipe } from '@/types/recipe'

export const sloppyJoe: Recipe = {
  id: 'sloppy-joe',
  title: 'Sloppy Joe',
  description:
    'A classic American sandwich with seasoned ground beef in a tangy sauce served in hamburger buns.',
  categories: ['Plats principaux'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 40, max: 40 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 lb de bœuf haché',
    '1 oignon, haché',
    '1 tasse de ketchup',
    '4 c. à soupe d’eau',
    '2 c. à soupe de cassonade',
    '2 c. à thé de sauce Worcestershire',
    '2 c. à thé de moutarde jaune',
    '2 c. à thé de vinaigre blanc',
    '2 c. à thé de poudre de chili',
    '1/2 c. à thé de poudre d’ail',
    '1/2 c. à thé de poudre d’oignon',
    '1/2 c. à thé de sel',
    '4 pains hamburgers',
  ],
  instructions: [
    'Chauffer une grande poêle à feu moyen-vif et y faire revenir le bœuf haché avec l’oignon; cuire jusqu’à ce que le bœuf soit uniformément doré, environ 10 minutes.',
    'Égoutter le gras.',
    'Ajouter le ketchup, l’eau, la cassonade, la sauce Worcestershire, la moutarde, le vinaigre, la poudre de chili, la poudre d’ail, la poudre d’oignon et le sel.',
    'Porter le mélange à ébullition à feu vif, puis diminuer à feu moyen-doux, couvrir et laisser mijoter jusqu’à épaississement de la sauce, environ 35-40 minutes.',
    'Servir dans les pains.',
  ],
  tags: ['bœuf', 'sauce', 'sandwich'],
  slug: 'sloppy-joe',
}
