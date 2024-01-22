import { configureStore } from "@reduxjs/toolkit";

import moviesReducer from './movieSlice';
import tvReducer from './tvSlice'
import soundReducer from './soundSlice';
import peopleReducer from './peopleSlice';

const appStore = configureStore(
    {
        reducer: {
            movies: moviesReducer,
            tv: tvReducer,
            people: peopleReducer,
            sound: soundReducer,
        }
    }
)

export default appStore;