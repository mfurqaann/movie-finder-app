export interface MovieProps {
    id: number;
    name?: string;
    title?: string;
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
    type?: string;
}

export interface MovieCardProps {
    movie: MovieProps;
    type?: string;
}