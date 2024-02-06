import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchItems: []
    },
    reducers: {
        addSearch: (state, action) => {
            state.searchItems = action.payload
        }
    }
});

export const { addSearch } = searchSlice.actions;
export default searchSlice.reducer;