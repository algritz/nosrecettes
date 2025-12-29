import { Recipe } from '@/types/recipe'

export const biscuitsAuNutellaDeYorrick: Recipe = {
  id: 'biscuits-au-nutella-de-yorrick',
  title: 'Biscuits au Nutella de Yorrick',
  description:
    "Recette de biscuits au Nutella avec une pâte sablée, garnis de Nutella, cuits au four jusqu'à dorure.",
  categories: ['Pâtisseries et desserts'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 15, max: 15 },
  servings: 10,
  difficulty: 'Facile',
  ingredients: [
    'Nutella',
    '1 œuf',
    "1 c. à café d'extrait de vanille",
    '1/2 c. à café de bicarbonate',
    '1/2 c. à café de poudre à pâte',
    '220 g de farine',
    '150 g de cassonade',
    '120 g de beurre mou',
  ],
  instructions: [
    'Fouettez dans un grand bol le beurre mou et la cassonade avec la vanille.',
    "Lorsque le mélange est crémeux, ajoutez l'œuf, fouettez encore.",
    "Tamisez alors la farine, la poudre à pâte et le bicarbonate, puis mélangez avec une spatule jusqu'à formation d'une pâte homogène.",
    'Placez au frigo 20 minutes.',
    'Divisez la pâte en boules de tailles égales, étalez la moitié des boules sur une plaque recouverte de papier cuisson.',
    'Disposez au centre une bonne cuillère à café ou plus de Nutella.',
    'Recouvrez avec un second cercle de pâte à cookie, soudez bien les deux en appuyant sur les bords avec vos doigts.',
    "Cuire à 350°F (180°C) pendant 15 minutes, les bords doivent être dorés, le centre peut paraître encore pas tout à fait cuit, c'est normal.",
    'Laissez refroidir sur une grille et dégustez.',
  ],
  tags: ['pâtisserie', 'Nutella', 'cuisson au four'],
  slug: 'biscuits-au-nutella-de-yorrick',
}
