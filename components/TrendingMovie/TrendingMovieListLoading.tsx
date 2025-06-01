import React from 'react'
import { Skeleton } from '../ui/skeleton'

const TrendingMovieListLoading = () => {
    const array = new Array(6).fill(null)
    return (
        <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 px-4 py-2 snap-x snap-mandatory overflow-x-scroll">
                {array.map((_, i) => (
                    <div
                        key={i}
                        className="shrink-0 snap-start w-52 bg-muted rounded-xl shadow p-3 space-y-2"
                    >
                        <Skeleton
                            className="rounded-lg w-full h-[312px]"
                        />
                        <Skeleton className="bg-zinc-700 h-4 w-3/4" />
                        <Skeleton className="bg-zinc-700 h-3 w-1/2" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TrendingMovieListLoading