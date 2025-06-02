import Image from 'next/image'
import React from 'react'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'
import { CardProps } from '@/app/types/MovieTypes'
import MovieCard from '../Movie/MovieCard'


const PopularMovieList = ({ movies, type }: CardProps) => {
    return (
        <div className="overflow-x-auto scrollbar-hide mt-5">
            <div className="flex gap-4 snap-x snap-mandatory">
                {movies.map((movie) => {
                    return <MovieCard key={movie.id} movie={movie} type={type} />
                })}
            </div>
        </div>
    )
}

export default PopularMovieList