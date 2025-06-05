import { MediaType } from "../enums/MediaTypeEnum";

export interface MovieProps {
    id: number;
    name?: string;
    title?: string;
    originalTitle?: string;
    poster_path: string;
    vote_average: number;
    first_air_date?: string;
    release_date?: string;
}

export interface ResultMovieProps {
    results: MovieProps[];
}


export interface MovieListProps {
    movies: MovieProps[];
    type?: MediaType
}


export interface MovieCardProps {
    movie: MovieProps;
    type?: MediaType;
}


export interface NormalizedMovie {
    id: number
    title: string
    date: string
    poster_path: string
    media_type: 'movie' | 'tv'
}
