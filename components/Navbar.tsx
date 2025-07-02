'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Sun, Moon, Search, X, Menu } from 'lucide-react'
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from '@/components/ui/dialog'
import { DialogTitle } from '@radix-ui/react-dialog'
import { MovieProps, NormalizedMovie } from '@/app/types/MovieTypes'
import { Input } from './ui/input'

const Navbar = () => {
    const { theme, setTheme } = useTheme()
    const [searchQuery, setSearchQuery] = useState('')
    const [searchMovies, setSearchMovies] = useState<NormalizedMovie[]>([])
    const [mounted, setMounted] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <header className="w-full shadow-md bg-background text-foreground sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 py-3">
                <div className="flex items-center gap-4">
                    <div className="text-xl md:text-2xl font-bold tracking-tight">Movie App</div>

                    <nav className="hidden md:flex items-center gap-4 text-sm md:text-base">
                        <button className="hover:text-primary transition">Home</button>
                    </nav>
                </div>

                <div className="flex items-center gap-3 md:gap-4">
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 rounded-full hover:bg-muted transition"
                        aria-label="Toggle Theme"
                    >
                        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    {/* Search dialog */}
                    <Dialog>
                        <DialogTrigger asChild>
                            <button className="flex items-center gap-2 px-3 py-2 border rounded-md text-sm hover:bg-muted transition whitespace-nowrap">
                                <Search size={16} />
                                <span className="hidden sm:inline">Search</span>
                            </button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md w-full">
                            <DialogTitle className="text-xl font-semibold mb-4">Search Movies</DialogTitle>
                            <Input
                                type="text"
                                placeholder="Search by title..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <div className="space-y-2 max-h-64 overflow-y-auto mt-4">
                                {searchMovies.length > 0 ? (
                                    searchMovies.map((item) => (
                                        <div
                                            key={`${item.media_type}-${item.id}`}
                                            className="flex gap-4 items-center border p-2 rounded-md hover:bg-muted cursor-pointer"
                                        >
                                            {item.poster_path ? (
                                                <img
                                                    src={`https://image.tmdb.org/t/p/w92${item.poster_path}`}
                                                    alt={item.title}
                                                    className="w-16 h-auto rounded"
                                                />
                                            ) : (
                                                <div className="w-16 h-24 bg-muted rounded flex items-center justify-center text-xs text-muted-foreground">
                                                    No image
                                                </div>
                                            )}

                                            <div>
                                                <div className="font-medium">{item.title}</div>
                                                <div className="text-sm text-muted-foreground">{item.date}</div>
                                                <div className="text-xs text-primary/70 uppercase mt-1">
                                                    {item.media_type === "movie" ? "Movie" : "TV Show"}
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : searchQuery.trim() !== "" ? (
                                    <p className="text-sm text-muted-foreground">No results found.</p>
                                ) : null}
                            </div>
                        </DialogContent>
                    </Dialog>

                    {/* Hamburger Menu */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 rounded hover:bg-muted transition"
                        aria-label="Toggle Menu"
                    >
                        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <nav className="md:hidden px-4 pb-4 space-y-2 animate-in fade-in slide-in-from-top-4">
                    <button className="block w-full text-left px-4 py-2 rounded hover:bg-muted transition">
                        Home
                    </button>
                </nav>
            )}
        </header>
    )
}

export default Navbar
