import { useState, useEffect } from 'react'

interface PersistentStorageState {
  isPersisted: boolean | null
  canPersist: boolean
  requestPersistence: () => Promise<boolean>
}

export function usePersistentStorage(): PersistentStorageState {
  const [isPersisted, setIsPersisted] = useState<boolean | null>(null)
  const canPersist =
    typeof navigator !== 'undefined' &&
    'storage' in navigator &&
    'persist' in navigator.storage

  useEffect(() => {
    if (canPersist) {
      checkPersistence().catch(console.error)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canPersist])

  async function checkPersistence(): Promise<void> {
    if (!canPersist) return

    try {
      const persisted = await navigator.storage.persisted()
      setIsPersisted(persisted)
    } catch (error) {
      console.error('Failed to check persistence:', error)
      setIsPersisted(false)
    }
  }

  async function requestPersistence(): Promise<boolean> {
    if (!canPersist) {
      console.warn('Persistent storage not supported')
      return false
    }

    try {
      const granted = await navigator.storage.persist()
      setIsPersisted(granted)

      if (granted) {
        console.log('✓ Persistent storage granted')
      } else {
        console.warn(
          '✗ Persistent storage denied (this is normal in development)',
        )
        console.info(
          'ℹ️  Persistent storage is typically granted when:\n' +
            '  - Site is installed as PWA\n' +
            '  - User visits frequently\n' +
            '  - Notifications permission granted\n' +
            '  Storage will still work, but may be evicted under pressure.',
        )
      }

      // Log storage quota info
      if ('estimate' in navigator.storage) {
        const estimate = await navigator.storage.estimate()
        const usedMB = ((estimate.usage || 0) / 1024 / 1024).toFixed(2)
        const quotaMB = ((estimate.quota || 0) / 1024 / 1024).toFixed(2)
        console.log(
          `📊 Storage: ${usedMB} MB used of ${quotaMB} MB available`,
        )
      }

      return granted
    } catch (error) {
      console.error('Failed to request persistence:', error)
      return false
    }
  }

  return { isPersisted, canPersist, requestPersistence }
}
