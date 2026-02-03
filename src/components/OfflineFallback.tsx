import { WifiOff } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

export function OfflineFallback(): React.ReactElement {
  const navigate = useNavigate()

  const handleGoHome = (): void => {
    navigate('/')
  }

  const handleRetry = (): void => {
    window.location.reload()
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <div className="rounded-full bg-muted p-6">
            <WifiOff className="h-12 w-12 text-muted-foreground" />
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-foreground">
            Connexion requise
          </h1>
          <p className="text-muted-foreground">
            Cette fonctionnalité nécessite une connexion Internet. Les recettes
            sont disponibles hors ligne, mais pas les outils d'administration.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={handleRetry} variant="default">
            Réessayer
          </Button>
          <Button onClick={handleGoHome} variant="outline">
            Retour aux recettes
          </Button>
        </div>
      </div>
    </div>
  )
}
