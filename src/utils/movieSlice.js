import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        allMovies: null
    },
    reducers: {
        addAllMovies: (state, action) => {
            state.allMovies = action.payload
        }
    }
})

export const {addAllMovies} = movieSlice.actions;
export default movieSlice.reducer