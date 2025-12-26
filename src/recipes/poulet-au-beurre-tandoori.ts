import { Recipe } from '@/types/recipe';

export const pouletAuBeurreTandoori: Recipe = {
  id: 'poulet-au-beurre-tandoori',
  title: 'Poulet au beurre (tandoori)',
  description: 'Un délicieux poulet tandoori mariné, cuit au four ou au barbecue, servi avec une sauce au beurre parfumée au gingembre, ail, tomates et épices.',
  categories: ['Vollaille', 'Plats principaux'],
  prepTime: 45,
  cookTime: 30,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Marinade',
      items: [
      '4 à 5 cm (1 ½ à 2 pcs) de gingembre pelé, en morceaux',
      '3 à 4 gousses d\'ail pelées',
      '1 kg (2 livres) de poulet coupé en 6 morceaux, désossés, sans peau',
      'Jus de 1 citron',
      'Sel',
      '30 ml (2 c. à soupe) de paprika',
      '125 ml (1/2 tasse) de yaourt nature',
      '7 ml (1 1/2 c. à thé) de garam masala',
      'Sambal oelek'
      ]
    },
    {
      title: 'Sauce au beurre',
      items: [
      'Reste de la pâte au gingembre/ail',
      '15 ml (1 c. à soupe) d\'huile de pépins de raisins',
      '398 ml (14 oz) de tomates italiennes en purée ou 5 tomates fraîches, pelées, épépinées, coupées en dés',
      '1/2 à 1 piment vert fort, haché finement (facultatif)',
      '10 ml (2 c. à thé) de garam masala',
      '15 ml (1 c. à soupe) de miel',
      '60 ml (4 c. à soupe) de beurre froid coupé en morceaux',
      '125 à 250 ml (1/2 à 1 tasse) de crème 35%',
      'Sel au goût'
      ]
    }
  ],
  instructions: [
    'Dans le bol du robot, mettre en purée le gingembre et l\'ail pour former une pâte. La partager en 2 parts égales, réserver.',
    'Lacérer la chair du poulet et la frotter avec le jus de citron, le sel et le paprika. Réserver le poulet.',
    'Mélanger le yaourt, le garam masala et la moitié de la pâte de gingembre et d\'ail. Ajouter le poulet, le retourner pour bien l\'enrober de marinade. Laisser mariner au maximum 12 heures, pas plus.',
    'Préchauffer le four à 250°C (500°F). Disposer le poulet sur une plaque tapissée d\'une feuille d\'aluminium ou sur le BBQ.',
    'Cuire jusqu\'à ce que tendre 20 à 30 minutes selon la taille des morceaux (des petites cuisses de poulet désossées cuiront en 10 minutes).',
    'Dans une casserole, cuire le reste de pâte au gingembre dans l\'huile environ 1 minute à feu moyen.',
    'Ajouter les tomates et le piment, porter à presque ébullition.',
    'Incorporer le beurre en brassant pour obtenir une sauce veloutée.',
    'Ajouter le garam masala, le miel et la crème, laisser réduire quelques minutes en brassant.',
    'Ajouter le poulet tranché à la sauce. Cuire jusqu\'à ce que le poulet soit bien réchauffé.'
  ],
  tags: ['tandoori', 'marinade sèche', 'curry'],
  slug: 'poulet-au-beurre-tandoori'
};
