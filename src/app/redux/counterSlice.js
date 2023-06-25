import { createSlice } from "@reduxjs/toolkit"

export const counterSlice = createSlice({
  name: "counter",
  initialState: {},
  reducers: {
    increment: (state, action) => {
      state[action.payload] ??= 0
      state[action.payload]++
    },

    decrement: (state, action) => {
      state[action.payload]--
    },

    deleteFilm: (state, action) => {
      state[action.payload] = 0
    },
  }
})





