'use client'
import React, { useRef } from 'react'
import MovieCard from '../Movie/MovieCard';
import { RecommendationsType } from '@/app/types/DetailMovieTypes';
import { MovieProps } from '@/app/types/MovieTypes';
import { MediaType } from '@/app/enums/MediaTypeEnum';
import { motion, useInView, Variants } from 'framer-motion'


const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.3,
            duration: 0.5
        }
    }
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

const Recommendations = ({ videos, type }: { videos: RecommendationsType, type?: MediaType }) => {
    const videoDetails = videos.results
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    if (videoDetails.length === 0) {
        return <p className='mt-5 text-xl font-bold'>No videos available</p>;
    }
    return (
        <motion.div ref={ref} variants={containerVariants} animate={isInView ? "show" : "hidden"} >
            <div>
                <p className='mt-5 text-xl font-bold'>Recommendations</p>
            </div>
            <motion.div variants={containerVariants} className='flex gap-4 snap-x snap-mandatory overflow-x-auto scrollbar-hide mt-5'>
                {videoDetails.map((videoDetail: MovieProps) => (
                    <motion.div key={videoDetail.id} variants={itemVariants}>
                        <MovieCard movie={videoDetail} type={type} />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Recommendations