import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        allMovies: null,
        movieTrailer: null,
        popularMovies: [],
        topRatedMovies: [],
        upcomingMovies: [],
        movieVideo: [],
        trendingMovies: []
    },
    reducers: {
        addAllMovies: (state, action) => {
            state.allMovies = action.payload
        },
        addMovieTrailer: (state, action) => {
            state.movieTrailer = action.payload
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload
        },
        addMovieVideo: (state, action) => {
            state.movieVideo = action.payload
        },
        addTrendingMovies: (state, action) => {
            state.trendingMovies = action.payload
        }
    }
})

export const {addAllMovies, addMovieTrailer, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addMovieVideo, addTrendingMovies} = movieSlice.actions;
export default movieSlice.reducer;