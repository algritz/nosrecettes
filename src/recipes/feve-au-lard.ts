import { Recipe } from '@/types/recipe'

export const feveAuLard: Recipe = {
  id: 'feve-au-lard',
  title: 'Fêve au lard',
  description: '',
  categories: ['Végétarien'],
  prepTime: { min: 25, max: 25 },
  cookTime: { min: 600, max: 600 },
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    '1 lb de fêve au lard',
    '2 c. à table de moutarde sèche',
    '2 c. à table de mélasse et plus…',
    '¼ à ½ lb de lard salé',
    '2 à 3 oignons',
    'sel et poivre au goût',
    'un peu de ketchup',
    'Sarriette (facultatif)',
  ],
  instructions: [
    'Tremper les fêve une nuit.',
    'Faire bouillir les fêve environ de 20 à 30 minutes en écumant. (Ôter la broue)',
    'Tout mélanger dans une cocotte en y mettant une partie du lard salé au fond.',
    'Cuire au four 8 à 10h à 225 F.',
  ],
  tags: ['gibier', 'fèves', 'cuisson longue'],
  marinatingTime: { min: 720, max: 720 },
  notes: 'On peut remplacer le gibier par du porc',
  slug: 'feve-au-lard',
}
