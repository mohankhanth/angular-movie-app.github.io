export interface Moviets {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path?: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    revenue: number;
    runtime: number;
    status: string;
    genres: Genres[]
}

export interface MovieDo {
    dates: {
        maximum: string;
        minimum: string;
      },
    page: number;
    results: Moviets[];
    total_results: number;
    total_pages: number;
}

export interface Genres {
    id: number;
    name: string;
}

export interface MovieVideo {
    id: number;
    results: MovieVideoDo[];
}
export interface MovieVideoDo {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: Date;
    id: string;
}

export interface MovieImageObject {
    id: number;
    backdrops: MovieImageBackdrop[];
    posters: Poster[];
}

export interface MovieImageBackdrop {
    aspect_ratio: number;
    file_path: string;
    height: number;
    iso_639_1?: any;
    vote_average: number;
    vote_count: number;
    width: number;
}

export interface Poster {
    aspect_ratio: number;
    file_path: string;
    height: number;
    iso_639_1: string;
    vote_average: number;
    vote_count: number;
    width: number;
}

export interface CastCrewObject {
    id: number;
    cast: Cast[];
    crew: Crew[];
}

export interface Cast {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
}

export interface Crew {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    credit_id: string;
    department: string;
    job: string;
}

