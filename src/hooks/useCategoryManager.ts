import { useState, useCallback } from 'react';

export const useCategoryManager = (initialCategories: string[]) => {
  const [categories, setCategories] = useState<string[]>(initialCategories);
  const [newCategories, setNewCategories] = useState<string[]>([]);

  const addCategory = useCallback((categoryName: string) => {
    const trimmedName = categoryName.trim();
    if (!trimmedName || categories.includes(trimmedName)) {
      return false;
    }
    
    setCategories(prev => [...prev, trimmedName].sort());
    setNewCategories(prev => [...prev, trimmedName]);
    return true;
  }, [categories]);

  const removeCategory = useCallback((categoryName: string) => {
    setCategories(prev => prev.filter(cat => cat !== categoryName));
    setNewCategories(prev => prev.filter(cat => cat !== categoryName));
  }, []);

  const getNewCategoriesForPR = useCallback(() => {
    return newCategories;
  }, [newCategories]);

  const clearNewCategories = useCallback(() => {
    setNewCategories([]);
  }, []);

  return {
    categories,
    addCategory,
    removeCategory,
    getNewCategoriesForPR,
    clearNewCategories
  };
};