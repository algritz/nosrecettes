import { useState, useEffect } from 'react'
import { isRecipeDBPopulated } from '@/utils/recipeDb'

interface IndexedDBReadyState {
  isReady: boolean
  isChecking: boolean
}

/**
 * Hook that monitors IndexedDB population status
 * Returns true once recipes are loaded into IndexedDB
 * This allows components to wait for data without arbitrary timeouts
 */
export function useIndexedDBReady(): IndexedDBReadyState {
  const [state, setState] = useState<IndexedDBReadyState>({
    isReady: false,
    isChecking: true,
  })

  useEffect(() => {
    let mounted = true
    let checkInterval: NodeJS.Timeout | null = null

    async function checkDBStatus(): Promise<void> {
      try {
        const populated = await isRecipeDBPopulated()

        if (!mounted) return

        if (populated) {
          // DB is ready - stop checking
          setState({ isReady: true, isChecking: false })
          if (checkInterval) {
            clearInterval(checkInterval)
            checkInterval = null
          }
        } else {
          // DB not ready yet - keep checking
          setState({ isReady: false, isChecking: true })
        }
      } catch (error) {
        console.error('Error checking IndexedDB status:', error)
        if (mounted) {
          setState({ isReady: false, isChecking: false })
        }
      }
    }

    // Initial check
    checkDBStatus().catch(console.error)

    // Poll every 100ms until DB is ready
    // This is fast enough to feel instant but not too aggressive
    checkInterval = setInterval(() => {
      checkDBStatus().catch(console.error)
    }, 100)

    return (): void => {
      mounted = false
      if (checkInterval) {
        clearInterval(checkInterval)
      }
    }
  }, [])

  return state
}
