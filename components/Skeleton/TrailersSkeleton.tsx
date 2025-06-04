import React from 'react'
import { Skeleton } from '../ui/skeleton'

const TrailersSkeleton = () => {
    return (
        <div>
            <div>
                <p className="mt-5 text-xl font-bold">Videos</p>
            </div>
            <div className="flex gap-4 snap-x snap-mandatory overflow-x-auto scrollbar-hide mt-5">
                {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="shrink-0">
                        <Skeleton className="lg:w-[500px] md:w-[450px] w-[360px] lg:h-[300px] md:h-[250px] h-[200px] rounded-lg" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TrailersSkeleton