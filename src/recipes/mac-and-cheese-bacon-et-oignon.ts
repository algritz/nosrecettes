import { Recipe } from '@/types/recipe';

export const macAndCheeseBaconEtOignon: Recipe = {
  id: 'mac-and-cheese-bacon-et-oignon',
  title: 'Mac and Cheese bacon et oignon',
  description: 'Un gratin de macaronis crémeux avec oignons, bacon croustillant et fromages fondus, gratiné au four.',
  categories: ['Plats principaux', 'Porc'],
  prepTime: { min: 25, max: 25 },
  cookTime: { min: 25, max: 25 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '500 g de macaronis',
    '1 gros oignon espagnol finement tranché',
    '15 ml d\'huile d\'olive',
    '1 gousse d\'ail hachée',
    '1/2 tasse de vin blanc',
    '1 pot de bouillon de poulet ou légume Knorr',
    '45 ml de beurre',
    '60 ml de farine',
    '3 tasses de lait',
    '1 pincée de noix de muscade',
    '1 jaune d\'œuf',
    '2 tasses de mozzarella râpé',
    '2 tasses de cheddar râpé',
    '1/2 tasse de bacon cuit, croustillant et haché',
    '1/2 tasse de chapelure panko',
    'Sel et poivre au goût'
  ],
  instructions: [
    'Porter à ébullition une casserole d\'eau salée. Ajouter les macaronis et les cuire selon les indications de la boîte.',
    'Préchauffer le four à broil, la grille au centre.',
    'Dans une poêle chaude, faire revenir les oignons dans l\'huile d\'olive. Laisser cuire à feu vif durant 5 minutes.',
    'Ajouter l\'ail et le vin blanc. Laisser s\'évaporer légèrement, puis ajouter le bouillon Style maison Knorr. Bien mélanger et laisser cuire à feu doux 5 minutes supplémentaires. Vérifier l\'assaisonnement. Réserver.',
    'Dans une casserole, à feu doux, faire chauffer le beurre et incorporer la farine tout en mélangeant pour créer un roux blanc.',
    'À l\'aide d\'un fouet, incorporer la moitié du lait et fouetter vigoureusement la sauce pour éviter que des grumeaux ne se forment.',
    'Toujours à feu doux, en fouettant constamment, incorporer le reste du lait, la noix de muscade et assaisonner au goût.',
    'Sans cesser de remuer, porter la sauce à ébullition et poursuivre la cuisson environ 5 minutes ou jusqu\'à obtenir une texture épaisse et onctueuse.',
    'Incorporer un jaune d\'œuf, puis les fromages râpés. Vérifier l\'assaisonnement.',
    'Dans un plat à gratin, mélanger les macaronis, la sauce béchamel préparée, les oignons compotés et les morceaux de bacon.',
    'Saupoudrer le dessus de chapelure et laisser au four durant 3 à 5 minutes ou jusqu\'à obtenir une belle coloration.'
  ],
  tags: ['fromages', 'bacon', 'gratin'],
  source: 'David Cloutier',
  slug: 'mac-and-cheese-bacon-et-oignon'
};
