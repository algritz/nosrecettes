import { Recipe } from '@/types/recipe';

export const risottoAuChampignonCrabe: Recipe = {
  id: 'risotto-au-champignon-crabe',
  title: 'Risotto au champignon crabe',
  description: 'Une recette de risotto utilisant des champignons crabe, idéale pour utiliser ces ingrédients frais et savoureux.',
  categories: ['Plats principaux', 'Végétarien'],
  prepTime: 15,
  cookTime: 40,
  servings: 3,
  difficulty: 'Facile',
  ingredients: [
    '5 tasses de bouillon de poulet',
    '3 c. à table d\'huile d\'olive',
    '1 tasse d\'oignon ciselé',
    '1 tasse 1/2 de riz Arborio non cuit',
    '100 g. de champignon crabe frais et hâchés grossièrement',
    '1 tasse de mozzarella',
    '1/4 c. à thé de sel',
    '1/2 c. à thé de paprika',
    'Poivre du moulin, au goût'
  ],
  instructions: [
    'Dans un chaudron, ajouter tout le bouillon de poulet. Le laisser réchauffer à feu doux, couvrir.',
    'Dans une grande poêle à feu moyen, ajouter 1 c. à table 1/2 d\'huile d\'olive et vos morceaux de champignons crabe. Faire sauter environ 3 à 4 minutes, jusqu\'à ce qu\'ils soient cuits. Réserver dans un bol pour plus tard.',
    'Dans la même poêle à feu moyen, ajouter le reste de l\'huile d\'olive et les oignons. Faire cuire 5 minutes.',
    'Ajouter le riz et le sel. Faire cuire 1 minute en remuant régulièrement.',
    'Ajouter 1/2 tasse de bouillon de poulet. Faire cuire 2 minutes ou jusqu\'à absorption et remuer régulièrement.',
    'Ajouter 1 tasse et 1/2 de bouillon de poulet. Faire cuire 4 minutes ou jusqu\'à absorption et mélanger régulièrement.',
    'À quatre reprise, ajouter 3/4 de tasse de bouillon de poulet. Mélanger régulièrement. Le tout devrait prendre environ un vingtaine de minutes.',
    'Réserver la tasse 1/2 restante de bouillon de poulet.',
    'Retirer la poêle du feu.',
    'Ajouter les champignons, le reste du bouillon de poulet, la mozzarella, le paprika, le sel et le poivre. Bien remuer jusqu\'à ce que la mozzarella ait bien fondu.'
  ],
  tags: ['crabe', 'risotto', 'mozzarella'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/risotto-au-champignon-crabe',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/risotto-au-champignon-crabe',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/risotto-au-champignon-crabe'
    }
  ],
  source: 'David Cloutier',
  slug: 'risotto-au-champignon-crabe'
};
