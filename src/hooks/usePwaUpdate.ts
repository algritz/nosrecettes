import { useEffect, useState } from 'react'
import { useRegisterSW } from 'virtual:pwa-register/react'

export function usePwaUpdate(): {
  showUpdateBanner: boolean
  offlineReady: boolean
  dismissBanner: () => void
} {
  const {
    offlineReady: [offlineReady],
    needRefresh: [needRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      console.log('Service Worker registered:', r)
    },
    onRegisterError(error) {
      console.error('Service Worker registration error:', error)
    },
  })

  const [showUpdateBanner, setShowUpdateBanner] = useState(false)

  useEffect(() => {
    if (needRefresh) {
      setShowUpdateBanner(true)
      // Auto-update is enabled, so the page will reload automatically
      // The banner just shows "updating..." status
      updateServiceWorker(true) // true = reload page after update
    }
  }, [needRefresh, updateServiceWorker])

  const dismissBanner = (): void => {
    setShowUpdateBanner(false)
  }

  return {
    showUpdateBanner,
    offlineReady,
    dismissBanner,
  }
}
