'use client'
import { CastType } from '@/app/types/DetailMovieTypes'
import Image from 'next/image'
import React from 'react'
import { motion, Variants } from 'framer-motion'

const containerVariants = {
    show: {
        transition: {
            staggerChildren: 0.3,
        },
    },
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.2, 0.8, 0.2, 1],
        },
    },
}

const CreditsCast = ({ credits }: { credits: CastType[] }) => {
    const profileImage = 'https://image.tmdb.org/t/p/w500'

    return (
        <div>
            <p className="mt-5 text-xl font-bold">Top Billed Cast</p>
            <motion.div
                className="flex gap-4 snap-x snap-mandatory overflow-x-auto mt-5 scrollbar-hide scroll-smooth px-1 pb-2"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                {credits?.map((cast: CastType, index: number) => {
                    const displayProfileImage = cast.profile_path
                        ? `${profileImage}${cast.profile_path}`
                        : "/images/unknown_pic.jpg"

                    return (
                        <motion.div
                            key={`${cast.id} + ${index}`}
                            className="shrink-0 w-[138px] snap-start rounded-xl bg-background shadow-sm hover:shadow-md transition-shadow"
                            variants={itemVariants}
                        >
                            <div className="overflow-hidden rounded-xl">
                                <Image
                                    src={displayProfileImage}
                                    alt={cast.name}
                                    width={208}
                                    height={312}
                                    className="rounded-xl object-cover w-full h-auto"
                                />
                            </div>
                            <div className="mt-2 px-1">
                                <p className="font-bold text-sm">{cast.name}</p>
                                <p className="text-muted-foreground text-xs line-clamp-2">{cast.character}</p>
                            </div>
                        </motion.div>
                    )
                })}
            </motion.div>
        </div>
    )
}

export default CreditsCast