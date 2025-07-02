import { Genre, MovieDetailType } from '@/app/types/DetailMovieTypes'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'
import Image from 'next/image'
import React from 'react'

const HeaderDetail = ({ movie, image, type }: MovieDetailType) => {
    const displayTitle = type === "tv" ? movie.name : movie.title
    return (
        <div className="relative z-10 flex flex-col md:flex-row gap-6 w-full h-auto p-6 md:p-10">
            <div className="w-full md:w-[300px] aspect-[2/3] relative mx-auto md:mx-0 flex-shrink-0">
                <Image
                    alt={displayTitle || "No Title"}
                    fill
                    src={image}
                    className="object-cover rounded-xl shadow-lg"
                />
            </div>

            <div className="flex flex-col justify-evenly w-full md:w-[60%]">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">{displayTitle}</h1>
                    <p className="text-sm text-white mb-2">
                        {format(
                            new Date(movie.first_air_date ?? movie.release_date ?? "01-01-1970"),
                            "d MMMM yyyy",
                            { locale: id }
                        )}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {movie.genres.map((genre: Genre) => (
                            <span
                                key={genre.id}
                                className="px-3 py-1 rounded-full bg-slate-200 text-slate-600 text-sm font-medium"
                            >
                                {genre.name}
                            </span>
                        ))}
                    </div>
                </div>

                {movie.tagline && (
                    <p className="italic text-white text-sm md:text-base mb-4">"{movie.tagline}"</p>
                )}

                <div className="mb-4">
                    <h2 className="text-lg font-bold text-white mb-1">Overview</h2>
                    <p className="text-white text-sm md:text-base leading-relaxed">{movie.overview}</p>
                </div>

                <div>
                    <p className="text-lg font-bold text-white">Jesse Armstrong</p>
                    <p className="text-sm text-white">Director, Writer</p>
                </div>
            </div>
        </div>
    )
}

export default HeaderDetail