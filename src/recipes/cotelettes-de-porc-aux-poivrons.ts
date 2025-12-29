import { Recipe } from '@/types/recipe'

export const cotelettesDePorcAuxPoivrons: Recipe = {
  id: '1764521643331',
  title: 'Côtelettes de porc aux poivrons',
  description:
    'Côtelettes de porc poêlées, arrosées au beurre, servies sur une sauce de poivrons rouges aux oignons, vinaigre de vin rouge et basilic.',
  categories: ['Porc', 'Plats principaux'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 15, max: 15 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Porc',
      items: [
        '4 côtelettes de porc (200 g chacune)',
        "Huile d'olive",
        "4 gousses d'ail, avec la pelure, écrasées",
        '1 petit bouquet de thym',
        'Beurre',
        'Sel et poivre',
      ],
    },
    {
      title: 'Sauce aux poivrons',
      items: [
        "Huile d'olive",
        '2 oignons rouges, pelés et tranchés',
        '4 poivrons rouges, épépinés et hachés finement',
        '30 ml de sucre en poudre',
        '90 ml de vinaigre de vin rouge',
        "30 ml d'huile d'olive extra-vierge",
        '1 petit bouquet de basilic, feuilles ciselées',
        'Sel et poivre',
      ],
    },
  ],
  instructions: [
    {
      title: 'Sauce aux poivrons',
      steps: [
        'Chauffer un peu d’huile d’olive, ajouter l’oignon et les poivrons. Assaisonner de sel et poivre, ajouter le sucre et faire revenir à feu élevé 4 à 5 minutes (les légumes doivent crépiter).',
        'Ajouter le vinaigre et laisser bouillir 1 à 2 minutes, jusqu’à légère réduction et tendreté des poivrons.',
        'Éteindre le feu, incorporer l’huile d’olive extra-vierge et cuire 2 à 3 minutes de plus.',
        'Ajouter le basilic et cuire 30 secondes. Transférer dans un bol et laisser infuser. Nettoyer la poêle.',
      ],
    },
    {
      title: 'Côtelettes',
      steps: [
        'Pratiquer des entailles de 5 mm dans la viande à intervalles de 3 à 4 cm sans traverser. Assaisonner en faisant pénétrer dans les entailles.',
        'Chauffer la poêle à feu vif avec un peu d’huile. Ajouter les côtelettes, l’ail écrasé et le thym; griller 2 à 3 minutes jusqu’à coloration.',
        'Retourner et griller 2 à 3 minutes de l’autre côté en pressant le thym sous la viande et en écrasant légèrement l’ail.',
        'Ajouter 3 noix de beurre en fin de cuisson et arroser les côtelettes avec le beurre mousseux.',
        'Presser l’ail hors de sa peau et le déposer sur le porc avec les herbes. Déposer les côtelettes sur une assiette, arroser d’un peu de beurre de cuisson et laisser reposer 5 à 10 minutes.',
        'Servir les côtelettes sur la sauce de poivrons, avec le jus de cuisson.',
      ],
    },
  ],
  tags: ['poivrons rouges', 'vinaigre de vin rouge', 'basilic'],
  images: [
    {
      small:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/cotelettes_de_porc_aux_poivrons',
      medium:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/cotelettes_de_porc_aux_poivrons',
      large:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/cotelettes_de_porc_aux_poivrons',
    },
  ],
  source: 'David Cloutier',
  slug: 'cotelettes-de-porc-aux-poivrons',
}
