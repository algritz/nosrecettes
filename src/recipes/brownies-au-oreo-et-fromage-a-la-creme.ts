import { Recipe } from '@/types/recipe'

export const browniesAuOreoEtFromageALaCreme: Recipe = {
  id: 'brownies-au-oreo-et-fromage-a-la-creme',
  title: 'Brownies au Oréo et fromage à la crème',
  description:
    'Un délicieux gâteau en couches combinant un brownie moelleux, une couche de fromage à la crème et des biscuits Oréo croquants, parfait pour une occasion sucrée.',
  categories: ['Pâtisseries et desserts'],
  prepTime: { min: 30, max: 30 },
  cookTime: { min: 45, max: 45 },
  servings: 20,
  difficulty: 'Facile',
  ingredients: [
    '1 boîte de mélange à brownies, préparée selon les instructions sur l’emballage',
    '24 onces fromage à la crème, ramolli (3 boîtes)',
    '3/4 tasse de sucre',
    '2 œufs, battus',
    '1 cuillère à soupe d’extrait de vanille',
    '36 biscuits Oréo',
  ],
  instructions: [
    'Préchauffer le four à 325° F / 165° C. Graisser un moule à gâteau de 9 × 13.',
    'Préparer le mélange à brownies dans un bol selon les instructions sur la boîte.',
    "Dans un autre bol, mélanger ensemble le fromage à la crème et le sucre jusqu'à ce qu’il n’y ait aucun grumeau.",
    "Ajouter les œufs et la vanille, en remuant jusqu'à consistance uniforme.",
    'Étaler la pâte de brownie en une couche uniforme sur le fond du moule à gâteau.',
    'Placer les biscuits Oréo en une seule couche sur le dessus de la pâte de brownies. Au besoin, couper des biscuits en deux pour remplir les côtés.',
    'Verser la pâte de gâteau au fromage sur le dessus, étaler uniformément sur les biscuits.',
    'Écraser 6 biscuits et saupoudrer sur le dessus de la pâte de gâteau au fromage.',
    "Cuire au four pendant 45 minutes environ, jusqu'à ce que les bords soient légèrement dorés et le milieu soit légèrement moelleux.",
    'Laisser refroidir et réfrigérer pendant au moins 2 heures.',
    'Couper, puis servir.',
  ],
  tags: ['gâteau au fromage', 'brownie', 'Oréo'],
  slug: 'brownies-au-oreo-et-fromage-a-la-creme',
}
