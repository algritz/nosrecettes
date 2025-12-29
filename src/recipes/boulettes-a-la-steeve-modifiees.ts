import { Recipe } from '@/types/recipe';

export const boulettesALaSteeveModifiees: Recipe = {
  id: 'boulettes-a-la-steeve-modifiees',
  title: 'Boulettes à la Steeve modifiées',
  description: 'Recette de boulettes de viande avec sauce sucrée et épicée, cuites au four, accompagnées de pommes de terre pilées.',
  categories: ['Plats principaux'],
  prepTime: { min: 25, max: 25 },
  cookTime: { min: 60, max: 60 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 lb (454 g) boeuf haché',
    '1 oignon, émincé',
    '1/2 tasse de gruau',
    '1 oeuf',
    '1 gousse d\'ail',
    '½ c. à thé de thym',
    'Sel, au goût',
    'Poivre, au goût',
    '1 tasse (250 ml) ketchup',
    '1/2 tasse (125 ml) d\'eau',
    '1/2 tasse (125 ml) de jus d\'ananas',
    '1/2 tasse de cassonade',
    '1 c. à soupe (15 ml) sauce Worcestershire',
    '1 c. à soupe (15 ml) sauce soya',
    'Quelques gouttes de sauce tabasco'
  ],
  instructions: [
    'Bien mélanger ensemble tous les ingrédients des boulettes.',
    'Façonner de petites boulettes et les placer sur une plaque à biscuits non graissée.',
    'Cuire à 350°F (180°C) pendant 30 minutes en les retournant de temps en temps pendant la cuisson pour une cuisson uniforme.',
    'Environ 20 minutes après le début de la cuisson des boulettes, préparer la sauce en mélangeant tous les ingrédients dans une casserole et les portant à ébullition.',
    'Dès que le point d\'ébullition est atteint et que des bulles apparaissent dans la sauce, retirer la casserole du feu.',
    'Retirer les boulettes du four et les placer dans un chaudron creux allant au four.',
    'Verser la sauce par-dessus et replacer au four pour 30 minutes, sans couvercle.'
  ],
  tags: ['sauce sucrée', 'cuisine au four', 'boulettes de viande'],
  notes: 'Temps de préparation : 25 minutes. Temps de cuisson : 1 heure. Source inspirée de recette.qc.ca, modifiée par Fanny Deschamps.',
  slug: 'boulettes-a-la-steeve-modifiees'
};
