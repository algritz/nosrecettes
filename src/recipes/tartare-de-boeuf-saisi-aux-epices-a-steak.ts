import { Recipe } from '@/types/recipe'

export const tartareDeBoeufSaisiAuxEpicesASteak: Recipe = {
  id: 'tartare-de-boeuf-saisi-aux-epices-a-steak',
  title: 'Tartare de boeuf saisi aux épices à steak',
  description:
    "Un tartare de boeuf savoureux, saisi rapidement et relevé d'épices à steak, accompagné d'une mayonnaise maison.",
  categories: ['Plats principaux', 'Végétarien'],
  prepTime: { min: 45, max: 45 },
  cookTime: { min: 1, max: 1 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Mayonnaise',
      items: [
        "1 jaune d'oeuf",
        '2 c. à soupe de moutarde de dijon',
        "1 gousse d'ail fraîchement pressée",
        "500 ml (2 tasses) d'huile de canola",
        "60 ml (1/4 de tasse) d'huile d'olive",
        '2 c. à soupe de vinaigre de vin blanc',
        "2 c. à thé d'herbe salées (épices du Bas-du-Fleuve)",
        "3 pincée d'herbe de Provence",
        'Sel et poivre du moulin',
      ],
    },
    {
      title: 'Marinade',
      items: [
        "2 c. à soupe d'huile d'olive",
        '2 c. à soupe de vin rouge ou de vinaigre de vin rouge',
        '1 c. à soupe de poivre frais',
        "1 c. à soupe d'épices à steak",
        '1 c. à soupe de ketchup',
        '1 c. à soupe de moutarde de dijon',
        'Sel au goût',
      ],
    },
    {
      title: 'Tartare',
      items: [
        '600 g (1 1/2 lb) de filet de boeuf ou de pointe de surlonge',
        "1 c. à soupe d'huile de canola",
        '1 c. à soupe de beurre',
        "4 c. à soupe d'huile d'olive",
        '1/4 de tasse de câpres hachée finement',
        "1/4 de tasse d'échalotte française hachée finement",
        '2 c. à soupe de persil plat haché finement',
        '2 c. à soupe de moutarde de dijon',
        '1 c. à soupe de ketchup',
        '1 c. à thé de sauce Worcestershire',
        "1 c. à soupe ou plus de mayonnaise faite à l'étape 1",
        '1 c. à soupe de jus de citron',
        '2 c. à thé de Sambal Oelek',
        'Sel et poivre au goût',
      ],
    },
  ],
  instructions: [
    "Mayonnaise : Dans un grand bol, fouetter le jaune d'oeuf, la moitié de la moutarde et l'ail. Verser l'huile de canola en un mince filet, peu à peu en fouettant vigoureusement afin d'obtenir une émulsion ferme. Ajouter l'huile d'olive graduellement et fouetter de nouveau. Verser le vinaigre et fouetter encore un peu. Cette étape fera blanchir la mayonnaise. Incorporer délicatement, le reste de la moutarde, les herbes salées et les herbes de Provence. Saler et poivrer au goût.",
    'Marinade : Dans un sac Ziploc, mélanger tous les ingrédients de la marinade. Déposer la pièce de viande dans la marinade et laisser mariner à température ambiante pendant 15 minutes en retournant régulièrement.',
    "Cuisson : Dans une poêle à feu moyen-vif, chauffer l'huile de canola et le beurre. Saisir la pièce de viande quelques secondes sur toutes les surfaces. Déposer dans un papier d'aluminium, envelopper et laisser refroidir une heure au réfrigérateur.",
    "Préparer le tartare : À l'aide d'un couteau bien aiguisé, hacher la pièce de viande en petits dés puis les déposer dans un bol en inox bien froid déposé sur un autre bol rempli de glace. Ajouter l'huile d'olive et bien mélanger. Incorporer le reste des ingrédients du tartare et mélanger délicatement.",
    "Servir : À l'aide d'un emporte-pièce, répartir le tartare dans 4 assiettes et servir avec des croûtons.",
  ],
  tags: ['épicé', 'saisie rapide', 'bœuf'],
  marinatingTime: { min: 15, max: 15 },
  notes:
    "Mal pris, vous pouvez sauter l'étape de la mayonnaise maison et utiliser une mayonnaise du commerce. La mayonnaise faite maison peut servir à d'autres recettes comme burgers ou sandwichs.",
  slug: 'tartare-de-boeuf-saisi-aux-epices-a-steak',
}
