import { Recipe } from '@/types/recipe';

export const painMaisonFacileAFaire: Recipe = {
  id: 'pain-maison-facile-a-faire',
  title: 'Pain maison facile à faire',
  description: 'Pain maison facile à faire',
  categories: ['Pains'],
  prepTime: { min: 25, max: 25 },
  cookTime: { min: 35, max: 35 },
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    '1 paquet de levure sèche instantané',
    '2¼ tasses d’eau tiède',
    '¼ tasse de sucre',
    '1 cuillère à soupe de sel',
    '2 cuillères à soupe d’huile',
    '5½ à 6½ tasses de farine'
  ],
  instructions: [
    'Dans un grand bol, dissoudre la levure dans l’eau tiède avec le sucre.',
    'Lorsque la levure est pétillante et mousseuse, ajouter l’huile, 4 tasses de farine et le sel, puis mélanger jusqu’à homogénéité.',
    'Ajouter la farine restante, ½ tasse à la fois, pour former une pâte lisse. La pâte devrait rester légèrement collante, mais sans trop non plus.',
    'Pétrir la pâte de 5 à 7 minutes.',
    'Former une boule et placer la pâte dans un bol huilé.',
    'Laisser reposer pendant une heure, ou jusqu’à ce que la pâte ait doublé.',
    'Diviser la pâte en deux.',
    'Pétrir pour faire 2 pains et mettre dans des moules à pains préalablement beurrés.',
    'Couvrir et laisser gonfler la pâte pendant une heure.',
    'Préchauffer le four à 375 degrés F et cuire au four de 30 à 35 minutes.'
  ],
  tags: ['pain maison', 'levure', 'pâte'],
  slug: 'pain-maison-facile-a-faire'
};
