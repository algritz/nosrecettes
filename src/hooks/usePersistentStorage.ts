import { useEffect, useState } from 'react'

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

  // biome-ignore lint/correctness/useExhaustiveDependencies: checkPersistence is defined in hook scope
  useEffect(() => {
    if (canPersist) {
      // biome-ignore lint/suspicious/noConsole: intentional error logging
      checkPersistence().catch(console.error)
    }
  }, [canPersist])

  async function checkPersistence(): Promise<void> {
    if (!canPersist) return

    try {
      const persisted = await navigator.storage.persisted()
      setIsPersisted(persisted)
    } catch (_error) {
      setIsPersisted(false)
    }
  }

  async function requestPersistence(): Promise<boolean> {
    if (!canPersist) {
      return false
    }

    try {
      const granted = await navigator.storage.persist()
      setIsPersisted(granted)

      if (granted) {
      } else {
      }

      // Log storage quota info
      if ('estimate' in navigator.storage) {
        const estimate = await navigator.storage.estimate()
        const _usedMB = ((estimate.usage || 0) / 1024 / 1024).toFixed(2)
        const _quotaMB = ((estimate.quota || 0) / 1024 / 1024).toFixed(2)
      }

      return granted
    } catch (_error) {
      return false
    }
  }

  return { isPersisted, canPersist, requestPersistence }
}
