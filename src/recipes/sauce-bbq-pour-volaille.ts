import { Recipe } from '@/types/recipe';

export const sauceBbqPourVolaille: Recipe = {
  id: 'sauce-bbq-pour-volaille',
  title: 'Sauce BBQ pour volaille',
  description: '',
  categories: ['Sauces'],
  prepTime: 10,
  cookTime: 120,
  servings: 1,
  difficulty: 'Facile',
  ingredients: [
    '4 tasses de ketchups',
    '2 tasses de lait',
    '1/4 tasse d’huile',
    '1/3 tasse vinaigre blanc',
    '1/3 tasse sucre blanc',
    '3 gouttes sauce Worcestershire',
    '3 à 6 gouttes Firebarn original',
    '1 oignon rond',
    '1 branche céleri entière'
  ],
  instructions: [
    'Bien mélanger tous les ingrédients',
    'Faire mijoter 2h à feu doux',
    'Retirer les légumes'
  ],
  tags: ['barbecue', 'sauce', 'fumée'],
  notes: 'Ce conserve 15 jours au réfrigérateur',
  slug: 'sauce-bbq-pour-volaille'
};
