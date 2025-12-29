import { X, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface UpdateBannerProps {
  onDismiss: () => void
}

export function UpdateBanner({ onDismiss }: UpdateBannerProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            <RefreshCw className="h-5 w-5 flex-shrink-0 animate-spin" />
            <div className="flex-1">
              <p className="text-sm font-medium">Mise à jour en cours...</p>
              <p className="text-xs opacity-90 mt-1">
                Nouvelles recettes bientôt disponibles! La page se rafraîchira
                automatiquement.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              onClick={onDismiss}
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
              aria-label="Fermer"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
