import { Recipe } from '@/types/recipe'

export const preparationAuRiz: Recipe = {
  id: 'preparation-au-riz',
  title: 'Préparation au riz',
  description: 'Préparation au riz',
  categories: ['Plats principaux'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 60, max: 60 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '3lbs de bœuf haché',
    '1 boîte de pois (20oz)',
    '1 ½ tasses de riz minute',
    '1 boîte de tomate (28oz)',
    '1 oignon',
    'beurre',
    'sel',
    'poivre',
  ],
  instructions: [
    "Faire frire l'oignon et le beurre, ajouter le bœuf haché, quand c'est cuit ajouter les pois, le riz cuit et les tomates. Saler et poivrer.",
    "Mettre au four à 350 F jusqu'à ce que le dessus soit rôti.",
  ],
  tags: ['ragoût', 'four', 'simple'],
  notes: 'Source: Grand-maman Aline',
  slug: 'preparation-au-riz',
}
