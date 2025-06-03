import HeaderDetail from '@/components/DetailMovie/HeaderDetail';
import React from 'react'
import Image from 'next/image'
import Videos from '@/components/Videos/Videos';
import Recommendations from '@/components/Recommendations/Recommendations';

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

const getVideoTrailers = async (movie_id: any) => {
    const apiKey = 'c888f8286ed76434eb3e9e865e1d467e'
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${apiKey}`)
        return await res.json();
    } catch (error) {
        console.error(error)
    }
}

const getVideoRecommendations = async (movie_id: any) => {
    const apiKey = 'c888f8286ed76434eb3e9e865e1d467e'
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=${apiKey}`)

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
    const videoTrailers = await getVideoTrailers(movieId)
    const videoRecommendations = await getVideoRecommendations(movieId)
    console.log(videoRecommendations)
    const image = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const backdropImage = `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path}`
    const profileImage = 'https://image.tmdb.org/t/p/w500'
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
                <p className='mt-5 text-xl font-bold'>Top Billed Cast</p>
                <div className="flex gap-4 snap-x snap-mandatory overflow-x-auto scrollbar-hide mt-5">
                    <div className='flex gap-4 snap-x snap-mandatory'>
                        {credits.cast.map((cast: any) => {
                            const displayProfileImage = cast.profile_path ? `${profileImage}${cast.profile_path}` : "/images/unknown_pic.jpg"
                            return (
                                <div key={cast.id} className='relative shrink-0 w-[138px] rounded-xl'>
                                    <Image
                                        src={displayProfileImage}
                                        alt={cast.name}
                                        width={208}
                                        height={312}
                                        className="rounded-lg object-cover"
                                    />


                                    <p className='mt-2 font-bold'>{cast.name}</p>
                                    <p className='mt-1 text-sm'>{cast.character}</p>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>

            {/* Videos */}
            <div className='container mx-auto px-10'>
                <Videos videos={videoTrailers} />
            </div>

            {/* Recommendations */}
            <div className='container mx-auto px-10'>
                <Recommendations videos={videoRecommendations} />
            </div>
        </div>
    )
}

export default MovieDetail