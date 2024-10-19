import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from '../features/slices/Sliderslice'
export const store = configureStore({
    reducer: {
        slider: sliderReducer,
    },
})