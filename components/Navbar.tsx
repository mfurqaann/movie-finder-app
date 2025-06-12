'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Sun, Moon, Search } from 'lucide-react'
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from '@/components/ui/dialog'
import { DialogTitle } from '@radix-ui/react-dialog'
import { MovieProps, NormalizedMovie } from '@/app/types/MovieTypes'
import { Input } from './ui/input'
import Image from 'next/image'

const Navbar = () => {
    const { theme, setTheme } = useTheme()
    const [searchQuery, setSearchQuery] = useState('')
    const [searchMovies, setSearchMovies] = useState<NormalizedMovie[]>([])
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (searchQuery.trim() === '') {
            setSearchMovies([])
            return
        }

        const fetchData = async () => {
            try {
                const apiKey = process.env.NEXT_PUBLIC_THE_MOVIE_API_KEY
                const encodedQuery = encodeURIComponent(searchQuery)

                const [movieRes, tvRes] = await Promise.all([
                    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodedQuery}`),
                    fetch(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${encodedQuery}`)
                ])

                const movieData = await movieRes.json()
                const tvData = await tvRes.json()

                const normalizedMovies: NormalizedMovie[] = (movieData.results || []).map((item: MovieProps) => ({
                    id: item.id,
                    title: item.title,
                    date: item.release_date,
                    poster_path: item.poster_path,
                    media_type: 'movie'
                }))

                const normalizedTV: NormalizedMovie[] = (tvData.results || []).map((item: MovieProps) => ({
                    id: item.id,
                    title: item.name,
                    date: item.first_air_date,
                    poster_path: item.poster_path,
                    media_type: 'tv'
                }))

                const combinedResults = [...normalizedMovies, ...normalizedTV]
                setSearchMovies(combinedResults)
                console.log(searchMovies)
            } catch (err) {
                console.error('Error fetching TMDB data:', err)
            }
        }

        const debounce = setTimeout(fetchData, 500)
        return () => clearTimeout(debounce)
    }, [searchQuery])

    if (!mounted) return null;

    return (
        <div className='flex justify-between items-center px-6 py-4 shadow-md bg-background text-foreground'>
            <div className='flex gap-x-6 items-center'>
                <div className='text-2xl font-bold'>Movie App</div>
                <div className='text-lg cursor-pointer'>Home</div>
            </div>

            <div className='flex gap-4 items-center'>
                {/* Dark Mode Toggle */}
                <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className='p-2 rounded-full hover:bg-muted transition'
                >
                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                {/* Search Dialog */}
                <Dialog>
                    <DialogTrigger asChild>
                        <button className='flex items-center gap-2 px-3 py-2 border rounded-md text-sm hover:bg-muted transition'>
                            <Search size={16} />
                            <span>Search</span>
                        </button>
                    </DialogTrigger>
                    <DialogContent className='max-w-md'>
                        <DialogTitle className='text-xl font-semibold mb-4'>Search Movies</DialogTitle>
                        <Input
                            type='text'
                            placeholder='Search by title...'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />

                        <div className='space-y-2 max-h-60'>
                            {searchMovies.length > 0 ? (
                                <div className="space-y-2 max-h-64 overflow-y-auto">
                                    {searchMovies.map((item) => (
                                        <div
                                            key={`${item.media_type}-${item.id}`}
                                            className="flex gap-4 items-center border p-2 rounded-md hover:bg-muted cursor-pointer"
                                        >
                                            {/* Poster */}
                                            {item.poster_path ? (
                                                <Image
                                                    src={`https://image.tmdb.org/t/p/w92${item.poster_path}`}
                                                    alt={item.title}
                                                    className="w-16 h-auto rounded"
                                                />
                                            ) : (
                                                <div className="w-16 h-24 bg-muted rounded flex items-center justify-center text-xs text-muted-foreground">
                                                    No image
                                                </div>
                                            )}

                                            {/* Info */}
                                            <div>
                                                <div className="font-medium">{item.title}</div>
                                                <div className="text-sm text-muted-foreground">{item.date}</div>
                                                <div className="text-xs text-primary/70 uppercase mt-1">
                                                    {item.media_type === 'movie' ? 'Movie' : 'TV Show'}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : searchQuery.trim() !== '' ? (
                                <p className="text-sm text-muted-foreground">No results found.</p>
                            ) : null}
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}

export default Navbar
