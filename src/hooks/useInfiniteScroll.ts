import { useEffect, useCallback } from 'react'

interface UseInfiniteScrollProps {
  hasMore: boolean
  isLoading: boolean
  onLoadMore: () => void
  threshold?: number // Distance from bottom in pixels
}

export const useInfiniteScroll = ({
  hasMore,
  isLoading,
  onLoadMore,
  threshold = 200,
}: UseInfiniteScrollProps) => {
  const handleScroll = useCallback(() => {
    if (isLoading || !hasMore) return

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const scrollHeight = document.documentElement.scrollHeight
    const clientHeight = window.innerHeight

    // Check if user is near the bottom
    if (scrollTop + clientHeight >= scrollHeight - threshold) {
      onLoadMore()
    }
  }, [hasMore, isLoading, onLoadMore, threshold])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])
}
