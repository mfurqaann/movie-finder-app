import HeaderDetail from '@/components/DetailMovie/HeaderDetail';
import React from 'react'
import Image from 'next/image'

const getMovie = async (id: number) => {
    const apiKey = 'c888f8286ed76434eb3e9e865e1d467e'
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
        return await res.json();

    } catch (error) {
        console.error(error)
    }
}

const getCredits = async (movie_id: any) => {
    const apiKey = 'c888f8286ed76434eb3e9e865e1d467e'
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${apiKey}`)
        return await res.json();
    } catch (error) {
        console.error(error)
    }
}

const MovieDetail = async (props: {
    params: Promise<{ id: number }>
}) => {

    const movieId = (await props.params).id
    const movie = await getMovie(movieId)
    const credits = await getCredits(movieId)
    const image = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const backdropImage = `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path}`

    return (
        <div>
            <div className='relative w-full h-full bg-cover bg-center bg-no-repeat'
                style={{ backgroundImage: `url(${backdropImage})` }}>
                {/* Overlay Gelap */}
                <div className="absolute inset-0 bg-black/60" />

                {/* Content Header */}
                <HeaderDetail movie={movie} image={image} />
            </div>
            {/* Top Billed Cast */}
            <div className='container mx-auto px-10'>
                <p className='mt-5 text-xl font-bold'>Top Billed Cast</p>
                <div className="overflow-x-auto scrollbar-hide mt-5">
                    <div className='flex gap-4 snap-x snap-mandatory'>
                        {/* {credits.cast.map((cast: any) => (
                            <div key={cast.id}>
                                <Image
                                    src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                                    alt={cast.name}
                                    width={208}
                                    height={312}
                                    className="rounded-lg object-cover"
                                />
                            </div>
                        ))} */}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MovieDetail