import { CastType } from '@/app/types/DetailMovieTypes'
import Image from 'next/image'
import React from 'react'

const CreditsCast = ({ credits }: { credits: Array<CastType> }) => {
    const profileImage = 'https://image.tmdb.org/t/p/w500'

    return (
        <div>
            <p className='mt-5 text-xl font-bold'>Top Billed Cast</p>
            <div className="flex gap-4 snap-x snap-mandatory overflow-x-auto scrollbar-hide mt-5">
                <div className='flex gap-4 snap-x snap-mandatory'>
                    {credits?.map((cast: CastType) => {
                        const displayProfileImage = cast.profile_path ? `${profileImage}${cast.profile_path}` : "/images/unknown_pic.jpg"
                        return (
                            <div key={cast.id} className='relative shrink-0 w-[138px] rounded-xl'>
                                <Image
                                    src={displayProfileImage}
                                    alt={cast.name}
                                    width={208}
                                    height={312}
                                    className="rounded-lg object-cover"
                                />


                                <p className='mt-2 font-bold'>{cast.name}</p>
                                <p className='mt-1 text-sm'>{cast.character}</p>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default CreditsCast