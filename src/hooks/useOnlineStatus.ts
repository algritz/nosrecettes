import { useState, useEffect } from 'react';

export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    // Function to check actual connectivity by trying to fetch manifest
    const checkConnectivity = async () => {
      if (!navigator.onLine) {
        setIsOnline(false);
        return;
      }

      try {
        // Try to fetch manifest.json with no-cache to verify real connectivity
        const response = await fetch('/manifest.json', {
          cache: 'no-store',
          method: 'HEAD',
        });
        setIsOnline(response.ok);
      } catch {
        // Fetch failed - we're offline
        setIsOnline(false);
      }
    };

    // Check on mount
    checkConnectivity();

    // Set up interval to periodically check connectivity on admin pages
    const interval = setInterval(checkConnectivity, 5000);

    // Also listen to browser online/offline events
    const handleOnline = () => {
      checkConnectivity(); // Verify with actual request
    };
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      clearInterval(interval);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
}
