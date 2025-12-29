import { Recipe } from '@/types/recipe'

export const painsFourresPouletEtSauceBbq: Recipe = {
  id: 'pains-fourres-poulet-et-sauce-bbq',
  title: 'Pains fourrés poulet et sauce BBQ',
  description:
    'Une recette de pains garnis de poulet effiloché, fromage mozzarella, herbes et sauce BBQ, cuits au four.',
  categories: ['Sandwichs', 'Plats principaux'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 20, max: 20 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '3 tasses de poulet effiloché',
    '1 1/2 tasses de fromage mozzarella râpée',
    'Le quart d’un oignon rouge tranché finement',
    '1/4 de tasse d’herbes fraîches tranchées (coriandre, persil, basilic, etc.)',
    '3/4 de tasse de sauce BBQ',
    '1 piment fort',
    '1 pain baguette ou petits pains fourrés',
  ],
  instructions: [
    'Dans un grand bol, ajouter le poulet, 1 tasse de mozzarella, l’oignon, les herbes et 3/4 tasse de sauce BBQ. Bien mélanger.',
    'Faites une tranchée sur le dessus de votre pain baguette.',
    'Ajouter le mélange de poulet et le fromage restant.',
    'Faire cuire pendant 20 minutes dans un four préchauffé à 325 °F.',
  ],
  tags: ['BBQ', 'fromage', 'garniture'],
  slug: 'pains-fourres-poulet-et-sauce-bbq',
}
