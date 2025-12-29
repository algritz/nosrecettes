import { Recipe } from '@/types/recipe'

export const biscuitAuNutella3Ingredients: Recipe = {
  id: 'biscuit-au-nutella-3-ingredients',
  title: 'Biscuit au Nutella 3 ingrédients',
  description:
    'Recette simple de biscuits au Nutella avec une garniture de noisettes, facile à préparer et idéale pour une collation rapide.',
  categories: ['Pâtisseries et desserts'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 10, max: 10 },
  servings: 20,
  difficulty: 'Facile',
  ingredients: [
    '1 gros œuf',
    '3/4 de tasse de Nutella à la température de la pièce',
    '1 tasse de farine tout usage',
    'Garniture:',
    '1/2 tasse de Nutella à la température de la pièce',
    '1/4 de tasse de noisettes hachées (facultatif)',
  ],
  instructions: [
    'Tapissez une plaque à cuisson d’une feuille de papier parchemin.',
    'Battre l’œuf et le Nutella ensemble pendant environ 2 minutes.',
    'Ajouter la farine et battre jusqu’à homogénéité.',
    'Couvrir et laisser reposer au réfrigérateur pendant 10 à 15 minutes.',
    'Préchauffer le four à 350 °F.',
    'Utilisez une cuillère à soupe pour former environ 20 à 25 boules de pâte que vous étendez sur la plaque de cuisson.',
    'Avec vos doigts, former un puits au centre de chaque biscuit.',
    'Remplir avec du Nutella.',
    'Saupoudrer de noisettes si désiré.',
    'Faire cuire pendant environ 10 minutes.',
    'Laisser refroidir.',
    'Conserver dans un contenant hermétique pour au moins une semaine.',
  ],
  tags: ['Nutella', 'biscuits', 'facile'],
  slug: 'biscuit-au-nutella-3-ingredients',
}
