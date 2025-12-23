import { Recipe } from '@/types/recipe';

export const tartareDeBoeufAuMascarponeEtAuxCanneberges: Recipe = {
  id: 'tartare-de-boeuf-au-mascarpone-et-aux-canneberges',
  title: 'Tartare de boeuf au Mascarpone et aux canneberges',
  description: 'Un tartare de boeuf frais et savoureux, accompagné d\'une sauce au mascarpone et de canneberges, parfait pour une entrée élégante.',
  categories: ['Entrées'],
  prepTime: 25,
  cookTime: 7,
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Ketchup aux canneberges',
      items: [
      '1/2 tasse (125 ml) de canneberges fraîches ou surgelées',
      '1/4 tasse (60 ml) de vinaigre blanc',
      '1/4 tasse (60 ml) de pâte de tomates, non additionnée de sel',
      '2 c. à soupe (30 ml) de sucre'
      ]
    },
    {
      title: 'Sauce au Mascarpone',
      items: [
      '1/2 tasse (125 ml) de Mascarpone canadien',
      '2 c. à soupe (30 ml) de lait',
      'Sel et poivre du moulin'
      ]
    },
    {
      title: 'Tartare',
      items: [
      '3 c. à soupe (45 ml) de canneberges séchées, hachées',
      '1 échalote française, hachée finement',
      '1 1/2 c. à soupe (25 ml) de moutarde Dijon',
      '2 c. à thé (10 ml) d\'huile d\'olive',
      '1/4 tasse (60 ml) de persil italien frais',
      '2/3 lb (300 g) de boeuf à tartare',
      '2 c. à thé (10 ml) de vinaigre de vin blanc ou rouge'
      ]
    }
  ],
  instructions: [
    'Dans une casserole, combiner les ingrédients du ketchup aux canneberges. Cuire à couvert 5 minutes, à feu moyen-vif. Retirer du feu et réduire en purée à l\'aide d\'un mélangeur à main. Ajouter une petite quantité d\'eau ou de jus de canneberges pour ajuster la consistence. Laisser refroidir.',
    'Pour préparer la mayonnaise, fouetter la Mascarpone avec le lait dans un bol. Assaisonner de sel et de poivre. Mettre de côté au réfrigérateur.',
    'Dans un grand bol, mélanger les canneberges séchées avec l\'échalote, la moutarde, l\'huile et le persil. Assaisonner généreusement de sel et de poivre.',
    'Hacher finement le bifteck de filet à l\'aide d\'un couteau tranchant. Incorporer la viande et le vinaigre de vin à la préparation de canneberges séchées et bien mélanger.',
    'Répartir le tartare dans des ramequins et transférer dans des assiettes. Servir immédiatement avec le ketchup aux canneberges et la mayonnaise au Mascarpone. Garnir des pousses fraîches, si désiré.'
  ],
  tags: ['canneberges', 'tartare', 'entrée'],
  slug: 'tartare-de-boeuf-au-mascarpone-et-aux-canneberges'
};
