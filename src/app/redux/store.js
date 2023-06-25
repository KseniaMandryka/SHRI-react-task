import { configureStore } from "@reduxjs/toolkit"
import { movieApi } from "../services/movieApi"
import { counterSlice } from "./counterSlice"

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    counter: counterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat([movieApi.middleware]),
})

