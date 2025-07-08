'use client'
import { VideoItem, VideoTrailersType } from '@/app/types/DetailMovieTypes';
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

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

const itemVariants = {
    hidden: { opacity: 0, y: 30, x: 100 },
    show: { opacity: 1, y: 0, x: 0, transition: { duration: 0.5 } }
}

const Videos = ({ results }: VideoTrailersType) => {
    const videoDetails = results?.slice(0, 3) || []
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    if (videoDetails.length === 0) {
        return <p className='mt-5 text-xl font-bold'>No videos available</p>;
    }
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={containerVariants}
        >
            <motion.div variants={itemVariants}>
                <p className='mt-5 text-xl font-bold'>Videos</p>
            </motion.div>

            <motion.div
                className='flex gap-4 snap-x snap-mandatory overflow-x-auto scrollbar-hide mt-5'
                variants={containerVariants}
            >
                {videoDetails.map((videoDetail: VideoItem) => (
                    <motion.div key={videoDetail.id} variants={itemVariants}>
                        <iframe
                            src={`https://www.youtube.com/embed/${videoDetail.key}`}
                            title={videoDetail.name}
                            allow='encrypted-media;'
                            allowFullScreen
                            className='lg:w-[500px] md:w-[450px] w-[360px] lg:h-[300px] md:h-[250px] h-[200px] rounded-lg'
                        />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Videos