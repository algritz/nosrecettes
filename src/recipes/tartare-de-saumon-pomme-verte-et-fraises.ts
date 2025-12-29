import { Recipe } from '@/types/recipe'

export const tartareDeSaumonPommeVerteEtFraises: Recipe = {
  id: 'tartare-de-saumon-pomme-verte-et-fraises',
  title: 'Tartare de saumon pomme verte et fraises',
  description:
    'Un tartare frais et coloré combinant saumon, pomme verte et fraises, parfait pour une entrée légère.',
  categories: ['Entrées'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 0, max: 0 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '500 g (1 lb) de saumon frais, sans la peau',
    '80 ml (1/3 tasse) d’huile d’olive',
    '30 ml (2 c. à soupe) de jus de citron fraîchement pressé',
    'Le zeste fin d’un citron',
    '15 ml (1 c. à soupe) de moutarde à l’ancienne ou de moutarde de Meaux',
    '20 g (1/4 tasse) de persil frais, haché finement',
    '1 échalote française, hachée finement',
    'Sel et poivre, au goût',
    '1 pomme Granny Smith, parée et coupée en petits cubes',
    '10 fraises, équeutées et coupées en cubes',
  ],
  instructions: [
    'Tailler le saumon en petits cubes. Réserver dans un bol au réfrigérateur.',
    'Dans un autre bol, mélanger l’huile d’olive, le jus et le zeste de citron, la moutarde à l’ancienne, le persil et l’échalote.',
    'Assaisonner au goût de sel et de poivre, puis ajouter le mélange au saumon.',
    'Ajouter les petits cubes de pommes et de fraises.',
    'Servir aussitôt accompagné de tranches de baguettes grillées.',
  ],
  tags: ['frais', 'saumon', 'entrée'],
  slug: 'tartare-de-saumon-pomme-verte-et-fraises',
}
