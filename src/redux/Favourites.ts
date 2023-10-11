import {  PayloadAction, createSlice } from "@reduxjs/toolkit";
import { singleMovie } from "../types/App";


const FavouritesSlice = createSlice({
    name: 'FavouritesSlice',
    initialState: {
        Favourites: [] as singleMovie[]
    },
    reducers: {
        addFavourite: (state, action: PayloadAction<singleMovie>) => {
        const existingMovie  = state.Favourites.find(
            (movie: singleMovie) => movie.id === action.payload.id
        )
        if (existingMovie) {
            state.Favourites = state.Favourites.filter(
            (movie: singleMovie) => movie.id !== action.payload.id
            )
        } else state.Favourites.push(action.payload);
        },
        filteredFavouritesArray: (state, action: PayloadAction<singleMovie[]>) => {
            state.Favourites = action.payload
        }
    }
})
export const { addFavourite,filteredFavouritesArray } = FavouritesSlice.actions
export const FavouritesReducer = FavouritesSlice.reducer