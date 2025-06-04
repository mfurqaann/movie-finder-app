import HeaderDetail from '@/components/DetailMovie/HeaderDetail';
import React from 'react'
import CreditsCast from '@/components/Cast/CreditsCast';
import { RecommendationsType } from '@/app/types/DetailMovieTypes';
import Recommendations from '@/components/Recommendations/Recommendations';

const API_KEY = process.env.API_KEY


const getMovie = async (id: number) => {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`)
        return await res.json();

    } catch (error) {
        console.error(error)
    }
}

const getCredits = async (movie_id: number) => {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/tv/${movie_id}/credits?api_key=${API_KEY}`)
        return await res.json();
    } catch (error) {
        console.error(error)
    }
}

const getVideoRecommendations = async (movie_id: number): Promise<RecommendationsType> => {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/tv/${movie_id}/recommendations?api_key=${API_KEY}`)
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
    const videoRecommendations = await getVideoRecommendations(movieId);
    const image = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const backdropImage = `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path}`
    const type = "tv"
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

            <div className='container mx-auto px-10'>
                <Recommendations type='tv' videos={videoRecommendations} />
            </div>
        </div>
    )
}

export default MovieDetail