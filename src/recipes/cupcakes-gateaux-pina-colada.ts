import { Recipe } from '@/types/recipe';

export const cupcakesGateauxPinaColada: Recipe = {
  id: '1758816408562',
  title: 'Cupcakes gâteaux pina colada',
  description: '',
  categories: ['Pâtisseries et desserts'],
  prepTime: { min: 30, max: 30 },
  cookTime: { min: 20, max: 20 },
  servings: 15,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Gâteaux',
      items: [
        '2 ¾ tasses de farine tout usage ',
        '1 ½ c. à thé de poudre à pâte ',
        '1 tasse de lait ',
        '2 ½ c. à soupe de rhum ambré ',
        '1 tasse de beurre mou ',
        '1 tasse de sucre ',
        '4 œufs ',
        '3/4 tasse d\'ananas coupé en petits morceaux'
      ]
    },
    {
      title: 'Glaçage',
      items: [
        '1 tasse de beurre mou ',
        '5 tasses de sucre à glacer ',
        '1/2 tasse de lait ',
        '1 sachet de sucre vanillé ',
        '1 ½ tasse de noix de coco râpée, et plus pour tremper les cupcakes à la fin'
      ]
    }
  ],
  instructions: [
    {
      title: 'Gâteaux',
      steps: [
        'Préchauffer le four à 350°F (180°C). Dans un premier bol, mettre la farine et la poudre à pâte. ',
        'Dans un verre, combiner le lait et le rhum.',
        'Dans un grand bol, fouetter le beurre mou au batteur jusqu\'à ce qu\'il devienne crémeux. ',
        'Incorporer le sucre progressivement en continuant à fouetter pendant 3 minutes. ',
        'Ajouter les œufs un à un en fouettant bien après chaque ajout. ',
        'Incorporer les ingrédients secs en trois fois, en alternant avec les liquides. ',
        'Incorporer les ananas.',
        'Remplir les caissettes à muffins, pas plus qu\'au 2/3. ',
        'Cuire au four 20 minutes. ',
        'Pendant ce temps, préparer le glaçage.'
      ]
    },
    {
      title: 'Glaçage',
      steps: [
        'Mettre le beurre mou dans le bol d\'un robot culinaire avec le lait et 4 ½ tasses de sucre à glacer. ',
        'Fouetter à vitesse moyenne pendant 3 à 5 minutes puis ajouter petit à petit le sucre à glacer restant. ',
        'Continuer à fouetter pendant environ 2 minutes en ajoutant la noix de coco râpée.',
        'Conserver le glaçage à température ambiante sinon il va durcir. Il se conserve jusqu\'à trois jours dans un contenant hermétique.',
        'Glacer les petits gâteaux complètement refroidis, puis les rouler dans la noix de coco.',
        'Pour ajouter un peu de couleur à votre glaçage, incorporez quelques gouttes de colorant alimentaire, à la toute fin.'
      ]
    }
  ],
  tags: [],
  source: 'David Cloutier',
  slug: 'cupcakes-gateaux-pina-colada'
};
