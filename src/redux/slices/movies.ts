import {createAction, createSlice} from "@reduxjs/toolkit";

const initialState: {
    movies: {
        page: number,
        results: {
            id: number,
            genre_ids: number[],
            title: string,
            backdrop_path: string,
        }[]
        total_pages: number,
        total_results: number,
    } | null,
    status: 'idle' | 'loading' | 'failed' | 'success',
    error: any
} = {
    movies: null,
    status: "idle",
    error: null,
}

export const actionTypes = {
    FETCH_MOVIES: "movies/fetchMovies",
    SEARCH_MOVIES: "movies/searchMovies",
}

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        moviesLoaded: (state, action) => {
            state.movies = action.payload
            state.status = 'success'
        },
        moviesLoading: (state) => {
            state.status = 'loading';
            state.movies = null;
        },
        moviesLoadFailed: (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        }
    },
    selectors: {
        getMovies: (state) => state.movies
    }
});

export const fetchMovies = createAction(actionTypes.FETCH_MOVIES,
    (page: number) => ({payload: {page}}));

export default moviesSlice.reducer;

export const {
    moviesLoaded,
    moviesLoadFailed,
    moviesLoading,
} = moviesSlice.actions

export const {
    getMovies
} = moviesSlice.selectors