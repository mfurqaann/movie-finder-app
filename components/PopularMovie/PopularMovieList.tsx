import React from 'react'
import { MovieListProps } from '@/app/types/MovieTypes'
import MovieCard from '../Movie/MovieCard'


const PopularMovieList = ({ movies, type }: MovieListProps) => {
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