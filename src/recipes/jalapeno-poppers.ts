import { Recipe } from '@/types/recipe';

export const jalapenoPoppers: Recipe = {
  id: '1764532625845',
  title: 'Jalapeno Poppers',
  description: 'Jalapeños farcis au fromage à la crème, enveloppés de bacon et laqués de sauce BBQ, cuits au gril.',
  categories: ['Amuse-geules', 'Barbecue'],
  prepTime: 20,
  cookTime: 15,
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    'Piments jalapeño',
    'Bacon',
    'Fromage Philadelphia en brique',
    'Sauce BBQ sucrée, au choix'
  ],
  instructions: [
    'Ouvrir les jalapeños sur le dessus et les épiner, en conservant le petit chapeau.',
    'Couper le Philadelphia en bâtonnets.',
    'Insérer un bâtonnet de fromage dans chaque piment et remettre le dessus.',
    'Enrober chaque piment de bacon.',
    'Badigeonner de sauce BBQ sucrée et cuire sur le BBQ jusqu\'à ce que le bacon soit cuit.',
    'Rebadigeonner de sauce en cours de cuisson, au besoin.'
  ],
  tags: ['jalapeño', 'bacon', 'fromage à la crème'],
  source: 'David Cloutier',
  slug: 'jalapeno-poppers'
};
