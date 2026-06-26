import { useRegisterSW } from 'virtual:pwa-register/react'
import { useEffect, useState } from 'react'

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
    onRegistered(_r) {},
    onRegisterError(_error) {},
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
