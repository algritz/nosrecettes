import { useState, useCallback } from 'react'

export interface CategoryChange {
  type: 'add' | 'remove'
  category: string
}

export const useCategoryManager = (initialCategories: string[]) => {
  const [categories, setCategories] = useState<string[]>(initialCategories)
  const [changes, setChanges] = useState<CategoryChange[]>([])

  const addCategory = useCallback(
    (categoryName: string) => {
      const trimmedName = categoryName.trim()
      if (!trimmedName || categories.includes(trimmedName)) {
        return false
      }

      setCategories((prev) => [...prev, trimmedName].sort())
      setChanges((prev) => [...prev, { type: 'add', category: trimmedName }])
      return true
    },
    [categories],
  )

  const removeCategory = useCallback((categoryName: string) => {
    setCategories((prev) => prev.filter((cat) => cat !== categoryName))
    setChanges((prev) => [...prev, { type: 'remove', category: categoryName }])
  }, [])

  const getChangesForPR = useCallback(() => changes, [changes])

  const getNewCategoriesForPR = useCallback(
    () =>
      changes
        .filter((change) => change.type === 'add')
        .map((change) => change.category),
    [changes],
  )

  const hasChanges = useCallback(() => changes.length > 0, [changes])

  const clearChanges = useCallback(() => {
    setChanges([])
  }, [])

  return {
    categories,
    addCategory,
    removeCategory,
    getChangesForPR,
    getNewCategoriesForPR,
    hasChanges,
    clearChanges,
  }
}
