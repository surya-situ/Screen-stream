import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
    name: 'people',
    initialState: {
        popularPeople: []
    },
    reducers: {
        addPopularPeople: (state, action) => {
            state.popularPeople = action.payload
        }
    }
});

export const { addPopularPeople } = peopleSlice.actions;
export default peopleSlice.reducer;