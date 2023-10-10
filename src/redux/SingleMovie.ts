import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name: 'singleMovie',
    initialState:{movie:{}},
    reducers: {
        getMovie: (state, action) => {
            state.movie = action.payload
        },
        resetMovie: (state) => {
            state.movie = {}
        }
    }
})

export const { getMovie,resetMovie } = MovieSlice.actions
export const MovieReducer = MovieSlice.reducer