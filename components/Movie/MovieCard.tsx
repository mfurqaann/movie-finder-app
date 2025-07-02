import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'
import { MovieCardProps } from '@/app/types/MovieTypes'
import { cn } from '@/lib/utils'
import { getColor, getPercentage } from '@/app/utils/rating'


const MovieCard = ({ movie, type }: MovieCardProps) => {
    const displayTitle = type === "tv" ? movie.name : movie.title
    const displayDate = type === "tv" ? movie.first_air_date : movie.release_date
    const pathToDetail = type === "tv" ? `/tv/${movie.id}` : `/movie/${movie.id}`
    return (
        <div className="relative shrink-0 w-full sm:w-44 md:w-52 rounded-xl space-y-2">
            <Link href={{ pathname: pathToDetail }}>
                <div className="relative overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
                    <Image
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={displayTitle || "No Title"}
                        width={208}
                        height={312}
                        className="w-full h-auto object-cover"
                    />
                    <div className="absolute top-2 right-2">
                        <div className="relative w-9 h-9 md:w-10 md:h-10">
                            <div
                                className="absolute inset-0 rounded-full"
                                style={{
                                    background: `conic-gradient(${getColor(movie.vote_average)} ${getPercentage(movie.vote_average)}%,#e5e7eb ${getPercentage(movie.vote_average)}%)`
                                }}
                            ></div>

                            <div className="absolute inset-[3px] flex items-center justify-center rounded-full bg-background text-xs md:text-sm font-bold">
                                {Math.round(movie.vote_average * 10) / 10}
                            </div>
                        </div>

                    </div>
                </div>
            </Link>

            <div className="text-sm sm:text-xs md:text-sm font-semibold line-clamp-2">{displayTitle}</div>

            <div className="text-xs text-muted-foreground">
                {format(new Date(displayDate || "01-01-1970"), "d MMMM yyyy", { locale: id })}
            </div>
        </div>


    )
}

export default MovieCard