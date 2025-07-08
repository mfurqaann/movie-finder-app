import HeaderDetail from '@/components/DetailMovie/HeaderDetail';
import React from 'react'
import Videos from '@/components/Videos/Videos';
import Recommendations from '@/components/Recommendations/Recommendations';
import { CreditsType, RecommendationsType, VideoTrailersType } from '@/app/types/DetailMovieTypes';
import CreditsCastWrapper from '@/components/Cast/CreditsCastWrapper';

const API_KEY = process.env.NEXT_PUBLIC_THE_MOVIE_API_KEY

const getMovie = async (id: number) => {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
        return await res.json();

    } catch (error) {
        console.error(error)
    }
}

const getCredits = async (movie_id: number): Promise<CreditsType> => {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${API_KEY}`)
        if (!res.ok) {
            throw new Error(`Failed to fetch trending movies: ${res.status}`)
        }
        return await res.json();
    } catch (error) {
        console.error(error)
        return { cast: [] }
    }
}

const getVideoTrailers = async (movie_id: number): Promise<VideoTrailersType> => {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${API_KEY}`)
        return await res.json();
    } catch (error) {
        console.error(error)
        return { results: [] }
    }
}

const getVideoRecommendations = async (movie_id: number): Promise<RecommendationsType> => {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=${API_KEY}`)
        return await res.json();
    } catch (error) {
        console.error(error)
        return { results: [] }
    }
}

const MovieDetail = async (props: {
    params: Promise<{ id: number }>
}) => {

    const movieId = (await props.params).id
    const movie = await getMovie(movieId)
    const credits = await getCredits(movieId)
    const videoTrailers = await getVideoTrailers(movieId)
    const videoRecommendations = await getVideoRecommendations(movieId);
    const image = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const backdropImage = `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path}`
    const type = "movie"
    return (
        <div>
            <div className='relative w-full h-full bg-cover bg-center bg-no-repeat'
                style={{ backgroundImage: `url(${backdropImage})` }}>
                {/* Overlay Gelap */}
                <div className="absolute inset-0 bg-black/60" />

                {/* Content Header */}
                <HeaderDetail movie={movie} image={image} type={type} />
            </div>
            {/* Top Billed Cast */}
            <div className='container mx-auto px-10'>
                <CreditsCastWrapper credits={credits.cast} />
            </div>

            {/* Videos */}
            <div className='container mx-auto px-10'>
                <Videos results={videoTrailers.results} />
            </div>

            {/* Recommendations */}
            <div className='container mx-auto px-10'>
                <Recommendations videos={videoRecommendations} />
            </div>
        </div>
    )
}

export default MovieDetail