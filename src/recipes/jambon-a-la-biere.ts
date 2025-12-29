import { Recipe } from '@/types/recipe'

export const jambonALaBiere: Recipe = {
  id: 'jambon-a-la-biere',
  title: 'Jambon à la bière',
  description: '',
  categories: ['Vollaille', 'Plats principaux'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 240, max: 240 },
  servings: 6,
  difficulty: 'Facile',
  ingredients: [
    "1 gros jambon fumé style toupie (l'épaule de porc style Picnic, avec l'os des Pierrafeu, convient aussi)",
    '1/2 tasse de cassonade',
    '15 clous de girofle (ou encore du piment de la Jamaïque)',
    '1 c. à thé de moutarde sèche (facultatif)',
    "1 bière (blonde, ou pour personnaliser la chose, allez-y pour une au sarrasin ou à l'abricot)",
    "1/2 tasse d'eau",
  ],
  instructions: [
    'Retirez le filet et la couenne du jambon',
    "Déposez-le dans une grosse marmite remplie d'eau et faites bouillir 3-4h en changeant l'eau une fois à mi-cuisson",
    'Déposez le jambon dans une cocotte (pré-trempée, si elle est en terre cuite)',
    'Semez de clous de girofle (ou de piment de la Jamaïque)',
    "Ajoutez 1/2 tasse de cassonade, la bière et l'eau",
    "Couvrez et faites cuire au four à 275°F pendant 3-4h, ou jusqu'à ce que la viande se défasse toute seule à la fourchette.",
  ],
  tags: ['jambon', 'bière', 'cuisson lente'],
  slug: 'jambon-a-la-biere',
}
