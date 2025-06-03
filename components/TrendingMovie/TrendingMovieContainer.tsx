'use client'

import React, { useEffect, useState } from 'react'
import TrendingMovieList from './TrendingMovieList'
import TrendingToggle from './TrendingToggle'
import TrendingMovieListLoading from './TrendingMovieListLoading'
import { MovieProps, ResultMovieProps } from '@/app/types/MovieTypes'

const API_KEY = 'c888f8286ed76434eb3e9e865e1d467e'

const fetchTrendingMovies = async (timeWindow: string): Promise<MovieProps[]> => {
    try {
        const res = await fetch(
            `https://api.themoviedb.org/3/trending/movie/${timeWindow}?api_key=${API_KEY}`
        )

        if (!res.ok) {
            throw new Error(`Failed to fetch trending movies: ${res.status}`)
        }

        const data: ResultMovieProps = await res.json()
        return data.results || []
    } catch (error) {
        console.error('Error fetching trending movies:', error)
        return []
    }
}

const TrendingMovieContainer = () => {
    const [timeWindow, setTimeWindow] = useState<string>('day')
    const [trendingMovies, setTrendingMovies] = useState<MovieProps[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadTrendingMovies = async () => {
            setLoading(true)
            const movies = await fetchTrendingMovies(timeWindow)
            setTrendingMovies(movies)
            setLoading(false)
        }

        loadTrendingMovies()
    }, [timeWindow])

    return (
        <div className="mt-10">
            <div>
                <h2 className="text-2xl font-bold my-3">Trending Movie</h2>
                <TrendingToggle value={timeWindow} onChange={setTimeWindow} />
            </div>
            <div>
                {loading ? (
                    <TrendingMovieListLoading />
                ) : (
                    <TrendingMovieList movies={trendingMovies} />
                )}
            </div>
        </div>
    )
}

export default TrendingMovieContainer
