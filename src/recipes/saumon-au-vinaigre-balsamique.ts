import { Recipe } from '@/types/recipe';

export const saumonAuVinaigreBalsamique: Recipe = {
  id: 'saumon-au-vinaigre-balsamique',
  title: 'Saumon au Vinaigre balsamique',
  description: 'Une recette savoureuse de filets de saumon cuits avec une sauce au vinaigre balsamique, miel, ail et moutarde, garnie de graines de sésame.',
  categories: ['Poisson', 'Plats principaux'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 20, max: 20 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '6 filets de saumon',
    '1 cuillère à café d’huile d’olive',
    '4 gousses d’ail émincées',
    '1 cuillère à soupe de vin blanc',
    '1 cuillère à soupe de miel',
    '8 cl de vinaigre balsamique',
    '2 cuillères à café de moutarde de Dijon',
    'Sel et poivre du moulin',
    '1 cuillère à soupe d’origan frais haché',
    'Une pincée de flocons de piment rouge',
    'Graines de sésame'
  ],
  instructions: [
    'Chauffer l’huile dans une poêle à feu moyen et faire revenir l’ail.',
    'Ajouter le vin blanc, le miel, le vinaigre balsamique, la moutarde, les flocons de piment rouge, le sel et le poivre.',
    'Laisser mijoter à découvert pendant environ 3 minutes.',
    'Retirer la poêle du feu et ajouter l’origan.',
    'Disposer les filets de saumon dans le plat de cuisson et badigeonner avec un peu de sauce.',
    'Enfourner.',
    'Badigeonner les filets de temps en temps avec le reste de la sauce.',
    'Cuire environ 10 à 14 minutes.',
    'À la sortie du four, parsemer de graines de sésame.'
  ],
  tags: ['vinaigre balsamique', 'miel', 'saumon'],
  slug: 'saumon-au-vinaigre-balsamique'
};
