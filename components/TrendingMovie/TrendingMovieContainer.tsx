'use client'

import React, { useEffect, useState } from 'react'
import TrendingMovieList from './TrendingMovieList'
import TrendingToggle from './TrendingToggle'
import { Skeleton } from '../ui/skeleton'
import TrendingMovieListLoading from './TrendingMovieListLoading'

const TrendingMovieContainer = () => {

    const [timeWindow, setTimeWindow] = useState('day')
    const [trendingMovies, setTrendingMovies] = useState([])
    const [loading, setLoading] = useState(true);
    const apiKey = 'c888f8286ed76434eb3e9e865e1d467e'

    useEffect(() => {
        setLoading(true)
        const fetchTrendingMovies = async () => {
            try {
                const res = await fetch(
                    `https://api.themoviedb.org/3/trending/movie/${timeWindow}?api_key=${apiKey}`
                );
                const movies = await res.json();
                setTrendingMovies(movies.results)
                setLoading(false)
            } catch (error) {
                console.error(error)
            }
        }
        setTimeout(() => {
            fetchTrendingMovies();
        }, 500)
    }, [timeWindow])
    return (
        <div className='mt-10'>
            <div>
                <div className='text-2xl font-bold my-3'>Trending Movie</div>
                <TrendingToggle value={timeWindow} onChange={setTimeWindow} />
            </div>
            <div>
                {loading ?
                    <TrendingMovieListLoading />
                    : <TrendingMovieList movies={trendingMovies} />}
            </div>
        </div>
    )
}

export default TrendingMovieContainer