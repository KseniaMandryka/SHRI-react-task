import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  endpoints: (builder) => ({
    getFilms: builder.query({ query: () => "movies"}),
    getFilm: builder.query({ query: (filmId) => `movie?movieId=${filmId}`}),
    getCinemas: builder.query({query: () => "cinemas"}),
    getFilmsInCinema: builder.query({query: (cinemaId) => cinemaId ? `movies?cinemaId=${cinemaId}` : "movies"}),
    getFeedback: builder.query({query: (filmId) => `reviews?movieId=${filmId}`}),
  }),
})


export const { useGetFilmsQuery, useGetFilmQuery, useGetCinemasQuery, useGetFilmsInCinemaQuery, useGetFeedbackQuery } = movieApi