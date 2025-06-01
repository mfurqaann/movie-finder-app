'use client'
import React, { useEffect, useState } from 'react'
import TrendingToggle from '../TrendingMovie/TrendingToggle'
import TrendingMovieListLoading from '../TrendingMovie/TrendingMovieListLoading'
import TrendingMovieList from '../TrendingMovie/TrendingMovieList'
import PopularMovieList from './PopularMovieList'
import PopularToggle from './PopularToggle'
import PopularMovieListLoading from './PopularMovieListLoading'

const PopularMovieContainer = () => {
    const [type, setType] = useState('tv')
    const [popularMovies, setPopularMovies] = useState([])
    const [loading, setLoading] = useState(true);
    const apiKey = 'c888f8286ed76434eb3e9e865e1d467e'

    useEffect(() => {
        setLoading(true)
        const fetchPopularMovies = async () => {
            try {
                const res = await fetch(
                    `https://api.themoviedb.org/3/${type}/popular?api_key=${apiKey}&language=en-US&page=1`
                );
                const movies = await res.json();
                setPopularMovies(movies.results)
                setLoading(false)
            } catch (error) {
                console.error(error)
            }
        }
        setTimeout(() => {
            fetchPopularMovies();
        }, 500)
    }, [type])
    return (
        <div className='mt-10'>
            <div>
                <div className='text-2xl font-bold my-3'>What's Popular</div>
                <PopularToggle value={type} onChange={setType} />
            </div>
            <div>
                {loading ?
                    <PopularMovieListLoading />
                    : <PopularMovieList movies={popularMovies} />}
            </div>
        </div>
    )
}

export default PopularMovieContainer