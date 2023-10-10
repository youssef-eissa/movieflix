import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



const popularMoviesApi = createApi({
    reducerPath: 'popularMovies',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
    endpoints: (builder) => ({
        getPopularMovies: builder.query({
            query: () => '/movie/popular?api_key=e5a319653f57fe3b2a8b69afa1a4377f'
        })
    })
})

export default popularMoviesApi
export const { useGetPopularMoviesQuery } = popularMoviesApi