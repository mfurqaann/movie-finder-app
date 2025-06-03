import React from 'react'
import MovieCard from '../Movie/MovieCard';
import { RecommendationsType } from '@/app/types/DetailMovieTypes';

const Recommendations = ({ videos }: { videos: RecommendationsType }) => {
    const videoDetails = videos.results
    if (videoDetails.length === 0) {
        return <p className='mt-5 text-xl font-bold'>No videos available</p>;
    }
    return (
        <div>
            <div>
                <p className='mt-5 text-xl font-bold'>Recommendations</p>
            </div>
            <div className='flex gap-4 snap-x snap-mandatory overflow-x-auto scrollbar-hide mt-5'>
                {videoDetails.map((videoDetail: any) => (
                    <MovieCard key={videoDetail.id} movie={videoDetail} type="movie" />
                ))}
            </div>
        </div>
    )
}

export default Recommendations