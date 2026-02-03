import { Skeleton } from '@/components/ui/skeleton'
import { Card } from '@/components/ui/card'

export function RecipeDetailSkeleton(): React.ReactElement {
  return (
    <div className="container mx-auto p-4 max-w-4xl">
      {/* Header skeleton */}
      <div className="mb-6">
        <Skeleton className="h-10 w-3/4 mb-4" />
        <Skeleton className="h-5 w-full mb-2" />
        <Skeleton className="h-5 w-5/6" />
      </div>

      {/* Image skeleton */}
      <Skeleton className="h-64 w-full mb-6 rounded-lg" />

      {/* Meta info skeleton */}
      <div className="flex gap-4 mb-6">
        <Skeleton className="h-8 w-24" />
        <Skeleton className="h-8 w-24" />
        <Skeleton className="h-8 w-32" />
      </div>

      {/* Ingredients skeleton */}
      <Card className="p-6 mb-6">
        <Skeleton className="h-7 w-40 mb-4" />
        <div className="space-y-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="h-5 w-full" />
          ))}
        </div>
      </Card>

      {/* Instructions skeleton */}
      <Card className="p-6">
        <Skeleton className="h-7 w-40 mb-4" />
        <div className="space-y-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i}>
              <Skeleton className="h-5 w-full mb-1" />
              <Skeleton className="h-5 w-4/5" />
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
