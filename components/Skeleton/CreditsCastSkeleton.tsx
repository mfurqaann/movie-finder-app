import React from 'react'
import { Skeleton } from '../ui/skeleton'

const CreditsCastSkeleton = () => {
    return (
        <div>
            <p className="mt-5 text-xl font-bold">Top Billed Cast</p>
            <div className="flex gap-4 snap-x snap-mandatory overflow-x-auto scrollbar-hide mt-5">
                <div className="flex gap-4 snap-x snap-mandatory">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="shrink-0 w-[138px]">
                            <Skeleton className="w-[138px] h-[207px] rounded-lg" />
                            <Skeleton className="h-4 mt-2 w-full rounded" />
                            <Skeleton className="h-3 mt-1 w-3/4 rounded" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CreditsCastSkeleton