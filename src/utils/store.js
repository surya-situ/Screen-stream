import { configureStore } from "@reduxjs/toolkit";

import moviesReducer from './movieSlice';
import tvReducer from './tvSlice'
import soundReducer from './soundSlice';
import peopleReducer from './peopleSlice';
import searchReducer from './searchSlice'

const appStore = configureStore(
    {
        reducer: {
            movies: moviesReducer,
            tv: tvReducer,
            people: peopleReducer,
            sound: soundReducer,
            search: searchReducer
        }
    }
)

export default appStore;