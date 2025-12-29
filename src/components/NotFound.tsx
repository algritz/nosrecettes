import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

export const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="container mx-auto px-4 py-8">
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-6xl font-bold text-muted-foreground mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Page non trouvée
        </h2>
        <p className="text-muted-foreground mb-8">
          Désolé, cette page n'existe pas ou a été déplacée.
        </p>
        <Link to="/">
          <Button>
            <Home className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Button>
        </Link>
      </div>
    </div>
  </div>
)
