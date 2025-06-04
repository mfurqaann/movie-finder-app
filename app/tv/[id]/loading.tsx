import CreditsCastSkeleton from '@/components/Skeleton/CreditsCastSkeleton'
import DetailHeaderSkeleton from '@/components/Skeleton/DetailHeaderSkeleton'
import RecommendationSkeleton from '@/components/Skeleton/RecommendationSkeleton'
import TrailersSkeleton from '@/components/Skeleton/TrailersSkeleton'
import React from 'react'

const Loading = () => {
    return (
        <>
            <DetailHeaderSkeleton />
            <div className='container mx-auto px-10'>
                <CreditsCastSkeleton />
            </div>
            <div className='container mx-auto px-10'>
                <TrailersSkeleton />
            </div>
            <div className='container mx-auto px-10'>
                <RecommendationSkeleton />
            </div>

        </>
    )
}

export default Loading