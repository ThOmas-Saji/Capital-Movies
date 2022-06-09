import { configureStore } from '@reduxjs/toolkit'
import { loginSlice, signupSlice } from './Auth/authSlice'

export const store = configureStore({
  reducer:{
    signup : signupSlice.reducer,
    login: loginSlice.reducer
  }
})
