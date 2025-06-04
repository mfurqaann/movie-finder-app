import React from 'react'
import { Skeleton } from '../ui/skeleton'

const DetailHeaderSkeleton = () => {
    return (
        <Skeleton className="relative w-full h-full bg-gray-800">
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 flex gap-4 w-full h-full p-10">
                <div className="w-[300px] aspect-[2/3]">
                    <Skeleton className="w-full h-full rounded" />
                </div>

                <div className="flex flex-col justify-evenly w-[60%] space-y-4">
                    <div className="space-y-2">
                        <Skeleton className="h-6 w-1/2" />
                        <div className="flex gap-2">
                            <Skeleton className="h-5 w-24" />
                            <Skeleton className="h-5 w-20" />
                            <Skeleton className="h-5 w-16" />
                        </div>
                    </div>

                    <Skeleton className="h-5 w-3/4" />

                    <div>
                        <Skeleton className="h-5 w-32 mb-2" />
                        <Skeleton className="h-4 w-full mb-1" />
                        <Skeleton className="h-4 w-5/6 mb-1" />
                        <Skeleton className="h-4 w-2/3" />
                    </div>

                    <div className="space-y-2">
                        <Skeleton className="h-5 w-40" />
                        <Skeleton className="h-4 w-24" />
                    </div>
                </div>
            </div>
        </Skeleton>
    )
}

export default DetailHeaderSkeleton