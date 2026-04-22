import { useEffect, useState } from 'react'

export type FontSizeLevel = 0 | 1 | 2 | 3

const STORAGE_KEY = 'font-size-level'
const ROOT_SIZES = ['100%', '112.5%', '125%', '137.5%']

export const useFontSize = (): {
  level: FontSizeLevel
  increase: () => void
  decrease: () => void
} => {
  const [level, setLevel] = useState<FontSizeLevel>(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    const parsed = saved !== null ? parseInt(saved) : 0
    return (parsed >= 0 && parsed <= 3 ? parsed : 0) as FontSizeLevel
  })

  useEffect(() => {
    document.documentElement.style.fontSize = ROOT_SIZES[level]
    localStorage.setItem(STORAGE_KEY, String(level))
  }, [level])

  const increase = (): void => setLevel((l) => (Math.min(l + 1, 3) as FontSizeLevel))
  const decrease = (): void => setLevel((l) => (Math.max(l - 1, 0) as FontSizeLevel))

  return { level, increase, decrease }
}
