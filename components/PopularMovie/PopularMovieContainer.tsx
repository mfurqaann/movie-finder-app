'use client'
import React, { useEffect, useState } from 'react'
import PopularMovieList from './PopularMovieList'
import PopularToggle from './PopularToggle'
import PopularMovieListLoading from './PopularMovieListLoading'
import { MovieProps, ResultMovieProps } from '@/app/types/MovieTypes'
import { MediaType } from '@/app/enums/MediaTypeEnum'


const PopularMovieContainer = () => {
    const [type, setType] = useState(MediaType.Tv)
    const [popularMovies, setPopularMovies] = useState<MovieProps[]>([])
    const [loading, setLoading] = useState(true);
    const API_KEY = process.env.NEXT_PUBLIC_THE_MOVIE_API_KEY

    useEffect(() => {
        setLoading(true)
        const fetchPopularMovies = async () => {
            try {
                const res = await fetch(
                    `https://api.themoviedb.org/3/${type}/popular?api_key=${API_KEY}&language=en-US&page=1`
                );
                const movies: ResultMovieProps = await res.json();
                setPopularMovies(movies.results)
                setLoading(false)
            } catch (error) {
                console.error(error)
            }
        }
        setTimeout(() => {
            fetchPopularMovies();
        }, 500)
    }, [type, API_KEY])
    return (
        <div className='mt-10'>
            <div>
                <div className='text-2xl font-bold my-3'>What&apos;s Popular</div>
                <PopularToggle value={type} onChange={setType} />
            </div>
            <div>
                {loading ?
                    <PopularMovieListLoading />
                    : <PopularMovieList movies={popularMovies} type={type as MediaType} />}
            </div>
        </div>
    )
}

export default PopularMovieContainer