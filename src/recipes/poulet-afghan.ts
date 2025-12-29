import { Recipe } from '@/types/recipe'

export const pouletAfghan: Recipe = {
  id: 'poulet-afghan',
  title: 'Poulet Afghan',
  description:
    'Une recette de poulet mariné au yogourt et épices, grillé et servi avec des légumes frais et citron.',
  categories: ['Vollaille'],
  prepTime: { min: 25, max: 25 },
  cookTime: { min: 20, max: 20 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '4 poitrines de poulet 750 ml',
    '1 pot de yogourt nature liberté 10% (le plus gras et épais possible)',
    "6 gousses d'ail",
    '2 c. à soupe de gingembre frais râpé',
    '1 oignon émincé',
    '3 c. à soupe de jus de citron fraîchement pressé',
    '½ c. à soupe de poivre de cayenne ou plus au goût',
    '1 ½ c. à thé de sel',
    '1 c. à thé de poivre',
  ],
  instructions: [
    "Égoutter le yogourt s'il y a du liquide sur le dessus et mettre dans un plat ou un sac ziploc pour mariner.",
    'Mettre le reste des ingrédients, sauf le poulet, avec le yogourt.',
    'Bien mélanger.',
    'Ajouter les poitrines de poulet.',
    "Bien mélanger pour couvrir le poulet et faire mariner 4 heures minimum. C'est meilleur mariné 24 heures.",
    'Faire chauffer le barbecue, huiler la grille et faire cuire le poulet en cuisson directe.',
    'Jeter la marinade.',
    "Servir sur des rondelles d'oignon rouge, tomates, radis et concombres en tranche.",
    'Accompagner de quartiers de citron.',
  ],
  tags: ['marinade yogourt', 'grill', 'épices'],
  slug: 'poulet-afghan',
}
