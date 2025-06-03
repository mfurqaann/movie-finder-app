import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'
import { MovieCardProps } from '@/app/types/MovieTypes'


const MovieCard = ({ movie, type }: MovieCardProps) => {
    const displayTitle = type === "tv" ? movie.name : movie.title
    const displayDate = type === "tv" ? movie.first_air_date : movie.release_date
    const pathToDetail = type === "tv" ? `/tv/${movie.id}` : `/movie/${movie.id}`
    return (
        <div
            className="relative shrink-0 w-52 rounded-xl space-y-2"
        >
            <Link href={{ pathname: pathToDetail }}>
                <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={displayTitle || "No Title"}
                    width={208}
                    height={312}
                    className="rounded-lg object-cover"
                />
            </Link>
            <div className="text-sm mt-3 font-semibold">{displayTitle}</div>
            <div className="text-xs text-muted-foreground">{format(new Date(displayDate || "01-01-1970"), "d MMMM yyyy", { locale: id })
            }</div>
            <div className="absolute top-0 right-0 text-xs bg-green-500 text-white w-fit px-2 py-1 rounded-full">
                {movie.vote_average}
            </div>
        </div>
    )
}

export default MovieCard