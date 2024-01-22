import { createSlice } from "@reduxjs/toolkit";

const tvSlice = createSlice({
    name: 'tv',
    initialState: {
        airingToday: [],
        onTheAirTv: [],
        popularTv: [],
        topRatedTv: []
    },
    reducers: {
        addAiringToday: (state,action) => {
            state.airingToday = action.payload
        },
        addOnTheAirTv: (state, action) => {
            state.onTheAirTv = action.payload
        },
        addPopularTv: (state, action) => {
            state.popularTv = action.payload
        },
        addTopRatedTv: (state, action) => {
            state.topRatedTv = action.payload
        }
    }
});

export const {addAiringToday, addOnTheAirTv, addPopularTv, addTopRatedTv} = tvSlice.actions;
export default tvSlice.reducer;