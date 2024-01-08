import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        allMovies: null,
        movieTrailer: null
    },
    reducers: {
        addAllMovies: (state, action) => {
            state.allMovies = action.payload
        },
        addMovieTrailer: (state, action) => {
            state.movieTrailer = action.payload
        }
    }
})

export const {addAllMovies, addMovieTrailer} = movieSlice.actions;
export default movieSlice.reducer