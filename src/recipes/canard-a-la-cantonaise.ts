import { Recipe } from '@/types/recipe'

export const canardALaCantonaise: Recipe = {
  id: 'canard-a-la-cantonaise',
  title: 'Canard à la cantonaise',
  description:
    'Recette de canard à la cantonaise avec marinade aux saveurs asiatiques, servi avec du riz.',
  categories: ['Plats principaux'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 20, max: 20 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '4 poitrines de canard de 150 g, avec la peau',
    "60 ml de sauce d'huîtres",
    '30 ml de 5 épices chinois',
    "15 ml d'huile d'arachide",
    '30 ml de sauce soya légère',
    '30 ml de vin de riz de Shaoshing ou de xérès',
  ],
  instructions: [
    'Mettre tous les ingrédients pour la marinade dans un bol et bien mélanger.',
    'Ajouter le canard et le retourner pour bien l’enrober.',
    'Laisser mariner 20 min.',
    'Préchauffer le four à 350 °F (180 °C).',
    'Mettre le canard sur une plaque à rôtir et réserver la marinade.',
    'Rôtir le canard au four 20 min.',
    'Sortir du four et laisser reposer 12 min.',
    'Mettre la marinade réservée dans un petit wok ou une poêle et porter à ébullition.',
    'Pour servir, couper le canard en tranches et servir en nappant de sauce et accompagner de riz.',
  ],
  tags: ['marinade', 'cuisine asiatique', 'rôtir'],
  slug: 'canard-a-la-cantonaise',
}
