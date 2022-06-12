import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Signup Slice
export const postSignupData = createAsyncThunk(
  "SIGNUP/getData",
  async (formData, { rejectWithValue }) => {
    try {
      await axios.post("http://localhost:9876/register", formData);
      alert("Signup success");
      window.location.reload(false);
      return;
    } catch (err) {
      alert(err.message);
      window.location.reload(false)
      rejectWithValue(err);
    }
  }
);

export const signupSlice = createSlice({
  name: "SIGNUP",
  initialState: {
    loading: false,
    error: false,
    success: false,
    data: [],
  },
  reducers: {},
  extraReducers: {
    [postSignupData.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [postSignupData.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
    },
    [postSignupData.rejected]: (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = true;
      state.data = payload;
    },
  },
});

// Login Slice
export const getLoginUser = createAsyncThunk(
  "LOGIN/getUser",
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        "http://localhost:9876/login",
        formData
      );
      alert("Login success");
      return data;
    } catch (err) {
      alert(err.message);
      window.location.reload(false)
      rejectWithValue(err);
    }
  }
);

export const loginSlice = createSlice({
  name: "LOGIN",
  initialState: {
    loading2: false,
    error: false,
    success: false,
    data: [],
  },
  reducers: {},
  extraReducers: {
    [getLoginUser.pending]: (state, { payload }) => {
      state.loading2 = true;
    },
    [getLoginUser.fulfilled]: (state, { payload }) => {
      state.loading2 = false;
      state.success = true;
      state.data = payload;
    },
    [getLoginUser.rejected]: (state, { payload }) => {
      state.loading2 = false;
      state.success = false;
      state.error = true;
      state.data = payload;
    },
  },
});
