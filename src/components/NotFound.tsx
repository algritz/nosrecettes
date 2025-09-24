import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { Home, Lock } from 'lucide-react';

export const NotFound = () => {
  const location = useLocation();
  
  // Check if this is an admin route
  const adminRoutes = ['/new-recipe', '/edit-recipe', '/manage-categories', '/admin'];
  const isAdminRoute = adminRoutes.some(route => location.pathname.startsWith(route));
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center max-w-md mx-auto">
          {isAdminRoute ? (
            <>
              <div className="mb-6">
                <Lock className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-4">Accès restreint</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Cette page nécessite une configuration d'administration.
              </p>
              <p className="text-sm text-muted-foreground mb-8">
                Vous devez configurer l'intégration GitHub pour accéder aux fonctionnalités d'administration.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/admin">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Configuration
                  </Button>
                </Link>
                <Link to="/">
                  <Button className="w-full sm:w-auto">
                    <Home className="w-4 h-4 mr-2" />
                    Retour à l'accueil
                  </Button>
                </Link>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-6xl font-bold text-muted-foreground mb-4">404</h1>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Page non trouvée</h2>
              <p className="text-muted-foreground mb-8">
                Désolé, cette page n'existe pas ou a été déplacée.
              </p>
              <Link to="/">
                <Button>
                  <Home className="w-4 h-4 mr-2" />
                  Retour à l'accueil
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};