import { useParams } from 'react-router-dom';
import { recipes } from '@/data/recipes';
import { RecipeDetail } from '@/components/RecipeDetail';
import { NotFound } from '@/components/NotFound';

const RecipePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const recipe = recipes.find(r => r.slug === slug);

  if (!recipe) {
    return <NotFound />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <RecipeDetail recipe={recipe} />
    </div>
  );
};

export default RecipePage;