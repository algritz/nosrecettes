import { Recipe } from '@/types/recipe'

export const filetDePorcALaSauceBalsamiqueEtErable: Recipe = {
  id: '1766770310470',
  title: 'Filet de porc à la sauce balsamique et érable',
  description:
    'Une recette savoureuse de filet de porc mariné dans une sauce balsamique et érable, grillé et servi avec une sauce sirupeuse.',
  categories: ['Porc', 'Plats principaux'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 20, max: 20 },
  marinatingTime: { min: 480, max: 480 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Base',
      items: ['2 filets de porc', '1/2 tasse de sirop d’érable'],
    },
    {
      title: 'Marinade',
      items: [
        '3/4 de tasse de bouillon de poulet',
        '3 c. à soupe de vinaigre balsamique',
        '2 c. à soupe de cassonade',
        '1 c. à soupe de moutarde de Dijon',
        '1 c. à soupe d’ail haché',
        '1 c. à soupe de thym haché',
        'Sel et poivre au goût',
      ],
    },
  ],
  instructions: [
    'Dans un bol, mélanger les ingrédients de la marinade.',
    'Verser le tiers de la marinade dans un gros sac ziploc et y ajouter le filet de porc.',
    'Retourner le filet plusieurs fois pour bien l’enrober de marinade.',
    'Laisser mariner au frais de 4 à 8 heures.',
    'Réserver le reste de la marinade au frais.',
    'Au moment de la cuisson, préchauffer le barbecue à puissance moyenne-élevée.',
    'Égoutter le filet de porc et jeter la marinade.',
    'Sur la grille chaude et huilée du barbecue, déposer le filet de porc.',
    'Fermer le couvercle et cuire le filet de 16 à 20 minutes, en le retournant plusieurs fois.',
    'Pendant ce temps, verser la marinade réservée dans une casserole.',
    'Incorporer le sirop d’érable et porter à ébullition à feu moyen.',
    'Laisser mijoter de 6 à 10 minutes, jusqu’à l’obtention d’une sauce sirupeuse.',
    'Badigeonner le filet avec un peu de sauce.',
    'Poursuivre la cuisson 2 minutes.',
    'Transférer le filet dans une assiette et laisser reposer de 5 à 7 minutes avant de trancher.',
    'Servir le filet avec le reste de la sauce.',
  ],
  tags: ['barbecue', 'sauce balsamique', 'érable'],
  source: 'David Cloutier',
  notes: 'Excellente recette de semaine.',
  slug: 'filet-de-porc-a-la-sauce-balsamique-et-erable',
}
