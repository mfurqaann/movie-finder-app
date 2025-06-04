import { MovieProps } from "./MovieTypes";

export interface Genre {
    id: number;
    name: string
}

export interface MovieBase {
    name?: string;
    title?: string;
    first_air_date?: string;
    release_date?: string;
    genres: Genre[];
    tagline: string;
    overview: string;
}
export interface MovieDetailType {
    movie: MovieBase;
    image: string;
    type: string;
}

export interface CastType {
    id: number;
    profile_path: string;
    name: string;
    character: string;
}

export interface CreditsType {
    cast: CastType[]
}


export interface VideoItem {
    id: number;
    name: string;
    key: string
}


export interface VideoTrailersType {
    results: VideoItem[];
}

export interface RecommendationsType {
    results: MovieProps[]
}