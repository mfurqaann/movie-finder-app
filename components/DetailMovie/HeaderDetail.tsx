'use client'
import { MovieDetailType } from '@/app/types/DetailMovieTypes'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import ShinnyText from '../ShinnyText'


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
                    <div className='mb-2'>
                        <ShinnyText>{displayTitle}</ShinnyText>
                    </div>
                    <p className="text-sm text-white mb-2">
                        {format(
                            new Date(movie.first_air_date ?? movie.release_date ?? "01-01-1970"),
                            "d MMMM yyyy",
                            { locale: id }
                        )}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {movie.genres.map((genre) => (
                            <motion.span
                                key={genre.id}
                                className="relative px-3 py-1 rounded-full bg-slate-200 text-slate-600 text-sm font-medium overflow-hidden"
                            >
                                {genre.name}

                                {/* Gloss layer */}
                                <motion.span
                                    className="absolute inset-0 bg-white opacity-20 rotate-12 pointer-events-none"
                                    style={{ width: '100%', height: '100%' }}
                                    initial={{ x: '-100%' }}
                                    animate={{ x: '100%' }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        repeatType: 'loop',
                                        ease: 'easeInOut'
                                    }}
                                />
                            </motion.span>
                        ))}
                    </div>
                </div>

                {movie.tagline && (
                    <p className="italic text-white text-sm md:text-base mb-4">{movie.tagline}</p>
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