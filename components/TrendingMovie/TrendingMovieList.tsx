import Image from 'next/image'
import React from 'react'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'
import Link from 'next/link'
import MovieCard from '../Movie/MovieCard'
import { CardProps } from '@/app/types/MovieTypes'

const TrendingMovieList = ({ movies }: CardProps) => {
    return (
        <div className="overflow-x-auto scrollbar-hide mt-5">
            <div className="flex gap-4 snap-x snap-mandatory">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    )
}

export default TrendingMovieList