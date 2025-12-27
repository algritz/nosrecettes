import { Recipe } from '@/types/recipe';

export const brieALerablePommesEtBacon: Recipe = {
  id: 'brie-a-l-erable-pommes-et-bacon',
  title: 'Brie à l’érable, pommes et bacon',
  description: 'Un brie chaud et coulant en apéro c\'est toujours gagnant Brie à l’érable, pommes et bacon',
  categories: ['Entrées'],
  prepTime: 15,
  cookTime: 25,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 bloc de fromage brie',
    '1/4 tasse de bacon couper en petits lardons',
    '1/2 pomme coupée en petits dés avec la pelure',
    '1 oignon blanc émincé',
    '2 c. à soupe de sirop d\'érable',
    '1 c. à soupe d\'huile'
  ],
  instructions: [
    'Préchauffer le four à 350 F.',
    'Dans une poêle antiadhésive, faire revenir l\'oignon dans l\'huile d\'olive jusqu\'à ce qu\'il soit translucide.',
    'Saloner, poivrer et verser 1 c. à soupe de sirop d\'érable. Bien mélanger et réserver.',
    'Dans la même poêle, faire cuire les lardons jusqu\'à ce qu\'ils soient bien dorés. Réserver.',
    'Déposer le fromage dans un plat allant au four.',
    'Garnir d\'oignons, de lardons et de pommes.',
    'Verser 1 c. à soupe de sirop d\'érable et cuire au four environ 20 à 25 minutes ou jusqu\'à ce que le fromage soit chaud et coulant au centre.'
  ],
  tags: ['fromage', 'érable', 'bacon'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/brie-a-l-erable-pommes-et-bacon',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/brie-a-l-erable-pommes-et-bacon',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/brie-a-l-erable-pommes-et-bacon'
    }
  ],
  source: 'David Cloutier',
  slug: 'brie-a-lerable-pommes-et-bacon'
};
