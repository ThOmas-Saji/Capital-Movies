import { configureStore } from '@reduxjs/toolkit'
import { loginSlice, signupSlice } from './Auth/authSlice'
import { favouriteSlice, getFavouriteSlice } from './Movies/favouriteSlice'
import { popularMoviesSlice, latestMoviesSlice } from './Movies/fetchMovies'

export const store = configureStore({
  reducer:{
    signup : signupSlice.reducer,
    login: loginSlice.reducer,
    popularMovies: popularMoviesSlice.reducer,
    latestMovies : latestMoviesSlice.reducer,
    favouriteMovies: favouriteSlice.reducer,
    getFavouriteData : getFavouriteSlice.reducer
  }
})
