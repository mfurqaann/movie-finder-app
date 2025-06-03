import React from 'react'
import { Skeleton } from '../ui/skeleton'

const DetailHeaderSkeleton = () => {
    return (
        <div>
            <Skeleton className='relative w-full h-full bg-white animate-shimmer' />
            {/* Overlay Gelap */}
            {/* <div className="absolute inset-0 bg-black/60" /> */}

            {/* Content Header */}
            {/* <HeaderDetail movie={movie} image={image} type={type} /> */}
        </div>
    )
}

export default DetailHeaderSkeleton