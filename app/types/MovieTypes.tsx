export interface MovieProps {
    id: number;
    name?: string;
    title?: string;
    poster_path: string;
    vote_average: number;
    first_air_date?: string;
    release_date?: string
}

export interface ResultMovieProps {
    results: Array<MovieProps>
}


export interface CardProps {
    movies: Array<MovieProps>;
    type?: string
}

export interface MovieCardProps {
    movie: MovieProps;
    type?: string
}