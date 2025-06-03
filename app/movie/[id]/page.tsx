import HeaderDetail from '@/components/DetailMovie/HeaderDetail';
import React from 'react'
import Videos from '@/components/Videos/Videos';
import Recommendations from '@/components/Recommendations/Recommendations';
import { CreditsType, RecommendationsType, VideoTrailersType } from '@/app/types/DetailMovieTypes';
import CreditsCast from '@/components/Cast/CreditsCast';

const getMovie = async (id: number) => {
    const apiKey = 'c888f8286ed76434eb3e9e865e1d467e'
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
        return await res.json();

    } catch (error) {
        console.error(error)
    }
}

const getCredits = async (movie_id: number): Promise<CreditsType> => {
    const apiKey = 'c888f8286ed76434eb3e9e865e1d467e'
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${apiKey}`)
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
    const apiKey = 'c888f8286ed76434eb3e9e865e1d467e'
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${apiKey}`)
        return await res.json();
    } catch (error) {
        console.error(error)
        return { results: [] }
    }
}

const getVideoRecommendations = async (movie_id: number): Promise<RecommendationsType> => {
    const apiKey = 'c888f8286ed76434eb3e9e865e1d467e'
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=${apiKey}`)
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
                <CreditsCast credits={credits.cast} />
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