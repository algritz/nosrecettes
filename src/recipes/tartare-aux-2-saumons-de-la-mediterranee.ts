import { Recipe } from '@/types/recipe';

export const tartareAux2SaumonsDeLaMediterranee: Recipe = {
  id: 'tartare-aux-2-saumons-de-la-mediterranee',
  title: 'Tartare aux 2 saumons de la méditerranée',
  description: 'Un tartare frais combinant deux types de saumon, agrémenté d\'herbes et de feta, parfait pour une entrée élégante.',
  categories: ['Entrées'],
  prepTime: 20,
  cookTime: 0,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '3 c. à soupe (45 ml) d’oignon rouge, haché finement',
    '2 c. à soupe (30 ml) de petits cornichons à l’aneth, hachés finement',
    '1 c. à soupe (15 ml) de petites câpres, hachées sommairement',
    '4 c. à soupe (60 ml) d’huile d’olive',
    '2 c. à soupe (30 ml) de yogourt grec',
    '1 gousse d’ail, fraîchement pressée',
    '3 c. à thé (15 ml) d’origan frais',
    '2 c. à soupe (30 ml) de menthe fraîche, ciselée finement',
    '2 c. à soupe (30 ml) de basilic frais, ciselé finement',
    '100 g (3/4 tasse) de fromage feta, émietté',
    'Le zeste râpé et le jus de 1 citron',
    'Quelques gouttes de Firebarns vert, au goût',
    '400 g (14 oz) de saumon, haché au couteau',
    '200 g (7 oz) de saumon fumé en fines tranches, haché',
    'Sel et poivre du moulin'
  ],
  instructions: [
    'Dans un bol, mélanger tous les ingrédients à l’exception du saumon et du saumon fumé et mélanger.',
    'Ajouter ensuite le saumon frais et le saumon fumé, et mélanger délicatement.',
    'Servir.'
  ],
  tags: ['frais', 'herbes', 'saumon'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/tartare-aux-2-saumons-de-la-mediterranee',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/tartare-aux-2-saumons-de-la-mediterranee',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/tartare-aux-2-saumons-de-la-mediterranee'
    }
  ],
  source: 'David Cloutier',
  slug: 'tartare-aux-2-saumons-de-la-mediterranee'
};
