import { Recipe } from '@/types/recipe';

export const browniesSurprises: Recipe = {
  id: 'brownies-surprises',
  title: 'Brownies surprises',
  description: 'Une recette de brownies surprenants avec des légumes, chocolat et noix, cuits au four.',
  categories: ['Pâtisseries et desserts'],
  prepTime: { min: 30, max: 30 },
  cookTime: { min: 45, max: 45 },
  servings: 12,
  difficulty: 'Facile',
  ingredients: [
    '1 poivron rouge, en dés',
    '250 ml (1 tasse) d’épinards',
    '250 ml (1 tasse) de brisures de chocolat mi-sucré',
    '30 ml (2 c. à soupe) de beurre de noisette ou autre (beurre d’amande, d’arachide)',
    '125 ml (1/2 tasse) de cassonade tassée',
    '80 ml (1/3 tasse) de poudre de cacao',
    '10 ml (2 c. à thé) d’extrait de vanille',
    '2 œufs',
    '180 ml (3/4 tasse) de farine de blé entier ou de farine tout usage',
    '2 ml (1/2 c. à thé) de poudre à pâte',
    '2 ml (1/2 c. à thé) de sel',
    '125 ml (1/2 tasse) de noix hachées (facultatif)'
  ],
  instructions: [
    'Préchauffer le four à 180 ̊C (350 ̊F).',
    'Déposer le poivron et les épinards dans une marguerite, et les faire cuire à la vapeur 10 minutes ou jusqu’à ce que les dés de poivron soient bien tendres.',
    'Entre-temps, dans un bol, faire fondre les brisures de chocolat avec le beurre de noisette au micro-ondes à puissance faible (ou au bain-marie).',
    'Verser le mélange de chocolat fondu dans un deuxième bol.',
    'Ajouter la cassonade, la poudre de cacao, l’extrait de vanille et les œufs, et bien mélanger.',
    'Réserver.',
    'Une fois les légumes bien cuits, les transvider dans le récipient du robot culinaire et les réduire en purée.',
    'Réserver l’eau de cuisson et l’ajouter, au besoin, à la purée de légumes.',
    'Incorporer 125 ml (1/2 tasse) de la purée de légumes au mélange de chocolat.',
    'Dans un troisième bol, mélanger la farine, la poudre à pâte, le sel et les noix.',
    'Incorporer les ingrédients secs au mélange de chocolat et mélanger délicatement, sans plus, jusqu’à ce que la pâte soit homogène.',
    'Verser la pâte dans un plat de 20 cm x 30 cm (8 po x 15 po) allant au four, préalablement beurré.',
    'Faire cuire au four environ 35 minutes.'
  ],
  tags: ['chocolat', 'légumes', 'gourmand'],
  slug: 'brownies-surprises'
};
