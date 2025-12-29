import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { GitHubSetup } from '@/components/GitHubSetup';
import { CloudinarySetup } from '@/components/CloudinarySetup';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useOnlineStatus } from '@/hooks/useOnlineStatus';
import { OfflineFallback } from '@/components/OfflineFallback';

const Admin = () => {
  const isOnline = useOnlineStatus();
  const [githubConfig, setGithubConfig] = useState<{ owner: string; repo: string; token: string } | null>(null);
  const [cloudinaryConfig, setCloudinaryConfig] = useState<{ cloudName: string; uploadPreset: string } | null>(null);

  useEffect(() => {
    // Load GitHub config from localStorage
    const savedGithubConfig = localStorage.getItem('github-config');
    if (savedGithubConfig) {
      setGithubConfig(JSON.parse(savedGithubConfig));
    }

    // Load Cloudinary config from localStorage
    const savedCloudinaryConfig = localStorage.getItem('cloudinary-config');
    if (savedCloudinaryConfig) {
      setCloudinaryConfig(JSON.parse(savedCloudinaryConfig));
    }
  }, []);

  const handleGithubConfigSaved = (config: { owner: string; repo: string; token: string }) => {
    setGithubConfig(config);
  };

  const handleCloudinaryConfigSaved = (config: { cloudName: string; uploadPreset: string }) => {
    setCloudinaryConfig(config);
  };

  if (!isOnline) {
    return <OfflineFallback />;
  }

  const isFullyConfigured = githubConfig && cloudinaryConfig;

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
          Configurez GitHub pour la gestion des recettes et Cloudinary pour l'hébergement des images.
        </p>
      </div>

      <Tabs defaultValue="github" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="github" className="flex items-center gap-2">
            GitHub
            {githubConfig && <span className="w-2 h-2 bg-green-500 rounded-full"></span>}
          </TabsTrigger>
          <TabsTrigger value="cloudinary" className="flex items-center gap-2">
            Cloudinary
            {cloudinaryConfig && <span className="w-2 h-2 bg-green-500 rounded-full"></span>}
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="github" className="mt-6">
          <GitHubSetup onConfigSaved={handleGithubConfigSaved} />
        </TabsContent>
        
        <TabsContent value="cloudinary" className="mt-6">
          <CloudinarySetup onConfigSaved={handleCloudinaryConfigSaved} />
        </TabsContent>
      </Tabs>
      
      {isFullyConfigured && (
        <div className="mt-8 text-center">
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg mb-6">
            <p className="text-green-700 font-medium mb-2">
              ✅ Configuration complète !
            </p>
            <p className="text-sm text-green-600">
              GitHub: <strong>{githubConfig.owner}/{githubConfig.repo}</strong><br/>
              Cloudinary: <strong>{cloudinaryConfig.cloudName}</strong>
            </p>
          </div>
          
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

      {!isFullyConfigured && (
        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-yellow-700 text-sm">
            <strong>Configuration incomplète:</strong> Vous devez configurer à la fois GitHub et Cloudinary pour pouvoir ajouter des recettes avec images.
          </p>
        </div>
      )}
    </div>
  );
};

export default Admin;