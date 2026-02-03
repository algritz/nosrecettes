import { WifiOff, RefreshCw, Database } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface RecipeLoadErrorProps {
  error: Error
  onRetry: () => void
}

export function RecipeLoadError({
  error,
  onRetry,
}: RecipeLoadErrorProps): React.ReactElement {
  const isOfflineError = error.message === 'OFFLINE_NO_DATA'

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <div className="rounded-full bg-muted p-6">
            {isOfflineError ? (
              <WifiOff className="h-12 w-12 text-muted-foreground" />
            ) : (
              <Database className="h-12 w-12 text-muted-foreground" />
            )}
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-foreground">
            {isOfflineError
              ? 'Recettes non disponibles hors ligne'
              : 'Erreur de chargement'}
          </h1>
          <p className="text-muted-foreground">
            {isOfflineError ? (
              <>
                Vos données de recettes ont été effacées. Veuillez vous
                connecter à Internet pour télécharger à nouveau les recettes.
              </>
            ) : (
              <>
                Une erreur est survenue lors du chargement des recettes.
                Veuillez réessayer.
              </>
            )}
          </p>
          {isOfflineError && (
            <p className="text-sm text-muted-foreground mt-4">
              Pour éviter cela à l'avenir, assurez-vous d'avoir suffisamment
              d'espace de stockage et accordez les autorisations de stockage
              persistant lorsqu'elles sont demandées.
            </p>
          )}
        </div>

        <Button onClick={onRetry} variant="default">
          <RefreshCw className="mr-2 h-4 w-4" />
          Réessayer
        </Button>
      </div>
    </div>
  )
}
