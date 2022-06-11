import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// fetching popular movies
export const getPopularMovies = createAsyncThunk(
  "POPULAR_MOVIES/getPopularMovies",
  async (args, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=430a62f950fea28642aee10a67ff9b53"
      );
      return data.results;
    } catch (err) {
      rejectWithValue(err.message);
    }
  }
);

export const popularMoviesSlice = createSlice({
  name: "POPULAR_MOVIES",
  initialState: {
    loading2: false,
    error: false,
    success: false,
    data: [],
  },
  reducers: {},
  extraReducers: {
    [getPopularMovies.pending]: (state, { payload }) => {
      state.loading2 = true;
    },
    [getPopularMovies.fulfilled]: (state, { payload }) => {
      state.loading2 = false;
      state.error = false;
      state.success = true;
      state.data = payload;
    },
    [getPopularMovies.pending]: (state, { payload }) => {
      state.loading2 = false;
      state.error = true;
      state.success = false;
      state.data = payload;
    },
  },
});

// fetch latest Movies
export const getLatestMovies = createAsyncThunk(
  "LATEST_MOVIES/getLatestMovies",
  async (args, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        // "https://api.themoviedb.org/3/discover/movie?api_key=430a62f950fea28642aee10a67ff9b53&language=en-US&sort_by=revenue.asc&include_adult=false&include_video=false&page=1&primary_release_year=2022&primary_release_date.gte=2022&primary_release_date.lte=2022&with_watch_monetization_types=flatrate"
        'https://api.themoviedb.org/3/movie/upcoming?api_key=c45cb24ed784069fcbc37dac1de06142&language=en-US&page=1'
      );
      return data.results;
    } catch (err) {
      rejectWithValue(err.message);
    }
  }
);

export const latestMoviesSlice = createSlice({
  name: "LATEST_MOVIES",
  initialState: {
    loading2: false,
    error: false,
    success: false,
    data: [],
  },
  reducers: {},
  extraReducers: {
    [getLatestMovies.pending]: (state, { payload }) => {
      state.loading2 = true;
    },
    [getLatestMovies.fulfilled]: (state, { payload }) => {
      state.loading2 = false;
      state.error = false;
      state.success = true;
      state.data = payload;
    },
    [getLatestMovies.pending]: (state, { payload }) => {
      state.loading2 = false;
      state.error = true;
      state.success = false;
      state.data = payload;
    },
  },
});
