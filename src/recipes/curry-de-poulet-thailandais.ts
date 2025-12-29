import { Recipe } from '@/types/recipe'

export const curryDePouletThailandais: Recipe = {
  id: 'curry-de-poulet-thailandais',
  title: 'Curry de poulet thaïlandais',
  description:
    'Un curry de poulet thaïlandais parfumé, riche en saveurs de lait de coco, pâte de curry rouge, et herbes fraîches.',
  categories: ['Plats principaux', 'Végétarien'],
  prepTime: { min: 25, max: 25 },
  cookTime: { min: 40, max: 40 },
  servings: 3,
  difficulty: 'Facile',
  ingredients: [
    '1 oignon en tranche',
    "1 c. à soupe d'huile d'arachide",
    '1 2/3 de tasse (14 oz) de lait de coco',
    '2 c. à soupe de pâte de curry rouge',
    '2 c. à soupe de sauce à poisson Nuoc-mâm',
    '1 c. à soupe de cassonade',
    '250g (8 oz) de pomme de terre grelot coupée en deux',
    '2 poitrines de poulet coupées en cube',
    '1 c. à soupe de jus de citron vert frais',
    '2 c. à soupe de menthe fraîche hachée grossièrement',
    '1 c. à soupe de basilic frais haché',
    '2 c. à soupe de piments rouges en petit cube',
    'Sel et poivre au goût',
  ],
  instructions: [
    "Faire chauffer l'oignon dans l'huile d'arachide.",
    'Verser le lait de coco et porter à ébullition.',
    'Lorsque le tout est boueux, ajouter la pâte de curry rouge, la sauce à poisson Nuoc-mâm et la cassonade et bien mélanger.',
    'Ajouter les pommes de terre, couvrir et faire cuire pendant 20 minutes à feu doux.',
    "Ajouter les morceaux de poulet et faire cuire à couvert encore 15 minutes ou jusqu'à ce que le poulet et les pommes de terre soient tendres.",
    'En fin de cuisson, tout en remuant, ajouter le jus de citron vert, la menthe, le basilic et le piment et servir.',
  ],
  tags: ['curry', 'thaï', 'herbes fraîches'],
  slug: 'curry-de-poulet-thailandais',
}
