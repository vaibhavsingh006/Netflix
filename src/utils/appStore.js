import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './userSlice';
import moviesReducer from './movieSlice';
import gptReducer from "./gptSlice"
import configReducer from './configSlice';

const appStore = configureStore({
    reducer: {
        users: usersReducer,
        movies: moviesReducer,
        gpt: gptReducer,
        config: configReducer
    }
})

export default appStore;