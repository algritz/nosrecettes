import { Recipe } from '@/types/recipe';

export const satayDePorcALananas: Recipe = {
  id: 'satay-de-porc-a-l-ananas',
  title: 'Satay de porc à l\'ananas',
  description: 'Satay de porc à l\'ananas. Brochettes de porc marinées avec ananas, servies avec une sauce aux arachides. Parfait pour un barbecue estival.',
  categories: ['Végétarien', 'Plats principaux'],
  prepTime: 20,
  cookTime: 10,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Porc et marinade',
      items: [
        '2 filets de porc, coupés en cubes d\'environ 2 cm',
        '1 gousse d\'ail',
        '1 oignon',
        '1/3 tasse sauce soya, faible en sodium',
        '1 1/4 cuillère à thé cumin en poudre',
        '1 1/4 cuillère à thé curcuma',
        '2 1/2 cuillère à thé cassonade',
        'Ananas frais en cube',
        '1 pincée sel',
        'Poivre au goût',
        '10 brochettes en bois ou en bambou'
      ]
    },
    {
      title: 'Sauce',
      items: [
        '1 gousse d\'ail',
        '3/4 tasse lait de noix de coco non sucré',
        '1/3 tasse beurre d\'arachide, naturel',
        '3 cuillère à soupe sauce soya faible en sodium',
        '2 cuillère à soupe cassonade',
        '1 cuillère à soupe sauce poisson',
        '1 cuillère à thé sambal Oelek (au goût)'
      ]
    }
  ],
  instructions: [
    'Tremper les brochettes en bois dans l\'eau pendant 1 heure avant, pour éviter qu\'elles ne brûlent.',
    'À l\'aide d\'un couteau, couper le filet de porc en cubes d\'environ 2 cm de côté, en éliminant le gras.',
    'Mettre les cubes dans un sac ziploc.',
    'Presser l\'ail, hacher l\'oignon et les mettre dans un robot culinaire ou dans un mélangeur.',
    'Y ajouter la sauce soya, les épices, la cassonade et 3/4 morceaux d\'ananas.',
    'Mélanger le tout jusqu\'à obtention d\'un mélange assez homogène.',
    'Verser le mélange dans un sac ziploc avec les morceaux de porc.',
    'Saler et poivrer.',
    'Ajouter dans le sac environ 40 morceaux d\'ananas.',
    'Laisser mariner 2 à 3 heures.',
    'Enfiler sur les brochettes en alternant avec le porc et l\'ananas.',
    'Cuire les brochettes sur le barbecue à moyen-chaud environ 10 minutes, en retournant fréquemment jusqu\'à ce qu\'elles soient bien cuites et dorées.',
    'Pendant la cuisson, préparer la sauce aux arachides.',
    'Verser le lait de coco et le beurre d\'arachide dans une petite casserole, y ajouter l\'ail, la cassonade, la sauce soja, la sauce poisson et le Sambal Oelek.',
    'Chauffer doucement, en brassant, jusqu\'à ce que la sauce soit lisse et chaude.',
    'Garder au chaud.',
    'Servir les brochettes avec la sauce.'
  ],
  tags: ['barbecue', 'sauce aux arachides', 'ananas'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/satay-de-porc-a-l-ananas',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/satay-de-porc-a-l-ananas',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/satay-de-porc-a-l-ananas'
    }
  ],
  source: 'David Cloutier',
  slug: 'satay-de-porc-a-lananas'
};
