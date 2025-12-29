import { Recipe } from '@/types/recipe';

export const pouletSauteAuPoivreEtAuxLegumes: Recipe = {
  id: 'poulet-saute-au-poivre-et-aux-legumes',
  title: 'Poulet sauté au poivre et aux légumes',
  description: 'Une recette de poulet sauté parfumé au poivre, accompagné de légumes blanchis et de Boursin Cuisine Trois Poivres, servi avec une touche de citron et de cerfeuil.',
  categories: ['Plats principaux', 'Végétarien'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 17, max: 17 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '4 poitrine de poulet en lanières',
    '2 oignons',
    'Jus de citron',
    '6 cuil. à soupe de Boursin Cuisine Trois Poivres',
    'Carotte',
    'Pois mange-tout',
    'Fèves',
    'Huile d\'olive',
    'Sel',
    'Cerfeuil'
  ],
  instructions: [
    'Saisir les lanières de poulet dans de l\'huile d\'olive.',
    'Une fois colorés, les retirer et faire sauter 2 oignons hachés et des légumes blanchis (carottes, fèves, pois mange-tout).',
    'Ajouter le poulet et le jus d\'un citron.',
    'Cuire 10 min.',
    'Incorporer le Boursin Cuisine Trois Poivres et cuire encore 2 min.',
    'Saler et parsemer de cerfeuil.'
  ],
  tags: ['citron', 'légumes blanchis', 'sauté'],
  notes: 'Pour blanchir des légumes, faites bouillir de l\'eau salée dans une casserole. Lorsque l\'eau arrive à ébullition, versez les légumes dans la casserole. Retirez les légumes lorsque l\'eau recommence à bouillir puis plongez-les dans un récipient contenant de l\'eau froide.',
  slug: 'poulet-saute-au-poivre-et-aux-legumes'
};
