'use client'

import React, { useEffect, useState } from 'react'
import TrendingMovieList from './TrendingMovieList'
import TrendingToggle from './TrendingToggle'

const TrendingMovieContainer = () => {

    const [timeWindow, setTimeWindow] = useState('day')
    const [trendingMovies, setTrendingMovies] = useState([])
    const apiKey = 'c888f8286ed76434eb3e9e865e1d467e'

    useEffect(() => {
        const fetchTrendingMovies = async () => {
            try {
                const res = await fetch(
                    `https://api.themoviedb.org/3/trending/movie/${timeWindow}?api_key=${apiKey}`
                );
                const movies = await res.json();
                console.log(movies.results)
                setTrendingMovies(movies.results)
            } catch (error) {
                console.error(error)
            }
        }
        fetchTrendingMovies();
    }, [])
    return (
        <div>
            <div>
                <div>Trending Movie</div>
                <TrendingToggle value={timeWindow} onChange={setTimeWindow} />
            </div>
            <div>
                <TrendingMovieList movies={trendingMovies} />
            </div>
        </div>
    )
}

export default TrendingMovieContainer