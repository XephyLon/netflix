export interface Video {
    
    // adult: boolean
    // backdrop_path: string
    // genre_ids: number[]
    // id: number
    // original_language: string
    // original_title: string
    // overview: string
    // popularity: number
    // poster_path: string
    // release_date: string
    // title: string
    // video: boolean
    // vote_average: number
    // vote_count: number
    // name: string
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}


export interface movieData{
    page: number;
    results: Video[];
    total_pages: number;
    total_results: number;
}