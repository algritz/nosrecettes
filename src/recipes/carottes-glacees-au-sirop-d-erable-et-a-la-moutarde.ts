import { Recipe } from '@/types/recipe'

export const carottesGlaceesAuSiropDErableEtALaMoutarde: Recipe = {
  id: 'carottes-glacees-au-sirop-d-erable-et-a-la-moutarde',
  title: 'Carottes glacées au sirop d’érable et à la moutarde',
  description:
    'Des carottes qui sont presque un dessert ! Carottes glacées au sirop d’érable et à la moutarde',
  categories: ['Légumes'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 60, max: 60 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '8 carottes coupées en bâtonnets',
    'bouillon de poulet',
    'eau pour cuisson des carottes',
    "½ tasse (125 ml) d'eau bouillante de cuisson des carottes",
    "1/3 tasse de sirop d'érable",
    '1/4 tasse de beurre',
    '1 c. à thé de moutarde de Dyjon',
    'sel et poivre au goût',
  ],
  instructions: [
    'Peler les carottes et les couper en bâtonnets.',
    "Placer les carottes dans une casserole, ajouter de l'eau et du bouillon de poulet et faire bouillir, mais pas trop, elles doivent être encore un peu croquantes.",
    "Prendre une demi-tasse d'eau de cuisson des carottes qui contient du bouillon de poulet et réserver.",
    'Égoutter les carottes et mettre de côté dans une assiette.',
    "Prendre le chaudron qui a servi à la cuisson des carottes et y mettre la demi-tasse d'eau de cuisson, le sirop d'érable et la moutarde et faire bouillir 5 minutes.",
    "Ajouter les carottes, saler, poivrer et faire cuire jusqu'à ce que ces dernières soient glacées.",
    'Servir très chaud.',
  ],
  tags: ['sirop d’érable', 'moutarde', 'glacé'],
  slug: 'carottes-glacees-au-sirop-d-erable-et-a-la-moutarde',
}
