import { Genre, MovieDetailType } from '@/app/types/DetailMovieTypes'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'
import Image from 'next/image'
import React from 'react'

const HeaderDetail = ({ movie, image, type }: MovieDetailType) => {
    const displayTitle = type === "tv" ? movie.name : movie.title
    return (
        <div className='relative z-10 flex gap-4 w-full h-full p-10'>
            {/* Poster Image */}
            <div className='w-[300px] relative aspect-[2/3]'>
                <Image alt={displayTitle || "No Title"}
                    fill src={image}
                    className='object-cover rounded' />
            </div>

            <div className='flex flex-col justify-evenly w-[60%]'>
                <div className='title'>
                    <p className='text-2xl text-white font-bold'>{displayTitle}</p>
                    <div className='detail'>
                        <p className='text-white'>
                            {format(new Date(movie.first_air_date ? movie.first_air_date : movie.release_date || '01-01-1970'), "d MMMM yyyy", { locale: id })}
                        </p>
                        <div className='flex gap-1'>{movie.genres.map((genre: Genre) => (
                            <p key={genre.id} className='px-3 py-1 rounded bg-slate-200 text-slate-500'>{genre.name}</p>
                        ))}</div>
                    </div>
                </div>
                <p className='my-2 text-white'>{movie.tagline}</p>
                <div>
                    <p className='text-lg font-bold text-white'>Overview</p>
                    <p className='my-2 text-white'>
                        {movie.overview}
                    </p>
                </div>
                <div>
                    <p className='mt-3 text-lg font-bold text-white'>Jesse Armstrong</p>
                    <p className='text-white'>Director, Writer</p>
                </div>
            </div>

        </div>
    )
}

export default HeaderDetail