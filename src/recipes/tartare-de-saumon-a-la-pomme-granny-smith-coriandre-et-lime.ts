import { Recipe } from '@/types/recipe';

export const tartareDeSaumonALaPommeGrannySmithCoriandreEtLime: Recipe = {
  id: 'tartare-de-saumon-a-la-pomme-granny-smith-coriandre-et-lime',
  title: 'Tartare de saumon à la pomme granny smith, coriandre et lime',
  description: 'Un tartare frais de saumon avec pomme, coriandre et lime, parfait pour une entrée légère et parfumée.',
  categories: ['Entrées'],
  prepTime: 15,
  cookTime: 0,
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Sauce',
      items: [
      '1 petite lime pour son jus et zeste',
      '1 échalote française ciselée',
      '1/2 c. à thé de sucre',
      '2 c. à soupe d\'huile d\'olive',
      '1/2 c. à thé d\'huile de sésame grillée ou plus au goût',
      '2 c. à soupe de mayonnaise',
      '1/2 c. à thé de sauce soya légère',
      '1/2 c. à thé de sauce piquante Sriracha (ou au goût)',
      'Sel et poivre au goût'
      ]
    },
    {
      title: 'Tartare',
      items: [
      '450 g de saumon très frais sans la peau et coupé en très petits dés',
      '1 petite pomme verte en très petits dés',
      '3 c. à soupe de coriandre fraîche hachée finement'
      ]
    }
  ],
  instructions: [
    'Dans un bol, bien mélanger tous les ingrédients de la sauce.',
    'Au moment de servir, ajouter le saumon, les pommes et la coriandre, bien mélanger.',
    'Rectifier l\'assaisonnement avec le sel et le poivre et décorer avec un peu de coriandre.',
    'Servir'
  ],
  tags: ['frais', 'coriandre', 'lime'],
  slug: 'tartare-de-saumon-a-la-pomme-granny-smith-coriandre-et-lime'
};
