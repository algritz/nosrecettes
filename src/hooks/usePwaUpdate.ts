import { useEffect, useState } from "react";
import { useRegisterSW } from "virtual:pwa-register/react";

export function usePwaUpdate() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      console.log("Service Worker registered:", r);
    },
    onRegisterError(error) {
      console.error("Service Worker registration error:", error);
    },
  });

  const [showUpdateBanner, setShowUpdateBanner] = useState(false);

  useEffect(() => {
    if (needRefresh) {
      setShowUpdateBanner(true);
      // Auto-update is enabled, so the page will reload automatically
      // The banner just shows "updating..." status
      updateServiceWorker(true); // true = reload page after update
    }
  }, [needRefresh, updateServiceWorker]);

  const dismissBanner = () => {
    setShowUpdateBanner(false);
  };

  return {
    showUpdateBanner,
    offlineReady,
    dismissBanner,
  };
}
