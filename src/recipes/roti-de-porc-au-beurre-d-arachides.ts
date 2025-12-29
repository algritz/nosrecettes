import { Recipe } from '@/types/recipe'

export const rotiDePorcAuBeurreDArachides: Recipe = {
  id: 'roti-de-porc-au-beurre-d-arachides',
  title: 'Rôti de porc au beurre d’arachides',
  description:
    "Un rôti de porc tendre nappé d'une sauce crémeuse au beurre d’arachides, sauce soja et sambal oelek.",
  categories: ['Vollaille', 'Plats principaux'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 30, max: 30 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 rôti de longe de porc désossé et dégraissé environ 1 kg (2 lbs)',
    "1/2 à 3/4 tasse de beurre d’arachides croquant 'crunchy' naturel",
    '1/2 tasse de crème à 35%',
    '1 c. à soupe de sauce soya',
    '1 c. à thé de sambal oelek',
    'Quelques gouttes d’huile de sésame (facultatif)',
    'Sel et poivre du moulin',
  ],
  instructions: [
    'Déposer le rôti dans une poêle, l’assaisonner et le badigeonner de beurre d’arachides.',
    'Cuire au four préchauffé à 350°F jusqu’à ce que la température interne du rôti atteigne 135°F, soit environ 30 minutes.',
    'Sortir le rôti du four et le gratter à l’aide d’un couteau pour en retirer le beurre d’arachides.',
    'Déposer le rôti dans un plat, couvrir de papier aluminium et le laisser reposer.',
    'Déglacer la poêle avec la crème.',
    'Récupérer le jus de cuisson du rôti en l’ajoutant à la sauce.',
    'Ajouter la sauce soya et le sambal oelek.',
    'Bien mélanger et laisser cuire environ 2 minutes.',
    'Servir les tranches de rôti nappées de sauce.',
  ],
  tags: ['beurre d’arachides', 'sauce crémeuse', 'porc'],
  slug: 'roti-de-porc-au-beurre-d-arachides',
}
