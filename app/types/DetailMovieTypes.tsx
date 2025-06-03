export interface CastType {
    id: number;
    profile_path: string;
    name: string;
    character: string;
}

export interface CreditsType {
    cast: Array<CastType>
}

export interface VideoTrailersType {
    results: Array<VideoItem>;
}

export interface VideoItem {
    id: number;
    name: string;
    key: string
}