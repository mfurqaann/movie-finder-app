import Image from 'next/image'
import React from 'react'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'

interface Props {
    movies: Array<any>
}

const TrendingMovieList = ({ movies }: Props) => {
    return (
        <div className="overflow-x-auto scrollbar-hide mt-5">
            <div className="flex gap-4 snap-x snap-mandatory">
                {movies.map((movie, i) => (
                    <div
                        key={i}
                        className="relative shrink-0 w-52 rounded-xl space-y-2"
                    >
                        <Image
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            width={208}
                            height={312}
                            className="rounded-lg object-cover"
                        />
                        <div className="text-sm font-semibold">{movie.title}</div>
                        <div className="text-xs text-muted-foreground">{format(new Date(movie.release_date), "d MMMM yyyy", { locale: id })
                        }</div>
                        <div className="absolute top-0 right-0 text-xs bg-green-500 text-white w-fit px-2 py-1 rounded-full">
                            {movie.vote_average}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TrendingMovieList