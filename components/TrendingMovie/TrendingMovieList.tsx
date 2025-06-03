import React from 'react'
import MovieCard from '../Movie/MovieCard'
import { MovieListProps } from '@/app/types/MovieTypes'

const TrendingMovieList = ({ movies }: MovieListProps) => {
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