import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// add Fav Slice
export const postFavData = createAsyncThunk(
  "ADD_FAV/postData",
  async (formData, { rejectWithValue }) => {
    try {
      await axios.post("http://localhost:9876/favourites", formData);
      return;
    } catch (err) {
      alert(err.message);
      rejectWithValue(err);
    }
  }
);

export const favouriteSlice = createSlice({
  name: "ADD_FAV",
  initialState: {
    loading: false,
    error: false,
    success: false,
    data: [],
  },
  reducers: {},
  extraReducers: {
    [postFavData.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [postFavData.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
    },
    [postFavData.rejected]: (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = true;
      state.data = payload;
    },
  },
});

// add Fav Slice
export const deleteFavData = createAsyncThunk(
  "REMOVE_FAV/deleteData",
  async (formData, { rejectWithValue }) => {
    try {
      await axios.post("http://localhost:9876/favourites/delete", formData);
      return;
    } catch (err) {
      alert(err.message);
      rejectWithValue(err);
    }
  }
);

export const favouriteSliceDel = createSlice({
  name: "REMOVE_FAV",
  initialState: {
    loading: false,
    error: false,
    success: false,
    data: [],
  },
  reducers: {},
  extraReducers: {
    [postFavData.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [postFavData.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
    },
    [postFavData.rejected]: (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = true;
      state.data = payload;
    },
  },
});
// add Fav Slice
export const getFavData = createAsyncThunk(
  "GET_FAV/getData",
  async (_id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `http://localhost:9876/favourites/${_id}`
      );
      return data;
    } catch (err) {
      alert(err.message);
      rejectWithValue(err);
    }
  }
);

export const getFavouriteSlice = createSlice({
  name: "GET_FAV",
  initialState: {
    loading: false,
    error: false,
    success: false,
    data: [],
  },
  reducers: {},
  extraReducers: {
    [getFavData.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getFavData.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.error = false;
      state.data = payload;
    },
    [getFavData.rejected]: (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = true;
      state.data = payload;
    },
  },
});
