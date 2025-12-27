import { Recipe } from '@/types/recipe';

export const trempetteChaudeAuFromageEtBoeufHache: Recipe = {
  id: 'trempette-chaude-au-fromage-et-boeuf-hache',
  title: 'Trempette chaude au fromage et boeuf haché',
  description: 'Une trempette chaude et fromagée avec du boeuf haché, idéale pour accompagner des tostitos.',
  categories: ['Entrées'],
  prepTime: 25,
  cookTime: 35,
  servings: 8,
  difficulty: 'Facile',
  ingredients: [
    '1 1/2 lb de boeuf haché',
    '1 oignon coupé en dés',
    '1 1/2 tasse de maïs en grain',
    '1 poivron vert coupé en dés',
    '1 poivron rouge coupé en dés',
    '2 petites tomates, épépinées et coupées en dés',
    '1 paquet de fromage à la crème (du type Philadelphia) de 250g',
    '1 1/2 pot fromage crémeux Boivin',
    '1 tasse de fromage râpé cheddar fort',
    '1 sachet d’assaisonnement à tacos',
    'Oignons verts en décoration'
  ],
  instructions: [
    'Faire cuire les oignons avec la viande hachée dans une poêle.',
    'Lorsque cuite, ajouter le sachet d’assaisonnement à taco dans la viande et bien mélanger.',
    'Mettre dans un plat pyrex le maïs, les poivrons, les tomates, le boeuf haché, le fromage à la crème, le fromage Boivin et le fromage cheddar fort.',
    'Mettre au four à 325°F pendant 30 minutes.',
    'Bien mélanger le tout à mi-cuisson.',
    'Garnir d’oignons verts.',
    'Servir avec des tostitos.'
  ],
  tags: ['fromage', 'bœuf', 'four'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/trempette-chaude-au-fromage-et-boeuf-hache',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/trempette-chaude-au-fromage-et-boeuf-hache',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/trempette-chaude-au-fromage-et-boeuf-hache'
    }
  ],
  source: 'David Cloutier',
  slug: 'trempette-chaude-au-fromage-et-boeuf-hache'
};
