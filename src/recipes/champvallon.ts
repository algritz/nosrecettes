import { Recipe } from '@/types/recipe'

export const champvallon: Recipe = {
  id: 'champvallon',
  title: 'Champvallon',
  description: 'Recette familiale qui remplace la tourtière.',
  categories: ['Plats principaux'],
  prepTime: { min: 45, max: 45 },
  cookTime: { min: 240, max: 240 },
  servings: 8,
  difficulty: 'Facile',
  ingredients: [
    "1,2 kg (3 lbs) de viande de cerf (cou, jarret, épaule) ou de l'épaule d'agneau ou autre gibier, en cubes (8 lb de viande pour le gros chaudron)",
    '6 oignons tranchés',
    'Ail, hachée',
    'Branche de thym frais',
    'Sel',
    'Poivre',
    '6 pommes de terre jaunes, en fines tranches (5 lb pour le gros chaudron)',
    'Quantité suffisante de fond de cerf, bouillon de poulet, eau ou glace de viande',
    'Vin rouge',
    'Quantité suffisante de beurre',
  ],
  instructions: [
    'Dans une grande poêle, saisir la viande pour bien la colorer. Saler et réserver à part.',
    "Déglacer la poêle avec le fond, du bouillon, de la glace de viande ou de l'eau en grattant les sucs attachés au fond.",
    'Assaisonner le jus, réserver.',
    "Dans une grande poêle, fondre le beurre, y caraméliser les oignons, en secouant souvent jusqu'à la caramélisation souhaitée. Réserver séparément.",
    'Préchauffer le four à 200 °C (400 °F).',
    'Dans un grand bol à cuisson, disposer un rang de pommes de terre en rosace.',
    'Répartir la moitié des oignons sur les pommes de terre.',
    "Assaisonner d'ail haché et de feuilles de thym au goût.",
    "Étaler la viande, l'assaisonner d'ail et de thym.",
    "Bien couvrir du reste des oignons, répéter l'assaisonnement au goût.",
    'Couvrir enfin de pommes de terre en rosace.',
    'Mouiller avec le jus de cuisson et un peu de vin rouge à hauteur en pressant le champvallon pour bien le couvrir de bouillon.',
    "Couvrir et enfourner. Aussitôt le point d'ébullition atteint, réduire la chaleur à 170 °C (325 °F).",
    "Cuire à couvert environ 2 à 3 heures ou jusqu'à ce que la viande soit tendre.",
    'Découvrir pour les dernières 30 minutes de cuisson.',
    'Beurrer la surface. Terminer la cuisson à 230 °C (450 °F) pour bien dorer.',
    'Au service, accompagner de moutarde et de gros sel de mer.',
  ],
  tags: ['gibier', 'gratin', 'four'],
  images: [
    {
      small:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/champvallon',
      medium:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/champvallon',
      large:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/champvallon',
    },
  ],
  source: 'David Cloutier',
  slug: 'champvallon',
}
