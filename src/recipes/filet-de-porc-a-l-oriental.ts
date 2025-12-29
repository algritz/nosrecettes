import { Recipe } from '@/types/recipe'

export const filetDePorcALOriental: Recipe = {
  id: 'filet-de-porc-a-l-oriental',
  title: "Filet de porc à l'oriental",
  description:
    'Un plat de filet de porc mariné et grillé, accompagné de légumes sautés, avec une touche orientale grâce à la sauce soja et au miel.',
  categories: ['Plats principaux'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 20, max: 20 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Marinade',
      items: [
        '3 c. à soupe de sauce soya ou tamari',
        "2 c. à soupe d'huile d'arachide ou d'huile végétale",
        '2 c. à soupe de jus de limette',
        '2 c. à soupe de miel',
        "1 gousse d'ail émincée",
        '1/4 c. à thé de piment de Cayenne moulu ou en flocons ou de Sambal oelek',
        "1 gros filet de porc d'environ 600 g (20 oz) ou 2 filets de 300 g (10 oz) chacun",
      ],
    },
    {
      title: 'Accompagnement',
      items: [
        "1 lb de haricots verts parés ou d'asperges parées",
        '8 oz de champignons café parés ou de portobello tranchés',
        '8 oz de pleurotes, parés, coupés en gros morceaux',
        "4 gousses d'ail, écrasées",
        "1/4 tasse d'huile d'olive",
        'Sel',
        'Poivre',
      ],
    },
    {
      title: 'Garniture',
      items: ['1/2 tasse de persil plat, de ciboulette ou de dés de tomates'],
    },
  ],
  instructions: [
    'Dans un sac de plastique, verser tous les ingrédients de la marinade, bien mélanger.',
    'Ajouter le ou les filet(s) de porc, bien les enrober de marinade, refermer le sac hermétiquement.',
    'Laisser mariner au réfrigérateur 30 minutes ou plus.',
    'Préchauffer le four à 200°C (400°F).',
    'Dans une grande poêle, saisir la viande à chaleur vive environ 4 à 5 minutes en la retournant pour la saisir de toutes parts. Réserver au chaud.',
    "Sur une grande plaque huilée, déposer les haricots, les champignons et l'ail, éviter d'empiler les légumes.",
    "Arroser d'huile d'olive, saler et poivrer. Remuer pour bien enrober les légumes d'huile.",
    'Déposer le ou les filet(s) de porc grillé(s) sur les légumes.',
    "Cuire à découvert 15 à 20 minutes ou jusqu'à ce que la température interne de la viande atteigne 63 à 65°C (145 à 150°F) sur un thermomètre à lecture rapide.",
    'Une fois cuits, retirer les filets de porc et les laisser reposer à couvert sur une assiette chaude.',
    'Au service, garnir de persil, de ciboulette ou de dés de tomates.',
  ],
  tags: ['oriental', 'marinade', 'grill'],
  notes:
    'Marinage de 4 heures et plus. Optionnellement, précuire des pommes de terre en quartiers ou grelots 15 minutes avant la cuisson des légumes, puis ajouter les légumes et le porc pour poursuivre la cuisson.',
  slug: 'filet-de-porc-a-l-oriental',
}
