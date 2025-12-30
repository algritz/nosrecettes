import { Recipe } from '@/types/recipe';

export const filetsDePorcEpicesALaMexicaine: Recipe = {
  id: 'filets-de-porc-epices-a-la-mexicaine',
  title: 'Filets de porc épicés à la mexicaine',
  description: 'Une recette de filets de porc épicés, marinés et grillés, accompagnés d\'une sauce à l\'orange et lime, parfaits pour un repas savoureux et piquant.',
  categories: ['Plats principaux', 'Porc'],
  prepTime: { min: 30, max: 30 },
  cookTime: { min: 25, max: 25 },
  marinatingTime: { min: 120, max: 120 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 c. à soupe (15 ml) huile d\'olive',
    '2 gousses d\'ail hachées finement',
    '1 piment chili frais (de type jalapeño), épépiné et haché finement (facultatif)',
    '2/3 t (160 ml) jus d\'orange',
    '1/3 t (80 ml) jus de lime frais',
    '1/4 t (60 ml) vinaigre de cidre',
    '1/4 t (60 ml) mélasse',
    '1/4 t (60 ml) miel liquide',
    'sel et poivre noir du moulin',
    '2 c. à soupe (30 ml) huile d\'olive',
    '1/4 t (60 ml) graines de cumin',
    '1 c. à thé (5 ml) gros sel de mer',
    '2 c. à thé (10 ml) grains de poivre',
    '2 filets de porc parés'
  ],
  instructions: [
    'Dans une petite casserole, chauffer 1 c. à soupe (15 ml) d\'huile à feu moyen. Ajouter l\'ail et le piment chili, si désiré, et cuire, en brassant, pendant environ 1 minute ou jusqu\'à ce qu\'ils dégagent leur arôme.',
    'Ajouter le jus d\'orange, le jus de lime et le vinaigre de cidre et porter à ébullition.',
    'Réduire à feu doux et laisser mijoter à découvert pendant environ 10 minutes ou jusqu\'à ce que la préparation ait légèrement réduit.',
    'Retirer la casserole du feu. Ajouter la mélasse et le miel et mélanger. Saler et poivrer. Réserver.',
    'Entre-temps, dans un petit poêlon, faire griller les graines de cumin à feu moyen-doux, en brassant sans arrêt, pendant environ 2 minutes ou jusqu\'à ce qu\'elles dégagent leur arôme.',
    'Dans un moulin à café ou dans un mortier, à l\'aide d\'un pilon, broyer grossièrement les graines de cumin grillées avec le gros sel et les grains de poivre.',
    'Badigeonner les filets de porc du reste de l\'huile (2 c. à soupe environ), puis les frotter du mélange d\'épices de manière à bien les enrober.',
    'Vous pouvez préparer les filets jusqu\'à cette étape, les mettre dans un plat en verre peu profond et les couvrir. Ils se conserveront jusqu\'à 2 heures au réfrigérateur.',
    'Régler le barbecue à puissance moyenne. Mettre les filets de porc sur la grille huilée du barbecue, fermer le couvercle et cuire pendant 15 minutes (les retourner à l\'aide d\'une pince jusqu\'à ce qu\'ils soient bien marqués).',
    'Badigeonner les filets de porc de 1/3 t (80 ml) de la sauce réservée. Poursuivre la cuisson pendant environ 5 minutes ou jusqu\'à ce qu\'ils soient dorés à l\'extérieur mais encore légèrement rosés à l\'intérieur.',
    'Mettre les filets de porc sur une planche à découper et les couvrir de papier d\'aluminium, sans serrer. Laisser reposer pendant 5 minutes, puis couper en tranches de 2,5 cm d\'épaisseur.',
    'Servir accompagnés du reste de la sauce réservée.'
  ],
  tags: ['grill', 'marinade sèche', 'épicé'],
  source: 'David Cloutier',
  slug: 'filets-de-porc-epices-a-la-mexicaine'
};
