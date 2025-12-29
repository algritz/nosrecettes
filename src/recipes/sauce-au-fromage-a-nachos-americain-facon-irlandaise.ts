import { Recipe } from '@/types/recipe'

export const sauceAuFromageANachosAmericainFaconIrlandaise: Recipe = {
  id: 'sauce-au-fromage-a-nachos-americain-facon-irlandaise',
  title: 'Sauce au fromage à Nachos américain, façon irlandaise',
  description:
    'Une sauce au fromage crémeuse et épicée, parfaite pour accompagner des nachos ou des croustilles de maïs.',
  categories: ['Sauces'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 15, max: 15 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '2 cuillères à soupe beurre',
    "1 gousse d'ail, émincée",
    '2 cuillères à soupe farine',
    '1/4 tasse de lait',
    '1/4 tasse de bière Guinness',
    '2 1/2 tasse fromage cheddar orange râpé',
    'sel casher',
    'Poivre noir fraîchement moulu',
    '1 pincée de poivre de Cayenne',
  ],
  instructions: [
    'Dans une petite casserole à feu moyen, faire fondre le beurre.',
    "Incorporer l'ail et la farine et cuire jusqu'à ce que l'ail soit parfumé, environ 1 minute.",
    'Ajouter la bière brune et le lait et porter le mélange à ébullition, réduire légèrement le feu.',
    "Incorporer le fromage et cuire jusqu'à ce que le fromage soit fondu.",
    'Assaisonner avec du sel, du poivre et du poivre de Cayenne.',
  ],
  tags: ['fromage', 'épicé', 'croustilles'],
  accompaniment: 'Tostitos ou autre croustilles de Maïs',
  slug: 'sauce-au-fromage-a-nachos-americain-facon-irlandaise',
}
