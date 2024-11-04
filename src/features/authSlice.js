import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login, signup } from "../services/authService";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, thunkAPI) => {
    try {
      const response = await login(credentials);
      localStorage.setItem("token", response.token);
      localStorage.setItem("username", response.username);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (userData, thunkAPI) => {
    try {
      const response = await signup(userData);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token") || null,
    isAuthenticated: !!localStorage.getItem("token"),
    loading: false,
    error: null,
    signupError: null,
    username: localStorage.getItem("username") || null,
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      state.token = null;
      state.isAuthenticated = false;
      state.username = null;
    },
    clearSignupError: (state) => {
      state.signupError = null;
    },
    clearLoginError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.username = action.payload.username;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signupUser.pending, (state, action) => {
        state.loading = true;
        state.signupError = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.username = action.payload.username;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.signupError = action.payload;
      });
  },
});

export const { logout, clearSignupError, clearLoginError } = authSlice.actions;
export default authSlice.reducer;
