import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { GitHubSetup } from '@/components/GitHubSetup';

const Admin = () => {
  const [githubConfig, setGithubConfig] = useState<{ owner: string; repo: string; token: string } | null>(null);

  useEffect(() => {
    // Load GitHub config from localStorage
    const savedConfig = localStorage.getItem('github-config');
    if (savedConfig) {
      setGithubConfig(JSON.parse(savedConfig));
    }
  }, []);

  const handleConfigSaved = (config: { owner: string; repo: string; token: string }) => {
    setGithubConfig(config);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link to="/">
          <Button variant="outline" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux recettes
          </Button>
        </Link>
        
        <h1 className="text-3xl font-bold mb-4">Administration</h1>
        <p className="text-muted-foreground">
          Configurez l'accès à GitHub pour pouvoir ajouter et modifier des recettes.
        </p>
      </div>

      <GitHubSetup onConfigSaved={handleConfigSaved} />
      
      {githubConfig && (
        <div className="mt-8 text-center">
          <p className="text-muted-foreground mb-4">
            Configuration terminée ! Vous pouvez maintenant ajouter et modifier des recettes.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/new-recipe">
              <Button>
                Ajouter une nouvelle recette
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline">
                Retour aux recettes
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;