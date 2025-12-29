import { Recipe } from '@/types/recipe'

export const epauleDePorcEffilocheePulledPorkVersionSurLeBarbecue: Recipe = {
  id: '1766684894332',
  title: 'Épaule de porc effilochée (pulled pork) version sur le barbecue',
  description:
    "Recette d'épaule de porc effilochée cuite au barbecue, marinée dans une saumure et assaisonnée avec un mélange d'épices, puis fumée avec des copeaux de bois d'érable.",
  categories: ['Vollaille', 'Plats principaux', 'Barbecue'],
  prepTime: { min: 30, max: 30 },
  cookTime: { min: 330, max: 330 },
  marinatingTime: { min: 720, max: 720 },
  servings: 8,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Saumure',
      items: [
        '45 ml (3 c. à soupe) de jus de pomme',
        '30 ml (2 c. à soupe) d’eau tiède',
        '30 ml (2 c. à soupe) de sucre',
        '15 ml (1 c. à soupe) de sel',
        '2,5 ml (½ c. à thé) de sauce Worcestershire',
      ],
    },
    {
      title: 'Sauce',
      items: [
        '5 ml (1 c. à thé) de sucre',
        '2,5 ml (½ c. à thé) de poudre d’ail',
        '2,5 ml (½ c. à thé) de sel kasher',
        '1 ml (¼ c. à thé) de cassonade',
        '1 ml (¼ c. à thé) de paprika',
        '1 ml (¼ c. à thé) de poudre de chili',
        "1 pincée d'origan séché",
        '1 pincée de poivre de Cayenne',
        '1 pincée de cumin moulu',
        '1 pincée de poivre noir moulu',
      ],
    },
    {
      title: 'Vinaigre aromatisé',
      items: [
        '375 ml (1 ½ tasse) de vinaigre blanc',
        '30 ml (2 c. à soupe) de poudre de chili',
        '10 ml (2 c. à thé) de jus de citron',
        '5 ml (1 c. à thé) de sel kasher',
      ],
    },
    {
      title: 'Viande',
      items: ['1 rôti d’épaule de porc d’environ 2 kg (4 ½ lb) avec l’os'],
    },
    {
      title: 'Divers',
      items: [
        '1 litre (4 tasses) de copeaux de bois (érable) trempés dans l’eau 30 minutes',
      ],
    },
  ],
  instructions: [
    'Saumure: Dans un bol, mélanger tous les ingrédients jusqu’à ce que le sucre et le sel soient dissous. Réserver.',
    "Mélange d'épices à frotter: Dans un bol, mélanger tous les ingrédients du mélange d’épices. Réserver.",
    'Placer l’épaule dans un plat en verre pour recueillir la saumure. Avec une seringue alimentaire, injecter la saumure dans la viande en piquant toutes les surfaces (voir note).',
    'Frotter toute la surface de l’épaule avec le mélange d’épices à frotter.',
    'Couvrir d’une pellicule de plastique ou placer l’épaule dans un grand sac en plastique à fermeture hermétique avec la saumure recueillie.',
    'Réfrigérer au moins 12 heures ou toute une nuit.',
    'Entre-temps, dans un contenant hermétique, mélanger tous les ingrédients du vinaigre aromatisé.',
    'Préchauffer une section du barbecue à puissance moyenne à douce.',
    'Envelopper l’épaule de papier d’aluminium et la déposer sur la section éteinte. Fermer le couvercle.',
    'Cuire 4 heures en maintenant la température du barbecue entre 110 et 120 °C (225 à 250 °F).',
    'Déballer l’épaule et la remettre sur la grille.',
    'Déposer les copeaux de bois dans une assiette d’aluminium sous la grille de la section allumée du barbecue.',
    'Badigeonner le rôti avec le vinaigre aromatisé et poursuivre la cuisson, à couvert, en le badigeonnant régulièrement pendant environ 1 h 30 ou jusqu’à ce que la chair se détache facilement à la fourchette.',
    'Réserver le rôti sur une grande assiette et laisser reposer 15 minutes.',
    'À l’aide de deux fourchettes, effilocher la viande.',
    'Mélanger la viande effilochée avec de la sauce barbecue au goût.',
    'Servir bien chaud dans des pains à hamburger grillés.',
  ],
  tags: ['fumée', 'barbecue', 'effiloché'],
  wine: 'Zinfandel',
  source: 'David Cloutier',
  slug: 'epaule-de-porc-effilochee-pulled-pork-version-sur-le-barbecue',
}
