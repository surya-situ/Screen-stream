import { createSlice } from "@reduxjs/toolkit";

const soundSlice = createSlice({
    name: 'sound',
    initialState: {
        isMuted: true,
    },
    reducers: {
        toggleMute: (state) => {
            state.isMuted = !state.isMuted;
        },
    }
});

export const {toggleMute} = soundSlice.actions;
export default soundSlice.reducer;